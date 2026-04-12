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
  { m:2,  d:2,  name:'Candlemas', url:'https://en.wikipedia.org/wiki/Candlemas',
    i18n: { de:'Mariä Lichtmess', fr:'Chandeleur', it:'Candelora', es:'Candelaria', sw:'Kandlimasi', la:'Festum Candelarum' } },
  { m:3,  d:19, name:'St. Joseph', url:'https://en.wikipedia.org/wiki/Saint_Joseph%27s_Day',
    i18n: { de:'Hl. Josef', fr:'St. Joseph', it:'S. Giuseppe', es:'San José', sw:'Mtk. Yosefu', la:'S. Ioseph' } },
  { m:3,  d:25, name:'Annunciation', url:'https://en.wikipedia.org/wiki/Annunciation',
    i18n: { de:'Verkündigung des Herrn', fr:'Annonciation', it:'Annunciazione', es:'Anunciación', sw:'Tangazo', la:'Annuntiatio' } },
  { m:6,  d:24, name:'Nativity of John the Baptist', url:'https://en.wikipedia.org/wiki/Nativity_of_John_the_Baptist',
    i18n: { de:'Geburt Johannes des Täufers', fr:'Nativité de Jean le Baptiste', it:'Natività di Giovanni Battista', es:'Natividad de Juan el Bautista', la:'Nativitas S. Ioannis Baptistae' } },
  { m:6,  d:29, name:'Sts. Peter & Paul', url:'https://en.wikipedia.org/wiki/Feast_of_Saints_Peter_and_Paul',
    i18n: { de:'Hll. Petrus und Paulus', fr:'Sts. Pierre et Paul', it:'Ss. Pietro e Paolo', es:'Stos. Pedro y Pablo', la:'Ss. Petrus et Paulus' } },
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

  // ── Saint days (widely observed) ──
  { m:1,  d:17, name:'St. Anthony the Great', url:'https://en.wikipedia.org/wiki/Anthony_the_Great',
    i18n: { de:'Hl. Antonius der Große', fr:'St. Antoine le Grand', it:'S. Antonio Abate', es:'San Antonio Abad', la:'S. Antonius Magnus' } },
  { m:1,  d:25, name:'Conversion of St. Paul', url:'https://en.wikipedia.org/wiki/Conversion_of_Paul_the_Apostle',
    i18n: { de:'Bekehrung des Hl. Paulus', fr:'Conversion de St. Paul', it:'Conversione di S. Paolo', es:'Conversión de San Pablo', la:'Conversio S. Pauli' } },
  { m:2,  d:3,  name:'St. Blaise', url:'https://en.wikipedia.org/wiki/Saint_Blaise',
    i18n: { de:'Hl. Blasius', fr:'St. Blaise', it:'S. Biagio', es:'San Blas', la:'S. Blasius' } },
  { m:2,  d:5,  name:'St. Agatha', url:'https://en.wikipedia.org/wiki/Agatha_of_Sicily',
    i18n: { de:'Hl. Agatha', fr:'Ste. Agathe', it:'S. Agata', es:'Santa Águeda', la:'S. Agatha' } },
  { m:2,  d:14, name:'Sts. Cyril & Methodius', url:'https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius',
    i18n: { de:'Hll. Cyrill und Methodius', fr:'Sts. Cyrille et Méthode', it:'Ss. Cirillo e Metodio', es:'Stos. Cirilo y Metodio', la:'Ss. Cyrillus et Methodius' } },
  { m:3,  d:17, name:'St. Patrick', url:'https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day',
    i18n: { de:'Hl. Patrick', fr:'St. Patrick', it:'S. Patrizio', es:'San Patricio', la:'S. Patricius' } },
  { m:4,  d:23, name:'St. George', url:'https://en.wikipedia.org/wiki/Saint_George%27s_Day',
    i18n: { de:'Hl. Georg', fr:'St. Georges', it:'S. Giorgio', es:'San Jorge', la:'S. Georgius' } },
  { m:4,  d:25, name:'St. Mark', url:'https://en.wikipedia.org/wiki/Mark_the_Evangelist',
    i18n: { de:'Hl. Markus', fr:'St. Marc', it:'S. Marco', es:'San Marcos', la:'S. Marcus' } },
  { m:5,  d:1,  name:'St. Joseph the Worker', url:'https://en.wikipedia.org/wiki/Saint_Joseph_the_Worker',
    i18n: { de:'Hl. Josef der Arbeiter', fr:'St. Joseph artisan', it:'S. Giuseppe lavoratore', es:'San José Obrero', la:'S. Ioseph Opifex' } },
  { m:5,  d:3,  name:'Sts. Philip & James', url:'https://en.wikipedia.org/wiki/Philip_the_Apostle',
    i18n: { de:'Hll. Philippus und Jakobus', fr:'Sts. Philippe et Jacques', it:'Ss. Filippo e Giacomo', es:'Stos. Felipe y Santiago', la:'Ss. Philippus et Iacobus' } },
  { m:5,  d:14, name:'St. Matthias', url:'https://en.wikipedia.org/wiki/Saint_Matthias',
    i18n: { de:'Hl. Matthias', fr:'St. Matthias', it:'S. Mattia', es:'San Matías', la:'S. Matthias' } },
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
  { m:7,  d:22, name:'St. Mary Magdalene', url:'https://en.wikipedia.org/wiki/Mary_Magdalene',
    i18n: { de:'Hl. Maria Magdalena', fr:'Ste. Marie Madeleine', it:'S. Maria Maddalena', es:'Santa María Magdalena', la:'S. Maria Magdalena' } },
  { m:7,  d:25, name:'St. James the Greater', url:'https://en.wikipedia.org/wiki/James_the_Great',
    i18n: { de:'Hl. Jakobus der Ältere', fr:'St. Jacques le Majeur', it:'S. Giacomo il Maggiore', es:'Santiago el Mayor', la:'S. Iacobus Maior' } },
  { m:7,  d:26, name:'Sts. Joachim & Anne', url:'https://en.wikipedia.org/wiki/Joachim_and_Anne',
    i18n: { de:'Hll. Joachim und Anna', fr:'Sts. Joachim et Anne', it:'Ss. Gioacchino e Anna', es:'Stos. Joaquín y Ana', la:'Ss. Ioachim et Anna' } },
  { m:7,  d:29, name:'St. Martha', url:'https://en.wikipedia.org/wiki/Martha',
    i18n: { de:'Hl. Martha', fr:'Ste. Marthe', it:'S. Marta', es:'Santa Marta', la:'S. Martha' } },
  { m:8,  d:10, name:'St. Lawrence', url:'https://en.wikipedia.org/wiki/Lawrence_of_Rome',
    i18n: { de:'Hl. Laurentius', fr:'St. Laurent', it:'S. Lorenzo', es:'San Lorenzo', la:'S. Laurentius' } },
  { m:8,  d:11, name:'St. Clare', url:'https://en.wikipedia.org/wiki/Clare_of_Assisi',
    i18n: { de:'Hl. Klara', fr:'Ste. Claire', it:'S. Chiara', es:'Santa Clara', la:'S. Clara' } },
  { m:8,  d:24, name:'St. Bartholomew', url:'https://en.wikipedia.org/wiki/Bartholomew_the_Apostle',
    i18n: { de:'Hl. Bartholomäus', fr:'St. Barthélemy', it:'S. Bartolomeo', es:'San Bartolomé', la:'S. Bartholomaeus' } },
  { m:8,  d:28, name:'St. Augustine', url:'https://en.wikipedia.org/wiki/Augustine_of_Hippo',
    i18n: { de:'Hl. Augustinus', fr:'St. Augustin', it:'S. Agostino', es:'San Agustín', la:'S. Augustinus' } },
  { m:9,  d:21, name:'St. Matthew', url:'https://en.wikipedia.org/wiki/Matthew_the_Apostle',
    i18n: { de:'Hl. Matthäus', fr:'St. Matthieu', it:'S. Matteo', es:'San Mateo', la:'S. Matthaeus' } },
  { m:9,  d:29, name:'Michaelmas', url:'https://en.wikipedia.org/wiki/Michaelmas',
    i18n: { de:'Michaelistag', fr:'Saint-Michel', it:'San Michele', es:'San Miguel', la:'Festum S. Michaelis' } },
  { m:10, d:1,  name:'St. Thérèse of Lisieux', url:'https://en.wikipedia.org/wiki/Th%C3%A9r%C3%A8se_of_Lisieux',
    i18n: { de:'Hl. Therese von Lisieux', fr:'Ste. Thérèse de Lisieux', it:'S. Teresa di Lisieux', es:'Santa Teresita de Lisieux', la:'S. Teresia a Iesu Infante' } },
  { m:10, d:4,  name:'St. Francis of Assisi', url:'https://en.wikipedia.org/wiki/Francis_of_Assisi',
    i18n: { de:'Hl. Franz von Assisi', fr:'St. François d\'Assise', it:'S. Francesco d\'Assisi', es:'San Francisco de Asís', la:'S. Franciscus Assisiensis' } },
  { m:10, d:15, name:'St. Teresa of Ávila', url:'https://en.wikipedia.org/wiki/Teresa_of_%C3%81vila',
    i18n: { de:'Hl. Teresa von Ávila', fr:'Ste. Thérèse d\'Avila', it:'S. Teresa d\'Avila', es:'Santa Teresa de Ávila', la:'S. Teresia Abulensis' } },
  { m:10, d:18, name:'St. Luke', url:'https://en.wikipedia.org/wiki/Luke_the_Evangelist',
    i18n: { de:'Hl. Lukas', fr:'St. Luc', it:'S. Luca', es:'San Lucas', la:'S. Lucas' } },
  { m:10, d:28, name:'Sts. Simon & Jude', url:'https://en.wikipedia.org/wiki/Simon_the_Zealot',
    i18n: { de:'Hll. Simon und Judas', fr:'Sts. Simon et Jude', it:'Ss. Simone e Giuda', es:'Stos. Simón y Judas', la:'Ss. Simon et Iudas' } },
  { m:11, d:11, name:'St. Martin of Tours', url:'https://en.wikipedia.org/wiki/Martin_of_Tours',
    i18n: { de:'Hl. Martin von Tours', fr:'St. Martin de Tours', it:'S. Martino di Tours', es:'San Martín de Tours', la:'S. Martinus Turonensis' } },
  { m:11, d:22, name:'St. Cecilia', url:'https://en.wikipedia.org/wiki/Saint_Cecilia',
    i18n: { de:'Hl. Cäcilia', fr:'Ste. Cécile', it:'S. Cecilia', es:'Santa Cecilia', la:'S. Caecilia' } },
  { m:11, d:30, name:'St. Andrew', url:'https://en.wikipedia.org/wiki/Andrew_the_Apostle',
    i18n: { de:'Hl. Andreas', fr:'St. André', it:'S. Andrea', es:'San Andrés', la:'S. Andreas' } },
  { m:12, d:3,  name:'St. Francis Xavier', url:'https://en.wikipedia.org/wiki/Francis_Xavier',
    i18n: { de:'Hl. Franz Xaver', fr:'St. François Xavier', it:'S. Francesco Saverio', es:'San Francisco Javier', la:'S. Franciscus Xaverius' } },
  { m:12, d:6,  name:'St. Nicholas', url:'https://en.wikipedia.org/wiki/Saint_Nicholas',
    i18n: { de:'Hl. Nikolaus', fr:'St. Nicolas', it:'S. Nicola', es:'San Nicolás', sw:'Mtk. Nikolasi', la:'S. Nicolaus' } },
  { m:12, d:13, name:'St. Lucy', url:'https://en.wikipedia.org/wiki/Saint_Lucy',
    i18n: { de:'Hl. Lucia', fr:'Ste. Lucie', it:'S. Lucia', es:'Santa Lucía', la:'S. Lucia' } },
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
    i18n: { de:'Ostern', fr:'Pâques', it:'Pasqua', es:'Pascua', sw:'Pasaka', la:'Pascha' } },
  { offset:39,  name:'Ascension', url:'https://en.wikipedia.org/wiki/Ascension_of_Jesus',
    i18n: { de:'Christi Himmelfahrt', fr:'Ascension', it:'Ascensione', es:'Ascensión', sw:'Kupaa kwa Yesu', la:'Ascensio Domini' } },
  { offset:49,  name:'Pentecost', url:'https://en.wikipedia.org/wiki/Pentecost',
    i18n: { de:'Pfingsten', fr:'Pentecôte', it:'Pentecoste', es:'Pentecostés', sw:'Pentekoste', la:'Pentecostes' } },
  { offset:56,  name:'Trinity Sunday', url:'https://en.wikipedia.org/wiki/Trinity_Sunday',
    i18n: { de:'Dreifaltigkeitssonntag', fr:'Dimanche de la Trinité', it:'Santissima Trinità', es:'Domingo de la Trinidad', la:'Sollemnitas Sanctissimae Trinitatis' } },
  { offset:60,  name:'Corpus Christi', url:'https://en.wikipedia.org/wiki/Corpus_Christi_(feast)',
    i18n: { de:'Fronleichnam', fr:'Fête-Dieu', it:'Corpus Domini', es:'Corpus Christi', la:'Sollemnitas Corporis et Sanguinis Christi' } },
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

  // Advent (1st Sunday)
  add(_liturgicalAdvent(gregYear), {
    name: 'First Sunday of Advent', url: 'https://en.wikipedia.org/wiki/Advent',
    i18n: { de:'Erster Adventssonntag', fr:'Premier dimanche de l\'Avent', it:'Prima domenica d\'Avvento', es:'Primer domingo de Adviento', sw:'Jumapili ya kwanza ya Majilio', la:'Dominica Prima Adventus' }
  });

  return map;
}
