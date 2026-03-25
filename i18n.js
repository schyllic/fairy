// ═══ Fairy Calendar — i18n.js ═══
// Language data and translation functions. Loaded before all other scripts.

const LANGS = [
  { code: 'en', name: 'English',       native: 'English'    },
  { code: 'de', name: 'German',        native: 'Deutsch'    },
  { code: 'fr', name: 'French',        native: 'Français'   },
  { code: 'it', name: 'Italian',       native: 'Italiano'   },
  { code: 'es', name: 'Spanish',       native: 'Español'    },
  { code: 'sw', name: 'Swahili',       native: 'Kiswahili'  },
  { code: 'la', name: 'Latin',         native: 'Latina'     },
  { code: 'qy', name: 'Quenya',        native: 'Quenya'     },
  { code: 'hv', name: 'High Valyrian', native: 'Valyrio'    },
];

const I18N = {
  en: {
    moons: ['Snowmoon','Wakingmoon','Seedmoon','Bloommoon','Flowermoon',
            'Berrymoon','Summermoon','Harvestmoon','Gathermoon','Leafmoon',
            'Frostmoon','Darkmoon','Bluemoon'],
    animals: ['Robin','Rabbit','Turkey','Bear','Fox'],
    weekdays_myth: ['Heimday','Tyrsday','Wodensday','Thorsday','Freyasday','Moonday','Sunday'],
    weekdays_std:  ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    greg_months: ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'],
    phases: { new:'New Moon', first:'First Quarter', full:'Full Moon', last:'Last Quarter' },
    solar:  { springEquinox:'Spring Equinox', summerSolstice:'Summer Solstice',
              autumnEquinox:'Autumn Equinox', winterSolstice:'Winter Solstice' },
    today: 'Today',
    save: 'Save', cancel: 'Cancel', add: 'Add',
    language: 'Language',
    settings_title: 'Settings',
    location: 'Location',
    lat: 'Lat', lon: 'Lon',
    birthdays: 'Birthdays',
    share_link: 'Backup / Share\u2026',
    moons_badge: '13 Moons',
    bluemoon_year: 'Bluemoon Year',
    year_animal: '{0} Year',
    tonight: 'Tonight',
    night_sky: 'Night Sky',
    planets: 'Planets:',
    meteor_peaks: 'Meteor peaks:',
    view_sky_btn: 'View Sky',
    scroll_hint: 'Scroll to zoom \u00b7 Drag to pan \u00b7 Double-click to reset',
    today_marker: '\u2014 Today \u2014',
    no_events: 'No events in next 60 days.',
    no_birthdays_share: 'No birthdays to share',
    link_copied: 'Link copied! Send it to family.',
    copy_failed: 'Could not copy \u2014 try again',
    days_count: '{0} days',
    leap_year: '13 Months \u00b7 Leap Year',
    mythic_on: 'Mythic week on', mythic_off: 'Mythic week off',
    holidays_on: 'Holidays on',   holidays_off: 'Holidays off',
    meteors_on: 'Meteors on',     meteors_off: 'Meteors off',
    comets_on: 'Comets on',       comets_off: 'Comets off',
    birthdays_on: 'Birthdays on', birthdays_off: 'Birthdays off',
    otherdate_on: 'Other date on', otherdate_off: 'Other date off',
    view_fairy: 'Lunar', view_greg: 'Greg', view_week: 'Week',
    view_sky: 'Sky', view_hebrew: 'Hebrew',
    darkmoon_tooltip: 'Darkmoon \u00b7 {0}',
    print_sub: 'Mythic Lunar', print_title: 'Calendar',
    print_holocene: 'Year {0} of the Human Era',
    print_animal: '{0} Year \u00b7 {1} Moons',
    no_bdays_yet: 'No birthdays added yet.',
    review_bdays: 'Review {0} birthday{1}',
    bdays_added: 'Added {0} birthday{1}',
    label_theme: 'Theme:', label_color: 'Color:',
    theme_fairy: 'Fairy', theme_wizard: 'Wizard', theme_celtic: 'Celtic', theme_animal: 'Animal', theme_flower: 'Flower',
    toggle_mythic: 'Mythic Week', toggle_otherdate: 'Other Date', toggle_holidays: 'Holidays',
    toggle_birthdays: 'Birthdays', toggle_meteors: 'Meteors', toggle_comets: 'Comets',
    sky_hint: 'Used for sky calculations. Negative lon = West.',
    name_ph: 'Name', day_ph: 'Day',
  },

  de: {
    moons: ['Schneemond','Erwachensmond','Saatmond','Blütemond','Blumenmond',
            'Beerenmond','Sommermond','Erntemond','Sammelmond','Blättermond',
            'Frostmond','Dunkelmond','Blaumond'],
    animals: ['Rotkehlchen','Hase','Truthahn','Bär','Fuchs'],
    weekdays_myth: ['Heimtag','Tirstag','Wotanstag','Donnerstag','Freyastag','Mondtag','Sonntag'],
    weekdays_std:  ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'],
    greg_months: ['Januar','Februar','März','April','Mai','Juni',
                  'Juli','August','September','Oktober','November','Dezember'],
    phases: { new:'Neumond', first:'Erstes Viertel', full:'Vollmond', last:'Letztes Viertel' },
    solar:  { springEquinox:'Frühlingsäquinoktium', summerSolstice:'Sommersonnenwende',
              autumnEquinox:'Herbstäquinoktium', winterSolstice:'Wintersonnenwende' },
    today: 'Heute',
    save: 'Speichern', cancel: 'Abbrechen', add: 'Hinzufügen',
    language: 'Sprache',
    settings_title: 'Einstellungen',
    location: 'Standort',
    lat: 'Brt', lon: 'Lng',
    birthdays: 'Geburtstage',
    share_link: 'Link teilen\u2026',
    moons_badge: '13 Monde',
    bluemoon_year: 'Blaumondsjahr',
    year_animal: '{0}-Jahr',
    tonight: 'Heute Nacht',
    night_sky: 'Nachthimmel',
    planets: 'Planeten:',
    meteor_peaks: 'Meteorhöhepunkte:',
    view_sky_btn: 'Himmel zeigen',
    scroll_hint: 'Scrollen zum Zoomen \u00b7 Ziehen zum Schwenken \u00b7 Doppelklick zum Zurücksetzen',
    today_marker: '\u2014 Heute \u2014',
    no_events: 'Keine Ereignisse in den nächsten 60 Tagen.',
    no_birthdays_share: 'Keine Geburtstage zum Teilen',
    link_copied: 'Link kopiert! Sende ihn an die Familie.',
    copy_failed: 'Kopieren fehlgeschlagen \u2014 erneut versuchen',
    days_count: '{0} Tage',
    leap_year: '13 Monate \u00b7 Schaltjahr',
    mythic_on: 'Mythische Woche an', mythic_off: 'Mythische Woche aus',
    holidays_on: 'Feiertage an',   holidays_off: 'Feiertage aus',
    meteors_on: 'Meteore an',      meteors_off: 'Meteore aus',
    comets_on: 'Kometen an',       comets_off: 'Kometen aus',
    birthdays_on: 'Geburtstage an', birthdays_off: 'Geburtstage aus',
    otherdate_on: 'Anderes Datum an', otherdate_off: 'Anderes Datum aus',
    view_fairy: 'Mondkal.', view_greg: 'Greg.', view_week: 'Woche',
    view_sky: 'Himmel', view_hebrew: 'Hebräisch',
    darkmoon_tooltip: 'Dunkelmond \u00b7 {0}',
    print_sub: 'Mystisch Lunar', print_title: 'Kalender',
    print_holocene: 'Jahr {0} des Menschenzeitalters',
    print_animal: '{0}-Jahr \u00b7 {1} Monde',
    no_bdays_yet: 'Noch keine Geburtstage.',
    label_theme: 'Thema:', label_color: 'Farbe:',
    theme_fairy: 'Märchen', theme_wizard: 'Zauberer', theme_celtic: 'Keltisch', theme_animal: 'Tier', theme_flower: 'Blume',
    toggle_mythic: 'Myth. Woche', toggle_otherdate: 'And. Datum', toggle_holidays: 'Feiertage',
    toggle_birthdays: 'Geburtstage', toggle_meteors: 'Meteore', toggle_comets: 'Kometen',
    sky_hint: 'Für Himmelsberechnungen. Neg. Lon = West.',
    name_ph: 'Name', day_ph: 'Tag',
  },

  fr: {
    moons: ['Lune de Neige','Lune du Réveil','Lune des Semailles','Lune d\'Éclosion','Lune des Fleurs',
            'Lune des Baies','Lune d\'Été','Lune de Moisson','Lune de Cueillette','Lune des Feuilles',
            'Lune du Gel','Lune Noire','Lune Bleue'],
    animals: ['Rouge-gorge','Lapin','Dindon','Ours','Renard'],
    weekdays_myth: ['Heimjour','Tyrsjour','Wodnsjour','Thorsjour','Freyajour','Lunedi','Soleil'],
    weekdays_std:  ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
    greg_months: ['Janvier','Février','Mars','Avril','Mai','Juin',
                  'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    phases: { new:'Nouvelle Lune', first:'Premier Quartier', full:'Pleine Lune', last:'Dernier Quartier' },
    solar:  { springEquinox:'Équinoxe de Printemps', summerSolstice:'Solstice d\'Été',
              autumnEquinox:'Équinoxe d\'Automne', winterSolstice:'Solstice d\'Hiver' },
    today: 'Aujourd\'hui',
    save: 'Enregistrer', cancel: 'Annuler', add: 'Ajouter',
    language: 'Langue',
    settings_title: 'Paramètres',
    location: 'Lieu',
    lat: 'Lat', lon: 'Lon',
    birthdays: 'Anniversaires',
    share_link: 'Partager le lien\u2026',
    moons_badge: '13 Lunes',
    bluemoon_year: 'Année de la Lune Bleue',
    year_animal: 'Année du {0}',
    tonight: 'Ce Soir',
    night_sky: 'Ciel Nocturne',
    planets: 'Planètes\u00a0:',
    meteor_peaks: 'Pics de météores\u00a0:',
    view_sky_btn: 'Voir le Ciel',
    scroll_hint: 'Défiler pour zoomer \u00b7 Glisser pour panoramique \u00b7 Double-clic pour réinitialiser',
    today_marker: '\u2014 Aujourd\'hui \u2014',
    no_events: 'Aucun événement dans les 60 prochains jours.',
    no_birthdays_share: 'Aucun anniversaire à partager',
    link_copied: 'Lien copié\u00a0! Envoyez-le à la famille.',
    copy_failed: 'Impossible de copier \u2014 réessayez',
    days_count: '{0} jours',
    leap_year: '13 Mois \u00b7 Année Bissextile',
    mythic_on: 'Semaine mythique activée', mythic_off: 'Semaine mythique désactivée',
    holidays_on: 'Jours fériés activés',   holidays_off: 'Jours fériés désactivés',
    meteors_on: 'Météores activés',        meteors_off: 'Météores désactivés',
    comets_on: 'Comètes activées',         comets_off: 'Comètes désactivées',
    birthdays_on: 'Anniversaires activés', birthdays_off: 'Anniversaires désactivés',
    otherdate_on: 'Autre date activée',    otherdate_off: 'Autre date désactivée',
    view_fairy: 'Lunaire', view_greg: 'Grégorien', view_week: 'Semaine',
    view_sky: 'Ciel', view_hebrew: 'Hébreu',
    darkmoon_tooltip: 'Lune Noire \u00b7 {0}',
    print_sub: 'Lunaire Mythique', print_title: 'Calendrier',
    print_holocene: 'An {0} de l\'Ère Humaine',
    print_animal: 'Année du {0} \u00b7 {1} Lunes',
    no_bdays_yet: 'Aucun anniversaire ajouté.',
    label_theme: 'Thème\u00a0:', label_color: 'Couleur\u00a0:',
    theme_fairy: 'Fée', theme_wizard: 'Sorcier', theme_celtic: 'Celtique', theme_animal: 'Animal', theme_flower: 'Fleur',
    toggle_mythic: 'Sem. Myth.', toggle_otherdate: 'Autre Date', toggle_holidays: 'Jours Fériés',
    toggle_birthdays: 'Anniversaires', toggle_meteors: 'Météores', toggle_comets: 'Comètes',
    sky_hint: 'Pour calculs du ciel. Lon négatif\u00a0= Ouest.',
    name_ph: 'Nom', day_ph: 'Jour',
  },

  it: {
    moons: ['Luna di Neve','Luna del Risveglio','Luna delle Sementi','Luna dei Boccioli','Luna dei Fiori',
            'Luna delle Bacche','Luna d\'Estate','Luna del Raccolto','Luna della Raccolta','Luna delle Foglie',
            'Luna del Gelo','Luna Oscura','Luna Azzurra'],
    animals: ['Pettirosso','Coniglio','Tacchino','Orso','Volpe'],
    weekdays_myth: ['Heimgiorno','Tirsgiorno','Wodnsgiorno','Thorsgiorno','Freyagiorno','Lunagiorno','Solgiorno'],
    weekdays_std:  ['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'],
    greg_months: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
                  'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
    phases: { new:'Luna Nuova', first:'Primo Quarto', full:'Luna Piena', last:'Ultimo Quarto' },
    solar:  { springEquinox:'Equinozio di Primavera', summerSolstice:'Solstizio d\'Estate',
              autumnEquinox:'Equinozio d\'Autunno', winterSolstice:'Solstizio d\'Inverno' },
    today: 'Oggi',
    save: 'Salva', cancel: 'Annulla', add: 'Aggiungi',
    language: 'Lingua',
    settings_title: 'Impostazioni',
    location: 'Posizione',
    lat: 'Lat', lon: 'Lon',
    birthdays: 'Compleanni',
    share_link: 'Condividi link\u2026',
    moons_badge: '13 Lune',
    bluemoon_year: 'Anno della Luna Azzurra',
    year_animal: 'Anno del {0}',
    tonight: 'Stasera',
    night_sky: 'Cielo Notturno',
    planets: 'Pianeti:',
    meteor_peaks: 'Picchi di meteore:',
    view_sky_btn: 'Vedi il Cielo',
    scroll_hint: 'Scorri per ingrandire \u00b7 Trascina per spostare \u00b7 Doppio clic per ripristinare',
    today_marker: '\u2014 Oggi \u2014',
    no_events: 'Nessun evento nei prossimi 60 giorni.',
    no_birthdays_share: 'Nessun compleanno da condividere',
    link_copied: 'Link copiato! Invialo alla famiglia.',
    copy_failed: 'Impossibile copiare \u2014 riprova',
    days_count: '{0} giorni',
    leap_year: '13 Mesi \u00b7 Anno Bisestile',
    mythic_on: 'Settimana mitica attivata', mythic_off: 'Settimana mitica disattivata',
    holidays_on: 'Festività attivate',       holidays_off: 'Festività disattivate',
    meteors_on: 'Meteore attivate',          meteors_off: 'Meteore disattivate',
    comets_on: 'Comete attivate',            comets_off: 'Comete disattivate',
    birthdays_on: 'Compleanni attivati',     birthdays_off: 'Compleanni disattivati',
    otherdate_on: 'Altra data attivata',     otherdate_off: 'Altra data disattivata',
    view_fairy: 'Lunare', view_greg: 'Gregoriano', view_week: 'Settimana',
    view_sky: 'Cielo', view_hebrew: 'Ebraico',
    darkmoon_tooltip: 'Luna Oscura \u00b7 {0}',
    print_sub: 'Lunare Mitico', print_title: 'Calendario',
    print_holocene: 'Anno {0} dell\'Era Umana',
    print_animal: 'Anno del {0} \u00b7 {1} Lune',
    no_bdays_yet: 'Nessun compleanno aggiunto.',
    label_theme: 'Tema:', label_color: 'Colore:',
    theme_fairy: 'Fata', theme_wizard: 'Mago', theme_celtic: 'Celtico', theme_animal: 'Animale', theme_flower: 'Fiore',
    toggle_mythic: 'Sett. Mitica', toggle_otherdate: 'Altra Data', toggle_holidays: 'Festività',
    toggle_birthdays: 'Compleanni', toggle_meteors: 'Meteore', toggle_comets: 'Comete',
    sky_hint: 'Per calcoli celesti. Lon negativo = Ovest.',
    name_ph: 'Nome', day_ph: 'Giorno',
  },

  es: {
    moons: ['Luna de Nieve','Luna del Despertar','Luna de la Siembra','Luna de la Floración','Luna de las Flores',
            'Luna de las Bayas','Luna de Verano','Luna de la Cosecha','Luna de la Recolección','Luna de las Hojas',
            'Luna de la Escarcha','Luna Oscura','Luna Azul'],
    animals: ['Petirrojo','Conejo','Pavo','Oso','Zorro'],
    weekdays_myth: ['Heimdía','Tyrsdía','Wodnsdía','Thorsdía','Freyadía','Lunesdía','Solardía'],
    weekdays_std:  ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
    greg_months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
                  'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    phases: { new:'Luna Nueva', first:'Cuarto Creciente', full:'Luna Llena', last:'Cuarto Menguante' },
    solar:  { springEquinox:'Equinoccio de Primavera', summerSolstice:'Solsticio de Verano',
              autumnEquinox:'Equinoccio de Otoño', winterSolstice:'Solsticio de Invierno' },
    today: 'Hoy',
    save: 'Guardar', cancel: 'Cancelar', add: 'Añadir',
    language: 'Idioma',
    settings_title: 'Ajustes',
    location: 'Ubicación',
    lat: 'Lat', lon: 'Lon',
    birthdays: 'Cumpleaños',
    share_link: 'Compartir enlace\u2026',
    moons_badge: '13 Lunas',
    bluemoon_year: 'Año de Luna Azul',
    year_animal: 'Año del {0}',
    tonight: 'Esta Noche',
    night_sky: 'Cielo Nocturno',
    planets: 'Planetas:',
    meteor_peaks: 'Picos de meteoros:',
    view_sky_btn: 'Ver el Cielo',
    scroll_hint: 'Desplazar para zoom \u00b7 Arrastrar para mover \u00b7 Doble clic para restablecer',
    today_marker: '\u2014 Hoy \u2014',
    no_events: 'No hay eventos en los próximos 60 días.',
    no_birthdays_share: 'No hay cumpleaños para compartir',
    link_copied: '¡Enlace copiado! Envíalo a la familia.',
    copy_failed: 'No se pudo copiar \u2014 inténtalo de nuevo',
    days_count: '{0} días',
    leap_year: '13 Meses \u00b7 Año Bisiesto',
    mythic_on: 'Semana mítica activada', mythic_off: 'Semana mítica desactivada',
    holidays_on: 'Festivos activados',   holidays_off: 'Festivos desactivados',
    meteors_on: 'Meteoros activados',    meteors_off: 'Meteoros desactivados',
    comets_on: 'Cometas activados',      comets_off: 'Cometas desactivados',
    birthdays_on: 'Cumpleaños activados', birthdays_off: 'Cumpleaños desactivados',
    otherdate_on: 'Otra fecha activada', otherdate_off: 'Otra fecha desactivada',
    view_fairy: 'Lunar', view_greg: 'Gregoriano', view_week: 'Semana',
    view_sky: 'Cielo', view_hebrew: 'Hebreo',
    darkmoon_tooltip: 'Luna Oscura \u00b7 {0}',
    print_sub: 'Lunar Mítico', print_title: 'Calendario',
    print_holocene: 'Año {0} de la Era Humana',
    print_animal: 'Año del {0} \u00b7 {1} Lunas',
    no_bdays_yet: 'No hay cumpleaños añadidos.',
    label_theme: 'Tema:', label_color: 'Color:',
    theme_fairy: 'Hada', theme_wizard: 'Mago', theme_celtic: 'Céltico', theme_animal: 'Animal', theme_flower: 'Flor',
    toggle_mythic: 'Sem. Mítica', toggle_otherdate: 'Otra Fecha', toggle_holidays: 'Festivos',
    toggle_birthdays: 'Cumpleaños', toggle_meteors: 'Meteoros', toggle_comets: 'Cometas',
    sky_hint: 'Para cálculos del cielo. Lon negativo = Oeste.',
    name_ph: 'Nombre', day_ph: 'Día',
  },

  sw: {
    moons: ['Mwezi wa Theluji','Mwezi wa Kuamka','Mwezi wa Mbegu','Mwezi wa Kuchanua','Mwezi wa Maua',
            'Mwezi wa Matunda','Mwezi wa Joto','Mwezi wa Mavuno','Mwezi wa Kukusanya','Mwezi wa Majani',
            'Mwezi wa Baridi','Mwezi wa Giza','Mwezi wa Samawi'],
    animals: ['Titi','Sungura','Bata Mzinga','Dubu','Mbweha'],
    weekdays_myth: ['Siku ya Heim','Siku ya Tyr','Siku ya Wodn','Siku ya Thor','Siku ya Freya','Siku ya Mwezi','Siku ya Jua'],
    weekdays_std:  ['Jumatatu','Jumanne','Jumatano','Alhamisi','Ijumaa','Jumamosi','Jumapili'],
    greg_months: ['Januari','Februari','Machi','Aprili','Mei','Juni',
                  'Julai','Agosti','Septemba','Oktoba','Novemba','Desemba'],
    phases: { new:'Mwandamo', first:'Robo ya Kwanza', full:'Mwezi Mzima', last:'Robo ya Mwisho' },
    solar:  { springEquinox:'Usawa wa Masika', summerSolstice:'Msimu wa Joto',
              autumnEquinox:'Usawa wa Vuli', winterSolstice:'Msimu wa Baridi' },
    today: 'Leo',
    save: 'Hifadhi', cancel: 'Ghairi', add: 'Ongeza',
    language: 'Lugha',
    settings_title: 'Mipangilio',
    location: 'Mahali',
    lat: 'Lat', lon: 'Lon',
    birthdays: 'Siku za Kuzaliwa',
    share_link: 'Shiriki kiungo\u2026',
    moons_badge: 'Miezi 13',
    bluemoon_year: 'Mwaka wa Mwezi wa Samawi',
    year_animal: 'Mwaka wa {0}',
    tonight: 'Usiku Huu',
    night_sky: 'Anga ya Usiku',
    planets: 'Sayari:',
    meteor_peaks: 'Kilele cha Meteori:',
    view_sky_btn: 'Tazama Anga',
    scroll_hint: 'Sogeza kukuza \u00b7 Buruta kusogea \u00b7 Bonyeza mara mbili kurejesha',
    today_marker: '\u2014 Leo \u2014',
    no_events: 'Hakuna matukio katika siku 60 zijazo.',
    no_birthdays_share: 'Hakuna siku za kuzaliwa za kushiriki',
    link_copied: 'Kiungo kimenakiliwa! Tuma kwa familia.',
    copy_failed: 'Haikuweza kunakili \u2014 jaribu tena',
    days_count: 'Siku {0}',
    leap_year: 'Miezi 13 \u00b7 Mwaka wa Kuruka',
    mythic_on: 'Wiki ya kizushi imewashwa', mythic_off: 'Wiki ya kizushi imezimwa',
    holidays_on: 'Likizo zimewashwa',         holidays_off: 'Likizo zimezimwa',
    meteors_on: 'Meteori zimewashwa',          meteors_off: 'Meteori zimezimwa',
    comets_on: 'Kometi zimewashwa',            comets_off: 'Kometi zimezimwa',
    birthdays_on: 'Siku za kuzaliwa zimewashwa', birthdays_off: 'Siku za kuzaliwa zimezimwa',
    otherdate_on: 'Tarehe nyingine imewashwa', otherdate_off: 'Tarehe nyingine imezimwa',
    view_fairy: 'Mwezi', view_greg: 'Greg.', view_week: 'Wiki',
    view_sky: 'Anga', view_hebrew: 'Kiebrania',
    darkmoon_tooltip: 'Mwezi wa Giza \u00b7 {0}',
    print_sub: 'Mwezi wa Kizushi', print_title: 'Kalenda',
    print_holocene: 'Mwaka {0} wa Enzi ya Binadamu',
    print_animal: 'Mwaka wa {0} \u00b7 Miezi {1}',
    no_bdays_yet: 'Bado hakuna siku za kuzaliwa.',
    label_theme: 'Mandhari:', label_color: 'Rangi:',
    theme_fairy: 'Peri', theme_wizard: 'Mchawi', theme_celtic: 'Keltiki', theme_animal: 'Mnyama', theme_flower: 'Ua',
    toggle_mythic: 'Wiki Kizushi', toggle_otherdate: 'Tarehe Nyingine', toggle_holidays: 'Likizo',
    toggle_birthdays: 'Kuzaliwa', toggle_meteors: 'Meteori', toggle_comets: 'Kometi',
    sky_hint: 'Kwa mahesabu ya anga. Lon hasi = Magharibi.',
    name_ph: 'Jina', day_ph: 'Siku',
  },

  la: {
    moons: ['Luna Nivis','Luna Vigiliae','Luna Seminum','Luna Florentis','Luna Florum',
            'Luna Baccarum','Luna Aestatis','Luna Messis','Luna Collectae','Luna Foliorum',
            'Luna Pruinae','Luna Obscura','Luna Caerulea'],
    animals: ['Rubecula','Lepus','Gallus Indicus','Ursus','Vulpes'],
    weekdays_myth: ['Dies Heimi','Dies Tyri','Dies Wodeni','Dies Thoris','Dies Freyae','Dies Lunae','Dies Solis'],
    weekdays_std:  ['Dies Lunae','Dies Martis','Dies Mercurii','Dies Iovis','Dies Veneris','Dies Saturni','Dies Solis'],
    greg_months: ['Ianuarius','Februarius','Martius','Aprilis','Maius','Iunius',
                  'Iulius','Augustus','September','October','November','December'],
    phases: { new:'Luna Nova', first:'Quadrans Prior', full:'Luna Plena', last:'Quadrans Posterior' },
    solar:  { springEquinox:'Aequinoctium Vernum', summerSolstice:'Solstitium Aestivum',
              autumnEquinox:'Aequinoctium Autumnale', winterSolstice:'Solstitium Hibernum' },
    today: 'Hodie',
    save: 'Serva', cancel: 'Omitte', add: 'Adde',
    language: 'Lingua',
    settings_title: 'Optiones',
    location: 'Locus',
    lat: 'Lat', lon: 'Lon',
    birthdays: 'Dies Natales',
    share_link: 'Nexum Divide\u2026',
    moons_badge: 'Lunae XIII',
    bluemoon_year: 'Annus Lunae Caeruleae',
    year_animal: 'Annus {0}',
    tonight: 'Hac Nocte',
    night_sky: 'Caelum Nocturnum',
    planets: 'Planetae:',
    meteor_peaks: 'Culmina Meteororum:',
    view_sky_btn: 'Vide Caelum',
    scroll_hint: 'Volve ad augendam \u00b7 Trahe ad movendam \u00b7 Bis tange ad restituendum',
    today_marker: '\u2014 Hodie \u2014',
    no_events: 'Nulla eventa in proximis LX diebus.',
    no_birthdays_share: 'Nulli dies natales dividendi',
    link_copied: 'Nexus exscriptus! Mitte familiae.',
    copy_failed: 'Exscribere non potuit \u2014 conare iterum',
    days_count: '{0} dies',
    leap_year: 'Menses XIII \u00b7 Annus Intercalaris',
    mythic_on: 'Hebdomada mythica aperta', mythic_off: 'Hebdomada mythica clausa',
    holidays_on: 'Feriae apertae',          holidays_off: 'Feriae clausae',
    meteors_on: 'Meteora aperta',           meteors_off: 'Meteora clausa',
    comets_on: 'Cometae apertae',           comets_off: 'Cometae clausae',
    birthdays_on: 'Dies natales aperti',    birthdays_off: 'Dies natales clausi',
    otherdate_on: 'Dies alter apertus',     otherdate_off: 'Dies alter clausus',
    view_fairy: 'Lunaris', view_greg: 'Gregorianus', view_week: 'Hebdomada',
    view_sky: 'Caelum', view_hebrew: 'Hebraicus',
    darkmoon_tooltip: 'Luna Obscura \u00b7 {0}',
    print_sub: 'Lunaris Mythicus', print_title: 'Calendarium',
    print_holocene: 'Annum {0} Erae Humanae',
    print_animal: 'Annus {0} \u00b7 Lunae {1}',
    no_bdays_yet: 'Nulli dies natales additi.',
    label_theme: 'Thema:', label_color: 'Color:',
    theme_fairy: 'Fata', theme_wizard: 'Magus', theme_celtic: 'Celticus', theme_animal: 'Animal', theme_flower: 'Flos',
    toggle_mythic: 'Hebdom. Myth.', toggle_otherdate: 'Dies Alter', toggle_holidays: 'Feriae',
    toggle_birthdays: 'Dies Natales', toggle_meteors: 'Meteora', toggle_comets: 'Cometae',
    sky_hint: 'Ad caelum computandum. Lon neg. = Occidens.',
    name_ph: 'Nomen', day_ph: 'Dies',
  },

  // Quenya — Tolkien's High Elvish. Attested words used where possible.
  qy: {
    moons: ['Olosírë','Cuivassírë','Erdessírë','Lótessírë','Yávessírë',
            'Yávisírë','Lairessírë','Yavannessírë','Hostassírë','Lassessírë',
            'Helcessírë','Mornassírë','Lúnessírë'],
    animals: ['Filit','Kuivë','Tauron','Morco','Rusco'],
    weekdays_myth: ['Heimaurë','Turaurë','Aulëaurë','Tulcaurë','Finaurë','Isílaurë','Anáraurë'],
    weekdays_std:  ['Isilya','Aldúya','Menelya','Eärenya','Valanya','Elenya','Anarya'],
    greg_months: null, // falls back to English
    phases: { new:'Isil Vanwa', first:'Quarin Minya', full:'Isil Quanta', last:'Quarin Neldëa' },
    solar:  { springEquinox:'Tuilë Equinox', summerSolstice:'Lairë Solstis',
              autumnEquinox:'Yávië Equinox', winterSolstice:'Hrívë Solstis' },
    today: 'Sí',
    save: 'Termar', cancel: 'Avatyar', add: 'Enyal',
    language: 'Lambë',
    settings_title: 'Canwa',
    location: 'Nómë',
    lat: 'Lat', lon: 'Lon',
    birthdays: 'Coivierë',
    share_link: 'Anta Nexo\u2026',
    moons_badge: 'Isili XIII',
    bluemoon_year: 'Lúnessírë Loa',
    year_animal: '{0} Loa',
    tonight: 'Sí Lómissë',
    night_sky: 'Menel Lómissë',
    planets: 'Ëar:',
    meteor_peaks: 'Isil Andavë:',
    view_sky_btn: 'Cen Menel',
    scroll_hint: 'Rávë an Augerë \u00b7 Mahta an Sohë \u00b7 Yúla an Encarë',
    today_marker: '\u2014 Sí \u2014',
    no_events: 'Lá quenta i yúlë LX auressen.',
    no_birthdays_share: 'Lá coivierë antar',
    link_copied: 'Nexo cildë! Anta nossënya.',
    copy_failed: 'Lá pólë cilya \u2014 enar',
    days_count: '{0} aurë',
    leap_year: 'Mettarë XIII \u00b7 Yúla Loa',
    mythic_on: 'Enquë Eldarin panta', mythic_off: 'Enquë Eldarin hosta',
    holidays_on: 'Coirë panta',   holidays_off: 'Coirë hosta',
    meteors_on: 'Isili panta',    meteors_off: 'Isili hosta',
    comets_on: 'Ëar panta',       comets_off: 'Ëar hosta',
    birthdays_on: 'Coivierë panta', birthdays_off: 'Coivierë hosta',
    otherdate_on: 'Aurë alla panta', otherdate_off: 'Aurë alla hosta',
    view_fairy: 'Isílië', view_greg: 'Greg.', view_week: 'Enquë',
    view_sky: 'Menel', view_hebrew: 'Yúda',
    darkmoon_tooltip: 'Mornassírë \u00b7 {0}',
    print_sub: 'Isil Eldarin', print_title: 'Randa',
    print_holocene: 'Loa {0} Cormello',
    print_animal: '{0} Loa \u00b7 Isili {1}',
    no_bdays_yet: 'Lá coivierë.',
    label_theme: 'Fëa:', label_color: 'Qualmë:',
    theme_fairy: 'Elda', theme_wizard: 'Istar', theme_celtic: 'Keltika', theme_animal: 'Kemen', theme_flower: 'Lótë',
    toggle_mythic: 'Enquë Eldarin', toggle_otherdate: 'Aurë Alla', toggle_holidays: 'Coirë',
    toggle_birthdays: 'Coivierë', toggle_meteors: 'Isili', toggle_comets: 'Ëar',
    sky_hint: 'An menel cenë. Lon norwa = Númen.',
    name_ph: 'Essë', day_ph: 'Aurë',
  },

  // High Valyrian — from Game of Thrones. Attested words used where possible.
  hv: {
    moons: ['Ñūhon Vēzos','Jorrāelun Vēzos','Dēmalion Vēzos','Rōvon Vēzos','Lōtinon Vēzos',
            'Belmorzion Vēzos','Tubinon Vēzos','Gevion Vēzos','Mandinon Vēzos','Lentrot Vēzos',
            'Ñombon Vēzos','Dōrior Vēzos','Lūhor Vēzos'],
    animals: ['Pōjon','Sōvagon','Rōvan','Ābriar','Boktagon'],
    weekdays_myth: ['Undos','Morghundos','Vaohundos','Zaldriundos','Tubundos','Vēzundos','Sȳzundos'],
    weekdays_std:  ['Bantis','Māzis','Zȳhis','Jorrāelis','Vēzis','Ñuqetis','Sȳzis'],
    greg_months: null, // falls back to English
    phases: { new:'Vēzos Dōrior', first:'Vēzos Tubis', full:'Vēzos Bantis', last:'Vēzos Nāpis' },
    solar:  { springEquinox:'Rōvon Equinox', summerSolstice:'Tubinon Solstis',
              autumnEquinox:'Gevion Equinox', winterSolstice:'Ñombon Solstis' },
    today: 'Sȳz',
    save: 'Māzigon', cancel: 'Bē', add: 'Sōvīgon',
    language: 'Valyrion',
    settings_title: 'Bantis',
    location: 'Ñuqetis',
    lat: 'Lat', lon: 'Lon',
    birthdays: 'Jorrāelis',
    share_link: 'Nexo Āghion\u2026',
    moons_badge: 'Vēzoti XIII',
    bluemoon_year: 'Lūhor Vēzos Bē',
    year_animal: '{0} Bē',
    tonight: 'Issa Ñuqetis',
    night_sky: 'Ñuqetis Metel',
    planets: 'Ñuqetoti:',
    meteor_peaks: 'Dēmalion Vēzoti:',
    view_sky_btn: 'Cēnagon Metel',
    scroll_hint: 'Tubagon an Kesir \u00b7 Māzigon an Tubagon \u00b7 Māzis an Sōvīgon',
    today_marker: '\u2014 Sȳz \u2014',
    no_events: 'Daor bantis issa LX ñuqetissi.',
    no_birthdays_share: 'Daor jorrāelis āghion',
    link_copied: 'Nexo māzigon! Anta ñāqissa.',
    copy_failed: 'Daor pōntālī \u2014 sōvīgon',
    days_count: '{0} bantis',
    leap_year: 'Mīsī XIII \u00b7 Tubinon Bē',
    mythic_on: 'Vēzundos panta', mythic_off: 'Vēzundos daor',
    holidays_on: 'Bantis panta',   holidays_off: 'Bantis daor',
    meteors_on: 'Dēmalion panta',  meteors_off: 'Dēmalion daor',
    comets_on: 'Ëar panta',        comets_off: 'Ëar daor',
    birthdays_on: 'Jorrāelis panta', birthdays_off: 'Jorrāelis daor',
    otherdate_on: 'Bantis alla panta', otherdate_off: 'Bantis alla daor',
    view_fairy: 'Vēzis', view_greg: 'Greg.', view_week: 'Bantis',
    view_sky: 'Metel', view_hebrew: 'Hebrēon',
    darkmoon_tooltip: 'Dōrior Vēzos \u00b7 {0}',
    print_sub: 'Vēzos Valyrio', print_title: 'Randa',
    print_holocene: 'Bē {0} Ābran Ondoso',
    print_animal: '{0} Bē \u00b7 Vēzoti {1}',
    no_bdays_yet: 'Daor jorrāelis.',
    label_theme: 'Ñuqetis:', label_color: 'Sȳz:',
    theme_fairy: 'Āeksia', theme_wizard: 'Dōrves', theme_celtic: 'Keltio', theme_animal: 'Lentrot', theme_flower: 'Lōtis',
    toggle_mythic: 'Vēzundos', toggle_otherdate: 'Bantis Alla', toggle_holidays: 'Bantis',
    toggle_birthdays: 'Jorrāelis', toggle_meteors: 'Dēmalion', toggle_comets: 'Ëar',
    sky_hint: 'Metel cēnagon. Lon dōrior = Ñuqetis.',
    name_ph: 'Ēza', day_ph: 'Bantis',
  },
};

// ─── Translation functions ────────────────────────────────────────────────────

function _lang() {
  return (typeof state !== 'undefined' && state && state.language) || 'en';
}

/** Translate a string key, with optional {0}, {1}… interpolation. */
function t(key, ...args) {
  const lang = _lang();
  const tr = I18N[lang];
  let s = (tr && tr[key] !== undefined && tr[key] !== null) ? tr[key] : (I18N.en[key] != null ? I18N.en[key] : key);
  if (typeof s !== 'string') return String(s);
  args.forEach((a, i) => { s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), String(a)); });
  return s;
}

