// ═══ Fairy Calendar — help.js ═══
// Translated help modal content. Each key is an HTML string for that language.
// Falls back to 'en' if a language is not present.

const HELP_I18N = {

// ─── English ────────────────────────────────────────────────────────────────
en: `
<h3>The Year Number</h3>
<p>This calendar uses the <strong>Human Era</strong> (Holocene Era). The standard BC/CE year count is anchored to 1 CE — the date of Jesus' birth, estimated by Dionysius Exiguus in the 6th century. The Human Era shifts the origin to something older and more universal: it adds 10,000 years to place the dawn of human civilization — the agricultural revolution — at Year 1. The <a href="https://en.wikipedia.org/wiki/Holocene" target="_blank">Holocene epoch</a> — often called the Age of Humans — began approximately 11,700 years ago when the last Ice Age ended; it encompasses all of written history, every technological revolution, and every civilization our species has produced. It is when people first cultivated crops, kept animals, and built permanent homes: the point at which tracking the moon and seasons stopped being optional. Unlike 1 CE, this origin belongs to no single religion or tradition — it is the shared starting point of the human story. Accepting the ~300-year gap keeps the year simple to use — Year 1 is an arbitrary point not far inside the age we're choosing to mark, and still places us in the right relationship to it. The result: 2026 CE = <strong>12026 HE</strong>.</p>
<p>The 10,000-year offset is a deliberate round number — a rough approximation chosen to fall near the actual Holocene start (around 9,700 BCE). The idea has been proposed independently several times: by Gabriel Deville in 1924, the Latvian <em>Dievturība</em> tradition in 1929, E.R. Hope in 1963, and Cesare Emiliani in a 1993 letter to <em>Nature</em>. The numbering here was conceived without knowledge of that history. For more, see the <a href="https://en.wikipedia.org/wiki/Holocene_calendar" target="_blank">Holocene calendar</a> article.</p>
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
  <tr><td>🗓</td><td>Holiday (from the active holiday pack — see Holiday Packs below)</td></tr>
  <tr><td>Colored border</td><td>Holiday from the active pack</td></tr>
</table>
<hr>
<h3>The Night Sky Panel</h3>
<p>Click any <strong>ⓘ</strong> button to open the events panel. When viewing today, the <strong>Tonight</strong> section shows sunset time, astronomical twilight (when the sky is truly dark — sun 18° below horizon, roughly 1.5–2 hours after sunset), visible planets, active meteor showers, and evening constellations visible from your location.</p>
<p><strong>Northern vs Southern Hemisphere:</strong> The sky you see depends entirely on where you are on Earth. Observers in the Southern Hemisphere see a completely different set of constellations overhead — the Southern Cross, Centaurus, and Scorpius dominate the south, while Orion appears upside-down and the familiar northern pole star Polaris is below the horizon. The sky panel shows constellations calculated for your set location, so make sure your coordinates in Settings are correct. If you move to a new place, update them.</p>
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
<h3>When Does the Year Begin?</h3>
<p>January 1 is a surprisingly recent convention. The earliest Roman calendar began in March — <em>Martius</em>, named for Mars, the god of spring — and kept that anchor for centuries. Medieval Europe largely returned to spring after Rome's fall: England used <strong>March 25</strong> (Lady Day, the Feast of the Annunciation) as the legal start of the year for nearly 600 years, from 1155 until the Calendar Act of 1752. When Britain switched from Julian to Gregorian and dropped 11 days, the old March 25 tax deadline was pushed forward to <strong>April 6</strong> — where it remains as the start of the UK tax year today, a bureaucratic fossil of the old calendar. The same pattern recurs across the world. The Persian <strong>Nowruz</strong> has opened the new year at the vernal equinox (around March 20–21) for at least 3,000 years, still celebrated by some 300 million people across Iran, Central Asia, and the Caucasus. In South Asia, new years cluster across March and April: Hindu <strong>Ugadi</strong> and <strong>Gudi Padwa</strong> fall on the new moon of Chaitra; <strong>Tamil Puthandu</strong>, <strong>Sinhala Aluth Awurudda</strong>, and Kerala's <strong>Vishu</strong> all fall around April 14, when the sun enters Aries; <strong>Baisakhi</strong> in Punjab is both harvest festival and new year. <strong>Thai Songkran</strong> (April 13–15) descends from the same Sanskrit <em>sankranti</em> — the sun's passage into Aries. The vernal equinox was not merely symbolic: it was the moment the hungry months ended and planting could begin.</p>
<p>The traditions represented here show the same argument playing out in different registers. The <strong>Jewish calendar</strong> has it both ways: the Torah names Nisan (March–April) the first month — <em>chodesh ha-aviv</em>, "the month of spring" — but Rosh Hashanah on Tishrei 1 in autumn was formalized by rabbinical tradition as the anniversary of creation and became the celebrated new year. The <strong>Hindu Panchanga</strong> year begins with the new moon of Chaitra in spring — the same Vikrama Samvat reckoning underlying the festivals in this app. The <strong>Celtic Wheel of the Year</strong> assigns the year's beginning to Samhain (October 31), the fire festival when the old year's light went out, while Beltane (May 1) opened the summer half. The <strong>Christian liturgical year</strong> begins in Advent, four Sundays before Christmas — the year starts in the dark and builds toward the Nativity. The <strong>Cherokee</strong>, the <strong>Haudenosaunee</strong>, and this calendar all anchor to winter's turning: the first new moon after the solstice, or the midwinter ceremony itself. Spring-anchored or winter-anchored — the disagreement is not confusion; it reflects two genuine astronomical thresholds, the solstice and the equinox, that both mark real turning points in the year. This calendar chose winter.</p>
<hr>
<h3>The Months: Names and Origins</h3>
<table class="help-table">
  <tr><th>Month</th><th>Named for</th><th></th></tr>
  <tr><td><strong>January</strong></td><td>Janus</td><td>God of doorways and beginnings. Two-faced — one looking back at the year just ended, one forward to the year ahead. Every threshold, every gate, every new start belonged to him.</td></tr>
  <tr><td><strong>February</strong></td><td><em>Februum</em></td><td>The ritual instruments of the <em>Lupercalia</em> purification festival (February 15). The whole month was a time of cleansing and expiation. When March was still the new year, February was the final month — the one that swept the house clean before the year could begin.</td></tr>
  <tr><td><strong>March</strong></td><td>Mars</td><td>God of war. When the weather warms and armies begin to march.</td></tr>
  <tr><td><strong>April</strong></td><td><em>Aperire</em> or Aphrodite</td><td>Most likely from Latin <em>aperire</em>, "to open" — when buds open, soil opens, the world opens after winter. Some ancient writers connected it to Aphrodite (Venus), making it the goddess of love's own month. The question remains open, fittingly.</td></tr>
  <tr><td><strong>May</strong></td><td>Maia</td><td>Goddess of growth and increase. In Roman religion, an earth goddess of fertile spring; in Greek myth, one of the seven Pleiades, daughter of Atlas, mother of Hermes. Farmers sacrificed to her on May 1.</td></tr>
  <tr><td><strong>June</strong></td><td>Juno</td><td>Queen of the gods and patron of marriage. Wife of Jupiter, guardian of women through every stage of life. Her month remains the most popular for weddings — her blessing has never quite left it.</td></tr>
  <tr><td><strong>July</strong></td><td>Julius Caesar</td><td>Named by decree of Mark Antony in 44 BCE, the year of Caesar's assassination. Originally <em>Quintilis</em> — "the fifth month." The first month named for a mortal, or near-mortal: the Senate had already begun declaring him divine.</td></tr>
  <tr><td><strong>August</strong></td><td>Augustus Caesar</td><td>Named by Senate decree in 8 BCE. Originally <em>Sextilis</em> — "the sixth month." Augustus reportedly demanded it match July's 31 days; the extra day was taken from February, which has never quite recovered.</td></tr>
  <tr><td><strong>September</strong></td><td><em>Septem</em> (seven)</td><td>The seventh month in the old March-anchored calendar. It has been mislabeled by two for over 2,000 years.</td></tr>
  <tr><td><strong>October</strong></td><td><em>Octo</em> (eight)</td><td>The eighth month, now the tenth.</td></tr>
  <tr><td><strong>November</strong></td><td><em>Novem</em> (nine)</td><td>The ninth month, now the eleventh.</td></tr>
  <tr><td><strong>December</strong></td><td><em>Decem</em> (ten)</td><td>The tenth month, now the twelfth — and the most ironic, since it closes a year it was never built to contain.</td></tr>
</table>
<hr>
<h3>Holiday Packs</h3>
<p>Open <strong>Settings</strong> (🗺️) and click either <strong>Holidays</strong> button to choose up to two holiday packs at once. Holidays appear as a colored border on calendar days and in the upcoming events list. The <strong>Holidays</strong> toggle in the toolbar shows or hides all active packs at once.</p>
<table class="help-table">
  <tr><th>Pack</th><th>Description</th></tr>
  <tr><td><strong>US</strong></td><td>Ten US federal holidays: New Year's Day, MLK Day, Presidents Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas.</td></tr>
  <tr><td><strong>Wheel</strong></td><td>The <em>Wheel of the Year</em> — eight Celtic and Pagan seasonal festivals marking the turning points of the solar year. <strong>Yule</strong> (Dec 21, winter solstice) and <strong>Litha</strong> (Jun 21, summer solstice) mark the sun's extremes. <strong>Ostara</strong> (Mar 20, spring equinox) and <strong>Mabon</strong> (Sep 22, autumn equinox) mark the balance points. <strong>Imbolc</strong> (Feb 1) celebrates the first stirring of spring and is sacred to Brigid, goddess of fire and craft. <strong>Beltane</strong> (May 1) is a fire festival celebrating fertility and the full arrival of summer. <strong>Lughnasadh</strong> (Aug 1) marks the first harvest and is named for the sun god Lugh. <strong>Samhain</strong> (Oct 31) is the Celtic new year — the night when the veil between the living and the dead is thinnest. These dates are approximations; traditional communities calculate them from the actual astronomical events.</td></tr>
  <tr><td><strong>Hebrew</strong></td><td>Jewish holidays computed precisely from the Hebrew calendar (Hillel II arithmetic system). <strong>Rosh Hashanah</strong> (1–2 Tishrei) is the Jewish New Year. <strong>Yom Kippur</strong> (10 Tishrei) is the Day of Atonement, the holiest day of the year. <strong>Sukkot</strong> (15–21 Tishrei) is the Feast of Tabernacles, commemorating the wilderness journey. <strong>Shemini Atzeret</strong> and <strong>Simchat Torah</strong> close the Sukkot season. <strong>Hanukkah</strong> (25 Kislev, 8 nights) is the Festival of Lights, celebrating the rededication of the Temple and a miraculous oil that burned for eight days. <strong>Tu B'Shevat</strong> (15 Shevat) is the New Year of the Trees. <strong>Purim</strong> (14 Adar) celebrates the story of Esther. <strong>Passover</strong> (15 Nisan, 8 days) commemorates the Exodus from Egypt. <strong>Shavuot</strong> (6–7 Sivan) marks the giving of the Torah at Sinai. These dates shift in the Gregorian calendar each year because the Hebrew year follows the moon; this pack calculates them exactly.</td></tr>
  <tr><td><strong>Hindu</strong></td><td>Major Hindu festivals at approximate Gregorian dates (true dates follow the lunisolar Panchanga calendar and shift by a few weeks each year). <strong>Makar Sankranti</strong> (Jan 14) marks the sun's entry into Capricorn — one of the few Hindu festivals with a fixed solar date. <strong>Maha Shivaratri</strong> ("Great Night of Shiva") is a night-long vigil honoring Shiva's cosmic dance. <strong>Holi</strong> is the Festival of Colors — a joyful spring celebration of the victory of good over evil, commemorating Prahlada's devotion. <strong>Ram Navami</strong> marks the birth of Lord Rama. <strong>Janmashtami</strong> celebrates the birth of Krishna at midnight. <strong>Ganesh Chaturthi</strong> is the ten-day birthday celebration of Ganesha, remover of obstacles. <strong>Navratri</strong> ("Nine Nights") honors the goddess Durga in her nine forms. <strong>Dussehra</strong> celebrates Rama's victory over the demon king Ravana. <strong>Diwali</strong> — the Festival of Lights — commemorates Rama's return from exile; lamps are lit everywhere to welcome him home. <strong>Kartik Purnima</strong> is the full moon of Kartik, sacred to Vishnu, Shiva, and the Sikh Gurpurab of Guru Nanak.</td></tr>
  <tr><td><strong>Liturgical</strong></td><td>The Western Christian liturgical calendar aligned with the USCCB calendar. Includes all solemnities, feasts, and obligatory memorials. <strong>Easter</strong> and its dependent moveable feasts (Ash Wednesday, Pentecost, Sacred Heart, Divine Mercy Sunday) are computed from the Computus algorithm. <strong>Christmas</strong>, <strong>Epiphany</strong>, and fixed-date saints' days fall on the same Gregorian date each year. <strong>Advent</strong> begins four Sundays before Christmas. <strong>Christ the King</strong> closes the liturgical year. Baptism of the Lord and Holy Family are computed from the calendar.</td></tr>
  <tr><td><strong>Cherokee</strong></td><td>Approximate dates for Cherokee (Tsalagi) seasonal ceremonies. The Cherokee year is organized around the agricultural and ceremonial cycle. <strong>The First New Moon of Spring</strong> opens the new year with purification rites. <strong>The New Green Corn Ceremony</strong> (early summer) gives thanks for the first green corn. <strong>The Ripe Green Corn Ceremony</strong> and <strong>Mature Green Corn Ceremony</strong> mark successive stages of the harvest — each requiring the corn to actually be ready before the ceremony can take place. <strong>The Great New Moon Ceremony</strong> (autumn) is a new year celebration tied to the first new moon of the harvest season. <strong>The New Fire Ceremony</strong> extinguishes all fires and rekindles them from a sacred new flame — a ritual renewal of the world. <strong>Atohuna</strong> ("Friends Made") is a ceremony of reconciliation and community. <strong>The Bounding Bush Ceremony</strong> closes the ceremonial year in winter. <em>These dates are approximations; Cherokee ceremonial timing is traditionally set by elders and knowledge-keepers, not fixed calendars.</em></td></tr>
  <tr><td><strong>Iroquois</strong></td><td>Approximate dates for Haudenosaunee (Iroquois Confederacy) seasonal ceremonies. The Haudenosaunee ceremonial year is a continuous cycle of thanksgiving to the natural world. <strong>The Midwinter Ceremony</strong> (late January) is the most sacred ceremony of the year — a multi-day renewal of the world and the people, with the stirring of ashes, dream-sharing, and the White Dog feast in older practice. <strong>The Maple Festival</strong> gives thanks for the return of the maple sap in early spring. <strong>The Thunder Ceremony</strong> welcomes the Thunderbeings — the spirit forces of rain and renewal — as they return in spring. <strong>The Seed Planting Festival</strong> asks the Three Sisters (corn, beans, squash) to grow. <strong>The Strawberry Festival</strong> celebrates the first strawberries of summer with a communal drink of strawberry juice. <strong>The Green Corn Ceremony</strong> gives thanks for the new corn. <strong>The Harvest Festival</strong> closes the agricultural year. <em>These dates are approximations; Haudenosaunee ceremonial timing varies by nation and is set by traditional governance, not fixed dates.</em></td></tr>
</table>
<hr>
<h3>Sky Cultures in the Night Sky Panel</h3>
<p>The sky view can overlay two cultural lenses on the same physical sky. Toggle them from the toolbar in sky mode.</p>
<p><strong>Skidi Pawnee:</strong> The Skidi Pawnee were a confederacy of villages on the Great Plains (present-day Nebraska and Kansas) whose cosmology was more astronomically elaborate than almost any other Plains culture. Their villages were laid out to mirror specific star patterns; their ceremonial calendar was regulated not by months but by the appearance of particular stars at dusk and dawn. The <strong>Evening Star</strong> (Venus in the west) was the mother of all life; the <strong>Morning Star</strong> (Mars) was her husband and the force of creation. Their star knowledge was encoded in charts painted on tanned elk and buffalo hide — some of the oldest surviving astronomical documents from North America. The <strong>Pawnee</strong> toggle labels the sky with Skidi star names and lore.</p>
<p><strong>Jyotisha (Hindu):</strong> <em>Jyotisha</em> (ज्योतिष, <em>the science of light</em>) is the Vedic tradition of astronomy and timekeeping. Central to it is the system of <strong>27 nakshatras</strong> — lunar mansions that divide the ecliptic into equal 13°20′ arcs. The Moon moves through roughly one nakshatra per day. Each nakshatra has a presiding deity, sacred lore from the Rig Veda and Brihat Samhita, and auspicious or inauspicious associations. The <strong>Jyotisha</strong> toggle labels the sky with nakshatra names, boundaries, and their presiding deities — so Scorpius becomes <em>Jyestha</em> (the eldest, presided by Indra) and Sagittarius reveals <em>Purvashadha</em> (the undefeated, presided by the Waters).</p>
`,

// ─── German ─────────────────────────────────────────────────────────────────
de: `
<h3>Die Jahreszahl</h3>
<p>Dieser Kalender verwendet die <strong>Menschheitsära</strong> (Holozän-Ära). Die übliche v. Chr./n. Chr.-Zählung ist auf das Jahr 1 n. Chr. geeicht — das Geburtsdatum Jesu, berechnet von Dionysius Exiguus im 6. Jahrhundert. Die Menschheitsära wählt einen älteren und universelleren Ursprung: sie addiert 10.000 Jahre, um den Beginn der menschlichen Zivilisation — die Agrarrevolution — auf Jahr 1 zu setzen. Das <a href="https://en.wikipedia.org/wiki/Holocene" target="_blank">Holozän</a> — oft als das Menschenzeitalter bezeichnet — begann vor etwa 11.700 Jahren mit dem Ende der letzten Eiszeit; es umfasst die gesamte Schriftgeschichte, jede technologische Revolution und jede Zivilisation, die unsere Spezies hervorgebracht hat. Es war die Zeit, als Menschen erstmals Getreide anbauten, Tiere hielten und dauerhafte Siedlungen gründeten — der Punkt, ab dem das Beobachten von Mond und Jahreszeiten keine Option mehr war. Im Gegensatz zum Jahr 1 n. Chr. gehört dieser Ursprung keiner einzigen Religion oder Tradition — er ist der gemeinsame Ausgangspunkt der menschlichen Geschichte. Die Akzeptanz der ~300-jährigen Lücke hält die Jahreszahl einfach verwendbar — Jahr 1 ist ein willkürlicher Punkt nicht weit im Inneren des Zeitalters, das wir erfassen wollen, und stellt uns dennoch in die richtige Beziehung dazu. Das Ergebnis: 2026 n. Chr. = <strong>12026 HE</strong>.</p>
<p>Der 10.000-Jahres-Versatz ist eine bewusste runde Zahl — eine grobe Annäherung, die in der Nähe des tatsächlichen Holozän-Beginns (etwa 9.700 v. Chr.) liegt. Die Idee wurde mehrfach unabhängig vorgeschlagen: von Gabriel Deville im Jahr 1924, der lettischen <em>Dievturība</em>-Tradition im Jahr 1929, E.R. Hope im Jahr 1963 und Cesare Emiliani in einem Brief an <em>Nature</em> im Jahr 1993. Die Nummerierung hier wurde ohne Kenntnis dieser Geschichte entwickelt. Mehr dazu im Wikipedia-Artikel zum <a href="https://en.wikipedia.org/wiki/Holocene_calendar" target="_blank">Holozän-Kalender</a>.</p>
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
<p><strong>Nordhimmel vs. Südhimmel:</strong> Der Himmel, den du siehst, hängt vollständig davon ab, wo du dich auf der Erde befindest. Beobachter auf der Südhalbkugel sehen eine völlig andere Sammlung von Sternbildern — das Südliche Kreuz, Zentaurus und Skorpion dominieren den Süden, während Orion auf dem Kopf erscheint und der vertraute Nordstern Polaris unter dem Horizont liegt. Das Himmels-Panel zeigt Sternbilder berechnet für deinen eingestellten Standort — stelle sicher, dass deine Koordinaten in den Einstellungen korrekt sind.</p>
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
  <tr><th>#</th><th>Cherokee</th><th>Romanisiert</th><th>Deutsch</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Kältemond / Kältemonat</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Knochenmond (Hungermonat)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Windmond</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Blütenmond</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Pflanzmond</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Grüner-Mais-Mond</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Reifer-Mais-Mond</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>Ende-der-Frucht-Mond</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Nussmond</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Erntemond</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Handelsmond</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Schneemond</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Schaltmond (bei Bedarf)</td></tr>
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
<h3>Wann beginnt das Jahr?</h3>
<p>Der 1. Januar ist eine überraschend neue Konvention. Der älteste römische Kalender begann im März — <em>Martius</em>, benannt nach Mars, dem Gott des Frühlings — und behielt diese Verankerung über Jahrhunderte bei. Das mittelalterliche Europa kehrte nach dem Fall Roms weitgehend zum Frühling zurück: England nutzte den <strong>25. März</strong> (Lady Day, das Fest der Verkündigung) fast 600 Jahre lang, von 1155 bis zum Kalendergesetz von 1752, als rechtlichen Jahresbeginn. Als Großbritannien vom julianischen auf den gregorianischen Kalender wechselte und 11 Tage ausfallen ließ, wurde die alte Steuerdeadline vom 25. März auf den <strong>6. April</strong> verschoben — wo sie bis heute als Beginn des britischen Steuerjahres verharrt, ein bürokratisches Fossil des alten Kalenders. Dasselbe Muster wiederholt sich weltweit. Das persische <strong>Nowruz</strong> eröffnet das neue Jahr seit mindestens 3.000 Jahren zur Frühjahrs-Tagundnachtgleiche (um den 20.–21. März), gefeiert von etwa 300 Millionen Menschen in Iran, Zentralasien und dem Kaukasus. In Südasien häufen sich die Jahresanfänge im März und April: Hindu-<strong>Ugadi</strong> und <strong>Gudi Padwa</strong> fallen auf den Neumond des Chaitra; <strong>Tamilisches Puthandu</strong>, <strong>Singhalesisches Aluth Awurudda</strong> und Keralas <strong>Vishu</strong> fallen alle um den 14. April, wenn die Sonne in den Widder eintritt; <strong>Baisakhi</strong> im Punjab ist zugleich Erntefest und Neujahr. Das <strong>Thailändische Songkran</strong> (13.–15. April) entstammt demselben Sanskrit-Begriff <em>Sankranti</em> — der Passage der Sonne in den Widder. Die Frühjahrs-Tagundnachtgleiche war nicht bloß symbolisch: sie war der Moment, in dem die Hungermonate endeten und die Aussaat beginnen konnte.</p>
<p>Die hier vertretenen Traditionen zeigen dasselbe Argument in verschiedenen Registern. Der <strong>jüdische Kalender</strong> hat es auf beide Weisen: Die Tora nennt Nisan (März–April) den ersten Monat — <em>chodesh ha-aviv</em>, „der Frühlingsmonat" — aber Rosch Haschana am 1. Tischri im Herbst wurde von der rabbinischen Tradition als Jahrestag der Schöpfung festgelegt und wurde der gefeierte Jahresbeginn. Das <strong>Hindu-Panchanga</strong>-Jahr beginnt mit dem Neumond des Chaitra im Frühling — dieselbe Vikrama-Samvat-Rechnung, die den Festen in dieser App zugrunde liegt. Das <strong>Keltische Rad des Jahres</strong> legt den Jahresbeginn auf Samhain (31. Oktober), das Feuerfest, bei dem das Licht des alten Jahres erlosch, während Beltane (1. Mai) die Sommerhälfte eröffnete. Das <strong>christliche Kirchenjahr</strong> beginnt im Advent, vier Sonntage vor Weihnachten — das Jahr beginnt im Dunkeln und baut sich zur Geburt Christi auf. Die <strong>Cherokee</strong>, die <strong>Haudenosaunee</strong> und dieser Kalender verankern sich alle am Wenden des Winters: am ersten Neumond nach der Sonnenwende oder an der Zeremonie des Mittwinters. Frühlings- oder winterverankert — der Widerspruch ist kein Durcheinander; er spiegelt zwei echte astronomische Schwellen wider, die Sonnenwende und die Tagundnachtgleiche, die beide echte Wendepunkte des Jahres markieren. Dieser Kalender wählte den Winter.</p>
<hr>
<h3>Die Monate: Namen und Ursprünge</h3>
<table class="help-table">
  <tr><th>Monat</th><th>Benannt nach</th><th></th></tr>
  <tr><td><strong>Januar</strong></td><td>Janus</td><td>Gott der Türen und Übergänge. Zweigesichtig — ein Gesicht blickt auf das vergangene Jahr, das andere auf das neue. Jede Türschwelle, jedes Tor, jeder neue Anfang gehörte ihm.</td></tr>
  <tr><td><strong>Februar</strong></td><td><em>Februum</em></td><td>Die rituellen Reinigungsgegenstände des <em>Lupercalia</em>-Festes (15. Februar). Der ganze Monat war eine Zeit der Läuterung und Sühne. Als der März noch das neue Jahr war, war der Februar der letzte Monat — der, der das Haus säuberte, bevor das Jahr beginnen konnte.</td></tr>
  <tr><td><strong>März</strong></td><td>Mars</td><td>Gott des Krieges. Wenn das Wetter warm wird und die Heere zu marschieren beginnen.</td></tr>
  <tr><td><strong>April</strong></td><td><em>Aperire</em> oder Aphrodite</td><td>Wahrscheinlich vom lateinischen <em>aperire</em>, „öffnen" — wenn Knospen aufgehen, die Erde sich öffnet, die Welt nach dem Winter aufbricht. Einige antike Autoren verbanden ihn mit Aphrodite (Venus), die ihn zur eigenen Göttin der Liebe machten. Die Frage bleibt offen, passenderweise.</td></tr>
  <tr><td><strong>Mai</strong></td><td>Maia</td><td>Göttin des Wachstums und der Fruchtbarkeit. In der römischen Religion eine Erdgöttin des fruchtbaren Frühlings; im griechischen Mythos eine der sieben Plejaden, Tochter des Atlas, Mutter des Hermes. Bauern opferten ihr am 1. Mai.</td></tr>
  <tr><td><strong>Juni</strong></td><td>Juno</td><td>Königin der Götter und Schutzpatronin der Ehe. Gattin Jupiters, Hüterin der Frauen in jeder Lebensphase. Ihr Monat ist noch immer der beliebteste für Hochzeiten — ihr Segen hat ihn nie ganz verlassen.</td></tr>
  <tr><td><strong>Juli</strong></td><td>Julius Caesar</td><td>Per Dekret des Marcus Antonius im Jahr 44 v. Chr., dem Jahr von Caesars Ermordung. Ursprünglich <em>Quintilis</em> — „der fünfte Monat." Der erste Monat, der nach einem Sterblichen benannt wurde — oder fast Göttlichen: der Senat hatte bereits begonnen, ihn zu vergöttlichen.</td></tr>
  <tr><td><strong>August</strong></td><td>Augustus Caesar</td><td>Per Senatsbeschluss im Jahr 8 v. Chr. Ursprünglich <em>Sextilis</em> — „der sechste Monat." Augustus bestand angeblich darauf, dass er so viele Tage habe wie der Juli; der zusätzliche Tag wurde dem Februar entnommen, der sich davon nie ganz erholt hat.</td></tr>
  <tr><td><strong>September</strong></td><td><em>Septem</em> (sieben)</td><td>Der siebte Monat im alten, im März verankerten Kalender. Er trägt seit über 2.000 Jahren die falsche Nummer.</td></tr>
  <tr><td><strong>Oktober</strong></td><td><em>Octo</em> (acht)</td><td>Der achte Monat, jetzt der zehnte.</td></tr>
  <tr><td><strong>November</strong></td><td><em>Novem</em> (neun)</td><td>Der neunte Monat, jetzt der elfte.</td></tr>
  <tr><td><strong>Dezember</strong></td><td><em>Decem</em> (zehn)</td><td>Der zehnte Monat, jetzt der zwölfte — und der ironischste, da er ein Jahr abschließt, für das er nie gedacht war.</td></tr>
</table>
<hr>
<h3>Feiertagspakete</h3>
<p>Öffne die <strong>Einstellungen</strong> (🗺️) und klicke auf einen der <strong>Feiertage</strong>-Knöpfe, um bis zu zwei Feiertagspakete gleichzeitig auszuwählen. Feiertage erscheinen als farbiger Rahmen an Kalendertagen und in der Terminübersicht. Der <strong>Feiertage</strong>-Schalter in der Werkzeugleiste blendet alle aktiven Pakete ein oder aus.</p>
<table class="help-table">
  <tr><th>Paket</th><th>Beschreibung</th></tr>
  <tr><td><strong>US</strong></td><td>Zehn US-Bundesfeiertage: Neujahr, MLK-Tag, Präsidententag, Gedenktag, Unabhängigkeitstag, Tag der Arbeit, Kolumbus-Tag, Veteranentag, Erntedankfest, Weihnachten.</td></tr>
  <tr><td><strong>Jahreskreis</strong></td><td>Das <em>Rad des Jahres</em> — acht keltische und heidnische Saisonfeste, die die Wendepunkte des Sonnenjahres markieren. <strong>Julfest</strong> (21. Dez.) und <strong>Litha</strong> (21. Jun.) markieren die Sonnenwenden. <strong>Ostara</strong> (20. Mär.) und <strong>Mabon</strong> (22. Sep.) die Tagundnachtgleichen. <strong>Imbolc</strong> (1. Feb.) ehrt Brigid, die Göttin des Feuers und Handwerks. <strong>Beltane</strong> (1. Mai) ist ein Feuer- und Fruchtbarkeitsfest. <strong>Lughnasadh</strong> (1. Aug.) feiert die erste Ernte zu Ehren des Sonnengottes Lugh. <strong>Samhain</strong> (31. Okt.) ist das keltische Neujahr — die Nacht, in der der Schleier zwischen Lebenden und Toten am dünnsten ist.</td></tr>
  <tr><td><strong>Jüdisch</strong></td><td>Jüdische Feiertage, präzise aus dem hebräischen Kalender berechnet. <strong>Rosch Haschana</strong> ist das jüdische Neujahr. <strong>Jom Kippur</strong> ist der Versöhnungstag. <strong>Sukkot</strong> erinnert an die Wüstenwanderung. <strong>Chanukka</strong> (8 Nächte) ist das Lichterfest, das die Wiedereinweihung des Tempels und ein Ölwunder feiert. <strong>Purim</strong> feiert die Geschichte von Esther. <strong>Pessach</strong> (8 Tage) gedenkt des Auszugs aus Ägypten. <strong>Schawuot</strong> feiert die Übergabe der Thora. Diese Daten wechseln jedes Jahr im gregorianischen Kalender, da das jüdische Jahr dem Mond folgt — dieses Paket berechnet sie exakt.</td></tr>
  <tr><td><strong>Hindu</strong></td><td>Wichtige hinduistische Feste zu ungefähren gregorianischen Daten (die genauen Daten folgen dem lunisolaren Panchanga und verschieben sich jährlich um einige Wochen). <strong>Makar Sankranti</strong> (14. Jan.) markiert den Eintritt der Sonne in den Steinbock. <strong>Holi</strong> ist das bunte Frühlingsfest des Sieges des Guten über das Böse. <strong>Janmashtami</strong> feiert die Geburt Krishnas. <strong>Ganesh Chaturthi</strong> ist das zehntägige Geburtsfest Ganeshas, des Entferners von Hindernissen. <strong>Navratri</strong> (Neun Nächte) ehrt die Göttin Durga. <strong>Diwali</strong> — das Lichterfest — feiert Ramas Rückkehr aus dem Exil.</td></tr>
  <tr><td><strong>Liturgisch</strong></td><td>Der westliche christliche Liturgiekalender, ausgerichtet am USCCB-Kalender. Enthält alle Hochfeste, Feste und gebotenen Gedenktage. <strong>Ostern</strong> und seine beweglichen Feste (Aschermittwoch, Pfingsten, Herz Jesu, Barmherzigkeitssonntag) werden nach dem Computus berechnet. <strong>Weihnachten</strong>, <strong>Epiphanie</strong> und feste Heiligentage fallen jährlich auf das gleiche gregorianische Datum. Der <strong>Advent</strong> beginnt vier Sonntage vor Weihnachten. <strong>Christkönig</strong> beschließt das Kirchenjahr.</td></tr>
  <tr><td><strong>Cherokee</strong></td><td>Ungefähre Termine für Cherokee-(Tsalagi-)Saisonzeremonien. <strong>Erster Neumond des Frühlings</strong> eröffnet das neue Jahr mit Reinigungsriten. Die <strong>Grüner-Mais-Zeremonien</strong> (mehrere Stufen im Sommer) geben Dank für die Ernte. <strong>Die Große-Neumond-Zeremonie</strong> (Herbst) ist ein Neujahrsfest. <strong>Die Neufeuer-Zeremonie</strong> löscht alle Feuer und zündet sie an einer heiligen neuen Flamme wieder an — eine rituelle Erneuerung der Welt. <em>Diese Daten sind Annäherungswerte; der Cherokee-Zeremonienkalender wird von Ältesten und Wissensträgern festgelegt.</em></td></tr>
  <tr><td><strong>Irokesen</strong></td><td>Ungefähre Termine für Haudenosaunee-(Irokesen-)Saisonzeremonien. Die <strong>Midwinter-Zeremonie</strong> (Ende Jan.) ist die heiligste Zeremonie des Jahres — eine mehrtägige Erneuerung der Welt. Das <strong>Ahornfest</strong> dankt für den Saft im Frühfrühling. Das <strong>Donner-Fest</strong> begrüßt die Donnerwesen des Regens. Das <strong>Erdbeer-Fest</strong> feiert die ersten Erdbeeren. Die <strong>Grüner-Mais-Zeremonie</strong> dankt für den Mais. Das <strong>Ernte-Fest</strong> schließt das landwirtschaftliche Jahr. <em>Diese Daten sind Annäherungswerte; die Haudenosaunee-Zeremonien werden von der traditionellen Regierungsführung festgelegt.</em></td></tr>
</table>
<hr>
<h3>Himmelskultur im Nachthimmel-Panel</h3>
<p>Die Himmelsansicht kann zwei kulturelle Perspektiven auf denselben physischen Himmel legen. Schalte sie in der Werkzeugleiste im Himmelsmodus um.</p>
<p><strong>Skidi Pawnee:</strong> Die Skidi Pawnee waren eine Konföderation von Dörfern auf den Great Plains (heutiges Nebraska und Kansas), deren Kosmologie astronomisch ausgefeilter war als fast jede andere Kultur der Ebenen. Ihre Dörfer waren so angelegt, dass sie bestimmte Sternmuster widerspiegelten; ihr Zeremonienkalender wurde nicht nach Monaten, sondern nach dem Erscheinen bestimmter Sterne in der Dämmerung und Morgenröte geregelt. Der <strong>Abendstern</strong> (Venus im Westen) war die Mutter allen Lebens; der <strong>Morgenstern</strong> (Mars) war ihr Gatte und die Kraft der Schöpfung. Ihr Sternenwissen war in Karten kodiert, die auf gegerbtem Elch- und Büffelfell gemalt waren — zu den ältesten erhaltenen astronomischen Dokumenten Nordamerikas. Der <strong>Pawnee</strong>-Schalter beschriftet den Himmel mit Skidi-Sternnamen und Überlieferungen.</p>
<p><strong>Jyotisha (Hinduismus):</strong> <em>Jyotisha</em> (ज्योतिष, <em>die Wissenschaft des Lichts</em>) ist die vedische Tradition der Astronomie und Zeitrechnung. Im Mittelpunkt steht das System der <strong>27 Nakshatras</strong> — Mondstationen, die die Ekliptik in gleiche Bögen von 13°20′ unterteilen. Der Mond durchläuft täglich etwa eine Nakshatra. Jede Nakshatra hat eine Schutzgottheit, heilige Überlieferungen aus dem Rig Veda und der Brihat Samhita sowie günstige oder ungünstige Bedeutungen. Der <strong>Jyotisha</strong>-Schalter beschriftet den Himmel mit Nakshatra-Namen, Grenzen und ihren Schutzgottheiten — so wird der Skorpion zu <em>Jyestha</em> (der Älteste, behütet von Indra) und der Schütze enthüllt <em>Purvashadha</em> (der Unbesiegte, behütet von den Wassern).</p>
`,

// ─── French ─────────────────────────────────────────────────────────────────
fr: `
<h3>Le Numéro d'Année</h3>
<p>Ce calendrier utilise l'<strong>Ère Humaine</strong> (Ère Holocène). Le comput habituel av./ap. J.-C. est ancré en l'an 1 — la date de naissance de Jésus, estimée par Denys le Petit au VIe siècle. L'Ère Humaine remonte plus loin : elle ajoute 10&nbsp;000 ans pour placer l'aube de la civilization humaine — la révolution agricole — en l'An 1. L'<a href="https://en.wikipedia.org/wiki/Holocene" target="_blank">Holocène</a> — souvent appelé l'Âge de l'Homme — a débuté il y a environ 11&nbsp;700 ans, à la fin de la dernière période glaciaire ; il englobe toute l'histoire écrite, chaque révolution technologique et chaque civilization que notre espèce a produite. C'est alors que les humains ont commencé à cultiver des plantes, élever des animaux et bâtir des habitations permanentes : le point à partir duquel suivre la lune et les saisons est devenu indispensable. Contrairement à l'an 1, cette origine n'appartient à aucune religion ni tradition — c'est le point de départ commun de l'histoire humaine. Accepter l'écart de ~300 ans rend l'année simple à utiliser — l'An 1 est un point arbitraire pas très loin à l'intérieur de l'ère que nous choisissons de marquer, et nous place tout de même dans la bonne relation avec elle. Résultat : 2026 ap. J.-C. = <strong>12026 HE</strong>.</p>
<p>Le décalage de 10 000 ans est un nombre rond délibéré — une approximation choisie pour tomber près du début réel de l'Holocène (vers 9 700 av. J.-C.). L'idée a été proposée indépendamment plusieurs fois : par Gabriel Deville en 1924, la tradition lettone <em>Dievturība</em> en 1929, E.R. Hope en 1963, et Cesare Emiliani dans une lettre à <em>Nature</em> en 1993. La numérotation ici a été conçue sans connaissance de cette histoire. Pour en savoir plus, voir l'article sur le <a href="https://en.wikipedia.org/wiki/Holocene_calendar" target="_blank">calendrier de l'Holocène</a>.</p>
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
<p><strong>Hémisphère Nord vs. Sud :</strong> Le ciel que vous voyez dépend entièrement de votre position sur Terre. Les observateurs de l'hémisphère sud voient un ensemble de constellations complètement différent — la Croix du Sud, le Centaure et le Scorpion dominent le sud, tandis qu'Orion apparaît à l'envers et l'étoile polaire Polaris est sous l'horizon. Le panneau céleste affiche les constellations calculées pour votre emplacement configuré — vérifiez que vos coordonnées dans Paramètres sont correctes.</p>
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
  <tr><th>#</th><th>Cherokee</th><th>Romanisé</th><th>Français</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Lune du Froid / Mois du Froid</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Lune des Os (mois de la faim)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Lune du Vent</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Lune des Fleurs</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Lune des Semailles</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Lune du Maïs Vert</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Lune du Maïs Mûr</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>Lune de la Fin des Fruits</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Lune des Noix</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Lune de la Récolte</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Lune du Commerce</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Lune de Neige</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Lune Intercalaire (si nécessaire)</td></tr>
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
<h3>Quand l'année commence-t-elle ?</h3>
<p>Le 1er janvier est une convention étonnamment récente. Le plus ancien calendrier romain débutait en mars — <em>Martius</em>, nommé d'après Mars, le dieu du printemps — et conserva ce point d'ancrage pendant des siècles. L'Europe médiévale revint largement au printemps après la chute de Rome : l'Angleterre utilisa le <strong>25 mars</strong> (Lady Day, la fête de l'Annonciation) comme début légal de l'année pendant près de 600 ans, de 1155 jusqu'à la loi sur le calendrier de 1752. Lors du passage de la Grande-Bretagne du calendrier julien au grégorien, l'abandon de 11 jours reporta l'ancienne échéance fiscale du 25 mars au <strong>6 avril</strong> — où elle demeure encore aujourd'hui comme début de l'année fiscale britannique, fossile bureaucratique de l'ancien calendrier. Le même schéma se retrouve dans le monde entier. Le <strong>Nowruz</strong> perse ouvre la nouvelle année à l'équinoxe de printemps (vers le 20–21 mars) depuis au moins 3 000 ans, célébré par environ 300 millions de personnes en Iran, en Asie centrale et dans le Caucase. En Asie du Sud, les nouvelles années se regroupent en mars et avril : l'<strong>Ugadi</strong> et le <strong>Gudi Padwa</strong> hindous tombent à la nouvelle lune de Chaitra ; le <strong>Puthandu</strong> tamoul, l'<strong>Aluth Awurudda</strong> cinghalais et le <strong>Vishu</strong> du Kerala se déroulent tous vers le 14 avril, quand le soleil entre dans le Bélier ; le <strong>Baisakhi</strong> au Pendjab est à la fois fête des moissons et nouvel an. Le <strong>Songkran</strong> thaïlandais (13–15 avril) descend du même terme sanskrit <em>sankranti</em> — le passage du soleil dans le Bélier. L'équinoxe de printemps n'était pas seulement symbolique : c'était le moment où les mois de disette prenaient fin et où les semailles pouvaient commencer.</p>
<p>Les traditions représentées ici montrent le même débat se jouant dans différents registres. Le <strong>calendrier juif</strong> joue sur les deux tableaux : la Torah nomme Nisan (mars–avril) le premier mois — <em>chodesh ha-aviv</em>, « le mois du printemps » — mais Roch Hachana au 1er Tichri en automne a été formalisé par la tradition rabbinique comme anniversaire de la création et est devenu la nouvelle année célébrée. L'année du <strong>Panchanga hindou</strong> commence à la nouvelle lune de Chaitra au printemps — le même comput Vikrama Samvat qui sous-tend les fêtes de cette application. La <strong>Roue de l'Année celtique</strong> attribue le début de l'année à Samhain (31 octobre), la fête du feu où la lumière de l'ancienne année s'éteignait, tandis que Beltane (1er mai) ouvrait la moitié estivale. L'<strong>année liturgique chrétienne</strong> commence à l'Avent, quatre dimanches avant Noël — l'année débute dans l'obscurité et monte vers la Nativité. Les <strong>Cherokee</strong>, les <strong>Haudenosaunee</strong> et ce calendrier s'ancrent tous au tournant de l'hiver : la première nouvelle lune après le solstice, ou la cérémonie du milieu de l'hiver elle-même. Ancré au printemps ou à l'hiver — le désaccord n'est pas une confusion ; il reflète deux seuils astronomiques véritables, le solstice et l'équinoxe, qui marquent tous deux de vrais tournants de l'année. Ce calendrier a choisi l'hiver.</p>
<hr>
<h3>Les Mois : Noms et Origines</h3>
<table class="help-table">
  <tr><th>Mois</th><th>Origine</th><th></th></tr>
  <tr><td><strong>Janvier</strong></td><td>Janus</td><td>Dieu des portes et des commencements. À deux visages — l'un regardant l'année écoulée, l'autre l'année à venir. Chaque seuil, chaque porte, chaque nouveau départ lui appartenait.</td></tr>
  <tr><td><strong>Février</strong></td><td><em>Februum</em></td><td>Les instruments rituels de la fête de purification des <em>Lupercales</em> (15 février). Le mois entier était une période de purification et d'expiation. Quand mars était encore le début de l'année, février en était le dernier mois — celui qui balayait la maison avant que l'année puisse commencer.</td></tr>
  <tr><td><strong>Mars</strong></td><td>Mars</td><td>Dieu de la guerre. Quand le temps se réchauffe et que les armées commencent à marcher.</td></tr>
  <tr><td><strong>Avril</strong></td><td><em>Aperire</em> ou Aphrodite</td><td>Probablement du latin <em>aperire</em>, « ouvrir » — quand les bourgeons s'ouvrent, la terre s'ouvre, le monde s'ouvre après l'hiver. Certains auteurs anciens le liaient à Aphrodite (Vénus), faisant d'avril le mois propre à la déesse de l'amour. La question reste ouverte, à juste titre.</td></tr>
  <tr><td><strong>Mai</strong></td><td>Maia</td><td>Déesse de la croissance et de l'abondance. Dans la religion romaine, une déesse terrestre du printemps fertile ; dans le mythe grec, l'une des sept Pléiades, fille d'Atlas, mère d'Hermès. Les paysans lui sacrifiaient le 1er mai.</td></tr>
  <tr><td><strong>Juin</strong></td><td>Junon</td><td>Reine des dieux et patronne du mariage. Épouse de Jupiter, gardienne des femmes à chaque étape de leur vie. Son mois reste le plus populaire pour les mariages — sa bénédiction ne l'a jamais tout à fait quitté.</td></tr>
  <tr><td><strong>Juillet</strong></td><td>Jules César</td><td>Par décret de Marc Antoine en 44 av. J.-C., l'année de l'assassinat de César. Anciennement <em>Quintilis</em> — « le cinquième mois ». Premier mois nommé d'après un mortel, ou presque divin : le Sénat avait déjà commencé à le diviniser.</td></tr>
  <tr><td><strong>Août</strong></td><td>Auguste César</td><td>Par décret du Sénat en 8 av. J.-C. Anciennement <em>Sextilis</em> — « le sixième mois ». Auguste aurait exigé qu'il comporte autant de jours que juillet ; le jour supplémentaire fut pris à février, qui ne s'en est jamais tout à fait remis.</td></tr>
  <tr><td><strong>Septembre</strong></td><td><em>Septem</em> (sept)</td><td>Le septième mois dans l'ancien calendrier ancré en mars. Il porte le mauvais numéro depuis plus de 2 000 ans.</td></tr>
  <tr><td><strong>Octobre</strong></td><td><em>Octo</em> (huit)</td><td>Le huitième mois, désormais le dixième.</td></tr>
  <tr><td><strong>Novembre</strong></td><td><em>Novem</em> (neuf)</td><td>Le neuvième mois, désormais le onzième.</td></tr>
  <tr><td><strong>Décembre</strong></td><td><em>Decem</em> (dix)</td><td>Le dixième mois, désormais le douzième — et le plus ironique, puisqu'il clôt une année qu'il n'était pas fait pour contenir.</td></tr>
</table>
<hr>
<h3>Collections de Jours Fériés</h3>
<p>Ouvrez les <strong>Paramètres</strong> (🗺️) et cliquez sur l'un des boutons <strong>Jours fériés</strong> pour choisir jusqu'à deux collections simultanément. Les jours fériés apparaissent avec une bordure colorée sur les jours du calendrier et dans la liste des événements. Le bouton <strong>Fériés</strong> dans la barre d'outils affiche ou masque toutes les collections actives.</p>
<table class="help-table">
  <tr><th>Collection</th><th>Description</th></tr>
  <tr><td><strong>États-Unis</strong></td><td>Dix jours fériés fédéraux américains : Nouvel An, Journée MLK, Journée des Présidents, Jour du Souvenir, Fête Nationale, Fête du Travail, Jour de Christophe Colomb, Jour des Anciens Combattants, Action de Grâce, Noël.</td></tr>
  <tr><td><strong>Roue</strong></td><td>La <em>Roue de l'Année</em> — huit fêtes saisonnières celtiques et païennes marquant les tournants du cycle solaire. <strong>Yule</strong> (21 déc.) et <strong>Litha</strong> (21 juin) marquent les solstices. <strong>Ostara</strong> (20 mars) et <strong>Mabon</strong> (22 sept.) les équinoxes. <strong>Imbolc</strong> (1 févr.) honore Brigid, déesse du feu et de l'artisanat. <strong>Beltane</strong> (1 mai) est une fête du feu et de la fertilité. <strong>Lughnasadh</strong> (1 août) célèbre la première récolte en l'honneur du dieu solaire Lugh. <strong>Samhain</strong> (31 oct.) est le Nouvel An celtique — la nuit où le voile entre les vivants et les morts est le plus mince.</td></tr>
  <tr><td><strong>Juif</strong></td><td>Fêtes juives calculées avec précision à partir du calendrier hébraïque. <strong>Roch Hachana</strong> est le Nouvel An juif. <strong>Yom Kippour</strong> est le Jour des Expiations. <strong>Souccot</strong> commémore le voyage dans le désert. <strong>Hanoukka</strong> (8 nuits) est la Fête des Lumières. <strong>Pourim</strong> célèbre l'histoire d'Esther. <strong>Pâque</strong> (8 jours) commémore la sortie d'Égypte. <strong>Chavouot</strong> marque le don de la Torah. Ces dates varient chaque année dans le calendrier grégorien — ce paquet les calcule exactement.</td></tr>
  <tr><td><strong>Hindou</strong></td><td>Grandes fêtes hindoues à des dates grégoriennes approximatives (les vraies dates suivent le Panchanga lunisolaire). <strong>Makar Sankranti</strong> (14 jan.) marque l'entrée du soleil dans le Capricorne. <strong>Holi</strong> est la fête des couleurs, célébrant la victoire du bien sur le mal. <strong>Janmashtami</strong> célèbre la naissance de Krishna. <strong>Ganesh Chaturthi</strong> est la fête de Ganesh. <strong>Navratri</strong> (Neuf Nuits) honore la déesse Durga. <strong>Diwali</strong> — la Fête des Lumières — célèbre le retour de Rama de l'exil.</td></tr>
  <tr><td><strong>Liturgique</strong></td><td>Le calendrier liturgique chrétien occidental, aligné sur le calendrier USCCB. Comprend toutes les solennités, fêtes et mémoires obligatoires. <strong>Pâques</strong> et ses fêtes mobiles (Mercredi des Cendres, Pentecôte, Sacré-Cœur, Dimanche de la Miséricorde) sont calculées par l'algorithme du Comput. <strong>Noël</strong>, l'<strong>Épiphanie</strong> et les fêtes de saints à date fixe tombent chaque année au même jour grégorien. L'<strong>Avent</strong> commence quatre dimanches avant Noël. Le <strong>Christ Roi</strong> clôt l'année liturgique.</td></tr>
  <tr><td><strong>Cherokee</strong></td><td>Dates approximatives des cérémonies saisonnières Cherokee (Tsalagi). Le <strong>Premier Nouvelle Lune du Printemps</strong> ouvre l'année avec des rites de purification. Les <strong>Cérémonies du Maïs Vert</strong> rendent grâce pour la récolte. La <strong>Cérémonie du Nouveau Feu</strong> éteint tous les feux et les rallume depuis une flamme sacrée nouvelle — un renouvellement rituel du monde. <em>Ces dates sont des approximations ; le calendrier cérémoniel Cherokee est fixé par les anciens et les gardiens du savoir.</em></td></tr>
  <tr><td><strong>Iroquois</strong></td><td>Dates approximatives des cérémonies saisonnières Haudenosaunee. La <strong>Cérémonie du Milieu de l'Hiver</strong> (fin jan.) est la plus sacrée de l'année. La <strong>Fête de l'Érable</strong> remercie pour la sève printanière. La <strong>Fête des Fraises</strong> célèbre les premières fraises de l'été. La <strong>Cérémonie du Maïs Vert</strong> rend grâce pour le maïs. <em>Ces dates sont des approximations ; les cérémonies Haudenosaunee sont fixées par la gouvernance traditionnelle.</em></td></tr>
</table>
<hr>
<h3>Cultures Célestes dans le Panneau Ciel Nocturne</h3>
<p>La vue céleste peut superposer deux prismes culturels sur le même ciel physique. Basculez-les depuis la barre d'outils en mode ciel.</p>
<p><strong>Skidi Pawnee :</strong> Les Skidi Pawnee étaient une confédération de villages dans les Grandes Plaines (actuel Nebraska et Kansas) dont la cosmologie était astronomiquement plus élaborée que presque toute autre culture des Plaines. Leurs villages étaient disposés pour refléter des configurations d'étoiles spécifiques ; leur calendrier cérémoniel était régi non par des mois mais par l'apparition d'étoiles particulières au crépuscule et à l'aube. L'<strong>Étoile du Soir</strong> (Vénus à l'ouest) était la mère de toute vie ; l'<strong>Étoile du Matin</strong> (Mars) était son époux et la force de la création. Leur savoir astronomique était encodé dans des cartes peintes sur des peaux d'élan et de bison tannées — parmi les plus anciens documents astronomiques survivants d'Amérique du Nord. Le bouton <strong>Pawnee</strong> étiquette le ciel avec les noms d'étoiles skidi et leurs traditions.</p>
<p><strong>Jyotisha (hindou) :</strong> <em>Jyotisha</em> (ज्योतिष, <em>la science de la lumière</em>) est la tradition védique de l'astronomie et du comput du temps. Au cœur de ce système se trouve le réseau des <strong>27 nakshatras</strong> — maisons lunaires qui divisent l'écliptique en arcs égaux de 13°20′. La Lune parcourt environ un nakshatra par jour. Chaque nakshatra possède une divinité tutélaire, des traditions sacrées issues du Rig Véda et de la Brihat Samhita, et des associations favorables ou défavorables. Le bouton <strong>Jyotisha</strong> étiquette le ciel avec les noms des nakshatras, leurs limites et leurs divinités tutelaires — ainsi le Scorpion devient <em>Jyestha</em> (l'aîné, présidé par Indra) et le Sagittaire révèle <em>Purvashadha</em> (l'invaincu, présidé par les Eaux).</p>
`,

// ─── Italian ────────────────────────────────────────────────────────────────
it: `
<h3>Il Numero dell'Anno</h3>
<p>Questo calendario usa l'<strong>Era dell'Umanità</strong> (Era Olocenica). Il conteggio a.C./d.C. è ancorato all'anno 1 d.C. — la data di nascita di Gesù, stimata da Dionigi il Piccolo nel VI secolo. L'Era dell'Umanità aggiunge 10.000 anni per collocare l'alba della civiltà umana — la rivoluzione agricola — all'Anno 1. L'<a href="https://en.wikipedia.org/wiki/Holocene" target="_blank">Olocene</a> — spesso chiamato l'Età dell'Uomo — è iniziato circa 11.700 anni fa con la fine dell'ultima era glaciale; comprende tutta la storia scritta, ogni rivoluzione tecnologica e ogni civiltà che la nostra specie ha prodotto. È allora che le persone hanno cominciato a coltivare raccolti, allevare animali e costruire abitazioni permanenti: il punto in cui seguire la luna e le stagioni ha smesso di essere facoltativo. A differenza dell'anno 1 d.C., questa origine non appartiene a nessuna religione o tradizione — è il punto di partenza condiviso della storia umana. Accettare il divario di ~300 anni rende l'anno semplice da usare — l'Anno 1 è un punto arbitrario non lontano all'interno dell'era che scegliamo di rappresentare, e ci colloca comunque nel giusto rapporto con essa. Risultato: 2026 d.C. = <strong>12026 HE</strong>.</p>
<p>Lo scarto di 10.000 anni è un numero tondo deliberato — un'approssimazione scelta per avvicinarsi all'effettivo inizio dell'Olocene (intorno al 9.700 a.C.). L'idea è stata proposta indipendentemente più volte: da Gabriel Deville nel 1924, dalla tradizione lettone <em>Dievturība</em> nel 1929, da E.R. Hope nel 1963, e da Cesare Emiliani in una lettera a <em>Nature</em> nel 1993. La numerazione qui è stata concepita senza conoscenza di questa storia. Per saperne di più, vedere l'articolo sul <a href="https://en.wikipedia.org/wiki/Holocene_calendar" target="_blank">calendario olocenico</a>.</p>
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
<p><strong>Emisfero Nord vs. Sud:</strong> Il cielo che vedi dipende interamente da dove ti trovi sulla Terra. Gli osservatori nell'emisfero australe vedono un insieme completamente diverso di costellazioni — la Croce del Sud, il Centauro e lo Scorpione dominano il sud, mentre Orione appare capovolto e la familiare stella polare Polaris è sotto l'orizzonte. Il pannello del cielo mostra le costellazioni calcolate per la tua posizione impostata — assicurati che le tue coordinate in Impostazioni siano corrette.</p>
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
  <tr><th>#</th><th>Cherokee</th><th>Romanizzato</th><th>Italiano</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Luna del Freddo / Mese del Freddo</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Luna delle Ossa (mese della fame)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Luna del Vento</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Luna dei Fiori</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Luna della Semina</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Luna del Mais Verde</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Luna del Mais Maturo</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>Luna della Fine dei Frutti</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Luna delle Noci</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Luna del Raccolto</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Luna del Commercio</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Luna di Neve</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Luna Intercalare (se necessario)</td></tr>
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
<h3>Quando inizia l'anno?</h3>
<p>Il 1° gennaio è una convenzione sorprendentemente recente. Il più antico calendario romano iniziava a marzo — <em>Martius</em>, chiamato così da Marte, il dio della primavera — e mantenne questo punto di riferimento per secoli. L'Europa medievale tornò in gran parte alla primavera dopo la caduta di Roma: l'Inghilterra usò il <strong>25 marzo</strong> (Lady Day, la Festa dell'Annunciazione) come inizio legale dell'anno per quasi 600 anni, dal 1155 fino all'Atto del Calendario del 1752. Quando la Gran Bretagna passò dal calendario giuliano a quello gregoriano e saltò 11 giorni, la vecchia scadenza fiscale del 25 marzo fu spostata al <strong>6 aprile</strong> — dove rimane ancora oggi come inizio dell'anno fiscale britannico, fossile burocratico del vecchio calendario. Lo stesso schema ricorre in tutto il mondo. Il <strong>Nowruz</strong> persiano apre il nuovo anno all'equinozio di primavera (intorno al 20–21 marzo) da almeno 3.000 anni, celebrato da circa 300 milioni di persone in Iran, Asia centrale e Caucaso. In Asia meridionale, i capodanni si concentrano tra marzo e aprile: l'<strong>Ugadi</strong> e il <strong>Gudi Padwa</strong> indù cadono alla luna nuova di Chaitra; il <strong>Puthandu</strong> tamil, l'<strong>Aluth Awurudda</strong> cingalese e il <strong>Vishu</strong> del Kerala cadono tutti intorno al 14 aprile, quando il sole entra nell'Ariete; il <strong>Baisakhi</strong> nel Punjab è sia festa del raccolto che capodanno. Il <strong>Songkran</strong> thailandese (13–15 aprile) discende dallo stesso termine sanscrito <em>sankranti</em> — il passaggio del sole nell'Ariete. L'equinozio di primavera non era solo simbolico: era il momento in cui i mesi della fame finivano e si poteva iniziare a seminare.</p>
<p>Le tradizioni rappresentate qui mostrano lo stesso argomento che si sviluppa in registri diversi. Il <strong>calendario ebraico</strong> li ha entrambi: la Torah chiama Nisan (marzo–aprile) il primo mese — <em>chodesh ha-aviv</em>, «il mese della primavera» — ma Rosh Hashanah al 1° Tishrei in autunno fu formalizzato dalla tradizione rabbinica come anniversario della creazione e divenne il capodanno celebrato. L'anno del <strong>Panchanga indù</strong> inizia alla luna nuova di Chaitra in primavera — lo stesso computo del Vikrama Samvat alla base delle festività di quest'app. La <strong>Ruota dell'Anno celtica</strong> attribuisce l'inizio dell'anno a Samhain (31 ottobre), la festa del fuoco in cui la luce del vecchio anno si spegneva, mentre Beltane (1° maggio) apriva la metà estiva. L'<strong>anno liturgico cristiano</strong> inizia nell'Avvento, quattro domeniche prima di Natale — l'anno inizia nel buio e costruisce verso la Natività. I <strong>Cherokee</strong>, gli <strong>Haudenosaunee</strong> e questo calendario si ancorano tutti al tornante dell'inverno: la prima luna nuova dopo il solstizio, o la cerimonia del pieno inverno stessa. Ancorato alla primavera o all'inverno — il disaccordo non è confusione; riflette due soglie astronomiche genuine, il solstizio e l'equinozio, che segnano entrambi veri punti di svolta dell'anno. Questo calendario ha scelto l'inverno.</p>
<hr>
<h3>I Mesi: Nomi e Origini</h3>
<table class="help-table">
  <tr><th>Mese</th><th>Origine</th><th></th></tr>
  <tr><td><strong>Gennaio</strong></td><td>Giano</td><td>Dio dei varchi e dei nuovi inizi. A due facce — una rivolta all'anno appena trascorso, l'altra verso quello a venire. Ogni soglia, ogni porta, ogni nuovo inizio gli apparteneva.</td></tr>
  <tr><td><strong>Febbraio</strong></td><td><em>Februum</em></td><td>Gli strumenti rituali della festa di purificazione dei <em>Lupercali</em> (15 febbraio). L'intero mese era un periodo di purificazione ed espiazione. Quando marzo era ancora il capodanno, febbraio era l'ultimo mese — quello che spazzava la casa prima che l'anno potesse cominciare.</td></tr>
  <tr><td><strong>Marzo</strong></td><td>Marte</td><td>Dio della guerra. Quando il tempo si scalda e le armate iniziano a marciare.</td></tr>
  <tr><td><strong>Aprile</strong></td><td><em>Aperire</em> o Afrodite</td><td>Probabilmente dal latino <em>aperire</em>, "aprire" — quando i boccioli si aprono, la terra si apre, il mondo si apre dopo l'inverno. Alcuni autori antichi lo collegavano ad Afrodite (Venere), facendone il mese della dea dell'amore. La questione rimane aperta, giustamente.</td></tr>
  <tr><td><strong>Maggio</strong></td><td>Maia</td><td>Dea della crescita e dell'abbondanza. Nella religione romana, una dea terrestre della primavera fertile; nel mito greco, una delle sette Pleiadi, figlia di Atlante, madre di Ermes. I contadini le sacrificavano il 1° maggio.</td></tr>
  <tr><td><strong>Giugno</strong></td><td>Giunone</td><td>Regina degli dei e patrona del matrimonio. Moglie di Giove, custode delle donne in ogni fase della vita. Il suo mese rimane il più popolare per i matrimoni — la sua benedizione non l'ha mai del tutto abbandonato.</td></tr>
  <tr><td><strong>Luglio</strong></td><td>Giulio Cesare</td><td>Per decreto di Marco Antonio nel 44 a.C., l'anno dell'assassinio di Cesare. Originariamente <em>Quintilis</em> — "il quinto mese." Il primo mese dedicato a un mortale, o quasi divino: il Senato aveva già iniziato a divinizzarlo.</td></tr>
  <tr><td><strong>Agosto</strong></td><td>Augusto Cesare</td><td>Per decreto del Senato nell'8 a.C. Originariamente <em>Sextilis</em> — "il sesto mese." Augusto avrebbe preteso che avesse lo stesso numero di giorni di luglio; il giorno in più fu sottratto a febbraio, che non si è mai del tutto ripreso.</td></tr>
  <tr><td><strong>Settembre</strong></td><td><em>Septem</em> (sette)</td><td>Il settimo mese nel vecchio calendario ancorato a marzo. Porta il numero sbagliato da oltre 2.000 anni.</td></tr>
  <tr><td><strong>Ottobre</strong></td><td><em>Octo</em> (otto)</td><td>L'ottavo mese, ora il decimo.</td></tr>
  <tr><td><strong>Novembre</strong></td><td><em>Novem</em> (nove)</td><td>Il nono mese, ora l'undicesimo.</td></tr>
  <tr><td><strong>Dicembre</strong></td><td><em>Decem</em> (dieci)</td><td>Il decimo mese, ora il dodicesimo — e il più ironico, poiché chiude un anno che non era stato progettato per contenere.</td></tr>
</table>
<hr>
<h3>Pacchetti di Festività</h3>
<p>Apri le <strong>Impostazioni</strong> (🗺️) e clicca su uno dei pulsanti <strong>Festività</strong> per scegliere fino a due pacchetti contemporaneamente. Le festività appaiono come bordo colorato sui giorni del calendario e nell'elenco degli eventi. Il pulsante <strong>Festività</strong> nella barra degli strumenti mostra o nasconde tutti i pacchetti attivi.</p>
<table class="help-table">
  <tr><th>Pacchetto</th><th>Descrizione</th></tr>
  <tr><td><strong>USA</strong></td><td>Dieci festività federali americane: Capodanno, Giornata di MLK, Giornata dei Presidenti, Giorno della Memoria, Festa dell'Indipendenza, Festa del Lavoro, Giornata di Colombo, Giornata dei Veterani, Giorno del Ringraziamento, Natale.</td></tr>
  <tr><td><strong>Ruota</strong></td><td>La <em>Ruota dell'Anno</em> — otto festival stagionali celtici e pagani che segnano i punti di svolta del ciclo solare. <strong>Yule</strong> (21 dic.) e <strong>Litha</strong> (21 giu.) segnano i solstizi. <strong>Ostara</strong> (20 mar.) e <strong>Mabon</strong> (22 set.) gli equinozi. <strong>Imbolc</strong> (1 feb.) è sacra a Brigid, dea del fuoco e dell'artigianato. <strong>Beltane</strong> (1 mag.) è una festa del fuoco e della fertilità. <strong>Lughnasadh</strong> (1 ago.) celebra il primo raccolto in onore del dio solare Lugh. <strong>Samhain</strong> (31 ott.) è il Capodanno celtico — la notte in cui il velo tra vivi e morti è più sottile.</td></tr>
  <tr><td><strong>Ebraico</strong></td><td>Festività ebraiche calcolate con precisione dal calendario ebraico. <strong>Rosh Hashanah</strong> è il Capodanno ebraico. <strong>Yom Kippur</strong> è il Giorno dell'Espiazione. <strong>Sukkot</strong> commemora il viaggio nel deserto. <strong>Hanukkah</strong> (8 notti) è la Festa delle Luci. <strong>Purim</strong> celebra la storia di Ester. <strong>Pesach</strong> (8 giorni) commemora l'Esodo dall'Egitto. <strong>Shavuot</strong> celebra il dono della Torah. Queste date variano ogni anno nel calendario gregoriano — questo pacchetto le calcola esattamente.</td></tr>
  <tr><td><strong>Indù</strong></td><td>Principali feste indù a date gregoriane approssimative. <strong>Makar Sankranti</strong> (14 gen.) segna l'ingresso del sole nel Capricorno. <strong>Holi</strong> è la festa dei colori. <strong>Janmashtami</strong> celebra la nascita di Krishna. <strong>Ganesh Chaturthi</strong> è la festa di Ganesha. <strong>Navratri</strong> (Nove Notti) onora la dea Durga. <strong>Diwali</strong> — la Festa delle Luci — celebra il ritorno di Rama dall'esilio.</td></tr>
  <tr><td><strong>Liturgico</strong></td><td>Il calendario liturgico cristiano occidentale, allineato al calendario USCCB. Comprende tutte le solennità, feste e memorie obbligatorie. La <strong>Pasqua</strong> e le sue feste mobili (Mercoledì delle Ceneri, Pentecoste, Sacro Cuore, Domenica della Misericordia) sono calcolate con l'algoritmo del Computo. <strong>Natale</strong>, l'<strong>Epifania</strong> e le feste dei santi a data fissa cadono ogni anno nello stesso giorno gregoriano. L'<strong>Avvento</strong> inizia quattro domeniche prima di Natale. <strong>Cristo Re</strong> chiude l'anno liturgico.</td></tr>
  <tr><td><strong>Cherokee</strong></td><td>Date approssimative delle cerimonie stagionali Cherokee (Tsalagi). Il <strong>Primo Novilunio di Primavera</strong> apre l'anno con riti di purificazione. Le <strong>Cerimonie del Mais Verde</strong> rendono grazie per il raccolto. La <strong>Cerimonia del Nuovo Fuoco</strong> spegne tutti i fuochi e li riaccende da una fiamma sacra nuova. <em>Queste date sono approssimazioni; il calendario cerimoniale Cherokee è stabilito dagli anziani e dai custodi del sapere.</em></td></tr>
  <tr><td><strong>Irochesi</strong></td><td>Date approssimative delle cerimonie stagionali Haudenosaunee. La <strong>Cerimonia del Midwinter</strong> (fine gen.) è la più sacra dell'anno. La <strong>Festa dell'Acero</strong> ringrazia per la linfa primaverile. La <strong>Festa delle Fragole</strong> celebra le prime fragole estive. La <strong>Cerimonia del Mais Verde</strong> ringrazia per il mais. <em>Queste date sono approssimazioni; le cerimonie Haudenosaunee sono stabilite dalla governance tradizionale.</em></td></tr>
</table>
<hr>
<h3>Culture del Cielo nel Pannello Cielo Notturno</h3>
<p>La visualizzazione del cielo può sovrapporre due lenti culturali allo stesso cielo fisico. Attivale dalla barra degli strumenti in modalità cielo.</p>
<p><strong>Skidi Pawnee:</strong> Gli Skidi Pawnee erano una confederazione di villaggi nelle Grandi Pianure (l'attuale Nebraska e Kansas) la cui cosmologia era più elaborata astronomicamente di quasi qualsiasi altra cultura delle pianure. I loro villaggi erano disposti a rispecchiare specifici schemi stellari; il loro calendario cerimoniale era regolato non dai mesi ma dall'apparizione di determinate stelle all'alba e al tramonto. La <strong>Stella della Sera</strong> (Venere a ovest) era la madre di tutta la vita; la <strong>Stella del Mattino</strong> (Marte) era suo marito e la forza della creazione. La loro conoscenza stellare era codificata in carte dipinte su pelle di alce e bufalo conciata — tra i più antichi documenti astronomici sopravvissuti del Nord America. Il pulsante <strong>Pawnee</strong> etichetta il cielo con i nomi stellari Skidi e i loro racconti.</p>
<p><strong>Jyotisha (Indù):</strong> <em>Jyotisha</em> (ज्योतिष, <em>la scienza della luce</em>) è la tradizione vedica di astronomia e misurazione del tempo. Al centro vi è il sistema dei <strong>27 nakshatra</strong> — dimore lunari che dividono l'eclittica in archi uguali di 13°20′. La Luna ne attraversa circa uno al giorno. Ogni nakshatra ha una divinità protettrice, testi sacri del Rig Veda e del Brihat Samhita, e associazioni auspiciose o inauspiciose. Il pulsante <strong>Jyotisha</strong> etichetta il cielo con i nomi dei nakshatra, i loro confini e le divinità protettrici — così lo Scorpione diventa <em>Jyestha</em> (l'anziano, protetto da Indra) e il Sagittario rivela <em>Purvashadha</em> (l'invitto, protetto dalle Acque).</p>
`,

// ─── Spanish ────────────────────────────────────────────────────────────────
es: `
<h3>El Número de Año</h3>
<p>Este calendario usa la <strong>Era Humana</strong> (Era del Holoceno). El conteo habitual a.C./d.C. está anclado en el año 1 d.C. — la fecha del nacimiento de Jesús, estimada por Dionisio el Exiguo en el siglo VI. La Era Humana añade 10.000 años para situar el alba de la civilización humana — la revolución agrícola — en el Año 1. El <a href="https://en.wikipedia.org/wiki/Holocene" target="_blank">Holoceno</a> — frecuentemente llamado la Era de los Humanos — comenzó hace aproximadamente 11.700 años con el fin de la última glaciación; abarca toda la historia escrita, cada revolución tecnológica y cada civilización que nuestra especie ha producido. Fue entonces cuando las personas comenzaron a cultivar, criar animales y construir hogares permanentes: el punto en que rastrear la luna y las estaciones dejó de ser opcional. A diferencia del año 1 d.C., este origen no pertenece a ninguna religión ni tradición — es el punto de partida compartido de la historia humana. Aceptar la brecha de ~300 años mantiene el año simple de usar — el Año 1 es un punto arbitrario no muy adentro de la era que elegimos marcar, y nos sitúa en la relación correcta con ella. Resultado: 2026 d.C. = <strong>12026 HE</strong>.</p>
<p>El desfase de 10.000 años es un número redondo deliberado — una aproximación elegida para caer cerca del inicio real del Holoceno (alrededor del 9.700 a.C.). La idea ha sido propuesta independientemente varias veces: por Gabriel Deville en 1924, la tradición letona <em>Dievturība</em> en 1929, E.R. Hope en 1963, y Cesare Emiliani en una carta a <em>Nature</em> en 1993. La numeración aquí fue concebida sin conocimiento de esa historia. Para más información, ver el artículo sobre el <a href="https://en.wikipedia.org/wiki/Holocene_calendar" target="_blank">calendario holocénico</a>.</p>
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
<p><strong>Hemisferio Norte vs. Sur:</strong> El cielo que ves depende completamente de dónde estés en la Tierra. Los observadores en el hemisferio sur ven un conjunto completamente diferente de constelaciones — la Cruz del Sur, el Centauro y el Escorpión dominan el sur, mientras que Orión aparece invertido y la familiar estrella polar Polaris está bajo el horizonte. El panel del cielo muestra constelaciones calculadas para tu ubicación configurada — asegúrate de que tus coordenadas en Configuración sean correctas.</p>
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
  <tr><th>#</th><th>Cherokee</th><th>Romanizado</th><th>Español</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Luna del Frío / Mes del Frío</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Luna de los Huesos (mes de hambre)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Luna del Viento</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Luna de las Flores</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Luna de la Siembra</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Luna del Maíz Verde</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Luna del Maíz Maduro</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>Luna del Fin de las Frutas</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Luna de las Nueces</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Luna de la Cosecha</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Luna del Comercio</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Luna de Nieve</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Luna Intercalar (si es necesario)</td></tr>
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
<h3>¿Cuándo comienza el año?</h3>
<p>El 1 de enero es una convención sorprendentemente reciente. El más antiguo calendario romano comenzaba en marzo — <em>Martius</em>, nombrado en honor a Marte, el dios de la primavera — y mantuvo ese punto de referencia durante siglos. Europa medieval volvió en gran medida a la primavera tras la caída de Roma: Inglaterra utilizó el <strong>25 de marzo</strong> (Lady Day, la Fiesta de la Anunciación) como inicio legal del año durante casi 600 años, desde 1155 hasta la Ley del Calendario de 1752. Cuando Gran Bretaña pasó del calendario juliano al gregoriano y eliminó 11 días, la antigua fecha límite fiscal del 25 de marzo se adelantó al <strong>6 de abril</strong> — donde permanece hoy como inicio del año fiscal británico, fósil burocrático del viejo calendario. El mismo patrón se repite en todo el mundo. El <strong>Nowruz</strong> persa ha abierto el año nuevo en el equinoccio de primavera (alrededor del 20–21 de marzo) durante al menos 3.000 años, celebrado por unos 300 millones de personas en Irán, Asia Central y el Cáucaso. En el sur de Asia, los años nuevos se agrupan entre marzo y abril: el <strong>Ugadi</strong> y el <strong>Gudi Padwa</strong> hindúes caen en la luna nueva de Chaitra; el <strong>Puthandu</strong> tamil, el <strong>Aluth Awurudda</strong> cingalés y el <strong>Vishu</strong> de Kerala caen todos alrededor del 14 de abril, cuando el sol entra en Aries; el <strong>Baisakhi</strong> en el Punjab es a la vez fiesta de la cosecha y año nuevo. El <strong>Songkran</strong> tailandés (13–15 de abril) desciende del mismo término sánscrito <em>sankranti</em> — el paso del sol a Aries. El equinoccio de primavera no era solo simbólico: era el momento en que los meses de hambre terminaban y podía comenzar la siembra.</p>
<p>Las tradiciones representadas aquí muestran el mismo argumento en diferentes registros. El <strong>calendario judío</strong> lo tiene en ambos sentidos: la Torá llama a Nisán (marzo–abril) el primer mes — <em>chodesh ha-aviv</em>, «el mes de la primavera» — pero Rosh Hashaná en Tishrei 1 en otoño fue formalizado por la tradición rabínica como aniversario de la creación y se convirtió en el año nuevo celebrado. El año del <strong>Panchanga hindú</strong> comienza con la luna nueva de Chaitra en primavera — el mismo cómputo del Vikrama Samvat que subyace a las festividades de esta aplicación. La <strong>Rueda del Año celta</strong> asigna el comienzo del año a Samhain (31 de octubre), la fiesta del fuego en que la luz del año viejo se apagaba, mientras que Beltane (1 de mayo) abría la mitad estival. El <strong>año litúrgico cristiano</strong> comienza en Adviento, cuatro domingos antes de Navidad — el año comienza en la oscuridad y se construye hacia la Natividad. Los <strong>Cherokee</strong>, los <strong>Haudenosaunee</strong> y este calendario se anclan todos al giro del invierno: la primera luna nueva tras el solsticio, o la ceremonia del pleno invierno. Anclado en la primavera o en el invierno — el desacuerdo no es confusión; refleja dos umbrales astronómicos genuinos, el solsticio y el equinoccio, que ambos marcan verdaderos puntos de inflexión del año. Este calendario eligió el invierno.</p>
<hr>
<h3>Los Meses: Nombres y Orígenes</h3>
<table class="help-table">
  <tr><th>Mes</th><th>Origen</th><th></th></tr>
  <tr><td><strong>Enero</strong></td><td>Jano</td><td>Dios de las puertas y los comienzos. De dos caras — una mirando al año recién terminado, otra hacia el año que comienza. Cada umbral, cada puerta, cada nuevo inicio le pertenecía.</td></tr>
  <tr><td><strong>Febrero</strong></td><td><em>Februum</em></td><td>Los instrumentos rituales de la fiesta de purificación de las <em>Lupercales</em> (15 de febrero). El mes entero era un tiempo de purificación y expiación. Cuando marzo era aún el año nuevo, febrero era el último mes — el que barría la casa antes de que el año pudiera comenzar.</td></tr>
  <tr><td><strong>Marzo</strong></td><td>Marte</td><td>Dios de la guerra. Cuando el tiempo se calienta y los ejércitos empiezan a marchar.</td></tr>
  <tr><td><strong>Abril</strong></td><td><em>Aperire</em> o Afrodita</td><td>Probablemente del latín <em>aperire</em>, "abrir" — cuando los brotes se abren, la tierra se abre, el mundo se abre tras el invierno. Algunos escritores antiguos lo vinculaban a Afrodita (Venus), haciendo de abril el mes propio de la diosa del amor. La cuestión sigue abierta, apropiadamente.</td></tr>
  <tr><td><strong>Mayo</strong></td><td>Maia</td><td>Diosa del crecimiento y la abundancia. En la religión romana, una diosa terrena de la primavera fértil; en el mito griego, una de las siete Pléyades, hija de Atlas, madre de Hermes. Los agricultores le ofrecían sacrificios el 1 de mayo.</td></tr>
  <tr><td><strong>Junio</strong></td><td>Juno</td><td>Reina de los dioses y patrona del matrimonio. Esposa de Júpiter, guardiana de las mujeres en cada etapa de su vida. Su mes sigue siendo el más popular para las bodas — su bendición nunca lo ha abandonado del todo.</td></tr>
  <tr><td><strong>Julio</strong></td><td>Julio César</td><td>Por decreto de Marco Antonio en el 44 a.C., el año del asesinato de César. Originalmente <em>Quintilis</em> — "el quinto mes." El primer mes nombrado en honor a un mortal, o casi divino: el Senado ya había comenzado a divinizarlo.</td></tr>
  <tr><td><strong>Agosto</strong></td><td>Augusto César</td><td>Por decreto del Senado en el 8 a.C. Originalmente <em>Sextilis</em> — "el sexto mes." Augusto supuestamente insistió en que tuviera tantos días como julio; el día extra se tomó de febrero, del que nunca se ha recuperado del todo.</td></tr>
  <tr><td><strong>Septiembre</strong></td><td><em>Septem</em> (siete)</td><td>El séptimo mes en el antiguo calendario anclado en marzo. Lleva el número equivocado desde hace más de 2.000 años.</td></tr>
  <tr><td><strong>Octubre</strong></td><td><em>Octo</em> (ocho)</td><td>El octavo mes, ahora el décimo.</td></tr>
  <tr><td><strong>Noviembre</strong></td><td><em>Novem</em> (nueve)</td><td>El noveno mes, ahora el undécimo.</td></tr>
  <tr><td><strong>Diciembre</strong></td><td><em>Decem</em> (diez)</td><td>El décimo mes, ahora el duodécimo — y el más irónico, ya que cierra un año para el que nunca fue diseñado.</td></tr>
</table>
<hr>
<h3>Colecciones de Festivos</h3>
<p>Abre los <strong>Ajustes</strong> (🗺️) y haz clic en uno de los botones de <strong>Festivos</strong> para elegir hasta dos colecciones a la vez. Los festivos aparecen con un borde de color en los días del calendario y en la lista de eventos. El botón <strong>Festivos</strong> en la barra de herramientas muestra u oculta todas las colecciones activas.</p>
<table class="help-table">
  <tr><th>Colección</th><th>Descripción</th></tr>
  <tr><td><strong>EE.UU.</strong></td><td>Diez festivos federales de EE. UU.: Año Nuevo, Día de MLK, Día de los Presidentes, Día de los Caídos, Día de la Independencia, Día del Trabajo, Día de Colón, Día de los Veteranos, Acción de Gracias, Navidad.</td></tr>
  <tr><td><strong>Rueda</strong></td><td>La <em>Rueda del Año</em> — ocho festividades estacionales celtas y paganas que marcan los puntos de inflexión del ciclo solar. <strong>Yule</strong> (21 dic.) y <strong>Litha</strong> (21 jun.) marcan los solsticios. <strong>Ostara</strong> (20 mar.) y <strong>Mabon</strong> (22 sep.) los equinoccios. <strong>Imbolc</strong> (1 feb.) honra a Brigid, diosa del fuego y la artesanía. <strong>Beltane</strong> (1 may.) es una fiesta del fuego y la fertilidad. <strong>Lughnasadh</strong> (1 ago.) celebra la primera cosecha en honor al dios solar Lugh. <strong>Samhain</strong> (31 oct.) es el Año Nuevo celta — la noche en que el velo entre vivos y muertos es más tenue.</td></tr>
  <tr><td><strong>Judío</strong></td><td>Festividades judías calculadas con precisión a partir del calendario hebreo. <strong>Rosh Hashaná</strong> es el Año Nuevo judío. <strong>Yom Kipur</strong> es el Día de la Expiación. <strong>Sucot</strong> conmemora el viaje por el desierto. <strong>Janucá</strong> (8 noches) es la Fiesta de las Luces. <strong>Purim</strong> celebra la historia de Ester. <strong>Pésaj</strong> (8 días) conmemora el Éxodo de Egipto. <strong>Shavuot</strong> celebra la entrega de la Torá. Estas fechas varían cada año en el calendario gregoriano — este paquete las calcula exactamente.</td></tr>
  <tr><td><strong>Hindú</strong></td><td>Grandes festividades hindúes con fechas gregorianas aproximadas. <strong>Makar Sankranti</strong> (14 ene.) marca la entrada del sol en Capricornio. <strong>Holi</strong> es la fiesta de los colores. <strong>Janmashtami</strong> celebra el nacimiento de Krishna. <strong>Ganesh Chaturthi</strong> es la fiesta de Ganesha. <strong>Navratri</strong> (Nueve Noches) honra a la diosa Durga. <strong>Diwali</strong> — la Fiesta de las Luces — celebra el regreso de Rama del exilio.</td></tr>
  <tr><td><strong>Litúrgico</strong></td><td>El calendario litúrgico cristiano occidental, alineado con el calendario USCCB. Incluye todas las solemnidades, fiestas y memorias obligatorias. La <strong>Pascua</strong> y sus fiestas móviles (Miércoles de Ceniza, Pentecostés, Sagrado Corazón, Domingo de la Misericordia) se calculan mediante el algoritmo del Cómputo. <strong>Navidad</strong>, la <strong>Epifanía</strong> y las fiestas de santos de fecha fija caen en el mismo día gregoriano cada año. El <strong>Adviento</strong> comienza cuatro domingos antes de Navidad. <strong>Cristo Rey</strong> cierra el año litúrgico.</td></tr>
  <tr><td><strong>Cherokee</strong></td><td>Fechas aproximadas de las ceremonias estacionales Cherokee (Tsalagi). La <strong>Primera Luna Nueva de Primavera</strong> abre el año con ritos de purificación. Las <strong>Ceremonias del Maíz Verde</strong> dan gracias por la cosecha. La <strong>Ceremonia del Nuevo Fuego</strong> apaga todos los fuegos y los reaviva desde una llama sagrada nueva. <em>Estas fechas son aproximaciones; el calendario ceremonial Cherokee es fijado por los ancianos y guardianes del conocimiento.</em></td></tr>
  <tr><td><strong>Iroqueses</strong></td><td>Fechas aproximadas de las ceremonias estacionales Haudenosaunee. La <strong>Ceremonia del Midwinter</strong> (finales de ene.) es la más sagrada del año. La <strong>Fiesta del Arce</strong> agradece la savia primaveral. La <strong>Fiesta de las Fresas</strong> celebra las primeras fresas del verano. La <strong>Ceremonia del Maíz Verde</strong> agradece el maíz. <em>Estas fechas son aproximaciones; las ceremonias Haudenosaunee las fija la gobernanza tradicional.</em></td></tr>
</table>
<hr>
<h3>Culturas del Cielo en el Panel del Cielo Nocturno</h3>
<p>La vista del cielo puede superponer dos lentes culturales sobre el mismo cielo físico. Actívalas desde la barra de herramientas en el modo cielo.</p>
<p><strong>Skidi Pawnee:</strong> Los Skidi Pawnee eran una confederación de aldeas en las Grandes Llanuras (el actual Nebraska y Kansas) cuya cosmología era más elaborada astronómicamente que casi cualquier otra cultura de las llanuras. Sus aldeas estaban dispuestas para reflejar patrones estelares específicos; su calendario ceremonial se regía no por los meses sino por la aparición de determinadas estrellas al anochecer y al amanecer. La <strong>Estrella de la Tarde</strong> (Venus al oeste) era la madre de toda la vida; la <strong>Estrella de la Mañana</strong> (Marte) era su esposo y la fuerza de la creación. Su conocimiento estelar estaba codificado en mapas pintados sobre cuero de alce y bisonte curtido — algunos de los documentos astronómicos más antiguos conservados de América del Norte. El interruptor <strong>Pawnee</strong> etiqueta el cielo con los nombres estelares Skidi y sus leyendas.</p>
<p><strong>Jyotisha (Hindú):</strong> <em>Jyotisha</em> (ज्योतिष, <em>la ciencia de la luz</em>) es la tradición védica de la astronomía y la medición del tiempo. En su centro se encuentra el sistema de los <strong>27 nakshatra</strong> — mansiones lunares que dividen la eclíptica en arcos iguales de 13°20′. La Luna atraviesa aproximadamente uno por día. Cada nakshatra tiene una deidad protectora, textos sagrados del Rig Veda y el Brihat Samhita, y asociaciones auspiciosas o inauspiciosas. El interruptor <strong>Jyotisha</strong> etiqueta el cielo con los nombres de los nakshatra, sus límites y sus deidades protectoras — así Escorpio se convierte en <em>Jyestha</em> (el mayor, protegido por Indra) y Sagitario revela a <em>Purvashadha</em> (el invicto, protegido por las Aguas).</p>
`,

// ─── Swahili ─────────────────────────────────────────────────────────────────
sw: `
<h3>Nambari ya Mwaka</h3>
<p>Kalenda hii inatumia <strong>Enzi ya Binadamu</strong> (Enzi ya Holocene). Hesabu ya kawaida ya KK/BK imeunganishwa na mwaka 1 BK — tarehe ya kuzaliwa kwa Yesu, iliyokadiriwa na Dionysius Exiguus katika karne ya 6. Enzi ya Binadamu inaongeza miaka 10,000 kuweka mwanzo wa ustaarabu wa binadamu — mapinduzi ya kilimo — katika Mwaka 1. <a href="https://en.wikipedia.org/wiki/Holocene" target="_blank">Enzi ya Holocene</a> — mara nyingi huitwa Enzi ya Wanadamu — ilianza takriban miaka 11,700 iliyopita wakati Zama za Barafu zilipomalizika; inajumuisha historia yote iliyoandikwa, kila mapinduzi ya kiteknolojia, na kila ustaarabu ambao binadamu amezalisha. Ndipo watu walianza kulima mazao, kufuga wanyama na kujenga makazi ya kudumu: wakati ambapo kufuatilia mwezi na misimu kulikuwa muhimu kwa maisha. Tofauti na mwaka 1 BK, asili hii haina uhusiano na dini au mila yoyote moja — ni hatua ya pamoja ya historia ya binadamu. Kukubali pengo la ~miaka 300 hufanya mwaka kuwa rahisi kutumia — Mwaka 1 ni hatua ya kiholela si mbali ndani ya enzi tunayochagua kuwakilisha, na bado inatuweka katika uhusiano sahihi nazo. Matokeo: 2026 BK = <strong>12026 HE</strong>.</p>
<p>Mabadiliko ya miaka 10,000 ni nambari ya mviringo ya makusudi — takriban iliyochaguliwa kuwa karibu na mwanzo halisi wa Holocene (karibu 9,700 KK). Wazo hili limependekezwa kwa kujitegemea mara nyingi: na Gabriel Deville mwaka 1924, mila ya Kilatvia ya <em>Dievturība</em> mwaka 1929, E.R. Hope mwaka 1963, na Cesare Emiliani katika barua kwa <em>Nature</em> mwaka 1993. Nambari hapa ilibuniwa bila kujua historia hiyo. Kwa maelezo zaidi, tazama makala kuhusu <a href="https://en.wikipedia.org/wiki/Holocene_calendar" target="_blank">kalenda ya Holocene</a>.</p>
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
<p><strong>Ulimwengu wa Kaskazini dhidi ya Kusini:</strong> Anga unayoona inategemea kabisa uko wapi duniani. Waangalizi katika ulimwengu wa kusini wanaona mkusanyiko tofauti kabisa wa nyota — Msalaba wa Kusini, Centaurus na Scorpius vinatawala kusini, huku Orion akionekana kichwa chini na nyota ya kaskazini inayojulikana Polaris iko chini ya upeo wa macho. Paneli ya anga inaonyesha nyota zilizohesabiwa kwa mahali pako ulioweka — hakikisha kuratibu zako katika Mipangilio ni sahihi.</p>
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
  <tr><th>#</th><th>Cherokee</th><th>Ilivyoandikwa</th><th>Kiswahili</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Mwezi wa Baridi / Mwezi wa Baridi</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Mwezi wa Mifupa (mwezi wa njaa)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Mwezi wa Upepo</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Mwezi wa Maua</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Mwezi wa Kupanda</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Mwezi wa Mahindi Mabichi</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Mwezi wa Mahindi Yaliyoiva</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>Mwezi wa Mwisho wa Matunda</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Mwezi wa Karanga</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Mwezi wa Mavuno</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Mwezi wa Biashara</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Mwezi wa Theluji</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Mwezi wa Ziada (inapohitajika)</td></tr>
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
<h3>Mwaka Huanza Lini?</h3>
<p>Tarehe 1 Januari ni mwongozo wa hivi karibuni sana kwa historia. Kalenda ya zamani kabisa ya Kirumi ilianza Machi — <em>Martius</em>, ikiwa imepewa jina la Marte, mungu wa chemchemi — na iliendelea na msingi huo kwa karne nyingi. Ulaya wa Zama za Kati ulirudi sana kwenye chemchemi baada ya kuanguka kwa Roma: Uingereza ulitumia <strong>Machi 25</strong> (Lady Day, Sikukuu ya Tangazo) kama mwanzo wa kisheria wa mwaka kwa karibu miaka 600, kutoka 1155 hadi Sheria ya Kalenda ya 1752. Uingereza ulipobadilisha kutoka kalenda ya Julian hadi Gregorian na kuacha siku 11, tarehe ya zamani ya kodi ya Machi 25 ilihamishwa hadi <strong>Aprili 6</strong> — ambapo inabaki leo kama mwanzo wa mwaka wa kodi wa Uingereza, mabaki ya kiserikali ya kalenda ya zamani. Mfumo huo huo unarudiwa duniani kote. <strong>Nowruz</strong> ya Kiajemi imefungua mwaka mpya katika ikwinoksi ya masika (karibu Machi 20–21) kwa angalau miaka 3,000, bado inaadhimishwa na watu karibu milioni 300 nchini Iran, Asia ya Kati, na Caucasus. Katika Asia ya Kusini, miaka mipya inajikusanyika Machi na Aprili: <strong>Ugadi</strong> na <strong>Gudi Padwa</strong> za Kihindu zinaanguka kwenye mwezi mpya wa Chaitra; <strong>Puthandu</strong> ya Kitamil, <strong>Aluth Awurudda</strong> ya Kisinhala, na <strong>Vishu</strong> ya Kerala zote zinaanguka karibu Aprili 14, jua linapoingia Kondoo; <strong>Baisakhi</strong> Punjab ni sherehe ya mavuno na mwaka mpya pia. <strong>Songkran</strong> ya Kithai (Aprili 13–15) inatoka kutoka neno lile lile la Kisanskriti <em>sankranti</em> — kupita kwa jua hadi Kondoo. Ikwinoksi ya masika haikuwa mfano tu: ilikuwa wakati miezi ya njaa ilipomalizika na kupanda mbegu kuliweza kuanza.</p>
<p>Mila zinazowakilishwa hapa zinaonyesha hoja ile ile katika sajili tofauti. <strong>Kalenda ya Kiyahudi</strong> ina njia zote mbili: Torati inaiita Nisan (Machi–Aprili) mwezi wa kwanza — <em>chodesh ha-aviv</em>, «mwezi wa chemchemi» — lakini Rosh Hashana siku ya kwanza ya Tishrei katika vuli ilirasimishwa na mila ya marabi kama kumbukumbu ya uumbaji na ikawa mwaka mpya unaoadhimishwa. Mwaka wa <strong>Panchanga ya Kihindu</strong> unaanza na mwezi mpya wa Chaitra chemchemini — hesabu ile ile ya Vikrama Samvat inayounga mkono sherehe katika programu hii. <strong>Gurudumu la Mwaka la Kikelti</strong> linaipa mwanzo wa mwaka Samhain (Oktoba 31), sherehe ya moto wakati nuru ya mwaka wa zamani ilipozimika, huku Beltane (Mei 1) ikifungua nusu ya majira ya joto. <strong>Mwaka wa kiliturujia wa Kikristo</strong> unaanza katika Adventi, Jumapili nne kabla ya Krismasi — mwaka unaanza gizani na kujenga hadi Kuzaliwa kwa Bwana. <strong>Cherokee</strong>, <strong>Haudenosaunee</strong>, na kalenda hii zote zinanasa katika kugeuza kwa msimu wa baridi: mwezi mpya wa kwanza baada ya solstisi, au sherehe ya baridi kuu yenyewe. Imefungwa katika chemchemi au baridi kuu — kutokubaliana si mkanganyiko; inaonyesha vizingiti viwili halisi vya astronomia, solstisi na ikwinoksi, ambavyo vyote vinaashiria mabadiliko ya kweli katika mwaka. Kalenda hii ilichagua msimu wa baridi.</p>
<hr>
<h3>Miezi: Majina na Asili Yake</h3>
<table class="help-table">
  <tr><th>Mwezi</th><th>Asili</th><th></th></tr>
  <tr><td><strong>Januari</strong></td><td>Janus</td><td>Mungu wa milango na mwanzo mpya. Ana nyuso mbili — moja ikitazama mwaka uliopita, nyingine mbele kuelekea mpya. Kila kizingiti, kila lango, kila mwanzo mpya kilikuwa chake.</td></tr>
  <tr><td><strong>Februari</strong></td><td><em>Februum</em></td><td>Vifaa vya ibada vya sherehe ya utakaso ya <em>Lupercalia</em> (Februari 15). Mwezi mzima ulikuwa wakati wa utakaso na upatanisho. Machi ilipokuwa bado mwanzo wa mwaka, Februari ulikuwa mwezi wa mwisho — ule uliofagia nyumba kabla mwaka haujaweza kuanza.</td></tr>
  <tr><td><strong>Machi</strong></td><td>Mars (Marte)</td><td>Mungu wa vita. Hali ya hewa inapowaka na majeshi yanapoanza kutembea.</td></tr>
  <tr><td><strong>Aprili</strong></td><td><em>Aperire</em> au Aphrodite</td><td>Labda kutoka kwa <em>aperire</em> ya Kilatini, "kufungua" — wakati machipuo yanafunguka, ardhi inafunguka, ulimwengu unafunguka baada ya baridi. Waandishi wengine wa kale waliunganisha na Aphrodite (Venus), wakifanya Aprili mwezi wa mungu wa upendo. Swali bado liko wazi, ipasavyo.</td></tr>
  <tr><td><strong>Mei</strong></td><td>Maia</td><td>Mungu wa ukuaji na ongezeko. Katika dini ya Kirumi, mungu wa ardhi wa chemchemi ya kuzaa; katika hadithi za Kigiriki, mmoja wa Pleiades saba, binti wa Atlas, mama wa Hermes. Wakulima walimtoa sadaka tarehe 1 Mei.</td></tr>
  <tr><td><strong>Juni</strong></td><td>Juno</td><td>Malkia wa miungu na msimamizi wa ndoa. Mke wa Jupiter, mlinda wa wanawake katika kila hatua ya maisha. Mwezi wake bado ndio maarufu zaidi kwa harusi — baraka yake haukumwacha kamwe.</td></tr>
  <tr><td><strong>Julai</strong></td><td>Julius Caesar</td><td>Kwa amri ya Mark Antony mwaka 44 KK, mwaka wa mauaji ya Caesar. Awali uliitwa <em>Quintilis</em> — "mwezi wa tano." Mwezi wa kwanza kuliwa jina la mwanadamu, au karibu na mungu: Seneti ilikuwa tayari imeanza kumfanya mungu.</td></tr>
  <tr><td><strong>Agosti</strong></td><td>Augustus Caesar</td><td>Kwa amri ya Seneti mwaka 8 KK. Awali uliitwa <em>Sextilis</em> — "mwezi wa sita." Augustus inadaiwa alisisitiza uwe na siku 31 kama Julai; siku ya ziada iliondolewa kutoka Februari, ambao haujapona kamwe.</td></tr>
  <tr><td><strong>Septemba</strong></td><td><em>Septem</em> (saba)</td><td>Mwezi wa saba katika kalenda ya zamani iliyokuwa imefungwa kwa Machi. Umebeba nambari isiyo sahihi kwa zaidi ya miaka 2,000.</td></tr>
  <tr><td><strong>Oktoba</strong></td><td><em>Octo</em> (nane)</td><td>Mwezi wa nane, sasa wa kumi.</td></tr>
  <tr><td><strong>Novemba</strong></td><td><em>Novem</em> (tisa)</td><td>Mwezi wa tisa, sasa wa kumi na moja.</td></tr>
  <tr><td><strong>Desemba</strong></td><td><em>Decem</em> (kumi)</td><td>Mwezi wa kumi, sasa wa kumi na mbili — na wenye kejeli zaidi, kwani unafunga mwaka ambao haukujengwa kuushikilia.</td></tr>
</table>
<hr>
<h3>Pakiti za Likizo</h3>
<p>Fungua <strong>Mipangilio</strong> (🗺️) na ubonyeze kitufe chochote cha <strong>Likizo</strong> ili kuchagua hadi pakiti mbili kwa wakati mmoja. Likizo zinaonekana kama mpaka wa rangi kwenye siku za kalenda na katika orodha ya matukio. Kitufe cha <strong>Likizo</strong> kwenye upau wa zana kinaonyesha au kuficha pakiti zote zinazofanya kazi.</p>
<table class="help-table">
  <tr><th>Pakiti</th><th>Maelezo</th></tr>
  <tr><td><strong>Marekani</strong></td><td>Likizo kumi za shirikisho la Marekani: Mwaka Mpya, Siku ya MLK, Siku ya Marais, Siku ya Ukumbusho, Siku ya Uhuru, Siku ya Wafanyakazi, Siku ya Columbus, Siku ya Maveterani, Siku ya Shukrani, Krismasi.</td></tr>
  <tr><td><strong>Gurudumu</strong></td><td><em>Gurudumu la Mwaka</em> — sherehe nane za msimu za Kikelti na kipagani zinazoashiria mabadiliko ya mzunguko wa jua. <strong>Yule</strong> (21 Des.) na <strong>Litha</strong> (21 Jun.) zinaashiria solstisi. <strong>Ostara</strong> (20 Mar.) na <strong>Mabon</strong> (22 Sep.) zinaashiria equinox. <strong>Imbolc</strong> (1 Feb.) inaheshimu Brigid, mungu wa moto na ufundi. <strong>Beltane</strong> (1 Mei) ni sherehe ya moto na uzazi. <strong>Lughnasadh</strong> (1 Ago.) inaadhimisha mavuno ya kwanza kwa heshima ya mungu wa jua Lugh. <strong>Samhain</strong> (31 Okt.) ni Mwaka Mpya wa Kikelti — usiku ambapo pazia kati ya walio hai na wafu ni nyembamba zaidi.</td></tr>
  <tr><td><strong>Kiyahudi</strong></td><td>Sikukuu za Kiyahudi zilizohesabiwa kwa usahihi kutoka kwa kalenda ya Kiebrania. <strong>Rosh Hashana</strong> ni Mwaka Mpya wa Kiyahudi. <strong>Yom Kippur</strong> ni Siku ya Upatanisho. <strong>Sukkot</strong> inakumbuka safari ya jangwani. <strong>Hanukkah</strong> (usiku 8) ni Sherehe ya Taa. <strong>Purim</strong> inaadhimisha hadithi ya Esther. <strong>Pasaka</strong> (siku 8) inakumbuka Kutoka Misri. <strong>Shavuot</strong> inaashiria kutolewa kwa Torah. Tarehe hizi zinabadilika kila mwaka kwenye kalenda ya Kigiriki — pakiti hii inazihesabu kwa usahihi.</td></tr>
  <tr><td><strong>Kihindi</strong></td><td>Sherehe kubwa za Kihindu kwa tarehe takriban za Kigiriki. <strong>Makar Sankranti</strong> (14 Jan.) inaashiria jua kuingia Capricorni. <strong>Holi</strong> ni sherehe ya rangi. <strong>Janmashtami</strong> inaadhimisha kuzaliwa kwa Krishna. <strong>Ganesh Chaturthi</strong> ni sherehe ya Ganesha. <strong>Navratri</strong> (Usiku Tisa) inaheshimu mungu wa kike Durga. <strong>Diwali</strong> — Sherehe ya Taa — inaadhimisha kurudi kwa Rama kutoka uhamishoni.</td></tr>
  <tr><td><strong>Liturujia</strong></td><td>Kalenda ya liturujia ya Kikristo ya Magharibi, iliyolingana na kalenda ya USCCB. Inajumuisha sherehe zote kuu, sikukuu, na kumbukumbu za lazima. <strong>Pasaka</strong> na sikukuu zake zinazobadilika (Jumatano ya Majivu, Pentekoste, Moyo Mtakatifu, Jumapili ya Huruma) zinahesabiwa kwa algoriti ya Computus. <strong>Krismasi</strong>, <strong>Epifania</strong>, na siku za watakatifu za tarehe fasta zinaanguka kwenye siku ile ile ya Kigiriki kila mwaka. <strong>Adventi</strong> inaanza Jumapili nne kabla ya Krismasi. <strong>Kristo Mfalme</strong> inafunga mwaka wa liturujia.</td></tr>
  <tr><td><strong>Cherokee</strong></td><td>Tarehe takriban za sherehe za msimu za Cherokee (Tsalagi). <strong>Mwezi Mpya wa Kwanza wa Chemchemi</strong> unafungua mwaka na ibada za utakaso. <strong>Sherehe za Mahindi Mabichi</strong> zinatoa shukrani kwa mavuno. <strong>Sherehe ya Moto Mpya</strong> inazima moto wote na kuuwasha tena kutoka mwali mpya mtakatifu. <em>Tarehe hizi ni takriban; kalenda ya sherehe ya Cherokee inaamuliwa na wazee na wabeba maarifa.</em></td></tr>
  <tr><td><strong>Haudenosaunee</strong></td><td>Tarehe takriban za sherehe za msimu za Haudenosaunee. <strong>Sherehe ya Katikati ya Baridi</strong> (mwishoni mwa Jan.) ndiyo takatifu zaidi ya mwaka. <strong>Sherehe ya Mti wa Maple</strong> inashukuru utomvu wa mapema ya spring. <strong>Sherehe ya Strawberry</strong> inaadhimisha strawberry za kwanza za majira ya joto. <strong>Sherehe ya Mahindi Mabichi</strong> inashukuru mahindi. <em>Tarehe hizi ni takriban; sherehe za Haudenosaunee zinaamuliwa na utawala wa jadi.</em></td></tr>
</table>
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
<p><strong>Caelum Boreale et Australe:</strong> Caelum quod vides omnino ex loco tuo in terra pendet. Observatores in hemisphaerio australi omnino diversam collectionem constellationum vident — Crux Australis, Centaurus et Scorpius meridiem dominantur, dum Orion inversus apparet et stella borealis nota Polaris infra horizontem iacet. Tabula caeli constellationes pro loco tuo constituto computat — cura ut coordinatae tuae in Optionibus rectae sint.</p>
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
  <tr><th>#</th><th>Cherokee</th><th>Romanice</th><th>Latine</th></tr>
  <tr><td>1</td><td>ᏅᏓ ᏕᎦᎸᏍᏗ</td><td>Nvda Degalvsgdi</td><td>Luna Frigoris / Mensis Frigoris</td></tr>
  <tr><td>2</td><td>ᎧᎦᎵ</td><td>Kagali</td><td>Luna Ossium (mensis famis)</td></tr>
  <tr><td>3</td><td>ᎠᏅᏱ</td><td>Anvyi</td><td>Luna Venti</td></tr>
  <tr><td>4</td><td>ᎧᎾᎦᎵ</td><td>Kanagali</td><td>Luna Florum</td></tr>
  <tr><td>5</td><td>ᎠᏂᏍᎦᏯ ᎦᎵᏉᎩ</td><td>Anisgaya Galiquogi</td><td>Luna Sationis</td></tr>
  <tr><td>6</td><td>ᏕᎢᏃᎯᏍᏗ</td><td>Deinohisdi</td><td>Luna Frumenti Viridis</td></tr>
  <tr><td>7</td><td>ᎫᏰᏉᏂ</td><td>Guyequoni</td><td>Luna Frumenti Maturi</td></tr>
  <tr><td>8</td><td>ᎦᎶᏂᎨᏍᏗ</td><td>Galonigesti</td><td>Luna Finis Fructuum</td></tr>
  <tr><td>9</td><td>ᏚᎵᏍᏗ</td><td>Dulisdi</td><td>Luna Nucum</td></tr>
  <tr><td>10</td><td>ᏚᏂᏅᏗ</td><td>Duninvdi</td><td>Luna Messis</td></tr>
  <tr><td>11</td><td>ᏅᏓᏕᏆ</td><td>Nvdadequa</td><td>Luna Commercii</td></tr>
  <tr><td>12</td><td>ᎥᏍᎩᏱ</td><td>Vsgiyi</td><td>Luna Nivis</td></tr>
  <tr><td>13</td><td>ᏅᎩᏓᏔᏏ</td><td>Nvgidatsi</td><td>Luna Intercalaris (si opus est)</td></tr>
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
<h3>Quando Annus Incipit?</h3>
<p>Kalendae Ianuariae recens admodum placitum sunt. Antiquissimum calendarium Romanum mense Martio incipiebat — <em>Martio</em>, a Marte, deo veris, nominato — idque fundamentum per saecula tenuit. Europa medievalis post casum Romae magna ex parte ad ver rediit: Anglia per fere sexcentos annos, ab anno 1155 usque ad Legem de Calendario anni 1752, <strong>diem XXV Martii</strong> (Festum Annuntiationis — <em>Lady Day</em>) ut initium legale anni usurpavit. Cum Britannia a Calendario Iuliano ad Gregorianum transiret et undecim dies omitteret, antiquum terminum vectigalium diei XXV Martii in <strong>diem VI Aprilis</strong> protraxit — ubi hodie adhuc initium anni fiscalis Britannici manet, fossile bureaucraticum veteris calendarii. Eadem consuetudo per orbem terrarum recurrit. <strong>Nowruz</strong> Persicum novum annum in aequinoctio verno (circa diem XX–XXI Martii) iam per annos ter mille aperit, adhuc a trecenties centenis milibus hominum in Iranis, Asia Media, et Caucaso celebratum. In Asia Meridionali anni novi mense Martio et Aprili congregantur: <strong>Ugadi</strong> et <strong>Gudi Padwa</strong> Hinduistica in luna nova Chaitra cadunt; <strong>Puthandu</strong> Tamilicum, <strong>Aluth Awurudda</strong> Sinhalense, <strong>Vishu</strong> Keralense omnia circa diem XIV Aprilis cadunt, dum sol in Arietem ingreditur; <strong>Baisakhi</strong> in Panjab tam festum messis quam initium anni novum est. <strong>Songkran</strong> Thailandense (XIII–XV Aprilis) ex eodem vocabulo Sanscritico <em>sankranti</em> — transitu solis in Arietem — descendit. Aequinoctium vernum non modo symbolum erat: momentum erat quo menses famis finiebant et seri agros licebat.</p>
<p>Traditiones quae hic repraesentantur eandem contentionem in diversis modis ostendunt. <strong>Calendarium Hebraicum</strong> utroque modo utitur: Lex Mosaica Nisan (Martium–Aprilem) primum mensem nominat — <em>chodesh ha-aviv</em>, «mensis veris» — sed Rosh Hashanah die primo Tishreiis in autumno a traditione rabbinica ut anniversarium creationis confirmatum est factumque est Annus Novus celebratus. Annus <strong>Panchangae Hinduisticae</strong> cum luna nova Chaitra vere incipit — eadem ratio Vikrama Samvat quae festis in hac applicatione subest. <strong>Rota Anni Celtica</strong> principium anni Samhain (die XXXI Octobris) tribuit, festo ignis quo lux anni veteris extinguebatur, dum Beltane (die I Maii) dimidium aestivum aperiebat. <strong>Annus liturgicus Christianus</strong> Adventu incipit, quattuor diebus dominicis ante Nativitatem — annus in tenebris incipit et ad Nativitatem Domini crescit. <strong>Cherocenses</strong>, <strong>Haudenosaunenses</strong>, et hoc calendarium omnia in conversione hiemis fundantur: in luna nova prima post solstitium, vel in ipsa caerimonía Mediae Hiemis. Ad ver vel ad hiemem firmatum — dissensus non est confusio; duas veras metas astronomicas refert, solstitium et aequinoctium, quae ambae vera puncta conversionis anni significant. Hoc calendarium hiemem elegit.</p>
<hr>
<h3>Menses: Nomina et Origines</h3>
<table class="help-table">
  <tr><th>Mensis</th><th>Nomen a quo</th><th></th></tr>
  <tr><td><strong>Ianuarius</strong></td><td>Ianus</td><td>Deus liminibus et initiis praefectus. Bifrons — uno vultu annum elapsum intuens, altero annum incipientem. Omne limen, omnis porta, omne initium ei erat.</td></tr>
  <tr><td><strong>Februarius</strong></td><td><em>Februum</em></td><td>Instrumenta ritualia <em>Lupercaliorum</em> (die xv Februarii). Mensis totus erat tempus expiationis et purificationis. Cum Martius adhuc annus novus esset, Februarius ultimus mensis erat — ille qui domum purgabat antequam annus incipere posset.</td></tr>
  <tr><td><strong>Martius</strong></td><td>Mars</td><td>Deus belli. Cum caelum tepescit et exercitus procedere incipiunt.</td></tr>
  <tr><td><strong>Aprilis</strong></td><td><em>Aperire</em> vel Aphrodite</td><td>Verisimillime ab <em>aperire</em> Latino, "aperire" — cum gemmae aperiuntur, terra se aperit, mundus post hiemem aperitur. Nonnulli veteres auctores eum cum Aphrodite (Venere) coniungebant. Quaestio aperta manet, ut par est.</td></tr>
  <tr><td><strong>Maius</strong></td><td>Maia</td><td>Dea incrementi et fertilitatis. In religione Romana, dea terrae veris fertilis; in mythologia Graeca, una ex septem Pleiadibus, filia Atlantis, mater Mercurii. Agricolae ei die i Maii sacrificabant.</td></tr>
  <tr><td><strong>Iunius</strong></td><td>Iuno</td><td>Regina deorum et patrona matrimonii. Coniunx Iovis, custos feminarum per omnes vitae gradus. Mensis eius adhuc maxime placet nuptiis — benedictio eius eum numquam penitus reliquit.</td></tr>
  <tr><td><strong>Iulius</strong></td><td>Gaius Iulius Caesar</td><td>Decreto Marci Antonii anno xliv a.C.n., anno necis Caesaris. Antea <em>Quintilis</em> — "mensis quintus." Primus mensis nomine mortalis — vel paene dei — appellatus: Senatus eum iam divinare coeperat.</td></tr>
  <tr><td><strong>Augustus</strong></td><td>Caesar Augustus</td><td>Decreto Senatus anno viii a.C.n. Antea <em>Sextilis</em> — "mensis sextus." Augustus ei totidem dies quot Iulio esse voluit; dies additus ex Februario sumptus est, qui ex eo numquam se plene restituit.</td></tr>
  <tr><td><strong>September</strong></td><td><em>Septem</em> (septem)</td><td>Mensis septimus in veteri calendario a Martio incipiente. Falsum nomen per amplius bis mille annos gerit.</td></tr>
  <tr><td><strong>October</strong></td><td><em>Octo</em> (octo)</td><td>Mensis octavus, nunc decimus.</td></tr>
  <tr><td><strong>November</strong></td><td><em>Novem</em> (novem)</td><td>Mensis nonus, nunc undecimus.</td></tr>
  <tr><td><strong>December</strong></td><td><em>Decem</em> (decem)</td><td>Mensis decimus, nunc duodecimus — et maxime irrisui, quippe qui annum claudit quem capere numquam institutus erat.</td></tr>
</table>
<hr>
<h3>Feriarum Fasciculi</h3>
<p>Aperi <strong>Optiones</strong> (🗺️) et preme alterum e duobus pusionis <strong>Feriarum</strong> ut usque ad duos fasciculos simul elicias. Feriae margine colorato in diebus calendarii et in indice eventuum apparent. Pusio <strong>Feriarum</strong> in instrumento ferculario omnes fasciculos activos ostendit aut celat.</p>
<table class="help-table">
  <tr><th>Fasciculus</th><th>Descriptio</th></tr>
  <tr><td><strong>Amer.</strong></td><td>Decem feriae publicae Americanae: Kalendarum Ianuariarum, Dies MLK, Dies Praesidentium, Dies Memoriae, Dies Independentiae, Dies Laboris, Dies Columbi, Dies Veteranorum, Gratiarum Actio, Nativitas Domini.</td></tr>
  <tr><td><strong>Rota</strong></td><td><em>Rota Anni</em> — octo festa seasonalia Celtica et pagana puncta conversionis cycli solaris significantia. <strong>Yule</strong> (xxi Dec.) et <strong>Litha</strong> (xxi Iun.) solstitia notant. <strong>Ostara</strong> (xx Mar.) et <strong>Mabon</strong> (xxii Sep.) aequinoctia. <strong>Imbolc</strong> (i Feb.) Brigidae, deae ignis et artis, sacra est. <strong>Beltane</strong> (i Mai.) festum ignis et fecunditatis est. <strong>Lughnasadh</strong> (i Aug.) primam messem in honorem dei solaris Lughi celebrat. <strong>Samhain</strong> (xxxi Oct.) Annus Novus Celticus est — nox qua velum inter vivos et mortuos tenuissimum est.</td></tr>
  <tr><td><strong>Hebraicus</strong></td><td>Feriae Iudaicae ex calendario Hebraico exacte computatae. <strong>Rosh Hashana</strong> Annus Novus Iudaicus est. <strong>Yom Kippur</strong> Dies Expiationis est. <strong>Sukkot</strong> iter per desertum commemorat. <strong>Hanukkah</strong> (viii noctes) Festum Lucium est. <strong>Purim</strong> historiam Estherae celebrat. <strong>Pascha</strong> (viii dies) Exodum ex Aegypto commemorat. <strong>Shavuot</strong> traditionem Legis celebrat. Hae dies annis singulis in calendario Gregoriano mutantur — hic fasciculus eas exacte computat.</td></tr>
  <tr><td><strong>Indicus</strong></td><td>Festa Hinduica maiora diebus Gregorianis approximatis. <strong>Makar Sankranti</strong> (xiv Ian.) solem in Capricornum ingredientem significat. <strong>Holi</strong> festum colorum est. <strong>Janmashtami</strong> natalem Krishnae celebrat. <strong>Ganesh Chaturthi</strong> festum Ganes(h)ae est. <strong>Navratri</strong> (Novem Noctes) deam Durgam honorat. <strong>Diwali</strong> — Festum Lucium — reditum Ramae ex exilio celebrat.</td></tr>
  <tr><td><strong>Liturgicus</strong></td><td>Calendarium liturgicum Christianum Occidentale, cum calendario USCCB congruens. Omnes sollemnitates, festa et memorias obligatorias continet. <strong>Pascha</strong> eiusque festa mobilia (Feria Quarta Cinerum, Pentecoste, Sacratissimum Cor Iesu, Dominica Divinae Misericordiae) algorithmo Computi computantur. <strong>Nativitas Domini</strong>, <strong>Epiphania</strong> et dies sanctorum fixi eodem die Gregoriano quotannis cadunt. <strong>Adventus</strong> quattuor Dominicis ante Nativitatem incipit. <strong>Christus Rex</strong> annum liturgicum claudit.</td></tr>
  <tr><td><strong>Cherokee</strong></td><td>Dies approximati caerimoniarium seasonalium Cherokensium (Tsalagi). <strong>Prima Luna Nova Veris</strong> annum ritibus purificationis aperit. <strong>Caerimonia Ignis Novi</strong> omnes ignes exstinguit et eos ex flamma sacra nova reaccendit — renovatio ritualis mundi. <em>Hi dies approximationes sunt; calendarium caerimoniarium Cherokense a senioribus et custodibus scientiae definitur.</em></td></tr>
  <tr><td><strong>Iroquoiensis</strong></td><td>Dies approximati caerimoniarium seasonalium Haudenosaunensium. <strong>Caerimonía Mediae Hiemis</strong> (fine Ian.) sanctissima anni est. <strong>Festum Aceris</strong> succum vernum gratia prosequitur. <strong>Festum Fragariarum</strong> primas fragarias aestivas celebrat. <strong>Caerimonía Frumenti Viridis</strong> frumentum gratia prosequitur. <em>Hi dies approximationes sunt; caerimoniae Haudenosaunenses a regimine traditionali definiuntur.</em></td></tr>
</table>
<hr>
<h3>Culturae Caelestes in Tabula Caeli Nocturni</h3>
<p>Prospectus caeli duas lentes culturales in eodem caelo physico imponere potest. Eas ex instrumento ferculario in modo caeli commuta.</p>
<p><strong>Skidi Pawnee:</strong> Skidi Pawnee confoederatio vicorum in Campis Magnis (Nebraska et Kansas hodiernis) erant, quorum cosmologia astronomice elaboratior erat quam fere ullius alterius culturae campestris. Vici eorum ut certas stellarum formas imitarentur dispositi erant; calendarium eorum caerimоніale non mensibus sed apparitione stellarum certarum vespere et mane regulabatur. <strong>Stella Vespertina</strong> (Venus ad occidentem) mater omnium vitarum erat; <strong>Stella Matutina</strong> (Mars) maritus eius et vis creationis. Scientia stellarum eorum in tabulis in coriis cervi et bubalorum attritis depictis inclusa erat — inter antiquissima documenta astronomica Americae Septentrionalis quae supersunt. Pittacium <strong>Pawnee</strong> caelum nominibus stellarum Skidi et lore insignit.</p>
<p><strong>Jyotisha (Hinduum):</strong> <em>Jyotisha</em> (ज्योतिष, <em>scientia lucis</em>) traditio Vedica astronomiae et temporis mensurationis est. Centrale ei est systema <strong>XXVII nakshatrarum</strong> — mansionum lunarium quae eclipticam in arcus aequales XIII°XX′ dividunt. Luna per unam nakshtram per diem transit. Quaeque nakshatra numen praesidem habet, lore sacrum ex Rigveda et Brihat Samhita, et connotationibus faustis vel infaustis. Pittacium <strong>Jyotisha</strong> caelum nominibus nakshatrarum, finibus, et numinibus praesidibus insignit — ita Scorpius fit <em>Jyestha</em> (natu maximus, Indrae praeses) et Sagittarius <em>Purvashadha</em> (invictus, Aquarum praeses) revelat.</p>
`,

// ─── Sanskrit (help in Hindi) ────────────────────────────────────────────────
sa: `
<h3>वर्ष की संख्या</h3>
<p>यह पंचांग <strong>मानव युग</strong> (होलोसीन युग) का उपयोग करता है। ईसा पूर्व / ईसवी की सामान्य गणना 1 ईसवी से आरंभ होती है — ईसा मसीह के जन्म की तिथि, जो 6वीं शताब्दी में डायोनिसियस एक्सिगुस द्वारा अनुमानित की गई थी। मानव युग इस उद्गम को और पुराना तथा सार्वभौमिक बनाता है: यह 10,000 वर्ष जोड़ता है ताकि मानव सभ्यता का उषाकाल — कृषि क्रांति — वर्ष 1 पर आ सके। <a href="https://en.wikipedia.org/wiki/Holocene" target="_blank">होलोसीन युग</a> — जिसे प्रायः मानव युग कहा जाता है — लगभग 11,700 वर्ष पूर्व अंतिम हिमयुग की समाप्ति के साथ आरंभ हुआ; इसमें समस्त लिखित इतिहास, प्रत्येक तकनीकी क्रांति और हमारी प्रजाति द्वारा निर्मित हर सभ्यता समाहित है। तभी मनुष्यों ने पहली बार फसलें उगाईं, पशुओं को पाला और स्थायी घर बनाए — वह क्षण जब चंद्रमा और ऋतुओं का अनुसरण जीवन के लिए अनिवार्य हो गया। 1 ईसवी के विपरीत, यह उद्गम किसी एक धर्म या परंपरा का नहीं है — यह समस्त मानव इतिहास का साझा आरंभ बिंदु है। ~300 वर्षों के अंतर को स्वीकार करने से वर्ष का उपयोग सरल रहता है — वर्ष 1 उस युग के भीतर एक मनमाना बिंदु है जिसे हम चिह्नित करना चाहते हैं, और फिर भी हमें उस युग के साथ सही संबंध में रखता है। परिणाम: 2026 ईसवी = <strong>12026 HE</strong>।</p>
<p>10,000 वर्षों का अंतर एक जानबूझकर चुनी गई गोल संख्या है — होलोसीन के वास्तविक आरंभ (लगभग 9,700 ईसापूर्व) के निकट एक अनुमानित बिंदु। यह विचार कई बार स्वतंत्र रूप से प्रस्तावित किया गया है: गेब्रियल डेविल द्वारा 1924 में, लातवियाई <em>Dievturība</em> परंपरा द्वारा 1929 में, ई.आर. होप द्वारा 1963 में, और सेसारे एमिलियानी द्वारा 1993 में <em>Nature</em> को लिखे पत्र में। यहाँ की गणना इस इतिहास के ज्ञान के बिना स्वतंत्र रूप से सोची गई थी। अधिक जानकारी के लिए <a href="https://en.wikipedia.org/wiki/Holocene_calendar" target="_blank">होलोसीन पंचांग</a> लेख देखें।</p>
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
<p><strong>उत्तरी बनाम दक्षिणी आकाश:</strong> आप जो आकाश देखते हैं वह पूरी तरह इस बात पर निर्भर करता है कि आप पृथ्वी पर कहाँ हैं। दक्षिणी गोलार्ध के दर्शक नक्षत्रमंडलों का एक बिल्कुल अलग समूह देखते हैं — दक्षिणी क्रॉस, सेंटॉरस और वृश्चिक दक्षिण पर हावी हैं, जबकि मृगशिरा (Orion) उल्टा दिखाई देता है और परिचित उत्तरी ध्रुव तारा Polaris क्षितिज के नीचे होता है। आकाश पैनल आपके निर्धारित स्थान के लिए परिकलित नक्षत्रमंडल दिखाता है — सुनिश्चित करें कि सेटिंग्स में आपके निर्देशांक सही हों।</p>
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
<h3>वर्ष कब आरम्भ होता है?</h3>
<p>1 जनवरी एक आश्चर्यजनक रूप से नवीन परम्परा है। प्राचीनतम रोमन पंचांग मार्च — <em>Martius</em>, मंगल देव, वसन्त के देवता, के नाम पर — से आरम्भ होता था और शताब्दियों तक यही आधार बना रहा। रोम के पतन के पश्चात मध्यकालीन यूरोप बड़े पैमाने पर वसन्त की ओर लौट गया: इंग्लैंड ने <strong>25 मार्च</strong> (Lady Day, घोषणा-पर्व) को लगभग 600 वर्षों तक, सन् 1155 से 1752 के कैलेंडर अधिनियम तक, वर्ष का कानूनी आरम्भ माना। जब ब्रिटेन ने जूलियन से ग्रेगोरियन पंचांग अपनाया और 11 दिन छोड़े, तो 25 मार्च की पुरानी कर-सीमा <strong>6 अप्रैल</strong> को खिसक गई — जहाँ वह आज भी ब्रिटिश कर-वर्ष के आरम्भ के रूप में विद्यमान है, पुराने पंचांग का एक नौकरशाही जीवाश्म। यही प्रतिरूप विश्व भर में पुनरावृत्त होता है। फारसी <strong>नवरोज़</strong> कम से कम 3,000 वर्षों से वसन्त-विषुव (लगभग 20–21 मार्च) पर नव वर्ष का उद्घाटन करता है, जिसे ईरान, मध्य एशिया और कॉकस में लगभग 30 करोड़ लोग मनाते हैं। दक्षिण एशिया में नव वर्ष मार्च-अप्रैल में एकत्रित होते हैं: हिन्दू <strong>उगादि</strong> और <strong>गुड़ी पड़वा</strong> चैत्र की अमावस्या को पड़ते हैं; <strong>तमिल पुत्तांडु</strong>, <strong>सिंहली अलुत् अवुरुदु</strong> और केरल का <strong>विशु</strong> सभी लगभग 14 अप्रैल को, जब सूर्य मेष राशि में प्रवेश करता है; पंजाब का <strong>बैसाखी</strong> फसल-पर्व और नव वर्ष दोनों है। <strong>थाई सोंगक्रान</strong> (13–15 अप्रैल) उसी संस्कृत शब्द <em>संक्रान्ति</em> — सूर्य का मेष राशि में प्रवेश — से उत्पन्न है। वसन्त-विषुव केवल प्रतीकात्मक नहीं था: यह वह क्षण था जब भूख के महीने समाप्त होते थे और बुआई सम्भव हो जाती थी।</p>
<p>यहाँ प्रस्तुत परम्पराएँ विभिन्न स्वरों में एक ही तर्क को उद्घाटित करती हैं। <strong>यहूदी पंचांग</strong> दोनों प्रकार से है: तोरा नीसान (मार्च–अप्रैल) को प्रथम मास कहती है — <em>चोदेश हा-अवीव</em>, «वसन्त का मास» — किन्तु शरद ऋतु में तिश्री प्रथम का रोश हशाना रब्बाई परम्परा द्वारा सृष्टि की वर्षगाँठ के रूप में स्थापित किया गया और उत्सव नव वर्ष बन गया। <strong>हिन्दू पंचांग</strong> का वर्ष वसन्त में चैत्र की अमावस्या से आरम्भ होता है — वही विक्रम संवत गणना जो इस ऐप के पर्वों का आधार है। <strong>केल्टिक वर्ष-चक्र</strong> वर्ष का आरम्भ सामहेन (31 अक्तूबर) को देता है, अग्नि-पर्व जब पुराने वर्ष का प्रकाश बुझता था, जबकि बेल्तेन (1 मई) ग्रीष्म-अर्ध का उद्घाटन करता था। <strong>ईसाई धार्मिक वर्ष</strong> आगमन-काल से, क्रिसमस से चार रविवार पूर्व, आरम्भ होता है — वर्ष अन्धकार में आरम्भ होकर जन्मोत्सव की ओर बढ़ता है। <strong>चेरोकी</strong>, <strong>हॉडेनोशॉनी</strong> और यह पंचांग सभी शीत के मोड़ पर आधारित हैं: अयनान्त के पश्चात प्रथम अमावस्या, अथवा मध्य-शीत की पवित्र विधि। वसन्त-आधारित या शीत-आधारित — यह मतभेद भ्रम नहीं है; यह दो वास्तविक खगोलीय सीमाओं को प्रतिबिम्बित करता है — अयनान्त और विषुव — जो दोनों ही वर्ष में सच्चे परिवर्तन-बिन्दु हैं। इस पंचांग ने शीत को चुना।</p>
<hr>
<h3>माह: नाम और उद्गम</h3>
<table class="help-table">
  <tr><th>माह</th><th>नाम का स्रोत</th><th></th></tr>
  <tr><td><strong>जनवरी</strong></td><td>जेनस (Janus)</td><td>द्वारों और नई शुरुआतों के देवता। दो मुख वाले — एक बीते वर्ष की ओर, दूसरा आने वाले वर्ष की ओर। हर देहली, हर द्वार, हर नया आरम्भ उनका था।</td></tr>
  <tr><td><strong>फ़रवरी</strong></td><td><em>फेब्रुम</em> (Februum)</td><td><em>लुपर्कालिया</em> शुद्धिकरण उत्सव (15 फ़रवरी) के अनुष्ठान उपकरण। पूरा मास प्रायश्चित और शुद्धि का काल था। जब मार्च अभी भी नव वर्ष था, फ़रवरी अंतिम मास था — जो वर्ष के आरम्भ से पहले घर को साफ करता था।</td></tr>
  <tr><td><strong>मार्च</strong></td><td>मार्स (Mars)</td><td>युद्ध के देवता। जब मौसम गर्म होता है और सेनाएँ कूच करने लगती हैं।</td></tr>
  <tr><td><strong>अप्रैल</strong></td><td><em>अपेरिरे</em> (Aperire) या अफ्रोदिते</td><td>सम्भवतः लैटिन <em>aperire</em> से, "खोलना" — जब कलियाँ खिलती हैं, धरती खुलती है, शीत के बाद संसार जागता है। कुछ प्राचीन लेखकों ने इसे अफ्रोदिते (Venus) से जोड़ा। प्रश्न अभी भी खुला है।</td></tr>
  <tr><td><strong>मई</strong></td><td>माया (Maia)</td><td>विकास और वृद्धि की देवी। रोमन धर्म में उर्वर वसन्त की भूमि-देवी; ग्रीक पुराण में सात प्लेयेड्स में से एक, एटलस की पुत्री, हर्मीस की माता। किसान 1 मई को उन्हें बलि देते थे।</td></tr>
  <tr><td><strong>जून</strong></td><td>जूनो (Juno)</td><td>देवताओं की रानी और विवाह की संरक्षिका। बृहस्पति की पत्नी, जीवन के हर पड़ाव पर स्त्रियों की रक्षक। उनका मास आज भी विवाहों के लिए सर्वाधिक लोकप्रिय है।</td></tr>
  <tr><td><strong>जुलाई</strong></td><td>जूलियस सीज़र</td><td>मार्क एंटोनी के आदेश से 44 ईसा पूर्व में, सीज़र की हत्या के वर्ष। मूलतः <em>Quintilis</em> — "पाँचवाँ मास।" किसी मर्त्य — या लगभग देव — के नाम पर रखा गया पहला मास।</td></tr>
  <tr><td><strong>अगस्त</strong></td><td>ऑगस्टस सीज़र</td><td>8 ईसा पूर्व में सीनेट के आदेश से। मूलतः <em>Sextilis</em> — "छठा मास।" ऑगस्टस ने माँग की कि इसमें भी जुलाई जितने दिन हों; अतिरिक्त दिन फ़रवरी से लिया गया, जो उससे कभी उबर नहीं पाया।</td></tr>
  <tr><td><strong>सितम्बर</strong></td><td><em>Septem</em> (सात)</td><td>मार्च-आधारित पुराने पंचांग में सातवाँ मास। 2,000 से अधिक वर्षों से गलत क्रमांक लिए हुए है।</td></tr>
  <tr><td><strong>अक्तूबर</strong></td><td><em>Octo</em> (आठ)</td><td>आठवाँ मास, अब दसवाँ।</td></tr>
  <tr><td><strong>नवम्बर</strong></td><td><em>Novem</em> (नौ)</td><td>नौवाँ मास, अब ग्यारहवाँ।</td></tr>
  <tr><td><strong>दिसम्बर</strong></td><td><em>Decem</em> (दस)</td><td>दसवाँ मास, अब बारहवाँ — और सबसे विडम्बनापूर्ण, क्योंकि यह उस वर्ष को बंद करता है जिसे समेटने के लिए इसे कभी बनाया ही नहीं गया था।</td></tr>
</table>
<hr>
<h3>पर्व-समूह (Holiday Packs)</h3>
<p><strong>सेटिंग्स</strong> (🗺️) खोलें और एक साथ दो पर्व-समूह चुनने के लिए <strong>पर्व</strong> के किसी भी बटन पर क्लिक करें। पर्व-दिन कैलेंडर में रंगीन सीमा के रूप में और आगामी घटनाओं की सूची में दिखाई देते हैं। टूलबार में <strong>पर्व</strong> बटन सभी सक्रिय पैक दिखाता या छुपाता है।</p>
<table class="help-table">
  <tr><th>समूह</th><th>विवरण</th></tr>
  <tr><td><strong>अमेरिका</strong></td><td>अमेरिका के दस संघीय अवकाश: नव वर्ष, MLK दिवस, राष्ट्रपति दिवस, स्मृति दिवस, स्वतंत्रता दिवस, श्रम दिवस, कोलम्बस दिवस, सैनिक दिवस, कृतज्ञता दिवस, क्रिसमस।</td></tr>
  <tr><td><strong>चक्रम्</strong></td><td><em>वर्ष का पहिया</em> — सौर चक्र के आठ केल्टिक और पगान मौसमी पर्व। <strong>यूल</strong> (21 दिसम्बर) और <strong>लिथा</strong> (21 जून) अयनान्त को चिह्नित करते हैं। <strong>ओस्तारा</strong> (20 मार्च) और <strong>माबोन</strong> (22 सितम्बर) विषुव को। <strong>इम्बोल्क</strong> (1 फरवरी) अग्नि और शिल्प की देवी ब्रिगिड को समर्पित है। <strong>बेल्टेन</strong> (1 मई) एक अग्नि-उत्सव है। <strong>लूनासा</strong> (1 अगस्त) सूर्य-देव लू के सम्मान में प्रथम फसल का उत्सव है। <strong>साविन</strong> (31 अक्टूबर) केल्टिक नव वर्ष है — वह रात जब जीवितों और मृतकों के बीच का परदा सबसे पतला होता है।</td></tr>
  <tr><td><strong>यहूदी</strong></td><td>हिब्रू पंचांग से परिकलित यहूदी पर्व। <strong>रोश हशाना</strong> यहूदी नव वर्ष है। <strong>योम किप्पुर</strong> प्रायश्चित्त का दिन है। <strong>सुक्कोत</strong> मरुभूमि-यात्रा का स्मरण है। <strong>हनुक्का</strong> (8 रातें) प्रकाश-पर्व है। <strong>पुरिम</strong> एस्तेर की कथा का उत्सव है। <strong>पेसाच</strong> (8 दिन) मिस्र से प्रस्थान का स्मरण है। <strong>शावुओत</strong> तोराह-प्रदान का उत्सव है। ये तिथियाँ प्रत्येक वर्ष ग्रेगोरियन पंचांग में बदलती हैं — यह पैक उन्हें सटीक गणना करता है।</td></tr>
  <tr><td><strong>हिन्दू</strong></td><td>प्रमुख हिंदू पर्व (अनुमानित ग्रेगोरियन तिथियाँ — वास्तविक तिथियाँ लूनिसोलर पंचांग पर निर्भर हैं)। <strong>मकर संक्रांति</strong> (14 जनवरी) सूर्य का मकर राशि में प्रवेश है। <strong>होली</strong> रंगों का उत्सव है। <strong>जन्माष्टमी</strong> कृष्ण-जन्म का उत्सव है। <strong>गणेश चतुर्थी</strong> गणेशजी का जन्मोत्सव है। <strong>नवरात्रि</strong> (नौ रातें) देवी दुर्गा की उपासना है। <strong>दीपावली</strong> — प्रकाश-पर्व — श्री रामचंद्रजी की वनवास से वापसी का उत्सव है।</td></tr>
  <tr><td><strong>पूजाविधिः</strong></td><td>पश्चिमी ईसाई पूजा-पंचांग, USCCB पंचांग से संरेखित। सभी महोत्सव, पर्व और अनिवार्य स्मृति-दिवस सम्मिलित हैं। <strong>ईस्टर</strong> और उसके चल-पर्व (भस्म बुधवार, पेन्तेकोस्त, पवित्र हृदय, दया रविवार) कम्प्यूटस गणना से निर्धारित होते हैं। <strong>क्रिसमस</strong>, <strong>एपिफ़नी</strong> और स्थिर-तिथि संत-दिवस प्रतिवर्ष उसी ग्रेगोरियन तिथि पर आते हैं। <strong>आगमन काल</strong> क्रिसमस से चार रविवार पूर्व आरंभ होता है। <strong>ख्रीस्त राजा</strong> पूजा-वर्ष का समापन करता है।</td></tr>
  <tr><td><strong>चेरोकी</strong></td><td>चेरोकी (त्सलगी) मौसमी अनुष्ठानों की अनुमानित तिथियाँ। <strong>वसंत का प्रथम नवचंद्र</strong> शुद्धीकरण विधियों से नव वर्ष आरंभ करता है। <strong>हरे मक्के के समारोह</strong> फसल के प्रति कृतज्ञता प्रकट करते हैं। <strong>नई अग्नि समारोह</strong> सभी अग्नियाँ बुझाकर एक पवित्र नई लौ से पुनः प्रज्वलित करता है — जगत का अनुष्ठानिक नवीनीकरण। <em>ये तिथियाँ अनुमानित हैं; चेरोकी अनुष्ठान-पंचांग वरिष्ठों और ज्ञान-धारकों द्वारा निर्धारित होता है।</em></td></tr>
  <tr><td><strong>इरोक्वॉइ</strong></td><td>हौदेनोशोनी मौसमी अनुष्ठानों की अनुमानित तिथियाँ। <strong>मध्यशीत समारोह</strong> (जनवरी अंत) वर्ष का सबसे पवित्र अनुष्ठान है। <strong>मेपल उत्सव</strong> वसंत के रस के लिए कृतज्ञता प्रकट करता है। <strong>स्ट्रॉबेरी उत्सव</strong> ग्रीष्म की पहली स्ट्रॉबेरी का उत्सव है। <strong>हरे मक्के का समारोह</strong> मक्के के प्रति कृतज्ञता प्रकट करता है। <em>ये तिथियाँ अनुमानित हैं; हौदेनोशोनी अनुष्ठान पारंपरिक शासन द्वारा निर्धारित होते हैं।</em></td></tr>
</table>
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
