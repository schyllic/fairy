// ═══ Fairy Calendar — hindu.js ═══
// Hindu lunisolar (Panchanga) month data. Index 0 = first moon after winter solstice,
// mapping to Fairy calendar moon sequence (Snowmoon → Darkmoon).
// The Hindu year begins in Chaitra (spring equinox, Fairy moon index 3).
// Year era: Vikrama Samvat (VS) = Gregorian year + 57 (from Chaitra onward).
// Month system: Amanta (अमान्त) — month runs new moon to new moon.
// Day display uses the lunar day count (tithi) approximated by the Fairy day number.
// Sources: Drik Panchanga; Surya Siddhanta; Monier-Williams Sanskrit Dictionary.

const HINDU_MONTHS = [
  { dev: 'पौष',         iast: 'Pauṣa',       en: 'Pausha'        }, // 0 — Snowmoon area
  { dev: 'माघ',         iast: 'Māgha',        en: 'Magha'         }, // 1
  { dev: 'फाल्गुन',     iast: 'Phālguna',     en: 'Phalguna'      }, // 2
  { dev: 'चैत्र',       iast: 'Caitra',       en: 'Chaitra'       }, // 3 — New Year (नव वर्ष)
  { dev: 'वैशाख',       iast: 'Vaiśākha',     en: 'Vaishakha'     }, // 4
  { dev: 'ज्येष्ठ',     iast: 'Jyeṣṭha',      en: 'Jyeshtha'      }, // 5
  { dev: 'आषाढ',        iast: 'Āṣāḍha',       en: 'Ashadha'       }, // 6
  { dev: 'श्रावण',      iast: 'Śrāvaṇa',      en: 'Shravana'      }, // 7
  { dev: 'भाद्रपद',     iast: 'Bhādrapada',   en: 'Bhadrapada'    }, // 8
  { dev: 'आश्विन',      iast: 'Āśvina',       en: 'Ashvina'       }, // 9
  { dev: 'कार्तिक',     iast: 'Kārtika',      en: 'Kartika'       }, // 10
  { dev: 'मार्गशीर्ष',  iast: 'Mārgaśīrṣa',   en: 'Margashirsha'  }, // 11 — Darkmoon area
  { dev: 'अधिक मास',    iast: 'Adhika Māsa',  en: 'Extra Month'   }, // 12 — intercalary
];

// ═══ Jyotisha sky culture — nakshatra (lunar mansion) overlays ═══
// Keys match IAU constellation names as used in CONSTELLATION_LORE / CONSTELLATIONS.
// Each nakshatra is anchored by a yogatara (junction star) within that IAU boundary.
// Lore draws on Brihat Samhita, Taittiriya Brahmana, and classical Jyotisha texts.