/** Translate an array key (falls back to English array). */
function tArr(key) {
  const lang = _lang();
  const tr = I18N[lang];
  return (tr && Array.isArray(tr[key])) ? tr[key] : I18N.en[key] || [];
}

/** Translated Gregorian month names (constructed langs fall back to English). */
function getGregMonths() {
  const lang = _lang();
  const tr = I18N[lang];
  return (tr && Array.isArray(tr.greg_months)) ? tr.greg_months : I18N.en.greg_months;
}

/** Translated moon phase label for a given phase key (new/first/full/last). */
function tPhase(key) {
  const lang = _lang();
  const tr = I18N[lang];
  return (tr && tr.phases && tr.phases[key]) || (I18N.en.phases[key]) || key;
}

/** Translated solar event label for a given solar key. */
function tSolar(key) {
  const lang = _lang();
  const tr = I18N[lang];
  return (tr && tr.solar && tr.solar[key]) || (I18N.en.solar[key]) || key;
}

/** Translate a moon name from its canonical English form. */
function tMoon(englishName) {
  const idx = I18N.en.moons.indexOf(englishName);
  if (idx < 0) return englishName;
  const arr = tArr('moons');
  return (arr && arr[idx]) || englishName;
}

/**
 * Short form of a moon name for compact cells (week view).
 * For multi-word names: last word. For single-word: strip common suffixes.
 */
