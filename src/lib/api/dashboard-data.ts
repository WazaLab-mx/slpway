/**
 * Dashboard Data API utilities
 * Fetches real-time weather, exchange rate, and news headline data for TodayInSLP
 */

import { createClient } from '@supabase/supabase-js';

// San Luis Potosí coordinates
const SLP_LAT = 22.1565;
const SLP_LON = -100.9855;

// Supabase client for fetching headlines
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export interface WeatherData {
  temp: number;
  tempMin: number;
  tempMax: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  conditionEs: string;
  conditionEn: string;
  conditionJa: string;
  humidity: number;
  uvIndex: number;
  sunrise: string;
  sunset: string;
  icon: string;
}

export interface ExchangeRate {
  code: string;
  symbol: string;
  name: string;
  nameEn: string;
  rate: number;
  flag: string;
}

export interface NewsHeadline {
  id: string;
  textEs: string;
  textEn: string;
  textDe: string;
  textJa: string;
  summaryEs: string;
  summaryEn: string;
  summaryDe: string;
  summaryJa: string;
  source: string | null;
  sourceUrl: string | null;
}

export interface CommunityNews {
  id: string;
  titleEs: string;
  titleEn: string;
  titleDe: string;
  titleJa: string;
  summaryEs: string;
  summaryEn: string;
  summaryDe: string;
  summaryJa: string;
  category: 'social' | 'community' | 'culture' | 'local';
  imageUrl?: string;
  source?: string;
  sourceUrl?: string;
  publishedAt: string;
}

export interface DashboardData {
  weather: WeatherData | null;
  exchangeRates: ExchangeRate[];
  headlines: NewsHeadline[];
  communityNews: CommunityNews[];
  lastUpdated: string;
}

/**
 * Get seasonal fallback weather data for San Luis Potosí
 * Based on historical averages for the region
 */
function getSeasonalFallbackWeather(): WeatherData {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const hour = now.getHours();

  // Seasonal averages for SLP (semi-arid climate)
  // Winter (Dec-Feb): 8-20°C, dry
  // Spring (Mar-May): 12-28°C, dry
  // Summer (Jun-Sep): 15-25°C, rainy season
  // Fall (Oct-Nov): 10-22°C, transitional

  let temp: number, tempMin: number, tempMax: number;
  let condition: WeatherData['condition'] = 'sunny';
  let conditionEs = 'Despejado';
  let conditionEn = 'Clear';
  let conditionJa = '晴れ';

  if (month >= 11 || month <= 1) {
    // Winter
    temp = 14; tempMin = 8; tempMax = 20;
  } else if (month >= 2 && month <= 4) {
    // Spring
    temp = 20; tempMin = 12; tempMax = 28;
  } else if (month >= 5 && month <= 8) {
    // Summer (rainy season)
    temp = 20; tempMin = 15; tempMax = 25;
    condition = 'cloudy';
    conditionEs = 'Parcialmente nublado';
    conditionEn = 'Partly cloudy';
    conditionJa = '曇り';
  } else {
    // Fall
    temp = 16; tempMin = 10; tempMax = 22;
  }

  // Estimate UV index
  let uvIndex = 0;
  if (hour >= 10 && hour <= 16) {
    uvIndex = condition === 'sunny' ? 7 : 4;
  } else if (hour >= 7 && hour <= 18) {
    uvIndex = condition === 'sunny' ? 4 : 2;
  }

  return {
    temp,
    tempMin,
    tempMax,
    condition,
    conditionEs,
    conditionEn,
    conditionJa,
    humidity: month >= 5 && month <= 8 ? 65 : 45,
    uvIndex,
    sunrise: '07:15',
    sunset: '18:00',
    icon: condition === 'sunny' ? '01d' : '02d'
  };
}

/**
 * Fetch weather data from OpenWeatherMap API
 * Uses both current weather and forecast to get accurate daily min/max temps
 */
