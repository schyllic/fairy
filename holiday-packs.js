// ═══ Fairy Calendar — holiday-packs.js ═══
// Holiday pack definitions for the multi-pack holiday system.
// Each pack uses either:
//   entries: array of { name, month, day, url?, i18n? } or { name, rule: { month, weekday, n }, url?, i18n? }
//   computeMap(gregYear): function returning Map<"YYYY-MM-DD", {name, url?, i18n?}[]>
// name = English (fallback). i18n = { de:'...', fr:'...', ... } for translated display names.

const HOLIDAY_PACKS = {

  us: {
    label: 'US',
    desc:  'US federal holidays',
    entries: [
      { name: "New Year's Day",   month: 1,  day: 1,  url: 'https://en.wikipedia.org/wiki/New_Year%27s_Day',
        i18n: { de:'Neujahrstag', fr:'Jour de l\'An', it:'Capodanno', es:'Año Nuevo', sw:'Mwaka Mpya', la:'Dies Anni Novi', sa:'नववर्षदिनम्' } },
      { name: "Independence Day", month: 7,  day: 4,  url: 'https://en.wikipedia.org/wiki/Independence_Day_(United_States)',
        i18n: { de:'Unabhängigkeitstag', fr:'Jour de l\'Indépendance', it:'Giorno dell\'Indipendenza', es:'Día de la Independencia', sw:'Siku ya Uhuru', la:'Dies Libertatis', sa:'स्वातन्त्र्यदिनम्' } },
      { name: "Veterans Day",     month: 11, day: 11, url: 'https://en.wikipedia.org/wiki/Veterans_Day',
        i18n: { de:'Veteranentag', fr:'Jour des Vétérans', it:'Giorno dei Veterani', es:'Día de los Veteranos', sw:'Siku ya Maveterani', la:'Dies Veteranorum', sa:'सैनिकदिनम्' } },
      { name: "Christmas",        month: 12, day: 25, url: 'https://en.wikipedia.org/wiki/Christmas',
        i18n: { de:'Weihnachten', fr:'Noël', it:'Natale', es:'Navidad', sw:'Krismasi', la:'Nativitas Domini', sa:'क्रिस्तजन्मोत्सवः' } },
      { name: "MLK Day",          rule: { month:1,  weekday:1, n:3  }, url: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr._Day',
        i18n: { de:'Martin-Luther-King-Tag', fr:'Jour de Martin Luther King', it:'Giorno di Martin Luther King', es:'Día de Martin Luther King', sw:'Siku ya MLK', la:'Dies Martini Luther King' } },
      { name: "Presidents Day",   rule: { month:2,  weekday:1, n:3  }, url: 'https://en.wikipedia.org/wiki/Presidents%27_Day',
        i18n: { de:'Präsidententag', fr:'Jour des Présidents', it:'Giorno dei Presidenti', es:'Día de los Presidentes', sw:'Siku ya Marais', la:'Dies Praesidum' } },
      { name: "Memorial Day",     rule: { month:5,  weekday:1, n:-1 }, url: 'https://en.wikipedia.org/wiki/Memorial_Day',
        i18n: { de:'Gedenktag', fr:'Jour du Souvenir', it:'Giorno della Memoria', es:'Día de los Caídos', sw:'Siku ya Ukumbusho', la:'Dies Memoriae' } },
      { name: "Labor Day",        rule: { month:9,  weekday:1, n:1  }, url: 'https://en.wikipedia.org/wiki/Labor_Day',
        i18n: { de:'Tag der Arbeit', fr:'Fête du Travail', it:'Festa del Lavoro', es:'Día del Trabajo', sw:'Siku ya Wafanyakazi', la:'Dies Laboris', sa:'श्रमदिनम्' } },
      { name: "Columbus Day",     rule: { month:10, weekday:1, n:2  }, url: 'https://en.wikipedia.org/wiki/Columbus_Day',
        i18n: { de:'Kolumbus-Tag', fr:'Jour de Christophe Colomb', it:'Giorno di Colombo', es:'Día de la Raza', sw:'Siku ya Columbus', la:'Dies Columbi' } },
      { name: "Thanksgiving",     rule: { month:11, weekday:4, n:4  }, url: 'https://en.wikipedia.org/wiki/Thanksgiving_(United_States)',
        i18n: { de:'Erntedankfest', fr:'Action de Grâce', it:'Giorno del Ringraziamento', es:'Día de Acción de Gracias', sw:'Siku ya Shukrani', la:'Dies Gratiarum Actionis', sa:'कृतज्ञतादिनम्' } },
    ],
  },

  wheel: {
    label: 'Wheel',
    desc:  'Celtic/Pagan Wheel of the Year',
    entries: [
      { name: 'Imbolc',      month: 2,  day: 1,  url: 'https://en.wikipedia.org/wiki/Imbolc',
        i18n: { de:'Imbolc', fr:'Imbolc', it:'Imbolc', es:'Imbolc', la:'Imbolc' } },
      { name: 'Ostara',      month: 3,  day: 20, url: 'https://en.wikipedia.org/wiki/Ostara',
        i18n: { de:'Ostara', fr:'Ostara', it:'Ostara', es:'Ostara', la:'Ostara' } },
      { name: 'Beltane',     month: 5,  day: 1,  url: 'https://en.wikipedia.org/wiki/Beltane',
        i18n: { de:'Beltane', fr:'Beltaine', it:'Beltane', es:'Beltane', la:'Beltane' } },
      { name: 'Litha',       month: 6,  day: 21, url: 'https://en.wikipedia.org/wiki/Litha',
        i18n: { de:'Litha', fr:'Litha', it:'Litha', es:'Litha', la:'Litha' } },
      { name: 'Lughnasadh',  month: 8,  day: 1,  url: 'https://en.wikipedia.org/wiki/Lughnasadh',
        i18n: { de:'Lughnasadh', fr:'Lughnasadh', it:'Lughnasadh', es:'Lughnasadh', la:'Lughnasadh' } },
      { name: 'Mabon',       month: 9,  day: 22, url: 'https://en.wikipedia.org/wiki/Mabon_(holiday)',
        i18n: { de:'Mabon', fr:'Mabon', it:'Mabon', es:'Mabon', la:'Mabon' } },
      { name: 'Samhain',     month: 10, day: 31, url: 'https://en.wikipedia.org/wiki/Samhain',
        i18n: { de:'Samhain', fr:'Samhain', it:'Samhain', es:'Samhain', la:'Samhain' } },
      { name: 'Yule',        month: 12, day: 21, url: 'https://en.wikipedia.org/wiki/Yule',
        i18n: { de:'Julfest', fr:'Yule', it:'Yule', es:'Yule', la:'Festum Iuli' } },
    ],
  },

  norse: {
    label: 'Norse',
    desc:  'Norse & Germanic seasonal observances',
    entries: [
      { name: 'Þorrablót',       month: 1,  day: 19, url: 'https://en.wikipedia.org/wiki/%C3%9Eorrablót' },
      { name: 'Dísablót',        month: 2,  day: 2,  url: 'https://en.wikipedia.org/wiki/D%C3%ADsabl%C3%B3t' },
      { name: 'Vernal Blót',     month: 3,  day: 20, url: 'https://en.wikipedia.org/wiki/Bl%C3%B3t',
        i18n: { de:'Frühlingsblót', fr:'Blót de printemps', it:'Blót di primavera', es:'Blót primaveral' } },
      { name: 'Walpurgis Night', month: 4,  day: 30, url: 'https://en.wikipedia.org/wiki/Walpurgis_Night',
        i18n: { de:'Walpurgisnacht', fr:'Nuit de Walpurgis', it:'Notte di Valpurga', es:'Noche de Walpurgis', sw:'Usiku wa Walpurgis', la:'Nox Walpurgiae' } },
      { name: 'Sigrblót',        month: 4,  day: 30, url: 'https://en.wikipedia.org/wiki/Sigrbl%C3%B3t' },
      { name: 'Midsommar',       month: 6,  day: 21, url: 'https://en.wikipedia.org/wiki/Midsummer',
        i18n: { de:'Mittsommer', fr:'Saint-Jean', it:'Mezza estate', es:'Solsticio de verano', sw:'Kiangazi', la:'Solstitium Aestivum' } },
      { name: 'Freyfaxi',        month: 8,  day: 1,  url: 'https://en.wikipedia.org/wiki/Freyfaxi' },
      { name: 'Haustblót',       month: 9,  day: 22, url: 'https://en.wikipedia.org/wiki/Bl%C3%B3t',
        i18n: { de:'Herbstblót', fr:'Blót d\'automne', it:'Blót d\'autunno', es:'Blót otoñal' } },
      { name: 'Vetrnætr',        month: 10, day: 14, url: 'https://en.wikipedia.org/wiki/Winter_Nights',
        i18n: { de:'Winternächte', fr:'Nuits d\'hiver', it:'Notti d\'inverno', es:'Noches de invierno', la:'Noctes Hiemales' } },
      { name: 'Yule',            month: 12, day: 21, url: 'https://en.wikipedia.org/wiki/Yule',
        i18n: { de:'Julfest', fr:'Yule', it:'Yule', es:'Yule', la:'Festum Iuli' } },
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
      { name: 'Makar Sankranti (approx)',  month: 1,  day: 14, url: 'https://en.wikipedia.org/wiki/Makar_Sankranti',
        i18n: { sa:'मकरसंक्रान्तिः' } },
      { name: 'Maha Shivaratri (approx)',  month: 2,  day: 18, url: 'https://en.wikipedia.org/wiki/Maha_Shivaratri',
        i18n: { sa:'महाशिवरात्रिः' } },
      { name: 'Holi (approx)',             month: 3,  day: 25, url: 'https://en.wikipedia.org/wiki/Holi',
        i18n: { sa:'होलिका' } },
      { name: 'Ugadi (approx)',            month: 3,  day: 30, url: 'https://en.wikipedia.org/wiki/Ugadi',
        i18n: { sa:'युगादिः' } },
      { name: 'Ram Navami (approx)',       month: 4,  day: 6,  url: 'https://en.wikipedia.org/wiki/Ram_Navami',
        i18n: { sa:'रामनवमी' } },
      { name: 'Akshaya Tritiya (approx)',  month: 5,  day: 3,  url: 'https://en.wikipedia.org/wiki/Akshaya_Tritiya',
        i18n: { sa:'अक्षयतृतीया' } },
      { name: 'Raksha Bandhan (approx)',   month: 8,  day: 9,  url: 'https://en.wikipedia.org/wiki/Raksha_Bandhan',
        i18n: { sa:'रक्षाबन्धनम्' } },
      { name: 'Janmashtami (approx)',      month: 8,  day: 16, url: 'https://en.wikipedia.org/wiki/Krishna_Janmashtami',
        i18n: { sa:'जन्माष्टमी' } },
      { name: 'Ganesh Chaturthi (approx)', month: 9,  day: 5,  url: 'https://en.wikipedia.org/wiki/Ganesh_Chaturthi',
        i18n: { sa:'गणेशचतुर्थी' } },
      { name: 'Navratri (approx)',         month: 10, day: 2,  url: 'https://en.wikipedia.org/wiki/Navratri',
        i18n: { sa:'नवरात्रिः' } },
      { name: 'Dussehra (approx)',         month: 10, day: 12, url: 'https://en.wikipedia.org/wiki/Vijayadashami',
        i18n: { sa:'विजयादशमी' } },
      { name: 'Diwali (approx)',           month: 11, day: 1,  url: 'https://en.wikipedia.org/wiki/Diwali',
        i18n: { sa:'दीपावलिः' } },
      { name: 'Kartik Purnima (approx)',   month: 11, day: 15, url: 'https://en.wikipedia.org/wiki/Kartik_Purnima',
        i18n: { sa:'कार्तिकपूर्णिमा' } },
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

  cherokee: {
    label: 'Cherokee',
    desc:  'Cherokee seasonal ceremonies (approximate)',
    entries: [
      { name: 'First New Moon of Spring',   month: 3,  day: 15, url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies',
        i18n: { de:'Erster Neumond des Frühlings', fr:'Première nouvelle lune du printemps', it:'Prima luna nuova di primavera', es:'Primera luna nueva de primavera' } },
      { name: 'New Green Corn Ceremony',     month: 5,  day: 15, url: 'https://en.wikipedia.org/wiki/Green_Corn_Ceremony',
        i18n: { de:'Neue Grüne-Mais-Zeremonie', fr:'Cérémonie du maïs vert nouveau', it:'Cerimonia del granturco verde nuovo', es:'Ceremonia del maíz verde nuevo' } },
      { name: 'Ripe Green Corn Ceremony',    month: 8,  day: 1,  url: 'https://en.wikipedia.org/wiki/Green_Corn_Ceremony',
        i18n: { de:'Reife Grüne-Mais-Zeremonie', fr:'Cérémonie du maïs vert mûr', it:'Cerimonia del granturco verde maturo', es:'Ceremonia del maíz verde maduro' } },
      { name: 'Mature Green Corn Ceremony',  month: 8,  day: 20, url: 'https://en.wikipedia.org/wiki/Green_Corn_Ceremony',
        i18n: { de:'Ausgereifte Grüne-Mais-Zeremonie', fr:'Cérémonie du maïs vert mature', it:'Cerimonia del granturco verde maturo', es:'Ceremonia del maíz verde maduro' } },
      { name: 'Great New Moon Ceremony',     month: 10, day: 1,  url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies',
        i18n: { de:'Große Neumondzeremonie', fr:'Grande cérémonie de la nouvelle lune', it:'Grande cerimonia della luna nuova', es:'Gran ceremonia de la luna nueva' } },
      { name: 'New Fire Ceremony',           month: 10, day: 21, url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies',
        i18n: { de:'Neue-Feuer-Zeremonie', fr:'Cérémonie du feu nouveau', it:'Cerimonia del fuoco nuovo', es:'Ceremonia del fuego nuevo' } },
      { name: 'Atohuna (Friends Made)',      month: 11, day: 15, url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies',
        i18n: { de:'Atohuna (Freunde geschlossen)', fr:'Atohuna (Amis faits)', it:'Atohuna (Amici fatti)', es:'Atohuna (Amigos hechos)' } },
      { name: 'Bounding Bush Ceremony',      month: 12, day: 15, url: 'https://en.wikipedia.org/wiki/Cherokee_ceremonies',
        i18n: { de:'Buschgrenz-Zeremonie', fr:'Cérémonie du buisson', it:'Cerimonia del cespuglio', es:'Ceremonia del arbusto' } },
    ],
  },

  iroquois: {
    label: 'Iroquois',
    desc:  'Haudenosaunee seasonal ceremonies (approximate)',
    entries: [
      { name: 'Midwinter Ceremony',     month: 1,  day: 28, url: 'https://en.wikipedia.org/wiki/Midwinter_ceremony',
        i18n: { de:'Mittwinterzeremonie', fr:'Cérémonie du milieu de l\'hiver', it:'Cerimonia di metà inverno', es:'Ceremonia de mediados de invierno', la:'Caerimonia Mediae Hiemis' } },
      { name: 'Maple Festival',         month: 3,  day: 15, url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies',
        i18n: { de:'Ahornfest', fr:'Fête de l\'érable', it:'Festa dell\'acero', es:'Festival del arce', la:'Festum Aceris' } },
      { name: 'Thunder Ceremony',       month: 5,  day: 1,  url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies',
        i18n: { de:'Donnerzeremonie', fr:'Cérémonie du tonnerre', it:'Cerimonia del tuono', es:'Ceremonia del trueno', la:'Caerimonia Tonitruum' } },
      { name: 'Seed Planting Festival', month: 5,  day: 20, url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies',
        i18n: { de:'Aussaatfest', fr:'Fête des semailles', it:'Festa della semina', es:'Festival de la siembra', la:'Festum Sementis' } },
      { name: 'Strawberry Festival',    month: 6,  day: 15, url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies',
        i18n: { de:'Erdbeerfest', fr:'Fête des fraises', it:'Festa delle fragole', es:'Festival de la fresa', la:'Festum Fragorum' } },
      { name: 'Green Corn Ceremony',    month: 8,  day: 20, url: 'https://en.wikipedia.org/wiki/Green_Corn_Ceremony',
        i18n: { de:'Grüne-Mais-Zeremonie', fr:'Cérémonie du maïs vert', it:'Cerimonia del granturco verde', es:'Ceremonia del maíz verde' } },
      { name: 'Harvest Festival',       month: 10, day: 5,  url: 'https://en.wikipedia.org/wiki/Haudenosaunee_thanksgiving_ceremonies',
        i18n: { de:'Erntefest', fr:'Fête de la récolte', it:'Festa del raccolto', es:'Festival de la cosecha', la:'Festum Messis' } },
      { name: 'New Year Ceremony',      month: 1,  day: 28, url: 'https://en.wikipedia.org/wiki/Midwinter_ceremony',
        i18n: { de:'Neujahrzeremonie', fr:'Cérémonie du Nouvel An', it:'Cerimonia dell\'anno nuovo', es:'Ceremonia de Año Nuevo', la:'Caerimonia Anni Novi' } },
    ],
  },

};

// Ordered list for the picker UI
const HOLIDAY_PACK_LIST = [
  'us', 'wheel', 'norse', 'hebrew', 'hindu', 'liturgical', 'cherokee', 'iroquois',
];
