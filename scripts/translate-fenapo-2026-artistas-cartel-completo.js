// Native German + Japanese translations for blog post
// `fenapo-2026-artistas-cartel-completo` (FENAPO 2026 full artist lineup).
// Idempotent: overwrites content_de / content_ja with the translated HTML.
// Preserves every HTML tag/attribute/class/href/src and all proper names,
// dates, venues and prices verbatim. Verifies by re-fetching after update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'fenapo-2026-artistas-cartel-completo';

const CONTENT_DE = `<div class="max-w-none">

<div class="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-purple-900 mb-3">In diesem Leitfaden</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-purple-800 text-sm">
    <a href="#overview" class="hover:underline">→ FENAPO 2026 im Überblick</a>
    <a href="#top-picks" class="hover:underline">→ Die 6 unverzichtbaren Abende</a>
    <a href="#foro" class="hover:underline">→ Kalender Foro de las Estrellas (gratis)</a>
    <a href="#palenque" class="hover:underline">→ Kalender Palenque (mit Eintrittskarte)</a>
    <a href="#by-style" class="hover:underline">→ Ihren Abend nach Musikrichtung wählen</a>
    <a href="#tickets" class="hover:underline">→ Tickets & Zugang</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-purple-700 italic">Vollständiges offizielles Line-up veröffentlicht am 27. Mai 2026 · Zuletzt aktualisiert: 1. Juli 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Das vollständige Line-up der FENAPO 2026 steht fest — und es ist das ambitionierteste seit Jahren.</strong> Katy Perry und Mötley Crüe spielen gratis im Foro de las Estrellas, Bizarrap, Los Tigres del Norte beschließen die Feria, und im Palenque treten unter anderem Grupo Firme, Julión Álvarez und Edén Muñoz auf. Hier sind alle 35 Abende, Datum für Datum.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FENAPO 2026 im Überblick</h2>
</div>
<div class="speakable bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Die FENAPO 2026 — Mexikos Feria Nacional Potosina — läuft vom 7. bis 30. August</strong> im Recinto Ferial in San Luis Potosí. Sie bietet <strong>21 kostenlose Konzerte</strong> im Foro de las Estrellas (früher Teatro del Pueblo) und <strong>14 Palenque-Abende mit Eintrittskarte</strong>. Eintritt zur Feria, Fahrgeschäfte und Parken sind kostenlos.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Termine:</strong> Freitag, 7. August — Sonntag, 30. August 2026</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Foro de las Estrellas:</strong> gratis, 21 Abende (Katy Perry, Mötley Crüe, Bizarrap, Los Tigres del Norte…)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Palenque:</strong> Tickets auf slpfastticket.com (Grupo Firme, Julión Álvarez, Ha*Ash…)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Alle Logistik</strong> (Anreise, Budget, Unterkunft): <a href="/blog/fenapo-2026-guia-preparacion" class="text-purple-700 underline font-semibold">unser FENAPO-Vorbereitungsleitfaden</a></span></li>
  </ul>
</div>
</section>

<section id="top-picks" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Die 6 unverzichtbaren Abende</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Di 25. Aug · Foro · Gratis</p><h3 class="font-bold text-lg text-gray-900 mb-1">Katy Perry</h3><p class="text-sm text-gray-600">Der größte Abend der Feria: ein internationaler Popstar, völlig gratis. Kommen Sie mehrere Stunden früher.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Sa 8. Aug · Foro · Gratis</p><h3 class="font-bold text-lg text-gray-900 mb-1">Mötley Crüe</h3><p class="text-sm text-gray-600">Rocklegenden auf einer kostenlosen Feria-Bühne. Erster Samstag — rechnen Sie mit vollem Haus.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Di 18. Aug · Foro · Gratis</p><h3 class="font-bold text-lg text-gray-900 mb-1">Bizarrap</h3><p class="text-sm text-gray-600">Der argentinische Produzent hinter den BZRP Music Sessions — einer der meist erwarteten Termine für ein junges Publikum.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">So 30. Aug · Foro · Gratis</p><h3 class="font-bold text-lg text-gray-900 mb-1">Los Tigres del Norte</h3><p class="text-sm text-gray-600">Der Abschlussabend: die größte Institution des Norteño beschließt die Ausgabe 2026.</p></div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5"><p class="text-xs font-bold text-amber-600 uppercase mb-1">Fr 21. Aug · Palenque · Mit Ticket</p><h3 class="font-bold text-lg text-gray-900 mb-1">Grupo Firme</h3><p class="text-sm text-gray-600">Einer der größten Acts der Regional-Mexican-Musik im intimen Rundbühnen-Format des Palenque.</p></div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5"><p class="text-xs font-bold text-amber-600 uppercase mb-1">So 30. Aug · Palenque · Mit Ticket</p><h3 class="font-bold text-lg text-gray-900 mb-1">Julión Álvarez</h3><p class="text-sm text-gray-600">Der Abschlussabend im Palenque mit einer der beliebtesten Stimmen der Banda. Diese Tickets sind zuerst weg.</p></div>
</div>
</section>

<img src="/images/blog/fenapo-2026-cartel-guia-completa-fairgrounds.png" alt="FENAPO-Festgelände in San Luis Potosí" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="foro" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Foro de las Estrellas: alle 21 kostenlosen Abende</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">Das Foro de las Estrellas (die früher als Teatro del Pueblo bekannte Bühne) ist Schauplatz der großen Gratiskonzerte. Es gibt keine Tickets — der Einlass erfolgt in der Reihenfolge des Eintreffens, planen Sie für die internationalen Headliner also ein, bereits am frühen Nachmittag da zu sein. Am Montag, dem 17., Montag, dem 24., und Samstag, dem 29., ist kein Foro-Konzert angesetzt.</p>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Vollständiger Kalender des Foro de las Estrellas, FENAPO 2026</caption>
    <thead class="bg-purple-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Datum</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Künstler</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 7. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Gloria Trevi</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Samstag, 8. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Mötley Crüe</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 9. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Lila Downs</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Montag, 10. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Yandel Sinfónico</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Dienstag, 11. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Influencers más grandes de México</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Mittwoch, 12. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">El Bogueto</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Donnerstag, 13. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Xavi</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 14. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Ramón Ayala</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Samstag, 15. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Óscar Maydon</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 16. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Chihuahua Fest</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Dienstag, 18. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Bizarrap</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Mittwoch, 19. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Sin Bandera</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Donnerstag, 20. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Kenia Os</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 21. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Laberinto y los Herederos de Nuevo León</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Samstag, 22. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Los Huracanes del Norte</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 23. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Los Acosta</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Dienstag, 25. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Katy Perry</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Mittwoch, 26. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Santa Fe Klan</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Donnerstag, 27. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Potosinazo</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 28. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Alameños de la Sierra</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 30. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Los Tigres del Norte</td>
      </tr>
    </tbody>
  </table>
</div>
</section>

<section id="palenque" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Palenque: alle 14 Abende mit Eintrittskarte</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">Der Palenque ist der intime Rundbühnen-Veranstaltungsort der Feria — die Künstler treten in der Mitte auf, nur wenige Meter vom Publikum entfernt. Es ist das Premium-Erlebnis der FENAPO und der einzige Teil, der eine Eintrittskarte erfordert.</p>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Vollständiger Kalender des Palenque, FENAPO 2026</caption>
    <thead class="bg-amber-600">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Datum</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Künstler</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 7. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Remmy Valenzuela</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Samstag, 8. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Luis R. Conríquez</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 9. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Conjunto Primavera</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Donnerstag, 13. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">María José</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 14. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Matute</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Samstag, 15. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Pesado e Invasores</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 16. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Cornelio Vega Jr.</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Donnerstag, 20. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Horóscopos de Durango</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 21. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Grupo Firme</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 23. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Ha*Ash</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Donnerstag, 27. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Emmanuel & Mijares</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 28. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Marca Registrada</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Samstag, 29. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Edén Muñoz</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 30. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Julión Álvarez</td>
      </tr>
    </tbody>
  </table>
</div>
<img src="/images/blog/fenapo-2026-cartel-guia-completa-palenque.png" alt="FENAPO-Palenque in San Luis Potosí" class="w-full rounded-2xl shadow-lg mb-6" loading="lazy" />
</section>

<section id="by-style" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Ihren Abend nach Musikrichtung wählen</h2>
</div>
<div class="space-y-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎤 Pop & international</h3><p class="text-gray-700 text-sm leading-relaxed">Gloria Trevi eröffnet die Feria (Fr 7), Yandel Sinfónico (Mo 10), Sin Bandera (Mi 19), Kenia Os (Do 20) und Katy Perry (Di 25) — alle gratis im Foro. Im Palenque: María José (Do 13), Ha*Ash (So 23) und Emmanuel & Mijares (Do 27).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎸 Rock & Rückblicke</h3><p class="text-gray-700 text-sm leading-relaxed">Mötley Crüe (Sa 8, Foro, gratis) ist der Headliner. Im Palenque sorgt Matute (Fr 14) für die 80er-90er-Party.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🤠 Norteño, Banda & Regional</h3><p class="text-gray-700 text-sm leading-relaxed">Gratis im Foro: Ramón Ayala (Fr 14), Laberinto y los Herederos (Fr 21), Los Huracanes del Norte (Sa 22), Alameños de la Sierra (Fr 28) und Los Tigres del Norte zum Abschluss der Feria (So 30). Im Palenque: Remmy Valenzuela (Fr 7), Conjunto Primavera (So 9), Pesado e Invasores (Sa 15), Cornelio Vega Jr. (So 16), Horóscopos de Durango (Do 20), Grupo Firme (Fr 21), Marca Registrada (Fr 28), Edén Muñoz (Sa 29) und Julión Álvarez (So 30).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🔥 Corridos & Urban</h3><p class="text-gray-700 text-sm leading-relaxed">Gratis im Foro: El Bogueto (Mi 12), Xavi (Do 13), Óscar Maydon (Sa 15), Bizarrap (Di 18) und Santa Fe Klan (Mi 26). Im Palenque: Luis R. Conríquez (Sa 8).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌎 Folk, Cumbia & besondere Abende</h3><p class="text-gray-700 text-sm leading-relaxed">Lila Downs (So 9) bringt mexikanischen Folk ins Foro. Los Acosta (So 23) zum Cumbia-Tanzen. Dazu zwei Abende mit lokalem Flair: der Potosinazo (Do 27) mit einheimischen Talenten und das Chihuahua Fest (So 16). Am Dienstag, dem 11., findet ein Event mit „den größten Influencern Mexikos“ statt.</p></div>
</div>
</section>

<section id="tickets" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Tickets & Zugang</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Foro de las Estrellas:</strong> gratis, keine Eintrittskarte, Einlass in der Reihenfolge des Eintreffens. Für Katy Perry, Mötley Crüe und Bizarrap sollten Sie mehrere Stunden früher da sein.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Palenque:</strong> Kaufen Sie ausschließlich auf <strong>slpfastticket.com</strong>, dem von der Landesregierung von SLP angekündigten offiziellen Kanal. Die Preise variieren je nach Künstler und Bereich.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Meiden Sie Wiederverkäufer:</strong> Der Einlass erfolgt über elektronische Validierung, und an großen Abenden sind gefälschte Tickets weit verbreitet.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Feria, Fahrgeschäfte und Parken:</strong> für die gesamte Ausgabe 2026 kostenlos.</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">Reisen Sie von auswärts an? Hotels, Anreise und Tagesbudgets behandeln wir in unserem <a href="/blog/fenapo-2026-guia-preparacion" class="text-purple-700 underline font-semibold">FENAPO-2026-Vorbereitungsleitfaden</a>, und Details zu den Veranstaltungsorten finden Sie auf der <a href="/events/fenapo-2026" class="text-purple-700 underline font-semibold">Event-Seite</a>.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wann findet die FENAPO 2026 statt?<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die FENAPO 2026 (die Feria Nacional Potosina) läuft von Freitag, dem 7. August, bis Sonntag, dem 30. August 2026 im Recinto Ferial in San Luis Potosí, Mexiko.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Sind die Konzerte der FENAPO 2026 kostenlos?<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Alle 21 Konzerte im Foro de las Estrellas (früher Teatro del Pueblo) sind kostenlos, darunter Katy Perry, Mötley Crüe, Bizarrap und Los Tigres del Norte. Eintritt zur Feria, Fahrgeschäfte und Parken sind ebenfalls kostenlos. Nur der Palenque erfordert eine Eintrittskarte.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wann tritt Katy Perry bei der FENAPO 2026 auf?<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Katy Perry tritt am Dienstag, dem 25. August 2026, im Foro de las Estrellas der FENAPO auf — der Eintritt ist frei.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wo kaufe ich Tickets für den Palenque der FENAPO 2026?<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Palenque-Tickets werden ausschließlich über den offiziellen Kanal verkauft: slpfastticket.com. Die Preise variieren je nach Künstler und Sitzplatz. Meiden Sie Wiederverkäufer — der Einlass erfolgt über elektronische Validierung.</p></details>
</div>
</section>

<div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Möchten Sie jede Woche den Feria-Plan in Ihrem Postfach?</p>
  <p class="text-purple-100 text-sm mb-4">Jeden Montag schicken wir die besten Events der Woche in SLP — kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-purple-700 font-bold px-6 py-3 rounded-full hover:bg-purple-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wann findet die FENAPO 2026 statt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die FENAPO 2026 (die Feria Nacional Potosina) läuft von Freitag, dem 7. August, bis Sonntag, dem 30. August 2026 im Recinto Ferial in San Luis Potosí, Mexiko."
      }
    },
    {
      "@type": "Question",
      "name": "Sind die Konzerte der FENAPO 2026 kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Alle 21 Konzerte im Foro de las Estrellas (früher Teatro del Pueblo) sind kostenlos, darunter Katy Perry, Mötley Crüe, Bizarrap und Los Tigres del Norte. Eintritt zur Feria, Fahrgeschäfte und Parken sind ebenfalls kostenlos. Nur der Palenque erfordert eine Eintrittskarte."
      }
    },
    {
      "@type": "Question",
      "name": "Wann tritt Katy Perry bei der FENAPO 2026 auf?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Katy Perry tritt am Dienstag, dem 25. August 2026, im Foro de las Estrellas der FENAPO auf — der Eintritt ist frei."
      }
    },
    {
      "@type": "Question",
      "name": "Wo kaufe ich Tickets für den Palenque der FENAPO 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Palenque-Tickets werden ausschließlich über den offiziellen Kanal verkauft: slpfastticket.com. Die Preise variieren je nach Künstler und Sitzplatz. Meiden Sie Wiederverkäufer — der Einlass erfolgt über elektronische Validierung."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<div class="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-purple-900 mb-3">このガイドの内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-purple-800 text-sm">
    <a href="#overview" class="hover:underline">→ FENAPO 2026 の概要</a>
    <a href="#top-picks" class="hover:underline">→ 見逃せない6つの夜</a>
    <a href="#foro" class="hover:underline">→ Foro de las Estrellas のスケジュール（無料）</a>
    <a href="#palenque" class="hover:underline">→ Palenque のスケジュール（有料）</a>
    <a href="#by-style" class="hover:underline">→ ジャンルで選ぶ夜</a>
    <a href="#tickets" class="hover:underline">→ チケットと入場</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
  </nav>
  <p class="mt-4 text-sm text-purple-700 italic">公式ラインナップ全編公開：2026年5月27日 · 最終更新：2026年7月1日</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>FENAPO 2026 の全ラインナップが発表されました。近年で最も野心的な内容です。</strong>Katy Perry と Mötley Crüe が Foro de las Estrellas で無料公演、Bizarrap、そしてフェリアの最後を飾る Los Tigres del Norte、さらに Palenque では Grupo Firme、Julión Álvarez、Edén Muñoz などが登場します。全35公演を日付順にご紹介します。
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FENAPO 2026 の概要</h2>
</div>
<div class="speakable bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>FENAPO 2026 — メキシコの Feria Nacional Potosina — は8月7日から30日まで</strong>、San Luis Potosí の Recinto Ferial で開催されます。Foro de las Estrellas（旧 Teatro del Pueblo）での<strong>無料コンサート21公演</strong>と、<strong>有料の Palenque 14公演</strong>を擁します。フェリアの入場、遊具、駐車場は無料です。
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>日程：</strong>2026年8月7日（金）〜8月30日（日）</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Foro de las Estrellas：</strong>無料、21公演（Katy Perry、Mötley Crüe、Bizarrap、Los Tigres del Norte…）</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Palenque：</strong>チケットは slpfastticket.com（Grupo Firme、Julión Álvarez、Ha*Ash…）</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>詳しい準備情報</strong>（交通、予算、宿泊）：<a href="/blog/fenapo-2026-guia-preparacion" class="text-purple-700 underline font-semibold">FENAPO 準備ガイド</a></span></li>
  </ul>
</div>
</section>

<section id="top-picks" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">見逃せない6つの夜</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">8月25日（火）· Foro · 無料</p><h3 class="font-bold text-lg text-gray-900 mb-1">Katy Perry</h3><p class="text-sm text-gray-600">フェリア最大の夜。世界的なポップスターが完全無料で登場します。数時間前には到着してください。</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">8月8日（土）· Foro · 無料</p><h3 class="font-bold text-lg text-gray-900 mb-1">Mötley Crüe</h3><p class="text-sm text-gray-600">無料のフェリア会場に立つロックの伝説。最初の土曜日で、満員が予想されます。</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">8月18日（火）· Foro · 無料</p><h3 class="font-bold text-lg text-gray-900 mb-1">Bizarrap</h3><p class="text-sm text-gray-600">BZRP Music Sessions を手がけるアルゼンチンのプロデューサー。若い世代に最も期待されている公演のひとつです。</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">8月30日（日）· Foro · 無料</p><h3 class="font-bold text-lg text-gray-900 mb-1">Los Tigres del Norte</h3><p class="text-sm text-gray-600">最終夜。ノルテーニョ最大の名門が2026年の開催を締めくくります。</p></div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5"><p class="text-xs font-bold text-amber-600 uppercase mb-1">8月21日（金）· Palenque · 有料</p><h3 class="font-bold text-lg text-gray-900 mb-1">Grupo Firme</h3><p class="text-sm text-gray-600">リージョナル・メキシカン最大級のアーティストが、Palenque の親密なアリーナ形式で登場します。</p></div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5"><p class="text-xs font-bold text-amber-600 uppercase mb-1">8月30日（日）· Palenque · 有料</p><h3 class="font-bold text-lg text-gray-900 mb-1">Julión Álvarez</h3><p class="text-sm text-gray-600">バンダで最も愛される歌声のひとりが飾る Palenque の最終夜。このチケットは真っ先に売り切れます。</p></div>
</div>
</section>

<img src="/images/blog/fenapo-2026-cartel-guia-completa-fairgrounds.png" alt="San Luis Potosí の FENAPO 会場" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="foro" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Foro de las Estrellas：無料21公演すべて</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">Foro de las Estrellas（かつて Teatro del Pueblo として知られたステージ）では、大規模な無料コンサートが開催されます。チケットはなく、入場は先着順です。海外のヘッドライナーの公演では、午後の早い時間には到着するよう計画してください。8月17日（月）、8月24日（月）、8月29日（土）に Foro の公演はありません。</p>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Foro de las Estrellas 全日程、FENAPO 2026</caption>
    <thead class="bg-purple-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">日付</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">アーティスト</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月7日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Gloria Trevi</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月8日（土）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Mötley Crüe</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月9日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Lila Downs</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月10日（月）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Yandel Sinfónico</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月11日（火）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Influencers más grandes de México</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月12日（水）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">El Bogueto</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月13日（木）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Xavi</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月14日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Ramón Ayala</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月15日（土）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Óscar Maydon</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月16日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Chihuahua Fest</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月18日（火）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Bizarrap</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月19日（水）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Sin Bandera</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月20日（木）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Kenia Os</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月21日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Laberinto y los Herederos de Nuevo León</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月22日（土）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Los Huracanes del Norte</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月23日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Los Acosta</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月25日（火）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Katy Perry</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月26日（水）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Santa Fe Klan</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月27日（木）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Potosinazo</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月28日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Alameños de la Sierra</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月30日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Los Tigres del Norte</td>
      </tr>
    </tbody>
  </table>
</div>
</section>

<section id="palenque" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Palenque：有料14公演すべて</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">Palenque はフェリアの親密なアリーナ形式の会場です。アーティストは中央で演奏し、観客とはわずか数メートルの距離です。FENAPO のプレミアムな体験であり、チケットが必要な唯一の部分です。</p>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Palenque 全日程、FENAPO 2026</caption>
    <thead class="bg-amber-600">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">日付</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">アーティスト</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月7日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Remmy Valenzuela</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月8日（土）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Luis R. Conríquez</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月9日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Conjunto Primavera</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月13日（木）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">María José</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月14日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Matute</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月15日（土）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Pesado e Invasores</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月16日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Cornelio Vega Jr.</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月20日（木）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Horóscopos de Durango</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月21日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Grupo Firme</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月23日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Ha*Ash</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月27日（木）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Emmanuel & Mijares</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月28日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Marca Registrada</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月29日（土）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Edén Muñoz</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月30日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Julión Álvarez</td>
      </tr>
    </tbody>
  </table>
</div>
<img src="/images/blog/fenapo-2026-cartel-guia-completa-palenque.png" alt="San Luis Potosí の FENAPO Palenque 会場" class="w-full rounded-2xl shadow-lg mb-6" loading="lazy" />
</section>

<section id="by-style" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">ジャンルで選ぶ夜</h2>
</div>
<div class="space-y-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎤 ポップ＆インターナショナル</h3><p class="text-gray-700 text-sm leading-relaxed">Gloria Trevi がフェリアの幕を開け（8月7日金）、Yandel Sinfónico（8月10日月）、Sin Bandera（8月19日水）、Kenia Os（8月20日木）、Katy Perry（8月25日火）— いずれも Foro で無料です。Palenque では：María José（8月13日木）、Ha*Ash（8月23日日）、Emmanuel & Mijares（8月27日木）。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎸 ロック＆懐かしのヒット</h3><p class="text-gray-700 text-sm leading-relaxed">Mötley Crüe（8月8日土、Foro、無料）がヘッドライナーです。Palenque では Matute（8月14日金）が80〜90年代のパーティーを盛り上げます。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🤠 ノルテーニョ、バンダ＆リージョナル</h3><p class="text-gray-700 text-sm leading-relaxed">Foro で無料：Ramón Ayala（8月14日金）、Laberinto y los Herederos（8月21日金）、Los Huracanes del Norte（8月22日土）、Alameños de la Sierra（8月28日金）、そしてフェリアを締めくくる Los Tigres del Norte（8月30日日）。Palenque では：Remmy Valenzuela（8月7日金）、Conjunto Primavera（8月9日日）、Pesado e Invasores（8月15日土）、Cornelio Vega Jr.（8月16日日）、Horóscopos de Durango（8月20日木）、Grupo Firme（8月21日金）、Marca Registrada（8月28日金）、Edén Muñoz（8月29日土）、Julión Álvarez（8月30日日）。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🔥 コリード＆アーバン</h3><p class="text-gray-700 text-sm leading-relaxed">Foro で無料：El Bogueto（8月12日水）、Xavi（8月13日木）、Óscar Maydon（8月15日土）、Bizarrap（8月18日火）、Santa Fe Klan（8月26日水）。Palenque では：Luis R. Conríquez（8月8日土）。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌎 フォーク、クンビア＆特別な夜</h3><p class="text-gray-700 text-sm leading-relaxed">Lila Downs（8月9日日）が Foro にメキシカン・フォークを届けます。Los Acosta（8月23日日）でクンビアを踊りましょう。さらに地元色豊かな2つの夜：地元の才能が集う Potosinazo（8月27日木）と Chihuahua Fest（8月16日日）。8月11日（火）には「メキシコ最大のインフルエンサー」を集めたイベントが行われます。</p></div>
</div>
</section>

<section id="tickets" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">チケットと入場</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Foro de las Estrellas：</strong>無料、チケット不要、先着順です。Katy Perry、Mötley Crüe、Bizarrap の公演では数時間前に到着してください。</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Palenque：</strong>購入は必ず <strong>slpfastticket.com</strong> で。SLP 州政府が発表した公式チャネルです。料金はアーティストとエリアによって異なります。</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>転売業者は避けてください：</strong>入場は電子認証で行われ、人気公演では偽造チケットがよく出回ります。</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>フェリア、遊具、駐車場：</strong>2026年の開催期間中すべて無料です。</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">遠方からお越しですか？ホテル、交通、1日の予算については<a href="/blog/fenapo-2026-guia-preparacion" class="text-purple-700 underline font-semibold">FENAPO 2026 準備ガイド</a>で、会場の詳細は<a href="/events/fenapo-2026" class="text-purple-700 underline font-semibold">イベントページ</a>でご案内しています。</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">FENAPO 2026 はいつ開催されますか？<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">FENAPO 2026（Feria Nacional Potosina）は、2026年8月7日（金）から8月30日（日）まで、メキシコ・San Luis Potosí の Recinto Ferial で開催されます。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">FENAPO 2026 のコンサートは無料ですか？<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Foro de las Estrellas（旧 Teatro del Pueblo）での21公演はすべて無料で、Katy Perry、Mötley Crüe、Bizarrap、Los Tigres del Norte を含みます。フェリアの入場、遊具、駐車場も無料です。チケットが必要なのは Palenque のみです。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Katy Perry は FENAPO 2026 でいつ公演しますか？<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Katy Perry は2026年8月25日（火）に FENAPO の Foro de las Estrellas で公演します。入場は無料です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">FENAPO 2026 の Palenque チケットはどこで購入できますか？<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Palenque のチケットは公式チャネル slpfastticket.com でのみ販売されます。料金はアーティストと座席の位置によって異なります。転売業者は避けてください。入場は電子認証で行われます。</p></details>
</div>
</section>

<div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">毎週のフェリアの予定をメールで受け取りませんか？</p>
  <p class="text-purple-100 text-sm mb-4">毎週月曜日に、SLP のその週のベストイベントを無料でお届けします。</p>
  <a href="/subscribe" class="inline-block bg-white text-purple-700 font-bold px-6 py-3 rounded-full hover:bg-purple-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "FENAPO 2026 はいつ開催されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FENAPO 2026（Feria Nacional Potosina）は、2026年8月7日（金）から8月30日（日）まで、メキシコ・San Luis Potosí の Recinto Ferial で開催されます。"
      }
    },
    {
      "@type": "Question",
      "name": "FENAPO 2026 のコンサートは無料ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Foro de las Estrellas（旧 Teatro del Pueblo）での21公演はすべて無料で、Katy Perry、Mötley Crüe、Bizarrap、Los Tigres del Norte を含みます。フェリアの入場、遊具、駐車場も無料です。チケットが必要なのは Palenque のみです。"
      }
    },
    {
      "@type": "Question",
      "name": "Katy Perry は FENAPO 2026 でいつ公演しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Katy Perry は2026年8月25日（火）に FENAPO の Foro de las Estrellas で公演します。入場は無料です。"
      }
    },
    {
      "@type": "Question",
      "name": "FENAPO 2026 の Palenque チケットはどこで購入できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Palenque のチケットは公式チャネル slpfastticket.com でのみ販売されます。料金はアーティストと座席の位置によって異なります。転売業者は避けてください。入場は電子認証で行われます。"
      }
    }
  ]
}
</script>

</div>`;