export async function fetchWeatherData(): Promise<WeatherData | null> {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!apiKey) {
    console.warn('OpenWeatherMap API key not configured. Using seasonal fallback data.');
    return getSeasonalFallbackWeather();
  }

  try {
    // Fetch both current weather and forecast in parallel
    const [currentRes, forecastRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${SLP_LAT}&lon=${SLP_LON}&units=metric&appid=${apiKey}`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SLP_LAT}&lon=${SLP_LON}&units=metric&appid=${apiKey}`)
    ]);

    if (!currentRes.ok) {
      const errorText = await currentRes.text();
      console.error('Weather API error:', currentRes.status, errorText);
      return getSeasonalFallbackWeather();
    }

    const current = await currentRes.json();

    // Get daily min/max from forecast data (next 24 hours)
    // The /weather endpoint only gives current moment temps, not daily range
    let tempMin = Math.round(current.main.temp);
    let tempMax = Math.round(current.main.temp);

    if (forecastRes.ok) {
      const forecastData = await forecastRes.json();
      const nowTimestamp = Date.now();
      const next24Hours = nowTimestamp + (24 * 60 * 60 * 1000);

      // Get forecasts for the next 24 hours (8 entries at 3-hour intervals)
      const targetForecasts = forecastData.list.filter((item: { dt: number }) => {
        const itemTimestamp = item.dt * 1000;
        return itemTimestamp >= nowTimestamp && itemTimestamp <= next24Hours;
      });

      if (targetForecasts.length > 0) {
        // Collect all temperature values for accurate min/max
        const allTemps: number[] = [current.main.temp];
        targetForecasts.forEach((f: { main: { temp: number; temp_min: number; temp_max: number } }) => {
          allTemps.push(f.main.temp);
          if (f.main.temp_min) allTemps.push(f.main.temp_min);
          if (f.main.temp_max) allTemps.push(f.main.temp_max);
        });

        tempMin = Math.round(Math.min(...allTemps));
        tempMax = Math.round(Math.max(...allTemps));
      }
    }

    // Map weather condition
    const weatherMain = current.weather[0]?.main?.toLowerCase() || 'clear';
    let condition: WeatherData['condition'] = 'sunny';
    let conditionEs = 'Despejado';
    let conditionEn = 'Clear';
    let conditionJa = '晴れ';

    if (weatherMain.includes('cloud')) {
      condition = 'cloudy';
      conditionEs = 'Nublado';
      conditionEn = 'Cloudy';
      conditionJa = '曇り';
    } else if (weatherMain.includes('rain') || weatherMain.includes('drizzle')) {
      condition = 'rainy';
      conditionEs = 'Lluvioso';
      conditionEn = 'Rainy';
      conditionJa = '雨';
    } else if (weatherMain.includes('thunder') || weatherMain.includes('storm')) {
      condition = 'stormy';
      conditionEs = 'Tormentoso';
      conditionEn = 'Stormy';
      conditionJa = '嵐';
    }

    // Format sunrise/sunset times
    const formatTime = (timestamp: number) => {
      const date = new Date(timestamp * 1000);
      return date.toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Mexico_City'
      });
    };

    // Estimate UV index based on weather and time (UV API is deprecated)
    const now = new Date();
    const hour = now.getHours();
    const isClear = condition === 'sunny';
    let uvIndex = 0;
    if (hour >= 10 && hour <= 16) {
      uvIndex = isClear ? 7 : 4; // Higher UV during midday if clear
    } else if (hour >= 7 && hour <= 18) {
      uvIndex = isClear ? 4 : 2;
    }

    return {
      temp: Math.round(current.main.temp),
      tempMin,
      tempMax,
      condition,
      conditionEs,
      conditionEn,
      conditionJa,
      humidity: current.main.humidity,
      uvIndex,
      sunrise: formatTime(current.sys.sunrise),
      sunset: formatTime(current.sys.sunset),
      icon: current.weather[0]?.icon || '01d'
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return getSeasonalFallbackWeather();
  }
}

export interface DailyForecast {
  date: string;
  dayName: string;
  tempMin: number;
  tempMax: number;
  condition: string;
  conditionEs: string;
  humidity: number;
  chanceOfRain: number;
}

export interface WeatherForecast {
  current: WeatherData;
  daily: DailyForecast[];
  summary: string;
  summaryEs: string;
}

/**
 * Fetch 5-day weather forecast from OpenWeatherMap API
 * Returns current weather + daily forecasts for the next 5 days
 */
