# Calendar Upgrades 2026-03-28

## PHASE 1: Bug Fixes  
1. Moon phase bug e.g. mar 31-apr 1  
2. Greg not abbreviation other month  
3. Sometimes constellation out of frame  
4. Hebrew calendar. Remove different layout. Just extract the calendar. Don’t need holidays/Hebrew. Keep Latinized month names.  
5. Sky view could be a bit wider  
6. Move labels toggle off top bar, doesn’t fit. When hiding labels, also hide the text and remove fixed area above sky chart  
7. Rephrase help.md “arbitrary religious date” feels a bit flippant. After all its still anchoring to 1 AD.   

## STOP HERE AND CLEAR

## PHASE 2: App Versioning  
1. Once all bugs are down. fix as version 1. Offer app version as an option. Everything Below goes in version 2.  
2. New users are onboard the latest.  
3. Existing users keep version until upgrade opt in. Just give them a toast that new version is available.  

## STOP HERE AND CLEAR

## PHASE 3: UX Features  
* More compact modal menu design with ability to add more in less space (e.g. Calendar button brings up modal where you choose primary and secondary calendar) same with all other options. Chosen options appear in plain text right of button.  
* Revise color system, presets plus color pickers for fg and bg, all themes get dark modes. Themes must be unrelated to color.  
* Selectable “other calendar” for cross comparison (secondary calendar)  
* Smoother sky play motion with cubic hermite interpolation. Do it in a way that avoids skipping. If js runs continuously, the browser has to take a break now and then, so let it take a break at small intervals that won’t be noticed.  
* Default no labels  
* Bigger, Easier to use pause button  
* Revise top level layout options: Sky or Calendar. Month and Week are options available when it’s Calendar, supporting any primary & secondary calendar.   
* Rename Lunar back to Fairy . Because we’re getting more lunar calendar options.  
* Fairy/Greg/Hebrew will become calendar options beside others  

## STOP HERE AND CLEAR

## PHASE 4: New sky culture and Calendars  
* +Skidi Pawnee Sky culture  
* +Cherokee calendar  
* +Iroquois calendar  
* +Hopi calendar  
* +Mayan calendar  
* Holiday packs  
* Culture presets that can load together a language, calendar, holidays, sky culture, and theme. But each element can be overridden by options. See below concept json  
* Custom calendar option, User Customizable month and week names  
* Also translate the help page  
  
{  
  "cherokee": {  
    "language": "chr",  
    "calendar": "cherokee_13_moon",  
    "sky": "cherokee_sky",  
    "seasonal_terms": "cherokee_ecology"  
  },  
  "maya": {  
    "language": "yua",  
    "calendar": "maya_longcount",  
    "sky": "maya_sky",  
    "seasonal_terms": "maya_haab"  
  },  
  "Fairy": {  
    "language": "anglish",  
    "calendar": "fairy_lunisol",  
    "sky": "northern_modern",  
    "seasonal_terms": "mythic_ecological"  
  }  
}  

## STOP HERE AND CLEAR

## PHASE 5: README
And finally, a README.md for the github repository, 
for introducing people to the project. 
may link CLAUDE.md and help.md appropriate  
