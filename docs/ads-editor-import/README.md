# Google Ads Editor — Bulk Import Guide

7 CSVs lista para importar a la cuenta `2722801548` (drunkenberger@gmail.com / MCC `1333448633`).
Crean 2 campañas Search en estado **Pausada**, listas para revisar y publicar.

---

## 1. Descargar e instalar Google Ads Editor

**Windows:** https://ads.google.com/intl/es-419_mx/home/tools/ads-editor/

Es app de escritorio de Google, gratis, oficial.

---

## 2. Login + descargar la cuenta

1. Abrir Editor → **+ Cuenta** → entrar con `drunkenberger@gmail.com`
2. Te muestra el MCC y las cuentas. Selecciona **`2722801548`** (San Luis Way).
3. Click **Cargar todo** (descarga la estructura actual — vacía, debería tardar 10 segundos).

---

## 3. Importar los 7 CSVs (en orden estricto)

El orden importa porque cada CSV depende del anterior.

Para cada CSV: **Cuenta → Importar → Desde archivo** → selecciona el CSV → revisar cambios propuestos → **Conservar**.

### Orden de importación

| # | Archivo | Crea |
|---|---|---|
| 1 | `01-campaigns.csv` | 2 campañas |
| 2 | `02-ad-groups.csv` | 5 ad groups |
| 3 | `03-keywords.csv` | 35 keywords |
| 4 | `04-negative-keywords.csv` | 28 negativos |
| 5 | `05-responsive-search-ads.csv` | 5 RSAs |
| 6 | `06-sitelinks.csv` | 4 sitelinks |
| 7 | `07-callouts.csv` | 4 callouts |

Después de cada import, Editor muestra los cambios pendientes en el panel inferior. Revísalos y dale **Conservar cambios**. Si algo se ve raro, descártalo y avísame.

---

## 4. Configurar lo que el CSV no incluye (5 min)

El CSV no carga ubicaciones ni segmentación geográfica avanzada. Hay que ponerlas en Editor:

### Campaña 1 — `Search-ES-Local-Mexico-2026`
1. Click la campaña en el árbol izquierdo.
2. Pestaña **Ubicaciones** abajo → **+ Agregar ubicación**:
   - San Luis Potosí (ciudad de SLP)
   - Soledad de Graciano Sánchez
   - Ciudad de México
   - Guadalajara
   - Monterrey
   - Querétaro
   - León (Guanajuato)
3. **Opciones de ubicación** → "Presencia: personas en o que visitan habitualmente la ubicación seleccionada"

### Campaña 2 — `Search-DE-JA-Expat-Moonshot`
1. Mismo flujo:
   - Alemania
   - Austria
   - Suiza
   - Japón
2. Opciones de ubicación → "Presencia"

---

## 5. Verificación pre-publish

Antes de publicar:
1. Click cada RSA → revisar **Resistencia del anuncio** (target: "Bueno" o "Excelente"). Si dice "Mala", agregar 2-3 títulos más.
2. Click cada Ad Group → confirmar **CPC máx**: $5 MXN (Visitar/Mudarse), $2 MXN (Brand), $8 MXN (DE/JA).
3. Click cada Campaña → confirmar **Presupuesto diario**: $50 MXN.
4. Verificar que **Networks** muestre solo "Búsqueda de Google" (sin Display, sin Socios).

---

## 6. Publicar

1. Botón **Publicar** arriba a la derecha.
2. Editor muestra el resumen de TODOS los cambios. Revisa una última vez.
3. Click **Publicar**.
4. Editor envía todo a Google Ads. Las campañas quedan **Pausadas** (como las cargamos).

---

## 7. Activar campañas

Las dejamos pausadas a propósito. Para arrancar:

**Opción recomendada (soft launch):**
1. Edita el presupuesto a **$30 MXN/día** las primeras 48h (para verificar que los anuncios pasen review).
2. Cambia status a **Activa**.
3. Republica.
4. Espera la aprobación (usualmente <2h).
5. Después de 48h sin issues, sube presupuesto a $50 MXN/día.

**Opción agresiva:** activar directo a $50 MXN/día.

---

## 8. Verificar conversion tracking

Antes de declarar "todo OK":
- Suscríbete con un correo de prueba en `https://www.sanluisway.com/es/subscribe`
- En Google Ads → Conversiones → "Newsletter Signup": debe mostrar +1 conversión en 24h
- Si NO marca, verificar que GA4 → Google Ads esté linkeado (Tools → Data Manager)

---

## 9. Troubleshooting

| Error en Editor | Causa | Fix |
|---|---|---|
| "El idioma del anuncio no coincide" | Editor detecta texto JA y campaign idioma EN/ES | OK que advierta — dale "Ignorar advertencia" |
| "Title supera 30 caracteres" | Char count incluye espacios | Recortar el headline en Editor |
| "Final URL no responde" | Caché DNS | Republicar — auto-resuelve |
| "Anuncio rechazado: trademark" | Alguna palabra entró por accidente | Verificar que NO diga "FIFA", "World Cup", "Mundial", "Copa del Mundo" |

---

## Archivos en este folder

- `01-campaigns.csv` — 2 campañas
- `02-ad-groups.csv` — 5 ad groups
- `03-keywords.csv` — 35 keywords (Phrase + Broad + Exact)
- `04-negative-keywords.csv` — 28 negativos
- `05-responsive-search-ads.csv` — 5 RSAs (1 por ad group)
- `06-sitelinks.csv` — 4 sitelinks (Campaña 1 ES)
- `07-callouts.csv` — 4 callouts (Campaña 1 ES)
- `README.md` — este documento
