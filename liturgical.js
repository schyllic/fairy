// ═══ Fairy Calendar — liturgical.js ═══
// Western Christian liturgical calendar (Computus-based moveable feasts, fixed solemnities, and saint days)

// Anonymous Gregorian Easter — Computus algorithm
function _liturgicalEaster(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day   = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function _liturgicalDateStr(d) {
  return d.getUTCFullYear() + '-' +
    String(d.getUTCMonth() + 1).padStart(2, '0') + '-' +
    String(d.getUTCDate()).padStart(2, '0');
}

function _liturgicalOffset(base, days) {
  return new Date(base.getTime() + days * 86400000);
}

// Advent: 4th Sunday before Dec 25
function _liturgicalAdvent(year) {
  const christmas = new Date(Date.UTC(year, 11, 25));
  const dow = christmas.getUTCDay(); // 0=Sun
  const daysBack = (dow === 0) ? 28 : 21 + dow;
  return new Date(christmas.getTime() - daysBack * 86400000);
}

// Fixed saint days & solemnities: { m, d, name, url, i18n? }
const LITURGICAL_FIXED = [
  // ── Solemnities & major feasts ──
  { m:1,  d:1,  name:'Mary, Mother of God', url:'https://en.wikipedia.org/wiki/Solemnity_of_Mary,_Mother_of_God',
    i18n: { de:'Maria, Mutter Gottes', fr:'Marie, Mère de Dieu', it:'Maria, Madre di Dio', es:'María, Madre de Dios', sw:'Maria, Mama wa Mungu', la:'Maria, Mater Dei', sa:'मरिया देवमाता' } },
  { m:1,  d:6,  name:'Epiphany', url:'https://en.wikipedia.org/wiki/Epiphany_(holiday)',
    i18n: { de:'Erscheinung des Herrn', fr:'Épiphanie', it:'Epifania', es:'Epifanía', sw:'Epifania', la:'Epiphania' } },
  { m:2,  d:2,  name:'Presentation of the Lord', url:'https://en.wikipedia.org/wiki/Presentation_of_Jesus_at_the_Temple',
    i18n: { de:'Darstellung des Herrn', fr:'Pr\u00e9sentation du Seigneur', it:'Presentazione del Signore', es:'Presentaci\u00f3n del Se\u00f1or', sw:'Kuwasilishwa kwa Bwana', la:'Praesentatio Domini' } },
  { m:3,  d:19, name:'St. Joseph', url:'https://en.wikipedia.org/wiki/Saint_Joseph%27s_Day',
    i18n: { de:'Hl. Josef', fr:'St. Joseph', it:'S. Giuseppe', es:'San José', sw:'Mtk. Yosefu', la:'S. Ioseph' } },
  { m:3,  d:25, name:'Annunciation', url:'https://en.wikipedia.org/wiki/Annunciation',
    i18n: { de:'Verkündigung des Herrn', fr:'Annonciation', it:'Annunciazione', es:'Anunciación', sw:'Tangazo', la:'Annuntiatio' } },
  { m:6,  d:24, name:'Nativity of John the Baptist', url:'https://en.wikipedia.org/wiki/Nativity_of_John_the_Baptist',
    i18n: { de:'Geburt Johannes des Täufers', fr:'Nativité de Jean le Baptiste', it:'Natività di Giovanni Battista', es:'Natividad de Juan el Bautista', la:'Nativitas S. Ioannis Baptistae' } },
  { m:6,  d:29, name:'Sts. Peter & Paul', url:'https://en.wikipedia.org/wiki/Feast_of_Saints_Peter_and_Paul',
    i18n: { de:'Hll. Petrus und Paulus', fr:'Sts. Pierre et Paul', it:'Ss. Pietro e Paolo', es:'Stos. Pedro y Pablo', la:'Ss. Petrus et Paulus' } },
  { m:7,  d:31, name:'St. Ignatius of Loyola', url:'https://en.wikipedia.org/wiki/Ignatius_of_Loyola',
    i18n: { de:'Hl. Ignatius von Loyola', fr:'St. Ignace de Loyola', it:'S. Ignazio di Loyola', es:'San Ignacio de Loyola', la:'S. Ignatius de Loyola' } },
  { m:8,  d:1,  name:'St. Alphonsus Liguori', url:'https://en.wikipedia.org/wiki/Alphonsus_Liguori',
    i18n: { de:'Hl. Alfons von Liguori', fr:'St. Alphonse de Liguori', it:'S. Alfonso Maria de\u2019 Liguori', es:'San Alfonso Mar\u00eda de Ligorio', la:'S. Alphonsus Maria de Ligorio' } },
  { m:8,  d:4,  name:'St. John Vianney', url:'https://en.wikipedia.org/wiki/John_Vianney',
    i18n: { de:'Hl. Johannes Maria Vianney', fr:'St. Jean-Marie Vianney', it:'S. Giovanni Maria Vianney', es:'San Juan Mar\u00eda Vianney', la:'S. Ioannes Maria Vianney' } },
  { m:8,  d:6,  name:'Transfiguration', url:'https://en.wikipedia.org/wiki/Feast_of_the_Transfiguration',
    i18n: { de:'Verklärung des Herrn', fr:'Transfiguration', it:'Trasfigurazione', es:'Transfiguración', la:'Transfiguratio Domini' } },
  { m:8,  d:15, name:'Assumption of Mary', url:'https://en.wikipedia.org/wiki/Assumption_of_Mary',
    i18n: { de:'Mariä Himmelfahrt', fr:'Assomption', it:'Assunzione di Maria', es:'Asunción de María', sw:'Kupalizwa kwa Maria', la:'Assumptio Mariae' } },
  { m:9,  d:14, name:'Exaltation of the Holy Cross', url:'https://en.wikipedia.org/wiki/Feast_of_the_Cross',
    i18n: { de:'Kreuzerhöhung', fr:'Exaltation de la Sainte Croix', it:'Esaltazione della Santa Croce', es:'Exaltación de la Santa Cruz', la:'Exaltatio Sanctae Crucis' } },
  { m:11, d:1,  name:'All Saints Day', url:'https://en.wikipedia.org/wiki/All_Saints%27_Day',
    i18n: { de:'Allerheiligen', fr:'Toussaint', it:'Ognissanti', es:'Día de Todos los Santos', sw:'Siku ya Watakatifu Wote', la:'Festum Omnium Sanctorum' } },
  { m:11, d:2,  name:'All Souls Day', url:'https://en.wikipedia.org/wiki/All_Souls%27_Day',
    i18n: { de:'Allerseelen', fr:'Jour des Morts', it:'Commemorazione dei Defunti', es:'Día de los Fieles Difuntos', sw:'Siku ya Wafu Wote', la:'Commemoratio Omnium Fidelium Defunctorum' } },
  { m:12, d:8,  name:'Immaculate Conception', url:'https://en.wikipedia.org/wiki/Immaculate_Conception',
    i18n: { de:'Unbefleckte Empfängnis', fr:'Immaculée Conception', it:'Immacolata Concezione', es:'Inmaculada Concepción', la:'Immaculata Conceptio' } },
  { m:12, d:25, name:'Christmas', url:'https://en.wikipedia.org/wiki/Christmas',
    i18n: { de:'Weihnachten', fr:'Noël', it:'Natale', es:'Navidad', sw:'Krismasi', la:'Nativitas Domini', sa:'क्रिस्तजन्मोत्सवः' } },

  // ── Saint days & memorials (USCCB obligatory) ──
  { m:1,  d:2,  name:'Sts. Basil the Great & Gregory Nazianzen', url:'https://en.wikipedia.org/wiki/Basil_of_Caesarea',
    i18n: { de:'Hll. Basilius der Gro\u00dfe und Gregor von Nazianz', fr:'Sts. Basile le Grand et Gr\u00e9goire de Nazianze', it:'Ss. Basilio Magno e Gregorio Nazianzeno', es:'Stos. Basilio Magno y Gregorio Nacianceno', la:'Ss. Basilius Magnus et Gregorius Nazianzenus' } },
  { m:1,  d:17, name:'St. Anthony the Great', url:'https://en.wikipedia.org/wiki/Anthony_the_Great',
    i18n: { de:'Hl. Antonius der Gro\u00dfe', fr:'St. Antoine le Grand', it:'S. Antonio Abate', es:'San Antonio Abad', la:'S. Antonius Magnus' } },
  { m:1,  d:21, name:'St. Agnes', url:'https://en.wikipedia.org/wiki/Agnes_of_Rome',
    i18n: { de:'Hl. Agnes', fr:'Ste. Agn\u00e8s', it:'S. Agnese', es:'Santa In\u00e9s', la:'S. Agnes' } },
  { m:1,  d:24, name:'St. Francis de Sales', url:'https://en.wikipedia.org/wiki/Francis_de_Sales',
    i18n: { de:'Hl. Franz von Sales', fr:'St. Fran\u00e7ois de Sales', it:'S. Francesco di Sales', es:'San Francisco de Sales', la:'S. Franciscus Salesius' } },
  { m:1,  d:25, name:'Conversion of St. Paul', url:'https://en.wikipedia.org/wiki/Conversion_of_Paul_the_Apostle',
    i18n: { de:'Bekehrung des Hl. Paulus', fr:'Conversion de St. Paul', it:'Conversione di S. Paolo', es:'Conversi\u00f3n de San Pablo', la:'Conversio S. Pauli' } },
  { m:1,  d:26, name:'Sts. Timothy & Titus', url:'https://en.wikipedia.org/wiki/Saint_Timothy',
    i18n: { de:'Hll. Timotheus und Titus', fr:'Sts. Timoth\u00e9e et Tite', it:'Ss. Timoteo e Tito', es:'Stos. Timoteo y Tito', la:'Ss. Timotheus et Titus' } },
  { m:1,  d:28, name:'St. Thomas Aquinas', url:'https://en.wikipedia.org/wiki/Thomas_Aquinas',
    i18n: { de:'Hl. Thomas von Aquin', fr:'St. Thomas d\u2019Aquin', it:'S. Tommaso d\u2019Aquino', es:'Santo Tom\u00e1s de Aquino', la:'S. Thomas Aquinas' } },
  { m:1,  d:31, name:'St. John Bosco', url:'https://en.wikipedia.org/wiki/John_Bosco',
    i18n: { de:'Hl. Johannes Bosco', fr:'St. Jean Bosco', it:'S. Giovanni Bosco', es:'San Juan Bosco', la:'S. Ioannes Bosco' } },
  { m:2,  d:3,  name:'St. Blaise', url:'https://en.wikipedia.org/wiki/Saint_Blaise',
    i18n: { de:'Hl. Blasius', fr:'St. Blaise', it:'S. Biagio', es:'San Blas', la:'S. Blasius' } },
  { m:2,  d:5,  name:'St. Agatha', url:'https://en.wikipedia.org/wiki/Agatha_of_Sicily',
    i18n: { de:'Hl. Agatha', fr:'Ste. Agathe', it:'S. Agata', es:'Santa \u00c1gueda', la:'S. Agatha' } },
  { m:2,  d:6,  name:'Sts. Paul Miki & Companions', url:'https://en.wikipedia.org/wiki/Paul_Miki',
    i18n: { de:'Hll. Paul Miki und Gef\u00e4hrten', fr:'Sts. Paul Miki et compagnons', it:'Ss. Paolo Miki e compagni', es:'Stos. Pablo Miki y compa\u00f1eros', la:'Ss. Paulus Miki et Socii' } },
  { m:2,  d:10, name:'St. Scholastica', url:'https://en.wikipedia.org/wiki/Scholastica',
    i18n: { de:'Hl. Scholastika', fr:'Ste. Scholastique', it:'S. Scolastica', es:'Santa Escol\u00e1stica', la:'S. Scholastica' } },
  { m:2,  d:14, name:'Sts. Cyril & Methodius', url:'https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius',
    i18n: { de:'Hll. Cyrill und Methodius', fr:'Sts. Cyrille et M\u00e9thode', it:'Ss. Cirillo e Metodio', es:'Stos. Cirilo y Metodio', la:'Ss. Cyrillus et Methodius' } },
  { m:2,  d:22, name:'Chair of St. Peter', url:'https://en.wikipedia.org/wiki/Chair_of_Saint_Peter',
    i18n: { de:'Kathedra Petri', fr:'Chaire de St. Pierre', it:'Cattedra di S. Pietro', es:'C\u00e1tedra de San Pedro', la:'Cathedra S. Petri' } },
  { m:3,  d:7,  name:'Sts. Perpetua & Felicity', url:'https://en.wikipedia.org/wiki/Perpetua_and_Felicity',
    i18n: { de:'Hll. Perpetua und Felizitas', fr:'Stes. Perp\u00e9tue et F\u00e9licit\u00e9', it:'Ss. Perpetua e Felicita', es:'Stas. Perpetua y Felicidad', la:'Ss. Perpetua et Felicitas' } },
  { m:3,  d:17, name:'St. Patrick', url:'https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day',
    i18n: { de:'Hl. Patrick', fr:'St. Patrick', it:'S. Patrizio', es:'San Patricio', la:'S. Patricius' } },
  { m:4,  d:23, name:'St. George', url:'https://en.wikipedia.org/wiki/Saint_George%27s_Day',
    i18n: { de:'Hl. Georg', fr:'St. Georges', it:'S. Giorgio', es:'San Jorge', la:'S. Georgius' } },
  { m:4,  d:25, name:'St. Mark', url:'https://en.wikipedia.org/wiki/Mark_the_Evangelist',
    i18n: { de:'Hl. Markus', fr:'St. Marc', it:'S. Marco', es:'San Marcos', la:'S. Marcus' } },
  { m:4,  d:29, name:'St. Catherine of Siena', url:'https://en.wikipedia.org/wiki/Catherine_of_Siena',
    i18n: { de:'Hl. Katharina von Siena', fr:'Ste. Catherine de Sienne', it:'S. Caterina da Siena', es:'Santa Catalina de Siena', la:'S. Catharina Senensis' } },
  { m:5,  d:1,  name:'St. Joseph the Worker', url:'https://en.wikipedia.org/wiki/Saint_Joseph_the_Worker',
    i18n: { de:'Hl. Josef der Arbeiter', fr:'St. Joseph artisan', it:'S. Giuseppe lavoratore', es:'San José Obrero', la:'S. Ioseph Opifex' } },
  { m:5,  d:3,  name:'Sts. Philip & James', url:'https://en.wikipedia.org/wiki/Philip_the_Apostle',
    i18n: { de:'Hll. Philippus und Jakobus', fr:'Sts. Philippe et Jacques', it:'Ss. Filippo e Giacomo', es:'Stos. Felipe y Santiago', la:'Ss. Philippus et Iacobus' } },
  { m:5,  d:14, name:'St. Matthias', url:'https://en.wikipedia.org/wiki/Saint_Matthias',
    i18n: { de:'Hl. Matthias', fr:'St. Matthias', it:'S. Mattia', es:'San Matías', la:'S. Matthias' } },
  { m:5,  d:31, name:'Visitation of the BVM', url:'https://en.wikipedia.org/wiki/Visitation_(Christianity)',
    i18n: { de:'Heimsuchung Mariens', fr:'Visitation de la Vierge Marie', it:'Visitazione della BVM', es:'Visitaci\u00f3n de la Virgen Mar\u00eda', la:'Visitatio BMV' } },
  { m:6,  d:1,  name:'St. Justin', url:'https://en.wikipedia.org/wiki/Justin_Martyr',
    i18n: { de:'Hl. Justin', fr:'St. Justin', it:'S. Giustino', es:'San Justino', la:'S. Iustinus' } },
  { m:6,  d:3,  name:'St. Charles Lwanga', url:'https://en.wikipedia.org/wiki/Charles_Lwanga',
    i18n: { de:'Hl. Karl Lwanga', fr:'St. Charles Lwanga', it:'S. Carlo Lwanga', es:'San Carlos Lwanga', sw:'Mtk. Charles Lwanga', la:'S. Carolus Lwanga' } },
  { m:6,  d:11, name:'St. Barnabas', url:'https://en.wikipedia.org/wiki/Barnabas',
    i18n: { de:'Hl. Barnabas', fr:'St. Barnabé', it:'S. Barnaba', es:'San Bernabé', la:'S. Barnabas' } },
  { m:6,  d:13, name:'St. Anthony of Padua', url:'https://en.wikipedia.org/wiki/Anthony_of_Padua',
    i18n: { de:'Hl. Antonius von Padua', fr:'St. Antoine de Padoue', it:'S. Antonio di Padova', es:'San Antonio de Padua', la:'S. Antonius Patavinus' } },
  { m:7,  d:3,  name:'St. Thomas the Apostle', url:'https://en.wikipedia.org/wiki/Thomas_the_Apostle',
    i18n: { de:'Hl. Thomas der Apostel', fr:'St. Thomas apôtre', it:'S. Tommaso apostolo', es:'Santo Tomás apóstol', la:'S. Thomas Apostolus' } },
  { m:7,  d:11, name:'St. Benedict', url:'https://en.wikipedia.org/wiki/Benedict_of_Nursia',
    i18n: { de:'Hl. Benedikt', fr:'St. Benoît', it:'S. Benedetto', es:'San Benito', la:'S. Benedictus' } },
  { m:7,  d:15, name:'St. Bonaventure', url:'https://en.wikipedia.org/wiki/Bonaventure',
    i18n: { de:'Hl. Bonaventura', fr:'St. Bonaventure', it:'S. Bonaventura', es:'San Buenaventura', la:'S. Bonaventura' } },
  { m:7,  d:22, name:'St. Mary Magdalene', url:'https://en.wikipedia.org/wiki/Mary_Magdalene',
    i18n: { de:'Hl. Maria Magdalena', fr:'Ste. Marie Madeleine', it:'S. Maria Maddalena', es:'Santa María Magdalena', la:'S. Maria Magdalena' } },
  { m:7,  d:25, name:'St. James the Greater', url:'https://en.wikipedia.org/wiki/James_the_Great',
    i18n: { de:'Hl. Jakobus der Ältere', fr:'St. Jacques le Majeur', it:'S. Giacomo il Maggiore', es:'Santiago el Mayor', la:'S. Iacobus Maior' } },
  { m:7,  d:26, name:'Sts. Joachim & Anne', url:'https://en.wikipedia.org/wiki/Joachim',
    i18n: { de:'Hll. Joachim und Anna', fr:'Sts. Joachim et Anne', it:'Ss. Gioacchino e Anna', es:'Stos. Joaquín y Ana', la:'Ss. Ioachim et Anna' } },
  { m:7,  d:29, name:'Sts. Martha, Mary & Lazarus', url:'https://en.wikipedia.org/wiki/Martha',
    i18n: { de:'Hll. Martha, Maria und Lazarus', fr:'Sts. Marthe, Marie et Lazare', it:'Ss. Marta, Maria e Lazzaro', es:'Stas. Marta, Mar\u00eda y L\u00e1zaro', la:'Ss. Martha, Maria et Lazarus' } },
  { m:8,  d:8,  name:'St. Dominic', url:'https://en.wikipedia.org/wiki/Saint_Dominic',
    i18n: { de:'Hl. Dominikus', fr:'St. Dominique', it:'S. Domenico', es:'Santo Domingo de Guzm\u00e1n', la:'S. Dominicus' } },
  { m:8,  d:10, name:'St. Lawrence', url:'https://en.wikipedia.org/wiki/Lawrence_of_Rome',
    i18n: { de:'Hl. Laurentius', fr:'St. Laurent', it:'S. Lorenzo', es:'San Lorenzo', la:'S. Laurentius' } },
  { m:8,  d:11, name:'St. Clare', url:'https://en.wikipedia.org/wiki/Clare_of_Assisi',
    i18n: { de:'Hl. Klara', fr:'Ste. Claire', it:'S. Chiara', es:'Santa Clara', la:'S. Clara' } },
  { m:8,  d:14, name:'St. Maximilian Kolbe', url:'https://en.wikipedia.org/wiki/Maximilian_Kolbe',
    i18n: { de:'Hl. Maximilian Kolbe', fr:'St. Maximilien Kolbe', it:'S. Massimiliano Kolbe', es:'San Maximiliano Kolbe', la:'S. Maximilianus Kolbe' } },
  { m:8,  d:20, name:'St. Bernard', url:'https://en.wikipedia.org/wiki/Bernard_of_Clairvaux',
    i18n: { de:'Hl. Bernhard von Clairvaux', fr:'St. Bernard de Clairvaux', it:'S. Bernardo di Chiaravalle', es:'San Bernardo de Claraval', la:'S. Bernardus Claraevallensis' } },
  { m:8,  d:21, name:'St. Pius X', url:'https://en.wikipedia.org/wiki/Pope_Pius_X',
    i18n: { de:'Hl. Pius X.', fr:'St. Pie X', it:'S. Pio X', es:'San P\u00edo X', la:'S. Pius X' } },
  { m:8,  d:22, name:'Queenship of the BVM', url:'https://en.wikipedia.org/wiki/Queenship_of_Mary',
    i18n: { de:'Maria K\u00f6nigin', fr:'Marie Reine', it:'Maria Regina', es:'Mar\u00eda Reina', la:'BMV Regina' } },
  { m:8,  d:24, name:'St. Bartholomew', url:'https://en.wikipedia.org/wiki/Bartholomew_the_Apostle',
    i18n: { de:'Hl. Bartholom\u00e4us', fr:'St. Barth\u00e9lemy', it:'S. Bartolomeo', es:'San Bartolom\u00e9', la:'S. Bartholomaeus' } },
  { m:8,  d:27, name:'St. Monica', url:'https://en.wikipedia.org/wiki/Monica_of_Hippo',
    i18n: { de:'Hl. Monika', fr:'Ste. Monique', it:'S. Monica', es:'Santa M\u00f3nica', la:'S. Monica' } },
  { m:8,  d:28, name:'St. Augustine', url:'https://en.wikipedia.org/wiki/Augustine_of_Hippo',
    i18n: { de:'Hl. Augustinus', fr:'St. Augustin', it:'S. Agostino', es:'San Agust\u00edn', la:'S. Augustinus' } },
  { m:8,  d:29, name:'Passion of St. John the Baptist', url:'https://en.wikipedia.org/wiki/Beheading_of_John_the_Baptist',
    i18n: { de:'Enthauptung Johannes des T\u00e4ufers', fr:'Martyre de St. Jean-Baptiste', it:'Martirio di S. Giovanni Battista', es:'Martirio de San Juan Bautista', la:'Passio S. Ioannis Baptistae' } },
  { m:9,  d:3,  name:'St. Gregory the Great', url:'https://en.wikipedia.org/wiki/Pope_Gregory_I',
    i18n: { de:'Hl. Gregor der Gro\u00dfe', fr:'St. Gr\u00e9goire le Grand', it:'S. Gregorio Magno', es:'San Gregorio Magno', la:'S. Gregorius Magnus' } },
  { m:9,  d:8,  name:'Nativity of the BVM', url:'https://en.wikipedia.org/wiki/Nativity_of_Mary',
    i18n: { de:'Mari\u00e4 Geburt', fr:'Nativit\u00e9 de la Vierge Marie', it:'Nativit\u00e0 della BVM', es:'Natividad de la Virgen Mar\u00eda', la:'Nativitas BMV' } },
  { m:9,  d:13, name:'St. John Chrysostom', url:'https://en.wikipedia.org/wiki/John_Chrysostom',
    i18n: { de:'Hl. Johannes Chrysostomus', fr:'St. Jean Chrysostome', it:'S. Giovanni Crisostomo', es:'San Juan Cris\u00f3stomo', la:'S. Ioannes Chrysostomus' } },
  { m:9,  d:15, name:'Our Lady of Sorrows', url:'https://en.wikipedia.org/wiki/Our_Lady_of_Sorrows',
    i18n: { de:'Schmerzen Mariens', fr:'Notre-Dame des Douleurs', it:'Beata Vergine Addolorata', es:'Nuestra Se\u00f1ora de los Dolores', la:'BMV Perdolens' } },
  { m:9,  d:16, name:'Sts. Cornelius & Cyprian', url:'https://en.wikipedia.org/wiki/Pope_Cornelius',
    i18n: { de:'Hll. Kornelius und Cyprian', fr:'Sts. Corneille et Cyprien', it:'Ss. Cornelio e Cipriano', es:'Stos. Cornelio y Cipriano', la:'Ss. Cornelius et Cyprianus' } },
  { m:9,  d:20, name:'Sts. Andrew Kim Tae-g\u014fn & Companions', url:'https://en.wikipedia.org/wiki/Korean_Martyrs',
    i18n: { de:'Hll. Andreas Kim Taeg\u014fn und Gef\u00e4hrten', fr:'Sts. Andr\u00e9 Kim Tae-g\u014fn et compagnons', it:'Ss. Andrea Kim Tae-g\u014fn e compagni', es:'Stos. Andr\u00e9s Kim Tae-g\u014fn y compa\u00f1eros', la:'Ss. Andreas Kim Tae-g\u014fn et Socii' } },
  { m:9,  d:21, name:'St. Matthew', url:'https://en.wikipedia.org/wiki/Matthew_the_Apostle',
    i18n: { de:'Hl. Matth\u00e4us', fr:'St. Matthieu', it:'S. Matteo', es:'San Mateo', la:'S. Matthaeus' } },
  { m:9,  d:23, name:'St. Pio of Pietrelcina', url:'https://en.wikipedia.org/wiki/Padre_Pio',
    i18n: { de:'Hl. Pio von Pietrelcina', fr:'St. Pio de Pietrelcina', it:'S. Pio da Pietrelcina', es:'San P\u00edo de Pietrelcina', la:'S. Pius a Pietrelcina' } },
  { m:9,  d:27, name:'St. Vincent de Paul', url:'https://en.wikipedia.org/wiki/Vincent_de_Paul',
    i18n: { de:'Hl. Vinzenz von Paul', fr:'St. Vincent de Paul', it:'S. Vincenzo de\u2019 Paoli', es:'San Vicente de Pa\u00fal', la:'S. Vincentius a Paulo' } },
  { m:9,  d:29, name:'Sts. Michael, Gabriel & Raphael', url:'https://en.wikipedia.org/wiki/Michaelmas',
    i18n: { de:'Hll. Michael, Gabriel und Raphael', fr:'Sts. Michel, Gabriel et Rapha\u00ebl', it:'Ss. Michele, Gabriele e Raffaele', es:'Stos. Miguel, Gabriel y Rafael', sw:'Watk. Mikaeli, Gabrieli na Rafaeli', la:'Ss. Michael, Gabriel et Raphael' } },
  { m:9,  d:30, name:'St. Jerome', url:'https://en.wikipedia.org/wiki/Jerome',
    i18n: { de:'Hl. Hieronymus', fr:'St. J\u00e9r\u00f4me', it:'S. Girolamo', es:'San Jer\u00f3nimo', la:'S. Hieronymus' } },
  { m:10, d:1,  name:'St. Th\u00e9r\u00e8se of Lisieux', url:'https://en.wikipedia.org/wiki/Th%C3%A9r%C3%A8se_of_Lisieux',
    i18n: { de:'Hl. Therese von Lisieux', fr:'Ste. Thérèse de Lisieux', it:'S. Teresa di Lisieux', es:'Santa Teresita de Lisieux', la:'S. Teresia a Iesu Infante' } },
  { m:10, d:2,  name:'Holy Guardian Angels', url:'https://en.wikipedia.org/wiki/Guardian_angel',
    i18n: { de:'Heilige Schutzengel', fr:'Saints Anges Gardiens', it:'Santi Angeli Custodi', es:'Santos \u00c1ngeles Custodios', la:'Ss. Angeli Custodes' } },
  { m:10, d:4,  name:'St. Francis of Assisi', url:'https://en.wikipedia.org/wiki/Francis_of_Assisi',
    i18n: { de:'Hl. Franz von Assisi', fr:'St. François d\'Assise', it:'S. Francesco d\'Assisi', es:'San Francisco de Asís', la:'S. Franciscus Assisiensis' } },
  { m:10, d:7,  name:'Our Lady of the Rosary', url:'https://en.wikipedia.org/wiki/Our_Lady_of_the_Rosary',
    i18n: { de:'Rosenkranzfest', fr:'Notre-Dame du Rosaire', it:'Beata Vergine del Rosario', es:'Nuestra Se\u00f1ora del Rosario', la:'BMV a Rosario' } },
  { m:10, d:15, name:'St. Teresa of \u00c1vila', url:'https://en.wikipedia.org/wiki/Teresa_of_%C3%81vila',
    i18n: { de:'Hl. Teresa von Ávila', fr:'Ste. Thérèse d\'Avila', it:'S. Teresa d\'Avila', es:'Santa Teresa de Ávila', la:'S. Teresia Abulensis' } },
  { m:10, d:17, name:'St. Ignatius of Antioch', url:'https://en.wikipedia.org/wiki/Ignatius_of_Antioch',
    i18n: { de:'Hl. Ignatius von Antiochien', fr:'St. Ignace d\u2019Antioche', it:'S. Ignazio di Antiochia', es:'San Ignacio de Antioqu\u00eda', la:'S. Ignatius Antiochenus' } },
  { m:10, d:18, name:'St. Luke', url:'https://en.wikipedia.org/wiki/Luke_the_Evangelist',
    i18n: { de:'Hl. Lukas', fr:'St. Luc', it:'S. Luca', es:'San Lucas', la:'S. Lucas' } },
  { m:10, d:28, name:'Sts. Simon & Jude', url:'https://en.wikipedia.org/wiki/Simon_the_Zealot',
    i18n: { de:'Hll. Simon und Judas', fr:'Sts. Simon et Jude', it:'Ss. Simone e Giuda', es:'Stos. Simón y Judas', la:'Ss. Simon et Iudas' } },
  { m:11, d:4,  name:'St. Charles Borromeo', url:'https://en.wikipedia.org/wiki/Charles_Borromeo',
    i18n: { de:'Hl. Karl Borrom\u00e4us', fr:'St. Charles Borrom\u00e9e', it:'S. Carlo Borromeo', es:'San Carlos Borromeo', la:'S. Carolus Borromaeus' } },
  { m:11, d:9,  name:'Dedication of the Lateran Basilica', url:'https://en.wikipedia.org/wiki/Archbasilica_of_Saint_John_Lateran',
    i18n: { de:'Weihe der Lateranbasilika', fr:'D\u00e9dicace de la Basilique du Latran', it:'Dedicazione della Basilica Lateranense', es:'Dedicaci\u00f3n de la Bas\u00edlica de Letr\u00e1n', la:'Dedicatio Basilicae Lateranensis' } },
  { m:11, d:10, name:'St. Leo the Great', url:'https://en.wikipedia.org/wiki/Pope_Leo_I',
    i18n: { de:'Hl. Leo der Gro\u00dfe', fr:'St. L\u00e9on le Grand', it:'S. Leone Magno', es:'San Le\u00f3n Magno', la:'S. Leo Magnus' } },
  { m:11, d:11, name:'St. Martin of Tours', url:'https://en.wikipedia.org/wiki/Martin_of_Tours',
    i18n: { de:'Hl. Martin von Tours', fr:'St. Martin de Tours', it:'S. Martino di Tours', es:'San Martín de Tours', la:'S. Martinus Turonensis' } },
  { m:11, d:12, name:'St. Josaphat', url:'https://en.wikipedia.org/wiki/Josaphat_Kuntsevych',
    i18n: { de:'Hl. Josaphat', fr:'St. Josaphat', it:'S. Giosafat', es:'San Josafat', la:'S. Iosaphat' } },
  { m:11, d:17, name:'St. Elizabeth of Hungary', url:'https://en.wikipedia.org/wiki/Elizabeth_of_Hungary',
    i18n: { de:'Hl. Elisabeth von Th\u00fcringen', fr:'Ste. \u00c9lisabeth de Hongrie', it:'S. Elisabetta d\u2019Ungheria', es:'Santa Isabel de Hungr\u00eda', la:'S. Elisabeth Hungariae' } },
  { m:11, d:21, name:'Presentation of the BVM', url:'https://en.wikipedia.org/wiki/Presentation_of_Mary',
    i18n: { de:'Darstellung Mariens', fr:'Pr\u00e9sentation de la Vierge Marie', it:'Presentazione della BVM', es:'Presentaci\u00f3n de la Virgen Mar\u00eda', la:'Praesentatio BMV' } },
  { m:11, d:22, name:'St. Cecilia', url:'https://en.wikipedia.org/wiki/Saint_Cecilia',
    i18n: { de:'Hl. Cäcilia', fr:'Ste. Cécile', it:'S. Cecilia', es:'Santa Cecilia', la:'S. Caecilia' } },
  { m:11, d:30, name:'St. Andrew', url:'https://en.wikipedia.org/wiki/Andrew_the_Apostle',
    i18n: { de:'Hl. Andreas', fr:'St. André', it:'S. Andrea', es:'San Andrés', la:'S. Andreas' } },
  { m:12, d:3,  name:'St. Francis Xavier', url:'https://en.wikipedia.org/wiki/Francis_Xavier',
    i18n: { de:'Hl. Franz Xaver', fr:'St. Fran\u00e7ois Xavier', it:'S. Francesco Saverio', es:'San Francisco Javier', la:'S. Franciscus Xaverius' } },
  { m:12, d:6,  name:'St. Nicholas', url:'https://en.wikipedia.org/wiki/Saint_Nicholas',
    i18n: { de:'Hl. Nikolaus', fr:'St. Nicolas', it:'S. Nicola', es:'San Nicol\u00e1s', sw:'Mtk. Nikolasi', la:'S. Nicolaus' } },
  { m:12, d:7,  name:'St. Ambrose', url:'https://en.wikipedia.org/wiki/Ambrose',
    i18n: { de:'Hl. Ambrosius', fr:'St. Ambroise', it:'S. Ambrogio', es:'San Ambrosio', la:'S. Ambrosius' } },
  { m:12, d:13, name:'St. Lucy', url:'https://en.wikipedia.org/wiki/Saint_Lucy',
    i18n: { de:'Hl. Lucia', fr:'Ste. Lucie', it:'S. Lucia', es:'Santa Luc\u00eda', la:'S. Lucia' } },
  { m:12, d:14, name:'St. John of the Cross', url:'https://en.wikipedia.org/wiki/John_of_the_Cross',
    i18n: { de:'Hl. Johannes vom Kreuz', fr:'St. Jean de la Croix', it:'S. Giovanni della Croce', es:'San Juan de la Cruz', la:'S. Ioannes a Cruce' } },
  { m:12, d:26, name:'St. Stephen', url:'https://en.wikipedia.org/wiki/Saint_Stephen',
    i18n: { de:'Hl. Stephanus', fr:'St. Étienne', it:'S. Stefano', es:'San Esteban', la:'S. Stephanus' } },
  { m:12, d:27, name:'St. John the Evangelist', url:'https://en.wikipedia.org/wiki/John_the_Apostle',
    i18n: { de:'Hl. Johannes der Evangelist', fr:'St. Jean l\'Évangéliste', it:'S. Giovanni Evangelista', es:'San Juan Evangelista', la:'S. Ioannes Evangelista' } },
  { m:12, d:28, name:'Holy Innocents', url:'https://en.wikipedia.org/wiki/Massacre_of_the_Innocents',
    i18n: { de:'Unschuldige Kinder', fr:'Saints Innocents', it:'Santi Innocenti', es:'Santos Inocentes', la:'Sancti Innocentes' } },
];

// Moveable feasts (Easter-based): { offset, name, url, i18n? }
const LITURGICAL_MOVEABLE = [
  { offset:-46, name:'Ash Wednesday', url:'https://en.wikipedia.org/wiki/Ash_Wednesday',
    i18n: { de:'Aschermittwoch', fr:'Mercredi des Cendres', it:'Mercoledì delle Ceneri', es:'Miércoles de Ceniza', sw:'Jumatano ya Majivu', la:'Feria Quarta Cinerum' } },
  { offset:-7,  name:'Palm Sunday', url:'https://en.wikipedia.org/wiki/Palm_Sunday',
    i18n: { de:'Palmsonntag', fr:'Dimanche des Rameaux', it:'Domenica delle Palme', es:'Domingo de Ramos', sw:'Jumapili ya Matawi', la:'Dominica in Palmis' } },
  { offset:-3,  name:'Holy Thursday', url:'https://en.wikipedia.org/wiki/Maundy_Thursday',
    i18n: { de:'Gründonnerstag', fr:'Jeudi saint', it:'Giovedì santo', es:'Jueves Santo', sw:'Alhamisi Kuu', la:'Feria Quinta in Cena Domini' } },
  { offset:-2,  name:'Good Friday', url:'https://en.wikipedia.org/wiki/Good_Friday',
    i18n: { de:'Karfreitag', fr:'Vendredi saint', it:'Venerdì santo', es:'Viernes Santo', sw:'Ijumaa Kuu', la:'Feria Sexta in Passione Domini' } },
  { offset:-1,  name:'Holy Saturday', url:'https://en.wikipedia.org/wiki/Holy_Saturday',
    i18n: { de:'Karsamstag', fr:'Samedi saint', it:'Sabato santo', es:'Sábado Santo', sw:'Jumamosi Kuu', la:'Sabbatum Sanctum' } },
  { offset:0,   name:'Easter', url:'https://en.wikipedia.org/wiki/Easter',
    i18n: { de:'Ostern', fr:'P\u00e2ques', it:'Pasqua', es:'Pascua', sw:'Pasaka', la:'Pascha' } },
  { offset:7,   name:'Divine Mercy Sunday', url:'https://en.wikipedia.org/wiki/Divine_Mercy_Sunday',
    i18n: { de:'Barmherzigkeitssonntag', fr:'Dimanche de la Mis\u00e9ricorde divine', it:'Domenica della Divina Misericordia', es:'Domingo de la Divina Misericordia', la:'Dominica Divinae Misericordiae' } },
  { offset:39,  name:'Ascension', url:'https://en.wikipedia.org/wiki/Ascension_of_Jesus',
    i18n: { de:'Christi Himmelfahrt', fr:'Ascension', it:'Ascensione', es:'Ascensión', sw:'Kupaa kwa Yesu', la:'Ascensio Domini' } },
  { offset:49,  name:'Pentecost', url:'https://en.wikipedia.org/wiki/Pentecost',
    i18n: { de:'Pfingsten', fr:'Pentecôte', it:'Pentecoste', es:'Pentecostés', sw:'Pentekoste', la:'Pentecostes' } },
  { offset:56,  name:'Trinity Sunday', url:'https://en.wikipedia.org/wiki/Trinity_Sunday',
    i18n: { de:'Dreifaltigkeitssonntag', fr:'Dimanche de la Trinité', it:'Santissima Trinità', es:'Domingo de la Trinidad', la:'Sollemnitas Sanctissimae Trinitatis' } },
  { offset:60,  name:'Corpus Christi', url:'https://en.wikipedia.org/wiki/Corpus_Christi_(feast)',
    i18n: { de:'Fronleichnam', fr:'F\u00eate-Dieu', it:'Corpus Domini', es:'Corpus Christi', la:'Sollemnitas Corporis et Sanguinis Christi' } },
  { offset:68,  name:'Sacred Heart of Jesus', url:'https://en.wikipedia.org/wiki/Sacred_Heart',
    i18n: { de:'Heiligstes Herz Jesu', fr:'Sacr\u00e9-C\u0153ur de J\u00e9sus', it:'Sacratissimo Cuore di Ges\u00f9', es:'Sagrado Coraz\u00f3n de Jes\u00fas', la:'Sacratissimum Cor Iesu' } },
];

function buildLiturgicalHolidayMap(gregYear) {
  const map = new Map();
  const add = (date, entry) => {
    const ds = _liturgicalDateStr(date);
    if (!map.has(ds)) map.set(ds, []);
    map.get(ds).push(entry);
  };

  const easter = _liturgicalEaster(gregYear);

  // Fixed dates
  for (const f of LITURGICAL_FIXED) {
    add(new Date(Date.UTC(gregYear, f.m - 1, f.d)), { name: f.name, url: f.url, i18n: f.i18n });
  }

  // Moveable feasts (Easter-based)
  for (const mv of LITURGICAL_MOVEABLE) {
    add(_liturgicalOffset(easter, mv.offset), { name: mv.name, url: mv.url, i18n: mv.i18n });
  }

  // Baptism of the Lord — Sunday after Jan 6
  const jan6 = new Date(Date.UTC(gregYear, 0, 6));
  const jan6dow = jan6.getUTCDay(); // 0=Sun
  const baptismOffset = jan6dow === 0 ? 7 : 7 - jan6dow; // next Sunday
  add(new Date(jan6.getTime() + baptismOffset * 86400000), {
    name: 'Baptism of the Lord', url: 'https://en.wikipedia.org/wiki/Baptism_of_the_Lord',
    i18n: { de:'Taufe des Herrn', fr:'Bapt\u00eame du Seigneur', it:'Battesimo del Signore', es:'Bautismo del Se\u00f1or', la:'Baptisma Domini' }
  });

  // Holy Family — Sunday between Dec 25-31 (if Christmas is Sun, use Dec 30)
  const prevChristmas = new Date(Date.UTC(gregYear - 1, 11, 25));
  const prevDow = prevChristmas.getUTCDay();
  if (prevDow === 0) {
    add(new Date(Date.UTC(gregYear - 1, 11, 30)), {
      name: 'Holy Family', url: 'https://en.wikipedia.org/wiki/Feast_of_the_Holy_Family',
      i18n: { de:'Heilige Familie', fr:'Sainte Famille', it:'Santa Famiglia', es:'Sagrada Familia', la:'Sacra Familia' }
    });
  } else {
    const hfOffset = 7 - prevDow; // days until next Sunday
    add(new Date(prevChristmas.getTime() + hfOffset * 86400000), {
      name: 'Holy Family', url: 'https://en.wikipedia.org/wiki/Feast_of_the_Holy_Family',
      i18n: { de:'Heilige Familie', fr:'Sainte Famille', it:'Santa Famiglia', es:'Sagrada Familia', la:'Sacra Familia' }
    });
  }
  // Also compute for current year's Christmas
  const curChristmas = new Date(Date.UTC(gregYear, 11, 25));
  const curDow = curChristmas.getUTCDay();
  if (curDow === 0) {
    add(new Date(Date.UTC(gregYear, 11, 30)), {
      name: 'Holy Family', url: 'https://en.wikipedia.org/wiki/Feast_of_the_Holy_Family',
      i18n: { de:'Heilige Familie', fr:'Sainte Famille', it:'Santa Famiglia', es:'Sagrada Familia', la:'Sacra Familia' }
    });
  } else {
    const hfOffset2 = 7 - curDow;
    add(new Date(curChristmas.getTime() + hfOffset2 * 86400000), {
      name: 'Holy Family', url: 'https://en.wikipedia.org/wiki/Feast_of_the_Holy_Family',
      i18n: { de:'Heilige Familie', fr:'Sainte Famille', it:'Santa Famiglia', es:'Sagrada Familia', la:'Sacra Familia' }
    });
  }

  // Christ the King — last Sunday before Advent
  const advent = _liturgicalAdvent(gregYear);
  add(new Date(advent.getTime() - 7 * 86400000), {
    name: 'Christ the King', url: 'https://en.wikipedia.org/wiki/Christ_the_King',
    i18n: { de:'Christk\u00f6nigssonntag', fr:'Christ Roi', it:'Cristo Re', es:'Cristo Rey', la:'Christus Rex' }
  });

  // Advent (1st Sunday)
  add(advent, {
    name: 'First Sunday of Advent', url: 'https://en.wikipedia.org/wiki/Advent',
    i18n: { de:'Erster Adventssonntag', fr:'Premier dimanche de l\'Avent', it:'Prima domenica d\'Avvento', es:'Primer domingo de Adviento', sw:'Jumapili ya kwanza ya Majilio', la:'Dominica Prima Adventus' }
  });

  return map;
}