const HINDU_SKY = {
  'Aries': {
    name: 'Ashwini',
    iast: 'Aśvinī',
    lore: 'Ashwini (अश्विनी) — the first nakshatra — is anchored by Beta Arietis (Sheratan) in the Ram. Its name means "born of a horse-woman," referring to the twin divine physicians the Ashvins, who ride a golden chariot across the sky at dawn. The Ashvins are the gods of medicine, rescue, and the transition between darkness and light: they restore sight to the blind, heal the wounded, and bring the first light of morning. Ashwini is considered auspicious for beginning journeys, medical treatment, and new ventures. Deity: Ashvins (Nāsatya and Dasra). Source: Brihat Samhita; Taittiriya Brahmana.',
  },
  'Taurus': {
    name: 'Rohini',
    iast: 'Rohiṇī',
    lore: 'Rohini (रोहिणी) — "the red one," the fourth nakshatra — is anchored by Aldebaran, the brilliant orange eye of Taurus. Rohini was the beloved favourite among the Moon god Chandra\'s twenty-seven wives (the nakshatras), and the Moon lingers longest in her mansion. She presides over fertility, growth, and material prosperity. The name refers to her reddish colour and to the red cattle associated with agricultural abundance. In mythology, Chandra\'s neglect of his other wives led Daksha to curse him with a waning cycle — accounting for the Moon\'s phases. Deity: Prajapati (Brahma). Source: Brihat Samhita; Rig Veda.',
  },
  'Orion': {
    name: 'Mrigashira',
    iast: 'Mṛgaśīrṣa',
    lore: 'Mrigashira (मृगशिरा) — "the deer\'s head," the fifth nakshatra — is anchored by Lambda Orionis at the head of the Hunter. In Jyotisha, the constellation figures differently from the Greek: this region was seen as the head of a deer or antelope being pursued across the sky. The nakshatra is associated with searching, wandering, and the gentle curiosity of a deer — sensitivity, exploration, and restlessness. The Moon-god Soma (Chandra) is the presiding deity, connecting this nakshatra to the fluid, seeking quality of the lunar mind. Deity: Soma (Moon). Source: Brihat Samhita.',
  },
  'Gemini': {
    name: 'Punarvasu',
    iast: 'Punarvasu',
    lore: 'Punarvasu (पुनर्वसु) — "the return of light" or "the two restorers of goods," the seventh nakshatra — is anchored by Pollux, the brighter twin of Gemini. The name means "becoming good again," evoking renewal, recovery, and the restoration of what was lost. After the darkness and searching of earlier nakshatras, Punarvasu brings a return to safety and home. It is associated with the end of the monsoon rains and the return of clearer skies. The deity Aditi — the boundless mother of the gods — presides, representing infinite capacity and the nurturing origin of creation. Deity: Aditi. Source: Taittiriya Brahmana.',
  },
  'Leo': {
    name: 'Magha',
    iast: 'Maghā',
    lore: 'Magha (मघा) — "the great" or "the mighty," the tenth nakshatra — is anchored by Regulus, the heart of the Lion and one of the four royal stars of antiquity. Magha is the nakshatra of kings, ancestors, and royal authority. Its presiding deities are the Pitrs — the ancestral spirits — and it governs rites for the dead, the honouring of lineage, and the continuity of dharmic tradition. Those born under Magha are said to carry the dignity and responsibilities of their forebears. The region of Regulus near the ecliptic made it a natural reference point for ancient sky-watchers across cultures. Deity: Pitrs (ancestors). Source: Brihat Samhita.',
  },
  'Virgo': {
    name: 'Chitra',
    iast: 'Citrā',
    lore: 'Chitra (चित्रा) — "the bright one" or "the brilliant," the fourteenth nakshatra — is anchored by Spica, one of the brightest stars in the night sky and the blue-white jewel of Virgo. The name means radiant, beautiful, and variegated — suggesting the dazzling artistry of creation. Chitra is the nakshatra of architects, craftspeople, and all who shape beauty in the world; it is governed by Vishvakarman, the divine craftsman and architect of the gods who built their celestial palaces and weapons. The star\'s brilliance and position near the ecliptic made it a crucial reference point for ancient Indian astronomers. Deity: Vishvakarman. Source: Brihat Samhita.',
  },
  'Boötes': {
    name: 'Swati',
    iast: 'Svāti',
    lore: 'Swati (स्वाति) — "the self-going" or "the independent one," the fifteenth nakshatra — is anchored by Arcturus, the bright orange giant of Boötes and the fourth brightest star in the night sky. The name Svāti means sword or independent motion, and this nakshatra embodies self-sufficiency, flexibility, and the ability to move freely in the world like a windblown shoot that bends but does not break. Vayu — the wind god — presides, and the nakshatra is associated with trade, flexibility, and prosperity through movement. The heliacal rising of Arcturus marked important seasonal transitions in ancient Indian astronomy. Deity: Vayu (wind). Source: Brihat Samhita.',
  },
  'Scorpius': {
    name: 'Jyeshtha',
    iast: 'Jyeṣṭhā',
    lore: 'Jyeshtha (ज्येष्ठा) — "the eldest" or "the chief," the eighteenth nakshatra — is anchored by Antares, the great red heart of Scorpius. Antares — whose name means "rival of Mars" in Greek — is one of the largest stars visible to the naked eye, its red supergiant glow making it the pre-eminent star of the scorpion. In Jyotisha, Jyeshtha governs seniority, authority, and the accumulated power of the elder. Indra — king of the gods — presides, lending this nakshatra associations with rulership, protective power, and the willingness to act decisively against darkness. Deity: Indra. Source: Brihat Samhita; Rig Veda.',
  },
  'Sagittarius': {
    name: 'Purva Ashadha',
    iast: 'Pūrvāṣāḍhā',
    lore: 'Purva Ashadha (पूर्वाषाढा) — "the earlier invincible one," the twentieth nakshatra — is anchored by Delta Sagittarii in the Archer. The two Ashadha nakshatras (Purva and Uttara) together span the dense star fields near the galactic centre in Sagittarius. Purva Ashadha is associated with purification, invigoration, and early victory — the fortifying power that comes before triumph is assured. Its presiding deity Apas (divine waters) links it to the cleansing and life-giving properties of water. The fan-shaped symbol of this nakshatra evokes a winnowing basket separating grain from chaff. Deity: Apas (waters). Source: Brihat Samhita.',
  },
  'Aquila': {
    name: 'Shravana',
    iast: 'Śravaṇa',
    lore: 'Shravana (श्रवण) — "hearing" or "the listener," the twenty-second nakshatra — is anchored by Altair, the bright white eye of the Eagle (Aquila) and one of the three stars of the Summer Triangle. The name derives from the Sanskrit root for hearing and learning: this is the nakshatra of listening, education, and the preservation of sacred knowledge through oral tradition. Vishnu — the all-pervading preserver — presides, and Shravana governs the transmission of wisdom across generations. The three stars of Aquila\'s body (Altair and its flanking stars) were sometimes seen as the three footprints of Vishnu striding across the universe. Deity: Vishnu. Source: Brihat Samhita; Vishnu Purana.',
  },
  'Perseus': {
    name: 'Bharani',
    iast: 'Bharaṇī',
    lore: 'Bharani (भरणी) — "the bearer," the second nakshatra — is anchored by 41 Arietis near the border of Perseus. Its name means "the one who carries," evoking the womb that sustains new life through darkness before birth. The presiding deity is Yama — the lord of death and dharmic law, who weighs souls and administers cosmic justice. Perseus the Hero, who confronts death and transforms destruction into new possibility, shares this nakshatra\'s quality of courage in the face of necessary endings. Bharani governs tapas (austerity), artistic discipline, the containment of intense energy before release, and the creative power that requires passing through difficulty. Deity: Yama. Source: Brihat Samhita; Rigveda.',
  },
  'Auriga': {
    name: 'Krittika',
    iast: 'Kṛttikā',
    lore: 'Krittika (कृत्तिका) — "the cutters," the third nakshatra — is anchored by the Pleiades, whose stars straddle the boundary of Taurus and Auriga, visible near brilliant Capella (α Aurigae). The name means "the blades" — six sisters whose sharp discernment separates the sacred from the profane. Agni, the divine fire, presides: the same fire that purifies sacrifice, illuminates darkness, and transforms raw matter into light. In myth, the six Krittika mothers nursed the infant war-god Kartikeya (Murugan), pouring their collective radiance into him. Auriga the Charioteer, traditionally holding a she-goat (Capella), mirrors this image of celestial nurturing through fire and steadfast care. Deity: Agni. Source: Brihat Samhita; Skanda Purana.',
  },
  'Monoceros': {
    name: 'Ardra',
    iast: 'Ārdrā',
    lore: 'Ardra (आर्द्रा) — "the moist one," the sixth nakshatra — sits in the tempestuous zone between Orion and the great Dogs, where the ecliptic traverses Monoceros. Ardra means "the fresh one after rain" — the nakshatra of storms, tears, and the fierce renewal that follows destruction. Rudra, the wild howling storm-god who predates Shiva, presides: his arrows bring disease but also healing, and his storm breaks open stagnant skies. Ardra is associated with sharp intelligence, grief, and the kind of radical change that can only come through turbulence. The rains begin under Ardra\'s sky; the unicorn of Monoceros embodies the untamed, difficult-to-see wildness of this nakshatra. Deity: Rudra. Source: Rigveda; Brihat Samhita.',
  },
  'Cancer': {
    name: 'Pushya',
    iast: 'Puṣya',
    lore: 'Pushya (पुष्य) — "the nourisher," the eighth nakshatra — is anchored by Asellus Australis (δ Cancri) in the Crab. Pushya is widely regarded as the most auspicious of the 27 nakshatras, a station of pure nurturing energy where the cosmic milk of dharma flows freely. Cancer the crab holds its treasures protectively, and this nakshatra embodies the same quality: the devoted teacher, the sustaining parent, the generous patron. Brihaspati — guru of the gods, master of sacred speech and ritual — presides, governing education, spiritual practice, and the careful cultivation of wisdom. Ancient texts recommend Pushya as the finest moment to begin studies, plant crops, or consecrate sacred objects. Deity: Brihaspati. Source: Brihat Samhita; Yajur Veda.',
  },
  'Hydra': {
    name: 'Ashlesha',
    iast: 'Āśleṣā',
    lore: 'Ashlesha (आश्लेषा) — "the entwiner," the ninth nakshatra — is anchored in the serpentine stars of Hydra where the Crab meets the great Water Serpent. Ashlesha — "the clinging one" — is the nakshatra of the serpent, whose coiled energy can bring either poison or wisdom. The presiding deities are the divine nagas, the serpent beings of the underground waters who guard ancient knowledge and treasure. Ashlesha governs penetrating insight, hidden knowledge, seduction, and the transformative power of the serpent\'s nature — both the venom of delusion and the antidote of awakened consciousness. Hydra, the longest constellation in the sky, embodies the serpentine reach of this nakshatra perfectly. Deity: Sarpas (the nagas). Source: Brihat Samhita; Atharva Veda.',
  },
  'Coma Berenices': {
    name: 'Purva Phalguni',
    iast: 'Pūrva Phalgunī',
    lore: 'Purva Phalguni (पूर्व फाल्गुनी) — "the former reddish one," the eleventh nakshatra — is anchored in the region where Leo\'s tail sweeps toward the star-clouds of Coma Berenices. Its two-star asterism was seen as the front legs of a marriage bed (paryanka), and its deity Bhaga is the god who bestows the joys of conjugal life, wealth, and inheritance. This is a nakshatra of creative expression, music, dance, and the radiant confidence of one who is deeply loved. Coma Berenices — Berenice\'s Hair, offered as a sacrifice of love — carries the same quality: beauty freely given for someone treasured. Purva Phalguni governs pleasure, the arts, and the generosity of the fully open heart. Deity: Bhaga. Source: Brihat Samhita; Rigveda.',
  },
  'Leo Minor': {
    name: 'Uttara Phalguni',
    iast: 'Uttara Phalgunī',
    lore: 'Uttara Phalguni (उत्तर फाल्गुनी) — "the latter reddish one," the twelfth nakshatra — is anchored by Denebola (β Leonis), the lion\'s tail, which points toward Leo Minor above. Uttara Phalguni is the completion of the marriage-bed pair, governing the practical and enduring side of committed relationships: contracts, social obligation, and the network of mutual care that sustains a community. Its deity Aryaman presides over noble conduct, friendship, and the Milky Way itself — sometimes called "Aryaman\'s path." Where Purva Phalguni governs falling in love, Uttara Phalguni governs the covenant of lifelong partnership — the daily choice to care, support, and remain. Deity: Aryaman. Source: Brihat Samhita; Rigveda.',
  },
  'Corvus': {
    name: 'Hasta',
    iast: 'Hasta',
    lore: 'Hasta (हस्त) — "the hand," the thirteenth nakshatra — is anchored by Algorab (δ Corvi), the eye of the Crow in Corvus. Hasta governs skilled craftsmanship, the work of the hands, and the deft manipulation of material reality. Corvus the clever crow carries messages and remembers faces; Hasta shares this quality of practical intelligence and nimble skill. The presiding deity Savitar is the solar impulse that sets everything in motion before sunrise — the animating force of craft, agriculture, and the daily work of making. The five stars of Corvus were seen as the five fingers of the hand. Hasta is considered auspicious for all skilled trades, healing arts, and commerce requiring careful, precise effort. Deity: Savitar. Source: Brihat Samhita; Taittiriya Brahmana.',
  },
  'Libra': {
    name: 'Vishakha',
    iast: 'Viśākhā',
    lore: 'Vishakha (विशाखा) — "the forked one," the sixteenth nakshatra — is anchored by the two scale-pan stars of Libra: Zubenelgenubi (α Librae) and Zubeneschemali (β Librae), originally the claws of Scorpius in Greek astronomy. Vishakha — "the branching path" — is the nakshatra of the crossroads and decisive choice, the moment when two roads diverge and commitment becomes necessary. Its twin deities Indra (king of gods, achievement) and Agni (fire, purification) demand sustained purpose. A triumphal arch is its symbol: the gateway through which the determined pass after perseverance. Vishakha governs ambition, competitive drive, and the deep fulfilment that follows years of focused effort. Deity: Indra and Agni. Source: Brihat Samhita; Atharva Veda.',
  },
  'Lupus': {
    name: 'Anuradha',
    iast: 'Anurādhā',
    lore: 'Anuradha (अनुराधा) — "following Radha" or "subsequent success," the seventeenth nakshatra — is anchored by Dschubba (δ Scorpii) at the forehead of the Scorpion, near the Lupus border. Anuradha governs friendship, devotion, and the organisation of cooperative effort. Its deity Mitra is the Vedic god of alliance and binding agreement, the solar power that illuminates relationships and holds friends in loyal covenant. Lupus the Wolf — a social hunter — shares this nakshatra\'s qualities of devoted companionship, pack loyalty, and coordinated pursuit of goals. Anuradha is particularly associated with foreign travel, the forming of alliances across distance, and the sustained friendship that outlasts separation. Deity: Mitra. Source: Brihat Samhita; Rigveda.',
  },
  'Ophiuchus': {
    name: 'Mula',
    iast: 'Mūla',
    lore: 'Mula (मूल) — "the root," the nineteenth nakshatra — is anchored near the galactic centre region where Ophiuchus crosses the ecliptic, in the zone between Scorpius\'s tail (Shaula, λ Scorpii) and the beginning of Sagittarius. Mula — "the foundation" — is the nakshatra of the deepest roots: the hidden source from which all things grow and to which they return. Its presiding deity Nirriti, the dark goddess of dissolution, is not evil but transformative — cutting away dead roots so authentic growth can arise. Ophiuchus the serpent-bearer, wrestling the cosmic serpent at the very threshold of the galaxy, embodies this nakshatra\'s confrontation with deep, chthonic powers. Deity: Nirriti. Source: Brihat Samhita; Atharva Veda.',
  },
  'Capricornus': {
    name: 'Uttara Ashadha',
    iast: 'Uttarāṣāḍhā',
    lore: 'Uttara Ashadha (उत्तराषाढा) — "the latter invincible one," the twenty-first nakshatra — is anchored near the Sagittarius-Capricornus boundary, where the galaxy\'s star-fields thin toward the sea-goat. Uttara Ashadha completes the pair with Purva Ashadha, bringing final, enduring victory through righteousness and collective virtue. Its presiding deities are the Vishvedevas — "universal gods," all divine forces acting in concert — embodying the idea that ultimate triumph requires the cooperation of every virtue simultaneously. Capricornus the sea-goat, bridging ocean and mountain, shares this nakshatra\'s quality of achieving impossible ascents through persistent, sure-footed effort over the long arc of time. Deity: Vishvedevas. Source: Brihat Samhita; Taittiriya Brahmana.',
  },
  'Delphinus': {
    name: 'Dhanishta',
    iast: 'Dhaniṣṭhā',
    lore: 'Dhanishta (धनिष्ठा) — "the wealthiest," the twenty-third nakshatra — is anchored by Rotanev (β Delphini) in Delphinus the Dolphin. Dhanishta governs abundance, music, and the joyful rhythms of communal life. Its presiding deities are the eight Vasus — the attendant gods who embody cosmic fundamentals (earth, water, fire, wind, sky, moon, stars, dawn) — who together sustain the material abundance of the world. Delphinus, the nimble dolphin that Apollo sent to persuade Amphitrite, carries the same qualities of musical grace and the prosperity that flows through joyful social connection. Dhanishta is particularly associated with rhythm, percussion, and the wealth that multiplies through generous sharing. Deity: Eight Vasus. Source: Brihat Samhita; Rigveda.',
  },
  'Aquarius': {
    name: 'Shatabhisha',
    iast: 'Śatabhiṣaj',
    lore: 'Shatabhisha (शतभिषज्) — "the hundred physicians," the twenty-fourth nakshatra — is anchored by λ Aquarii in the central stream of the Water-Bearer. Shatabhisha — "the hundred healers" — is the nakshatra of healing, mystery, and the esoteric arts. Its deity Varuna is the oceanic god of cosmic law who binds with unseen cords and releases those who seek his forgiveness, presiding over the hidden forces that govern life and health. Aquarius distributes the healing waters freely, and Shatabhisha governs those who work with concealed forces: physicians, researchers, astrologers, and mystics who seek the source behind appearances. The thousand faint stars of this region were seen as a circle of healers gathered around the afflicted. Deity: Varuna. Source: Brihat Samhita; Atharva Veda.',
  },
  'Pegasus': {
    name: 'Purva Bhadrapada',
    iast: 'Pūrva Bhādrapadā',
    lore: 'Purva Bhadrapada (पूर्व भाद्रपद) — "the former auspicious foot," the twenty-fifth nakshatra — is anchored by Markab (α Pegasi), the shoulder of the winged horse. This is the nakshatra of intense one-pointed devotion and the fiery transformation that purges the dross from gold. Pegasus, born from the blood of Medusa, carries the same quality of power arising from destruction. The deity Aja Ekapada — the ancient cosmic serpent with a single foot, a mysterious Vedic power associated with lightning and the forces sustaining the celestial sphere — governs this nakshatra\'s fierce, reforming energies. Purva Bhadrapada is associated with ascetics, visionaries, and those who sacrifice comfort for a higher ideal. Deity: Aja Ekapada. Source: Brihat Samhita; Taittiriya Brahmana.',
  },
  'Andromeda': {
    name: 'Uttara Bhadrapada',
    iast: 'Uttara Bhādrapadā',
    lore: 'Uttara Bhadrapada (उत्तर भाद्रपद) — "the latter auspicious foot," the twenty-sixth nakshatra — is anchored by Alpheratz (α Andromedae), the star that bridges Andromeda and Pegasus and was historically shared between them. Uttara Bhadrapada governs deep waters, accumulated wisdom, and the withdrawal into cosmic rest. Andromeda — chained by duty, liberated by love — speaks to this nakshatra\'s themes of bound potential and the liberation that comes through surrender. The deity Ahir Budhnya, the serpent of the ocean depths, presides over wisdom accumulated over long ages, the vast reservoir of spiritual experience, and the deep compassion arising from having witnessed all of life\'s cycles. Deity: Ahir Budhnya. Source: Brihat Samhita; Rigveda.',
  },
  'Pisces': {
    name: 'Revati',
    iast: 'Revatī',
    lore: 'Revati (रेवती) — "the wealthy one," the twenty-seventh and final nakshatra — is anchored by ζ Piscium, a double star in the tails of Pisces. Revati completes the Moon\'s journey around the entire zodiac and brings her home. Pisces, the two fish swimming in opposite directions, holds the same quality of completion and the dissolution of individual identity into the cosmic ocean. The deity Pushan is the shepherd-god of safe passage who guides souls along paths, tends flocks, and ensures travellers arrive home safely; he is also the god of sustenance who loses nothing along the way. Revati governs completion, nourishment, return, and the compassionate wisdom that accumulates at the end of a full cycle. Deity: Pushan. Source: Brihat Samhita; Rigveda.',
  },
};

// Sanskrit planet names (Graha) used in Jyotisha sky culture mode
const HINDU_PLANET_NAMES = {
  Venus: 'Shukra', Mars: 'Mangala', Jupiter: 'Guru',
  Saturn: 'Shani', Mercury: 'Budha',
};
