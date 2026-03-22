// US Federal Holidays
// Fixed entries use { name, month, day }.
// Floating entries use { name, rule: { month, weekday (0=Sun), n } }.
// n=-1 means "last occurrence" (e.g. last Monday of May).
const US_HOLIDAYS = [
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
];
