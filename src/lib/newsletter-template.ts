/**
 * San Luis Way Weekly — Smart Brevity edition template.
 *
 * The draft is pasted MANUALLY into the Beehiiv post editor, which keeps
 * semantic structure (h2/h3/h4, <strong>, <ul>, <a>, <hr>, <img>) and discards
 * CSS. So this template is deliberately style-free: structure carries the
 * format. The HTML comments and heading texts below are load-bearing anchors
 * for the section parser, UTM tagging, content-repetition saves, and image
 * injection — change them only in lockstep with those modules.
 */

export const CLOSING_AND_FOOTER_HTML = `
          <!-- CLOSING -->
          <hr />
          <p><strong>That's a wrap.</strong> Got a tip, event, or story we should know about? Just hit reply — we read every message.</p>
          <p>Love this newsletter? <strong>Forward it to a friend</strong> who's curious about SLP life.</p>
          <p>🌐 <a href="https://www.sanluisway.com">Website</a> · 📸 <a href="https://www.instagram.com/sanluisway/">Instagram</a> · 🎵 <a href="https://www.tiktok.com/@sanluisway">TikTok</a></p>
          <p>Hasta la próxima,<br /><strong>The San Luis Way Team</strong> 🌵</p>
`;

export const NEWSLETTER_TEMPLATE = `
          <!-- HEADER -->
          <p><em>📬 [WEEK_DATE_RANGE] · Everything worth knowing about SLP this week — all signal, no rollo. ~4 minutes.</em></p>

          <!-- OPENING HOOK -->
          [OPENING_HOOK_TEXT]

          <!-- AD_PLACEMENT_TOP -->

          <!-- CARD 1: THIS WEEK AT A GLANCE -->
          <hr />

          <!-- NEWS SECTION -->
          <h2>🔎 1 big thing</h2>
          <p><em>📰 Top News</em></p>
          <h4>[NEWS_HEADLINE_1]</h4>
          <p>[NEWS_SUMMARY_1]</p>
          <p><strong>Why it matters:</strong> [IMPACT_1]</p>
          <ul>
            <li>[NEWS_DETAIL_1A]</li>
            <li>[NEWS_DETAIL_1B]</li>
          </ul>
          <p><strong>Go deeper:</strong> [NEWS_SOURCE_LINE_1]</p>

          <h4>2. [NEWS_HEADLINE_2]</h4>
          <p>[NEWS_SUMMARY_2]</p>
          <p><strong>Why it matters:</strong> [IMPACT_2]</p>

          <h4>3. [NEWS_HEADLINE_3]</h4>
          <p>[NEWS_SUMMARY_3]</p>
          <p><strong>Why it matters:</strong> [IMPACT_3]</p>

          <!-- QUICK HITS -->
          <h3>⚡ Quick Hits</h3>
          <ul>
            <li>[QUICK_HIT_1]</li>
            <li>[QUICK_HIT_2]</li>
            <li>[QUICK_HIT_3]</li>
          </ul>

          <!-- WEATHER & ENVIRONMENT -->
          <h3>🌦️ Weather Watch</h3>
          <ul>
            <li><strong>The forecast:</strong> [WEATHER_SUMMARY]</li>
            <li><strong>What to do:</strong> [WEATHER_RECOMMENDATION]</li>
          </ul>

          <!-- MARKET WATCH -->
          <h3>💰 Market Watch</h3>
          <ul>
            <li><strong>By the numbers:</strong> USD/MXN at [EXCHANGE_RATE]. [MARKET_TREND_NOTE]</li>
          </ul>

          <!-- CARD 2: WHAT'S ON -->
          <hr />
          <h2>🎟️ What's On</h2>

          <!-- TOP PICKS -->
          <h3>🌟 This Week's Top Picks</h3>

          <p><em>⭐ Editor's pick — [CATEGORY_1]</em></p>
          <h4>[EVENT_NAME_1]</h4>
          <p>📅 [DATE_TIME_1] · 📍 [VENUE_1] · 💰 [COST_1]</p>
          <p>[EVENT_DESCRIPTION_1]</p>
          <p><strong>Go deeper:</strong> <a href="[LINK_1]">More info →</a></p>

          <p><em>[CATEGORY_2]</em></p>
          <h4>[EVENT_NAME_2]</h4>
          <p>📅 [DATE_TIME_2] · 📍 [VENUE_2] · 💰 [COST_2]</p>
          <p>[EVENT_DESCRIPTION_2]</p>
          <p><strong>Go deeper:</strong> <a href="[LINK_2]">More info →</a></p>

          <p><em>[CATEGORY_3]</em></p>
          <h4>[EVENT_NAME_3]</h4>
          <p>📅 [DATE_TIME_3] · 📍 [VENUE_3] · 💰 [COST_3]</p>
          <p>[EVENT_DESCRIPTION_3]</p>
          <p><strong>Go deeper:</strong> <a href="[LINK_3]">More info →</a></p>

          <p><a href="https://www.sanluisway.com/events">See All Events →</a></p>

          <!-- MORE THIS WEEK -->
          <h3>🎭 More This Week</h3>
          <ul>
            <li>🎭 <strong>[EVENT_NAME]</strong> — [DATE] @ [VENUE] · [TIME]</li>
            <li>🎵 <strong>[EVENT_NAME]</strong> — [DATE] @ [VENUE] · [TIME]</li>
            <li>🍽️ <strong>[EVENT_NAME]</strong> — [DATE] @ [VENUE] · [TIME]</li>
            <li>⚽ <strong>[EVENT_NAME]</strong> — [DATE] @ [VENUE] · [TIME]</li>
          </ul>

          <!-- SPOT OF THE WEEK -->
          <h3>📍 Spot of the Week</h3>
          <h4>[SPOT_NAME]</h4>
          <p>[SPOT_DESCRIPTION]</p>
          <ul>
            <li><strong>The details:</strong> 📍 [SPOT_ADDRESS] · 🕐 [SPOT_HOURS]</li>
            <li><strong>Go deeper:</strong> <a href="[SPOT_MAPS_LINK]">View on Google Maps →</a></li>
          </ul>

          <!-- AROUND TOWN -->
          <h3>🏙️ Around Town</h3>
          <p><strong>✨ NOW OPEN</strong></p>
          <h4>[NEW_PLACE_NAME]</h4>
          <p>[NEW_PLACE_SUMMARY]</p>
          <ul>
            <li><strong>The details:</strong> 📍 [ADDRESS] · <a href="[LINK]">@instagram</a></li>
          </ul>
          <p><strong>📌 Good to know:</strong> [PRACTICAL_CITY_UPDATE]</p>

          <!-- COMING UP -->
          <h3>📅 Coming Up</h3>
          <ul>
            <li><strong>[DATE_1]</strong> — [UPCOMING_EVENT_1]</li>
            <li><strong>[DATE_2]</strong> — [UPCOMING_EVENT_2]</li>
            <li><strong>[DATE_3]</strong> — [UPCOMING_EVENT_3]</li>
            <li><strong>[DATE_4]</strong> — [UPCOMING_EVENT_4]</li>
          </ul>
          <p><a href="https://www.sanluisway.com/events">Mark your calendar →</a></p>

          <!-- AD_PLACEMENT_MIDDLE -->

          <!-- CARD 3: EXPAT TOOLKIT -->
          <hr />
          <h2>🧭 Expat Toolkit</h2>

          <!-- ASK AN EXPAT -->
          <h3>🙋 Ask an Expat</h3>
          <p><strong>Q: "[EXPAT_QUESTION]"</strong></p>
          <p>[EXPAT_ANSWER]</p>
          <p><em>Got a question? Hit reply — we'll answer it in a future edition.</em></p>

          <!-- PRO TIP -->
          <h3>💡 Expat Pro Tip</h3>
          <h4>[TIP_TITLE]</h4>
          <p>[TIP_BODY]</p>

          <!-- SPANISH CORNER -->
          <h3>🗣️ Spanish Corner</h3>
          <ul>
            <li>"[SPANISH_PHRASE_1]" — <strong>[PHRASE_MEANING_1]</strong>. 💬 [PHRASE_EXAMPLE_1]</li>
            <li>"[SPANISH_PHRASE_2]" — <strong>[PHRASE_MEANING_2]</strong>. 💬 [PHRASE_EXAMPLE_2]</li>
          </ul>

          <!-- CARD 4: GO DEEPER -->
          <hr />
          <h2>🧳 Go Deeper</h2>

          <!-- WEEKEND ESCAPE -->
          <h3>🌿 Weekend Escape</h3>
          <h4>[DESTINATION_NAME]</h4>
          <p>[ESCAPE_SUMMARY]</p>
          <ul>
            <li><strong>Why go:</strong> [ESCAPE_WHY_GO]</li>
            <li><strong>The details:</strong> [ESCAPE_LOGISTICS]</li>
            <li><strong>Go deeper:</strong> <a href="https://www.sanluisway.com/outdoors">Explore more day trips →</a></li>
          </ul>

          <!-- FROM THE BLOG - Featured Articles -->
          <h3>📖 From the Blog</h3>
          <p><span>FEATURED</span></p>
          <h4>[BLOG_POST_TITLE]</h4>
          <p>[ONE_SENTENCE_TEASER]</p>
          <p><a href="[BLOG_POST_URL]">Read the Full Story →</a></p>

          <!-- COMMUNITY SPOTLIGHT -->
          <h3>✨ Community Spotlight</h3>
          <h4>[SPOTLIGHT_NAME]</h4>
          <p>[SPOTLIGHT_TYPE]</p>
          <p>[SPOTLIGHT_STORY]</p>
          <ul>
            <li><strong>The details:</strong> 📍 [SPOTLIGHT_ADDRESS] · 📬 [SPOTLIGHT_CONTACT]</li>
          </ul>

          <!-- COMUNIDAD SECTION (Custom Content) -->
          <!-- COMUNIDAD_PLACEHOLDER -->

          <!-- DID YOU KNOW? -->
          <hr />
          <h2>🎁 1 fun thing</h2>
          <h3>🧠 Did You Know?</h3>
          <h4>[FACT_TITLE]</h4>
          <p>[FACT_BODY]</p>

          <!-- CALL TO ACTION -->
          <hr />
          <h3>[CTA_TITLE]</h3>
          <p>[CTA_BODY]</p>
          <p><strong><a href="[CTA_BUTTON_LINK]">[CTA_BUTTON_LABEL]</a></strong></p>

          <!-- AD_PLACEMENT_BOTTOM -->

          <!-- CLOSING_FOOTER_PLACEHOLDER -->
`;
