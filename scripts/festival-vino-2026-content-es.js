module.exports = function buildContentES(IMG) {
  return `<div class="not-prose mb-8">
  <div class="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
    <img src="${IMG.hero}" alt="Festival Internacional del Vino San Luis Potosí: copas de cristal iluminadas en una cena al aire libre del Centro de las Artes" class="w-full h-full object-cover" loading="eager" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
      <div class="p-6 md:p-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-3">Festival Internacional del Vino SLP 2026</h1>
        <p class="text-lg md:text-xl text-white/90">14ª edición. 29 y 30 de mayo. 500+ vinos, 159 bodegas, 40 catas, 6 cenas maridaje. La guía completa.</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-rose-50 border border-rose-100 p-6 rounded-xl mb-8">
  <h3 class="text-xl font-bold mb-3 text-rose-900">📑 En Esta Guía</h3>
  <nav class="grid grid-cols-1 md:grid-cols-2 gap-2 text-rose-800">
    <a href="#esencial" class="hover:underline">→ Lo esencial en 60 segundos</a>
    <a href="#cifras" class="hover:underline">→ La 14ª edición en cifras</a>
    <a href="#por-que" class="hover:underline">→ Por qué SLP es la sede</a>
    <a href="#bodegas" class="hover:underline">→ Las 159 bodegas: qué países y qué esperar</a>
    <a href="#catas" class="hover:underline">→ Las 40 catas: cuáles reservar</a>
    <a href="#maridajes" class="hover:underline">→ Las 6 cenas maridaje</a>
    <a href="#boletos" class="hover:underline">→ Boletos: cuál comprar y cómo</a>
    <a href="#logistica" class="hover:underline">→ Logística: hospedaje y traslados</a>
    <a href="#antes-despues" class="hover:underline">→ Qué hacer antes y después</a>
    <a href="#foraneos" class="hover:underline">→ Si vienes de fuera</a>
    <a href="#accesibilidad" class="hover:underline">→ Accesibilidad e inclusión</a>
    <a href="#faq" class="hover:underline">→ Preguntas frecuentes</a>
    <a href="#fuentes" class="hover:underline">→ Fuentes y verificación</a>
  </nav>
  <p class="mt-4 text-sm text-rose-700 italic">Lectura: 16 minutos · Última actualización: 28 de abril, 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Cada mayo, San Luis Potosí se convierte por dos días en la capital vinícola de Latinoamérica.</strong> El Festival Internacional del Vino llega en 2026 a su 14ª edición con más de 500 etiquetas de 159 bodegas, 40 catas guiadas, 6 cenas maridaje y una agenda musical de 15 grupos en vivo. Esta guía cubre todo lo que necesitas saber para llegar listo: qué bodegas vale la pena buscar, cómo elegir entre Silver y VIP, cuáles maridajes se agotan primero, y cómo combinar el festival con un fin de semana en una de las ciudades coloniales más subestimadas de México.
</p>

<section id="esencial" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 id="quick-summary" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Lo Esencial en 60 Segundos</h2>
</div>

<div class="speakable bg-gradient-to-br from-rose-50 to-amber-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    El <strong>14° Festival Internacional del Vino de San Luis Potosí</strong> se celebrará el <strong>viernes 29 y sábado 30 de mayo de 2026</strong> en el Centro de las Artes (CEART), sobre Calzada de Guadalupe 705. Es el evento de vino más grande de Latinoamérica por número de etiquetas: más de 500 vinos de 159 bodegas de México, Argentina, Francia, Italia, España, Estados Unidos y Portugal. Boletos desde $1,199 MXN. Los del viernes ya están agotados; los del sábado se venden 30% más rápido que en 2025.
  </p>
  <ul class="space-y-2 mb-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-rose-600 mt-1">•</span><span><strong>Fechas:</strong> Viernes 29 mayo (15:00–23:00) y sábado 30 mayo (13:00–21:00)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-rose-600 mt-1">•</span><span><strong>Sede:</strong> Centro de las Artes, Calzada de Guadalupe 705, SLP</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-rose-600 mt-1">•</span><span><strong>Boletos:</strong> Silver $1,199 · VIP $1,799 · Maridaje +$1,349 (en festivaldelvino.mx)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-rose-600 mt-1">•</span><span><strong>Capacidad:</strong> ~5,000 asistentes; viernes ya agotado a abril 2026</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-rose-600 mt-1">•</span><span><strong>Patrocinadores:</strong> BMW (viernes VIP), Heineken (sábado VIP), Aeroméxico</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-rose-600 mt-1">•</span><span><strong>Derrama económica:</strong> ~17 millones de pesos durante el fin de semana</span></li>
  </ul>
  <p class="text-xs text-gray-600 italic pt-3 border-t border-rose-200">Datos verificados al 28 abril 2026 contra festivaldelvino.mx, Secretaría de Turismo SLP y CANIRAC.</p>
</div>
</section>

<section id="cifras" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">La 14ª Edición en Cifras</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  El festival nació en 2010 con 30 bodegas. Catorce años después, las cifras cuentan otra historia: pasó de ser un evento gremial a uno de los productos turísticos más rentables del estado, con derrama económica documentada y crecimiento sostenido en la venta de boletos. Estos son los números clave de la edición 2026:
</p>

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 text-center shadow-sm">
    <p class="text-4xl font-bold text-rose-700 mb-1">500+</p>
    <p class="text-sm text-gray-600">etiquetas de vino</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 text-center shadow-sm">
    <p class="text-4xl font-bold text-rose-700 mb-1">159</p>
    <p class="text-sm text-gray-600">bodegas participantes</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 text-center shadow-sm">
    <p class="text-4xl font-bold text-rose-700 mb-1">40</p>
    <p class="text-sm text-gray-600">catas especializadas</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 text-center shadow-sm">
    <p class="text-4xl font-bold text-rose-700 mb-1">6</p>
    <p class="text-sm text-gray-600">cenas maridaje</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 text-center shadow-sm">
    <p class="text-4xl font-bold text-rose-700 mb-1">15</p>
    <p class="text-sm text-gray-600">grupos musicales</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 text-center shadow-sm">
    <p class="text-4xl font-bold text-rose-700 mb-1">7</p>
    <p class="text-sm text-gray-600">países representados</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 text-center shadow-sm">
    <p class="text-4xl font-bold text-rose-700 mb-1">~5,000</p>
    <p class="text-sm text-gray-600">asistentes estimados</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 text-center shadow-sm">
    <p class="text-4xl font-bold text-rose-700 mb-1">17M</p>
    <p class="text-sm text-gray-600">pesos de derrama</p>
  </div>
</div>

<p class="text-sm text-gray-600 italic mb-6">Fuente: festivaldelvino.mx y boletines oficiales de la Secretaría de Turismo SLP, abril 2026.</p>
</section>

<section id="por-que" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Por Qué San Luis Potosí es la Sede</h2>
</div>

<figure class="not-prose my-8">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="${IMG.venue}" alt="Centro de las Artes de San Luis Potosí: arquería colonial restaurada que sirve como sede principal del festival" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">El Centro de las Artes, antigua penitenciaría del siglo XIX convertida en complejo cultural, es la sede ininterrumpida del festival desde sus primeras ediciones.</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  San Luis Potosí no produce vino comercialmente. Eso, paradójicamente, es parte de su éxito: como ciudad neutral entre las regiones productoras de Baja California, Querétaro, Coahuila y Guanajuato, se convirtió en un punto de encuentro natural para bodegas que en otras ferias compiten por presencia. La ciudad ofrece tres ventajas estructurales que ninguna otra sede en México combina:
</p>

<ul class="list-disc pl-6 space-y-3 text-gray-700 mb-6">
  <li><strong>Conectividad aérea sin saturación:</strong> aeropuerto internacional con vuelos directos a Houston, Dallas y CDMX, pero sin la masificación turística de San Miguel de Allende o Querétaro. Aeroméxico ofrece tarifas con descuento durante el festival.</li>
  <li><strong>Centro Histórico UNESCO + infraestructura hotelera:</strong> 19 km² declarados Patrimonio Mundial en 2010, con cadenas internacionales (Hilton, Fiesta Americana) a 15 minutos del recinto.</li>
  <li><strong>Sede arquitectónicamente única:</strong> el Centro de las Artes ocupa la antigua penitenciaría restaurada — patios coloniales, arquerías y un domo central que crea una experiencia que ningún espacio comercial replica.</li>
</ul>

<div class="not-prose my-8 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
  <div class="flex items-start gap-3">
    <span class="text-2xl">📚</span>
    <div>
      <h4 class="font-semibold text-gray-900 mb-2">Sobre la sede</h4>
      <p class="text-gray-700 mb-3">
        "Este encuentro se ha convertido en uno de los festivales más relevantes de México, evolucionando hasta ser un producto turístico clave."
      </p>
      <p class="text-sm text-gray-600">
        — Alejandro Espinosa Abaroa, presidente de CANIRAC SLP, abril 2026
      </p>
    </div>
  </div>
</div>
</section>

<section id="bodegas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Las 159 Bodegas: Países y Qué Esperar</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  El festival agrupa 159 bodegas en zonas temáticas distribuidas por los patios del Centro de las Artes. La proporción 2026 favorece los vinos del Nuevo Mundo, aunque Europa mantiene presencia fuerte. Esta es la composición por origen:
</p>

<div class="not-prose overflow-x-auto my-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-gradient-to-r from-rose-600 to-amber-700">
      <tr>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">País / región</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Lo que destaca</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Bodegas a buscar</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="px-5 py-3 font-semibold align-top">México (Baja California, Coahuila, Querétaro, Guanajuato)</td><td class="px-5 py-3 text-gray-700 align-top">El bloque más grande. Nebbiolo del Valle de Guadalupe, Cabernet de Parras, espumosos de Querétaro.</td><td class="px-5 py-3 text-gray-700 align-top">Casa Madero, Monte Xanic, L.A. Cetto, Vinaltura, Cuna de Tierra</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-semibold align-top">Argentina</td><td class="px-5 py-3 text-gray-700 align-top">Estrella desde 2025. Malbec de Mendoza y vinos de altura. Familias Catena protagonistas.</td><td class="px-5 py-3 text-gray-700 align-top">Bodega Ernesto Catena, El Enemigo, MaCo Vineyards, Bodega Aleana</td></tr>
      <tr><td class="px-5 py-3 font-semibold align-top">España</td><td class="px-5 py-3 text-gray-700 align-top">Tempranillo de Rioja y Ribera del Duero, Albariño de Rías Baixas.</td><td class="px-5 py-3 text-gray-700 align-top">Bodegas con presencia recurrente — verifica en festivaldelvino.mx</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-semibold align-top">Francia</td><td class="px-5 py-3 text-gray-700 align-top">Burdeos, Borgoña y Champaña como contrapunto a los Nuevo Mundo.</td><td class="px-5 py-3 text-gray-700 align-top">Importadores con catálogos curados</td></tr>
      <tr><td class="px-5 py-3 font-semibold align-top">Italia</td><td class="px-5 py-3 text-gray-700 align-top">Toscana (Chianti, Brunello), Piamonte (Barolo, Barbera).</td><td class="px-5 py-3 text-gray-700 align-top">Distribución por importadores especializados</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-semibold align-top">Estados Unidos · Portugal</td><td class="px-5 py-3 text-gray-700 align-top">Pinot Noir de California, Oporto y vinhos verdes portugueses.</td><td class="px-5 py-3 text-gray-700 align-top">Presencia rotativa según edición</td></tr>
    </tbody>
  </table>
</div>

<div class="not-prose my-8 bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
  <h4 class="font-bold text-amber-900 mb-3">💡 Estrategia para no perderte lo bueno</h4>
  <p class="text-amber-900 mb-3">
    Con 500+ vinos en 8 horas, lo que mata la experiencia no es la falta de tiempo: es la falta de rumbo. Tres tácticas:
  </p>
  <ul class="space-y-2 text-amber-900">
    <li><strong>1. Define un eje:</strong> "vinos mexicanos de altura", "Malbec argentino" o "espumosos". Te enfocas en 30 etiquetas relevantes en lugar de probar 50 al azar.</li>
    <li><strong>2. Usa una libreta de notas o app:</strong> Vivino o Wine-Searcher. Anotas la añada y bodega que te gustó para comprar después en CDMX.</li>
    <li><strong>3. Empieza por blancos y espumosos:</strong> el paladar se cansa con tintos pesados. Reserva los Brunello y Malbec para el final.</li>
  </ul>
</div>
</section>

<section id="catas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Las 40 Catas: Cuáles Reservar</h2>
</div>

<figure class="not-prose my-8">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="${IMG.tasting}" alt="Sommelier sirviendo vino tinto en copas Riedel durante una cata guiada del festival" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">Las catas guiadas por sommeliers son el formato más educativo del festival. Cupo limitado a 25–30 personas por sesión.</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Las 40 catas especializadas son lo que separa este festival de un simple tasting masivo. Cada una es una sesión guiada de 45–60 minutos con un enólogo o sommelier, en grupos pequeños, con copas Riedel y 4–6 vinos por sesión. Los acceso Silver incluye un número limitado de catas; el VIP da preferencia. Esta es la tipología:
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 shadow-sm">
    <h4 class="font-bold text-rose-900 mb-2">🍇 Catas verticales</h4>
    <p class="text-sm text-gray-700">Una bodega, varias añadas. Aprendes cómo madura un vino. Suelen ser las más solicitadas (cupo 25 personas).</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 shadow-sm">
    <h4 class="font-bold text-rose-900 mb-2">🌍 Catas horizontales</h4>
    <p class="text-sm text-gray-700">Misma uva, varias bodegas o regiones. Ideal para entender el "terroir" — la influencia del suelo y clima.</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 shadow-sm">
    <h4 class="font-bold text-rose-900 mb-2">🇲🇽 Catas regionales mexicanas</h4>
    <p class="text-sm text-gray-700">Valle de Guadalupe, Parras, Querétaro o Guanajuato en sesión dedicada. La forma más rápida de entender qué está pasando con el vino mexicano.</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 shadow-sm">
    <h4 class="font-bold text-rose-900 mb-2">🎓 Catas para principiantes</h4>
    <p class="text-sm text-gray-700">Sin pretensiones. Te enseñan a identificar acidez, taninos y aroma. Si nunca has hecho una cata formal, empieza aquí.</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 shadow-sm">
    <h4 class="font-bold text-rose-900 mb-2">✨ Catas premium con cupo limitado</h4>
    <p class="text-sm text-gray-700">Etiquetas que no se sirven en el área general — Gran Reservas y vinos de garaje. Boleto independiente, se agotan en preventa.</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5 shadow-sm">
    <h4 class="font-bold text-rose-900 mb-2">☕🍫 Catas no-vino</h4>
    <p class="text-sm text-gray-700">Café de especialidad, chocolate fino, aceite de oliva, mezcal artesanal y habanos. Un guiño a quienes acompañan a alguien que vino por el vino.</p>
  </div>
</div>

<div class="not-prose my-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
  <p class="text-blue-900"><strong>📌 Cómo reservarlas:</strong> El programa de catas se publica en festivaldelvino.mx 2–3 semanas antes del evento. Las premium se agotan en las primeras 48 horas. Si tienes acceso VIP, llega 30 minutos antes del horario para asegurar lugar; el Silver es por orden de llegada.</p>
</div>
</section>

<section id="maridajes" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Las 6 Cenas Maridaje</h2>
</div>

<figure class="not-prose my-8">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="${IMG.pairing}" alt="Mesa con plato gourmet, copa de vino tinto y tabla de quesos en una cena maridaje" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">Las cenas maridaje son la experiencia más intensa del festival. Cada plato emparejado con un vino específico bajo curaduría de un chef y un sommelier.</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Las cenas maridaje son evento aparte: 6 sesiones a lo largo del fin de semana, cada una con un chef invitado y un sommelier, alrededor de mesas para 30–60 personas. El formato típico es 4–5 tiempos, cada plato emparejado con un vino específico. Cuestan $1,349 MXN adicionales por persona (sobre el acceso al festival). Cupos pequeños — se agotan primero.
</p>

<div class="not-prose bg-rose-50 border-2 border-rose-300 rounded-xl p-6 my-6">
  <h3 class="text-xl font-bold text-rose-900 mb-3">📅 Estructura del fin de semana</h3>
  <p class="text-rose-900 mb-3">El programa exacto sale 3 semanas antes. La distribución típica de las 6 cenas en ediciones recientes ha sido:</p>
  <ul class="text-rose-900 space-y-1">
    <li>• 1 cena temática mexicana (cocina regional + vino mexicano)</li>
    <li>• 1 cena dedicada al país invitado de honor</li>
    <li>• 2 cenas de cocina contemporánea con chefs reconocidos</li>
    <li>• 1 cena "de bodega" con un solo productor (vertical maridada)</li>
    <li>• 1 brunch maridado el sábado</li>
  </ul>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  <strong>Recomendación:</strong> si vas en pareja o con un grupo pequeño, escoge una sola cena (la del viernes en la noche es la más popular). Combinarla con el acceso general al sábado te da la experiencia más completa sin saturarte. La carta y los chefs se anuncian en festivaldelvino.mx — conviene revisarla antes de pagar el extra.
</p>
</section>

<section id="boletos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Boletos: Cuál Comprar y Cómo</h2>
</div>

<div class="not-prose my-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
  <p class="text-red-900"><strong>⚠️ Estado al 28 abril 2026:</strong> Los boletos del viernes 29 están agotados. Sábado 30 sigue disponible pero las ventas van 30% arriba del año pasado. Si vas, compra esta semana.</p>
</div>

<div class="not-prose grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
  <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
    <h4 class="font-bold text-gray-900 mb-2">Silver</h4>
    <p class="text-3xl font-bold text-gray-700 mb-2">$1,199 MXN</p>
    <p class="text-sm text-gray-600 mb-4">(~$70 USD)</p>
    <ul class="text-sm text-gray-700 space-y-1">
      <li>✓ Acceso al recinto</li>
      <li>✓ Copa de cristal de regalo</li>
      <li>✓ Degustación libre 500+ vinos</li>
      <li>✓ Cervezas y mezcales</li>
      <li>✓ Música en vivo</li>
      <li>✓ Catas básicas (sujeto a cupo)</li>
    </ul>
  </div>
  <div class="bg-gradient-to-b from-rose-50 to-amber-50 border-2 border-rose-400 rounded-xl p-6 shadow-md transform md:scale-105">
    <p class="text-xs font-bold text-rose-700 uppercase tracking-wide mb-1">Recomendado</p>
    <h4 class="font-bold text-gray-900 mb-2">VIP</h4>
    <p class="text-3xl font-bold text-rose-700 mb-2">$1,799 MXN</p>
    <p class="text-sm text-gray-600 mb-4">(~$103 USD)</p>
    <ul class="text-sm text-gray-700 space-y-1">
      <li>✓ Todo lo del Silver</li>
      <li>✓ Acceso a Zona VIP (BMW vie · Heineken sáb)</li>
      <li>✓ Catas premium con cupo prioritario</li>
      <li>✓ Bocadillos de cortesía</li>
      <li>✓ Estacionamiento preferente</li>
      <li>✓ Ambiente menos saturado</li>
    </ul>
  </div>
  <div class="bg-white border-2 border-amber-300 rounded-xl p-6">
    <h4 class="font-bold text-gray-900 mb-2">Maridaje (add-on)</h4>
    <p class="text-3xl font-bold text-amber-700 mb-2">+$1,349 MXN</p>
    <p class="text-sm text-gray-600 mb-4">(~$77 USD adicionales)</p>
    <ul class="text-sm text-gray-700 space-y-1">
      <li>✓ Cena formal de 4–5 tiempos</li>
      <li>✓ Vino emparejado por plato</li>
      <li>✓ Chef + sommelier en vivo</li>
      <li>✓ Mesa para 30–60 personas</li>
      <li>✓ <strong>Cupo muy limitado</strong></li>
    </ul>
  </div>
</div>

<div class="not-prose my-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
  <h4 class="font-bold text-yellow-900 mb-3">💡 ¿Silver o VIP?</h4>
  <ul class="space-y-2 text-yellow-900">
    <li><strong>Silver tiene sentido si:</strong> es tu primer festival, vas en grupo grande con presupuesto compartido, o tu prioridad es la degustación libre y la música.</li>
    <li><strong>VIP vale los $600 extra si:</strong> tu enfoque son las catas premium (donde se pueden ir 4–5 horas si reservas todo), te molesta la saturación de la zona general, o estás aquí para construir tu paladar.</li>
    <li><strong>El sweet spot es VIP + 1 cena maridaje:</strong> total ~$3,150 MXN ($180 USD). Es la experiencia completa sin tope premium.</li>
  </ul>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  La compra es exclusivamente en <strong>festivaldelvino.mx</strong>. Aceptan tarjeta de crédito mexicana e internacional. La página también ofrece código de descuento Aeroméxico para vuelos a SLP. WhatsApp oficial: <strong>+52 444 654 4121</strong>.
</p>
</section>

<section id="logistica" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Logística: Hospedaje y Traslados</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  El Centro de las Artes está sobre Calzada de Guadalupe, a 1.5 km del Centro Histórico. Es la ventaja logística menos comentada del festival: puedes hospedarte en el casco histórico, bajar caminando 20 minutos al recinto, y regresar en taxi/Uber a las 11 de la noche por menos de $80 MXN.
</p>

<div class="not-prose overflow-x-auto my-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-gradient-to-r from-rose-600 to-amber-700">
      <tr>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Zona</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Distancia al recinto</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Ideal para</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Rango / noche</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="px-5 py-3 font-semibold">Centro Histórico (Plaza de Armas, Carmen)</td><td class="px-5 py-3 text-gray-700">1.5 km · 20 min caminando</td><td class="px-5 py-3 text-gray-700">Quien quiere combinar festival + ciudad</td><td class="px-5 py-3 text-gray-700">$1,500–$3,500 MXN</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-semibold">Lomas / Tangamanga</td><td class="px-5 py-3 text-gray-700">5–7 km · 15 min en auto</td><td class="px-5 py-3 text-gray-700">Cadenas internacionales (Hilton, Fiesta Americana, Hyatt Place)</td><td class="px-5 py-3 text-gray-700">$2,000–$4,000 MXN</td></tr>
      <tr><td class="px-5 py-3 font-semibold">Calzada de Guadalupe (cerca del CEART)</td><td class="px-5 py-3 text-gray-700">A pie</td><td class="px-5 py-3 text-gray-700">Hoteles boutique, B&Bs cerca de la sede</td><td class="px-5 py-3 text-gray-700">$1,200–$2,500 MXN</td></tr>
    </tbody>
  </table>
</div>

<div class="not-prose my-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
  <p class="text-blue-900"><strong>📌 Sobre Uber/DiDi:</strong> Funcionan perfecto en SLP. Después de las 10 PM hay tarifa dinámica al salir del CEART, pero rara vez sube más del 1.5x. Si tomas VIP, puede haber valet con descuento patrocinado por BMW (viernes) y Heineken (sábado).</p>
</div>
</section>

<section id="antes-despues" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Qué Hacer Antes y Después del Festival</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Si haces el viaje, vale la pena extender 1–2 días para conocer la ciudad. SLP tiene 19 km² de Centro Histórico declarado Patrimonio de la Humanidad por la UNESCO en 2010, plazas coloniales y una escena gastronómica que ha crecido en los últimos años.
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2">🌳 Antes (jueves)</h4>
    <p class="text-sm text-gray-700 mb-3">Llega un día antes. Camina del Jardín de San Francisco a la Plaza de Armas. Cena en el Centro Histórico — la zona del Carmen tiene los mejores restaurantes potosinos.</p>
    <a href="/blog/best-brunch-spots-slp" class="text-sm text-blue-700 hover:underline">→ Mejores spots de brunch en SLP</a>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2">🚌 Después (domingo)</h4>
    <p class="text-sm text-gray-700 mb-3">Domingo de descanso. Camina al Parque Tangamanga para procesar la cruda elegantemente. O sube a Real de Catorce (3 hrs) si te quedas hasta el lunes.</p>
    <a href="/blog/best-parks-kids-slp" class="text-sm text-blue-700 hover:underline">→ Parques de SLP</a>
  </div>
</div>
</section>

<section id="foraneos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Si Vienes de Fuera (CDMX, Texas, Europa)</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  El aeropuerto SLP (SLP) recibe vuelos directos desde Ciudad de México, Houston, Dallas y Monterrey. Aeroméxico ofrece tarifas con descuento para asistentes del festival — el código sale en festivaldelvino.mx en abril/mayo. Si vienes de Europa, lo más práctico es volar a CDMX y tomar conexión doméstica de 1 hora.
</p>

<ul class="list-disc pl-6 space-y-3 text-gray-700 mb-6">
  <li><strong>Llega un día antes:</strong> el viernes el festival arranca a las 3 PM. Si vuelas el viernes mismo, vas a llegar agotado y la zona VIP de la tarde es la mejor del fin de semana.</li>
  <li><strong>Spanish ayuda pero no es esencial:</strong> en el festival hay sommeliers bilingües y muchos enólogos hablan inglés. En la ciudad, el personal de hoteles y Uber funciona bien con apps de traducción.</li>
  <li><strong>Lleva efectivo:</strong> el festival acepta tarjeta para todo, pero algunos vendedores en el Centro Histórico aún operan en efectivo. Cajeros funcionan en zona Lomas y plaza Tangamanga.</li>
  <li><strong>Combina con vuelos a CDMX el lunes:</strong> SLP es paso obligado a Real de Catorce, La Huasteca Potosina y Zacatecas. Aprovecha el viaje para extender 2–3 días.</li>
</ul>

<a href="/blog/fly-direct-slp-from-texas" class="text-blue-700 hover:underline">→ Vuelos directos SLP desde Texas: guía completa</a>
</section>

<section id="accesibilidad" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Accesibilidad e Inclusión</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  La 14ª edición incorpora protocolos de inclusión coordinados con la Dirección de Turismo Municipal. Esto es lo verificado:
</p>

<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
  <li><strong>Chalecos sensoriales</strong> disponibles para personas con autismo o sensibilidad al ruido (préstamo gratuito en taquilla).</li>
  <li><strong>Material en Braille</strong> para personas con discapacidad visual: programa, mapa del recinto y descripción de catas.</li>
  <li><strong>Acceso para sillas de ruedas</strong> en los patios principales del Centro de las Artes (la sede tiene rampas desde su rehabilitación).</li>
  <li><strong>Ludoteca infantil</strong> con costo adicional para familias que vienen con hijos pequeños y quieren disfrutar el festival adultos.</li>
</ul>

<p class="text-sm text-gray-600 italic">Para coordinaciones específicas, contacta al WhatsApp del festival con 48 horas de anticipación: +52 444 654 4121.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8 speakable">
<div class="not-prose mb-6">
  <h2 id="faq-heading" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">Preguntas Frecuentes</h2>
</div>

<div class="space-y-5">
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">¿Es solo para conocedores de vino?</h3>
    <p class="text-gray-700">No. Las catas para principiantes y la barra libre del Silver están diseñadas para el visitante curioso. La curva de aprendizaje es la gracia del evento.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">¿Vale la pena el VIP?</h3>
    <p class="text-gray-700">Si tu prioridad son las catas premium con cupo y un ambiente menos saturado, sí. Si vas a probar libremente y enfocarte en la música, el Silver basta.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">¿Hay opción de comida en el recinto?</h3>
    <p class="text-gray-700">Sí. Hay zona gastronómica con varios stands, además de las cenas maridaje (boleto aparte). Los menús se publican días antes en festivaldelvino.mx.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">¿Puedo llevar a mis hijos?</h3>
    <p class="text-gray-700">El festival es 18+ por la naturaleza del evento, pero ofrece ludoteca con costo adicional para que adultos puedan disfrutar. Coordina por WhatsApp.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">¿Hay transporte después de las 11 PM?</h3>
    <p class="text-gray-700">Uber/DiDi funcionan toda la noche. Tarifa dinámica al cierre puede subir a 1.5x — vale la pena reservar uno antes de salir del recinto.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">¿Las bodegas venden vino en el evento?</h3>
    <p class="text-gray-700">Algunas sí, pero no es regla. Anota la añada y bodega para comprar después en distribuidores de CDMX o online — los precios son más bajos que comprar in situ.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">¿Qué pasa si tengo el boleto del viernes y se cancela mi vuelo?</h3>
    <p class="text-gray-700">Los boletos del festival son no reembolsables. Pero son transferibles — venderlo o regalarlo es la salida si no puedes ir.</p>
  </div>
</div>
</section>

<section id="fuentes" class="mb-12 scroll-mt-8">
<div class="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6">
  <h2 class="text-xl font-bold text-gray-900 mb-3">Fuentes y Verificación</h2>
  <p class="text-sm text-gray-600 mb-4">Datos verificados al 28 de abril, 2026 contra fuentes oficiales y notas de prensa con cobertura primaria.</p>
  <ul class="space-y-2 text-sm text-gray-700">
    <li>→ <a href="https://festivaldelvino.mx/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">festivaldelvino.mx — sitio oficial del festival (boletos, programa, expositores)</a></li>
    <li>→ <a href="https://visitmexico.com/actividad/640/festival-del-vino-2026" class="text-blue-700 hover:underline" target="_blank" rel="noopener">VisitMexico.com — Festival del Vino 2026 (Secretaría de Turismo Federal)</a></li>
    <li>→ <a href="https://sanluis.eluniversal.com.mx/mas-de-san-luis/cuando-sera-el-festival-internacional-del-vino-de-slp-en-2026/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">El Universal SLP — Cobertura de la edición 2026</a></li>
    <li>→ <a href="https://planoinformativo.com/1139566/14-festival-internacional-del-vino-san-luis-potosi-2026-500-vinos-del-mundo-y-una-gran-derrama-economica-para-el-estado" class="text-blue-700 hover:underline" target="_blank" rel="noopener">Plano Informativo — 14ª edición y derrama económica</a></li>
    <li>→ <a href="https://liderlife.liderempresarial.com/festival-internacional-del-vino-2026-en-slp-fechas-actividades-y-precios-de-boletos/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">LíderLife — Precios de boletos y actividades</a></li>
    <li>→ <a href="https://periodicoelmomento.com/regresa-el-festival-internacional-del-vino-a-san-luis-potosi-en-su-14a-edicion/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">Periódico El Momento — Histórico del festival desde 2010</a></li>
    <li>→ <a href="https://turismo.slp.gob.mx/noticias/2025/4/22/todo-listo-para-el-13-festival-internacional-del-vino/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">Secretaría de Turismo SLP — Antecedente edición 2025</a></li>
  </ul>
</div>
</section>

<div class="not-prose mt-10 bg-gradient-to-r from-rose-50 to-amber-50 border-2 border-rose-200 p-8 rounded-2xl">
  <h3 class="text-2xl font-bold text-gray-900 mb-3">Siguientes pasos</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <a href="https://festivaldelvino.mx/" target="_blank" rel="noopener" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Comprar boletos (sitio oficial)</p>
      <p class="text-sm text-gray-600">Silver, VIP y maridajes en festivaldelvino.mx</p>
    </a>
    <a href="/resources/living-guide" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Guía completa de SLP</p>
      <p class="text-sm text-gray-600">Para quienes vienen de fuera por varios días</p>
    </a>
    <a href="/blog/fenapo-2026-guia-preparacion" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ FENAPO 2026 (agosto)</p>
      <p class="text-sm text-gray-600">El otro gran evento del año en SLP</p>
    </a>
    <a href="/blog/ultimate-guide-living-san-luis-potosi-2026" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Vivir en SLP 2026</p>
      <p class="text-sm text-gray-600">Para expats considerando la ciudad como base</p>
    </a>
  </div>
</div>`;
};