async function main() {
  const { data: post, error: fetchErr } = await supabase
    .from('blog_posts')
    .select('id, content')
    .eq('slug', SLUG)
    .single();
  if (fetchErr) {
    console.error('FETCH ERROR:', fetchErr.message);
    process.exit(1);
  }

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content_de: CONTENT_DE, content_ja: CONTENT_JA })
    .eq('id', post.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }

  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', post.id)
    .single();
  if (chkErr) {
    console.error('VERIFY FETCH ERROR:', chkErr.message);
    process.exit(1);
  }

  const countTags = (s) => (s.match(/<[^>]+>/g) || []).length;
  const en = check.content || '';
  const de = check.content_de || '';
  const ja = check.content_ja || '';

  const results = {
    de_differs_from_en: de !== en,
    ja_differs_from_en: ja !== en,
    en_tag_count: countTags(en),
    de_tag_count: countTags(de),
    ja_tag_count: countTags(ja),
  };

  const extractJsonLd = (s) => {
    const m = s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    return m ? m[1].trim() : null;
  };
  try {
    JSON.parse(extractJsonLd(de));
    results.de_jsonld_valid = true;
  } catch (e) {
    results.de_jsonld_valid = false;
    results.de_jsonld_error = e.message;
  }
  try {
    JSON.parse(extractJsonLd(ja));
    results.ja_jsonld_valid = true;
  } catch (e) {
    results.ja_jsonld_valid = false;
    results.ja_jsonld_error = e.message;
  }

  // Every artist / venue name must survive verbatim in both translations.
  const NAMES = [
    'Gloria Trevi', 'Mötley Crüe', 'Lila Downs', 'Yandel Sinfónico',
    'Influencers más grandes de México', 'El Bogueto', 'Xavi', 'Ramón Ayala',
    'Óscar Maydon', 'Chihuahua Fest', 'Bizarrap', 'Sin Bandera', 'Kenia Os',
    'Laberinto y los Herederos de Nuevo León', 'Los Huracanes del Norte',
    'Los Acosta', 'Katy Perry', 'Santa Fe Klan', 'Potosinazo',
    'Alameños de la Sierra', 'Los Tigres del Norte', 'Remmy Valenzuela',
    'Luis R. Conríquez', 'Conjunto Primavera', 'María José', 'Matute',
    'Pesado e Invasores', 'Cornelio Vega Jr.', 'Horóscopos de Durango',
    'Grupo Firme', 'Ha*Ash', 'Emmanuel & Mijares', 'Marca Registrada',
    'Edén Muñoz', 'Julión Álvarez', 'Foro de las Estrellas', 'Palenque',
    'Teatro del Pueblo', 'San Luis Potosí', 'slpfastticket.com',
  ];
  results.de_missing_names = NAMES.filter((n) => !de.includes(n));
  results.ja_missing_names = NAMES.filter((n) => !ja.includes(n));

  // Hrefs and image srcs must be byte-identical across all three columns.
  const attrs = (s, re) => (s.match(re) || []).sort();
  const hrefRe = /href="[^"]*"/g;
  const srcRe = /src="[^"]*"/g;
  results.de_hrefs_match = JSON.stringify(attrs(de, hrefRe)) === JSON.stringify(attrs(en, hrefRe));
  results.ja_hrefs_match = JSON.stringify(attrs(ja, hrefRe)) === JSON.stringify(attrs(en, hrefRe));
  results.de_srcs_match = JSON.stringify(attrs(de, srcRe)) === JSON.stringify(attrs(en, srcRe));
  results.ja_srcs_match = JSON.stringify(attrs(ja, srcRe)) === JSON.stringify(attrs(en, srcRe));

  console.log(JSON.stringify(results, null, 2));

  const allOk =
    results.de_differs_from_en && results.ja_differs_from_en &&
    results.de_tag_count === results.en_tag_count &&
    results.ja_tag_count === results.en_tag_count &&
    results.de_jsonld_valid && results.ja_jsonld_valid &&
    results.de_missing_names.length === 0 && results.ja_missing_names.length === 0 &&
    results.de_hrefs_match && results.ja_hrefs_match &&
    results.de_srcs_match && results.ja_srcs_match;

  console.log(allOk ? '\nAll checks passed.' : '\nChecks FAILED — review output.');
  process.exit(allOk ? 0 : 1);
}

main();