export async function fetchWeatherForecast(): Promise<WeatherForecast | null> {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!apiKey) {
    console.warn('OpenWeatherMap API key not configured. Cannot fetch forecast.');
    return null;
  }

  try {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${SLP_LAT}&lon=${SLP_LON}&units=metric&appid=${apiKey}`;
    const forecastRes = await fetch(forecastUrl);

    if (!forecastRes.ok) {
      const errorText = await forecastRes.text();
      console.error('Forecast API error:', forecastRes.status, errorText);
      return null;
    }

    const forecastData = await forecastRes.json();

    // Get current weather first
    const current = await fetchWeatherData();
    if (!current) return null;

    // Process 3-hourly forecasts into daily summaries
    const dailyMap = new Map<string, {
      temps: number[];
      conditions: string[];
      humidity: number[];
      rain: number;
    }>();

    for (const item of forecastData.list) {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toISOString().split('T')[0];

      if (!dailyMap.has(dateKey)) {
        dailyMap.set(dateKey, { temps: [], conditions: [], humidity: [], rain: 0 });
      }

      const day = dailyMap.get(dateKey)!;
      day.temps.push(item.main.temp);
      day.conditions.push(item.weather[0]?.main || 'Clear');
      day.humidity.push(item.main.humidity);
      if (item.pop) day.rain = Math.max(day.rain, item.pop * 100);
    }

    // Convert to daily forecasts
    const daily: DailyForecast[] = [];
    const conditionMap: Record<string, string> = {
      'Clear': 'Despejado',
      'Clouds': 'Nublado',
      'Rain': 'Lluvia',
      'Drizzle': 'Llovizna',
      'Thunderstorm': 'Tormenta',
      'Snow': 'Nieve',
      'Mist': 'Neblina',
      'Fog': 'Niebla'
    };

    Array.from(dailyMap.entries()).forEach(([dateKey, data]) => {
      const date = new Date(dateKey);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'America/Mexico_City' });
      const tempMin = Math.round(Math.min(...data.temps));
      const tempMax = Math.round(Math.max(...data.temps));

      // Most common condition
      const conditionCounts = data.conditions.reduce((acc: Record<string, number>, c: string) => {
        acc[c] = (acc[c] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      const sortedConditions = Object.entries(conditionCounts).sort((a: [string, number], b: [string, number]) => b[1] - a[1]);
      const mainCondition = sortedConditions[0][0];

      daily.push({
        date: dateKey,
        dayName,
        tempMin,
        tempMax,
        condition: mainCondition,
        conditionEs: conditionMap[mainCondition] || mainCondition,
        humidity: Math.round(data.humidity.reduce((a: number, b: number) => a + b, 0) / data.humidity.length),
        chanceOfRain: Math.round(data.rain)
      });
    });

    // Generate summary
    const minTemp = Math.min(...daily.map(d => d.tempMin));
    const maxTemp = Math.max(...daily.map(d => d.tempMax));
    const hasRain = daily.some(d => d.chanceOfRain > 30);

    let summary = `Temperature range: ${minTemp}°C to ${maxTemp}°C.`;
    let summaryEs = `Rango de temperatura: ${minTemp}°C a ${maxTemp}°C.`;

    if (hasRain) {
      const rainyDays = daily.filter(d => d.chanceOfRain > 30).map(d => d.dayName);
      summary += ` Chance of rain on ${rainyDays.join(', ')}.`;
      summaryEs += ` Posibilidad de lluvia el ${rainyDays.join(', ')}.`;
    } else {
      summary += ' Mostly dry conditions expected.';
      summaryEs += ' Se esperan condiciones mayormente secas.';
    }

    return {
      current,
      daily: daily.slice(0, 7), // Limit to 7 days
      summary,
      summaryEs
    };
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    return null;
  }
}

/**
 * Fetch exchange rates from Frankfurter API (free, no key needed)
 * Returns rates for USD, EUR, GBP, JPY, CNY to MXN
 */
export async function fetchExchangeRates(): Promise<ExchangeRate[]> {
  try {
    // Frankfurter API - free and reliable
    const res = await fetch(
      'https://api.frankfurter.app/latest?from=MXN&to=USD,EUR,GBP,JPY,CNY'
    );

    if (!res.ok) throw new Error('Exchange rate API error');

    const data = await res.json();

    // Frankfurter returns how much foreign currency you get for 1 MXN
    // We need the inverse: how much MXN for 1 foreign currency
    const rates = data.rates;

    return [
      { code: 'USD', symbol: '$', name: 'Dólar', nameEn: 'US Dollar', rate: 1 / rates.USD, flag: '🇺🇸' },
      { code: 'EUR', symbol: '€', name: 'Euro', nameEn: 'Euro', rate: 1 / rates.EUR, flag: '🇪🇺' },
      { code: 'GBP', symbol: '£', name: 'Libra', nameEn: 'Pound', rate: 1 / rates.GBP, flag: '🇬🇧' },
      { code: 'JPY', symbol: '¥', name: 'Yen', nameEn: 'Yen', rate: 1 / rates.JPY, flag: '🇯🇵' },
      { code: 'CNY', symbol: '¥', name: 'Yuan', nameEn: 'Yuan', rate: 1 / rates.CNY, flag: '🇨🇳' }
    ];
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    // Return empty array on error - component should handle gracefully
    return [];
  }
}

/**
 * Fetch news headlines from Supabase
 * Returns empty array if no active data exists — never falls back to hardcoded content.
 */
export async function fetchHeadlines(): Promise<NewsHeadline[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase not configured for headlines');
    return [];
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from('news_headlines')
      .select('id, text_es, text_en, text_de, text_ja, summary_es, summary_en, summary_de, summary_ja, source, source_url')
      .eq('active', true)
      .or(`expires_at.is.null,expires_at.gt.${now}`)
      .order('priority', { ascending: true })
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Error fetching headlines:', error);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    return data.map(h => ({
      id: h.id,
      textEs: h.text_es,
      textEn: h.text_en,
      textDe: h.text_de || h.text_en,
      textJa: h.text_ja || h.text_en,
      summaryEs: h.summary_es || '',
      summaryEn: h.summary_en || '',
      summaryDe: h.summary_de || h.summary_en || '',
      summaryJa: h.summary_ja || h.summary_en || '',
      source: h.source,
      sourceUrl: h.source_url
    }));
  } catch (error) {
    console.error('Error fetching headlines:', error);
    return [];
  }
}

/**
 * Fetch community news from Supabase
 * Returns empty array if no active data exists — never falls back to hardcoded content.
 */
export async function fetchCommunityNews(): Promise<CommunityNews[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase not configured for community news');
    return [];
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from('community_news')
      .select('id, title_es, title_en, title_de, title_ja, summary_es, summary_en, summary_de, summary_ja, category, image_url, source, published_at')
      .eq('active', true)
      .or(`expires_at.is.null,expires_at.gt.${now}`)
      .order('priority', { ascending: true })
      .order('published_at', { ascending: false })
      .limit(3);

    if (error) {
      console.error('Error fetching community news:', error);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    return data.map(n => {
      const sourceValue: string | null = n.source ?? null;
      const isUrl = typeof sourceValue === 'string' && /^https?:\/\//i.test(sourceValue);
      return {
        id: n.id,
        titleEs: n.title_es,
        titleEn: n.title_en,
        titleDe: n.title_de || n.title_en,
        titleJa: n.title_ja || n.title_en,
        summaryEs: n.summary_es,
        summaryEn: n.summary_en,
        summaryDe: n.summary_de || n.summary_en,
        summaryJa: n.summary_ja || n.summary_en,
        category: n.category,
        imageUrl: n.image_url,
        source: !isUrl && sourceValue ? sourceValue : undefined,
        sourceUrl: isUrl && sourceValue ? sourceValue : undefined,
        publishedAt: n.published_at
      };
    });
  } catch (error) {
    console.error('Error fetching community news:', error);
    return [];
  }
}

/**
 * Fetch all dashboard data
 */
export async function fetchDashboardData(): Promise<DashboardData> {
  const [weather, exchangeRates, headlines, communityNews] = await Promise.all([
    fetchWeatherData(),
    fetchExchangeRates(),
    fetchHeadlines(),
    fetchCommunityNews()
  ]);

  return {
    weather,
    exchangeRates,
    headlines,
    communityNews,
    lastUpdated: new Date().toISOString()
  };
}
