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

// Fixed saint days & solemnities: { m, d, name, url }
const LITURGICAL_FIXED = [
  // ── Solemnities & major feasts ──
  { m:1,  d:1,  name:'Mary, Mother of God',         url:'https://en.wikipedia.org/wiki/Solemnity_of_Mary,_Mother_of_God' },
  { m:1,  d:6,  name:'Epiphany',                    url:'https://en.wikipedia.org/wiki/Epiphany_(holiday)' },
  { m:2,  d:2,  name:'Candlemas',                   url:'https://en.wikipedia.org/wiki/Candlemas' },
  { m:3,  d:19, name:'St. Joseph',                  url:'https://en.wikipedia.org/wiki/Saint_Joseph%27s_Day' },
  { m:3,  d:25, name:'Annunciation',                url:'https://en.wikipedia.org/wiki/Annunciation' },
  { m:6,  d:24, name:'Nativity of John the Baptist', url:'https://en.wikipedia.org/wiki/Nativity_of_John_the_Baptist' },
  { m:6,  d:29, name:'Sts. Peter & Paul',           url:'https://en.wikipedia.org/wiki/Feast_of_Saints_Peter_and_Paul' },
  { m:8,  d:6,  name:'Transfiguration',             url:'https://en.wikipedia.org/wiki/Feast_of_the_Transfiguration' },
  { m:8,  d:15, name:'Assumption of Mary',          url:'https://en.wikipedia.org/wiki/Assumption_of_Mary' },
  { m:9,  d:14, name:'Exaltation of the Holy Cross', url:'https://en.wikipedia.org/wiki/Feast_of_the_Cross' },
  { m:11, d:1,  name:'All Saints Day',              url:'https://en.wikipedia.org/wiki/All_Saints%27_Day' },
  { m:11, d:2,  name:'All Souls Day',               url:'https://en.wikipedia.org/wiki/All_Souls%27_Day' },
  { m:12, d:8,  name:'Immaculate Conception',       url:'https://en.wikipedia.org/wiki/Immaculate_Conception' },
  { m:12, d:25, name:'Christmas',                   url:'https://en.wikipedia.org/wiki/Christmas' },

  // ── Saint days (widely observed) ──
  { m:1,  d:17, name:'St. Anthony the Great',       url:'https://en.wikipedia.org/wiki/Anthony_the_Great' },
  { m:1,  d:25, name:'Conversion of St. Paul',      url:'https://en.wikipedia.org/wiki/Conversion_of_Paul_the_Apostle' },
  { m:2,  d:3,  name:'St. Blaise',                  url:'https://en.wikipedia.org/wiki/Saint_Blaise' },
  { m:2,  d:5,  name:'St. Agatha',                  url:'https://en.wikipedia.org/wiki/Agatha_of_Sicily' },
  { m:2,  d:14, name:'Sts. Cyril & Methodius',      url:'https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius' },
  { m:3,  d:17, name:'St. Patrick',                 url:'https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day' },
  { m:4,  d:23, name:'St. George',                  url:'https://en.wikipedia.org/wiki/Saint_George%27s_Day' },
  { m:4,  d:25, name:'St. Mark',                    url:'https://en.wikipedia.org/wiki/Mark_the_Evangelist' },
  { m:5,  d:1,  name:'St. Joseph the Worker',       url:'https://en.wikipedia.org/wiki/Saint_Joseph_the_Worker' },
  { m:5,  d:3,  name:'Sts. Philip & James',         url:'https://en.wikipedia.org/wiki/Philip_the_Apostle' },
  { m:5,  d:14, name:'St. Matthias',                url:'https://en.wikipedia.org/wiki/Saint_Matthias' },
  { m:6,  d:3,  name:'St. Charles Lwanga',          url:'https://en.wikipedia.org/wiki/Charles_Lwanga' },
  { m:6,  d:11, name:'St. Barnabas',                url:'https://en.wikipedia.org/wiki/Barnabas' },
  { m:6,  d:13, name:'St. Anthony of Padua',        url:'https://en.wikipedia.org/wiki/Anthony_of_Padua' },
  { m:7,  d:3,  name:'St. Thomas the Apostle',      url:'https://en.wikipedia.org/wiki/Thomas_the_Apostle' },
  { m:7,  d:11, name:'St. Benedict',                url:'https://en.wikipedia.org/wiki/Benedict_of_Nursia' },
  { m:7,  d:22, name:'St. Mary Magdalene',          url:'https://en.wikipedia.org/wiki/Mary_Magdalene' },
  { m:7,  d:25, name:'St. James the Greater',       url:'https://en.wikipedia.org/wiki/James_the_Great' },
  { m:7,  d:26, name:'Sts. Joachim & Anne',         url:'https://en.wikipedia.org/wiki/Joachim_and_Anne' },
  { m:7,  d:29, name:'St. Martha',                  url:'https://en.wikipedia.org/wiki/Martha' },
  { m:8,  d:10, name:'St. Lawrence',                url:'https://en.wikipedia.org/wiki/Lawrence_of_Rome' },
  { m:8,  d:11, name:'St. Clare',                   url:'https://en.wikipedia.org/wiki/Clare_of_Assisi' },
  { m:8,  d:24, name:'St. Bartholomew',             url:'https://en.wikipedia.org/wiki/Bartholomew_the_Apostle' },
  { m:8,  d:28, name:'St. Augustine',               url:'https://en.wikipedia.org/wiki/Augustine_of_Hippo' },
  { m:9,  d:21, name:'St. Matthew',                 url:'https://en.wikipedia.org/wiki/Matthew_the_Apostle' },
  { m:9,  d:29, name:'Michaelmas',                  url:'https://en.wikipedia.org/wiki/Michaelmas' },
  { m:10, d:1,  name:'St. Thérèse of Lisieux',     url:'https://en.wikipedia.org/wiki/Th%C3%A9r%C3%A8se_of_Lisieux' },
  { m:10, d:4,  name:'St. Francis of Assisi',       url:'https://en.wikipedia.org/wiki/Francis_of_Assisi' },
  { m:10, d:15, name:'St. Teresa of Ávila',         url:'https://en.wikipedia.org/wiki/Teresa_of_%C3%81vila' },
  { m:10, d:18, name:'St. Luke',                    url:'https://en.wikipedia.org/wiki/Luke_the_Evangelist' },
  { m:10, d:28, name:'Sts. Simon & Jude',           url:'https://en.wikipedia.org/wiki/Simon_the_Zealot' },
  { m:11, d:11, name:'St. Martin of Tours',         url:'https://en.wikipedia.org/wiki/Martin_of_Tours' },
  { m:11, d:22, name:'St. Cecilia',                 url:'https://en.wikipedia.org/wiki/Saint_Cecilia' },
  { m:11, d:30, name:'St. Andrew',                  url:'https://en.wikipedia.org/wiki/Andrew_the_Apostle' },
  { m:12, d:3,  name:'St. Francis Xavier',          url:'https://en.wikipedia.org/wiki/Francis_Xavier' },
  { m:12, d:6,  name:'St. Nicholas',                url:'https://en.wikipedia.org/wiki/Saint_Nicholas' },
  { m:12, d:13, name:'St. Lucy',                    url:'https://en.wikipedia.org/wiki/Saint_Lucy' },
  { m:12, d:26, name:'St. Stephen',                 url:'https://en.wikipedia.org/wiki/Saint_Stephen' },
  { m:12, d:27, name:'St. John the Evangelist',     url:'https://en.wikipedia.org/wiki/John_the_Apostle' },
  { m:12, d:28, name:'Holy Innocents',              url:'https://en.wikipedia.org/wiki/Massacre_of_the_Innocents' },
];

