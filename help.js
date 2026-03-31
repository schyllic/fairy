// ═══ Fairy Calendar — help.js ═══
// Translated help modal content. Each key is an HTML string for that language.
// Falls back to 'en' if a language is not present.

const HELP_I18N = {

// ─── English ────────────────────────────────────────────────────────────────
en: `
<h3>The Year Number</h3>
<p>This calendar uses the <strong>Human Era</strong> (Holocene Era). The standard BC/CE year count is anchored to 1 CE — a reference point calculated in the 6th century from estimated lifespans. The Human Era shifts the origin to something older and more universal: it adds 10,000 years to place the dawn of human civilization — the agricultural revolution — at Year 1. The result: 2026 CE = <strong>Year 12026</strong>.</p>
<p>This numbering was conceived independently for this calendar — it was only later discovered that scientist Cesare Emiliani had proposed the same idea decades earlier.</p>
<hr>
<h3>The Moons (Lunar Months)</h3>
<p>The calendar has 12 moons per year, each beginning on a new moon:</p>
<p>Snowmoon · Wakingmoon · Seedmoon · Bloommoon · Flowermoon · Berrymoon · Summermoon · Harvestmoon · Gathermoon · Leafmoon · Frostmoon · <strong>Darkmoon</strong></p>
<p><strong>Darkmoon</strong> is always the last moon of the year — the one containing the winter solstice.</p>
<p><strong>Bluemoon:</strong> When the solstice falls on day 19 or later of Darkmoon (Bear or Fox), a 13th moon (Bluemoon) is added after Darkmoon, making a 13-moon year.</p>
<p>The threshold isn't arbitrary. A solar year (~365.24 days) is about 10.88 days longer than 12 lunar months (~354.36 days). If the solstice falls on day 19 of Darkmoon, next year without correction it would land on day ~30 — right at the edge of the month, or just past it. Day 20 or later means the solstice would overshoot into the <em>following</em> moon entirely, so Darkmoon would no longer contain the solstice. The Bear/Fox rule is the exact astronomical threshold for when the calendar must self-correct. Adding Bluemoon resets the solstice back to Robin or Rabbit territory (~day 6) the following year, and the cycle begins again.</p>
<hr>
<h3>The Year Animal</h3>
<p>Darkmoon is divided into five named parts. Whichever part the winter solstice falls in names the year:</p>
<table class="help-table">
  <tr><th>Part</th><th>Days</th><th>Character</th></tr>
  <tr><td><strong>Robin</strong></td><td>1–6</td><td>Early and bright — the year begins before the dark has truly settled</td></tr>
  <tr><td><strong>Rabbit</strong></td><td>7–12</td><td>Alert and watchful, sitting at the threshold</td></tr>
  <tr><td><strong>Turkey</strong></td><td>13–18</td><td>Mid-dark, gathering and deliberate</td></tr>
  <tr><td><strong>Bear</strong></td><td>19–24</td><td>Deep in the dark — needs to sleep a little longer this year</td></tr>
  <tr><td><strong>Fox</strong></td><td>25–end</td><td>Deepest drift — already out hunting in the long night</td></tr>
</table>
<p>The year animal is a shorthand for the offset between the solar and lunar calendar. A Robin year means the solstice arrived early in Darkmoon; a Fox year means the calendar has drifted far and a Bluemoon is coming.</p>
<hr>
<h3>The Weekday Names</h3>
<p>In <strong>Myth</strong> mode, the days are named for Norse gods and celestial bodies. The standard English weekday names already hide these figures — this calendar brings them forward.</p>
<table class="help-table">
  <tr><th>Fairy</th><th>Standard</th><th>Named for</th></tr>
  <tr><td><strong>Heimday</strong></td><td>Monday</td><td><strong>Heimdall</strong> — watchman of Asgard, guardian of the Bifrost rainbow bridge. He stands at the threshold, ever-watching — a fitting start to the week.</td></tr>
  <tr><td><strong>Tyrsday</strong></td><td>Tuesday</td><td><strong>Tyr</strong> — god of justice and honorable combat. He sacrificed his hand to bind the wolf Fenrir, upholding the law of the gods.</td></tr>
  <tr><td><strong>Wodensday</strong></td><td>Wednesday</td><td><strong>Woden (Odin)</strong> — the All-Father, god of wisdom, poetry, and the dead. He hung himself on Yggdrasil for nine days to earn the knowledge of the runes.</td></tr>
  <tr><td><strong>Thorsday</strong></td><td>Thursday</td><td><strong>Thor</strong> — god of thunder and lightning, defender of both gods and humans.</td></tr>
  <tr><td><strong>Freyasday</strong></td><td>Friday</td><td><strong>Freya</strong> — goddess of love, beauty, gold, and magic. She leads the Valkyries and weeps tears of red gold.</td></tr>
  <tr><td><strong>Moonday</strong></td><td>Saturday</td><td><strong>The Moon.</strong> Saturday is named for Saturn, a Roman deity who has no place among these Norse gods. Monday is already Moon's day — but that means a billion people begin their work week cursing the Moon. Moving it to the weekend transforms it from a burden into a blessing, and gives it the night sky it deserves.</td></tr>
  <tr><td><strong>Sunday</strong></td><td>Sunday</td><td><strong>The Sun</strong> — unchanged.</td></tr>
</table>
<hr>
<h3>Icons on Calendar Days</h3>
<table class="help-table">
  <tr><th>Icon</th><th>Meaning</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>New moon, first quarter, full moon, last quarter</td></tr>
  <tr><td>☀</td><td>Solstice or equinox</td></tr>
  <tr><td>Ⓟ + %</td><td>Lunar perigee (Moon closest to Earth); illumination percentage</td></tr>
  <tr><td>@</td><td>Lunar apogee (Moon farthest from Earth)</td></tr>
  <tr><td>🌠</td><td>Meteor shower near peak</td></tr>
  <tr><td>☄</td><td>Comet in visibility window</td></tr>
  <tr><td>🎂</td><td>Birthday</td></tr>
  <tr><td>Colored border</td><td>US federal holiday</td></tr>
</table>
<hr>
<h3>The Night Sky Panel</h3>
<p>Click any <strong>ⓘ</strong> button to open the events panel. When viewing today, the <strong>Tonight</strong> section shows sunset time, astronomical twilight (when the sky is truly dark — sun 18° below horizon, roughly 1.5–2 hours after sunset), visible planets, active meteor showers, and evening constellations visible from your location.</p>
<hr>
<h3>Other Lunar Calendars</h3>
<p>Many cultures have tracked time by the moon. The most widely used today is the <strong>Hebrew calendar</strong>, which shares some features with this one — and differs in revealing ways.</p>
<p><strong>What they share:</strong> Both are <em>lunisolar</em> — they follow the moon for months but add an intercalary (leap) month to stay aligned with the solar year. Both start each month on the new moon.</p>
<p><strong>How the Hebrew calendar works:</strong> It has 12 months of 29–30 days (13 in a leap year). Seven times in every 19-year cycle (the Metonic cycle), a 13th month is inserted. The year begins in autumn around the fall equinox (Rosh Hashanah). All month names are ancient Babylonian, adopted during the Jewish exile in the 6th century BCE — before that, months had old Canaanite names (Aviv, Ziv, Ethanim, Bul) or were simply numbered. The year count (Anno Mundi) was calculated in the 2nd century CE by Rabbi Yose ben Halafta, summing the ages of biblical figures back to creation, placing 2026 CE at approximately year <strong>5786</strong>.</p>
<p><strong>The months</strong> — all names are Akkadian/Babylonian unless noted:</p>
<table class="help-table">
  <tr><th>#</th><th>Month</th><th>Days</th><th>Name meaning</th><th>Notes</th></tr>
  <tr><td>1</td><td><strong>Nisan</strong></td><td>30</td><td>"first fruits / beginning" (<em>Nisanu</em>); pre-exile <em>Aviv</em> = "spring, green grain ears"</td><td>Religious new year; Passover</td></tr>
  <tr><td>2</td><td><strong>Iyar</strong></td><td>29</td><td>"blossom / brightness" (<em>Ayaru</em>); pre-exile <em>Ziv</em> = "splendor"</td><td></td></tr>
  <tr><td>3</td><td><strong>Sivan</strong></td><td>30</td><td>"season" (<em>Simanu</em>)</td><td>Shavuot (Weeks / Pentecost)</td></tr>
  <tr><td>4</td><td><strong>Tammuz</strong></td><td>29</td><td>Named for Dumuzid, Sumerian god of fertility; possibly "true/faithful son"</td><td>The only month named after a pagan deity</td></tr>
  <tr><td>5</td><td><strong>Av</strong></td><td>30</td><td>"father" (Hebrew/Aramaic <em>Ab</em>)</td><td>Tisha B'Av: mourning the destruction of both Temples (586 BCE and 70 CE)</td></tr>
  <tr><td>6</td><td><strong>Elul</strong></td><td>29</td><td>"harvest / gleaning" (<em>Ululu</em>); later given a Hebrew acronym: <em>"I am my beloved's and my beloved is mine"</em></td><td>Month of repentance</td></tr>
  <tr><td>7</td><td><strong>Tishrei</strong></td><td>30</td><td>"beginning" (<em>Tashritu</em>, from "to start") — the year begins here despite being month 7; pre-exile <em>Ethanim</em> = "ever-flowing streams"</td><td>Rosh Hashanah, Yom Kippur, Sukkot</td></tr>
  <tr><td>8</td><td><strong>Cheshvan</strong></td><td>29–30</td><td>Possibly "eighth month" (<em>Arahsamna</em>); "Mar" (bitter) prefix added later in Aramaic; pre-exile <em>Bul</em> = "rain / produce"</td><td>The only month with no major holidays — <em>Bitter Cheshvan</em></td></tr>
  <tr><td>9</td><td><strong>Kislev</strong></td><td>30–29</td><td>Uncertain; possibly "Orion's belt" or "flank / thigh"</td><td>Hanukkah begins</td></tr>
  <tr><td>10</td><td><strong>Tevet</strong></td><td>29</td><td>"to sink / submerge" (<em>Tebetu</em>) — winter rains soaking the earth</td><td>Hanukkah ends</td></tr>
  <tr><td>11</td><td><strong>Shevat</strong></td><td>30</td><td>"staff / rod" or "strike" (<em>Shabatu</em>) — possibly winter storms</td><td>Tu B'Shevat: new year of the trees</td></tr>
  <tr><td>12</td><td><strong>Adar</strong></td><td>29 (30 in leap)</td><td>"dark / cloudy" or "threshing floor" (<em>Addaru</em>)</td><td>Purim; becomes Adar I in leap years</td></tr>
  <tr><td>13</td><td><strong>Adar II</strong></td><td>29</td><td>Leap year only</td><td>The "real" Adar — Purim is always celebrated here, not in Adar I</td></tr>
</table>
<p><strong>A few more things worth knowing:</strong> The leap years within each 19-year cycle always fall in years 3, 6, 8, 11, 14, 17, and 19. The Metonic cycle is named for Greek astronomer Meton of Athens (~432 BCE), but the Hebrew calendar was already using it independently. The calendar was standardized by Hillel II around 359 CE, replacing live moon observation with arithmetic — which is why it no longer tracks the actual sky. Judaism also has four distinct "new years": Nisan 1 (religious calendar), Tishrei 1 (civil years — the celebrated one), Elul 1 (animal tithes), and Shevat 15 (trees).</p>
<p><strong>How this calendar differs:</strong></p>
<table class="help-table">
  <tr><td><strong>Year anchor</strong></td><td>The Hebrew year begins in <em>autumn</em>. This calendar begins in <em>winter</em> — Snowmoon starts just after the darkest night. The year rises from darkness toward light.</td></tr>
  <tr><td><strong>Leap month rule</strong></td><td>Hebrew intercalation follows a fixed 19-year schedule. This calendar uses a purely astronomical trigger: Bluemoon is added only when the winter solstice drifts late enough in Darkmoon that skipping it would push next year's solstice outside Darkmoon entirely.</td></tr>
  <tr><td><strong>Accuracy</strong></td><td>The modern Hebrew calendar uses a standardized lunar month length fixed since the 4th century CE and no longer tracks actual moon observation. This calendar computes real new moons using Meeus astronomical algorithms — it reflects the actual sky.</td></tr>
  <tr><td><strong>Month names</strong></td><td>Hebrew months carry ancient Babylonian names borrowed during exile. These months are named for what the natural world is doing.</td></tr>
  <tr><td><strong>The week</strong></td><td>The Hebrew week counts numbered days ending in Sabbath. This calendar names the days for the Norse gods who already secretly inhabit the English weekday names.</td></tr>
</table>
<p>The <strong>Islamic calendar</strong> is purely lunar with no intercalation, drifting through all seasons over ~33 years. The <strong>Chinese calendar</strong> is lunisolar and adds leap months similarly to Hebrew. Both are old and rich — this calendar is simply a new one, built for a specific family, in a specific place, watching a specific sky.</p>
<hr>
<h3>The Hindu Calendar (Panchanga)</h3>
<p>The Hindu calendar is one of the oldest continuous lunisolar calendars in the world, with roots in Vedic astronomical texts thousands of years old. This app follows the <strong>Amanta</strong> system — months run from new moon to new moon — aligned with the Drik Panchanga astronomical almanac.</p>
<p><strong>Year and era:</strong> The Hindu year begins in spring, at the new moon of <strong>Chaitra</strong>, near the vernal equinox. The era is the <strong>Vikrama Samvat</strong>: years count from 57 BCE, so 2026 CE corresponds to <strong>VS 2083</strong> (from Chaitra onward).</p>
<table class="help-table">
  <tr><th>#</th><th>Month</th><th>Sanskrit</th><th>Season</th><th>Notes</th></tr>
  <tr><td>1</td><td><strong>Chaitra</strong></td><td>चैत्र</td><td>Spring</td><td>New year; associated with Rama Navami</td></tr>
  <tr><td>2</td><td><strong>Vaishakha</strong></td><td>वैशाख</td><td>Spring</td><td>Buddha Purnima</td></tr>
  <tr><td>3</td><td><strong>Jyeshtha</strong></td><td>ज्येष्ठ</td><td>Summer</td><td>Named for the star Jyestha (Antares)</td></tr>
  <tr><td>4</td><td><strong>Ashadha</strong></td><td>आषाढ</td><td>Summer</td><td>Ratha Yatra; monsoon begins</td></tr>
  <tr><td>5</td><td><strong>Shravana</strong></td><td>श्रावण</td><td>Monsoon</td><td>Raksha Bandhan; sacred to Shiva</td></tr>
  <tr><td>6</td><td><strong>Bhadrapada</strong></td><td>भाद्रपद</td><td>Monsoon</td><td>Ganesh Chaturthi</td></tr>
  <tr><td>7</td><td><strong>Ashvin</strong></td><td>आश्विन</td><td>Autumn</td><td>Navaratri; Dussehra</td></tr>
  <tr><td>8</td><td><strong>Kartika</strong></td><td>कार्तिक</td><td>Autumn</td><td>Diwali; Kartik Purnima</td></tr>
  <tr><td>9</td><td><strong>Margashirsha</strong></td><td>मार्गशीर्ष</td><td>Pre-winter</td><td>Beloved of Krishna in the Gita</td></tr>
  <tr><td>10</td><td><strong>Pausha</strong></td><td>पौष</td><td>Winter</td><td>Makar Sankranti approaches</td></tr>
  <tr><td>11</td><td><strong>Magha</strong></td><td>माघ</td><td>Winter</td><td>Magh Mela; Vasant Panchami</td></tr>
  <tr><td>12</td><td><strong>Phalguna</strong></td><td>फाल्गुन</td><td>Late winter</td><td>Holi; Maha Shivaratri</td></tr>
</table>
<p><strong>Intercalation — Adhika Māsa:</strong> When a solar month passes with no new moon beginning a lunar month within it, an extra lunar month is inserted. This "leap month" (<em>Adhika Māsa</em> or <em>Purushottama Māsa</em>) carries the name of the following regular month with the prefix <em>Adhika</em> (extra). It is considered especially sacred — free from the ordinary obligations of the calendar, set apart for meditation and devotion. This happens roughly every 32–33 months.</p>
<p><strong>Nakshatras:</strong> The Hindu calendar is inseparable from the 27 <strong>nakshatras</strong> — lunar mansions that mark the Moon's path through the sky. Each nakshatra spans roughly 13°20′ of the ecliptic; the Moon moves through one per day. The sky panel in <strong>Jyotisha mode</strong> labels constellations with nakshatra names, their presiding deities, and lore drawn from the Rig Veda and the Brihat Samhita.</p>
<p><em>Jyotisha</em> (ज्योतिष) — the Vedic science of light and time — is the tradition that unifies all of this: astronomy, mythology, and the measurement of sacred intervals.</p>
<hr>
<h3>The Cherokee Calendar</h3>
<p>The Cherokee people (ᏣᎳᎩ, <em>Tsalagi</em>) have maintained a lunisolar calendar tied to the ecological rhythms of the southern Appalachians. The year begins with the first new moon after the winter solstice — the same anchor as this calendar.</p>
<table class="help-table">
  <tr><th>#</th><th>Cherokee</th><th>Romanized</th><th>English</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Cold Moon / Cold Month</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Bony Moon (hungry month)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Windy Moon</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Flower Moon</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Planting Moon</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Green Corn Moon</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Ripe Corn Moon</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>End of Fruit Moon</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Nut Moon</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Harvest Moon</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Trading Moon</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Snow Moon</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Intercalary Moon (as needed)</td></tr>
</table>
<p>The Cherokee syllabary was created in the early 19th century by <strong>Sequoyah</strong> (ᏎᏉᏯ), a silversmith who had never been taught to read or write. He spent roughly twelve years developing the script entirely from his own observation. By 1825, the majority of Cherokees were literate in their own language — a feat without parallel in recorded history.</p>
<hr>
<h3>The Haudenosaunee (Iroquois) Calendar</h3>
<p>The Haudenosaunee Confederacy — Mohawk, Oneida, Onondaga, Cayuga, Seneca, and (after ~1722) Tuscarora — organizes time around 13 ceremonial moons. The year begins at midwinter, centered on the <strong>Midwinter Ceremony</strong>, the most sacred of all Haudenosaunee observances.</p>
<table class="help-table">
  <tr><th>#</th><th>Moon</th><th>Ceremony / Character</th></tr>
  <tr><td>1</td><td><strong>Midwinter Moon</strong></td><td>Midwinter Ceremony — renewal, thanksgiving, dream sharing, and the rekindling of the sacred fire</td></tr>
  <tr><td>2</td><td><strong>Lateness Moon</strong></td><td>Time of cold and scarcity; community sharing and preparation</td></tr>
  <tr><td>3</td><td><strong>Sugar Maple Moon</strong></td><td>Maple sap runs; Sugar Bush Ceremony — first harvest of the year</td></tr>
  <tr><td>4</td><td><strong>Frog Moon</strong></td><td>Frogs return; spring planting begins</td></tr>
  <tr><td>5</td><td><strong>Planting Moon</strong></td><td>Seed Planting Ceremony — honoring the Three Sisters (corn, beans, squash)</td></tr>
  <tr><td>6</td><td><strong>Strawberry Moon</strong></td><td>Strawberry Ceremony — first fruit of summer; thanksgiving and social dances</td></tr>
  <tr><td>7</td><td><strong>Green Bean Moon</strong></td><td>Bean Ceremony — honoring the harvest of beans</td></tr>
  <tr><td>8</td><td><strong>Green Corn Moon</strong></td><td>Green Corn Ceremony — the central ceremony of summer; thanksgiving for the new corn</td></tr>
  <tr><td>9</td><td><strong>Harvest Moon</strong></td><td>Harvest Festival — gathering and preserving; community feasting</td></tr>
  <tr><td>10</td><td><strong>Frost Moon</strong></td><td>Preparation for winter; hunting season deepens</td></tr>
  <tr><td>11</td><td><strong>Cold Moon</strong></td><td>Storytelling season begins — stories may only be told when snow is on the ground</td></tr>
  <tr><td>12</td><td><strong>Very Cold Moon</strong></td><td>Deepest winter; the long nights; anticipation of renewal</td></tr>
  <tr><td>13</td><td><strong>Intercalary Moon</strong></td><td>Inserted as needed when a ceremony would otherwise fall in the wrong season</td></tr>
</table>
<hr>
<h3>A Note on Native American Intercalation</h3>
<p>The Cherokee and Haudenosaunee calendars — like most Native American lunar calendars — do not insert leap months by fixed arithmetic. The decision to add an extra moon was traditionally made by <strong>ceremonial leaders and elders</strong> when observed drift between the moon and the season threatened to move a sacred ceremony into the wrong time of year.</p>
<p>This places the living relationship between ceremony and season above calendar consistency. The calendar is a tool in service of the people and the land; when the tool drifts, the tool is adjusted.</p>
<p><strong>Examples of when a moon would be inserted:</strong></p>
<ul>
  <li>The <strong>Green Corn Ceremony</strong> is sacred to the moment when the new crop first becomes ready to eat — an act of profound thanksgiving that cannot happen before the corn is actually ripe. If the moons had run fast and Green Corn Moon arrived while the stalks were still forming, elders might add an extra moon and let the season catch up.</li>
  <li>The <strong>Midwinter Ceremony</strong> marks the true turning of the year in deep cold. If the moons had drifted so that Midwinter arrived before the ground had frozen and the longest nights had settled in, an extra moon could be inserted to preserve the ceremony's meaning.</li>
  <li>The <strong>Strawberry Ceremony</strong> celebrates the first wild strawberries. If Strawberry Moon came while the hillsides were still bare, the calendar — not the strawberries — needed to change.</li>
</ul>
<p><em>A note on sources and accuracy:</em> Native American calendrical traditions are living practices that vary by nation, community, and generation. The representations here are respectful approximations drawn from published sources and nations' own educational materials. If you are Haudenosaunee, Cherokee, or a member of a related nation, the traditions of your own elders and knowledge-keepers take precedence over anything written here.</p>
<hr>
<h3>Sky Cultures in the Night Sky Panel</h3>
<p>The sky view can overlay two cultural lenses on the same physical sky. Toggle them from the toolbar in sky mode.</p>
<p><strong>Skidi Pawnee:</strong> The Skidi Pawnee were a confederacy of villages on the Great Plains (present-day Nebraska and Kansas) whose cosmology was more astronomically elaborate than almost any other Plains culture. Their villages were laid out to mirror specific star patterns; their ceremonial calendar was regulated not by months but by the appearance of particular stars at dusk and dawn. The <strong>Evening Star</strong> (Venus in the west) was the mother of all life; the <strong>Morning Star</strong> (Mars) was her husband and the force of creation. Their star knowledge was encoded in charts painted on tanned elk and buffalo hide — some of the oldest surviving astronomical documents from North America. The <strong>Pawnee</strong> toggle labels the sky with Skidi star names and lore.</p>
<p><strong>Jyotisha (Hindu):</strong> <em>Jyotisha</em> (ज्योतिष, <em>the science of light</em>) is the Vedic tradition of astronomy and timekeeping. Central to it is the system of <strong>27 nakshatras</strong> — lunar mansions that divide the ecliptic into equal 13°20′ arcs. The Moon moves through roughly one nakshatra per day. Each nakshatra has a presiding deity, sacred lore from the Rig Veda and Brihat Samhita, and auspicious or inauspicious associations. The <strong>Jyotisha</strong> toggle labels the sky with nakshatra names, boundaries, and their presiding deities — so Scorpius becomes <em>Jyestha</em> (the eldest, presided by Indra) and Sagittarius reveals <em>Purvashadha</em> (the undefeated, presided by the Waters).</p>
`,

// ─── German ─────────────────────────────────────────────────────────────────
de: `
<h3>Die Jahreszahl</h3>
<p>Dieser Kalender verwendet die <strong>Menschheitsära</strong> (Holozän-Ära). Die übliche v. Chr./n. Chr.-Zählung ist auf das Jahr 1 n. Chr. geeicht — einen im 6. Jahrhundert aus geschätzten Lebenszeiten berechneten Bezugspunkt. Die Menschheitsära wählt einen älteren und universelleren Ursprung: sie addiert 10.000 Jahre, um den Beginn der menschlichen Zivilisation — die Agrarrevolution — auf Jahr 1 zu setzen. Das Ergebnis: 2026 n. Chr. = <strong>Jahr 12026</strong>.</p>
<p>Diese Nummerierung wurde unabhängig für diesen Kalender entwickelt — erst später wurde entdeckt, dass Wissenschaftler Cesare Emiliani Jahrzehnte früher denselben Gedanken gehabt hatte.</p>
<hr>
<h3>Die Monde (Mondmonate)</h3>
<p>Der Kalender hat 12 Monde pro Jahr, jeder beginnt mit dem Neumond:</p>
<p>Schneemond · Erwachensmond · Saatmond · Blütemond · Blumenmond · Beerenmond · Sommermond · Erntemond · Sammelmond · Blättermond · Frostmond · <strong>Dunkelmond</strong></p>
<p><strong>Dunkelmond</strong> ist immer der letzte Mond des Jahres — jener, der die Wintersonnenwende enthält.</p>
<p><strong>Blaumond:</strong> Fällt die Sonnenwende auf Tag 19 oder später des Dunkelmonds (Bär oder Fuchs), wird ein 13. Mond (Blaumond) nach dem Dunkelmond eingefügt — ein 13-Mond-Jahr.</p>
<p>Die Schwelle ist nicht willkürlich. Ein Sonnenjahr (~365,24 Tage) ist etwa 10,88 Tage länger als 12 Mondmonate (~354,36 Tage). Fällt die Sonnenwende auf Tag 19 des Dunkelmonds, würde sie ohne Korrektur im nächsten Jahr auf Tag ~30 fallen — am Rand des Monats oder darüber hinaus. Tag 20 oder später bedeutet, die Sonnenwende würde vollständig in den <em>folgenden</em> Mond rutschen, sodass Dunkelmond die Sonnenwende nicht mehr enthielte. Die Bär/Fuchs-Regel ist der genaue astronomische Schwellenwert. Das Einfügen des Blaumonds setzt die Sonnenwende im folgenden Jahr wieder in den Rotkehlchen- oder Hase-Bereich (~Tag 6) zurück.</p>
<hr>
<h3>Das Jahrestier</h3>
<p>Dunkelmond ist in fünf benannte Teile eingeteilt. Welcher Teil die Wintersonnenwende enthält, gibt dem Jahr seinen Namen:</p>
<table class="help-table">
  <tr><th>Teil</th><th>Tage</th><th>Charakter</th></tr>
  <tr><td><strong>Rotkehlchen</strong></td><td>1–6</td><td>Früh und hell — das Jahr beginnt, bevor die Dunkelheit sich wirklich gesetzt hat</td></tr>
  <tr><td><strong>Hase</strong></td><td>7–12</td><td>Wachsam und aufmerksam, an der Schwelle sitzend</td></tr>
  <tr><td><strong>Truthahn</strong></td><td>13–18</td><td>Mittig im Dunkel, sammelnd und bedächtig</td></tr>
  <tr><td><strong>Bär</strong></td><td>19–24</td><td>Tief im Dunkel — braucht in diesem Jahr etwas mehr Schlaf</td></tr>
  <tr><td><strong>Fuchs</strong></td><td>25–Ende</td><td>Tiefste Drift — jagt bereits in der langen Nacht</td></tr>
</table>
<p>Das Jahrestier ist eine Kurzform für den Versatz zwischen Sonnen- und Mondkalender. Ein Rotkehlchen-Jahr: die Sonnenwende kam früh. Ein Fuchs-Jahr: der Kalender hat stark gedriftet und ein Blaumond naht.</p>
<hr>
<h3>Die Wochentagsnamen</h3>
<p>Im <strong>Mythos</strong>-Modus sind die Tage nach nordischen Göttern und Himmelskörpern benannt. Die englischen Wochentagsnamen verbergen diese Figuren bereits — dieser Kalender stellt sie in den Vordergrund.</p>
<table class="help-table">
  <tr><th>Märchen</th><th>Standard</th><th>Benannt nach</th></tr>
  <tr><td><strong>Heimtag</strong></td><td>Montag</td><td><strong>Heimdall</strong> — Wächter Asgards, Hüter der Regenbogenbrücke Bifrost. Er steht an der Schwelle, immer wachend — ein passender Wochenstart.</td></tr>
  <tr><td><strong>Tirstag</strong></td><td>Dienstag</td><td><strong>Tyr</strong> — Gott der Gerechtigkeit und des ehrenhaften Kampfes. Er opferte seine Hand, um den Wolf Fenrir zu binden.</td></tr>
  <tr><td><strong>Wotanstag</strong></td><td>Mittwoch</td><td><strong>Wotan (Odin)</strong> — der Allvater, Gott der Weisheit, Poesie und der Toten. Er hing neun Tage an Yggdrasil, um das Wissen der Runen zu erlangen.</td></tr>
  <tr><td><strong>Donnerstag</strong></td><td>Donnerstag</td><td><strong>Thor</strong> — Gott des Donners, Beschützer von Göttern und Menschen.</td></tr>
  <tr><td><strong>Freyastag</strong></td><td>Freitag</td><td><strong>Freya</strong> — Göttin der Liebe, Schönheit, Gold und Magie.</td></tr>
  <tr><td><strong>Mondtag</strong></td><td>Samstag</td><td><strong>Der Mond.</strong> Samstag ist nach Saturn benannt — einer römischen Gottheit ohne Platz in dieser nordischen Welt. Montag ist bereits der Tag des Mondes — aber das bedeutet, dass Milliarden die Woche mit einem Fluch auf den Mond beginnen. Ihn ans Wochenende zu verschieben, macht ihn zu einem Segen.</td></tr>
  <tr><td><strong>Sonntag</strong></td><td>Sonntag</td><td><strong>Die Sonne</strong> — unverändert.</td></tr>
</table>
<hr>
<h3>Symbole auf Kalendertagen</h3>
<table class="help-table">
  <tr><th>Symbol</th><th>Bedeutung</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>Neumond, Erstes Viertel, Vollmond, Letztes Viertel</td></tr>
  <tr><td>☀</td><td>Sonnenwende oder Tagundnachtgleiche</td></tr>
  <tr><td>Ⓟ + %</td><td>Erdnähe des Mondes; Beleuchtungsgrad</td></tr>
  <tr><td>@</td><td>Erdferne des Mondes</td></tr>
  <tr><td>🌠</td><td>Meteorschauer nahe dem Höhepunkt</td></tr>
  <tr><td>☄</td><td>Komet im Sichtbarkeitsfenster</td></tr>
  <tr><td>🎂</td><td>Geburtstag</td></tr>
  <tr><td>Farbiger Rand</td><td>US-Bundesfeiertag</td></tr>
</table>
<hr>
<h3>Das Nachthimmel-Fenster</h3>
<p>Klicke auf eine beliebige <strong>ⓘ</strong>-Schaltfläche, um das Ereignispanel zu öffnen. Beim heutigen Tag zeigt der <strong>Heute Nacht</strong>-Bereich Sonnenuntergangszeit, astronomische Dämmerung (wenn der Himmel wirklich dunkel ist — Sonne 18° unter dem Horizont), sichtbare Planeten, aktive Meteorschauer und abendliche Sternbilder von deinem Standort.</p>
<hr>
<h3>Andere Mondkalender</h3>
<p>Viele Kulturen haben die Zeit nach dem Mond gemessen. Der heute verbreitetste ist der <strong>Hebräische Kalender</strong>. <strong>Gemeinsamkeiten:</strong> Beide sind <em>lunisolarer</em> Natur — sie folgen dem Mond für Monate, fügen aber einen Schaltmonat ein, um mit dem Sonnenjahr in Einklang zu bleiben. Beide beginnen jeden Monat mit dem Neumond.</p>
<p>Das hebräische Jahr beginnt im Herbst; dieses im Winter. Der hebräische Kalender folgt einem festen 19-Jahres-Rhythmus für Schaltmonate; dieser verwendet einen rein astronomischen Auslöser. Die Jahreszählung Anno Mundi setzt 2026 n. Chr. auf etwa Jahr <strong>5786</strong>. Der hebräische Kalender verwendet eine seit dem 4. Jahrhundert fixierte Mondmonatslänge; dieser berechnet echte Neumonde mit Meeus-Algorithmen.</p>
<p>Der <strong>Islamische Kalender</strong> ist rein lunarer Natur ohne Schaltung. Der <strong>Chinesische Kalender</strong> ist lunisolarer Natur. Dieser Kalender ist ein neuer — für eine bestimmte Familie, an einem bestimmten Ort, unter einem bestimmten Himmel gebaut.</p>
<hr>
<h3>Der Hindukalender (Panchanga)</h3>
<p>Der Hindukalender ist einer der ältesten kontinuierlichen lunisolaren Kalender der Welt, mit Wurzeln in vedischen Astronomietexten, die Tausende von Jahren alt sind. Diese App folgt dem <strong>Amanta</strong>-System — Monate laufen von Neumond zu Neumond — ausgerichtet am astronomischen Almanach des Drik Panchanga.</p>
<p><strong>Jahr und Ära:</strong> Das hinduistische Jahr beginnt im Frühling, beim Neumond des <strong>Chaitra</strong>, nahe der Frühjahrs-Tagundnachtgleiche. Die Ära ist das <strong>Vikrama Samvat</strong>: Die Jahreszählung beginnt 57 v. Chr., sodass 2026 n. Chr. dem Jahr <strong>VS 2083</strong> entspricht (ab Chaitra).</p>
<table class="help-table">
  <tr><th>#</th><th>Monat</th><th>Sanskrit</th><th>Jahreszeit</th><th>Hinweise</th></tr>
  <tr><td>1</td><td><strong>Chaitra</strong></td><td>चैत्र</td><td>Frühling</td><td>Neujahr; verbunden mit Rama Navami</td></tr>
  <tr><td>2</td><td><strong>Vaishakha</strong></td><td>वैशाख</td><td>Frühling</td><td>Buddha Purnima</td></tr>
  <tr><td>3</td><td><strong>Jyeshtha</strong></td><td>ज्येष्ठ</td><td>Sommer</td><td>Benannt nach dem Stern Jyestha (Antares)</td></tr>
  <tr><td>4</td><td><strong>Ashadha</strong></td><td>आषाढ</td><td>Sommer</td><td>Ratha Yatra; Monsunbeginn</td></tr>
  <tr><td>5</td><td><strong>Shravana</strong></td><td>श्रावण</td><td>Monsun</td><td>Raksha Bandhan; heilig für Shiva</td></tr>
  <tr><td>6</td><td><strong>Bhadrapada</strong></td><td>भाद्रपद</td><td>Monsun</td><td>Ganesh Chaturthi</td></tr>
  <tr><td>7</td><td><strong>Ashvin</strong></td><td>आश्विन</td><td>Herbst</td><td>Navaratri; Dussehra</td></tr>
  <tr><td>8</td><td><strong>Kartika</strong></td><td>कार्तिक</td><td>Herbst</td><td>Diwali; Kartik Purnima</td></tr>
  <tr><td>9</td><td><strong>Margashirsha</strong></td><td>मार्गशीर्ष</td><td>Vorwinter</td><td>Von Krishna in der Gita gepriesen</td></tr>
  <tr><td>10</td><td><strong>Pausha</strong></td><td>पौष</td><td>Winter</td><td>Makar Sankranti naht</td></tr>
  <tr><td>11</td><td><strong>Magha</strong></td><td>माघ</td><td>Winter</td><td>Magh Mela; Vasant Panchami</td></tr>
  <tr><td>12</td><td><strong>Phalguna</strong></td><td>फाल्गुन</td><td>Spätwinter</td><td>Holi; Maha Shivaratri</td></tr>
</table>
<p><strong>Schaltung — Adhika Māsa:</strong> Wenn ein Sonnenmonat vergeht, ohne dass ein Neumond einen Mondmonat darin beginnt, wird ein zusätzlicher Mondmonat eingefügt. Dieser „Schaltmonat" (<em>Adhika Māsa</em> oder <em>Purushottama Māsa</em>) trägt den Namen des folgenden regulären Monats mit dem Präfix <em>Adhika</em> (zusätzlich). Er gilt als besonders heilig — frei von den gewöhnlichen Pflichten des Kalenders, bestimmt für Meditation und Hingabe. Dies geschieht ungefähr alle 32–33 Monate.</p>
<p><strong>Nakshatras:</strong> Der Hindukalender ist untrennbar mit den 27 <strong>Nakshatras</strong> verbunden — Mondstationen, die den Weg des Mondes durch den Himmel markieren. Jede Nakshatra umspannt etwa 13°20′ der Ekliptik; der Mond durchläuft täglich eine. Das Himmels-Panel im <strong>Jyotisha-Modus</strong> beschriftet Sternbilder mit Nakshatra-Namen, ihren Schutzgottheiten und Überlieferungen aus dem Rig Veda und der Brihat Samhita.</p>
<p><em>Jyotisha</em> (ज्योतिष) — die vedische Wissenschaft von Licht und Zeit — ist die Tradition, die all dies vereint: Astronomie, Mythologie und die Messung heiliger Zeitabschnitte.</p>
<hr>
<h3>Der Cherokee-Kalender</h3>
<p>Das Volk der Cherokee (ᏣᎳᎩ, <em>Tsalagi</em>) pflegt einen lunisolaren Kalender, der an die ökologischen Rhythmen der südlichen Appalachen gebunden ist. Das Jahr beginnt mit dem ersten Neumond nach der Wintersonnenwende — demselben Anker wie dieser Kalender.</p>
<table class="help-table">
  <tr><th>#</th><th>Cherokee</th><th>Romanisiert</th><th>Englisch</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Cold Moon / Cold Month</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Bony Moon (hungry month)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Windy Moon</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Flower Moon</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Planting Moon</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Green Corn Moon</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Ripe Corn Moon</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>End of Fruit Moon</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Nut Moon</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Harvest Moon</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Trading Moon</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Snow Moon</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Intercalary Moon (as needed)</td></tr>
</table>
<p>Die Cherokee-Silbenschrift wurde im frühen 19. Jahrhundert von <strong>Sequoyah</strong> (ᏎᏉᏯ) geschaffen, einem Silberschmied, der nie lesen oder schreiben gelernt hatte. Er verbrachte ungefähr zwölf Jahre damit, die Schrift allein durch eigene Beobachtung zu entwickeln. Bis 1825 war die Mehrheit der Cherokee in ihrer eigenen Sprache alphabetisiert — eine Leistung ohne Parallele in der überlieferten Geschichte.</p>
<hr>
<h3>Der Haudenosaunee-Kalender (Irokesen)</h3>
<p>Die Haudenosaunee-Konföderation — Mohawk, Oneida, Onondaga, Cayuga, Seneca und (ab etwa 1722) Tuscarora — ordnet die Zeit um 13 zeremonielle Monde. Das Jahr beginnt im Midwinter, zentriert auf die <strong>Midwinter-Zeremonie</strong>, die heiligste aller Haudenosaunee-Feiern.</p>
<table class="help-table">
  <tr><th>#</th><th>Mond</th><th>Zeremonie / Charakter</th></tr>
  <tr><td>1</td><td><strong>Mittwintermond</strong></td><td>Midwinter-Zeremonie — Erneuerung, Dankbarkeit, Traumteilen und das Wiederentzünden des heiligen Feuers</td></tr>
  <tr><td>2</td><td><strong>Spätzeitmond</strong></td><td>Zeit der Kälte und Knappheit; gemeinschaftliches Teilen und Vorbereitung</td></tr>
  <tr><td>3</td><td><strong>Zuckerahornmond</strong></td><td>Ahornblut fließt; Sugar-Bush-Zeremonie — erste Ernte des Jahres</td></tr>
  <tr><td>4</td><td><strong>Froschmond</strong></td><td>Frösche kehren zurück; Frühjahrsaussaat beginnt</td></tr>
  <tr><td>5</td><td><strong>Pflanzmond</strong></td><td>Saatpflanzungs-Zeremonie — Ehrung der Drei Schwestern (Mais, Bohnen, Kürbis)</td></tr>
  <tr><td>6</td><td><strong>Erdbeermond</strong></td><td>Erdbeer-Zeremonie — erste Frucht des Sommers; Dankbarkeit und gesellschaftliche Tänze</td></tr>
  <tr><td>7</td><td><strong>Grünbohnenmond</strong></td><td>Bohnen-Zeremonie — Ehrung der Bohnenernte</td></tr>
  <tr><td>8</td><td><strong>Grüner-Mais-Mond</strong></td><td>Grüner-Mais-Zeremonie — die zentrale Zeremonie des Sommers; Dankbarkeit für den neuen Mais</td></tr>
  <tr><td>9</td><td><strong>Erntemond</strong></td><td>Erntefest — Sammeln und Einlagern; gemeinschaftliches Festmahl</td></tr>
  <tr><td>10</td><td><strong>Frostmond</strong></td><td>Vorbereitung auf den Winter; Jagdsaison vertieft sich</td></tr>
  <tr><td>11</td><td><strong>Kältemond</strong></td><td>Die Erzählsaison beginnt — Geschichten dürfen nur erzählt werden, wenn Schnee liegt</td></tr>
  <tr><td>12</td><td><strong>Tiefwintermond</strong></td><td>Tiefster Winter; die langen Nächte; Vorfreude auf Erneuerung</td></tr>
  <tr><td>13</td><td><strong>Schaltmond</strong></td><td>Wird bei Bedarf eingefügt, wenn eine Zeremonie sonst in die falsche Jahreszeit fallen würde</td></tr>
</table>
<hr>
<h3>Eine Anmerkung zur indianischen Schaltrechnung</h3>
<p>Die Cherokee- und Haudenosaunee-Kalender — wie die meisten indianischen Mondkalender — fügen Schaltmonate nicht nach fester Arithmetik ein. Die Entscheidung, einen zusätzlichen Mond hinzuzufügen, wurde traditionell von <strong>Zeremonienführern und Ältesten</strong> getroffen, wenn eine beobachtete Drift zwischen Mond und Jahreszeit drohte, eine heilige Zeremonie in die falsche Jahreszeit zu verschieben.</p>
<p>Dies stellt die lebendige Beziehung zwischen Zeremonie und Jahreszeit über die Kalenderbeständigkeit. Der Kalender ist ein Werkzeug im Dienst der Menschen und des Landes; driftet das Werkzeug, wird es korrigiert.</p>
<p><strong>Beispiele dafür, wann ein Mond eingefügt werden würde:</strong></p>
<ul>
  <li>Die <strong>Grüner-Mais-Zeremonie</strong> ist dem Moment heilig, wenn die neue Ernte zum ersten Mal essbar wird. Wenn die Monde zu schnell gelaufen waren und der Green Corn Moon ankam, während die Stängel noch im Wachsen waren, konnten die Ältesten einen zusätzlichen Mond einfügen und die Jahreszeit aufholen lassen.</li>
  <li>Die <strong>Midwinter-Zeremonie</strong> markiert die wahre Wende des Jahres in tiefer Kälte. Wenn die Monde so weit gedriftet waren, dass der Midwinter ankam, bevor der Boden gefroren war, konnte ein zusätzlicher Mond eingefügt werden, um den Sinn der Zeremonie zu bewahren.</li>
  <li>Die <strong>Erdbeer-Zeremonie</strong> feiert die ersten Wilderdbeeren. Wenn der Erdbeermond kam, während die Hänge noch kahl waren, musste der Kalender — nicht die Erdbeeren — geändert werden.</li>
</ul>
<p><em>Ein Hinweis zu Quellen und Genauigkeit:</em> Indianische Kalendertraditionen sind lebendige Praktiken, die je nach Nation, Gemeinschaft und Generation variieren. Die Darstellungen hier sind respektvolle Annäherungen, die aus veröffentlichten Quellen und dem eigenen Bildungsmaterial der Nationen stammen. Wenn du Haudenosaunee, Cherokee oder Mitglied einer verwandten Nation bist, haben die Traditionen deiner eigenen Ältesten und Wissenshüter Vorrang vor allem hier Geschriebenen.</p>
<hr>
<h3>Himmelskultur im Nachthimmel-Panel</h3>
<p>Die Himmelsansicht kann zwei kulturelle Perspektiven auf denselben physischen Himmel legen. Schalte sie in der Werkzeugleiste im Himmelsmodus um.</p>
<p><strong>Skidi Pawnee:</strong> Die Skidi Pawnee waren eine Konföderation von Dörfern auf den Great Plains (heutiges Nebraska und Kansas), deren Kosmologie astronomisch ausgefeilter war als fast jede andere Kultur der Ebenen. Ihre Dörfer waren so angelegt, dass sie bestimmte Sternmuster widerspiegelten; ihr Zeremonienkalender wurde nicht nach Monaten, sondern nach dem Erscheinen bestimmter Sterne in der Dämmerung und Morgenröte geregelt. Der <strong>Abendstern</strong> (Venus im Westen) war die Mutter allen Lebens; der <strong>Morgenstern</strong> (Mars) war ihr Gatte und die Kraft der Schöpfung. Ihr Sternenwissen war in Karten kodiert, die auf gegerbtem Elch- und Büffelfell gemalt waren — zu den ältesten erhaltenen astronomischen Dokumenten Nordamerikas. Der <strong>Pawnee</strong>-Schalter beschriftet den Himmel mit Skidi-Sternnamen und Überlieferungen.</p>
<p><strong>Jyotisha (Hinduismus):</strong> <em>Jyotisha</em> (ज्योतिष, <em>die Wissenschaft des Lichts</em>) ist die vedische Tradition der Astronomie und Zeitrechnung. Im Mittelpunkt steht das System der <strong>27 Nakshatras</strong> — Mondstationen, die die Ekliptik in gleiche Bögen von 13°20′ unterteilen. Der Mond durchläuft täglich etwa eine Nakshatra. Jede Nakshatra hat eine Schutzgottheit, heilige Überlieferungen aus dem Rig Veda und der Brihat Samhita sowie günstige oder ungünstige Bedeutungen. Der <strong>Jyotisha</strong>-Schalter beschriftet den Himmel mit Nakshatra-Namen, Grenzen und ihren Schutzgottheiten — so wird der Skorpion zu <em>Jyestha</em> (der Älteste, behütet von Indra) und der Schütze enthüllt <em>Purvashadha</em> (der Unbesiegte, behütet von den Wassern).</p>
`,

// ─── French ─────────────────────────────────────────────────────────────────
fr: `
<h3>Le Numéro d'Année</h3>
<p>Ce calendrier utilise l'<strong>Ère Humaine</strong> (Ère Holocène). Le comput habituel av./ap. J.-C. est ancré en l'an 1 — un point de référence calculé au VIe siècle à partir d'estimations de durées de vie. L'Ère Humaine remonte plus loin : elle ajoute 10&nbsp;000 ans pour placer l'aube de la civilisation humaine — la révolution agricole — en l'An 1. Résultat : 2026 ap. J.-C. = <strong>An 12026</strong>.</p>
<p>Cette numérotation fut conçue indépendamment pour ce calendrier — on découvrit plus tard que le scientifique Cesare Emiliani avait proposé la même idée des décennies auparavant.</p>
<hr>
<h3>Les Lunes (Mois Lunaires)</h3>
<p>Le calendrier compte 12 lunes par an, chacune débutant à la nouvelle lune :</p>
<p>Lune de Neige · Lune du Réveil · Lune des Semailles · Lune d'Éclosion · Lune des Fleurs · Lune des Baies · Lune d'Été · Lune de Moisson · Lune de Cueillette · Lune des Feuilles · Lune du Gel · <strong>Lune Noire</strong></p>
<p><strong>Lune Noire</strong> est toujours la dernière lune de l'année — celle qui contient le solstice d'hiver.</p>
<p><strong>Lune Bleue :</strong> Lorsque le solstice tombe au jour 19 ou après de la Lune Noire (Ours ou Renard), une 13e lune (Lune Bleue) est ajoutée, donnant une année de 13 lunes.</p>
<p>Le seuil n'est pas arbitraire. Une année solaire (~365,24 jours) est environ 10,88 jours plus longue que 12 mois lunaires (~354,36 jours). Si le solstice tombe au jour 19 de la Lune Noire, sans correction il tomberait l'année suivante au jour ~30. Jour 20 ou plus tard signifie que le solstice dépasserait dans la lune <em>suivante</em> — la Lune Noire ne le contiendrait plus. L'ajout de la Lune Bleue ramène le solstice au Rouge-gorge ou au Lapin (~jour 6) l'année suivante.</p>
<hr>
<h3>L'Animal de l'Année</h3>
<p>La Lune Noire est divisée en cinq parties nommées. La partie dans laquelle tombe le solstice d'hiver donne son nom à l'année :</p>
<table class="help-table">
  <tr><th>Partie</th><th>Jours</th><th>Caractère</th></tr>
  <tr><td><strong>Rouge-gorge</strong></td><td>1–6</td><td>Tôt et lumineux — l'année commence avant que l'obscurité ne se soit vraiment installée</td></tr>
  <tr><td><strong>Lapin</strong></td><td>7–12</td><td>Alerte et vigilant, assis au seuil</td></tr>
  <tr><td><strong>Dindon</strong></td><td>13–18</td><td>Au milieu de l'obscurité, rassemblant et délibéré</td></tr>
  <tr><td><strong>Ours</strong></td><td>19–24</td><td>Au cœur de l'obscurité — a besoin de dormir un peu plus longtemps cette année</td></tr>
  <tr><td><strong>Renard</strong></td><td>25–fin</td><td>Dérive maximale — déjà à la chasse dans la longue nuit</td></tr>
</table>
<p>L'animal de l'année traduit l'écart entre le calendrier solaire et lunaire. Une année Rouge-gorge : le solstice est arrivé tôt ; une année Renard : le calendrier a beaucoup dérivé et une Lune Bleue approche.</p>
<hr>
<h3>Les Noms des Jours de la Semaine</h3>
<p>En mode <strong>Mythique</strong>, les jours portent le nom de dieux nordiques et de corps célestes. Les noms français des jours cachent déjà ces figures — ce calendrier les met en avant.</p>
<table class="help-table">
  <tr><th>Fée</th><th>Standard</th><th>Dédié à</th></tr>
  <tr><td><strong>Heimjour</strong></td><td>Lundi</td><td><strong>Heimdall</strong> — gardien d'Asgard, protecteur du Bifrost. Il se tient au seuil, toujours vigilant — un début de semaine idéal.</td></tr>
  <tr><td><strong>Tyrsjour</strong></td><td>Mardi</td><td><strong>Tyr</strong> — dieu de la justice. Il sacrifia sa main pour enchaîner le loup Fenrir.</td></tr>
  <tr><td><strong>Wodnsjour</strong></td><td>Mercredi</td><td><strong>Wotan (Odin)</strong> — le Père Universel, dieu de la sagesse, de la poésie et des morts.</td></tr>
  <tr><td><strong>Thorsjour</strong></td><td>Jeudi</td><td><strong>Thor</strong> — dieu du tonnerre, défenseur des dieux et des hommes.</td></tr>
  <tr><td><strong>Freyajour</strong></td><td>Vendredi</td><td><strong>Freya</strong> — déesse de l'amour, de la beauté et de la magie.</td></tr>
  <tr><td><strong>Lunedi</strong></td><td>Samedi</td><td><strong>La Lune.</strong> Samedi est nommé pour Saturne, une divinité romaine sans place parmi ces dieux nordiques. Le lundi est déjà le jour de la Lune — mais des milliards commencent leur semaine en maudissant la Lune. La déplacer au week-end la transforme en bénédiction.</td></tr>
  <tr><td><strong>Soleil</strong></td><td>Dimanche</td><td><strong>Le Soleil</strong> — inchangé.</td></tr>
</table>
<hr>
<h3>Icônes sur les Jours du Calendrier</h3>
<table class="help-table">
  <tr><th>Icône</th><th>Signification</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>Nouvelle lune, premier quartier, pleine lune, dernier quartier</td></tr>
  <tr><td>☀</td><td>Solstice ou équinoxe</td></tr>
  <tr><td>Ⓟ + %</td><td>Périgée lunaire ; pourcentage d'illumination</td></tr>
  <tr><td>@</td><td>Apogée lunaire</td></tr>
  <tr><td>🌠</td><td>Pluie de météores près du pic</td></tr>
  <tr><td>☄</td><td>Comète dans sa fenêtre de visibilité</td></tr>
  <tr><td>🎂</td><td>Anniversaire</td></tr>
  <tr><td>Bordure colorée</td><td>Jour férié fédéral américain</td></tr>
</table>
<hr>
<h3>Le Panneau Ciel Nocturne</h3>
<p>Cliquez sur n'importe quel bouton <strong>ⓘ</strong> pour ouvrir le panneau d'événements. Pour aujourd'hui, la section <strong>Ce Soir</strong> indique l'heure du coucher du soleil, le crépuscule astronomique (soleil à 18° sous l'horizon), les planètes visibles, les pluies de météores actives et les constellations du soir depuis votre position.</p>
<hr>
<h3>Autres Calendriers Lunaires</h3>
<p>Le <strong>calendrier hébreu</strong> est le plus utilisé parmi les calendriers lunisolaires. <strong>Points communs :</strong> les deux suivent la lune pour les mois mais ajoutent un mois intercalaire pour rester alignés sur l'année solaire ; les deux commencent chaque mois à la nouvelle lune.</p>
<p>L'année hébraïque commence en automne ; celle-ci en hiver. Le calendrier hébreu suit un cycle fixe de 19 ans ; celui-ci un déclencheur astronomique pur. L'Anno Mundi situe 2026 ap. J.-C. à l'an <strong>5786</strong>. Le calendrier hébreu utilise une durée de mois fixée au IVe siècle ; celui-ci calcule les vraies nouvelles lunes avec les algorithmes de Meeus.</p>
<p>Le <strong>calendrier islamique</strong> est purement lunaire, sans intercalation. Le <strong>calendrier chinois</strong> est lunisolaire. Ce calendrier est simplement un nouveau — construit pour une famille précise, en un lieu précis, sous un ciel précis.</p>
<hr>
<h3>Le Calendrier Hindou (Panchanga)</h3>
<p>Le calendrier hindou est l'un des plus anciens calendriers lunisolaires continus au monde, avec des racines dans des textes astronomiques védiques vieux de plusieurs milliers d'années. Cette application suit le système <strong>Amanta</strong> — les mois courent de nouvelle lune en nouvelle lune — aligné sur l'almanach astronomique du Drik Panchanga.</p>
<p><strong>Année et ère :</strong> L'année hindoue commence au printemps, à la nouvelle lune de <strong>Chaitra</strong>, près de l'équinoxe de printemps. L'ère est le <strong>Vikrama Samvat</strong> : les années comptent depuis 57 av. J.-C., de sorte que 2026 apr. J.-C. correspond à <strong>VS 2083</strong> (à partir de Chaitra).</p>
<table class="help-table">
  <tr><th>#</th><th>Mois</th><th>Sanskrit</th><th>Saison</th><th>Notes</th></tr>
  <tr><td>1</td><td><strong>Chaitra</strong></td><td>चैत्र</td><td>Printemps</td><td>Nouvel an ; associé à Rama Navami</td></tr>
  <tr><td>2</td><td><strong>Vaishakha</strong></td><td>वैशाख</td><td>Printemps</td><td>Buddha Purnima</td></tr>
  <tr><td>3</td><td><strong>Jyeshtha</strong></td><td>ज्येष्ठ</td><td>Été</td><td>Nommé d'après l'étoile Jyestha (Antarès)</td></tr>
  <tr><td>4</td><td><strong>Ashadha</strong></td><td>आषाढ</td><td>Été</td><td>Ratha Yatra ; début de la mousson</td></tr>
  <tr><td>5</td><td><strong>Shravana</strong></td><td>श्रावण</td><td>Mousson</td><td>Raksha Bandhan ; sacré pour Shiva</td></tr>
  <tr><td>6</td><td><strong>Bhadrapada</strong></td><td>भाद्रपद</td><td>Mousson</td><td>Ganesh Chaturthi</td></tr>
  <tr><td>7</td><td><strong>Ashvin</strong></td><td>आश्विन</td><td>Automne</td><td>Navaratri ; Dussehra</td></tr>
  <tr><td>8</td><td><strong>Kartika</strong></td><td>कार्तिक</td><td>Automne</td><td>Diwali ; Kartik Purnima</td></tr>
  <tr><td>9</td><td><strong>Margashirsha</strong></td><td>मार्गशीर्ष</td><td>Pré-hiver</td><td>Aimé de Krishna dans la Gita</td></tr>
  <tr><td>10</td><td><strong>Pausha</strong></td><td>पौष</td><td>Hiver</td><td>Makar Sankranti approche</td></tr>
  <tr><td>11</td><td><strong>Magha</strong></td><td>माघ</td><td>Hiver</td><td>Magh Mela ; Vasant Panchami</td></tr>
  <tr><td>12</td><td><strong>Phalguna</strong></td><td>फाल्गुन</td><td>Fin d'hiver</td><td>Holi ; Maha Shivaratri</td></tr>
</table>
<p><strong>Intercalation — Adhika Māsa :</strong> Lorsqu'un mois solaire passe sans qu'une nouvelle lune n'y entame un mois lunaire, un mois lunaire supplémentaire est inséré. Ce « mois intercalaire » (<em>Adhika Māsa</em> ou <em>Purushottama Māsa</em>) porte le nom du mois régulier suivant précédé du préfixe <em>Adhika</em> (supplémentaire). Il est considéré comme particulièrement sacré — affranchi des obligations ordinaires du calendrier, réservé à la méditation et à la dévotion. Cela se produit environ tous les 32–33 mois.</p>
<p><strong>Nakshatras :</strong> Le calendrier hindou est indissociable des 27 <strong>nakshatras</strong> — maisons lunaires qui jalonnent le chemin de la Lune dans le ciel. Chaque nakshatra couvre environ 13°20′ de l'écliptique ; la Lune en traverse une par jour. Le panneau céleste en <strong>mode Jyotisha</strong> étiquette les constellations avec les noms des nakshatras, leurs divinités tutelaires et les traditions issues du Rig Véda et de la Brihat Samhita.</p>
<p><em>Jyotisha</em> (ज्योतिष) — la science védique de la lumière et du temps — est la tradition qui unifie tout cela : astronomie, mythologie et mesure des intervalles sacrés.</p>
<hr>
<h3>Le Calendrier Cherokee</h3>
<p>Le peuple Cherokee (ᏣᎳᎩ, <em>Tsalagi</em>) a maintenu un calendrier lunisolaire lié aux rythmes écologiques des Appalaches méridionales. L'année commence à la première nouvelle lune après le solstice d'hiver — le même ancrage que ce calendrier.</p>
<table class="help-table">
  <tr><th>#</th><th>Cherokee</th><th>Romanisé</th><th>Anglais</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Cold Moon / Cold Month</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Bony Moon (hungry month)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Windy Moon</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Flower Moon</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Planting Moon</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Green Corn Moon</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Ripe Corn Moon</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>End of Fruit Moon</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Nut Moon</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Harvest Moon</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Trading Moon</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Snow Moon</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Intercalary Moon (as needed)</td></tr>
</table>
<p>Le syllabaire cherokee fut créé au début du XIXe siècle par <strong>Sequoyah</strong> (ᏎᏉᏯ), un orfèvre qui n'avait jamais appris à lire ni à écrire. Il passa environ douze ans à mettre au point l'écriture par sa seule observation. En 1825, la majorité des Cherokees étaient alphabétisés dans leur propre langue — un exploit sans équivalent dans l'histoire enregistrée.</p>
<hr>
<h3>Le Calendrier Haudenosaunee (Iroquois)</h3>
<p>La Confédération Haudenosaunee — Mohawk, Oneida, Onondaga, Cayuga, Seneca et (à partir de ~1722) Tuscarora — organise le temps autour de 13 lunes cérémonielles. L'année commence au milieu de l'hiver, centrée sur la <strong>Cérémonie du Milieu de l'Hiver</strong>, la plus sacrée de toutes les observances haudenosaunee.</p>
<table class="help-table">
  <tr><th>#</th><th>Lune</th><th>Cérémonie / Caractère</th></tr>
  <tr><td>1</td><td><strong>Lune du Milieu de l'Hiver</strong></td><td>Cérémonie du Milieu de l'Hiver — renouveau, actions de grâce, partage des rêves et rallumage du feu sacré</td></tr>
  <tr><td>2</td><td><strong>Lune du Retard</strong></td><td>Temps de froid et de disette ; partage communautaire et préparation</td></tr>
  <tr><td>3</td><td><strong>Lune de l'Érable à Sucre</strong></td><td>La sève d'érable coule ; Cérémonie du bosquet à sucre — première récolte de l'année</td></tr>
  <tr><td>4</td><td><strong>Lune de la Grenouille</strong></td><td>Les grenouilles reviennent ; les semailles de printemps commencent</td></tr>
  <tr><td>5</td><td><strong>Lune des Semailles</strong></td><td>Cérémonie des semailles — honorer les Trois Sœurs (maïs, haricots, courge)</td></tr>
  <tr><td>6</td><td><strong>Lune de la Fraise</strong></td><td>Cérémonie de la Fraise — premier fruit de l'été ; actions de grâce et danses sociales</td></tr>
  <tr><td>7</td><td><strong>Lune du Haricot Vert</strong></td><td>Cérémonie du Haricot — honorer la récolte des haricots</td></tr>
  <tr><td>8</td><td><strong>Lune du Maïs Vert</strong></td><td>Cérémonie du Maïs Vert — la cérémonie centrale de l'été ; actions de grâce pour le nouveau maïs</td></tr>
  <tr><td>9</td><td><strong>Lune des Moissons</strong></td><td>Fête des Moissons — récolte et conservation ; festin communautaire</td></tr>
  <tr><td>10</td><td><strong>Lune du Gel</strong></td><td>Préparation pour l'hiver ; la saison de chasse s'approfondit</td></tr>
  <tr><td>11</td><td><strong>Lune du Froid</strong></td><td>La saison des contes commence — les histoires ne peuvent être racontées que lorsque la neige recouvre le sol</td></tr>
  <tr><td>12</td><td><strong>Lune du Grand Froid</strong></td><td>L'hiver le plus profond ; les longues nuits ; l'anticipation du renouveau</td></tr>
  <tr><td>13</td><td><strong>Lune Intercalaire</strong></td><td>Inséré si nécessaire lorsqu'une cérémonie tomberait sinon en dehors de la bonne saison</td></tr>
</table>
<hr>
<h3>Note sur l'Intercalation Amérindienne</h3>
<p>Les calendriers cherokee et haudenosaunee — comme la plupart des calendriers lunaires amérindiens — n'insèrent pas de mois intercalaires par arithmétique fixe. La décision d'ajouter une lune supplémentaire était traditionnellement prise par les <strong>responsables cérémoniels et les anciens</strong> lorsque la dérive observée entre la lune et la saison menaçait de déplacer une cérémonie sacrée vers la mauvaise période de l'année.</p>
<p>Cela place la relation vivante entre cérémonie et saison au-dessus de la cohérence du calendrier. Le calendrier est un outil au service des peuples et de la terre ; lorsque l'outil dérive, on l'ajuste.</p>
<p><strong>Exemples de situations où une lune serait insérée :</strong></p>
<ul>
  <li>La <strong>Cérémonie du Maïs Vert</strong> est sacrée au moment où la nouvelle récolte devient pour la première fois prête à manger. Si les lunes avaient avancé trop vite et que la Lune du Maïs Vert arrivait pendant que les tiges étaient encore en train de se former, les anciens pouvaient ajouter une lune supplémentaire pour laisser la saison rattraper son retard.</li>
  <li>La <strong>Cérémonie du Milieu de l'Hiver</strong> marque le vrai tournant de l'année dans le grand froid. Si les lunes avaient dérivé au point que le Milieu de l'Hiver arrive avant que le sol soit gelé, une lune supplémentaire pouvait être insérée pour préserver le sens de la cérémonie.</li>
  <li>La <strong>Cérémonie de la Fraise</strong> célèbre les premières fraises sauvages. Si la Lune de la Fraise arrivait alors que les coteaux étaient encore nus, c'était le calendrier — et non les fraises — qui devait changer.</li>
</ul>
<p><em>Note sur les sources et l'exactitude :</em> Les traditions calendaires amérindiennes sont des pratiques vivantes qui varient selon la nation, la communauté et la génération. Les représentations ici sont des approximations respectueuses tirées de sources publiées et des propres matériaux éducatifs des nations. Si vous êtes Haudenosaunee, Cherokee ou membre d'une nation apparentée, les traditions de vos propres anciens et gardiens du savoir ont la primauté sur tout ce qui est écrit ici.</p>
<hr>
<h3>Cultures Célestes dans le Panneau Ciel Nocturne</h3>
<p>La vue céleste peut superposer deux prismes culturels sur le même ciel physique. Basculez-les depuis la barre d'outils en mode ciel.</p>
<p><strong>Skidi Pawnee :</strong> Les Skidi Pawnee étaient une confédération de villages dans les Grandes Plaines (actuel Nebraska et Kansas) dont la cosmologie était astronomiquement plus élaborée que presque toute autre culture des Plaines. Leurs villages étaient disposés pour refléter des configurations d'étoiles spécifiques ; leur calendrier cérémoniel était régi non par des mois mais par l'apparition d'étoiles particulières au crépuscule et à l'aube. L'<strong>Étoile du Soir</strong> (Vénus à l'ouest) était la mère de toute vie ; l'<strong>Étoile du Matin</strong> (Mars) était son époux et la force de la création. Leur savoir astronomique était encodé dans des cartes peintes sur des peaux d'élan et de bison tannées — parmi les plus anciens documents astronomiques survivants d'Amérique du Nord. Le bouton <strong>Pawnee</strong> étiquette le ciel avec les noms d'étoiles skidi et leurs traditions.</p>
<p><strong>Jyotisha (hindou) :</strong> <em>Jyotisha</em> (ज्योतिष, <em>la science de la lumière</em>) est la tradition védique de l'astronomie et du comput du temps. Au cœur de ce système se trouve le réseau des <strong>27 nakshatras</strong> — maisons lunaires qui divisent l'écliptique en arcs égaux de 13°20′. La Lune parcourt environ un nakshatra par jour. Chaque nakshatra possède une divinité tutélaire, des traditions sacrées issues du Rig Véda et de la Brihat Samhita, et des associations favorables ou défavorables. Le bouton <strong>Jyotisha</strong> étiquette le ciel avec les noms des nakshatras, leurs limites et leurs divinités tutelaires — ainsi le Scorpion devient <em>Jyestha</em> (l'aîné, présidé par Indra) et le Sagittaire révèle <em>Purvashadha</em> (l'invaincu, présidé par les Eaux).</p>
`,

// ─── Italian ────────────────────────────────────────────────────────────────
it: `
<h3>Il Numero dell'Anno</h3>
<p>Questo calendario usa l'<strong>Era dell'Umanità</strong> (Era Olocenica). Il conteggio a.C./d.C. è ancorato all'anno 1 d.C. — un punto di riferimento calcolato nel VI secolo da stime di aspettativa di vita. L'Era dell'Umanità aggiunge 10.000 anni per collocare l'alba della civiltà umana — la rivoluzione agricola — all'Anno 1. Risultato: 2026 d.C. = <strong>Anno 12026</strong>.</p>
<p>Questa numerazione fu concepita indipendentemente per questo calendario — solo in seguito si scoprì che lo scienziato Cesare Emiliani aveva proposto la stessa idea decenni prima.</p>
<hr>
<h3>Le Lune (Mesi Lunari)</h3>
<p>Il calendario conta 12 lune all'anno, ognuna inizia con la luna nuova:</p>
<p>Luna di Neve · Luna del Risveglio · Luna delle Sementi · Luna dei Boccioli · Luna dei Fiori · Luna delle Bacche · Luna d'Estate · Luna del Raccolto · Luna della Raccolta · Luna delle Foglie · Luna del Gelo · <strong>Luna Oscura</strong></p>
<p><strong>Luna Oscura</strong> è sempre l'ultima luna dell'anno — quella che contiene il solstizio d'inverno.</p>
<p><strong>Luna Azzurra:</strong> Quando il solstizio cade al giorno 19 o dopo della Luna Oscura (Orso o Volpe), viene aggiunta una 13ª luna (Luna Azzurra), creando un anno di 13 lune.</p>
<p>La soglia non è arbitraria. Un anno solare (~365,24 giorni) è circa 10,88 giorni più lungo di 12 mesi lunari (~354,36 giorni). Se il solstizio cade al giorno 19 della Luna Oscura, senza correzione l'anno successivo cadrebbe al giorno ~30. Giorno 20 o più tardi significa che slitterebbe completamente nella luna <em>seguente</em>. La regola Orso/Volpe è l'esatta soglia astronomica. L'aggiunta della Luna Azzurra riporta il solstizio al Pettirosso o al Coniglio (~giorno 6) l'anno successivo.</p>
<hr>
<h3>L'Animale dell'Anno</h3>
<p>La Luna Oscura è divisa in cinque parti denominate. La parte in cui cade il solstizio d'inverno dà il nome all'anno:</p>
<table class="help-table">
  <tr><th>Parte</th><th>Giorni</th><th>Carattere</th></tr>
  <tr><td><strong>Pettirosso</strong></td><td>1–6</td><td>Precoce e luminoso — l'anno inizia prima che il buio si sia depositato</td></tr>
  <tr><td><strong>Coniglio</strong></td><td>7–12</td><td>Vigile e attento, seduto sulla soglia</td></tr>
  <tr><td><strong>Tacchino</strong></td><td>13–18</td><td>Nel mezzo del buio, raccoglitore e deliberato</td></tr>
  <tr><td><strong>Orso</strong></td><td>19–24</td><td>Nel profondo buio — ha bisogno di dormire un po' di più quest'anno</td></tr>
  <tr><td><strong>Volpe</strong></td><td>25–fine</td><td>Deriva massima — già a caccia nella lunga notte</td></tr>
</table>
<p>L'animale dell'anno traduce lo scarto tra il calendario solare e lunare. Un anno Pettirosso: il solstizio è arrivato presto; un anno Volpe: il calendario ha molto derivato e si avvicina una Luna Azzurra.</p>
<hr>
<h3>I Nomi dei Giorni della Settimana</h3>
<p>In modalità <strong>Mitica</strong>, i giorni sono nominati per dèi norreni e corpi celesti.</p>
<table class="help-table">
  <tr><th>Fata</th><th>Standard</th><th>Dedicato a</th></tr>
  <tr><td><strong>Heimgiorno</strong></td><td>Lunedì</td><td><strong>Heimdall</strong> — guardiano di Asgard, custode del Bifrost. Si trova alla soglia, sempre vigile — un inizio settimana appropriato.</td></tr>
  <tr><td><strong>Tirsgiorno</strong></td><td>Martedì</td><td><strong>Tyr</strong> — dio della giustizia. Sacrificò la mano per legare il lupo Fenrir.</td></tr>
  <tr><td><strong>Wodnsgiorno</strong></td><td>Mercoledì</td><td><strong>Wotan (Odino)</strong> — il Padre di Tutti, dio della saggezza, della poesia e dei morti.</td></tr>
  <tr><td><strong>Thorsgiorno</strong></td><td>Giovedì</td><td><strong>Thor</strong> — dio del tuono, difensore di dèi e uomini.</td></tr>
  <tr><td><strong>Freyagiorno</strong></td><td>Venerdì</td><td><strong>Freya</strong> — dea dell'amore, della bellezza e della magia.</td></tr>
  <tr><td><strong>Lunagiorno</strong></td><td>Sabato</td><td><strong>La Luna.</strong> Sabato prende il nome da Saturno, senza posto tra questi dèi norreni. Il lunedì è già il giorno della Luna — spostarlo nel fine settimana lo trasforma in benedizione.</td></tr>
  <tr><td><strong>Solgiorno</strong></td><td>Domenica</td><td><strong>Il Sole</strong> — invariato.</td></tr>
</table>
<hr>
<h3>Icone sui Giorni del Calendario</h3>
<table class="help-table">
  <tr><th>Icona</th><th>Significato</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>Luna nuova, primo quarto, luna piena, ultimo quarto</td></tr>
  <tr><td>☀</td><td>Solstizio o equinozio</td></tr>
  <tr><td>Ⓟ + %</td><td>Perigeo lunare; percentuale di illuminazione</td></tr>
  <tr><td>@</td><td>Apogeo lunare</td></tr>
  <tr><td>🌠</td><td>Sciame meteorico vicino al picco</td></tr>
  <tr><td>☄</td><td>Cometa nella finestra di visibilità</td></tr>
  <tr><td>🎂</td><td>Compleanno</td></tr>
  <tr><td>Bordo colorato</td><td>Festività federale USA</td></tr>
</table>
<hr>
<h3>Il Pannello del Cielo Notturno</h3>
<p>Clicca qualsiasi pulsante <strong>ⓘ</strong> per aprire il pannello eventi. Per oggi, la sezione <strong>Stasera</strong> mostra l'orario del tramonto, il crepuscolo astronomico (sole a 18° sotto l'orizzonte), i pianeti visibili, gli sciami meteorici attivi e le costellazioni serali dalla tua posizione.</p>
<hr>
<h3>Altri Calendari Lunari</h3>
<p>Il <strong>calendario ebraico</strong> è il più diffuso tra i calendari lunisolari. <strong>Punti in comune:</strong> entrambi seguono la luna per i mesi ma aggiungono un mese intercalare; entrambi iniziano ogni mese con la luna nuova.</p>
<p>L'anno ebraico inizia in autunno; questo in inverno. Il calendario ebraico usa un ciclo fisso di 19 anni; questo usa un innesco astronomico puro. L'Anno Mundi situa il 2026 d.C. all'anno <strong>5786</strong>. Il calendario ebraico usa una durata del mese lunare fissata nel IV secolo; questo calcola le vere lune nuove con gli algoritmi di Meeus.</p>
<p>Il <strong>calendario islamico</strong> è puramente lunare senza intercalazione. Il <strong>calendario cinese</strong> è lunisolario. Questo calendario è semplicemente uno nuovo — costruito per una famiglia specifica, in un posto specifico, sotto un cielo specifico.</p>
<hr>
<h3>Il Calendario Indù (Panchanga)</h3>
<p>Il calendario indù è uno dei calendari lunisolari continui più antichi del mondo, con radici nei testi astronomici vedici di migliaia di anni fa. Questa app segue il sistema <strong>Amanta</strong> — i mesi vanno da luna nuova a luna nuova — in linea con l'almanacco astronomico Drik Panchanga.</p>
<p><strong>Anno ed era:</strong> L'anno indù inizia in primavera, alla luna nuova di <strong>Chaitra</strong>, vicino all'equinozio di primavera. L'era è il <strong>Vikrama Samvat</strong>: gli anni si contano dal 57 a.C., quindi il 2026 d.C. corrisponde al <strong>VS 2083</strong> (da Chaitra in poi).</p>
<table class="help-table">
  <tr><th>#</th><th>Mese</th><th>Sanscrito</th><th>Stagione</th><th>Note</th></tr>
  <tr><td>1</td><td><strong>Chaitra</strong></td><td>चैत्र</td><td>Primavera</td><td>Anno nuovo; associato a Rama Navami</td></tr>
  <tr><td>2</td><td><strong>Vaishakha</strong></td><td>वैशाख</td><td>Primavera</td><td>Buddha Purnima</td></tr>
  <tr><td>3</td><td><strong>Jyeshtha</strong></td><td>ज्येष्ठ</td><td>Estate</td><td>Prende il nome dalla stella Jyestha (Antares)</td></tr>
  <tr><td>4</td><td><strong>Ashadha</strong></td><td>आषाढ</td><td>Estate</td><td>Ratha Yatra; inizio del monsone</td></tr>
  <tr><td>5</td><td><strong>Shravana</strong></td><td>श्रावण</td><td>Monsone</td><td>Raksha Bandhan; sacro a Shiva</td></tr>
  <tr><td>6</td><td><strong>Bhadrapada</strong></td><td>भाद्रपद</td><td>Monsone</td><td>Ganesh Chaturthi</td></tr>
  <tr><td>7</td><td><strong>Ashvin</strong></td><td>आश्विन</td><td>Autunno</td><td>Navaratri; Dussehra</td></tr>
  <tr><td>8</td><td><strong>Kartika</strong></td><td>कार्तिक</td><td>Autunno</td><td>Diwali; Kartik Purnima</td></tr>
  <tr><td>9</td><td><strong>Margashirsha</strong></td><td>मार्गशीर्ष</td><td>Pre-inverno</td><td>Amato da Krishna nella Gita</td></tr>
  <tr><td>10</td><td><strong>Pausha</strong></td><td>पौष</td><td>Inverno</td><td>Makar Sankranti si avvicina</td></tr>
  <tr><td>11</td><td><strong>Magha</strong></td><td>माघ</td><td>Inverno</td><td>Magh Mela; Vasant Panchami</td></tr>
  <tr><td>12</td><td><strong>Phalguna</strong></td><td>फाल्गुन</td><td>Tardo inverno</td><td>Holi; Maha Shivaratri</td></tr>
</table>
<p><strong>Intercalazione — Adhika Māsa:</strong> Quando un mese solare passa senza che una luna nuova inizi un mese lunare al suo interno, viene inserito un mese lunare extra. Questo "mese bisestile" (<em>Adhika Māsa</em> o <em>Purushottama Māsa</em>) porta il nome del mese regolare successivo con il prefisso <em>Adhika</em> (extra). È considerato particolarmente sacro — libero dagli obblighi ordinari del calendario, riservato alla meditazione e alla devozione. Accade circa ogni 32–33 mesi.</p>
<p><strong>Nakshatra:</strong> Il calendario indù è inseparabile dai 27 <strong>nakshatra</strong> — dimore lunari che segnano il percorso della Luna nel cielo. Ogni nakshatra occupa circa 13°20′ dell'eclittica; la Luna ne attraversa uno al giorno. Il pannello cielo in <strong>modalità Jyotisha</strong> etichetta le costellazioni con i nomi dei nakshatra, le loro divinità protettrici e i testi del Rig Veda e del Brihat Samhita.</p>
<p><em>Jyotisha</em> (ज्योतिष) — la scienza vedica della luce e del tempo — è la tradizione che unifica tutto: astronomia, mitologia e misurazione degli intervalli sacri.</p>
<hr>
<h3>Il Calendario Cherokee</h3>
<p>Il popolo Cherokee (ᏣᎳᎩ, <em>Tsalagi</em>) ha mantenuto un calendario lunisolario legato ai ritmi ecologici degli Appalachi meridionali. L'anno inizia con la prima luna nuova dopo il solstizio d'inverno — lo stesso punto di ancoraggio di questo calendario.</p>
<table class="help-table">
  <tr><th>#</th><th>Cherokee</th><th>Romanizzato</th><th>Inglese</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Cold Moon / Cold Month</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Bony Moon (hungry month)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Windy Moon</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Flower Moon</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Planting Moon</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Green Corn Moon</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Ripe Corn Moon</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>End of Fruit Moon</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Nut Moon</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Harvest Moon</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Trading Moon</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Snow Moon</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Intercalary Moon (as needed)</td></tr>
</table>
<p>Il sillabario Cherokee fu creato nel primo Ottocento da <strong>Sequoyah</strong> (ᏎᏉᏯ), un orafo che non aveva mai imparato a leggere o scrivere. Trascorse circa dodici anni a sviluppare la scrittura esclusivamente dall'osservazione. Entro il 1825, la maggior parte dei Cherokee era alfabetizzata nella propria lingua — un fatto senza precedenti nella storia registrata.</p>
<hr>
<h3>Il Calendario Haudenosaunee (Irochesi)</h3>
<p>La Confederazione Haudenosaunee — Mohawk, Oneida, Onondaga, Cayuga, Seneca e (dopo il ~1722) Tuscarora — organizza il tempo attorno a 13 lune cerimoniali. L'anno inizia a metà inverno, incentrato sulla <strong>Cerimonia del Midwinter</strong>, la più sacra di tutte le osservanze Haudenosaunee.</p>
<table class="help-table">
  <tr><th>#</th><th>Luna</th><th>Cerimonia / Carattere</th></tr>
  <tr><td>1</td><td><strong>Luna del Pieno Inverno</strong></td><td>Cerimonia del Midwinter — rinnovamento, ringraziamento, condivisione dei sogni e riaccensione del fuoco sacro</td></tr>
  <tr><td>2</td><td><strong>Luna della Tardività</strong></td><td>Tempo di freddo e scarsità; condivisione comunitaria e preparazione</td></tr>
  <tr><td>3</td><td><strong>Luna dell'Acero da Zucchero</strong></td><td>Scorre la linfa dell'acero; Cerimonia del Sugar Bush — primo raccolto dell'anno</td></tr>
  <tr><td>4</td><td><strong>Luna della Rana</strong></td><td>Le rane tornano; inizia la semina primaverile</td></tr>
  <tr><td>5</td><td><strong>Luna della Semina</strong></td><td>Cerimonia della Semina — onorare le Tre Sorelle (mais, fagioli, zucca)</td></tr>
  <tr><td>6</td><td><strong>Luna delle Fragole</strong></td><td>Cerimonia delle Fragole — primo frutto dell'estate; ringraziamento e danze sociali</td></tr>
  <tr><td>7</td><td><strong>Luna dei Fagiolini</strong></td><td>Cerimonia dei Fagioli — onorare il raccolto dei fagioli</td></tr>
  <tr><td>8</td><td><strong>Luna del Mais Verde</strong></td><td>Cerimonia del Mais Verde — la cerimonia centrale dell'estate; ringraziamento per il nuovo mais</td></tr>
  <tr><td>9</td><td><strong>Luna del Raccolto</strong></td><td>Festival del Raccolto — raccolta e conservazione; banchetto comunitario</td></tr>
  <tr><td>10</td><td><strong>Luna del Gelo</strong></td><td>Preparazione all'inverno; la stagione della caccia si intensifica</td></tr>
  <tr><td>11</td><td><strong>Luna del Freddo</strong></td><td>Inizia la stagione della narrazione — le storie si raccontano solo quando c'è neve</td></tr>
  <tr><td>12</td><td><strong>Luna del Grande Freddo</strong></td><td>Il pieno inverno; le lunghe notti; attesa del rinnovamento</td></tr>
  <tr><td>13</td><td><strong>Luna Intercalare</strong></td><td>Inserita all'occorrenza quando una cerimonia cadrebbe altrimenti nella stagione sbagliata</td></tr>
</table>
<hr>
<h3>Nota sull'Intercalazione dei Nativi Americani</h3>
<p>I calendari Cherokee e Haudenosaunee — come la maggior parte dei calendari lunari dei nativi americani — non inseriscono mesi bisestili con aritmetica fissa. La decisione di aggiungere una luna extra veniva tradizionalmente presa da <strong>capi cerimoniali e anziani</strong> quando la deriva osservata tra la luna e la stagione minacciava di spostare una cerimonia sacra nel momento sbagliato.</p>
<p>Questo pone la relazione viva tra cerimonia e stagione al di sopra della coerenza del calendario. Il calendario è uno strumento al servizio del popolo e della terra; quando lo strumento deriva, lo strumento viene corretto.</p>
<p><strong>Esempi di quando verrebbe inserita una luna:</strong></p>
<ul>
  <li>La <strong>Cerimonia del Mais Verde</strong> è sacra al momento in cui il nuovo raccolto diventa commestibile per la prima volta. Se le lune erano andate troppo veloci e la Luna del Mais Verde arrivava mentre i gambi erano ancora in crescita, gli anziani potevano aggiungere una luna extra e lasciar riprendere la stagione.</li>
  <li>La <strong>Cerimonia del Midwinter</strong> segna la vera svolta dell'anno nel freddo profondo. Se le lune avevano derivato al punto che il Midwinter arrivava prima che il suolo si fosse gelato, si poteva inserire una luna extra per preservare il significato della cerimonia.</li>
  <li>La <strong>Cerimonia delle Fragole</strong> celebra le prime fragole selvatiche. Se la Luna delle Fragole arrivava mentre i pendii erano ancora spogli, era il calendario — non le fragole — che doveva cambiare.</li>
</ul>
<p><em>Nota su fonti e accuratezza:</em> Le tradizioni calendari dei nativi americani sono pratiche viventi che variano per nazione, comunità e generazione. Le rappresentazioni qui sono approssimazioni rispettose tratte da fonti pubblicate e materiali educativi delle nazioni stesse. Se sei Haudenosaunee, Cherokee o membro di una nazione correlata, le tradizioni dei tuoi anziani e custodi del sapere hanno la precedenza su tutto ciò che è scritto qui.</p>
<hr>
<h3>Culture del Cielo nel Pannello Cielo Notturno</h3>
<p>La visualizzazione del cielo può sovrapporre due lenti culturali allo stesso cielo fisico. Attivale dalla barra degli strumenti in modalità cielo.</p>
<p><strong>Skidi Pawnee:</strong> Gli Skidi Pawnee erano una confederazione di villaggi nelle Grandi Pianure (l'attuale Nebraska e Kansas) la cui cosmologia era più elaborata astronomicamente di quasi qualsiasi altra cultura delle pianure. I loro villaggi erano disposti a rispecchiare specifici schemi stellari; il loro calendario cerimoniale era regolato non dai mesi ma dall'apparizione di determinate stelle all'alba e al tramonto. La <strong>Stella della Sera</strong> (Venere a ovest) era la madre di tutta la vita; la <strong>Stella del Mattino</strong> (Marte) era suo marito e la forza della creazione. La loro conoscenza stellare era codificata in carte dipinte su pelle di alce e bufalo conciata — tra i più antichi documenti astronomici sopravvissuti del Nord America. Il pulsante <strong>Pawnee</strong> etichetta il cielo con i nomi stellari Skidi e i loro racconti.</p>
<p><strong>Jyotisha (Indù):</strong> <em>Jyotisha</em> (ज्योतिष, <em>la scienza della luce</em>) è la tradizione vedica di astronomia e misurazione del tempo. Al centro vi è il sistema dei <strong>27 nakshatra</strong> — dimore lunari che dividono l'eclittica in archi uguali di 13°20′. La Luna ne attraversa circa uno al giorno. Ogni nakshatra ha una divinità protettrice, testi sacri del Rig Veda e del Brihat Samhita, e associazioni auspiciose o inauspiciose. Il pulsante <strong>Jyotisha</strong> etichetta il cielo con i nomi dei nakshatra, i loro confini e le divinità protettrici — così lo Scorpione diventa <em>Jyestha</em> (l'anziano, protetto da Indra) e il Sagittario rivela <em>Purvashadha</em> (l'invitto, protetto dalle Acque).</p>
`,

// ─── Spanish ────────────────────────────────────────────────────────────────
es: `
<h3>El Número de Año</h3>
<p>Este calendario usa la <strong>Era Humana</strong> (Era del Holoceno). El conteo habitual a.C./d.C. está anclado en el año 1 d.C. — un punto de referencia calculado en el siglo VI a partir de estimaciones de esperanza de vida. La Era Humana añade 10.000 años para situar el alba de la civilización humana — la revolución agrícola — en el Año 1. Resultado: 2026 d.C. = <strong>Año 12026</strong>.</p>
<p>Esta numeración fue concebida de forma independiente para este calendario — solo más tarde se descubrió que el científico Cesare Emiliani había propuesto la misma idea décadas antes.</p>
<hr>
<h3>Las Lunas (Meses Lunares)</h3>
<p>El calendario tiene 12 lunas por año, cada una comenzando en luna nueva:</p>
<p>Luna de Nieve · Luna del Despertar · Luna de la Siembra · Luna de la Floración · Luna de las Flores · Luna de las Bayas · Luna de Verano · Luna de la Cosecha · Luna de la Recolección · Luna de las Hojas · Luna de la Escarcha · <strong>Luna Oscura</strong></p>
<p><strong>Luna Oscura</strong> es siempre la última luna del año — la que contiene el solsticio de invierno.</p>
<p><strong>Luna Azul:</strong> Cuando el solsticio cae en el día 19 o después de la Luna Oscura (Oso o Zorro), se añade una 13ª luna (Luna Azul), creando un año de 13 lunas.</p>
<p>El umbral no es arbitrario. Un año solar (~365,24 días) es aproximadamente 10,88 días más largo que 12 meses lunares (~354,36 días). Si el solsticio cae en el día 19 de la Luna Oscura, sin corrección caería el año siguiente en el día ~30. Día 20 o después significa que se desplazaría a la luna <em>siguiente</em>. La regla Oso/Zorro es el umbral astronómico exacto. Añadir la Luna Azul devuelve el solsticio al Petirrojo o al Conejo (~día 6) el año siguiente.</p>
<hr>
<h3>El Animal del Año</h3>
<p>La Luna Oscura se divide en cinco partes con nombre. La parte en que cae el solsticio de invierno da nombre al año:</p>
<table class="help-table">
  <tr><th>Parte</th><th>Días</th><th>Carácter</th></tr>
  <tr><td><strong>Petirrojo</strong></td><td>1–6</td><td>Temprano y brillante — el año comienza antes de que la oscuridad se haya asentado</td></tr>
  <tr><td><strong>Conejo</strong></td><td>7–12</td><td>Alerta y vigilante, sentado en el umbral</td></tr>
  <tr><td><strong>Pavo</strong></td><td>13–18</td><td>En mitad de la oscuridad, recolector y deliberado</td></tr>
  <tr><td><strong>Oso</strong></td><td>19–24</td><td>En lo más profundo de la oscuridad — necesita dormir un poco más este año</td></tr>
  <tr><td><strong>Zorro</strong></td><td>25–fin</td><td>Deriva máxima — ya cazando en la larga noche</td></tr>
</table>
<p>El animal del año traduce el desfase entre el calendario solar y el lunar. Año Petirrojo: el solsticio llegó pronto; año Zorro: el calendario ha derivado mucho y se acerca una Luna Azul.</p>
<hr>
<h3>Los Nombres de los Días de la Semana</h3>
<p>En modo <strong>Mítico</strong>, los días llevan el nombre de dioses nórdicos y cuerpos celestes.</p>
<table class="help-table">
  <tr><th>Hada</th><th>Estándar</th><th>Nombrado por</th></tr>
  <tr><td><strong>Heimdía</strong></td><td>Lunes</td><td><strong>Heimdall</strong> — guardián de Asgard, protector del Bifrost. Está en el umbral, siempre vigilante — un inicio de semana perfecto.</td></tr>
  <tr><td><strong>Tyrsdía</strong></td><td>Martes</td><td><strong>Tyr</strong> — dios de la justicia. Sacrificó su mano para encadenar al lobo Fenrir.</td></tr>
  <tr><td><strong>Wodnsdía</strong></td><td>Miércoles</td><td><strong>Wotan (Odín)</strong> — el Padre de Todos, dios de la sabiduría, la poesía y los muertos.</td></tr>
  <tr><td><strong>Thorsdía</strong></td><td>Jueves</td><td><strong>Thor</strong> — dios del trueno, defensor de dioses y humanos.</td></tr>
  <tr><td><strong>Freyadía</strong></td><td>Viernes</td><td><strong>Freya</strong> — diosa del amor, la belleza y la magia.</td></tr>
  <tr><td><strong>Lunesdía</strong></td><td>Sábado</td><td><strong>La Luna.</strong> El sábado lleva el nombre de Saturno, sin lugar entre estos dioses nórdicos. El lunes ya es el día de la Luna — moverla al fin de semana la transforma en una bendición.</td></tr>
  <tr><td><strong>Solardía</strong></td><td>Domingo</td><td><strong>El Sol</strong> — sin cambios.</td></tr>
</table>
<hr>
<h3>Iconos en los Días del Calendario</h3>
<table class="help-table">
  <tr><th>Icono</th><th>Significado</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>Luna nueva, cuarto creciente, luna llena, cuarto menguante</td></tr>
  <tr><td>☀</td><td>Solsticio o equinoccio</td></tr>
  <tr><td>Ⓟ + %</td><td>Perigeo lunar; porcentaje de iluminación</td></tr>
  <tr><td>@</td><td>Apogeo lunar</td></tr>
  <tr><td>🌠</td><td>Lluvia de meteoros cerca del pico</td></tr>
  <tr><td>☄</td><td>Cometa en ventana de visibilidad</td></tr>
  <tr><td>🎂</td><td>Cumpleaños</td></tr>
  <tr><td>Borde de color</td><td>Día festivo federal de EE.UU.</td></tr>
</table>
<hr>
<h3>El Panel del Cielo Nocturno</h3>
<p>Haz clic en cualquier botón <strong>ⓘ</strong> para abrir el panel de eventos. Para hoy, la sección <strong>Esta Noche</strong> muestra la hora de la puesta de sol, el crepúsculo astronómico (sol a 18° bajo el horizonte), los planetas visibles, las lluvias de meteoros activas y las constelaciones vespertinas desde tu ubicación.</p>
<hr>
<h3>Otros Calendarios Lunares</h3>
<p>El <strong>calendario hebreo</strong> es el más utilizado entre los lunisolares. <strong>Puntos en común:</strong> ambos siguen la luna para los meses pero añaden un mes intercalar; ambos comienzan cada mes en luna nueva.</p>
<p>El año hebreo comienza en otoño; este en invierno. El calendario hebreo usa un ciclo fijo de 19 años; este usa un detonante astronómico puro. El Anno Mundi sitúa 2026 d.C. en el año <strong>5786</strong>. El calendario hebreo usa una duración de mes fijada en el siglo IV; este calcula lunas nuevas reales con algoritmos de Meeus.</p>
<p>El <strong>calendario islámico</strong> es puramente lunar sin intercalación. El <strong>calendario chino</strong> es lunisolario. Este calendario es simplemente uno nuevo — construido para una familia específica, en un lugar específico, bajo un cielo específico.</p>
<hr>
<h3>El Calendario Hindú (Panchanga)</h3>
<p>El calendario hindú es uno de los calendarios lunisolares continuos más antiguos del mundo, con raíces en textos astronómicos védicos de miles de años. Esta app sigue el sistema <strong>Amanta</strong> — los meses van de luna nueva a luna nueva — alineado con el almanaque astronómico Drik Panchanga.</p>
<p><strong>Año y era:</strong> El año hindú comienza en primavera, en la luna nueva de <strong>Chaitra</strong>, cerca del equinoccio vernal. La era es el <strong>Vikrama Samvat</strong>: los años se cuentan desde el 57 a.C., por lo que el 2026 d.C. corresponde al <strong>VS 2083</strong> (desde Chaitra en adelante).</p>
<table class="help-table">
  <tr><th>#</th><th>Mes</th><th>Sánscrito</th><th>Estación</th><th>Notas</th></tr>
  <tr><td>1</td><td><strong>Chaitra</strong></td><td>चैत्र</td><td>Primavera</td><td>Año nuevo; asociado con Rama Navami</td></tr>
  <tr><td>2</td><td><strong>Vaishakha</strong></td><td>वैशाख</td><td>Primavera</td><td>Buddha Purnima</td></tr>
  <tr><td>3</td><td><strong>Jyeshtha</strong></td><td>ज्येष्ठ</td><td>Verano</td><td>Nombrado por la estrella Jyestha (Antares)</td></tr>
  <tr><td>4</td><td><strong>Ashadha</strong></td><td>आषाढ</td><td>Verano</td><td>Ratha Yatra; comienza el monzón</td></tr>
  <tr><td>5</td><td><strong>Shravana</strong></td><td>श्रावण</td><td>Monzón</td><td>Raksha Bandhan; sagrado para Shiva</td></tr>
  <tr><td>6</td><td><strong>Bhadrapada</strong></td><td>भाद्रपद</td><td>Monzón</td><td>Ganesh Chaturthi</td></tr>
  <tr><td>7</td><td><strong>Ashvin</strong></td><td>आश्विन</td><td>Otoño</td><td>Navaratri; Dussehra</td></tr>
  <tr><td>8</td><td><strong>Kartika</strong></td><td>कार्तिक</td><td>Otoño</td><td>Diwali; Kartik Purnima</td></tr>
  <tr><td>9</td><td><strong>Margashirsha</strong></td><td>मार्गशीर्ष</td><td>Pre-invierno</td><td>Amado por Krishna en la Gita</td></tr>
  <tr><td>10</td><td><strong>Pausha</strong></td><td>पौष</td><td>Invierno</td><td>Se acerca Makar Sankranti</td></tr>
  <tr><td>11</td><td><strong>Magha</strong></td><td>माघ</td><td>Invierno</td><td>Magh Mela; Vasant Panchami</td></tr>
  <tr><td>12</td><td><strong>Phalguna</strong></td><td>फाल्गुन</td><td>Finales de invierno</td><td>Holi; Maha Shivaratri</td></tr>
</table>
<p><strong>Intercalación — Adhika Māsa:</strong> Cuando transcurre un mes solar sin que ninguna luna nueva inicie un mes lunar dentro de él, se inserta un mes lunar extra. Este "mes bisiesto" (<em>Adhika Māsa</em> o <em>Purushottama Māsa</em>) lleva el nombre del siguiente mes regular con el prefijo <em>Adhika</em> (extra). Se considera especialmente sagrado — libre de las obligaciones ordinarias del calendario, reservado para la meditación y la devoción. Ocurre aproximadamente cada 32–33 meses.</p>
<p><strong>Nakshatra:</strong> El calendario hindú es inseparable de los 27 <strong>nakshatra</strong> — mansiones lunares que marcan el camino de la Luna por el cielo. Cada nakshatra abarca aproximadamente 13°20′ de la eclíptica; la Luna atraviesa uno por día. El panel de cielo en <strong>modo Jyotisha</strong> etiqueta las constelaciones con los nombres de los nakshatra, sus deidades protectoras y textos del Rig Veda y el Brihat Samhita.</p>
<p><em>Jyotisha</em> (ज्योतिष) — la ciencia védica de la luz y el tiempo — es la tradición que unifica todo esto: astronomía, mitología y la medición de los intervalos sagrados.</p>
<hr>
<h3>El Calendario Cherokee</h3>
<p>El pueblo Cherokee (ᏣᎳᎩ, <em>Tsalagi</em>) ha mantenido un calendario lunisolario ligado a los ritmos ecológicos de los Apalaches del sur. El año comienza con la primera luna nueva después del solsticio de invierno — el mismo ancla que este calendario.</p>
<table class="help-table">
  <tr><th>#</th><th>Cherokee</th><th>Romanizado</th><th>Inglés</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Cold Moon / Cold Month</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Bony Moon (hungry month)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Windy Moon</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Flower Moon</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Planting Moon</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Green Corn Moon</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Ripe Corn Moon</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>End of Fruit Moon</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Nut Moon</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Harvest Moon</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Trading Moon</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Snow Moon</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Intercalary Moon (as needed)</td></tr>
</table>
<p>El silabario Cherokee fue creado en el primer cuarto del siglo XIX por <strong>Sequoyah</strong> (ᏎᏉᏯ), un platero que nunca había aprendido a leer ni escribir. Pasó aproximadamente doce años desarrollando la escritura enteramente desde su propia observación. En 1825, la mayoría de los Cherokee eran alfabetos en su propia lengua — un logro sin parangón en la historia registrada.</p>
<hr>
<h3>El Calendario Haudenosaunee (Iroqués)</h3>
<p>La Confederación Haudenosaunee — Mohawk, Oneida, Onondaga, Cayuga, Seneca y (después de ~1722) Tuscarora — organiza el tiempo en torno a 13 lunas ceremoniales. El año comienza en pleno invierno, centrado en la <strong>Ceremonia del Midwinter</strong>, la más sagrada de todas las observancias Haudenosaunee.</p>
<table class="help-table">
  <tr><th>#</th><th>Luna</th><th>Ceremonia / Carácter</th></tr>
  <tr><td>1</td><td><strong>Luna del Pleno Invierno</strong></td><td>Ceremonia del Midwinter — renovación, agradecimiento, compartir sueños y reavivamiento del fuego sagrado</td></tr>
  <tr><td>2</td><td><strong>Luna de la Tardanza</strong></td><td>Tiempo de frío y escasez; compartir comunitario y preparación</td></tr>
  <tr><td>3</td><td><strong>Luna del Arce Azucarero</strong></td><td>Corre la savia del arce; Ceremonia del Sugar Bush — primera cosecha del año</td></tr>
  <tr><td>4</td><td><strong>Luna de la Rana</strong></td><td>Las ranas regresan; comienza la siembra primaveral</td></tr>
  <tr><td>5</td><td><strong>Luna de la Siembra</strong></td><td>Ceremonia de la Siembra — honrar a las Tres Hermanas (maíz, frijoles, calabaza)</td></tr>
  <tr><td>6</td><td><strong>Luna de la Fresa</strong></td><td>Ceremonia de la Fresa — primer fruto del verano; agradecimiento y danzas sociales</td></tr>
  <tr><td>7</td><td><strong>Luna del Frijol Verde</strong></td><td>Ceremonia del Frijol — honrar la cosecha de los frijoles</td></tr>
  <tr><td>8</td><td><strong>Luna del Maíz Verde</strong></td><td>Ceremonia del Maíz Verde — la ceremonia central del verano; agradecimiento por el nuevo maíz</td></tr>
  <tr><td>9</td><td><strong>Luna de la Cosecha</strong></td><td>Festival de la Cosecha — recolección y conservación; festín comunitario</td></tr>
  <tr><td>10</td><td><strong>Luna de la Escarcha</strong></td><td>Preparación para el invierno; la temporada de caza se intensifica</td></tr>
  <tr><td>11</td><td><strong>Luna del Frío</strong></td><td>Comienza la temporada de narración — los cuentos solo se cuentan cuando hay nieve</td></tr>
  <tr><td>12</td><td><strong>Luna del Gran Frío</strong></td><td>El invierno más profundo; las largas noches; anticipación de la renovación</td></tr>
  <tr><td>13</td><td><strong>Luna Intercalar</strong></td><td>Insertada según necesidad cuando una ceremonia caería en la estación equivocada</td></tr>
</table>
<hr>
<h3>Nota sobre la Intercalación de los Nativos Americanos</h3>
<p>Los calendarios Cherokee y Haudenosaunee — como la mayoría de los calendarios lunares de los nativos americanos — no insertan meses bisiestos por aritmética fija. La decisión de añadir una luna extra la tomaban tradicionalmente <strong>líderes ceremoniales y ancianos</strong> cuando la deriva observada entre la luna y la estación amenazaba con mover una ceremonia sagrada al momento equivocado.</p>
<p>Esto sitúa la relación viva entre ceremonia y estación por encima de la coherencia del calendario. El calendario es una herramienta al servicio del pueblo y la tierra; cuando la herramienta deriva, la herramienta se ajusta.</p>
<p><strong>Ejemplos de cuándo se insertaría una luna:</strong></p>
<ul>
  <li>La <strong>Ceremonia del Maíz Verde</strong> es sagrada al momento en que el nuevo cultivo está listo para comer por primera vez. Si las lunas habían ido demasiado deprisa y la Luna del Maíz Verde llegaba mientras los tallos aún crecían, los ancianos podían añadir una luna extra y dejar que la estación se pusiera al día.</li>
  <li>La <strong>Ceremonia del Midwinter</strong> marca el verdadero giro del año en el frío profundo. Si las lunas habían derivado tanto que el Midwinter llegaba antes de que el suelo se hubiera helado, podía insertarse una luna extra para preservar el significado de la ceremonia.</li>
  <li>La <strong>Ceremonia de la Fresa</strong> celebra las primeras fresas silvestres. Si la Luna de la Fresa llegaba cuando las laderas aún estaban yermas, era el calendario — no las fresas — lo que tenía que cambiar.</li>
</ul>
<p><em>Nota sobre fuentes y exactitud:</em> Las tradiciones calendáricas de los nativos americanos son prácticas vivas que varían según la nación, la comunidad y la generación. Las representaciones aquí son aproximaciones respetuosas extraídas de fuentes publicadas y materiales educativos de las propias naciones. Si eres Haudenosaunee, Cherokee o miembro de una nación relacionada, las tradiciones de tus propios ancianos y guardianes del conocimiento tienen precedencia sobre lo aquí escrito.</p>
<hr>
<h3>Culturas del Cielo en el Panel del Cielo Nocturno</h3>
<p>La vista del cielo puede superponer dos lentes culturales sobre el mismo cielo físico. Actívalas desde la barra de herramientas en el modo cielo.</p>
<p><strong>Skidi Pawnee:</strong> Los Skidi Pawnee eran una confederación de aldeas en las Grandes Llanuras (el actual Nebraska y Kansas) cuya cosmología era más elaborada astronómicamente que casi cualquier otra cultura de las llanuras. Sus aldeas estaban dispuestas para reflejar patrones estelares específicos; su calendario ceremonial se regía no por los meses sino por la aparición de determinadas estrellas al anochecer y al amanecer. La <strong>Estrella de la Tarde</strong> (Venus al oeste) era la madre de toda la vida; la <strong>Estrella de la Mañana</strong> (Marte) era su esposo y la fuerza de la creación. Su conocimiento estelar estaba codificado en mapas pintados sobre cuero de alce y bisonte curtido — algunos de los documentos astronómicos más antiguos conservados de América del Norte. El interruptor <strong>Pawnee</strong> etiqueta el cielo con los nombres estelares Skidi y sus leyendas.</p>
<p><strong>Jyotisha (Hindú):</strong> <em>Jyotisha</em> (ज्योतिष, <em>la ciencia de la luz</em>) es la tradición védica de la astronomía y la medición del tiempo. En su centro se encuentra el sistema de los <strong>27 nakshatra</strong> — mansiones lunares que dividen la eclíptica en arcos iguales de 13°20′. La Luna atraviesa aproximadamente uno por día. Cada nakshatra tiene una deidad protectora, textos sagrados del Rig Veda y el Brihat Samhita, y asociaciones auspiciosas o inauspiciosas. El interruptor <strong>Jyotisha</strong> etiqueta el cielo con los nombres de los nakshatra, sus límites y sus deidades protectoras — así Escorpio se convierte en <em>Jyestha</em> (el mayor, protegido por Indra) y Sagitario revela a <em>Purvashadha</em> (el invicto, protegido por las Aguas).</p>
`,

// ─── Swahili ─────────────────────────────────────────────────────────────────
sw: `
<h3>Nambari ya Mwaka</h3>
<p>Kalenda hii inatumia <strong>Enzi ya Binadamu</strong> (Enzi ya Holocene). Hesabu ya kawaida ya KK/BK imeunganishwa na mwaka 1 BK — kumbukumbu iliyohesabiwa katika karne ya 6. Enzi ya Binadamu inaongeza miaka 10,000 kuweka mwanzo wa ustaarabu wa binadamu — mapinduzi ya kilimo — katika Mwaka 1. Matokeo: 2026 BK = <strong>Mwaka 12026</strong>.</p>
<p>Nambari hii ilizungumzwa bila kujua kwa kalenda hii — baadaye iligunduliwa kwamba mwanasayansi Cesare Emiliani alikuwa amependekeza wazo hilo hilo miongo mapema.</p>
<hr>
<h3>Miezi ya Mwezi</h3>
<p>Kalenda ina miezi 12 kwa mwaka, kila mwezi unaanza na mwandamo:</p>
<p>Mwezi wa Theluji · Mwezi wa Kuamka · Mwezi wa Mbegu · Mwezi wa Kuchanua · Mwezi wa Maua · Mwezi wa Matunda · Mwezi wa Joto · Mwezi wa Mavuno · Mwezi wa Kukusanya · Mwezi wa Majani · Mwezi wa Baridi · <strong>Mwezi wa Giza</strong></p>
<p><strong>Mwezi wa Giza</strong> ni mwezi wa mwisho wa mwaka — ule unaohusisha solstisi ya majira ya baridi.</p>
<p><strong>Mwezi wa Samawi:</strong> Wakati solstisi inaangukia siku ya 19 au baadaye ya Mwezi wa Giza (Dubu au Mbweha), mwezi wa 13 (Mwezi wa Samawi) unaongezwa, kuunda mwaka wa miezi 13. Kanuni ya Dubu/Mbweha ni kizingiti halisi cha unajimu ambapo kalenda lazima ijisahihishe.</p>
<hr>
<h3>Mnyama wa Mwaka</h3>
<p>Mwezi wa Giza umegawanywa katika sehemu tano zenye majina. Sehemu ambayo solstisi ya majira ya baridi inaangukia inaitaja mwaka:</p>
<table class="help-table">
  <tr><th>Sehemu</th><th>Siku</th><th>Tabia</th></tr>
  <tr><td><strong>Titi</strong></td><td>1–6</td><td>Mapema na angavu — mwaka unaanza kabla ya giza kukaa kweli kweli</td></tr>
  <tr><td><strong>Sungura</strong></td><td>7–12</td><td>Macho na makini, ameketi kwenye kizingiti</td></tr>
  <tr><td><strong>Bata Mzinga</strong></td><td>13–18</td><td>Katikati ya giza, mkusanyaji na mwenye busara</td></tr>
  <tr><td><strong>Dubu</strong></td><td>19–24</td><td>Kina cha giza — anahitaji kulala kidogo zaidi mwaka huu</td></tr>
  <tr><td><strong>Mbweha</strong></td><td>25–mwisho</td><td>Mseto wa juu zaidi — tayari anawinda katika usiku mrefu</td></tr>
</table>
<hr>
<h3>Majina ya Siku za Wiki</h3>
<p>Katika hali ya <strong>Kizushi</strong>, siku zinaitwa kwa miungu ya Kinorse na miili ya angani.</p>
<table class="help-table">
  <tr><th>Kalenda</th><th>Kawaida</th><th>Imetoka kwa</th></tr>
  <tr><td><strong>Siku ya Heim</strong></td><td>Jumatatu</td><td><strong>Heimdall</strong> — mlinzi wa Asgard, mlinda daraja la Bifrost.</td></tr>
  <tr><td><strong>Siku ya Tyr</strong></td><td>Jumanne</td><td><strong>Tyr</strong> — mungu wa haki. Alitoa mkono wake kumfunga mbwa mwitu Fenrir.</td></tr>
  <tr><td><strong>Siku ya Wodn</strong></td><td>Jumatano</td><td><strong>Wotan (Odin)</strong> — Baba wa Wote, mungu wa hekima, ushairi na wafu.</td></tr>
  <tr><td><strong>Siku ya Thor</strong></td><td>Alhamisi</td><td><strong>Thor</strong> — mungu wa radi, mlinzi wa miungu na wanadamu.</td></tr>
  <tr><td><strong>Siku ya Freya</strong></td><td>Ijumaa</td><td><strong>Freya</strong> — mungu wa upendo, uzuri na uchawi.</td></tr>
  <tr><td><strong>Siku ya Mwezi</strong></td><td>Jumamosi</td><td><strong>Mwezi.</strong> Jumamosi ina jina la Zohali — mungu wa Kirumi bila nafasi kati ya miungu hii ya Kinorse. Kuhamisha Mwezi kwenye wikendi kunabadilisha mzigo kuwa baraka.</td></tr>
  <tr><td><strong>Siku ya Jua</strong></td><td>Jumapili</td><td><strong>Jua</strong> — halijabadilika.</td></tr>
</table>
<hr>
<h3>Ikoni kwenye Siku za Kalenda</h3>
<table class="help-table">
  <tr><th>Ikoni</th><th>Maana</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>Mwandamo, robo ya kwanza, mwezi mzima, robo ya mwisho</td></tr>
  <tr><td>☀</td><td>Solstisi au usawa wa mchana na usiku</td></tr>
  <tr><td>Ⓟ + %</td><td>Mwezi karibu zaidi na Dunia; asilimia ya mwanga</td></tr>
  <tr><td>@</td><td>Mwezi mbali zaidi na Dunia</td></tr>
  <tr><td>🌠</td><td>Mvua ya vimondo karibu na kilele</td></tr>
  <tr><td>☄</td><td>Kometi katika dirisha la kuonekana</td></tr>
  <tr><td>🎂</td><td>Siku ya kuzaliwa</td></tr>
  <tr><td>Mipaka ya rangi</td><td>Sikukuu ya shirikisho la Marekani</td></tr>
</table>
<hr>
<h3>Paneli ya Anga ya Usiku</h3>
<p>Bonyeza kitufe chochote cha <strong>ⓘ</strong> kufungua paneli ya matukio. Kwa leo, sehemu ya <strong>Usiku Huu</strong> inaonyesha wakati wa jua kutua, machweo ya astronomia, sayari zinazoonekana, mvua za vimondo amilifu na nyota za usiku kutoka mahali pako.</p>
<hr>
<h3>Kalenda Nyingine za Mwezi</h3>
<p><strong>Kalenda ya Kiebrania</strong> ni ya lunisolari. Miezi yake 12 (au 13 katika mwaka wa kurukaruka) huanza na mwandamo. Mwaka wa Kiebrania unaanza vuli; huu unaanza majira ya baridi. Kalenda ya Kiebrania hufuata ratiba ya miaka 19 iliyopangwa; hii hutumia kianzio cha astronomia halisi. Anno Mundi inaweka 2026 BK katika mwaka <strong>5786</strong>.</p>
<p><strong>Kalenda ya Kiislamu</strong> ni ya mwezi tu, bila mwezi wa ziada. <strong>Kalenda ya Kichina</strong> ni ya lunisolari. Kalenda hii ni mpya tu — iliyojengwa kwa familia maalum, mahali maalum, chini ya anga maalum.</p>
<hr>
<h3>Kalenda ya Kihindu (Panchanga)</h3>
<p>Kalenda ya Kihindu ni moja ya kalenda za lunisolari zenye umri mrefu zaidi duniani, yenye mizizi katika maandishi ya unajimu wa Vedic ya maelfu ya miaka. Programu hii inafuata mfumo wa <strong>Amanta</strong> — miezi huanzia mwandamo hadi mwandamo — iliyoratibishwa na almanaki ya unajimu ya Drik Panchanga.</p>
<p><strong>Mwaka na enzi:</strong> Mwaka wa Kihindu unaanza masika, kwenye mwandamo wa <strong>Chaitra</strong>, karibu na usawa wa masika. Enzi ni <strong>Vikrama Samvat</strong>: miaka inahesabiwa kuanzia 57 KK, hivyo 2026 BK inalingana na <strong>VS 2083</strong> (kuanzia Chaitra na kuendelea).</p>
<table class="help-table">
  <tr><th>#</th><th>Mwezi</th><th>Sanskrit</th><th>Msimu</th><th>Maelezo</th></tr>
  <tr><td>1</td><td><strong>Chaitra</strong></td><td>चैत्र</td><td>Masika</td><td>Mwaka mpya; unahusiana na Rama Navami</td></tr>
  <tr><td>2</td><td><strong>Vaishakha</strong></td><td>वैशाख</td><td>Masika</td><td>Buddha Purnima</td></tr>
  <tr><td>3</td><td><strong>Jyeshtha</strong></td><td>ज्येष्ठ</td><td>Kiangazi</td><td>Imepewa jina la nyota Jyestha (Antares)</td></tr>
  <tr><td>4</td><td><strong>Ashadha</strong></td><td>आषाढ</td><td>Kiangazi</td><td>Ratha Yatra; mvua kubwa huanza</td></tr>
  <tr><td>5</td><td><strong>Shravana</strong></td><td>श्रावण</td><td>Mvua Kubwa</td><td>Raksha Bandhan; takatifu kwa Shiva</td></tr>
  <tr><td>6</td><td><strong>Bhadrapada</strong></td><td>भाद्रपद</td><td>Mvua Kubwa</td><td>Ganesh Chaturthi</td></tr>
  <tr><td>7</td><td><strong>Ashvin</strong></td><td>आश्विन</td><td>Vuli</td><td>Navaratri; Dussehra</td></tr>
  <tr><td>8</td><td><strong>Kartika</strong></td><td>कार्तिक</td><td>Vuli</td><td>Diwali; Kartik Purnima</td></tr>
  <tr><td>9</td><td><strong>Margashirsha</strong></td><td>मार्गशीर्ष</td><td>Kabla ya Baridi</td><td>Mpendwa wa Krishna katika Gita</td></tr>
  <tr><td>10</td><td><strong>Pausha</strong></td><td>पौष</td><td>Baridi</td><td>Makar Sankranti inakaribia</td></tr>
  <tr><td>11</td><td><strong>Magha</strong></td><td>माघ</td><td>Baridi</td><td>Magh Mela; Vasant Panchami</td></tr>
  <tr><td>12</td><td><strong>Phalguna</strong></td><td>फाल्गुन</td><td>Baridi ya Mwisho</td><td>Holi; Maha Shivaratri</td></tr>
</table>
<p><strong>Mwezi wa ziada — Adhika Māsa:</strong> Wakati mwezi wa jua unapita bila mwandamo kuanzisha mwezi wa mwezi ndani yake, mwezi wa ziada wa mwezi huingizwa. "Mwezi huu wa kuruka" (<em>Adhika Māsa</em> au <em>Purushottama Māsa</em>) hubeba jina la mwezi unaofuata wa kawaida na kiambatisho cha <em>Adhika</em> (ziada). Unachukuliwa kuwa takatifu hasa — huru kutoka majukumu ya kawaida ya kalenda, umewekwa pembeni kwa tafakari na ibada. Hii hutokea takriban kila miezi 32–33.</p>
<p><strong>Nakshatras:</strong> Kalenda ya Kihindu haiwezi kutenganishwa na <strong>nakshatras</strong> 27 — majumba ya mwezi yanayoashiria njia ya Mwezi angani. Kila nakshatra inashika takriban digrii 13°20′ za ecliptic; Mwezi huipita moja kwa siku. Paneli ya anga katika <strong>hali ya Jyotisha</strong> huweka lebo kwa nyota kwa majina ya nakshatra, miungu yao inayoongoza, na hadithi kutoka Rig Veda na Brihat Samhita.</p>
<p><em>Jyotisha</em> (ज्योतिष) — sayansi ya Vedic ya nuru na wakati — ndio mila inayounganisha haya yote: unajimu, hadithi za kizushi, na upimaji wa vipindi vitakatifu.</p>
<hr>
<h3>Kalenda ya Cherokee</h3>
<p>Watu wa Cherokee (ᏣᎳᎩ, <em>Tsalagi</em>) wamehifadhi kalenda ya lunisolari iliyounganishwa na midundo ya kiikolojia ya Milima ya Appalachian ya kusini. Mwaka huanza na mwandamo wa kwanza baada ya solstisi ya baridi — nanga ile ile kama kalenda hii.</p>
<table class="help-table">
  <tr><th>#</th><th>Cherokee</th><th>Ilivyoandikwa</th><th>Kiingereza</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Cold Moon / Cold Month</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Bony Moon (hungry month)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Windy Moon</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Flower Moon</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Planting Moon</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Green Corn Moon</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Ripe Corn Moon</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>End of Fruit Moon</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Nut Moon</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Harvest Moon</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Trading Moon</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Snow Moon</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Intercalary Moon (as needed)</td></tr>
</table>
<p>Hati ya silabi ya Cherokee iliundwa mwanzoni mwa karne ya 19 na <strong>Sequoyah</strong> (ᏎᏉᏯ), fundi wa fedha ambaye hakuwahi kufundishwa kusoma wala kuandika. Alitumia miaka karibu kumi na mbili akitengeneza hati hiyo kutoka kwa uchunguzi wake mwenyewe. Kufikia 1825, wengi wa Wacherokee walikuwa na uwezo wa kusoma lugha yao wenyewe — jambo ambalo halina mfano katika historia iliyorekodiwa.</p>
<hr>
<h3>Kalenda ya Haudenosaunee (Iroquois)</h3>
<p>Shirikisho la Haudenosaunee — Mohawk, Oneida, Onondaga, Cayuga, Seneca, na (baada ya ~1722) Tuscarora — hupanga wakati kulingana na miezi 13 ya sherehe. Mwaka huanza katikati ya majira ya baridi, ukizingatia <strong>Sherehe ya Katikati ya Baridi</strong>, takatifu zaidi ya matambiko yote ya Haudenosaunee.</p>
<table class="help-table">
  <tr><th>#</th><th>Mwezi</th><th>Sherehe / Tabia</th></tr>
  <tr><td>1</td><td><strong>Mwezi wa Katikati ya Baridi</strong></td><td>Sherehe ya Katikati ya Baridi — upyaisho, shukrani, kushiriki ndoto, na kuwasha upya moto mtakatifu</td></tr>
  <tr><td>2</td><td><strong>Mwezi wa Uchelewaji</strong></td><td>Wakati wa baridi na uhaba; kushirikiana kwa jamii na maandalizi</td></tr>
  <tr><td>3</td><td><strong>Mwezi wa Maple ya Sukari</strong></td><td>Utomvu wa maple hutiririka; Sherehe ya Sugar Bush — mavuno ya kwanza ya mwaka</td></tr>
  <tr><td>4</td><td><strong>Mwezi wa Vyura</strong></td><td>Vyura wnarudi; upandaji wa masika huanza</td></tr>
  <tr><td>5</td><td><strong>Mwezi wa Kupanda</strong></td><td>Sherehe ya Kupanda Mbegu — kuheshimu Dada Watatu (mahindi, maharagwe, boga)</td></tr>
  <tr><td>6</td><td><strong>Mwezi wa Jordani</strong></td><td>Sherehe ya Jordani — tunda la kwanza la kiangazi; shukrani na ngoma za kijamii</td></tr>
  <tr><td>7</td><td><strong>Mwezi wa Maharagwe Mabichi</strong></td><td>Sherehe ya Maharagwe — kuheshimu mavuno ya maharagwe</td></tr>
  <tr><td>8</td><td><strong>Mwezi wa Mahindi Mabichi</strong></td><td>Sherehe ya Mahindi Mabichi — sherehe kuu ya kiangazi; shukrani kwa mahindi mapya</td></tr>
  <tr><td>9</td><td><strong>Mwezi wa Mavuno</strong></td><td>Sherehe ya Mavuno — kukusanya na kuhifadhi; karamu ya jamii</td></tr>
  <tr><td>10</td><td><strong>Mwezi wa Theluji ya Mapema</strong></td><td>Maandalizi ya majira ya baridi; msimu wa uwindaji unaendelea</td></tr>
  <tr><td>11</td><td><strong>Mwezi wa Baridi</strong></td><td>Msimu wa kusimulia hadithi huanza — hadithi zinaweza tu kusimulиwa theluji ikiwa ardhini</td></tr>
  <tr><td>12</td><td><strong>Mwezi wa Baridi Kali Sana</strong></td><td>Kina zaidi cha majira ya baridi; usiku mrefu; matarajio ya upyaisho</td></tr>
  <tr><td>13</td><td><strong>Mwezi wa Ziada</strong></td><td>Huingizwa inapohitajika wakati sherehe ingepata kuanguka katika msimu mbaya</td></tr>
</table>
<hr>
<h3>Kumbuka Kuhusu Kuongeza Mwezi wa Ziada kwa Waamerika wa Asili</h3>
<p>Kalenda za Cherokee na Haudenosaunee — kama kalenda nyingi za mwezi za Waamerika wa Asili — haziongezi miezi ya kuruka kwa hesabu zilizopangwa. Uamuzi wa kuongeza mwezi wa ziada ulipitishwa kidesturi na <strong>viongozi wa sherehe na wazee</strong> wakati msongo uliogunduliwa kati ya mwezi na msimu ulitishia kuhamisha sherehe takatifu hadi wakati mbaya wa mwaka.</p>
<p>Hii inaweka uhusiano hai kati ya sherehe na msimu juu ya uthabiti wa kalenda. Kalenda ni chombo kinachohudumia watu na ardhi; chombo kinapotelekezea, kinasahihishwa.</p>
<p><strong>Mifano ya wakati ambapo mwezi ungeongezwa:</strong></p>
<ul>
  <li><strong>Sherehe ya Mahindi Mabichi</strong> ni takatifu kwa wakati ambapo mazao mapya kwanza kuwa tayari kuliwa. Ikiwa miezi ilikuwa imekimbia haraka na Mwezi wa Mahindi Mabichi ulifika wakati mashina yalikuwa bado yakiunda, wazee wangeweza kuongeza mwezi wa ziada na kuruhusu msimu kufikia.</li>
  <li><strong>Sherehe ya Katikati ya Baridi</strong> inaashiria mgeuko wa kweli wa mwaka katika baridi kali. Ikiwa miezi ilikuwa imeteleza kiasi kwamba Katikati ya Baridi ilifika kabla ardhi haijaganda, mwezi wa ziada ungeweza kuingizwa kuhifadhi maana ya sherehe.</li>
  <li><strong>Sherehe ya Jordani</strong> inaadhimisha jordani za kwanza za porini. Ikiwa Mwezi wa Jordani ulifika wakati vilima bado vilikuwa tupu, kalenda — si jordani — ilihitaji kubadilika.</li>
</ul>
<p><em>Kumbuka kuhusu vyanzo na usahihi:</em> Mapokeo ya kalenda za Waamerika wa Asili ni mazoea hai yanayotofautiana kulingana na taifa, jamii, na kizazi. Mawakilisho haya ni tafsiri za heshima zilizochukuliwa kutoka vyanzo vilivyochapishwa na vifaa vya elimu vya mataifa yenyewe. Ikiwa wewe ni Haudenosaunee, Cherokee, au mwanachama wa taifa linalohusiana, mapokeo ya wazee wako na wabebaji wa maarifa yanashinda chochote kilichoandikwa hapa.</p>
<hr>
<h3>Tamaduni za Anga katika Paneli ya Anga ya Usiku</h3>
<p>Mtazamo wa anga unaweza kuonyesha mitazamo miwili ya kitamaduni kwenye anga ile ile halisi. Zizima kutoka kwenye upau wa zana katika hali ya anga.</p>
<p><strong>Skidi Pawnee:</strong> Skidi Pawnee walikuwa shirikisho la vijiji kwenye Tambarare Kubwa (Nebraska na Kansas za sasa) ambao unajimu wao ulikuwa wa kina zaidi kuliko karibu utamaduni wowote mwingine wa tambarare. Vijiji vyao viliwekwa kwa mpangilio kuiga mifumo maalum ya nyota; kalenda yao ya sherehe ilisimamiwa si kwa miezi bali kwa kuonekana kwa nyota fulani jioni na asubuhi. <strong>Nyota ya Jioni</strong> (Zuhura magharibi) ilikuwa mama wa maisha yote; <strong>Nyota ya Asubuhi</strong> (Mirihi) alikuwa mumewe na nguvu ya uumbaji. Maarifa yao ya nyota yalihifadhiwa katika michoro iliyopakiwa kwenye ngozi za kulungu na nyati zilizochunwa — baadhi ya hati za zamani zaidi za unajimu zinazosalia kutoka Amerika Kaskazini. Kitufe cha <strong>Pawnee</strong> huweka lebo kwenye anga na majina ya nyota za Skidi na hadithi.</p>
<p><strong>Jyotisha (Kihindu):</strong> <em>Jyotisha</em> (ज्योतिष, <em>sayansi ya nuru</em>) ni mila ya Vedic ya unajimu na upimaji wa wakati. Msingi wake ni mfumo wa <strong>nakshatras 27</strong> — majumba ya mwezi yanayogawanya ecliptic katika arcs sawa za 13°20′. Mwezi hupita nakshatra moja kwa siku takriban. Kila nakshatra ina mungu anayeongoza, hadithi takatifu kutoka Rig Veda na Brihat Samhita, na uhusiano wa bahati nzuri au mbaya. Kitufe cha <strong>Jyotisha</strong> huweka lebo kwenye anga na majina ya nakshatra, mipaka yao, na miungu yao wanaoongoza — hivyo Scorpius inakuwa <em>Jyestha</em> (mkubwa, anayeongozwa na Indra) na Sagittarius inafunua <em>Purvashadha</em> (asiyeshindwa, anayeongozwa na Maji).</p>
`,

// ─── Latin ───────────────────────────────────────────────────────────────────
la: `
<h3>Numerus Anni</h3>
<p>Hoc calendarium <strong>Aera Humana</strong> utitur (Aera Holokaena). Numeratio vulgaris a. Chr. n./p. Chr. n. anno primo p. Chr. n. innixa est — puncto referentiae saeculo VI ex aestimatione vitae humanae computato. Aera Humana antiquius initium eligit: decem milia annorum addit ut aurora civilizationis humanae — revolutio agrestis — in Anno Primo collocetur. Ergo: 2026 p. Chr. n. = <strong>Annus 12026</strong>.</p>
<p>Haec numeratio independenter pro hoc calendario concepta est — postea inventum est scientificum Caesarem Emiliani eandem sententiam decenniis ante proposuisse.</p>
<hr>
<h3>Lunae (Menses Lunares)</h3>
<p>Calendarium duodecim lunas per annum habet, singulae a luna nova incipiunt:</p>
<p>Luna Nivis · Luna Vigiliae · Luna Seminum · Luna Florentis · Luna Florum · Luna Baccarum · Luna Aestatis · Luna Messis · Luna Collectae · Luna Foliorum · Luna Pruinae · <strong>Luna Obscura</strong></p>
<p><strong>Luna Obscura</strong> semper ultima luna anni est — ea quae solstitium hiemale continet.</p>
<p><strong>Luna Caerulea:</strong> Si solstitium die XIX aut posterius Lunae Obscurae (Ursus aut Vulpes) cadit, luna XIII (Luna Caerulea) post Lunam Obscuram additur, annum tredecim lunarum faciens.</p>
<p>Limes non arbitrarius est. Annus solaris (~CCCLXV.XXIV dies) circiter X.LXXXVIII dies longior est quam duodecim menses lunares (~CCCLIV.XXXVI dies). Si solstitium die XIX cadit, proximo anno sine correctione die ~XXX caderet. Die XX aut posterius solstitium in lunam <em>sequentem</em> trahitur — Luna Obscura solstitium non amplius continet. Regula Ursi/Vulpis est limes astronomicus exactus. Luna Caerulea addita solstitium in Rubiculam vel Leporem (~die VI) proximo anno reducit.</p>
<hr>
<h3>Animal Anni</h3>
<p>Luna Obscura in quinque partes nominatas divisa est. Pars in qua solstitium hiemale cadit nomen anno dat:</p>
<table class="help-table">
  <tr><th>Pars</th><th>Dies</th><th>Indoles</th></tr>
  <tr><td><strong>Rubecula</strong></td><td>I–VI</td><td>Matutina et clara — annus incipit antequam tenebrae sederunt</td></tr>
  <tr><td><strong>Lepus</strong></td><td>VII–XII</td><td>Vigil et attentus, in limine sedens</td></tr>
  <tr><td><strong>Gallus Indicus</strong></td><td>XIII–XVIII</td><td>In medio tenebrarum, colligens et deliberatus</td></tr>
  <tr><td><strong>Ursus</strong></td><td>XIX–XXIV</td><td>In profundis tenebris — paulo diutius hoc anno dormire debet</td></tr>
  <tr><td><strong>Vulpes</strong></td><td>XXV–finis</td><td>Maxima aberratio — iam in longa nocte venans</td></tr>
</table>
<p>Animal anni est compendium pro intervallo inter calendarium solare et lunare. Anno Rubiculae: solstitium mane venit. Anno Vulpis: calendarium multum aberravit et Luna Caerulea adveniet.</p>
<hr>
<h3>Nomina Dierum Hebdomadis</h3>
<p>In modo <strong>Mythico</strong>, dies nominibus deorum Nordicorum et corporum caelestium insigniuntur.</p>
<table class="help-table">
  <tr><th>Calendarium</th><th>Vulgare</th><th>Nomen deductum a</th></tr>
  <tr><td><strong>Dies Heimi</strong></td><td>Dies Lunae</td><td><strong>Heimdall</strong> — custos Asgardi, Pontis Arcus Caelestis. In limine stat, semper vigilans.</td></tr>
  <tr><td><strong>Dies Tyri</strong></td><td>Dies Martis</td><td><strong>Tyr</strong> — deus iustitiae. Manum suam immolavit ut lupum Fenrir ligaret.</td></tr>
  <tr><td><strong>Dies Wodeni</strong></td><td>Dies Mercurii</td><td><strong>Wotan (Odin)</strong> — Pater Omnium, deus sapientiae, poesis et mortuorum.</td></tr>
  <tr><td><strong>Dies Thoris</strong></td><td>Dies Iovis</td><td><strong>Thor</strong> — deus tonitrui, defensor deorum et hominum.</td></tr>
  <tr><td><strong>Dies Freyae</strong></td><td>Dies Veneris</td><td><strong>Freya</strong> — dea amoris, pulchritudinis et magiae.</td></tr>
  <tr><td><strong>Dies Lunae</strong></td><td>Dies Saturni</td><td><strong>Luna.</strong> Dies Saturni Saturno, deo Romano, nomen habet — cui inter hos deos Nordicos locus non est. Eum ad finem hebdomadis transferre ex onere in beneficium mutat.</td></tr>
  <tr><td><strong>Dies Solis</strong></td><td>Dies Solis</td><td><strong>Sol</strong> — immutatus.</td></tr>
</table>
<hr>
<h3>Signa in Diebus Calendarii</h3>
<table class="help-table">
  <tr><th>Signum</th><th>Significatio</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>Luna nova, quadrans primus, luna plena, quadrans posterior</td></tr>
  <tr><td>☀</td><td>Solstitium aut aequinoctium</td></tr>
  <tr><td>Ⓟ + %</td><td>Perigaeum lunare; pars illuminata</td></tr>
  <tr><td>@</td><td>Apogaeum lunare</td></tr>
  <tr><td>🌠</td><td>Imber meteororum prope culmen</td></tr>
  <tr><td>☄</td><td>Cometa in fenestra visibilitatis</td></tr>
  <tr><td>🎂</td><td>Dies natalis</td></tr>
  <tr><td>Margo coloratus</td><td>Dies festus publicus Americanus</td></tr>
</table>
<hr>
<h3>Tabula Caeli Nocturni</h3>
<p>Elige quodcumque pittacium <strong>ⓘ</strong> ut tabulam eventuum aperias. Pro die hodierno, sectio <strong>Hac Nocte</strong> ostendit horam occasus solis, crepusculum astronomicum (sole XVIII gradibus sub horizonte), planetas visibiles, imbres meteororum activos et constellationes vespertinas ex loco tuo visibiles.</p>
<hr>
<h3>Alia Calendaria Lunaria</h3>
<p><strong>Calendarium Hebraicum</strong> lunisolarium est. Mensibus XII (vel XIII anno intercalari) utitur, singulis a luna nova incipientibus. Annus Hebraicus autumno incipit; hic hieme. Calendarium Hebraicum cyclo XIX annorum fixo utitur; hoc causa astronomica pura. Anno Mundi computato, 2026 p. Chr. n. anno <strong>5786</strong> respondet. Calendarium Hebraicum mensem lunarem saeculo IV fixum adhibet; hoc lunas novas veras algorithmis Meeus computat.</p>
<p>Calendarium <strong>Islamicum</strong> pure lunare est sine intercalatione. Calendarium <strong>Sinense</strong> lunisolarium est. Hoc calendarium simpliciter novum est — pro familia specifica, in loco specifico, sub caelo specifico aedificatum.</p>
<hr>
<h3>Calendarium Hinduum (Panchanga)</h3>
<p>Calendarium Hinduum inter antiquissima calendaría lunisolaría mundi continua numeratur, radicibus in textibus astronomicis Vedicis milibus annorum antiquis. Haec applicatio systema <strong>Amanta</strong> sequitur — menses a luna nova ad lunam novam currunt — ad almanachum astronomicum Drik Panchanga accommodatum.</p>
<p><strong>Annus et aera:</strong> Annus Hinduum vere incipit, ad lunam novam mensis <strong>Chaitra</strong>, prope aequinoctium vernale. Aera est <strong>Vikrama Samvat</strong>: anni ab anno LVII a. Chr. n. computantur, ita ut 2026 p. Chr. n. anno <strong>VS MMXXXIII</strong> respondeat (a Chaitra initio).</p>
<table class="help-table">
  <tr><th>#</th><th>Mensis</th><th>Sanskrit</th><th>Tempus</th><th>Notae</th></tr>
  <tr><td>1</td><td><strong>Chaitra</strong></td><td>चैत्र</td><td>Ver</td><td>Initium anni; cum Rama Navami coniunctum</td></tr>
  <tr><td>2</td><td><strong>Vaishakha</strong></td><td>वैशाख</td><td>Ver</td><td>Buddha Purnima</td></tr>
  <tr><td>3</td><td><strong>Jyeshtha</strong></td><td>ज्येष्ठ</td><td>Aestas</td><td>Nomen a stella Jyestha (Antares) ductum</td></tr>
  <tr><td>4</td><td><strong>Ashadha</strong></td><td>आषाढ</td><td>Aestas</td><td>Ratha Yatra; imber magnus incipit</td></tr>
  <tr><td>5</td><td><strong>Shravana</strong></td><td>श्रावण</td><td>Imber Magnus</td><td>Raksha Bandhan; Shivae sacer</td></tr>
  <tr><td>6</td><td><strong>Bhadrapada</strong></td><td>भाद्रपद</td><td>Imber Magnus</td><td>Ganesh Chaturthi</td></tr>
  <tr><td>7</td><td><strong>Ashvin</strong></td><td>आश्विन</td><td>Autumnus</td><td>Navaratri; Dussehra</td></tr>
  <tr><td>8</td><td><strong>Kartika</strong></td><td>कार्तिक</td><td>Autumnus</td><td>Diwali; Kartik Purnima</td></tr>
  <tr><td>9</td><td><strong>Margashirsha</strong></td><td>मार्गशीर्ष</td><td>Ante Hiemem</td><td>A Krishna in Bhagavadgita dilectus</td></tr>
  <tr><td>10</td><td><strong>Pausha</strong></td><td>पौष</td><td>Hiems</td><td>Makar Sankranti appropinquat</td></tr>
  <tr><td>11</td><td><strong>Magha</strong></td><td>माघ</td><td>Hiems</td><td>Magh Mela; Vasant Panchami</td></tr>
  <tr><td>12</td><td><strong>Phalguna</strong></td><td>फाल्गुन</td><td>Hiems Sera</td><td>Holi; Maha Shivaratri</td></tr>
</table>
<p><strong>Intercalatio — Adhika Māsa:</strong> Cum mensis solaris transit nullo lunae novae principio mensis lunaris intra eum cadente, mensis lunaris additus inseritur. Hic "mensis intercalaris" (<em>Adhika Māsa</em> vel <em>Purushottama Māsa</em>) nomen mensis regularis sequentis praefixo <em>Adhika</em> (superflui) gerit. Praecipue sanctus habetur — liber ab ordinariis calendarii officiis, contemplationi et devotioni sepositus. Hoc circiter omnes XXXII—XXXIII menses evenit.</p>
<p><strong>Nakshatrae:</strong> Calendarium Hinduum a XXVII <strong>nakshatris</strong> — lunae mansionibus viam Lunae per caelum signantibus — separari nequit. Quaeque nakshatra circiter XIII°XX′ eclipticae amplectitur; Luna per unam per diem transit. Tabula caeli in <strong>modo Jyotisae</strong> constellationes nominibus nakshatrarum, numinibus praesidibus, et lore ex Rigveda et Brihat Samhita hausto insignit.</p>
<p><em>Jyotisha</em> (ज्योतिष) — scientia Vedica lucis et temporis — ea traditio est quae haec omnia unit: astronomiam, mythologiam, et sacrarum intervallarum mensuram.</p>
<hr>
<h3>Calendarium Cherocense</h3>
<p>Gens Cherokea (ᏣᎳᎩ, <em>Tsalagi</em>) calendarium lunisolarium rhythmis ecologicis Montium Appalacianorum meridionalium vinctum servavit. Annus a prima luna nova post solstitium hiemale incipit — eadem ancora ac hoc calendarium.</p>
<table class="help-table">
  <tr><th>#</th><th>Cherokee</th><th>Romanice</th><th>Anglice</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Cold Moon / Cold Month</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Bony Moon (hungry month)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Windy Moon</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Flower Moon</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Planting Moon</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Green Corn Moon</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Ripe Corn Moon</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>End of Fruit Moon</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Nut Moon</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Harvest Moon</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Trading Moon</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Snow Moon</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Intercalary Moon (as needed)</td></tr>
</table>
<p>Syllabarium Cherocense ineunte saeculo XIX a <strong>Sequoyah</strong> (ᏎᏉᏯ) creatum est, fabro argentario qui legere scribereque numquam doctus erat. Per circiter duodecim annos scripturam ex propria observatione elaboravit. Anno MDCCCXXV, maior pars Cherocensium iam in propria lingua litter<br>ata erat — res sine exemplo in historia litteris mandata.</p>
<hr>
<h3>Calendarium Haudenosaunense (Iroquoiense)</h3>
<p>Confoederatio Haudenosaunensis — Mohawk, Oneida, Onondaga, Cayuga, Seneca, et (post annum ~MDCCXXII) Tuscarora — tempus per XIII lunas caerimoniosas ordinat. Annus in media hieme incipit, circa <strong>Caerimoniam Mediae Hiemis</strong>, omnium Haudenosaunensium observationum sacratissimam.</p>
<table class="help-table">
  <tr><th>#</th><th>Luna</th><th>Caerimonía / Indolés</th></tr>
  <tr><td>1</td><td><strong>Luna Mediae Hiemis</strong></td><td>Caerimonía Mediae Hiemis — renovatio, gratiarum actio, somniorum communicatio, et ignis sacri recreatio</td></tr>
  <tr><td>2</td><td><strong>Luna Tarditatis</strong></td><td>Tempus frigoris et inopiae; communicatio communitatis et praeparatio</td></tr>
  <tr><td>3</td><td><strong>Luna Aceris Saccharini</strong></td><td>Succus aceris manat; Caerimonía Sugar Bush — prima anni messis</td></tr>
  <tr><td>4</td><td><strong>Luna Ranarum</strong></td><td>Ranae redeunt; satio verna incipit</td></tr>
  <tr><td>5</td><td><strong>Luna Sationis</strong></td><td>Caerimonía Sationis Seminum — Tres Sorores honorans (frumentum, phaseolus, cucurbita)</td></tr>
  <tr><td>6</td><td><strong>Luna Fragariarum</strong></td><td>Caerimonía Fragariarum — primus fructus aestatis; gratiarum actio et choreae sociales</td></tr>
  <tr><td>7</td><td><strong>Luna Phaseoли Viridis</strong></td><td>Caerimonía Phaseoлorum — messem phaseoлorum honorans</td></tr>
  <tr><td>8</td><td><strong>Luna Frumenti Viridis</strong></td><td>Caerimonía Frumenti Viridis — caerimonía centralis aestatis; gratiarum actio pro novo frumento</td></tr>
  <tr><td>9</td><td><strong>Luna Messis</strong></td><td>Festum Messis — collectio et conservatio; convivium communitatis</td></tr>
  <tr><td>10</td><td><strong>Luna Pruinae</strong></td><td>Praeparatio hiemis; tempus venationis ingravescit</td></tr>
  <tr><td>11</td><td><strong>Luna Frigoris</strong></td><td>Tempus narrationum incipit — fabulae narrari possunt solum cum nix in terra iacet</td></tr>
  <tr><td>12</td><td><strong>Luna Summi Frigoris</strong></td><td>Ima hiems; noctium longitudo; renovationis exspectatio</td></tr>
  <tr><td>13</td><td><strong>Luna Intercalaris</strong></td><td>Inserta quotiens opus est ne caerimonía in alienum tempus anni incidat</td></tr>
</table>
<hr>
<h3>De Intercalatione Apud Gentes Americanas</h3>
<p>Calendaría Cherocense et Haudenosaunense — ut pleraque calendaría lunaria gentium Americanarum — menses intercalares non arithmetica certa inserunt. Iudicium de luna addenda tradito modo a <strong>ducibus caerimoniosis senibusque</strong> ferebatur, cum observata discrepantia inter lunam et tempus annum caerimoniam sacram in alienum anni tempus transferre minitabatur.</p>
<p>Hoc vivam inter caerimonian et tempus anni necessitudinem supra calendarii constantiam ponit. Calendarium instrumentum est in servitium populi et terrae; cum instrumentum aberravit, instrumentum corrigitur.</p>
<p><strong>Exempla quibus luna insereretur:</strong></p>
<ul>
  <li><strong>Caerimonía Frumenti Viridis</strong> momento sacra est quo nova seges primum apta edi fit. Si lunae cursu accelerato Luna Frumenti Viridis advenisset dum culmi adhuc crescerent, senes lunam addere et tempus anni assequi potuissent.</li>
  <li><strong>Caerimonía Mediae Hiemis</strong> verum anni transitum in ima hieme significat. Si lunae defluxu Media Hiems advenisset antequam terra congelata erat, luna intercalaris inseri potuit ut sensus caerimoniае servaretur.</li>
  <li><strong>Caerimonía Fragariarum</strong> primas fragarias silvestres celebrat. Si Luna Fragariarum advenisset dum colles adhuc nudi essent, calendarium — non fragariae — mutandum erat.</li>
</ul>
<p><em>De fontibus et fide historica:</em> Calendariaе traditiones gentium Americanarum viva sunt, quae per nationes, communitates, et generationes variantur. Quae hic proponuntur approximationes reverentes sunt ex fontibus editis et materialibus educativis nationum ipsarum haustae. Si tu Haudenosaunensis, Cherocensis, aut alterius gentis affinis es, traditiones seniorum tuorum et custodium scientiae omnibus quae hic scripta sunt praecedunt.</p>
<hr>
<h3>Culturae Caelestes in Tabula Caeli Nocturni</h3>
<p>Prospectus caeli duas lentes culturales in eodem caelo physico imponere potest. Eas ex instrumento ferculario in modo caeli commuta.</p>
<p><strong>Skidi Pawnee:</strong> Skidi Pawnee confoederatio vicorum in Campis Magnis (Nebraska et Kansas hodiernis) erant, quorum cosmologia astronomice elaboratior erat quam fere ullius alterius culturae campestris. Vici eorum ut certas stellarum formas imitarentur dispositi erant; calendarium eorum caerimоніale non mensibus sed apparitione stellarum certarum vespere et mane regulabatur. <strong>Stella Vespertina</strong> (Venus ad occidentem) mater omnium vitarum erat; <strong>Stella Matutina</strong> (Mars) maritus eius et vis creationis. Scientia stellarum eorum in tabulis in coriis cervi et bubalorum attritis depictis inclusa erat — inter antiquissima documenta astronomica Americae Septentrionalis quae supersunt. Pittacium <strong>Pawnee</strong> caelum nominibus stellarum Skidi et lore insignit.</p>
<p><strong>Jyotisha (Hinduum):</strong> <em>Jyotisha</em> (ज्योतिष, <em>scientia lucis</em>) traditio Vedica astronomiae et temporis mensurationis est. Centrale ei est systema <strong>XXVII nakshatrarum</strong> — mansionum lunarium quae eclipticam in arcus aequales XIII°XX′ dividunt. Luna per unam nakshtram per diem transit. Quaeque nakshatra numen praesidem habet, lore sacrum ex Rigveda et Brihat Samhita, et connotationibus faustis vel infaustis. Pittacium <strong>Jyotisha</strong> caelum nominibus nakshatrarum, finibus, et numinibus praesidibus insignit — ita Scorpius fit <em>Jyestha</em> (natu maximus, Indrae praeses) et Sagittarius <em>Purvashadha</em> (invictus, Aquarum praeses) revelat.</p>
`,

// ─── Sanskrit (help in Hindi) ────────────────────────────────────────────────
sa: `
<h3>वर्ष की संख्या</h3>
<p>यह पंचांग <strong>मानव युग</strong> (होलोसीन युग) का उपयोग करता है। ईसा पूर्व / ईसवी की सामान्य गणना 1 ईसवी से आरंभ होती है — जो 6वीं शताब्दी में जीवनकाल के अनुमानों से निर्धारित एक संदर्भ बिंदु है। मानव युग इस उद्गम को और पुराना तथा सार्वभौमिक बनाता है: यह 10,000 वर्ष जोड़ता है ताकि मानव सभ्यता का उषाकाल — कृषि क्रांति — वर्ष 1 पर आ सके। परिणाम: 2026 ईसवी = <strong>वर्ष 12026</strong>।</p>
<p>यह गणना इस पंचांग के लिए स्वतंत्र रूप से सोची गई थी — बाद में पता चला कि वैज्ञानिक Cesare Emiliani ने दशकों पहले यही विचार प्रस्तावित किया था।</p>
<hr>
<h3>चंद्रमास</h3>
<p>इस पंचांग में प्रति वर्ष 12 चंद्रमास होते हैं, प्रत्येक अमावस्या से आरंभ होता है:</p>
<p>हिमचन्द्र · जागरचन्द्र · बीजचन्द्र · विकासचन्द्र · पुष्पचन्द्र · फलचन्द्र · ग्रीष्मचन्द्र · शस्यचन्द्र · संग्रहचन्द्र · पर्णचन्द्र · तुषारचन्द्र · <strong>तमश्चन्द्र</strong></p>
<p><strong>तमश्चन्द्र</strong> सदैव वर्ष का अंतिम मास होता है — वही मास जिसमें शीतकालीन अयनांत (शीतायन) पड़ता है।</p>
<p><strong>नीलचन्द्र:</strong> जब अयनांत तमश्चन्द्र के 19वें दिन या उससे बाद (ऋक्ष या लोमश में) पड़ता है, तो तमश्चन्द्र के बाद एक 13वाँ मास — नीलचन्द्र — जोड़ा जाता है, जिससे वह 13 चंद्रमासों का वर्ष बन जाता है।</p>
<p>यह सीमा मनमानी नहीं है। एक सौर वर्ष (~365.24 दिन) 12 चंद्रमासों (~354.36 दिन) से लगभग 10.88 दिन अधिक होता है। यदि अयनांत तमश्चन्द्र के 19वें दिन पड़े, तो बिना सुधार के अगले वर्ष वह लगभग 30वें दिन पड़ेगा — मास की सीमा पर या उससे परे। 20वाँ दिन या उससे आगे का अर्थ है कि अयनांत <em>अगले</em> मास में खिसक जाएगा, और तमश्चन्द्र में अयनांत नहीं रहेगा। ऋक्ष/लोमश नियम ठीक वही खगोलीय सीमा है जब पंचांग को स्वयं को ठीक करना होता है। नीलचन्द्र जोड़ने से अगले वर्ष अयनांत पुनः रक्तकण्ठ या शश के क्षेत्र (~दिन 6) में आ जाता है, और चक्र फिर से आरंभ होता है।</p>
<hr>
<h3>वर्ष का प्राणी</h3>
<p>तमश्चन्द्र पाँच नामित खंडों में विभाजित है। शीतकालीन अयनांत जिस खंड में पड़ता है, वही वर्ष का नाम देता है:</p>
<table class="help-table">
  <tr><th>खंड</th><th>दिन</th><th>स्वभाव</th></tr>
  <tr><td><strong>रक्तकण्ठ</strong></td><td>1–6</td><td>प्रारंभिक और उज्ज्वल — वर्ष आरंभ होता है इससे पहले कि अंधकार पूरी तरह बस गया हो</td></tr>
  <tr><td><strong>शश</strong></td><td>7–12</td><td>सतर्क और चौकस, दहलीज पर बैठा हुआ</td></tr>
  <tr><td><strong>शकुन</strong></td><td>13–18</td><td>गहरे अंधकार के मध्य में, संचय करता और सावधान</td></tr>
  <tr><td><strong>ऋक्ष</strong></td><td>19–24</td><td>अंधकार की गहराई में — इस वर्ष थोड़ी अधिक नींद चाहिए</td></tr>
  <tr><td><strong>लोमश</strong></td><td>25–अंत</td><td>सर्वाधिक विचलन — लंबी रात में शिकार पर निकल चुका</td></tr>
</table>
<p>वर्ष का प्राणी सौर और चंद्र पंचांग के बीच के अंतर का संक्षिप्त परिचय है। रक्तकण्ठ वर्ष का अर्थ है कि अयनांत तमश्चन्द्र में जल्दी आया; लोमश वर्ष का अर्थ है कि पंचांग काफी खिसक चुका है और नीलचन्द्र आने वाला है।</p>
<hr>
<h3>सप्ताह के दिनों के नाम</h3>
<p><strong>मिथक</strong> मोड में दिनों के नाम नॉर्स देवताओं और खगोलीय पिंडों पर आधारित हैं। अंग्रेज़ी के सामान्य दिनों के नामों में ये आकृतियाँ पहले से छिपी हैं — यह पंचांग उन्हें सामने लाता है।</p>
<table class="help-table">
  <tr><th>पंचांग नाम</th><th>सामान्य नाम</th><th>किसके नाम पर</th></tr>
  <tr><td><strong>विश्वदिन</strong></td><td>Monday</td><td><strong>Heimdall</strong> — असगार्ड के प्रहरी, बिफ्रोस्ट इंद्रधनुष सेतु के रक्षक। वह दहलीज पर सदा जागते हुए खड़े हैं — सप्ताह की शुरुआत के लिए सर्वथा उचित।</td></tr>
  <tr><td><strong>कुजदिन</strong></td><td>Tuesday</td><td><strong>Tyr</strong> — न्याय और सम्माननीय युद्ध के देवता। उन्होंने भेड़िए Fenrir को बाँधने के लिए अपना हाथ बलिदान किया।</td></tr>
  <tr><td><strong>बुधदिन</strong></td><td>Wednesday</td><td><strong>Woden (Odin)</strong> — सर्वपिता, ज्ञान, काव्य और मृतकों के देवता। रूनों का ज्ञान पाने के लिए वे नौ दिन Yggdrasil पर लटके रहे।</td></tr>
  <tr><td><strong>गुरुदिन</strong></td><td>Thursday</td><td><strong>Thor</strong> — वज्र और विद्युत के देवता, देवताओं और मनुष्यों दोनों के रक्षक।</td></tr>
  <tr><td><strong>शुक्रदिन</strong></td><td>Friday</td><td><strong>Freya</strong> — प्रेम, सौंदर्य, स्वर्ण और जादू की देवी। वे वल्कीरियों का नेतृत्व करती हैं और लाल सोने के आँसू बहाती हैं।</td></tr>
  <tr><td><strong>सोमदिन</strong></td><td>Saturday</td><td><strong>चंद्रमा।</strong> Saturday का नाम Saturn — एक रोमन देवता — पर है, जिनका इन नॉर्स देवताओं में कोई स्थान नहीं। Monday पहले से ही चंद्रमा का दिन है — लेकिन इसका अर्थ है कि अरबों लोग सप्ताह की शुरुआत चंद्रमा को कोसते हुए करते हैं। इसे सप्ताहांत में ले जाने से यह बोझ से वरदान बन जाता है, और उसे वह रात का आकाश मिलता है जिसका वह हकदार है।</td></tr>
  <tr><td><strong>रविदिन</strong></td><td>Sunday</td><td><strong>सूर्य</strong> — अपरिवर्तित।</td></tr>
</table>
<hr>
<h3>पंचांग के दिनों पर चिह्न</h3>
<table class="help-table">
  <tr><th>चिह्न</th><th>अर्थ</th></tr>
  <tr><td>🌑 🌓 🌕 🌗</td><td>अमावस्या, प्रथम चतुर्थांश, पूर्णिमा, अंतिम चतुर्थांश</td></tr>
  <tr><td>☀</td><td>अयनांत या विषुव</td></tr>
  <tr><td>Ⓟ + %</td><td>चंद्र उपभू (चंद्रमा पृथ्वी के सबसे निकट); प्रकाश प्रतिशत</td></tr>
  <tr><td>@</td><td>चंद्र अपभू (चंद्रमा पृथ्वी से सबसे दूर)</td></tr>
  <tr><td>🌠</td><td>उल्का वर्षा चरम के निकट</td></tr>
  <tr><td>☄</td><td>धूमकेतु दृश्यता अवधि में</td></tr>
  <tr><td>🎂</td><td>जन्मदिन</td></tr>
  <tr><td>रंगीन सीमा</td><td>अमेरिकी संघीय अवकाश</td></tr>
</table>
<hr>
<h3>रात्रि आकाश पैनल</h3>
<p>घटनाओं का पैनल खोलने के लिए किसी भी <strong>ⓘ</strong> बटन पर क्लिक करें। आज का दिन देखते समय <strong>आज रात</strong> अनुभाग में सूर्यास्त का समय, खगोलीय गोधूलि (जब आकाश वास्तव में अंधकारमय हो जाता है — सूर्य क्षितिज से 18° नीचे, सूर्यास्त के लगभग 1.5–2 घंटे बाद), दृश्यमान ग्रह, सक्रिय उल्का वर्षाएँ और आपके स्थान से दिखने वाले संध्याकालीन नक्षत्रमंडल दिखाई देते हैं।</p>
<hr>
<h3>अन्य चंद्र पंचांग</h3>
<p>अनेक सभ्यताओं ने चंद्रमा के अनुसार समय की गणना की है। आज सर्वाधिक प्रचलित <strong>हिब्रू पंचांग</strong> है, जो इससे कुछ विशेषताएँ साझा करता है — और कुछ महत्वपूर्ण अंतर भी रखता है।</p>
<p><strong>समानताएँ:</strong> दोनों <em>चंद्र-सौर</em> हैं — महीनों के लिए चंद्रमा का अनुसरण करते हैं किंतु सौर वर्ष के साथ संरेखित रहने के लिए एक अधिमास जोड़ते हैं। दोनों प्रत्येक माह अमावस्या से आरंभ करते हैं।</p>
<p><strong>हिब्रू पंचांग कैसे काम करता है:</strong> इसमें 29–30 दिनों के 12 महीने होते हैं (अधिकवर्ष में 13)। प्रत्येक 19 वर्षीय चक्र (मेटोनिक चक्र) में सात बार एक 13वाँ मास जोड़ा जाता है। वर्ष शरद ऋतु में शरद विषुव के आसपास (रोश हशाना से) आरंभ होता है। वर्ष गणना (Anno Mundi) 2026 ईसवी को लगभग वर्ष <strong>5786</strong> पर रखती है।</p>
<p><strong>इस पंचांग से अंतर:</strong></p>
<table class="help-table">
  <tr><td><strong>वर्ष का आधार</strong></td><td>हिब्रू वर्ष <em>शरद</em> में आरंभ होता है। यह पंचांग <em>शीत</em> ऋतु में — हिमचन्द्र सबसे अंधेरी रात के ठीक बाद शुरू होता है। वर्ष अंधकार से प्रकाश की ओर उठता है।</td></tr>
  <tr><td><strong>अधिमास नियम</strong></td><td>हिब्रू अधिमास एक निश्चित 19 वर्षीय अनुसूची का पालन करता है। यह पंचांग एक शुद्ध खगोलीय संकेत का उपयोग करता है: नीलचन्द्र तभी जोड़ा जाता है जब शीतायन तमश्चन्द्र में इतना देर से पड़े कि अगले वर्ष वह तमश्चन्द्र से बाहर चला जाए।</td></tr>
  <tr><td><strong>सटीकता</strong></td><td>आधुनिक हिब्रू पंचांग 4थी शताब्दी ईसवी से निर्धारित एक मानकीकृत चंद्रमास लंबाई का उपयोग करता है। यह पंचांग Meeus खगोलीय एल्गोरिदम से वास्तविक अमावस्याएँ परिकलित करता है — यह वास्तविक आकाश को प्रतिबिंबित करता है।</td></tr>
  <tr><td><strong>मास नाम</strong></td><td>हिब्रू महीनों के नाम प्राचीन बेबीलोनी हैं। इस पंचांग के महीने प्रकृति की गतिविधियों पर आधारित हैं।</td></tr>
  <tr><td><strong>सप्ताह</strong></td><td>हिब्रू सप्ताह में क्रमांकित दिन होते हैं जो सब्बाथ पर समाप्त होते हैं। यह पंचांग दिनों का नामकरण उन नॉर्स देवताओं के नाम पर करता है जो पहले से ही अंग्रेज़ी के सप्ताह के नामों में गुप्त रूप से बसे हैं।</td></tr>
</table>
<p><strong>इस्लामी पंचांग</strong> पूर्णतः चंद्र-आधारित है जिसमें कोई अधिमास नहीं होता, और यह ~33 वर्षों में सभी ऋतुओं से होकर गुज़रता है। <strong>चीनी पंचांग</strong> चंद्र-सौर है और हिब्रू के समान अधिमास जोड़ता है। दोनों प्राचीन और समृद्ध हैं — यह पंचांग केवल एक नया पंचांग है, एक विशेष परिवार के लिए, एक विशेष स्थान पर, एक विशेष आकाश को निहारते हुए बनाया गया।</p>
<hr>
<h3>हिंदू पंचांग (पञ्चाङ्ग)</h3>
<p>हिंदू पंचांग विश्व के सबसे पुराने और निरंतर चंद्र-सौर पंचांगों में से एक है, जिसकी जड़ें हज़ारों वर्ष पुराने वैदिक खगोलीय ग्रंथों में हैं। यह ऐप <strong>अमांत</strong> प्रणाली का पालन करता है — महीने अमावस्या से अमावस्या तक चलते हैं — और Drik Panchanga खगोलीय पंचांग के अनुरूप है।</p>
<p><strong>वर्ष और युग:</strong> हिंदू वर्ष वसंत ऋतु में, वसंत विषुव के निकट, <strong>Chaitra</strong> की अमावस्या से आरंभ होता है। युग है <strong>Vikrama Samvat</strong>: वर्षों की गणना 57 ईसा पूर्व से होती है, इसलिए 2026 ईसवी <strong>VS 2083</strong> के अनुरूप है (Chaitra से आगे)।</p>
<table class="help-table">
  <tr><th>#</th><th>मास</th><th>संस्कृत</th><th>ऋतु</th><th>विशेष</th></tr>
  <tr><td>1</td><td><strong>Chaitra</strong></td><td>चैत्र</td><td>वसंत</td><td>नव वर्ष; राम नवमी से संबद्ध</td></tr>
  <tr><td>2</td><td><strong>Vaishakha</strong></td><td>वैशाख</td><td>वसंत</td><td>बुद्ध पूर्णिमा</td></tr>
  <tr><td>3</td><td><strong>Jyeshtha</strong></td><td>ज्येष्ठ</td><td>ग्रीष्म</td><td>ज्येष्ठा नक्षत्र (Antares) के नाम पर</td></tr>
  <tr><td>4</td><td><strong>Ashadha</strong></td><td>आषाढ</td><td>ग्रीष्म</td><td>रथ यात्रा; मानसून आरंभ</td></tr>
  <tr><td>5</td><td><strong>Shravana</strong></td><td>श्रावण</td><td>वर्षा</td><td>रक्षाबंधन; शिव को समर्पित</td></tr>
  <tr><td>6</td><td><strong>Bhadrapada</strong></td><td>भाद्रपद</td><td>वर्षा</td><td>गणेश चतुर्थी</td></tr>
  <tr><td>7</td><td><strong>Ashvin</strong></td><td>आश्विन</td><td>शरद</td><td>नवरात्रि; दशहरा</td></tr>
  <tr><td>8</td><td><strong>Kartika</strong></td><td>कार्तिक</td><td>शरद</td><td>दीवाली; कार्तिक पूर्णिमा</td></tr>
  <tr><td>9</td><td><strong>Margashirsha</strong></td><td>मार्गशीर्ष</td><td>पूर्व-शीत</td><td>गीता में कृष्ण का प्रिय मास</td></tr>
  <tr><td>10</td><td><strong>Pausha</strong></td><td>पौष</td><td>शीत</td><td>मकर संक्रांति निकट</td></tr>
  <tr><td>11</td><td><strong>Magha</strong></td><td>माघ</td><td>शीत</td><td>माघ मेला; वसंत पंचमी</td></tr>
  <tr><td>12</td><td><strong>Phalguna</strong></td><td>फाल्गुन</td><td>शिशिर</td><td>होली; महाशिवरात्रि</td></tr>
</table>
<p><strong>अधिमास — Adhika Māsa:</strong> जब कोई सौर मास ऐसे गुज़र जाए कि उसमें कोई अमावस्या किसी चंद्रमास का आरंभ न करे, तो एक अतिरिक्त चंद्रमास जोड़ा जाता है। यह अधिमास अगले नियमित मास के नाम के साथ <em>Adhika</em> (अतिरिक्त) उपसर्ग लगाकर जाना जाता है। इसे विशेष रूप से पवित्र माना जाता है — ध्यान और भक्ति के लिए समर्पित। यह लगभग हर 32–33 महीनों में होता है। इसे <em>Purushottama Māsa</em> भी कहते हैं।</p>
<p><strong>नक्षत्र:</strong> हिंदू पंचांग 27 <strong>नक्षत्रों</strong> से अभिन्न रूप से जुड़ा है — ये चंद्र भवन हैं जो आकाश में चंद्रमा के पथ को चिह्नित करते हैं। प्रत्येक नक्षत्र क्रांतिवृत्त के लगभग 13°20′ में फैला है; चंद्रमा प्रतिदिन एक नक्षत्र से गुज़रता है। <strong>ज्योतिष मोड</strong> में आकाश पैनल नक्षत्र नाम, उनके अधिष्ठातृ देवता और ऋग्वेद तथा बृहत्संहिता से लिए गए विवरण प्रदर्शित करता है।</p>
<p><em>ज्योतिष</em> — प्रकाश और काल का वैदिक विज्ञान — वह परंपरा है जो इन सबको एक सूत्र में पिरोती है: खगोल विज्ञान, पौराणिक कथाएँ और पवित्र कालखंडों की माप।</p>
<hr>
<h3>चेरोकी पंचांग</h3>
<p>चेरोकी लोग (ᏣᎳᎩ, <em>Tsalagi</em>) दक्षिणी अपेलेशियन पहाड़ों की पारिस्थितिक लय से जुड़े एक चंद्र-सौर पंचांग का पालन करते आए हैं। वर्ष का आरंभ शीतकालीन अयनांत के बाद की पहली अमावस्या से होता है — ठीक इस पंचांग के समान।</p>
<table class="help-table">
  <tr><th>#</th><th>चेरोकी</th><th>रोमनीकृत</th><th>अर्थ</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>शीत चंद्र / शीत मास</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>अस्थि चंद्र (भूख का महीना)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>वायु चंद्र</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>पुष्प चंद्र</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>रोपण चंद्र</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>हरे मक्के का चंद्र</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>पके मक्के का चंद्र</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>फल समाप्ति चंद्र</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>अखरोट चंद्र</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>फसल चंद्र</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>व्यापार चंद्र</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>हिम चंद्र</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>अधिमास (आवश्यकतानुसार)</td></tr>
</table>
<p>चेरोकी लिपि 19वीं शताब्दी के आरंभ में <strong>Sequoyah</strong> (ᏎᏉᏯ) ने बनाई — एक चाँदी के कारीगर जिन्हें कभी पढ़ना-लिखना नहीं सिखाया गया था। उन्होंने लगभग बारह वर्ष केवल अपने अवलोकन से यह लिपि विकसित की। 1825 तक अधिकांश चेरोकी लोग अपनी भाषा में साक्षर हो गए — इतिहास में इसके समकक्ष कोई घटना नहीं है।</p>
<hr>
<h3>हौडेनोशोनी (इरोक्वाइस) पंचांग</h3>
<p>हौडेनोशोनी परिसंघ — मोहॉक, ओनेइडा, ओनोंडागा, कायुगा, सेनेका, और (~1722 के बाद) टस्कारोरा — 13 औपचारिक चंद्रमासों के इर्द-गिर्द समय को व्यवस्थित करता है। वर्ष का आरंभ मध्यशीत में होता है, जो <strong>मध्यशीत समारोह</strong> — सभी हौडेनोशोनी अनुष्ठानों में सर्वाधिक पवित्र — पर केंद्रित है।</p>
<table class="help-table">
  <tr><th>#</th><th>चंद्रमास</th><th>समारोह / स्वभाव</th></tr>
  <tr><td>1</td><td><strong>शीतमध्य चंद्र</strong></td><td>मध्यशीत समारोह — नवीकरण, कृतज्ञता, स्वप्न साझाकरण और पवित्र अग्नि का पुनः प्रज्वलन</td></tr>
  <tr><td>2</td><td><strong>विलंब चंद्र</strong></td><td>शीत और अभाव का काल; सामुदायिक साझाकरण और तैयारी</td></tr>
  <tr><td>3</td><td><strong>शर्करा मेपल चंद्र</strong></td><td>मेपल का रस बहता है; शर्करा वन समारोह — वर्ष की पहली फसल</td></tr>
  <tr><td>4</td><td><strong>मेंढक चंद्र</strong></td><td>मेंढक लौटते हैं; वसंत रोपण आरंभ</td></tr>
  <tr><td>5</td><td><strong>रोपण चंद्र</strong></td><td>बीज रोपण समारोह — तीन बहनों (मक्का, सेम, लौकी) को सम्मान</td></tr>
  <tr><td>6</td><td><strong>स्ट्रॉबेरी चंद्र</strong></td><td>स्ट्रॉबेरी समारोह — ग्रीष्म का प्रथम फल; कृतज्ञता और सामाजिक नृत्य</td></tr>
  <tr><td>7</td><td><strong>हरी फली चंद्र</strong></td><td>फली समारोह — सेम की फसल को सम्मान</td></tr>
  <tr><td>8</td><td><strong>हरे मक्के का चंद्र</strong></td><td>हरे मक्के का समारोह — ग्रीष्म का केंद्रीय समारोह; नई फसल के लिए कृतज्ञता</td></tr>
  <tr><td>9</td><td><strong>फसल चंद्र</strong></td><td>फसल उत्सव — संग्रह और परिरक्षण; सामुदायिक भोज</td></tr>
  <tr><td>10</td><td><strong>पाला चंद्र</strong></td><td>शीत की तैयारी; शिकार का मौसम गहराता है</td></tr>
  <tr><td>11</td><td><strong>शीत चंद्र</strong></td><td>कथा-वाचन का मौसम आरंभ — कहानियाँ केवल तभी सुनाई जा सकती हैं जब ज़मीन पर बर्फ हो</td></tr>
  <tr><td>12</td><td><strong>अति शीत चंद्र</strong></td><td>गहरी सर्दी; लंबी रातें; नवीकरण की प्रतीक्षा</td></tr>
  <tr><td>13</td><td><strong>अधिक चंद्र</strong></td><td>आवश्यकतानुसार जोड़ा जाता है जब कोई समारोह अन्यथा गलत ऋतु में पड़ जाए</td></tr>
</table>
<hr>
<h3>मूल अमेरिकी अधिमास पर एक टिप्पणी</h3>
<p>चेरोकी और हौडेनोशोनी पंचांग — अधिकांश मूल अमेरिकी चंद्र पंचांगों की तरह — निश्चित गणित से अधिमास नहीं जोड़ते। अतिरिक्त चंद्रमास जोड़ने का निर्णय परंपरागत रूप से <strong>समारोह के नेताओं और बुज़ुर्गों</strong> द्वारा लिया जाता था, जब चंद्रमा और ऋतु के बीच के विचलन से किसी पवित्र समारोह के गलत समय में पड़ने का खतरा होता था।</p>
<p>यह दृष्टिकोण समारोह और ऋतु के जीवंत संबंध को पंचांग की एकरूपता से ऊपर रखता है। पंचांग लोगों और धरती की सेवा में एक उपकरण है; जब उपकरण भटक जाए, उपकरण को सुधारा जाता है।</p>
<p><strong>अधिमास कब जोड़ा जाता — उदाहरण:</strong></p>
<ul>
  <li><strong>हरे मक्के का समारोह</strong> उस क्षण के लिए पवित्र है जब नई फसल पहली बार खाने योग्य हो जाती है। यदि चंद्रमास तेज़ी से चले और हरे मक्के का चंद्रमास तब आए जब फसल अभी भी बन रही हो, तो बुज़ुर्ग एक अतिरिक्त चंद्रमास जोड़ सकते थे और ऋतु को पकड़ने दे सकते थे।</li>
  <li><strong>मध्यशीत समारोह</strong> वर्ष के सच्चे मोड़ को गहरी सर्दी में चिह्नित करता है। यदि चंद्रमास इतने खिसक जाते कि मध्यशीत धरती के जमने से पहले आ जाए, तो समारोह का अर्थ बनाए रखने के लिए एक अतिरिक्त चंद्रमास जोड़ा जा सकता था।</li>
  <li><strong>स्ट्रॉबेरी समारोह</strong> पहली जंगली स्ट्रॉबेरी का उत्सव है। यदि स्ट्रॉबेरी का चंद्रमास तब आए जब पहाड़ियाँ अभी भी सूनी हों, तो पंचांग को — स्ट्रॉबेरी को नहीं — बदलना था।</li>
</ul>
<p><em>स्रोतों और सटीकता पर एक टिप्पणी:</em> मूल अमेरिकी पंचांग परंपराएँ जीवंत प्रथाएँ हैं जो राष्ट्र, समुदाय और पीढ़ी के अनुसार भिन्न होती हैं। यहाँ दिया गया विवरण प्रकाशित स्रोतों और राष्ट्रों की अपनी शैक्षिक सामग्रियों से लिए गए सम्मानपूर्ण अनुमान हैं।</p>
<hr>
<h3>रात्रि आकाश पैनल में आकाश संस्कृतियाँ</h3>
<p>आकाश दृश्य एक ही भौतिक आकाश पर दो सांस्कृतिक दृष्टिकोण आरोपित कर सकता है। आकाश मोड में टूलबार से इन्हें टॉगल करें।</p>
<p><strong>स्किडी पॉनी:</strong> स्किडी पॉनी महान मैदानों (वर्तमान नेब्रास्का और कैनसस) पर गाँवों का एक परिसंघ था, जिनकी ब्रह्मांड-दृष्टि लगभग किसी भी अन्य मैदानी संस्कृति से अधिक खगोलीय रूप से विस्तृत थी। उनके गाँव विशिष्ट तारा-प्रारूपों की तरह बसे थे; उनका औपचारिक पंचांग महीनों से नहीं बल्कि भोर और संध्या में विशिष्ट तारों के उदय से नियमित होता था। <strong>संध्या तारा</strong> (पश्चिम में शुक्र) समस्त जीवन की माता था; <strong>प्रातः तारा</strong> (मंगल) उनका पति और सृजन की शक्ति था। <strong>पावनी</strong> टॉगल आकाश को स्किडी तारा-नामों और उनकी कथाओं से अंकित करता है।</p>
<p><strong>ज्योतिष (हिंदू):</strong> <em>ज्योतिष</em> (<em>प्रकाश का विज्ञान</em>) खगोल विज्ञान और कालगणना की वैदिक परंपरा है। इसका केंद्र <strong>27 नक्षत्रों</strong> की प्रणाली है — चंद्र भवन जो क्रांतिवृत्त को समान 13°20′ चापों में विभाजित करते हैं। चंद्रमा प्रतिदिन लगभग एक नक्षत्र से होकर गुज़रता है। प्रत्येक नक्षत्र का एक अधिष्ठातृ देवता है, ऋग्वेद और बृहत्संहिता से पवित्र कथाएँ हैं, और शुभ या अशुभ संबंध हैं। <strong>ज्योतिष</strong> टॉगल आकाश को नक्षत्र नाम, सीमाओं और उनके अधिष्ठातृ देवताओं से अंकित करता है — इस प्रकार वृश्चिक तारामंडल <em>ज्येष्ठा</em> (ज्येष्ठ, इंद्र का प्रतीक) बन जाता है और धनु तारामंडल <em>पूर्वाषाढा</em> (अपराजित, जल का प्रतीक) को प्रकट करता है।</p>
`,

}; // end HELP_I18N

/** Return the help HTML for the current language, falling back to English. */
function getHelpHtml() {
  const lang = (typeof state !== 'undefined' && state && state.language) || 'en';
  return HELP_I18N[lang] || HELP_I18N.en;
}