function tMoonShort(englishName) {
  const full = tMoon(englishName);
  const words = full.trim().split(/\s+/);
  if (words.length > 1) return words[words.length - 1];
  // Single word — strip common moon-word suffixes
  return full.replace(/mond$/i, '').replace(/sírë$/i, '').replace(/vēzos$/i, '') || full.slice(0, 7);
}

/** Translate a Darkmoon animal name from its canonical English form. */
function tAnimal(englishName) {
  const idx = I18N.en.animals.indexOf(englishName);
  if (idx < 0) return englishName;
  const arr = tArr('animals');
  return (arr && arr[idx]) || englishName;
}

// ─── Secondary-language functions (for title/tooltip display) ─────────────────

function _lang2() {
  return (typeof state !== 'undefined' && state && state.language2) || null;
}

/** Translate a string key using the secondary language. Returns null if no secondary set. */
function t2(key, ...args) {
  const lang2 = _lang2();
  if (!lang2) return null;
  const tr = I18N[lang2];
  let s = (tr && tr[key] !== undefined && tr[key] !== null) ? tr[key] : null;
  if (!s || typeof s !== 'string') return null;
  args.forEach((a, i) => { s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), String(a)); });
  return s;
}

/** Translate a moon name using the secondary language. Returns null if no secondary set. */
function tMoon2(englishName) {
  const lang2 = _lang2();
  if (!lang2) return null;
  const idx = I18N.en.moons.indexOf(englishName);
  if (idx < 0) return null;
  const arr = I18N[lang2] && Array.isArray(I18N[lang2].moons) ? I18N[lang2].moons : null;
  return (arr && arr[idx]) || null;
}

