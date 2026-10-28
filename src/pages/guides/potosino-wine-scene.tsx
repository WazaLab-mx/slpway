import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import SEO from '@/components/common/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import LastUpdated from '@/components/common/LastUpdated';
import AdUnit from '@/components/common/AdUnit';

// Wine regions data
const wineRegions = [
  {
    id: "moctezuma-valley",
    name: "Moctezuma Valley (Altiplano)",
    description: "A semi-arid high-plateau valley west of the capital that is home to the state's largest winery and a wide spread of red, white and sparkling wines.",
    imageUrl: "/images/sponsored/potosino-wine.jpg",
    bestVarietals: "Cabernet Sauvignon, Merlot, Tempranillo, Nebbiolo, Chardonnay, Sauvignon Blanc",
    bestFor: "The state's largest vineyard and traditional-method sparkling wine",
    aroma: "dry desert scrub and sun-warmed earth",
    wineries: [
      {
        name: "Cava Quintanilla",
        note: "On the Moctezuma–Villa de Arista road, this is by far the state's largest winery, with about 120 hectares of vines. Its flagship label is Laberinto, and it also makes a sparkling wine by the traditional method."
      }
    ],
    culturalNotes: "Founder Carlos Quintanilla was a vegetable grower who planted French vines in 2011 as an experiment after a trip to France. Within a decade his wines were winning international medals, proving the Altiplano could grow serious wine."
  },
  {
    id: "capital-outskirts",
    name: "Around the Capital (Soledad and nearby haciendas)",
    description: "Vineyards on old hacienda land roughly 20 minutes from downtown San Luis Potosí, at around 1,870 meters above sea level, where most of the state's boutique wineries are found.",
    imageUrl: "/images/sponsored/wine-highlands.jpg",
    bestVarietals: "Syrah, Malbec, Cabernet Sauvignon, Merlot, Grenache, Sauvignon Blanc",
    bestFor: "Boutique wineries, hacienda settings and easy half-day trips",
    aroma: "wild herbs and dry high-desert air",
    wineries: [
      {
        name: "Pozo de Luna",
        note: "Built around the former Hacienda El Jaralito in Soledad de Graciano Sánchez, minutes from the airport, with about 15 hectares of vines planted from French stock. Tastings and vineyard tours are by reservation."
      },
      {
        name: "Bodega 1881",
        note: "Producing wine since 2012, it takes its name from a plaque on a former chile-drying building of the Hacienda Santa Ana. It grows Malbec, Cabernet Sauvignon, Syrah and Grenache."
      },
      {
        name: "Viña Cordelia",
        note: "The Abella family, Spanish immigrants who fled the Civil War, began making wine here in the mid-20th century. Its decades-old vines still produce the house dessert wine, Mistela de Cordelia."
      }
    ],
    culturalNotes: "Vines are not new to San Luis Potosí: colonial missionaries planted grapes here, and Viña Cordelia has been making wine for decades. The modern commercial wave, though, dates mainly from the 2010s, when growers imported vines from France."
  }
];

