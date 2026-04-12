// ═══ Fairy Calendar — holiday-packs.js ═══
// Holiday pack definitions for the multi-pack holiday system.
// Each pack uses either:
//   entries: array of { name, month, day } or { name, rule: { month, weekday, n } }
//   computeMap(gregYear): function returning Map<"YYYY-MM-DD", {name}[]>

const HOLIDAY_PACKS = {

  us: {
    label: 'US',
    desc:  'US federal holidays',
    entries: [
      { name: "New Year's Day",   month: 1,  day: 1  },
      { name: "Independence Day", month: 7,  day: 4  },
      { name: "Veterans Day",     month: 11, day: 11 },
      { name: "Christmas",        month: 12, day: 25 },
      { name: "MLK Day",          rule: { month:1,  weekday:1, n:3  } },
      { name: "Presidents Day",   rule: { month:2,  weekday:1, n:3  } },
      { name: "Memorial Day",     rule: { month:5,  weekday:1, n:-1 } },
      { name: "Labor Day",        rule: { month:9,  weekday:1, n:1  } },
      { name: "Columbus Day",     rule: { month:10, weekday:1, n:2  } },
      { name: "Thanksgiving",     rule: { month:11, weekday:4, n:4  } },
    ],
  },

  wheel: {
    label: 'Wheel',
    desc:  'Celtic/Pagan Wheel of the Year',
    entries: [
      { name: 'Imbolc',      month: 2,  day: 1  },
      { name: 'Ostara',      month: 3,  day: 20 },
      { name: 'Beltane',     month: 5,  day: 1  },
      { name: 'Litha',       month: 6,  day: 21 },
      { name: 'Lughnasadh',  month: 8,  day: 1  },
      { name: 'Mabon',       month: 9,  day: 22 },
      { name: 'Samhain',     month: 10, day: 31 },
      { name: 'Yule',        month: 12, day: 21 },
    ],
  },

  norse: {
    label: 'Norse',
    desc:  'Norse & Germanic seasonal observances',
    entries: [
      { name: 'Þorrablót',      month: 1,  day: 19 },
      { name: 'Dísablót',       month: 2,  day: 2  },
      { name: 'Vernal Blót',    month: 3,  day: 20 },
      { name: 'Walpurgis Night', month: 4, day: 30 },
      { name: 'Sigrblót',       month: 4,  day: 30 },
      { name: 'Midsommar',      month: 6,  day: 21 },
      { name: 'Freyfaxi',       month: 8,  day: 1  },
      { name: 'Haustblót',      month: 9,  day: 22 },
      { name: 'Vetrnætr',       month: 10, day: 14 },
      { name: 'Yule',           month: 12, day: 21 },
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
      for (const [ds, names] of raw) {
        out.set(ds, names.map(name => ({ name })));
      }
      return out;
    },
  },

  hindu: {
    label: 'Hindu',
    desc:  'Hindu festival calendar (approximate Gregorian dates)',
    entries: [
      { name: 'Makar Sankranti (approx)',  month: 1,  day: 14 },
      { name: 'Maha Shivaratri (approx)',  month: 2,  day: 18 },
      { name: 'Holi (approx)',             month: 3,  day: 25 },
      { name: 'Ugadi (approx)',            month: 3,  day: 30 },
      { name: 'Ram Navami (approx)',       month: 4,  day: 6  },
      { name: 'Akshaya Tritiya (approx)',  month: 5,  day: 3  },
      { name: 'Raksha Bandhan (approx)',   month: 8,  day: 9  },
      { name: 'Janmashtami (approx)',      month: 8,  day: 16 },
      { name: 'Ganesh Chaturthi (approx)', month: 9,  day: 5  },
      { name: 'Navratri (approx)',         month: 10, day: 2  },
      { name: 'Dussehra (approx)',         month: 10, day: 12 },
      { name: 'Diwali (approx)',           month: 11, day: 1  },
      { name: 'Kartik Purnima (approx)',   month: 11, day: 15 },
    ],
  },

  cherokee: {
    label: 'Cherokee',
    desc:  'Cherokee seasonal ceremonies (approximate)',
    entries: [
      { name: 'First New Moon of Spring',  month: 3,  day: 15 },
      { name: 'New Green Corn Ceremony',   month: 5,  day: 15 },
      { name: 'Ripe Green Corn Ceremony',  month: 8,  day: 1  },
      { name: 'Mature Green Corn Ceremony', month: 8, day: 20 },
      { name: 'Great New Moon Ceremony',   month: 10, day: 1  },
      { name: 'New Fire Ceremony',         month: 10, day: 21 },
      { name: 'Atohuna (Friends Made)',    month: 11, day: 15 },
      { name: 'Bounding Bush Ceremony',    month: 12, day: 15 },
    ],
  },

  iroquois: {
    label: 'Iroquois',
    desc:  'Haudenosaunee seasonal ceremonies (approximate)',
    entries: [
      { name: 'Midwinter Ceremony',        month: 1,  day: 28 },
      { name: 'Maple Festival',            month: 3,  day: 15 },
      { name: 'Thunder Ceremony',          month: 5,  day: 1  },
      { name: 'Seed Planting Festival',    month: 5,  day: 20 },
      { name: 'Strawberry Festival',       month: 6,  day: 15 },
      { name: 'Green Corn Ceremony',       month: 8,  day: 20 },
      { name: 'Harvest Festival',          month: 10, day: 5  },
      { name: 'New Year Ceremony',         month: 1,  day: 28 },
    ],
  },

};

// Ordered list for the picker UI
const HOLIDAY_PACK_LIST = [
  'us', 'wheel', 'norse', 'hebrew', 'hindu', 'cherokee', 'iroquois',
];
