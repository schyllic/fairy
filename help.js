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
`,

}; // end HELP_I18N

/** Return the help HTML for the current language, falling back to English. */
function getHelpHtml() {
  const lang = (typeof state !== 'undefined' && state && state.language) || 'en';
  return HELP_I18N[lang] || HELP_I18N.en;
}