function buildLiturgicalHolidayMap(gregYear) {
  const map = new Map();
  const add = (date, name, url) => {
    const ds = _liturgicalDateStr(date);
    if (!map.has(ds)) map.set(ds, []);
    map.get(ds).push({ name, url });
  };

  const easter = _liturgicalEaster(gregYear);

  // Fixed dates
  for (const f of LITURGICAL_FIXED) {
    add(new Date(Date.UTC(gregYear, f.m - 1, f.d)), f.name, f.url);
  }

  // Moveable feasts (Easter-based)
  add(_liturgicalOffset(easter, -46), 'Ash Wednesday',        'https://en.wikipedia.org/wiki/Ash_Wednesday');
  add(_liturgicalOffset(easter, -7),  'Palm Sunday',          'https://en.wikipedia.org/wiki/Palm_Sunday');
  add(_liturgicalOffset(easter, -3),  'Holy Thursday',        'https://en.wikipedia.org/wiki/Maundy_Thursday');
  add(_liturgicalOffset(easter, -2),  'Good Friday',          'https://en.wikipedia.org/wiki/Good_Friday');
  add(_liturgicalOffset(easter, -1),  'Holy Saturday',        'https://en.wikipedia.org/wiki/Holy_Saturday');
  add(easter,                         'Easter',               'https://en.wikipedia.org/wiki/Easter');
  add(_liturgicalOffset(easter, 39),  'Ascension',            'https://en.wikipedia.org/wiki/Ascension_of_Jesus');
  add(_liturgicalOffset(easter, 49),  'Pentecost',            'https://en.wikipedia.org/wiki/Pentecost');
  add(_liturgicalOffset(easter, 56),  'Trinity Sunday',       'https://en.wikipedia.org/wiki/Trinity_Sunday');
  add(_liturgicalOffset(easter, 60),  'Corpus Christi',       'https://en.wikipedia.org/wiki/Corpus_Christi_(feast)');

  // Advent (1st Sunday)
  add(_liturgicalAdvent(gregYear), 'First Sunday of Advent',  'https://en.wikipedia.org/wiki/Advent');

  return map;
}
