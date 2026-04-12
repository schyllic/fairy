// ═══ Fairy Calendar — holiday-packs.js ═══
// Holiday pack definitions for the multi-pack holiday system.
// Each pack uses either:
//   entries: array of { name, month, day, url? } or { name, rule: { month, weekday, n }, url? }
//   computeMap(gregYear): function returning Map<"YYYY-MM-DD", {name, url?}[]>

const HOLIDAY_PACKS = {

  us: {
    label: 'US',
    desc:  'US federal holidays',
    entries: [
      { name: "New Year's Day",   month: 1,  day: 1,  url: 'https://en.wikipedia.org/wiki/New_Year%27s_Day' },
      { name: "Independence Day", month: 7,  day: 4,  url: 'https://en.wikipedia.org/wiki/Independence_Day_(United_States)' },
      { name: "Veterans Day",     month: 11, day: 11, url: 'https://en.wikipedia.org/wiki/Veterans_Day' },
      { name: "Christmas",        month: 12, day: 25, url: 'https://en.wikipedia.org/wiki/Christmas' },
      { name: "MLK Day",          rule: { month:1,  weekday:1, n:3  }, url: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr._Day' },
      { name: "Presidents Day",   rule: { month:2,  weekday:1, n:3  }, url: 'https://en.wikipedia.org/wiki/Presidents%27_Day' },
      { name: "Memorial Day",     rule: { month:5,  weekday:1, n:-1 }, url: 'https://en.wikipedia.org/wiki/Memorial_Day' },
      { name: "Labor Day",        rule: { month:9,  weekday:1, n:1  }, url: 'https://en.wikipedia.org/wiki/Labor_Day' },
      { name: "Columbus Day",     rule: { month:10, weekday:1, n:2  }, url: 'https://en.wikipedia.org/wiki/Columbus_Day' },
      { name: "Thanksgiving",     rule: { month:11, weekday:4, n:4  }, url: 'https://en.wikipedia.org/wiki/Thanksgiving_(United_States)' },
    ],
  },

  wheel: {
    label: 'Wheel',
    desc:  'Celtic/Pagan Wheel of the Year',
    entries: [
      { name: 'Imbolc',      month: 2,  day: 1,  url: 'https://en.wikipedia.org/wiki/Imbolc' },
      { name: 'Ostara',      month: 3,  day: 20, url: 'https://en.wikipedia.org/wiki/Ostara' },
      { name: 'Beltane',     month: 5,  day: 1,  url: 'https://en.wikipedia.org/wiki/Beltane' },
      { name: 'Litha',       month: 6,  day: 21, url: 'https://en.wikipedia.org/wiki/Litha' },
      { name: 'Lughnasadh',  month: 8,  day: 1,  url: 'https://en.wikipedia.org/wiki/Lughnasadh' },
      { name: 'Mabon',       month: 9,  day: 22, url: 'https://en.wikipedia.org/wiki/Mabon_(holiday)' },
      { name: 'Samhain',     month: 10, day: 31, url: 'https://en.wikipedia.org/wiki/Samhain' },
      { name: 'Yule',        month: 12, day: 21, url: 'https://en.wikipedia.org/wiki/Yule' },
    ],
  },

  norse: {
    label: 'Norse',
    desc:  'Norse & Germanic seasonal observances',
    entries: [
      { name: 'Þorrablót',       month: 1,  day: 19, url: 'https://en.wikipedia.org/wiki/%C3%9Eorrablót' },
      { name: 'Dísablót',        month: 2,  day: 2,  url: 'https://en.wikipedia.org/wiki/D%C3%ADsabl%C3%B3t' },
      { name: 'Vernal Blót',     month: 3,  day: 20, url: 'https://en.wikipedia.org/wiki/Bl%C3%B3t' },
      { name: 'Walpurgis Night', month: 4,  day: 30, url: 'https://en.wikipedia.org/wiki/Walpurgis_Night' },
      { name: 'Sigrblót',        month: 4,  day: 30, url: 'https://en.wikipedia.org/wiki/Sigrbl%C3%B3t' },
      { name: 'Midsommar',       month: 6,  day: 21, url: 'https://en.wikipedia.org/wiki/Midsummer' },
      { name: 'Freyfaxi',        month: 8,  day: 1,  url: 'https://en.wikipedia.org/wiki/Freyfaxi' },
      { name: 'Haustblót',       month: 9,  day: 22, url: 'https://en.wikipedia.org/wiki/Bl%C3%B3t' },
      { name: 'Vetrnætr',        month: 10, day: 14, url: 'https://en.wikipedia.org/wiki/Winter_Nights' },
      { name: 'Yule',            month: 12, day: 21, url: 'https://en.wikipedia.org/wiki/Yule' },
    ],
  },

  hebrew: {
    label: 'Hebrew',
    desc:  'Jewish holidays (computed from Hebrew calendar)',
    computeMap(gregYear) {
      if (typeof buildHebrewHolidayMap === 'undefined') return new Map();
      const hy = gregYear + 3760;
      const raw = buildHebrewHolidayMap(hy);
      const out = new Map();
      for (const [ds, items] of raw) {
        out.set(ds, items);
      }
      return out;
    },
  },

  hindu: {
    label: 'Hindu',
    desc:  'Hindu festival calendar (approximate Gregorian dates)',
    entries: [
      { name: 'Makar Sankranti (approx)',  month: 1,  day: 14, url: 'https://en.wikipedia.org/wiki/Makar_Sankranti' },
      { name: 'Maha Shivaratri (approx)',  month: 2,  day: 18, url: 'https://en.wikipedia.org/wiki/Maha_Shivaratri' },
      { name: 'Holi (approx)',             month: 3,  day: 25, url: 'https://en.wikipedia.org/wiki/Holi' },
      { name: 'Ugadi (approx)',            month: 3,  day: 30, url: 'https://en.wikipedia.org/wiki/Ugadi' },
      { name: 'Ram Navami (approx)',       month: 4,  day: 6,  url: 'https://en.wikipedia.org/wiki/Ram_Navami' },
      { name: 'Akshaya Tritiya (approx)',  month: 5,  day: 3,  url: 'https://en.wikipedia.org/wiki/Akshaya_Tritiya' },
      { name: 'Raksha Bandhan (approx)',   month: 8,  day: 9,  url: 'https://en.wikipedia.org/wiki/Raksha_Bandhan' },
      { name: 'Janmashtami (approx)',      month: 8,  day: 16, url: 'https://en.wikipedia.org/wiki/Krishna_Janmashtami' },
      { name: 'Ganesh Chaturthi (approx)', month: 9,  day: 5,  url: 'https://en.wikipedia.org/wiki/Ganesh_Chaturthi' },
      { name: 'Navratri (approx)',         month: 10, day: 2,  url: 'https://en.wikipedia.org/wiki/Navratri' },
      { name: 'Dussehra (approx)',         month: 10, day: 12, url: 'https://en.wikipedia.org/wiki/Vijayadashami' },
      { name: 'Diwali (approx)',           month: 11, day: 1,  url: 'https://en.wikipedia.org/wiki/Diwali' },
      { name: 'Kartik Purnima (approx)',   month: 11, day: 15, url: 'https://en.wikipedia.org/wiki/Kartik_Purnima' },
    ],
  },

  cherokee: {
    label: 'Cherokee',
    desc:  'Cherokee seasonal ceremonies (approximate)',
    entries: [
      { name: 'First New Moon of Spring',   month: 3,  day: 15, url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies' },
      { name: 'New Green Corn Ceremony',     month: 5,  day: 15, url: 'https://en.wikipedia.org/wiki/Green_Corn_Ceremony' },
      { name: 'Ripe Green Corn Ceremony',    month: 8,  day: 1,  url: 'https://en.wikipedia.org/wiki/Green_Corn_Ceremony' },
      { name: 'Mature Green Corn Ceremony',  month: 8,  day: 20, url: 'https://en.wikipedia.org/wiki/Green_Corn_Ceremony' },
      { name: 'Great New Moon Ceremony',     month: 10, day: 1,  url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies' },
      { name: 'New Fire Ceremony',           month: 10, day: 21, url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies' },
      { name: 'Atohuna (Friends Made)',      month: 11, day: 15, url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies' },
      { name: 'Bounding Bush Ceremony',      month: 12, day: 15, url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies' },
    ],
  },

  liturgical: {
    label: 'Liturgical',
    desc:  'Western Christian liturgical calendar',
    computeMap(gregYear) {
      if (typeof buildLiturgicalHolidayMap === 'undefined') return new Map();
      return buildLiturgicalHolidayMap(gregYear);
    },
  },

  iroquois: {
    label: 'Iroquois',
    desc:  'Haudenosaunee seasonal ceremonies (approximate)',
    entries: [
      { name: 'Midwinter Ceremony',     month: 1,  day: 28, url: 'https://en.wikipedia.org/wiki/Midwinter_ceremony' },
      { name: 'Maple Festival',         month: 3,  day: 15, url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies' },
      { name: 'Thunder Ceremony',       month: 5,  day: 1,  url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies' },
      { name: 'Seed Planting Festival', month: 5,  day: 20, url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies' },
      { name: 'Strawberry Festival',    month: 6,  day: 15, url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies' },
      { name: 'Green Corn Ceremony',    month: 8,  day: 20, url: 'https://en.wikipedia.org/wiki/Green_Corn_Ceremony' },
      { name: 'Harvest Festival',       month: 10, day: 5,  url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies' },
      { name: 'New Year Ceremony',      month: 1,  day: 28, url: 'https://en.wikipedia.org/wiki/Midwinter_ceremony' },
    ],
  },

};

// Ordered list for the picker UI
const HOLIDAY_PACK_LIST = [
  'us', 'wheel', 'norse', 'hebrew', 'hindu', 'liturgical', 'cherokee', 'iroquois',
];