const WineScenePage: NextPage = () => {

  return (
    <>
      <SEO
        title="Discover the Potosino Wine Scene | Sponsored by La Gran Vía"
        ogTitle="The desert wine region nobody's talking about yet"
        description="Explore the emerging wine regions of San Luis Potosí, from boutique vineyards to stunning wineries, and discover the unique terroir that's putting Potosino wines on the map."
        keywords="San Luis Potosí wine, Potosino vineyards, Mexican wine regions, wine tourism Mexico, Cava Quintanilla, Pozo de Luna, Festival Internacional del Vino SLP, wine tasting in SLP, La Gran Vía restaurant"
        ogImage="/images/sponsored/potosino-wine.jpg"
        ogType="article"
        article={{ publishedTime: '2026-04-07', modifiedTime: '2026-07-14' }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: "The desert wine region nobody's talking about yet",
              description:
                "San Luis Potosí's emerging wine scene: boutique vineyards, high-altitude terroir and where to taste Potosino wines.",
              image: 'https://www.sanluisway.com/images/sponsored/potosino-wine.jpg',
              datePublished: '2026-04-07',
              dateModified: '2026-07-14',
              author: {
                '@type': 'Person',
                '@id': 'https://www.sanluisway.com/authors/mariana-cordero#person',
                name: 'Mariana Cordero',
                url: 'https://www.sanluisway.com/authors/mariana-cordero',
              },
              publisher: {
                '@type': 'Organization',
                '@id': 'https://www.sanluisway.com/#organization',
                name: 'San Luis Way',
                logo: { '@type': 'ImageObject', url: 'https://www.sanluisway.com/og-image.jpg' },
              },
              mainEntityOfPage: 'https://www.sanluisway.com/guides/potosino-wine-scene',
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/sponsored/potosino-wine.jpg"
          alt="Candlelit wine cellar with oak barrels at a Potosino winery"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-red-300/90 text-xs font-medium tracking-wide">
              Editorial guide · In partnership with La Gran Vía
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Discover the Potosino Wine Scene
            </h1>
            <LastUpdated date="2026-04-07" className="text-gray-200 mb-4" />
            <p className="text-lg text-gray-200 mb-4">
              The sun dips below the horizon as you raise your glass, capturing the last golden rays through the ruby-red Tempranillo in your hand. Here, in the emerging vineyards of San Luis Potosí, you're witnessing one of Mexico's newest wine stories—one that a few local families have been quietly crafting for decades, now finally ready to be savored and shared.
            </p>
            <p className="text-lg text-gray-200 mb-4">
              Beyond its rich cultural heritage and stunning landscapes, San Luis Potosí harbors a blossoming wine scene that's capturing the attention of enthusiasts and connoisseurs. Join us on a journey through the region's emerging vineyards, curated by <Link href="https://lagranviaslp.com/" className="text-red-300 hover:underline font-medium" target="_blank" rel="noopener noreferrer">La Gran Vía</Link>, where ancient lands and modern techniques are producing uniquely Potosino expressions of the vine.
            </p>
            <p className="text-lg text-gray-200 mb-4">
              The state is home to a small but growing group of wineries, each offering a distinct taste of the land. From the large Altiplano vineyards of the Moctezuma Valley to the boutique hacienda wineries just outside the capital, San Luis Potosí rewards curious wine lovers.
            </p>
            <p className="text-lg text-gray-200 mb-4">
              Each spring the capital hosts the Festival Internacional del Vino de San Luis Potosí, whose 14th edition was held at the Centro de las Artes on May 29–30, 2026, alongside harvest celebrations at individual wineries. These events are a sign of the region's growing reputation, drawing wine lovers to experience the flavors and cultural heritage of San Luis Potosí.
            </p>
            <div className="flex justify-center mt-6">
              <a
                href="https://lagranviaslp.com/"
                className="bg-red-800 text-white py-2 px-6 rounded-lg shadow hover:bg-red-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit La Gran Vía
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About La Gran Vía & Wine Pairings */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 relative h-64">
              <Image
                src="/images/brands/la-gran-via-logo.jpg"
                alt="La Gran Vía Logo"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About La Gran Vía & Wine Pairings</h2>
              <p className="text-gray-700 mb-4">
                You push open the door of La Gran Vía, on Avenida Venustiano Carranza 560, and are immediately enveloped in the warm aromas of saffron, garlic, and the Spanish tradition the restaurant has served since it opened in 1979. The restaurant has been a cornerstone of San Luis Potosí's culinary scene, specializing in Spanish and international cuisine, and recognized as one of Mexico's "100 Imperdibles" (100 Must-Visit Places) in 2017.
              </p>
              <p className="text-gray-700 mb-4">
                As you settle into your chair, think about what to pour with the paella, one of the house classics. A medium-bodied red such as Tempranillo, a grape now grown in the Potosino Altiplano, balances its rich, savory flavors—a meeting of Spanish culinary tradition and the wine-growing ambitions of San Luis Potosí.
              </p>
              <p className="text-gray-700 mb-4">
                Later, a crisp Sauvignon Blanc, a variety grown at Potosino wineries such as Pozo de Luna, shows how vibrant acidity cuts through the creamy texture of a traditional Spanish tortilla. Each sip and bite reveals new dimensions of flavor, telling the story of this unique culinary landscape.
              </p>
              <p className="text-gray-700 mb-4">
                For those seeking a more immersive experience, ask the staff to suggest wines to pair with each course, and whether a Potosino label is on the list that day. As you sip and savor, you'll find that each pairing tells a story, weaving together the flavors of the land with the artistry of the kitchen—a journey of taste that stays with you long after the last glass is empty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8"><AdUnit placement="mid-content" /></section>

      {/* Wine Regions List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">A Journey Through Potosino Wine Regions</h2>

          {wineRegions.map((region, index) => (
            <div key={region.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16 pb-16 ${index < wineRegions.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="relative h-72 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={region.imageUrl}
                    alt={`${region.name} - Vineyard view`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{region.name}</h3>
                <p className="text-gray-700 mb-6">{region.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">A Taste of the Region</h4>
                  <p className="text-gray-600">As you wander through the {region.name}, the air carries hints of {region.aroma}. The wines here reflect their surroundings, with {region.bestVarietals} expressing the soul of this unique landscape.</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Best Varietals</h4>
                  <p className="text-gray-600">{region.bestVarietals}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Known For</h4>
                  <p className="text-gray-600">{region.bestFor}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Wineries to Visit</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {region.wineries.map((winery) => (
                      <li key={winery.name}>
                        <span className="font-medium">{winery.name}</span> - {winery.note}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Cultural Notes</h4>
                  <p className="text-gray-700">{region.culturalNotes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine Tourism Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Your Wine Journey Awaits</h2>
            <p className="text-gray-700 mb-8 text-center">
              The sun is setting as you stand among the vines, glass in hand, listening to the passionate winemaker describe how this very slope catches the morning light just right. This is wine tourism in San Luis Potosí—intimate, authentic, and far from the crowds of more established regions. Here's how to craft your own viticultural adventure:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Guided Wine Tours</h3>
                <p className="text-gray-700 mb-4">
                  San Luis Potosí does not yet have an established wine route, so the best way to visit is to book directly with the wineries that receive guests.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Pozo de Luna: tastings and vineyard tours by reservation</li>
                  <li>Cava Quintanilla: contact the winery for visits and harvest events</li>
                  <li>Ask your hotel about private drivers for winery day trips</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Wine Festivals</h3>
                <p className="text-gray-700 mb-4">
                  San Luis Potosí hosts wine events where you can sample local vintages and meet the winemakers.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Festival Internacional del Vino de San Luis Potosí (spring; the 2026 edition ran May 29–30 at the Centro de las Artes)</li>
                  <li>Harvest festivals (vendimias) hosted by individual wineries such as Cava Quintanilla</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning Your Visit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Best Time to Visit</h4>
                  <p className="text-gray-600 mb-4">
                    The dry months from October to May offer the most comfortable weather. Late summer is harvest season, when wineries may host vendimia events.
                  </p>

                  <h4 className="font-medium text-gray-900 mb-2">Getting Around</h4>
                  <p className="text-gray-600">
                    Wineries near the capital are about 20 minutes from downtown, while the Moctezuma Valley is roughly an hour's drive. Consider hiring a driver.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Reservations</h4>
                  <p className="text-gray-600 mb-4">
                    Visits are generally by reservation only, so contact the winery well before your trip.
                  </p>

                  <h4 className="font-medium text-gray-900 mb-2">What to Bring</h4>
                  <p className="text-gray-600">
                    Sun protection, comfortable shoes, and a designated driver or tour reservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 mb-8"><AdUnit placement="top-banner" /></section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-red-800 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Wines of San Luis Potosí</h2>
          <p className="max-w-2xl mx-auto mb-8">
            From boutique vineyards to innovative winemaking techniques, the Potosino wine scene offers a fresh perspective on Mexican viticulture. Sample a selection at La Gran Vía restaurant or plan your own wine tour to discover why enthusiasts are taking notice of this emerging region.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://lagranviaslp.com/"
              className="inline-block bg-white text-red-800 font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve at La Gran Vía
            </a>
            <Link
              href="/contact"
              className="inline-block bg-transparent border border-white text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-white/10 transition-colors"
            >
              Plan Your Wine Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ }) => {
  return {
    props: {
    },
  };
};

export default WineScenePage;