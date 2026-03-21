// comets.js — notable comets with visibility windows
// Format: { name, start, end, note }
//   start / end : Gregorian "YYYY-MM-DD" — the ☄ icon appears on every day in the window
//   note        : shown in tooltips and the info modal
//
// Periodic comets below are computed from known orbital periods.
// For newly discovered bright comets, check:
//   • https://heavens-above.com  (also has exact ISS pass times for your location)
//   • https://cometography.com   (Comet Chasing — regularly updated)
//   • https://spaceweather.com

const COMETS = [

  // ── 2026 ────────────────────────────────────────────────────────────
  // 2P/Encke — short-period (3.3 yr), perihelion ~Jan 2027; pre-perihelion
  // apparition begins late 2026 in the morning sky. Typically mag 5–6 (binoculars).
  { name: "2P/Encke", start: "2026-11-01", end: "2027-02-15",
    note: "short-period comet, binoculars (mag ~5–6), morning sky pre-perihelion" },

  // ── 2027 ────────────────────────────────────────────────────────────
  // 45P/Honda-Mrkos-Pajdušáková — 5.3 yr period; previous perihelia Feb 2017 & ~Sep 2022;
  // next expected ~mid-2027. Usually mag 7–8, occasionally naked-eye at close approaches.
  { name: "45P/Honda-Mrkos-Pajdušáková", start: "2027-05-01", end: "2027-09-30",
    note: "Jupiter-family comet, ~5.3 yr period; binoculars or naked eye at best (mag 7–8)" },

  // ── Add newly discovered comets below as they are announced ─────────
  // { name: "C/20XX XX (Name)", start: "YYYY-MM-DD", end: "YYYY-MM-DD", note: "..." },

];
