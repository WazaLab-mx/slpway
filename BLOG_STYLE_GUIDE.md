# San Luis Way Blog Style Guide

> **Guía completa de estilos para mantener consistencia visual en todos los blog posts**

## 📋 Tabla de Contenidos

- [Estructura Base](#estructura-base)
- [Componentes de Navegación](#componentes-de-navegación)
- [Secciones y Headings](#secciones-y-headings)
- [Cajas de Contenido](#cajas-de-contenido)
- [Tablas](#tablas)
- [Listas y Checklists](#listas-y-checklists)
- [Enlaces y Referencias](#enlaces-y-referencias)
- [Blockquotes](#blockquotes)
- [Llamadas a la Acción](#llamadas-a-la-acción)
- [Ejemplos Completos](#ejemplos-completos)
- [Títulos para Google Discover](#títulos-para-google-discover-discover_title)

---

## Estructura Base

### Wrapper Principal
Todos los blog posts deben usar esta estructura base:

```html
<div class="prose prose-lg max-w-none">
  <!-- Todo el contenido del blog post aquí -->
</div>
```

### Introducción del Post
```html
<p class="text-lg text-gray-700 mb-8"><strong>Descripción principal del post en negritas</strong></p>
```

---

## Componentes de Navegación

### 1. Tabla de Contenidos (Obligatoria)
**Usar al inicio de cada post:**

```html
<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h2 class="text-xl font-semibold mb-4">Guía de Contenido</h2>
  <ul class="list-disc pl-6">
    <li><a href="#seccion-1" class="text-blue-600 hover:text-blue-800">Nombre de Sección 1</a></li>
    <li><a href="#seccion-2" class="text-blue-600 hover:text-blue-800">Nombre de Sección 2</a></li>
    <li><a href="#seccion-3" class="text-blue-600 hover:text-blue-800">Nombre de Sección 3</a></li>
  </ul>
</div>
```

### 2. Resumen de Puntos Clave
**Para highlights importantes:**

```html
<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-lg font-semibold mb-4 text-blue-900">Puntos Clave de esta Guía</h3>
  <ul class="list-disc pl-6 space-y-2">
    <li><strong>Punto 1</strong>: Descripción del punto importante</li>
    <li><strong>Punto 2</strong>: Otra información clave</li>
    <li><strong>Punto 3</strong>: Datos relevantes</li>
  </ul>
</div>
```

---

## Secciones y Headings

### Secciones Principales
```html
<section id="nombre-seccion" class="mb-12">
  <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Título de la Sección</h2>
  <p class="text-gray-700 mb-6">Descripción introductoria de la sección.</p>

  <!-- Contenido de la sección -->
</section>
```

### Subsecciones
```html
<div class="mb-8">
  <h3 class="text-2xl font-semibold mb-4 text-blue-900">Título de Subsección</h3>
  <!-- Contenido de subsección -->
</div>
```

### Subsecciones Menores
```html
<h4 class="text-xl font-semibold mb-3 text-gray-900">Título Menor</h4>
```

---

## Cajas de Contenido

### 1. Caja de Información General (Azul)
```html
<div class="bg-blue-50 p-6 rounded-lg mb-6">
  <h4 class="font-semibold mb-3 text-blue-900">📋 Título de Información</h4>
  <ul class="list-disc pl-6 text-blue-800 space-y-1">
    <li>Punto de información 1</li>
    <li>Punto de información 2</li>
  </ul>
</div>
```

### 2. Caja de Éxito/Confirmación (Verde)
```html
<div class="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
  <p class="text-green-800 font-medium">✅ Mensaje de éxito o confirmación</p>
</div>
```

### 3. Caja de Advertencia/Consejo (Amarilla)
```html
<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
  <h4 class="font-semibold text-yellow-800 mb-2">💡 Consejo importante:</h4>
  <p class="text-yellow-800">Descripción del consejo o advertencia.</p>
</div>
```

### 4. Caja de Información Crítica (Roja)
```html
<div class="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
  <h3 class="text-lg font-semibold mb-3 text-red-900">⚖️ Información Crítica</h3>
  <ul class="list-disc pl-6 text-red-800 space-y-2">
    <li><strong>Punto crítico 1:</strong> Explicación</li>
    <li><strong>Punto crítico 2:</strong> Explicación</li>
  </ul>
</div>
```

### 5. Grid de Información (2 columnas)
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  <div class="bg-blue-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold mb-4 text-blue-900">📋 Categoría 1</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>

  <div class="bg-green-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold mb-4 text-green-900">💰 Categoría 2</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
</div>
```

### 6. Grid de 3 Columnas (Para consejos/estrategias)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-yellow-50 p-6 rounded-lg">
    <h3 class="text-lg font-semibold mb-3 text-yellow-900">💡 Estrategia 1</h3>
    <p class="text-yellow-800">Descripción de la estrategia.</p>
  </div>

  <div class="bg-green-50 p-6 rounded-lg">
    <h3 class="text-lg font-semibold mb-3 text-green-900">🤝 Estrategia 2</h3>
    <p class="text-green-800">Descripción de la estrategia.</p>
  </div>

  <div class="bg-blue-50 p-6 rounded-lg">
    <h3 class="text-lg font-semibold mb-3 text-blue-900">⏰ Estrategia 3</h3>
    <p class="text-blue-800">Descripción de la estrategia.</p>
  </div>
</div>
```

---

## Tablas

### Tabla Estándar con Precios/Datos
```html
<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Columna 1</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Columna 2</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Columna 3</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dato 1</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dato 2</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dato 3</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Listas y Checklists

### Lista Ordenada con Pasos
```html
<div class="space-y-6">
  <div class="bg-white border-l-4 border-blue-500 shadow-sm rounded-lg p-6">
    <h3 class="text-xl font-semibold mb-3 text-blue-900">1. Paso Uno</h3>
    <p class="text-gray-700 mb-3">Descripción del paso.</p>
    <ul class="list-disc pl-6 text-gray-600">
      <li>Detalle específico 1</li>
      <li>Detalle específico 2</li>
    </ul>
  </div>
</div>
```

**Colores para diferentes pasos:**
- `border-blue-500` / `text-blue-900` - Primer paso
- `border-green-500` / `text-green-900` - Segundo paso
- `border-yellow-500` / `text-yellow-900` - Tercer paso
- `border-purple-500` / `text-purple-900` - Cuarto paso
- `border-red-500` / `text-red-900` - Quinto paso

### Checklist Interactiva
```html
<div class="bg-blue-50 p-6 rounded-lg">
  <h3 class="text-xl font-semibold mb-4 text-blue-900">🔧 Lista de Verificación</h3>
  <ul class="space-y-2">
    <li class="flex items-center">
      <span class="mr-3 text-blue-600">☐</span>
      <span>Item de verificación 1</span>
    </li>
    <li class="flex items-center">
      <span class="mr-3 text-blue-600">☐</span>
      <span>Item de verificación 2</span>
    </li>
  </ul>
</div>
```

---

## Enlaces y Referencias

### Enlaces Externos
```html
<a href="githuhttps://ejemplo.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Texto del enlace</a>
```

### Enlaces con Referencias Numeradas
```html
<a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline"><sup>[1]</sup></a>
```

### Enlaces Internos
```html
<a href="/contact" class="text-blue-600 hover:text-blue-800 underline font-semibold">Contactar Experto →</a>
```

---

## Blockquotes

### Cita/Testimonio
```html
<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
  <p>"Texto de la cita o testimonio aquí." - Nombre del autor <a href="fuente.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline"><sup>[1]</sup></a></p>
</blockquote>
```

---

## Llamadas a la Acción

### CTA de Continuación (Azul)
```html
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
  <p class="text-blue-800"><strong>✨ ¡Continúa leyendo para conocer más sobre [tema] y [otros aspectos importantes]!</strong></p>
</div>
```

### CTA de Recursos (Azul con enlaces)
```html
<div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
  <h3 class="text-lg font-semibold mb-3 text-blue-900">🔗 Recursos Adicionales</h3>
  <ul class="list-disc pl-6 text-blue-800 space-y-2">
    <li><a href="https://ejemplo1.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Recurso 1</a></li>
    <li><a href="https://ejemplo2.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Recurso 2</a></li>
  </ul>
</div>
```

### CTA de Contacto (Verde)
```html
<div class="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
  <h3 class="text-lg font-semibold mb-3 text-green-900">¿Necesitas Ayuda Personalizada?</h3>
  <p class="text-green-800 mb-3"><strong>Nuestros expertos pueden ayudarte con [servicio específico].</strong></p>
  <p class="text-green-800"><a href="/contact" class="text-blue-600 hover:text-blue-800 underline font-semibold">Contactar Experto →</a></p>
</div>
```

---

## Secciones Especiales

### FAQ Section
```html
<section id="preguntas-frecuentes" class="mb-12">
  <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Preguntas Frecuentes</h2>

  <div class="space-y-6">
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <h3 class="text-lg font-semibold mb-3 text-gray-900">¿Pregunta aquí?</h3>
      <p class="text-gray-700">Respuesta con <strong>texto en negritas</strong> para información importante.</p>
    </div>
  </div>
</section>
```

---

## Iconos Recomendados

### Por Tipo de Contenido
- **📋** - Listas, documentos, requisitos
- **💰** - Precios, costos, información financiera
- **🏠** - Vivienda, propiedades, hogar
- **🔧** - Instalaciones, verificaciones técnicas
- **💡** - Consejos, tips, ideas
- **⚠️** - Advertencias, información importante
- **✅** - Confirmaciones, éxito, completado
- **🤝** - Negociación, acuerdos, colaboración
- **⏰** - Tiempo, horarios, cronogramas
- **📞** - Contacto, comunicación
- **🔗** - Enlaces, recursos
- **⚖️** - Legal, contratos, derechos

---

## Reglas de Consistencia

### ✅ HACER:
1. **Siempre incluir tabla de contenidos** al inicio
2. **Usar IDs descriptivos** para secciones (`#seccion-nombre`)
3. **Mantener espaciado consistente** (`mb-8`, `mb-6`, `mb-12`)
4. **Usar colores semánticos** (azul=info, verde=éxito, amarillo=advertencia, rojo=crítico)
5. **Incluir CTA al final** de cada post
6. **Usar negritas** para información importante
7. **Enlaces externos** siempre con `target="_blank"`

### ❌ NO HACER:
1. No mezclar estilos de cajas diferentes sin propósito
2. No usar colores fuera del sistema establecido
3. No omitir la tabla de contenidos
4. No usar heading levels incorrectos (h1 > h2 > h3)
5. No crear secciones sin IDs apropiados

---

## Ejemplo de Estructura Completa

```html
<!-- Tabla de Contenidos -->
<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h2 class="text-xl font-semibold mb-4">Guía de Contenido</h2>
  <ul class="list-disc pl-6">
    <li><a href="#introduccion" class="text-blue-600 hover:text-blue-800">Introducción</a></li>
    <li><a href="#seccion-principal" class="text-blue-600 hover:text-blue-800">Sección Principal</a></li>
  </ul>
</div>

<!-- Wrapper principal -->
<div class="prose prose-lg max-w-none">
  <!-- Introducción -->
  <p class="text-lg text-gray-700 mb-8"><strong>Descripción principal del post</strong></p>

  <!-- Puntos clave -->
  <div class="bg-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-lg font-semibold mb-4 text-blue-900">Puntos Clave</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>Punto 1</strong>: Descripción</li>
    </ul>
  </div>

  <!-- Sección principal -->
  <section id="seccion-principal" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Título de Sección</h2>
    <p class="text-gray-700 mb-6">Contenido de la sección...</p>
  </section>

  <!-- CTA Final -->
  <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
    <h3 class="text-lg font-semibold mb-3 text-green-900">¿Necesitas Ayuda?</h3>
    <p class="text-green-800"><a href="/contact" class="text-blue-600 hover:text-blue-800 underline font-semibold">Contactar →</a></p>
  </div>
</div>
```

---

**Fecha de creación:** Enero 2025
**Última actualización:** Enero 15, 2025
**Versión:** 1.0

> 💡 **Nota:** Este style guide debe actualizarse cada vez que se introduzcan nuevos componentes o se modifiquen los existentes para mantener la consistencia en todo el sitio.

---

## Títulos para Google Discover (`discover_title`)

Google Discover **empuja** contenido a un feed personalizado en móvil (no es búsqueda): el título tiene que **frenar el scroll**, no ganar keywords. Por eso cada post tiene un campo **`discover_title`** (con `_es` / `_de` / `_ja`) separado del título SEO. Si se deja vacío, cae automáticamente a `title`.

### Dónde impacta cada título

| Campo | Alimenta | Objetivo |
|---|---|---|
| `meta_title` (o `title`) | el `<title>` del tag | SEO / búsqueda (keywords, intención) |
| **`discover_title`** | **H1 + `og:title` + `headline` (JSON-LD) + botón de compartir** | Discover / redes (el *hook*) |

El título SEO y el de Discover **pueden y suelen diferir**: uno gana la búsqueda, el otro frena el scroll.

### Reglas del hook (lo que funciona en Discover)

1. **Una emoción, una promesa.** El lector debe pensar *"¿qué gano si hago clic?"*.
2. **Habla a la persona, no al algoritmo.** Cero keyword stuffing; usa el vocabulario de tu audiencia. Discover es *push*, no *pull*.
3. **~40–60 caracteres.**
4. **Curiosidad/suspenso — pero SIEMPRE cumple.** Un clickbait que decepciona destruye el watch-time y, a la larga, mata la visibilidad del sitio. Regla simple: si tú harías clic *y* el artículo cumple, va bien.
5. **Ingredientes potentes:** números concretos, "gratis", un dato sorprendente, una cita/testimonio entre comillas.
6. **La imagen cuenta OTRA historia** que complementa el título (como un thumbnail de YouTube), no lo repite.
7. **Respeta las reglas editoriales:** solo hechos de la **edición actual** confirmados (nunca info de años previos), sin sesgo pro-gobierno, geografía/fechas correctas.

### SEO `<title>` vs `discover_title`

| SEO `<title>` (keywords) | `discover_title` (hook) |
|---|---|
| FENAPO 2026: Tickets, Prices & How to Get There | FENAPO 2026 is free — the one ticket you actually need |
| FENAPO 2026 Full Lineup: Every Artist, Date by Date | Katy Perry, Mötley Crüe & Bizarrap — free at FENAPO 2026 |
| Procesión del Silencio 2026: Route, Schedule, Tickets | The night San Luis Potosí falls silent: the 2026 procession |

### Haz / No hagas

- ✅ `500 vinos en un fin de semana: vuelve el Festival del Vino`
- ❌ `Festival Internacional del Vino SLP 2026: Guía Completa de la 14ª Edición` (eso es el título SEO, no un hook)
- ✅ `60 juegos gratis: cómo llevar a los niños a la FENAPO 2026`
- ❌ `No vas a creer lo que pasó en la FENAPO` (clickbait vacío que no cumple → prohibido)

> **Nota multi-idioma:** escribe el hook en los 4 locales (`discover_title`, `discover_title_es`, `discover_title_de`, `discover_title_ja`). No traduzcas literal — adapta el hook al lector de cada idioma.