/** Translate an animal name using the secondary language. Returns null if no secondary set. */
function tAnimal2(englishName) {
  const lang2 = _lang2();
  if (!lang2) return null;
  const idx = I18N.en.animals.indexOf(englishName);
  if (idx < 0) return null;
  const arr = I18N[lang2] && Array.isArray(I18N[lang2].animals) ? I18N[lang2].animals : null;
  return (arr && arr[idx]) || null;
}

/** Translate a moon phase key using the secondary language. Returns null if no secondary set. */
function tPhase2(key) {
  const lang2 = _lang2();
  if (!lang2) return null;
  const tr = I18N[lang2];
  return (tr && tr.phases && tr.phases[key]) || null;
}

/** Translate a solar event key using the secondary language. Returns null if no secondary set. */
function tSolar2(key) {
  const lang2 = _lang2();
  if (!lang2) return null;
  const tr = I18N[lang2];
  return (tr && tr.solar && tr.solar[key]) || null;
}

/** Get weekday name at index using the secondary language. Returns null if no secondary set. */
function tWeekday2(idx) {
  const lang2 = _lang2();
  if (!lang2) return null;
  const key = (typeof state !== 'undefined' && state.weekNames === 'std') ? 'weekdays_std' : 'weekdays_myth';
  const tr = I18N[lang2];
  const arr = (tr && Array.isArray(tr[key])) ? tr[key] : null;
  return (arr && arr[idx]) || null;
}
