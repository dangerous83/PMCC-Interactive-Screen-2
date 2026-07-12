/* ==========================================================================
   PMCC 4TH WATCH — LEADERSHIP DIRECTORY  ·  APP LOGIC  (Corporate / light edition)
   ==========================================================================

   ┌──────────────────────────────────────────────────────────────────────┐
   │  EDIT CONTENT BELOW. Leadership text lives in CONTENT.sections;        │
   │  branch regions/countries in CONTENT.branches; assistant name, sounds, │
   │  gallery scenes and color themes each have their own clearly-labelled  │
   │  config block. No photos are used for now — each entry shows an icon.  │
   └──────────────────────────────────────────────────────────────────────┘
   ========================================================================== */
"use strict";

/* ═══════════════════ 1. ASSISTANT (JARVIS) NAME — EDIT ════════════════ */
const ASSISTANT_NAME = "Brother Thomas";   // ← rename your assistant here

/* Bump this number whenever you replace a photo in assets/ — it forces every
   browser/kiosk to fetch the fresh image instead of showing a cached old one. */
const ASSET_VERSION = 5;
const withV = (src) => src + (src.includes("?") ? "&" : "?") + "v=" + ASSET_VERSION;

/* ═══════════════════ 2. LEADERSHIP CONTENT — EDIT ════════════════════ */
/* Facts below are drawn from pmcc4thwatch.org / Wikipedia (public sources).
   Replace or extend freely. Entries marked "(edit)" are editable slots.   */
const CONTENT = {
  church: {
    name: "Pentecostal Missionary Church of Christ (4th Watch)",
    tagline: "Evangelizing the Lost · Edifying the Saints",
    headquarters: "Marikina City, Metro Manila, Philippines",
    founded: "1972 (registered August 30, 1973)",
    members: "~1 million believers worldwide",
    countries: "72+ countries · 1,055 locale churches",
    meaningOf4thWatch:
      "From the church's ‘Watches of the Night’ doctrine. The ‘4th Watch’ comes from Matthew 14:25, where Jesus walks on the sea ‘in the fourth watch of the night’ — the last, darkest watch before dawn, understood as the present end-time era of Christ's imminent return.",
    doctrineSummary:
      "A Philippines-based Pentecostal denomination holding Scripture as verbally inspired and the sole authority for faith and conduct, affirming the Godhead of Father, Son and Holy Spirit, water baptism by immersion, the baptism of the Holy Spirit, the continued gift of apostleship (Ephesians 4:11), holiness, and the second coming of Christ.",
  },

  sections: [
    {
      id: "apostle", label: "APOSTLE", subtitle: "CHIEF EXECUTIVE MINISTRY", icon: "apostle",
      items: [
        { name: "Apostle Jonathan S. Ferriol",
          position: "Chief Executive Minister",
          image: "assets/apostle-jonathan-ferriol.jpg",
          description:
            "Apostle Jonathan S. Ferriol is the Chief Executive Minister of the PMCC (4th Watch). The second eldest son of founder " +
            "Apostle Arsenio T. Ferriol and Evangelist Leticia S. Ferriol, he was appointed Deputy Executive Minister in May 2023 and " +
            "succeeded his father as Chief Executive Minister in 2024. He founded the church's Media Communications Department and the " +
            "‘Oras ng Katotohanan’ radio and television program.",
          extra: { Role: "Chief Executive Minister", "Deputy Since": "May 2023", "CEM Since": "2024" } },
        { name: "Apostle Arsenio Tan Ferriol",
          position: "Founder · First Chief Executive Minister (1936 – 2024)",
          image: "assets/apostle-arsenio-ferriol.jpg",
          description:
            "Born January 14, 1936 in Odiongan, Romblon, Apostle Arsenio Tan Ferriol founded the PMCC (4th Watch) in 1972 following a " +
            "claimed 1970 divine calling to restore the apostolic church. A former Foursquare Gospel minister, he led the fellowship into a " +
            "global denomination and was regarded by members as the end-time apostle. He went home to be with the Lord on May 19, 2024, at age 88.",
          extra: { Born: "Jan 14, 1936 · Odiongan, Romblon", "Home to Glory": "May 19, 2024" } },
      ],
    },
    {
      id: "bishops", label: "BISHOPS", subtitle: "EPISCOPAL COUNCIL", icon: "bishops",
      items: [
        { name: "Archbishop Arturo “Art” Ferriol", position: "Archbishop",
          image: "assets/archbishop-arturo-ferriol.png",
          description: "Brother of founder Arsenio T. Ferriol. He established Maranatha Bible School International — the church's ministerial training arm — in 1975 and later led construction of the main church in Marikina.",
          extra: { Founded: "Maranatha Bible School (1975)" } },
        { name: "Bishop Osinando “Osie” Quillao", position: "Senior Bishop",
          description: "Senior Bishop providing international oversight for districts worldwide through preaching, worship services, and educational programs. He ministered in the US District and joined missionary journeys to Occidental Mindoro.",
          extra: { Oversight: "International districts" } },
        { name: "Bishop Rustico “Resting” Zonio", position: "Bishop",
          description: "Born April 5, 1952 in Guadalupe, Libacao, Aklan. An early disciple and a pioneer across the Visayas and Mindanao, and author of the book ‘Sa Akon Mga Pagpangwali’.",
          extra: { Born: "Apr 5, 1952 · Aklan", Region: "Visayas & Mindanao" } },
        { name: "Bishop Samuel Santos Ferriol", position: "Bishop · Marikina City Councilor",
          description: "Son of founder Arsenio and Leticia Ferriol. He became a Church Presbyter in 2021 and was elevated to Bishop in 2023, and also serves as an elected city councilor for Marikina City District 1.",
          extra: { Elevated: "Bishop (2023)", "Civic Role": "Marikina Councilor" } },
        { name: "Bishop Aldrin Palanca", position: "Bishop · Middle East District",
          // PHOTO: drop the file at this path and it appears automatically.
          image: "assets/bishop-aldrin-palanca.jpg",
          location: "Dubai, United Arab Emirates",
          description: "A bishop associated with the Middle East District. He spoke on behalf of the church during the 50th (Golden) Anniversary celebration in 2023.",
          ministryRole: "Provides episcopal oversight for the Middle East District — shepherding pastors and local churches, guiding worship and discipleship, and representing the church at regional gatherings.",
          assignment: "Middle East District — overseeing congregations across the Gulf region and supporting multiple branch churches.",
          messages: ["Watchmen of the Fourth Watch", "Faith Across the Nations", "The Church Christ Builds", "Standing Firm in a Foreign Land"],
          contact: { Email: "middleeast@pmcc4thwatch.org", Office: "Sun–Thu · 9:00 AM – 5:00 PM (GST)", Branch: "PMCC (4th Watch) Dubai" },
          extra: { District: "Middle East" } },
        { name: "Bishop Reynald Sulayao", position: "Bishop",
          description: "Described as a seasoned, prophetic voice in the global church and a servant leader of character; a distinguished guest at the Canada District Conference.",
          extra: { Ministry: "Global preaching" } },
        { name: "Bishop Domingo “Dodoy” Ferriol", position: "Bishop (1943 – 2021)",
          description: "Brother of the founder. He pioneered one of the first church buildings in Malagasang, Imus, Cavite, and undertook missionary journeys to Occidental Mindoro.",
          extra: { Pioneered: "Imus, Cavite" } },
      ],
    },
    {
      id: "presbyters", label: "PRESBYTERS", subtitle: "PRESBYTERY · DISTRICT COORDINATORS", icon: "presbyters",
      items: [
        { name: "Presbyter Marites Ferriol", position: "U.S. District Coordinator",
          description: "Wife of Chief Executive Minister Apostle Jonathan S. Ferriol, she coordinates the U.S. District, which comprises roughly 50 local churches and recently marked its 35th anniversary.",
          extra: { District: "United States (~50 churches)" } },
        { name: "Presbyter Joseph Concepcion", position: "Canada District Coordinator",
          description: "Leads the Canada District — 30+ locations across Canada and the Caribbean — serving with Pastor Genalyn Concepcion. Credited with planting and strengthening churches from British Columbia to Quebec.",
          extra: { District: "Canada & Caribbean (30+)" } },
        { name: "Presbyter Levi S. Ferriol", position: "Presbyter",
          description: "Son of founder Arsenio and Leticia Ferriol; serves as a presbyter in the church.",
          extra: { Family: "Ferriol" } },
        { name: "Presbyter Raquel Dela Cruz", position: "Head Minister · Singapore / S.E. Asia District",
          description: "Presbyter and head minister of PMCC (4th Watch) Singapore, part of the South East Asia District.",
          extra: { District: "South East Asia" } },
        { name: "Presbyter Erwin Dela Cruz", position: "Presbyter · U.S. District",
          description: "A U.S. District leader working alongside U.S. District Coordinator Presbyter Marites Ferriol.",
          extra: { District: "United States" } },
        { name: "Presbyter Isabel Obsanga", position: "Presbyter · Canada District",
          description: "Listed among Canada District leaders; served as a keynote speaker at Canada District Camp 2025.",
          extra: { District: "Canada" } },
        { name: "Presbyter Elleza Palanca", position: "Presbyter · Middle East District",
          // PHOTO: drop the file at this path and it appears automatically.
          image: "assets/presbyter-elleza-palanca.jpg",
          location: "Dubai, United Arab Emirates",
          description: "Serves as a presbyter in the Middle East District, supporting pastoral care, women's and youth ministries, and the growth of local congregations across the Gulf region.",
          extra: { District: "Middle East" } },
      ],
    },
    {
      id: "pastors", label: "PASTORS", subtitle: "PASTORAL TEAM · DISTRICT COORDINATORS", icon: "pastors",
      items: [
        { name: "Pastor Loren Barredo", position: "Pastor", location: "Dubai, United Arab Emirates",
          image: "assets/pastor-loren-barredo.png",
          ministryRole: "Serves as a pastor of the church, providing pastoral care, worship leadership, and ministry support to the congregation.",
          assignment: "PMCC (4th Watch) Dubai — Middle East District.",
          extra: { District: "Middle East" } },
        { name: "Pastor Marisol Calingasan", position: "Pastor", location: "Dubai, United Arab Emirates",
          image: "assets/pastor-marisol-calingasan.png",
          ministryRole: "Serves as a pastor of the church, providing pastoral care, worship leadership, and ministry support to the congregation.",
          assignment: "PMCC (4th Watch) Dubai — Middle East District.",
          extra: { District: "Middle East" } },
        { name: "Pastor Tess Salanap", position: "Southern Europe District Coordinator",
          description: "District Coordinator of the Southern Europe District — Spain, Portugal, Greece, Cyprus, Italy and Malta. She rallied ministers for Apostle Jonathan Ferriol's apostolic visitation in Madrid.",
          extra: { District: "Southern Europe" } },
        { name: "Pastor Jesette Noche", position: "Western Europe District Coordinator",
          description: "Coordinator of the Western Europe District; present at the global apostolic visitation in Madrid.",
          extra: { District: "Western Europe" } },
        { name: "Pastor Genalyn Concepcion", position: "Eastern Sub-District Coordinator · Canada",
          description: "Canada Sub-District coordinator serving with Presbyter Joseph Concepcion; among the leaders of the Toronto locale.",
          extra: { "Sub-District": "Canada (East)" } },
        { name: "Pastor Asherlyn Valeroso", position: "Western Sub-District Coordinator · Canada",
          description: "Canada Sub-District coordinator associated with the Edmonton locale.",
          extra: { "Sub-District": "Canada (West)" } },
        { name: "Pastor Arlet Joy F. Guerrero", position: "Pastor",
          description: "Daughter of founder Arsenio and Leticia Ferriol; serves as a pastor in the church.",
          extra: { Family: "Ferriol" } },
        { name: "Pastor Jhun Valeroso", position: "Pastor · Edmonton, Canada",
          description: "Named as a pastor at the Edmonton locale alongside Pastor Asherlyn Valeroso.",
          extra: { Locale: "Edmonton" } },
        { name: "Pastor Daniel Ferriol", position: "Sub-District Coordinator · Canada",
          description: "Listed as one of the Canada District sub-coordinators.",
          extra: { "Sub-District": "Canada" } },
        { name: "Pastor Luis Concepcion", position: "Sub-District Coordinator · Canada",
          description: "Listed among the Canada District sub-coordinators.",
          extra: { "Sub-District": "Canada" } },
        { name: "Pastor Hilda Arganda", position: "Associate Pastor · Toronto, Canada",
          description: "Listed as an associate pastor for the Toronto congregation.",
          extra: { Locale: "Toronto" } },
      ],
    },
    {
      id: "elders", label: "ELDERS", subtitle: "COUNCIL OF ELDERS", icon: "elders",
      items: [
        { name: "Elder Derek Acbang", position: "Elder · Council of Elders", location: "Dubai, United Arab Emirates",
          image: "assets/elder-derek-acbang.jpg",
          ministryRole: "Serves on the Council of Elders, providing spiritual leadership, pastoral care, and ministry support within the local church.",
          assignment: "PMCC (4th Watch) Dubai — Middle East District.",
          extra: { District: "Middle East" } },
        { name: "Elder Amy Eslava", position: "Elder · Council of Elders", location: "Dubai, United Arab Emirates",
          image: "assets/elder-amy-eslava.jpg",
          ministryRole: "Serves on the Council of Elders, providing spiritual leadership, pastoral care, and ministry support within the local church.",
          assignment: "PMCC (4th Watch) Dubai — Middle East District.",
          extra: { District: "Middle East" } },
      ],
    },
    {
      id: "history", label: "HISTORY", subtitle: "OUR HUMBLE BEGINNINGS", icon: "history",
      items: [
        // ── Our Dubai church journey (chronological, shown first) ──
        { name: "Early 2000", position: "Our Extension Worship Begins",
          description: "Brethren from Abu Dhabi started the Extension Worship Service in Dubai in favor of a few Marikina and Malagasang brethren who were working in the city at that time. Worship services were first held in a rented Christian compound in Oud Metha every Saturday night and eventually held in a small flat in Satwa.",
          images: ["assets/Early 2000 - A.png", "assets/Early 2000 - B.png", "assets/Early 2000.png"],
          extra: { Location: "Dubai, UAE", Services: "Oud Metha · Satwa" } },
        { name: "Year 2004", position: "Services Move to Lily Tower",
          description: "As the number of worshippers had grown to 30, the services were then held at Lily Tower.",
          images: ["assets/Early 2004.png"],
          extra: { Location: "Dubai, UAE", Worshippers: "≈ 30" } },
        { name: "Year 2008", position: "8th Anniversary · A Turning Point",
          description: "In 2008, Abu Dhabi celebrated their 8th Church Anniversary in World Trade Center, with the first Dubai brethren joining them in the occasion. This also marked the \"turning point\" for the Dubai Extension to have their First Anniversary.",
          images: ["assets/Early 2008 - A.png", "assets/Early 2008 - B.png", "assets/Early 2008-C.png.jpg", "assets/Early 2008-D.png"],
          extra: { Venue: "World Trade Center, Abu Dhabi", Milestone: "Dubai Extension's 1st Anniversary" } },
        // ── PMCC (4th Watch) global milestones ──
        { name: "Founding of PMCC (4th Watch)", position: "1972",
          description: "Apostle Arsenio Tan Ferriol founds the church after separating from the Foursquare Gospel Church, following a claimed 1970 divine calling in Odiongan to restore the apostolic church.",
          extra: { Founder: "Arsenio T. Ferriol" } },
        { name: "Formal Registration", position: "August 30, 1973",
          description: "The church is formally registered. Arsenio Ferriol becomes its first Chief Executive Minister and takes the title of Apostle.",
          extra: { Title: "Chief Executive Minister" } },
        { name: "First Foreign Church", position: "1989",
          description: "The church's first overseas congregation is established in Hong Kong, growing out of Filipino labor migration, and reaches North America the same year — beginning decades of global expansion.",
          extra: { "First Abroad": "Hong Kong" } },
        { name: "Golden (50th) Anniversary", position: "August 27, 2023",
          description: "Celebrated at New Clark City Athletics Stadium in Capas, Tarlac. The church reports presence in 72 countries with 1,055 locale churches and ~1 million members. Jonathan Ferriol takes his oath as Deputy Executive Minister.",
          extra: { Milestone: "50 years", Reach: "72 countries" } },
        { name: "Founder's Passing & Succession", position: "May 19, 2024",
          description: "Founder Apostle Arsenio Tan Ferriol dies at age 88. His son, Apostle Jonathan S. Ferriol, succeeds him as Chief Executive Minister, making his first official visit in the role on June 23, 2024.",
          extra: { Succession: "Jonathan S. Ferriol" } },
        { name: "Home Free Global Crusade", position: "January 17–18, 2026",
          description: "The Home Free Global Crusade launches in Manila at Quirino Grandstand, drawing well over 100,000 attendees across two nights, with thousands baptized on the spot.",
          extra: { Venue: "Quirino Grandstand, Manila" } },
      ],
    },
  ],

  /* ═════════════════ 3. BRANCHES — regions & countries — EDIT ════════ */
  branches: [
    { region: "Middle East", countries:
      ["Dubai","Abu Dhabi","Turkey","Jordan","Lebanon","Israel","Syria","Qatar","Saudi Arabia","Kuwait","Yemen","Iran"] },
    { region: "Asia", countries:
      ["China","Japan","Mongolia","North Korea","South Korea","Taiwan"] },
    { region: "South Asia", countries:
      ["Afghanistan","Bangladesh","Bhutan","India","Maldives","Nepal","Pakistan","Sri Lanka"] },
    { region: "Americas & Oceania", countries:
      ["USA","Canada","Australia"] },
    { region: "Europe", countries:
      ["Netherlands"] },
    { region: "Home Country", countries:
      ["Philippines"] },
  ],

  /* ═════════════════ TESTIMONIES — sample dummy data (edit) ══════════ */
  testimonies: [
    { name: "Sister Maria Santos", role: "Member · Dubai", date: "2025",
      text: "I came to the 4th Watch broken and searching. Through the teaching of the Word and the love of the brethren, God restored my family and gave me a living hope. I am forever grateful." },
    { name: "Brother David Reyes", role: "Youth · Manila", date: "2024",
      text: "As a young man I was lost in the world. The youth ministry welcomed me, discipled me, and showed me my purpose in Christ. Today I serve joyfully in the media ministry." },
    { name: "Sister Grace Almazan", role: "Member · Toronto", date: "2025",
      text: "Far from home, I found a family in the Canada District. The Lord provided work, community, and a deeper walk of faith — truly He watches over us in the fourth watch of the night." },
    { name: "Brother Samuel Cruz", role: "Member · Riyadh", date: "2024",
      text: "God healed me when the doctors had given up. I testify that the same Jesus who walked on the sea still moves today. To Him be all the glory." },
  ],
};

/* ═══════════════════ 4. GALLERY SCENES (backgrounds) ══════════════════ */
/* Built-in CSS scenes need no image files. "photo" points at your own file. */
const SCENES = [
  { id: "clean",   label: "Clean White",   type: "css", css: "linear-gradient(180deg, #f8fafd 0%, #eef2f8 100%)" }, // corporate default
  { id: "photo",   label: "Signature",     type: "photo", src: "assets/background.jpg" },                            // optional photo
  { id: "mist",    label: "Cool Mist",     type: "css", css: "radial-gradient(120% 90% at 50% 8%, #ffffff 0%, #e9eef6 60%, #dfe6f0 100%)" },
  { id: "slate",   label: "Light Slate",   type: "css", css: "linear-gradient(180deg, #f4f6fa 0%, #e7ecf3 100%)" },
  { id: "azure",   label: "Soft Azure",    type: "css", css: "radial-gradient(120% 100% at 50% 0%, #f2f7ff 0%, #e6eefb 55%, #dbe6f6 100%)" },
  { id: "sky",     label: "Pale Sky",      type: "css", css: "linear-gradient(180deg, #f5f9ff 0%, #e8f0fb 100%)" },
  { id: "sand",    label: "Warm Sand",     type: "css", css: "linear-gradient(180deg, #fbfaf7 0%, #f0ede6 100%)" },
  { id: "mint",    label: "Fresh Mint",    type: "css", css: "linear-gradient(180deg, #f6fbf8 0%, #e8f3ee 100%)" },
  { id: "pearl",   label: "Pearl Grey",    type: "css", css: "linear-gradient(180deg, #fafbfc 0%, #eceff3 100%)" },
  { id: "linen",   label: "Soft Linen",    type: "css", css: "radial-gradient(120% 90% at 50% 6%, #ffffff 0%, #f1f0ec 70%, #e8e6df 100%)" },
];

/* ═══════════════════ 5. COLOR THEMES (accent) ═════════════════════════ */
/* Professional accent palette — corporate blue is the default.               */
const THEMES = [
  { id: "blue",      color: "#2563eb" },   // default — corporate blue
  { id: "navy",      color: "#1e3a5f" },
  { id: "indigo",    color: "#4f46e5" },
  { id: "teal",      color: "#0d9488" },
  { id: "emerald",   color: "#059669" },
  { id: "sky",       color: "#0284c7" },
  { id: "slate",     color: "#475569" },
  { id: "amber",     color: "#b45309" },
  { id: "rose",      color: "#be123c" },
  { id: "violet",    color: "#7c3aed" },
];

/* ═══════════ INTERFACE SCHEMES — 10 icon / design styles ══════════════
   Each scheme recolours the whole interface (accent + tiles + icon line-art)
   via CSS variables scoped to body[data-scheme]. Applied by applyScheme().  */
const SCHEMES = [
  { id: "royalgold", label: "Corporate Blue", accent: "#2563eb" },
  { id: "cyberneon", label: "Teal",           accent: "#0891b2" },
  { id: "emerald",   label: "Emerald",        accent: "#059669" },
  { id: "crimson",   label: "Crimson",        accent: "#dc2626" },
  { id: "sapphire",  label: "Sapphire",       accent: "#1d4ed8" },
  { id: "amethyst",  label: "Amethyst",       accent: "#7c3aed" },
  { id: "platinum",  label: "Graphite",       accent: "#475569" },
  { id: "sunset",    label: "Amber",          accent: "#ea580c" },
  { id: "rosegold",  label: "Rose",           accent: "#e11d63" },
  { id: "mono",      label: "Mono Slate",     accent: "#334155" },
];

/* ═══════════════════ 6. SOUND SETTINGS ════════════════════════════════ */
/* Synthesized offline — no files needed. To use your own audio files, set
   paths here (leave null to keep the built-in synth sound):                */
const SOUND_FILES = { tap: null, open: null, back: null, boot: null };

/* ═══════════════════ 7. ICON ARTWORK (24×24 line-art) ═════════════════ */
const ICONS = {
  apostle: `<path d="M12 3v5M9.5 5.5h5"/><circle cx="12" cy="11.5" r="2.6"/><path d="M6.5 20c.6-3.4 2.9-5 5.5-5s4.9 1.6 5.5 5"/>`,
  bishops: `<path d="M12 3l3.5 4.5v4h-7v-4L12 3z"/><path d="M8.5 11.5h7L17 20H7l1.5-8.5z"/><path d="M12 6.2v2.6M10.9 7.5h2.2"/>`,
  presbyters: `<path d="M7 20V6a3 3 0 0 1 6 0"/><path d="M7 20h4"/><path d="M14 12h6M14 15.5h6M14 19h6"/>`,
  pastors: `<circle cx="9" cy="8" r="2.5"/><path d="M4.5 20c.5-3.2 2.3-4.8 4.5-4.8s4 1.6 4.5 4.8"/><path d="M17.5 4v6.5M17.5 4a2.2 2.2 0 1 1 2.2 2.3"/>`,
  elders: `<circle cx="8" cy="9" r="2.3"/><circle cx="16" cy="9" r="2.3"/><path d="M3.5 19c.4-2.8 2-4.3 4.5-4.3 1.6 0 2.8.6 3.6 1.7.8-1.1 2-1.7 3.6-1.7 2.5 0 4.1 1.5 4.5 4.3"/>`,
  branches: `<circle cx="12" cy="9" r="5.5"/><path d="M12 3.5v11M6.8 7h10.4M6.8 11h10.4"/><path d="M12 14.5v3M8 21h8M12 17.5l-3 3.5M12 17.5l3 3.5"/>`,
  history: `<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2.2"/><path d="M4 12h-1.5M21.5 12H20"/>`,
  // menu / feature glyphs
  home: `<path d="M4 11l8-6 8 6"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>`,
  gallery: `<rect x="3.5" y="5" width="17" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 17l5-4 4 3 3-2 4 3"/>`,
  settings: `<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19"/>`,
  jarvis: `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/>`,
  browser: `<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17"/>`,
  search: `<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>`,
  directory: `<path d="M5 5.5A2 2 0 0 1 7 4h4.5v16H7a2 2 0 0 0-2 1.2z"/><path d="M19 5.5A2 2 0 0 0 17 4h-4.5v16H17a2 2 0 0 1 2 1.2z"/><path d="M8 8h2M14 8h2M8 11h2M14 11h2"/>`,
  testimonies: `<path d="M5 5h14a1.6 1.6 0 0 1 1.6 1.6v8A1.6 1.6 0 0 1 19 16.2H10l-4 3.4V16.2H5A1.6 1.6 0 0 1 3.4 14.6V6.6A1.6 1.6 0 0 1 5 5z"/><path d="M8.2 10.4h.01M12 10.4h.01M15.8 10.4h.01"/>`,
};

/* ══════════════════════════════════════════════════════════════════════
   ▼▼▼  ENGINE — normally no need to edit past this line  ▼▼▼
   ══════════════════════════════════════════════════════════════════════ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const store = {
  get: (k, d) => { try { const v = localStorage.getItem("pmcc-" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem("pmcc-" + k, JSON.stringify(v)); } catch {} },
};
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.remove("hidden");
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toast._t); toast._t = setTimeout(() => { t.classList.remove("show"); }, 2000);
}
function svg(paths) { return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`; }

/* ─────────────────────────── Settings state ─────────────────────────── */
const settings = {
  volume:    store.get("volume", 70),
  accent:    store.get("accent", THEMES[0].color),
  iconStyle: store.get("iconStyle", "line"),   // "line" | "solid"
  scheme:    store.get("scheme", "royalgold"), // interface / icon design scheme
  voiceName: store.get("voiceName", ""),       // chosen TTS voice ("" = automatic)
  user:      store.get("user", "guest"),
  scene:     store.get("scene", "clean"),   // clean white corporate background by default
  // ── Brother Thomas / OpenJarvis (local AI) ──────────────────────────
  jarvisEnabled:  store.get("jarvisEnabled", false),
  jarvisEndpoint: store.get("jarvisEndpoint", "http://localhost:8000/v1/chat/completions"),
  jarvisModel:    store.get("jarvisModel", ""),
};
function applyAccent(c) { document.documentElement.style.setProperty("--accent", c); }
function applyIconStyle(s) { $$(".icon-tile").forEach(t => t.classList.toggle("solid", s === "solid")); }
/* Apply an interface scheme — CSS (body[data-scheme]) restyles the tiles and
   icon line-art. When the user explicitly picks one (setAccent=true) it also
   adopts that scheme's signature accent colour. */
function applyScheme(id, setAccent) {
  const scheme = SCHEMES.find(x => x.id === id) || SCHEMES[0];
  settings.scheme = scheme.id; store.set("scheme", scheme.id);
  document.body.dataset.scheme = scheme.id;
  if (setAccent && scheme.accent) { settings.accent = scheme.accent; applyAccent(scheme.accent); }
}
applyScheme(settings.scheme);
applyAccent(settings.accent);

/* ─────────────────────────── Audio engine ───────────────────────────── */
const Sound = {
  ctx: null, muted: store.get("muted", false), buffers: {},
  ensure() {
    if (!this.ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (AC) this.ctx = new AC(); this.loadFiles(); }
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  async loadFiles() {
    for (const [k, url] of Object.entries(SOUND_FILES)) {
      if (!url) continue;
      try { this.buffers[k] = await this.ctx.decodeAudioData(await (await fetch(url)).arrayBuffer()); } catch {}
    }
  },
  gain() { return this.muted ? 0 : (settings.volume / 100); },
  play(kind) {
    if (this.muted) return;
    const ctx = this.ensure(); if (!ctx) return;
    const vol = this.gain();
    if (this.buffers[kind]) { const s = ctx.createBufferSource(); s.buffer = this.buffers[kind]; const g = ctx.createGain(); g.gain.value = vol; s.connect(g).connect(ctx.destination); s.start(); return; }
    const R = {
      tap:  [{ f:880, t:"sine", d:.09, g:.10 }, { f:1320, t:"sine", d:.07, g:.05, at:.02 }],
      open: [{ f:440, t:"sine", d:.30, g:.10, slide:880 }, { f:1760, t:"triangle", d:.18, g:.04, at:.10 }],
      back: [{ f:660, t:"sine", d:.22, g:.09, slide:330 }],
      // elegant bell-like "chime" played on the open transition
      chime: [{ f:784, t:"sine", d:.7, g:.07 }, { f:1175, t:"sine", d:.7, g:.05, at:.07 }, { f:1568, t:"sine", d:.8, g:.035, at:.15 }, { f:2350, t:"sine", d:.6, g:.02, at:.22 }],
      boot: [{ f:220, t:"sine", d:.9, g:.07, slide:660 }, { f:1108, t:"triangle", d:.4, g:.03, at:.35 }, { f:1662, t:"sine", d:.5, g:.03, at:.55 }],
      // soft mechanical click for the on-screen keyboard
      key:  [{ f:1400, t:"square", d:.04, g:.028 }, { f:2600, t:"sine", d:.03, g:.014, at:.005 }],
      // deep, powerful rising sweep for the PMCC logo cyber reveal
      power:[{ f:70,  t:"sawtooth", d:1.5, g:.10, slide:320 },
             { f:180, t:"triangle", d:1.4, g:.06, slide:720, at:.05 },
             { f:90,  t:"sine",     d:1.6, g:.09, slide:440, at:.02 }],
      // bright confirmation "system online" chord that lands on the reveal
      surge:[{ f:523, t:"sine", d:.8, g:.06, at:0 }, { f:784, t:"sine", d:.8, g:.05, at:.06 },
             { f:1046,t:"sine", d:.9, g:.045, at:.12 }, { f:1568,t:"triangle", d:.7, g:.03, at:.20 },
             { f:2093,t:"sine", d:.6, g:.02, at:.30 }],
      // short data-blip used while boot lines type out
      blip: [{ f:1760, t:"square", d:.05, g:.02 }, { f:2637, t:"sine", d:.04, g:.012, at:.01 }],
    };
    (R[kind] || R.tap).forEach(r => {
      const t0 = ctx.currentTime + (r.at || 0);
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = r.t; o.frequency.setValueAtTime(r.f, t0);
      if (r.slide) o.frequency.exponentialRampToValueAtTime(r.slide, t0 + r.d);
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(r.g * vol, t0 + .015);
      g.gain.exponentialRampToValueAtTime(.0001, t0 + r.d);
      o.connect(g).connect(ctx.destination); o.start(t0); o.stop(t0 + r.d + .05);
    });
  },
  toggleMute() { this.muted = !this.muted; store.set("muted", this.muted); updateMuteButton(); if (this.muted && typeof Voice !== "undefined") Voice.stop(); if (!this.muted) this.play("tap"); },
};
function updateMuteButton() {
  $("#btn-mute").classList.toggle("muted", Sound.muted);
  $("#icon-sound-on").classList.toggle("hidden", Sound.muted);
  $("#icon-sound-off").classList.toggle("hidden", !Sound.muted);
}

/* ─────────────────────── Background: rain + scene ────────────────────── */
const Rain = (() => {
  const c = $("#rain-canvas"), x = c.getContext("2d");
  let W, H, drops = [];
  function resize() { W = c.width = innerWidth; H = c.height = innerHeight; seed(); }
  function seed() {
    // gentle floating gold dust (regal), not rain
    const n = Math.round((W * H) / 14000);
    drops = Array.from({ length: n }, () => ({ x: Math.random()*W, y: Math.random()*H, r: .6 + Math.random()*2, v: .3 + Math.random()*.9, drift: (Math.random()-.5)*.4, a: .12 + Math.random()*.5, tw: .5 + Math.random()*2 }));
  }
  let t = 0;
  function frame() {
    t += .016; x.clearRect(0, 0, W, H);
    for (const d of drops) {
      const a = d.a * (.6 + .4 * Math.sin(t * d.tw));
      x.beginPath(); x.arc(d.x, d.y, d.r, 0, Math.PI*2);
      x.fillStyle = `rgba(240,214,140,${a.toFixed(3)})`; x.fill();
      d.y += d.v; d.x += d.drift;
      if (d.y > H + 4) { d.y = -4; d.x = Math.random()*W; }
    }
    requestAnimationFrame(frame);
  }
  addEventListener("resize", resize); resize(); frame();
  return {};
})();

/* ── Ambient motion layer: drifting glowing orbs, soft constellation links,
   and the odd light streak — so the backdrop always feels alive. Renders on
   top of the background photo/scene (but under the UI).                     */
const Ambient = (() => {
  const c = $("#ambient-canvas"); if (!c) return {};
  const x = c.getContext("2d");
  let W, H, orbs = [], streaks = [], t = 0;
  const accent = () => (getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#e8c66a").trim();
  function resize() { W = c.width = innerWidth; H = c.height = innerHeight; seed(); }
  function seed() {
    const n = Math.max(26, Math.round((W * H) / 42000));
    orbs = Array.from({ length: n }, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: 1 + Math.random()*2.6,
      vx: (Math.random()-.5)*.18, vy: -(.12 + Math.random()*.34),
      a: .18 + Math.random()*.5, tw: .4 + Math.random()*1.8,
    }));
    streaks = [];
  }
  function spawnStreak() {
    const fromLeft = Math.random() < .5;
    const y = Math.random()*H*.7;
    streaks.push({ x: fromLeft ? -80 : W+80, y, vx: (fromLeft?1:-1)*(3.5+Math.random()*3), vy: .5+Math.random()*1.1, life: 1 });
  }
  function frame() {
    t += .016; x.clearRect(0, 0, W, H);
    const col = accent();
    // constellation links between nearby orbs
    x.lineWidth = 1;
    for (let i = 0; i < orbs.length; i++) {
      for (let j = i + 1; j < orbs.length; j++) {
        const a = orbs[i], b = orbs[j], dx = a.x-b.x, dy = a.y-b.y, d = Math.hypot(dx, dy);
        if (d < 130) { x.globalAlpha = (1 - d/130) * .10; x.strokeStyle = col; x.beginPath(); x.moveTo(a.x,a.y); x.lineTo(b.x,b.y); x.stroke(); }
      }
    }
    // orbs
    for (const o of orbs) {
      const a = o.a * (.55 + .45*Math.sin(t*o.tw));
      x.globalAlpha = Math.max(0, a);
      x.beginPath(); x.arc(o.x, o.y, o.r, 0, Math.PI*2);
      x.fillStyle = col; x.shadowColor = col; x.shadowBlur = 10; x.fill();
      o.x += o.vx; o.y += o.vy;
      if (o.y < -6) { o.y = H+6; o.x = Math.random()*W; }
      if (o.x < -6) o.x = W+6; else if (o.x > W+6) o.x = -6;
    }
    x.shadowBlur = 0;
    // occasional light streaks
    if (Math.random() < .006 && streaks.length < 3) spawnStreak();
    for (const s of streaks) {
      const grad = x.createLinearGradient(s.x, s.y, s.x - s.vx*14, s.y - s.vy*14);
      grad.addColorStop(0, col); grad.addColorStop(1, "transparent");
      x.globalAlpha = .5 * s.life; x.strokeStyle = grad; x.lineWidth = 2;
      x.beginPath(); x.moveTo(s.x, s.y); x.lineTo(s.x - s.vx*14, s.y - s.vy*14); x.stroke();
      s.x += s.vx; s.y += s.vy; s.life -= .004;
    }
    streaks = streaks.filter(s => s.life > 0 && s.x > -120 && s.x < W+120);
    x.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  addEventListener("resize", resize); resize(); frame();
  return {};
})();

function applyScene(id) {
  settings.scene = id; store.set("scene", id);
  const scene = SCENES.find(s => s.id === id) || SCENES[0];
  const photo = $("#bg-photo"), cssLayers = $$(".bg-sky, .bg-buildings, .bg-bokeh");
  if (scene.type === "photo") {
    photo.style.backgroundImage = `url("${withV(scene.src)}")`;
    // verify the file exists; if not, fall back to the royal CSS scene
    const img = new Image();
    img.onload = () => photo.classList.add("active");
    img.onerror = () => { photo.classList.remove("active"); toast("No photo at " + scene.src + " — using Clean White"); applyScene("clean"); };
    img.src = withV(scene.src);
  } else if (scene.type === "css") {
    photo.style.backgroundImage = scene.css;
    photo.classList.add("active");
  } else {
    photo.classList.remove("active"); photo.style.backgroundImage = "";
  }
  $$(".gallery-tile").forEach(t => t.classList.toggle("active", t.dataset.scene === id));
}

/* ─────────────────────── Orbital dashboard build ────────────────────── */
const SVG_NS = "http://www.w3.org/2000/svg";
// nav = 7 leadership sections + branches (branches has its own special panel)
function navSections() {
  const list = CONTENT.sections.slice();
  // insert branches between elders and history for a balanced ring
  const branchesNav = { id: "branches", label: "BRANCHES", subtitle: "GLOBAL CONGREGATIONS", icon: "branches", isBranches: true };
  const idx = list.findIndex(s => s.id === "history");
  list.splice(idx < 0 ? list.length : idx, 0, branchesNav);
  return list;
}
const NAV = navSections();

/* Organized node network (deg: 0=right, 90=bottom, -90=top, 180=left).
   Evenly spaced ring (≈51.4° apart), symmetric top-to-bottom, with glowing
   connector lines from the logo to each node. */
const ORBIT_ANGLES = {
  apostle:    -90,
  bishops:  -141.4, presbyters: -38.6,
  pastors:   167.2, elders:      12.8,
  branches:  115.8, history:     64.2,
};
// Reveal sweeps from the top, one node (icon + its line) at a time.
const REVEAL_ORDER = { apostle:0, presbyters:1, elders:2, history:3, branches:4, pastors:5, bishops:6 };

function buildOrbit() {
  const nav = $("#orbit-icons"), links = $("#orbit-links");
  nav.innerHTML = ""; links.innerHTML = "";
  NAV.forEach((sec, i) => {
    const g = document.createElementNS(SVG_NS, "g");
    g.innerHTML = `<line class="link-base"></line><line class="link-flow"></line><circle class="link-node" r="3.5"></circle><circle class="link-node-ring" r="8"></circle>`;
    links.appendChild(g);

    const btn = document.createElement("button");
    btn.className = "orbit-icon"; btn.dataset.section = sec.id;
    btn.style.setProperty("--pulse-delay", `${(i * .45).toFixed(2)}s`);
    // node-by-node reveal: each icon glides out in sequence around the ring
    const ro = REVEAL_ORDER[sec.id] ?? i;
    btn.style.transitionDelay = `${ro * 200}ms`;
    btn.innerHTML = `
      <span class="press-ring"></span>
      <span class="icon-float" style="--float-delay:${(i*.7).toFixed(2)}s">
        <span class="icon-tile ${settings.iconStyle === 'solid' ? 'solid' : ''}" style="--shine-delay:${(i*0.9).toFixed(2)}s">
          <span class="tile-shine"></span>
          ${svg(ICONS[sec.icon] || ICONS.history)}
        </span>
        <span class="icon-label">${sec.label}</span>
      </span>`;
    attachIconGestures(btn, sec);
    nav.appendChild(btn);
  });
  layoutOrbit();
}

function layoutOrbit() {
  const stage = $("#orbit-stage");
  const { width: w, height: h } = stage.getBoundingClientRect();
  if (!w || !h) return;
  const icons = $$(".orbit-icon", stage), groups = $$("#orbit-links g", stage);
  const n = icons.length;
  const iconSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--icon-size")) || 160;
  const hubSize  = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hub-size")) || 300;
  // reserve the bottom band for the dock so orbit icons never collide with it
  const bottomReserve = Math.min(h * 0.24, iconSize * 1.35 + 120);
  const cx = w/2;
  // bias the whole constellation downward so the top (Apostle) icon isn't
  // jammed under the title and the empty lower space gets used
  const cy = Math.max(hubSize*0.55 + 20, (h - bottomReserve) / 2 + h*0.055);
  // pull the ring in from the edges (leave room for labels + the assistant orb)
  const rightReserve = iconSize * 1.3 + 40;
  const rx = Math.min(w/2 - iconSize*0.7 - rightReserve, w*0.37);
  // size vertical radius so the top (Apostle) and deepest bottom icons
  // (Branches/History, sin≈0.95) both stay clear of edges and the dock
  const ryTop = cy - iconSize*0.5 - 28;   // extra top margin below the title
  const ryBot = (h - Math.max(200, iconSize*1.2 + 80) - iconSize*0.5 - cy) / 0.96;
  const ry = Math.max(120, Math.min(ryTop, ryBot));
  // move the center hub to match the icon/link center
  const hub = $(".hub"); if (hub) hub.style.top = `${cy}px`;
  $("#orbit-links").setAttribute("viewBox", `0 0 ${w} ${h}`);
  icons.forEach((btn, i) => {
    const aDeg = ORBIT_ANGLES[btn.dataset.section];
    const ang = ((aDeg != null ? aDeg : -90 + i * 360 / n)) * Math.PI / 180;
    const dx = Math.cos(ang)*rx, dy = Math.sin(ang)*ry;
    btn.style.left = `${cx}px`; btn.style.top = `${cy}px`;
    btn.style.setProperty("--tx", `${dx}px`); btn.style.setProperty("--ty", `${dy}px`);
    if (!btn._drag) { btn.style.setProperty("--dx", "0px"); btn.style.setProperty("--dy", "0px"); }
    const g = groups[i]; if (!g) return;
    const len = Math.hypot(dx, dy), ux = dx/len, uy = dy/len;
    const x1 = cx + ux*(hubSize*0.42), y1 = cy + uy*(hubSize*0.42);
    const x2 = cx + ux*(len - iconSize*0.62), y2 = cy + uy*(len - iconSize*0.62);
    g._end = { x2, y2 };
    for (const cls of ["link-base","link-flow"]) { const L = g.querySelector("."+cls); L.setAttribute("x1",x1); L.setAttribute("y1",y1); L.setAttribute("x2",x2); L.setAttribute("y2",y2); }
    const base = g.querySelector(".link-base"); const seg = Math.hypot(x2-x1, y2-y1);
    // each node's connector draws right after ITS icon glides in — one at a time
    const ro = REVEAL_ORDER[btn.dataset.section] ?? i;
    base.style.strokeDasharray = seg; base.style.strokeDashoffset = stage.classList.contains("expanded") ? 0 : seg; base.style.transitionDelay = `${ro*200 + 120}ms`;
    g.querySelector(".link-flow").style.transitionDelay = `${ro*200 + 220}ms`;
    for (const sel of [".link-node",".link-node-ring"]) { const cc = g.querySelector(sel); cc.setAttribute("cx",x2); cc.setAttribute("cy",y2); cc.style.transitionDelay = `${ro*200 + 200}ms`; }
    btn._linkGroup = g; btn._center = { cx, cy };
  });
}
addEventListener("resize", layoutOrbit);

/* update one icon's connector line + node to follow it while dragging */
function updateLinkFor(btn) {
  const g = btn._linkGroup; if (!g || !g._end) return;
  const dx = parseFloat(btn.style.getPropertyValue("--dx")) || 0;
  const dy = parseFloat(btn.style.getPropertyValue("--dy")) || 0;
  const x2 = g._end.x2 + dx, y2 = g._end.y2 + dy;
  for (const sel of [".link-base",".link-flow"]) { const L = g.querySelector(sel); L.setAttribute("x2", x2); L.setAttribute("y2", y2); }
  for (const sel of [".link-node",".link-node-ring"]) { const cc = g.querySelector(sel); cc.setAttribute("cx", x2); cc.setAttribute("cy", y2); }
  const base = g.querySelector(".link-base");
  const x1 = +base.getAttribute("x1"), y1 = +base.getAttribute("y1");
  const seg = Math.hypot(x2 - x1, y2 - y1);
  base.style.strokeDasharray = seg; base.style.strokeDashoffset = 0;
}

/* ───────────────── Expand / collapse the icon network ───────────────── */
let orbitExpanded = false;
function setOrbit(expand) {
  if (expand === orbitExpanded) return;
  orbitExpanded = expand;
  const stage = $("#orbit-stage");
  stage.classList.toggle("expanded", expand);
  const rv = document.getElementById("reveal-stage");   // fade the glow-orbs in with the icons
  if (rv) rv.classList.toggle("revealed", expand);
  Sound.play(expand ? "open" : "back");
  // keep it clean: a short prompt before opening, nothing cluttering once open
  $("#hud-hint").textContent = expand ? "" : "TAP THE LOGO TO BEGIN";
  stage.querySelectorAll("#orbit-links .link-base").forEach(b => { b.style.strokeDashoffset = expand ? 0 : parseFloat(b.style.strokeDasharray || 0); });
}

/* ──────────── Draggable icons + long-press to open ──────────────────────
   Drag a node to reposition it (its connector line follows and the position is
   remembered); a quick tap OR press-and-hold opens the section. */
function attachIconGestures(btn, sec) {
  let startX, startY, baseDX, baseDY, moved, holdTimer, longFired, pid;
  const THRESH = 10, HOLD = 500;

  const down = (e) => {
    if (!orbitExpanded) return;
    pid = e.pointerId; btn.setPointerCapture(pid);
    startX = e.clientX; startY = e.clientY; moved = false; longFired = false;
    baseDX = parseFloat(btn.style.getPropertyValue("--dx")) || 0;
    baseDY = parseFloat(btn.style.getPropertyValue("--dy")) || 0;
    btn.classList.add("pressing");
    Sound.play("tap");
    holdTimer = setTimeout(() => {          // long-press → open
      if (moved) return;
      longFired = true;
      btn.classList.remove("pressing");
      openFor(sec, btn);
    }, HOLD);
  };
  const move = (e) => {
    if (pid === undefined) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (!moved && Math.hypot(dx, dy) > THRESH) { moved = true; clearTimeout(holdTimer); btn.classList.remove("pressing"); btn.classList.add("dragging"); btn._drag = true; }
    if (moved) {
      const zoom = stageZoom();
      btn.style.setProperty("--dx", `${baseDX + dx / zoom}px`);
      btn.style.setProperty("--dy", `${baseDY + dy / zoom}px`);
      updateLinkFor(btn);
    }
  };
  const up = () => {
    if (pid === undefined) return;
    clearTimeout(holdTimer);
    btn.classList.remove("pressing", "dragging");
    try { btn.releasePointerCapture(pid); } catch {}
    if (!moved && !longFired) openFor(sec, btn);   // quick tap = open
    else if (moved) store.set("pos-" + sec.id, { dx: parseFloat(btn.style.getPropertyValue("--dx")), dy: parseFloat(btn.style.getPropertyValue("--dy")) });
    pid = undefined;
  };
  btn.addEventListener("pointerdown", down);
  btn.addEventListener("pointermove", move);
  btn.addEventListener("pointerup", up);
  btn.addEventListener("pointercancel", up);

  // restore any saved drag position (double-tap the empty stage resets zoom;
  // to reset a moved icon, drag it back)
  const saved = store.get("pos-" + sec.id, null);
  if (saved) { btn.style.setProperty("--dx", saved.dx + "px"); btn.style.setProperty("--dy", saved.dy + "px"); btn._drag = true; }
}

function openFor(sec, btn) {
  if (sec.isBranches) return openGlobe(btn);          // interactive globe
  if (sec.id === "history") return openSection(sec, btn);  // timeline panel
  return openIconMenu(sec, btn);                      // name dropdown → profile
}

/* ── Per-icon name dropdown (click a leadership icon → its names) ──────── */
function openIconMenu(sec, btn) {
  const menu = $("#icon-menu");
  const items = (CONTENT.sections.find(s => s.id === sec.id)?.items || []).filter(i => i.confidence !== "placeholder");
  menu.innerHTML =
    `<div class="im-head"><span class="im-ico">${svg(ICONS[sec.icon] || ICONS.apostle)}</span><span class="im-title">${sec.label}</span><span class="im-count">${items.length}</span></div>` +
    `<div class="im-list">` + (items.length ? items.map((it, i) =>
      `<button class="im-row" data-i="${i}">${avatarHTML(it, sec.id)}<span class="im-txt"><span class="im-name">${esc(it.name)}</span><span class="im-sub">${esc(it.position || "")}</span></span><span class="im-chev"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>`
    ).join("") : `<p class="dir-empty">No entries yet — add them in app.js → CONTENT.</p>`) + `</div>`;
  menu.querySelectorAll(".im-row").forEach(r => r.addEventListener("click", () => { const i = +r.dataset.i; closeIconMenu(); setTimeout(() => dirOpenProfile(sec.id, i), 120); }));
  menu.classList.remove("hidden");
  positionIconMenu(menu, btn);
  Sound.play("open");
  requestAnimationFrame(() => menu.classList.add("open"));
}
function positionIconMenu(menu, btn) {
  const m = 16, r = btn.getBoundingClientRect();
  const mw = menu.offsetWidth, mh = menu.offsetHeight;
  let left = Math.max(m, Math.min(r.left + r.width / 2 - mw / 2, innerWidth - mw - m));
  let top, origin;
  if (r.bottom + 12 + mh <= innerHeight - m) { top = r.bottom + 12; origin = "top"; }
  else if (r.top - 12 - mh >= m) { top = r.top - 12 - mh; origin = "bottom"; }
  else { top = Math.max(m, Math.min(r.top, innerHeight - mh - m)); origin = "center"; }
  menu.style.left = left + "px"; menu.style.top = top + "px";
  menu.style.transformOrigin = `${Math.round(r.left + r.width / 2 - left)}px ${origin === "bottom" ? "100%" : origin === "center" ? "50%" : "0"}`;
}
function closeIconMenu() { const m = $("#icon-menu"); if (m.classList.contains("hidden")) return; m.classList.remove("open"); setTimeout(() => m.classList.add("hidden"), 200); }

/* ══════════════════════════════════════════════════════════════════════
   INTERACTIVE GLOBE (Branches)
   Rotating orthographic globe with glowing branch points. Tap a point (or
   search) → its info shows on the left. Drag to spin; auto-rotates idle.
   Add real branch details in COORDS below.
   ══════════════════════════════════════════════════════════════════════ */
const Globe = (() => {
  // approximate [lat, lng] per country in CONTENT.branches
  const COORDS = {
    "Dubai":[25.2,55.3],"Abu Dhabi":[24.45,54.37],"Turkey":[39,35],"Jordan":[31,36],
    "Lebanon":[33.9,35.5],"Israel":[31.5,34.8],"Syria":[35,38],"Qatar":[25.3,51.2],
    "Saudi Arabia":[24,45],"Kuwait":[29.3,47.9],"Yemen":[15.5,48],"Iran":[32,53],
    "China":[35,105],"Japan":[36,138],"Mongolia":[46,105],"North Korea":[40,127],
    "South Korea":[36.5,128],"Taiwan":[23.7,121],"Afghanistan":[33,66],"Bangladesh":[23.7,90],
    "Bhutan":[27.5,90.4],"India":[22,79],"Maldives":[3.2,73],"Nepal":[28,84],
    "Pakistan":[30,70],"Sri Lanka":[7.9,80.8],"USA":[39,-98],"Canada":[56,-106],
    "Australia":[-25,133],"Netherlands":[52.3,5.6],"Philippines":[12.9,121.8],
  };
  // Optional photo for a branch, shown in its detail panel. Keyed by branch name.
  const BRANCH_IMAGES = {
    "Dubai": { src: "assets/aatf-building.jpg", caption: "AATF Miracle Building — PMCC (4th Watch) Dubai" },
  };
  // Real coastline outlines from Natural Earth (assets/world-land.js, simplified
  // to ~8.5k points). Falls back to a tiny built-in set if the file is missing.
  const LAND = (typeof window !== "undefined" && window.WORLD_LAND) ? window.WORLD_LAND : [
    [[72,-125],[60,-164],[49,-124],[18,-96],[25,-80],[45,-66],[60,-66],[70,-100],[72,-125]],
    [[37,10],[10,51],[-34,26],[-18,12],[4,9],[10,-16],[28,-13],[37,10]],
    [[66,32],[73,92],[66,172],[45,135],[24,119],[8,98],[24,66],[47,40],[66,32]],
    [[-12,131],[-25,153],[-38,145],[-31,115],[-16,123],[-12,131]],
  ];
  // per-region accent colours for markers, arcs and the legend
  const REGION_META = {
    "Middle East":        "#f0cf7a",
    "Asia":               "#7fd0ff",
    "South Asia":         "#b98cff",
    "Americas & Oceania": "#6fe0a8",
    "Europe":             "#ff9db1",
    "Home Country":       "#ffe08a",
  };
  const regionColor = (r) => REGION_META[r] || "#f0cf7a";
  let canvas, ctx, raf = 0, W = 0, H = 0, R = 0, baseR = 0, cx = 0, cy = 0, dpr = 1;
  let yaw = 0, pitch = 0.28, auto = true, dragging = false, lastX = 0, lastY = 0, moved = 0, t = 0;
  let points = [], screen = [], selected = -1, targetYaw = null, targetPitch = null, resumeTimer = 0, inited = false;
  let stars = [], hqIndex = -1, zoomG = 1;
  const setZoom = (z) => { zoomG = Math.max(1, Math.min(5, z)); R = baseR * zoomG; };

  function buildPoints() {
    points = [];
    (CONTENT.branches || []).forEach(r => r.countries.forEach(c => {
      const k = COORDS[c]; if (k) points.push({ name: c, region: r.region, lat: k[0], lng: k[1], color: regionColor(r.region), hq: c === "Philippines" });
    }));
    hqIndex = points.findIndex(p => p.hq);
  }
  function seedStars() {
    const n = Math.round((W * H) / 9000);
    stars = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + 0.3, a: Math.random() * 0.55 + 0.15, tw: Math.random() * 2 + 0.5, ph: Math.random() * 6 }));
  }
  function project(latDeg, lngDeg) {
    const f = latDeg * Math.PI / 180, l = lngDeg * Math.PI / 180 + yaw;
    const x0 = Math.cos(f) * Math.sin(l), y0 = Math.sin(f), z0 = Math.cos(f) * Math.cos(l);
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    return { x: cx + x0 * R, y: cy - (y0 * cp - z0 * sp) * R, z: y0 * sp + z0 * cp };
  }
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = rect.width; H = rect.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    baseR = Math.min(W, H) * 0.4; R = baseR * zoomG; cx = W / 2; cy = H / 2;
    seedStars();
  }
  function meridian(lng) { ctx.beginPath(); let on = false; for (let la = -90; la <= 90; la += 4) { const s = project(la, lng); if (s.z > 0) { on ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); on = true; } else on = false; } ctx.stroke(); }
  function parallel(lat) { ctx.beginPath(); let on = false; for (let ln = -180; ln <= 180; ln += 4) { const s = project(lat, ln); if (s.z > 0) { on ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); on = true; } else on = false; } ctx.stroke(); }
  // trace a land polygon. Back-facing vertices are pinned to the horizon rim,
  // and a run of hidden vertices FOLLOWS THE RIM ARC (instead of cutting a chord
  // across the disc) so continents crossing the limb never draw stray wedges.
  function landPath(poly) {
    ctx.beginPath();
    let started = false, prevClamped = false, prevAng = 0;
    for (let k = 0; k < poly.length; k++) {
      const s = project(poly[k][0], poly[k][1]);
      let x = s.x, y = s.y, clamped = false, ang = Math.atan2(y - cy, x - cx);
      if (s.z < 0) { x = cx + Math.cos(ang) * R; y = cy + Math.sin(ang) * R; clamped = true; }
      if (!started) { ctx.moveTo(x, y); started = true; }
      else if (clamped && prevClamped) {                 // both hidden → hug the rim
        let da = ang - prevAng; while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
        const steps = Math.max(1, Math.round(Math.abs(da) / 0.14));
        for (let j = 1; j <= steps; j++) { const a = prevAng + da * j / steps; ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R); }
      } else ctx.lineTo(x, y);
      prevClamped = clamped; prevAng = ang;
    }
    ctx.closePath();
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    // starfield behind the globe
    for (const st of stars) {
      const a = st.a * (0.55 + 0.45 * Math.sin(t * st.tw + st.ph));
      ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, 7); ctx.fillStyle = `rgba(210,225,255,${a.toFixed(3)})`; ctx.fill();
    }
    // outer atmosphere halo
    let g = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.34);
    g.addColorStop(0, "rgba(120,180,255,0)"); g.addColorStop(0.52, "rgba(96,150,240,0.20)"); g.addColorStop(1, "rgba(120,180,255,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 1.34, 0, 7); ctx.fill();
    // ocean sphere (lit from upper-left)
    const sg = ctx.createRadialGradient(cx - R * 0.34, cy - R * 0.34, R * 0.08, cx, cy, R * 1.05);
    sg.addColorStop(0, "#3a78e0"); sg.addColorStop(0.5, "#12437f"); sg.addColorStop(0.82, "#0a2350"); sg.addColorStop(1, "#061534");
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fillStyle = sg; ctx.fill();
    // continents + graticule + arcs (clipped to the globe disc)
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.clip();
    const lg = ctx.createRadialGradient(cx - R * 0.34, cy - R * 0.34, R * 0.08, cx, cy, R);
    lg.addColorStop(0, "#54b972"); lg.addColorStop(0.6, "#2f8850"); lg.addColorStop(1, "#1c5c39");
    ctx.fillStyle = lg; ctx.strokeStyle = "rgba(190,230,200,0.4)"; ctx.lineWidth = 1;
    LAND.forEach(poly => { landPath(poly); ctx.fill(); ctx.stroke(); });
    // faint graticule
    ctx.lineWidth = 1; ctx.strokeStyle = "rgba(210,230,255,0.10)";
    for (let ln = -180; ln < 180; ln += 30) meridian(ln);
    for (let la = -60; la <= 60; la += 30) parallel(la);
    // glowing connection arcs from the home base (Manila) to each visible branch
    const hq = hqIndex >= 0 ? points[hqIndex] : null;
    const hs = hq ? project(hq.lat, hq.lng) : null;
    if (hs && hs.z > 0.02) {
      points.forEach((p, i) => {
        if (i === hqIndex) return;
        const s = project(p.lat, p.lng); if (s.z <= 0.02) return;
        const mx = (hs.x + s.x) / 2, my = (hs.y + s.y) / 2;
        const dxv = mx - cx, dyv = my - cy, dl = Math.hypot(dxv, dyv) || 1;
        const lift = Math.hypot(s.x - hs.x, s.y - hs.y) * 0.22;
        const ex = mx + dxv / dl * lift, ey = my + dyv / dl * lift;
        ctx.beginPath(); ctx.moveTo(hs.x, hs.y); ctx.quadraticCurveTo(ex, ey, s.x, s.y);
        ctx.lineWidth = 1; ctx.strokeStyle = "rgba(240,214,140,0.26)"; ctx.stroke();
        // a light pulse travelling along the arc
        const u = ((t * 0.35 + i * 0.11) % 1);
        const bx = (1 - u) * (1 - u) * hs.x + 2 * (1 - u) * u * ex + u * u * s.x;
        const by = (1 - u) * (1 - u) * hs.y + 2 * (1 - u) * u * ey + u * u * s.y;
        ctx.beginPath(); ctx.arc(bx, by, 1.6, 0, 7); ctx.fillStyle = "rgba(255,240,200,0.85)"; ctx.fill();
      });
    }
    // day/night shading
    const tg = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.2, cx + R * 0.15, cy + R * 0.15, R * 1.15);
    tg.addColorStop(0, "rgba(0,0,0,0)"); tg.addColorStop(0.7, "rgba(0,0,0,0.12)"); tg.addColorStop(1, "rgba(2,6,20,0.55)");
    ctx.fillStyle = tg; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
    ctx.restore();
    // specular highlight (glass sheen)
    const hl = ctx.createRadialGradient(cx - R * 0.4, cy - R * 0.45, 0, cx - R * 0.4, cy - R * 0.45, R * 0.7);
    hl.addColorStop(0, "rgba(255,255,255,0.16)"); hl.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = hl; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill();
    // crisp rim
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.lineWidth = 1.5; ctx.strokeStyle = "rgba(150,190,255,0.55)"; ctx.stroke();
    // markers (coloured by region; the home base is larger with a ring)
    screen = [];
    const sc = R / 300;
    points.forEach((p, i) => {
      const s = project(p.lat, p.lng); if (s.z <= 0.02) return;
      screen.push({ i, x: s.x, y: s.y });
      const depth = 0.55 + 0.45 * s.z, pulse = 0.5 + 0.5 * Math.sin(t * 2 + i);
      const base = p.hq ? 6 : 4, pr = (i === selected ? base + 2 : base) * depth * sc;
      ctx.beginPath(); ctx.arc(s.x, s.y, pr * 3.2, 0, 7); ctx.fillStyle = hexA(p.color, (0.10 + 0.12 * pulse) * depth); ctx.fill();
      ctx.beginPath(); ctx.arc(s.x, s.y, pr, 0, 7); ctx.fillStyle = i === selected ? "#fff2c8" : p.color; ctx.fill();
      if (p.hq) { ctx.beginPath(); ctx.arc(s.x, s.y, pr * 2, 0, 7); ctx.strokeStyle = hexA(p.color, 0.8); ctx.lineWidth = 1.4; ctx.stroke(); }
      if (i === selected || p.hq) {
        ctx.beginPath(); ctx.arc(s.x, s.y, pr * 2.4, 0, 7); ctx.strokeStyle = "rgba(255,240,200,0.9)"; ctx.lineWidth = 2; ctx.stroke();
        ctx.font = `600 ${Math.round(13 * sc)}px "Segoe UI",Arial`; ctx.textAlign = "center";
        const label = p.hq ? p.name + " · HQ" : p.name;
        ctx.lineWidth = 3; ctx.strokeStyle = "rgba(3,8,20,0.85)"; ctx.strokeText(label, s.x, s.y - pr * 2.4 - 8);
        ctx.fillStyle = "#fff8ea"; ctx.fillText(label, s.x, s.y - pr * 2.4 - 8);
      }
    });
  }
  // hex colour → rgba string with alpha
  function hexA(hex, a) {
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${a.toFixed(3)})`;
  }
  function frame() {
    t += 0.016;
    if (targetYaw != null) { yaw += (targetYaw - yaw) * 0.09; if (Math.abs(targetYaw - yaw) < 0.002) { yaw = targetYaw; targetYaw = null; } }
    else if (auto && !dragging) yaw += 0.0022;
    if (targetPitch != null) { pitch += (targetPitch - pitch) * 0.09; if (Math.abs(targetPitch - pitch) < 0.002) { pitch = targetPitch; targetPitch = null; } }
    draw(); raf = requestAnimationFrame(frame);
  }
  function hit(mx, my) { let b = -1, bd = 1e9; screen.forEach(s => { const d = Math.hypot(s.x - mx, s.y - my); if (d < bd) { bd = d; b = s.i; } }); return bd <= 24 ? b : -1; }
  function flyTo(i) { const p = points[i]; targetYaw = -p.lng * Math.PI / 180; targetPitch = Math.max(-0.6, Math.min(0.6, p.lat * Math.PI / 180)); }
  function pause() { auto = false; clearTimeout(resumeTimer); resumeTimer = setTimeout(() => auto = true, 5000); }
  function select(i) { selected = i; renderInfo(); if (i >= 0) Sound.play("tap"); }
  function selectRegion(region) {
    const i = points.findIndex(p => p.region === region);
    if (i >= 0) { select(i); flyTo(i); pause(); }
  }
  function renderInfo() {
    const box = $("#globe-info");
    if (selected < 0) {
      const regions = (CONTENT.branches || []);
      const totalCountries = regions.reduce((n, r) => n + r.countries.length, 0);
      const legend = regions.map(r => `
        <button class="gi-region-row" data-region="${esc(r.region)}">
          <span class="gi-dot" style="background:${regionColor(r.region)}"></span>
          <span class="gi-rr-name">${esc(r.region)}</span>
          <span class="gi-rr-count">${r.countries.length}</span>
          <span class="gi-rr-list">${r.countries.slice(0, 6).map(esc).join(" · ")}${r.countries.length > 6 ? " …" : ""}</span>
        </button>`).join("");
      box.innerHTML =
        `<div class="gi-head"><div class="gi-kicker">GLOBAL CONGREGATIONS</div><h3 class="gi-title">PMCC 4th Watch worldwide</h3></div>` +
        `<div class="gi-stats"><div class="gi-stat"><b>${totalCountries}</b><span>Countries</span></div><div class="gi-stat"><b>${regions.length}</b><span>Regions</span></div></div>` +
        `<div class="gi-legend">${legend}</div>` +
        `<p class="gi-note">Tap a region to fly there, tap a glowing point to open a branch, drag to spin, or pinch/scroll to zoom.</p>`;
      box.querySelectorAll(".gi-region-row").forEach(b => b.addEventListener("click", () => { Sound.play("tap"); selectRegion(b.dataset.region); }));
      return;
    }
    const p = points[selected];
    const col = p.color;
    const photo = BRANCH_IMAGES[p.name];
    box.innerHTML =
      `<button class="gi-back" id="gi-back">‹ All regions</button>` +
      (photo ? `<figure class="gi-photo"><img src="${withV(photo.src)}" alt="${esc(photo.caption || p.name)}" onerror="this.closest('.gi-photo').remove()"><figcaption>${esc(photo.caption || "")}</figcaption></figure>` : "") +
      `<div class="gi-badge" style="border-color:${col};color:${col}"><span class="gi-dot" style="background:${col}"></span>${esc(p.region)}${p.hq ? " · Headquarters" : ""}</div>` +
      `<div class="gi-name">${esc(p.name)}</div><div class="gi-divider"></div>` +
      `<dl class="gi-field"><dt>Congregation</dt><dd>PMCC (4th Watch) ${esc(p.name)}</dd></dl>` +
      `<dl class="gi-field"><dt>District</dt><dd>${esc(p.region)}</dd></dl>` +
      `<dl class="gi-field"><dt>Coordinates</dt><dd>${p.lat.toFixed(1)}°, ${p.lng.toFixed(1)}°</dd></dl>` +
      `<dl class="gi-field"><dt>Services</dt><dd>Sunday worship · midweek fellowship</dd></dl>` +
      `<dl class="gi-field"><dt>Contact</dt><dd>${esc(p.region.toLowerCase().replace(/[^a-z]/g, "") || "info")}@pmcc4thwatch.org</dd></dl>` +
      `<p class="gi-note">Add this branch's exact address, service times and contact in <code>app.js → Globe → COORDS</code>.</p>`;
    const back = $("#gi-back"); if (back) back.addEventListener("click", () => { Sound.play("back"); select(-1); });
  }
  function doSearch(q) {
    q = (q || "").trim().toLowerCase(); if (!q) return;
    const i = points.findIndex(p => p.name.toLowerCase().includes(q) || p.region.toLowerCase().includes(q));
    if (i >= 0) { select(i); flyTo(i); pause(); } else toast(`No branch matches “${q}”`);
  }
  function init() {
    if (inited) return; inited = true;
    canvas = $("#globe-canvas"); ctx = canvas.getContext("2d"); buildPoints();
    const gp = new Map(); let pd0 = 0, pz0 = 1, lastTap = 0;
    canvas.addEventListener("pointerdown", e => {
      gp.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try { canvas.setPointerCapture(e.pointerId); } catch {}
      if (gp.size === 2) { const [a, b] = [...gp.values()]; pd0 = Math.hypot(a.x - b.x, a.y - b.y); pz0 = zoomG; dragging = false; }
      else { dragging = true; auto = false; moved = 0; lastX = e.clientX; lastY = e.clientY;
        const now = performance.now(); if (now - lastTap < 320) { setZoom(1); Sound.play("tap"); } lastTap = now; }
    });
    canvas.addEventListener("pointermove", e => {
      if (gp.has(e.pointerId)) gp.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (gp.size >= 2 && pd0 > 0) { const [a, b] = [...gp.values()]; setZoom(pz0 * (Math.hypot(a.x - b.x, a.y - b.y) / pd0)); moved += 20; return; }
      if (!dragging) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY; lastX = e.clientX; lastY = e.clientY;
      moved += Math.abs(dx) + Math.abs(dy);
      yaw += dx * 0.006 / zoomG; pitch = Math.max(-1.2, Math.min(1.2, pitch + dy * 0.006 / zoomG)); targetYaw = targetPitch = null;
    });
    const glift = e => {
      gp.delete(e.pointerId); try { canvas.releasePointerCapture(e.pointerId); } catch {}
      if (gp.size < 2) pd0 = 0;
      if (gp.size === 0) { const wasDragging = dragging; dragging = false;
        const r = canvas.getBoundingClientRect();
        if (wasDragging && moved < 7) { const i = hit(e.clientX - r.left, e.clientY - r.top); if (i >= 0) { select(i); flyTo(i); } }
        pause();
      }
    };
    canvas.addEventListener("pointerup", glift);
    canvas.addEventListener("pointercancel", glift);
    canvas.addEventListener("wheel", e => { e.preventDefault(); setZoom(zoomG * (e.deltaY < 0 ? 1.12 : 0.89)); auto = false; pause(); }, { passive: false });
    $("#globe-search-form").addEventListener("submit", e => { e.preventDefault(); doSearch($("#globe-search").value); });
    addEventListener("resize", () => { if (!$("#globe").classList.contains("hidden")) resize(); });
  }
  function start() { init(); selected = -1; zoomG = 1; auto = true; renderInfo(); resize(); if (!raf) frame(); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
  return { start, stop };
})();
function openGlobe() { Sound.play("open"); const el = $("#globe"); el.classList.remove("hidden"); requestAnimationFrame(() => el.classList.add("open")); Globe.start(); }

/* ─────────────────────────── Section panel ──────────────────────────── */
let activeSection = null, activeIcon = null, activeOverlay = null;

function openSection(sec, iconBtn) {
  if (activeOverlay) return;
  activeSection = sec; activeIcon = iconBtn; activeOverlay = "panel";
  runCyberFX(); Sound.play("open");
  if (iconBtn) iconBtn.classList.add("launching");
  $("#dashboard").classList.add("defocus");
  $("#panel-title").textContent = sec.label;
  $("#panel-subtitle").textContent = sec.subtitle;
  $("#panel-glyph").innerHTML = svg(ICONS[sec.icon] || ICONS.history);
  renderItem(sec, 0);
  buildChips(sec);
  panelStretch.reset();
  const panel = $("#panel"); panel.classList.remove("hidden", "closing");
  setTimeout(() => panel.classList.add("open"), 190);   // let the cyber FX lead
}
function renderItem(sec, index) {
  const item = sec.items[index];
  for (const id of ["#detail-name","#detail-position","#detail-description","#panel-glyph"]) { const el = $(id); el.style.animation = "none"; void el.offsetWidth; el.style.animation = ""; }
  // show the photo(s) when available (falls back to the icon glyph).
  // `item.images` (array) renders a gallery; `item.image` is a single photo.
  const frame = $("#panel .media-frame");
  const imgs = item.images && item.images.length ? item.images.slice()
             : (item.image ? [item.image] : []);
  let img = frame.querySelector(".media-photo");
  if (imgs.length) {
    if (!img) { img = document.createElement("img"); img.className = "media-photo"; img.alt = ""; img.onerror = () => img.remove(); frame.insertBefore(img, frame.firstChild); }
    img.src = withV(imgs[0]);
    img.alt = item.name || "";
    frame.classList.add("has-photo");
    frame.onclick = () => Lightbox.open(imgs, 0, item.name);
  } else {
    if (img) img.remove();
    frame.classList.remove("has-photo");
    frame.onclick = null;
  }
  buildThumbs(imgs, item.name);
  $("#panel-caption").textContent = item.position || sec.label;
  $("#detail-name").textContent = item.name;
  $("#detail-position").textContent = item.position || "";
  $("#detail-description").textContent = item.description || "";
  const extra = $("#detail-extra"); extra.innerHTML = "";
  for (const [k, v] of Object.entries(item.extra || {})) { const d = document.createElement("div"); d.innerHTML = `<dt>${k.toUpperCase()}</dt><dd>${v}</dd>`; extra.appendChild(d); }
  $$(".list-chip").forEach((c, i) => c.classList.toggle("active", i === index));
}
function buildChips(sec) {
  const list = $("#panel-list"); list.innerHTML = "";
  if (sec.items.length < 2) return;
  sec.items.forEach((item, i) => {
    const chip = document.createElement("button");
    chip.className = "list-chip" + (i === 0 ? " active" : "");
    chip.innerHTML = `<span class="chip-glyph">${svg(ICONS[sec.icon] || ICONS.history)}</span><span>${item.name}</span>`;
    chip.addEventListener("click", () => { Sound.play("tap"); renderItem(sec, i); });
    list.appendChild(chip);
  });
}

/* Thumbnail strip under the media frame (only for multi-image items, e.g.
   the History timeline). Tapping a thumbnail swaps the hero and lets you
   open the full-screen zoomable preview. */
function buildThumbs(imgs, label) {
  const strip = $("#panel-thumbs");
  if (!strip) return;
  strip.innerHTML = "";
  if (!imgs || imgs.length < 2) { strip.classList.add("hidden"); return; }
  strip.classList.remove("hidden");
  const frame = $("#panel .media-frame");
  imgs.forEach((src, i) => {
    const t = document.createElement("button");
    t.className = "pm-thumb" + (i === 0 ? " active" : "");
    t.style.backgroundImage = `url("${withV(src)}")`;
    t.setAttribute("aria-label", `View image ${i + 1} of ${imgs.length}`);
    t.addEventListener("click", () => {
      Sound.play("tap");
      const hero = frame.querySelector(".media-photo");
      if (hero) hero.src = withV(src);
      frame.onclick = () => Lightbox.open(imgs, i, label);
      strip.querySelectorAll(".pm-thumb").forEach((el, j) => el.classList.toggle("active", j === i));
    });
    strip.appendChild(t);
  });
}

/* ─────────────────────────── Branches panel ─────────────────────────── */
function openBranches(iconBtn) {
  if (activeOverlay) return;
  activeOverlay = "branches"; activeIcon = iconBtn;
  runCyberFX(); Sound.play("open");
  if (iconBtn) iconBtn.classList.add("launching");
  $("#dashboard").classList.add("defocus");
  const grid = $("#regions-grid"); grid.innerHTML = "";
  CONTENT.branches.forEach((r, i) => {
    const card = document.createElement("div");
    card.className = "region-card"; card.style.animationDelay = `${i * 70}ms`;
    const chips = r.countries.map(c => `<button class="country-chip">${c}</button>`).join("");
    card.innerHTML = `<h3><span class="dot"></span>${r.region}</h3><div class="country-list">${chips}</div>`;
    grid.appendChild(card);
  });
  $$("#regions-grid .country-chip").forEach(chip => chip.addEventListener("click", () => { Sound.play("tap"); toast(chip.textContent + " — branch details coming soon"); }));
  const panel = $("#branches-panel"); panel.classList.remove("hidden", "closing");
  setTimeout(() => panel.classList.add("open"), 190);   // let the cyber FX lead
}

/* ─────────────── Generic overlay close (panel / branches) ────────────── */
function closeOverlay() {
  if (!activeOverlay) return;
  Sound.play("back");
  const panel = activeOverlay === "branches" ? $("#branches-panel") : $("#panel");
  panel.classList.add("closing"); panel.classList.remove("open");
  $("#dashboard").classList.remove("defocus");
  if (activeIcon) activeIcon.classList.remove("launching");
  setTimeout(() => { panel.classList.add("hidden"); panel.classList.remove("closing"); }, 400);
  activeSection = null; activeIcon = null; activeOverlay = null;
}

/* ─────────────────────── Bottom icon DOCK (menu) ────────────────────── */
const MENU = [
  { id: "home",     label: "HOME",     sub: "Return to dashboard", icon: "home" },
  { id: "directory",label: "DIRECTORY",sub: "Bishops · Pastors · Elders · Testimonies", icon: "directory" },
  { id: "settings", label: "SETTINGS", sub: "Theme · sound · colors · icons", icon: "settings" },
  { id: "browser",  label: "BROWSER",  sub: "Open the web", icon: "browser" },
  { id: "search",   label: "SEARCH",   sub: "Find anything", icon: "search" },
  // Brother Thomas is reachable from his floating widget (right edge); the
  // Theme chooser now lives inside Settings — so neither needs a dock button.
];
function buildDock() {
  const dock = $("#dock"); dock.innerHTML = "";
  MENU.forEach(m => {
    const b = document.createElement("button");
    b.className = "dock-btn"; b.dataset.id = m.id; b.title = m.sub;
    b.innerHTML = `<span class="db-icon">${svg(ICONS[m.icon])}</span><span class="db-label">${m.label}</span>`;
    b.addEventListener("click", () => onMenu(m.id, b));
    if (m.id === "directory") dirDockBtn = b;
    dock.appendChild(b);
  });
  // mute toggle lives in the dock too
  const mute = document.createElement("button");
  mute.className = "dock-btn"; mute.id = "btn-mute"; mute.title = "Mute / unmute";
  mute.innerHTML =
    `<span class="db-icon">
       <svg id="icon-sound-on" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="#eaf7ff" stroke="none"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="#eaf7ff" stroke-width="1.8" stroke-linecap="round"/></svg>
       <svg id="icon-sound-off" viewBox="0 0 24 24" class="hidden"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="#eaf7ff" stroke="none"/><path d="M16 9l6 6M22 9l-6 6" fill="none" stroke="#eaf7ff" stroke-width="1.8" stroke-linecap="round"/></svg>
     </span><span class="db-label">SOUND</span>`;
  mute.addEventListener("click", () => { Sound.ensure(); Sound.toggleMute(); });
  dock.appendChild(mute);
  updateMuteButton();
}
function onMenu(id, anchor) {
  Sound.play("tap");
  if (id === "home")     { closeOverlay(); closeAllFeatures(); closeSearch(); closeDirDropdown(); closeProfile(); if (orbitExpanded) RevealVideo.collapse(); else setOrbit(false); }
  else if (id === "directory") toggleDirDropdown(anchor);
  else if (id === "settings") requestSettings();
  else if (id === "jarvis")   openFeature("jarvis");
  else if (id === "browser")  openFeature("browser");
  else if (id === "search")   openSearch();
}

/* ───────────────────── Cyber-style open transition ──────────────────── */
function runCyberFX() {
  const fx = $("#cyber-fx");
  fx.classList.remove("run"); void fx.offsetWidth;   // restart the animation
  fx.classList.add("run");
  Sound.play("chime");
  setTimeout(() => fx.classList.remove("run"), 900);
}

/* ─────────────────────── Feature overlays (generic) ─────────────────── */
function openFeature(id) {
  Sound.play("open");
  const el = $("#" + id); el.classList.remove("hidden");
  requestAnimationFrame(() => el.classList.add("open"));
  if (id === "jarvis") {
    JarvisWave.start();                                                     // hi-tech voice waveform
    Voice.enabled = true; store.set("voiceOn", true); updateVoiceButton();  // opening = voice active
    if (Voice.supported) { try { speechSynthesis.resume(); } catch {} Voice.pick(); }
    // Open straight into the immersive waveform-only Voice Mode (no chat text);
    // if speech isn't supported, fall back to the typed-chat layout.
    if (Listen.supported) enterVoiceMode(); else { exitVoiceMode(); updateMicButton(); }
    if (!$("#jarvis-log").childElementCount) jarvisGreet(); else Voice.speak("Peace be with you. Brother Thomas here — how may I help?");
  }
  if (id === "browser") { /* lazy-load on open */ browserGo($("#browser-url").value); }
}
function closeFeature(el) { el.classList.remove("open"); setTimeout(() => el.classList.add("hidden"), 400); if (el.id === "browser") $("#browser-frame").src = "about:blank"; if (el.id === "globe") Globe.stop(); if (el.id === "jarvis") { Voice.stop(); JarvisWave.stop(); JarvisWave.setListening(false); const sh = el.querySelector(".jarvis-shell"); if (sh) sh.classList.remove("voice-mode"); } }
function closeAllFeatures() { $$(".feature-overlay").forEach(el => { if (!el.classList.contains("hidden")) closeFeature(el); }); }

/* ══════════════════════════════════════════════════════════════════════
   DIRECTORY FLOW
   MainIcon (dock) → CategoryDropdown → NameList → ProfileModal → Accordion
   A clean, self-contained browse experience. Categories are the four
   requested: Bishops · Pastors · Elders · Testimonies.
   ══════════════════════════════════════════════════════════════════════ */
let dirDockBtn = null;                 // the DIRECTORY dock button (anchor)
const DIR_CATEGORIES = [
  { id: "bishops",     label: "Bishops",     icon: "bishops" },
  { id: "presbyters",  label: "Presbyters",  icon: "presbyters" },
  { id: "pastors",     label: "Pastors",     icon: "pastors" },
  { id: "elders",      label: "Elders",      icon: "elders" },
  { id: "testimonies", label: "Testimonies", icon: "testimonies" },
];
// small line-icons for the profile accordion sections
const DIR_ICONS = {
  about:      `<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.6v.01"/>`,
  role:       `<rect x="3.5" y="7.5" width="17" height="12" rx="2"/><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.5 12.5h17"/>`,
  assignment: `<path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10z"/><circle cx="12" cy="11" r="2.2"/>`,
  messages:   `<path d="M6 4h9a3 3 0 0 1 3 3v13H8a2 2 0 0 1-2-2z"/><path d="M9 8.5h6M9 12h6M9 15.5h4"/>`,
  gallery:    ICONS.gallery,
  contact:    `<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4.2 7l7.8 6 7.8-6"/>`,
  activities: `<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.8 15.5l4.4-4 3.3 3 3.7-4.6 4.8 5.6"/><circle cx="8.6" cy="9" r="1.5"/>`,
};

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// people for a category (excludes editable placeholders); testimonies pass through
function dirItems(catId) {
  if (catId === "testimonies") return CONTENT.testimonies || [];
  const sec = CONTENT.sections.find(s => s.id === catId);
  return sec ? sec.items.filter(i => i.confidence !== "placeholder") : [];
}
// avatar: person photo when present (fails over to the category glyph).
// The glyph is hidden by CSS while the photo is present (`.ava img ~ svg`),
// and reappears automatically if the photo file is missing.
function avatarHTML(person, glyphKey) {
  const glyph = svg(ICONS[glyphKey] || ICONS.apostle);
  return person && person.image
    ? `<span class="ava"><img src="${withV(person.image)}" alt="" onerror="this.remove()">${glyph}</span>`
    : `<span class="ava">${glyph}</span>`;
}

/* ── CategoryDropdown ────────────────────────────────────────────────── */
function buildDirDropdown() {
  const dd = $("#dir-dropdown"); dd.innerHTML = "";
  DIR_CATEGORIES.forEach(c => {
    const n = dirItems(c.id).length;
    const b = document.createElement("button");
    b.className = "dir-drop-item"; b.setAttribute("role", "menuitem");
    b.innerHTML = `<span class="ddi-icon">${svg(ICONS[c.icon])}</span><span class="ddi-label">${c.label}</span><span class="ddi-count">${n}</span>`;
    b.addEventListener("click", () => { closeDirDropdown(); dirShowCategory(c.id); });
    dd.appendChild(b);
  });
}
function openDirDropdown(anchor) {
  const dd = $("#dir-dropdown"); buildDirDropdown();
  dd.classList.remove("hidden");
  const r = (anchor || dirDockBtn).getBoundingClientRect();
  dd.style.left = Math.round(r.left + r.width / 2) + "px";
  Sound.play("open");
  requestAnimationFrame(() => {
    dd.style.top = Math.round(r.top - dd.offsetHeight - 14) + "px";
    dd.classList.add("open");
  });
}
function closeDirDropdown() { const dd = $("#dir-dropdown"); if (dd.classList.contains("hidden")) return; dd.classList.remove("open"); setTimeout(() => dd.classList.add("hidden"), 200); }
function toggleDirDropdown(anchor) { const dd = $("#dir-dropdown"); dd.classList.contains("hidden") ? openDirDropdown(anchor) : closeDirDropdown(); }

/* ── NameList (in the directory overlay) ─────────────────────────────── */
function dirShowCategory(catId) {
  const cat = DIR_CATEGORIES.find(c => c.id === catId); if (!cat) return;
  const items = dirItems(catId);
  $("#dir-title").textContent = cat.label.toUpperCase();
  $("#dir-sub").textContent = items.length
    ? (catId === "testimonies" ? `${items.length} testimonies · tap to read` : `${items.length} ${cat.label.toLowerCase()} · tap a name`)
    : "No entries yet";
  const list = $("#dir-list"); list.innerHTML = "";
  if (!items.length) { list.innerHTML = `<p class="dir-empty">No entries yet — add them in <code>app.js → CONTENT</code>.</p>`; }
  items.forEach((it, i) => {
    const sub = catId === "testimonies" ? [it.role, it.date].filter(Boolean).join(" · ") : (it.position || "");
    const row = document.createElement("button");
    row.className = "dir-row"; row.style.animationDelay = `${i * 40}ms`;
    row.innerHTML = `${avatarHTML(it, catId === "testimonies" ? "testimonies" : catId)}` +
      `<span class="dir-row-txt"><span class="dir-row-name">${esc(it.name)}</span><span class="dir-row-sub">${esc(sub)}</span></span>` +
      `<span class="dir-row-chev"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
    row.addEventListener("click", () => { Sound.play("tap"); dirOpenProfile(catId, i); });
    list.appendChild(row);
  });
  openFeature("directory");
}
function dirBack() { Sound.play("back"); closeFeature($("#directory")); setTimeout(() => openDirDropdown(dirDockBtn), 240); }

/* ── ProfileModal + ProfileAccordion ────────────────────────────────── */
function personSections(p, catId) {
  if (catId === "testimonies") {
    return [{ title: "The Testimony", icon: DIR_ICONS.about, html: `<p class="pm-quote">${esc(p.text)}</p>` }];
  }
  const noun = catId === "bishops" ? "Bishop" : catId === "presbyters" ? "Presbyter" : catId === "pastors" ? "Pastor" : catId === "elders" ? "Elder" : "Leader";
  const assignment = p.assignment || (p.extra ? Object.entries(p.extra).map(([k, v]) => `${k}: ${v}`).join(" · ") : "") || "—";
  const messages = (p.messages && p.messages.length) ? p.messages : ["Living in the Fourth Watch", "Faith for the Nations", "The House That Christ Builds"];
  const gallery = (p.gallery && p.gallery.length)
    ? p.gallery.map(g => `<div class="pm-gtile" style="background-image:url('${withV(g)}')"></div>`).join("")
    : Array.from({ length: 4 }, () => `<div class="pm-gtile placeholder">${svg(ICONS.gallery)}</div>`).join("");
  // Tabs: "About" is shown first; the rest switch in on tap. (No gallery/contact
  // sections — the person's photo gallery now lives under "Activities".)
  return [
    { title: "About", icon: DIR_ICONS.about, html: `<p>${esc(p.about || p.description || "—")}</p>` },
    { title: "Ministry Role", icon: DIR_ICONS.role, html: `<p>${esc(p.ministryRole || `Serves as a ${noun.toLowerCase()} in the PMCC (4th Watch), providing spiritual leadership, pastoral care, and ministry development within the church.`)}</p>` },
    { title: "Church Assignment", icon: DIR_ICONS.assignment, html: `<p>${esc(assignment)}</p>` },
    { title: "Messages & Teachings", icon: DIR_ICONS.messages, html: `<ul class="pm-list">${messages.map(m => `<li>${esc(m)}</li>`).join("")}</ul>` },
    { title: "Activities", icon: DIR_ICONS.activities, html: `<div class="pm-gallery">${gallery}</div>` },
  ];
}
// The right column shows ONE section at a time. "About" (the description) is
// shown first; a row of tab buttons switches to Ministry Role, Church
// Assignment, Messages & Teachings, or Activities. A single section (a
// testimony) is just shown on its own with no tab bar.
function buildAccordion(sections) {
  const acc = $("#profile-accordion"); acc.innerHTML = "";
  if (!sections.length) return;
  const panel = document.createElement("div"); panel.className = "pf-panel";
  const show = (s) => { panel.innerHTML = s.html; panel.classList.remove("pf-anim"); void panel.offsetWidth; panel.classList.add("pf-anim"); };

  if (sections.length > 1) {
    const tabs = document.createElement("div"); tabs.className = "pf-tabs";
    sections.forEach((s, i) => {
      const btn = document.createElement("button");
      btn.className = "pf-tab" + (i === 0 ? " active" : "");
      btn.innerHTML = `<span class="pf-ico">${svg(s.icon)}</span><span class="pf-tab-txt">${s.title}</span>`;
      btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) return;
        tabs.querySelectorAll(".pf-tab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        Sound.play("tap");
        show(s);
      });
      tabs.appendChild(btn);
    });
    acc.appendChild(tabs);
  }
  acc.appendChild(panel);
  show(sections[0]);
}
function dirOpenProfile(catId, index) {
  const p = dirItems(catId)[index]; if (!p) return;
  Sound.play("open");
  // large portrait: the person's photo, or a dignified glyph card if absent
  const glyph = svg(ICONS[catId === "testimonies" ? "testimonies" : catId] || ICONS.apostle);
  $("#pm-portrait").innerHTML = p.image
    ? `<img src="${withV(p.image)}" alt="${esc(p.name)}" onerror="this.remove()">${glyph}`
    : glyph;
  $("#pm-name").textContent = p.name;
  $("#pm-title").textContent = catId === "testimonies" ? (p.role || "Testimony") : (p.position || "");
  const chips = [];
  if (p.location) chips.push(p.location);
  if (catId === "testimonies" && p.date) chips.push(p.date);
  $("#pm-meta").innerHTML = chips.map(c => `<span class="pm-chip">${esc(c)}</span>`).join("");
  buildAccordion(personSections(p, catId));
  const m = $("#profile-modal"); m.classList.remove("hidden", "closing");
  requestAnimationFrame(() => requestAnimationFrame(() => m.classList.add("open")));
}
function closeProfile() {
  const m = $("#profile-modal"); if (m.classList.contains("hidden")) return;
  Sound.play("back"); m.classList.add("closing"); m.classList.remove("open");
  setTimeout(() => { m.classList.add("hidden"); m.classList.remove("closing"); }, 300);
}

/* ─────────────────────────── Gallery ────────────────────────────────── */
function buildGallery() {
  const grid = $("#gallery-grid"); grid.innerHTML = "";
  SCENES.forEach(s => {
    const tile = document.createElement("button");
    tile.className = "gallery-tile" + (s.id === settings.scene ? " active" : "");
    tile.dataset.scene = s.id;
    let bg = "", hint = "";
    if (s.type === "css") bg = s.css;
    else if (s.type === "photo") {
      // don't reference the file in CSS (avoids a 404 when it's absent);
      // applyScene() loads it via JS and falls back gracefully if missing.
      bg = "linear-gradient(160deg, #eef3f9 0%, #dbe4f0 100%)";
      hint = `<span class="gt-hint">★</span>`;
    } else bg = "linear-gradient(160deg, #f4f6fa 0%, #e7ecf3 100%)";
    tile.style.background = bg;
    tile.innerHTML = `${hint}<span class="gt-label">${s.label}</span>`;
    tile.addEventListener("click", () => { Sound.play("tap"); applyScene(s.id); toast(s.label + " background applied"); });
    grid.appendChild(tile);
  });
}

/* ─────────────────── Settings lock (password gate) ──────────────────── */
const SETTINGS_PASSWORD = "palanca";     // required to open Settings
function requestSettings() {
  openFeature("settings-lock");
  const inp = $("#lock-pass"), msg = $("#lock-msg");
  if (inp) { inp.value = ""; setTimeout(() => { try { inp.focus(); } catch {} }, 320); }
  if (msg) { msg.textContent = ""; msg.classList.remove("bad"); }
}
function tryUnlockSettings() {
  const inp = $("#lock-pass"), msg = $("#lock-msg");
  if (!inp) return;
  if (inp.value === SETTINGS_PASSWORD) {
    inp.value = "";
    if (typeof Keyboard !== "undefined") Keyboard.hide();
    closeFeature($("#settings-lock"));
    setTimeout(() => openFeature("settings"), 260);
  } else {
    if (msg) { msg.textContent = "Incorrect password. Please try again."; msg.classList.add("bad"); }
    inp.value = ""; try { inp.focus(); } catch {}
    Sound.play("back");
    const shell = $("#settings-lock .feature-shell");
    if (shell) { shell.classList.remove("shake"); void shell.offsetWidth; shell.classList.add("shake"); }
  }
}

/* Populate the voice picker with the English voices available on this device,
   nicest-sounding first. Runs again when the browser loads its voice list. */
function buildVoiceOptions() {
  const sel = $("#set-voice"); if (!sel || !Voice.supported) return;
  const vs = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang));
  // rank by the same "natural male" heuristic the auto-picker uses
  const ranked = vs.slice().sort((a, b) => (/(natural|neural|google|online)/i.test(b.name) ? 1 : 0) - (/(natural|neural|google|online)/i.test(a.name) ? 1 : 0));
  sel.innerHTML = `<option value="">Automatic — best natural male</option>`;
  ranked.forEach(v => {
    const o = document.createElement("option");
    o.value = v.name; o.textContent = `${v.name} · ${v.lang}`;
    if (v.name === settings.voiceName) o.selected = true;
    sel.appendChild(o);
  });
  sel.onchange = () => {
    settings.voiceName = sel.value; store.set("voiceName", sel.value);
    Voice.voice = null; Voice.pick();
    Voice.speak("Peace be with you. I am Brother Thomas.");
  };
}

/* ─────────────────────────── Settings ───────────────────────────────── */
function buildSettings() {
  $("#set-user").value = settings.user === "guest" ? "" : settings.user;
  $("#set-vol").value = settings.volume; $("#vol-val").textContent = settings.volume + "%";
  // Background scenes (Theme)
  const sg = $("#scene-grid");
  if (sg) {
    sg.innerHTML = "";
    SCENES.forEach(s => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "scene-tile" + (s.id === settings.scene ? " active" : "");
      tile.dataset.scene = s.id;
      let bg;
      if (s.type === "css") bg = s.css;
      else if (s.type === "photo") bg = "linear-gradient(160deg, #eef3f9 0%, #dbe4f0 100%)";
      else bg = "linear-gradient(160deg, #f4f6fa 0%, #e7ecf3 100%)";
      tile.style.background = bg;
      tile.innerHTML = `<span class="st-label">${s.label}</span>`;
      tile.addEventListener("click", () => { Sound.play("tap"); applyScene(s.id); $$("#scene-grid .scene-tile").forEach(x => x.classList.toggle("active", x.dataset.scene === s.id)); });
      sg.appendChild(tile);
    });
  }
  // Accent colour swatches
  const sw = $("#color-swatches"); sw.innerHTML = "";
  THEMES.forEach(t => {
    const b = document.createElement("button");
    b.className = "swatch" + (t.color === settings.accent ? " active" : "");
    b.style.background = t.color; b.style.color = t.color; b.dataset.color = t.color;
    b.addEventListener("click", () => { Sound.play("tap"); settings.accent = t.color; applyAccent(t.color); $$("#color-swatches .swatch").forEach(s => s.classList.toggle("active", s.dataset.color === t.color)); });
    sw.appendChild(b);
  });
  // Interface scheme (10 icon / design styles)
  const scg = $("#scheme-opts");
  if (scg) {
    scg.innerHTML = "";
    SCHEMES.forEach(sc => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "scheme-opt" + (sc.id === settings.scheme ? " active" : "");
      b.dataset.scheme = sc.id;
      b.innerHTML = `<span class="sc-swatch" data-scheme="${sc.id}"><i></i><i></i><i></i></span><span class="sc-name">${sc.label}</span>`;
      b.addEventListener("click", () => {
        Sound.play("tap");
        applyScheme(sc.id, true);
        $$("#scheme-opts .scheme-opt").forEach(o => o.classList.toggle("active", o.dataset.scheme === sc.id));
        $$("#color-swatches .swatch").forEach(s => s.classList.toggle("active", s.dataset.color === settings.accent));
      });
      scg.appendChild(b);
    });
  }
  buildVoiceOptions();
  $("#set-vol").oninput = (e) => { settings.volume = +e.target.value; $("#vol-val").textContent = settings.volume + "%"; };
  $("#set-vol").onchange = () => Sound.play("tap");
  // Assistant / OpenJarvis
  const je = $("#set-jarvis-enabled"), jep = $("#set-jarvis-endpoint"), jm = $("#set-jarvis-model");
  je.checked = settings.jarvisEnabled; jep.value = settings.jarvisEndpoint; jm.value = settings.jarvisModel;
  je.onchange = () => { settings.jarvisEnabled = je.checked; updateJarvisMode(); Sound.play("tap"); };
  jep.oninput = () => { settings.jarvisEndpoint = jep.value.trim(); };
  jm.oninput = () => { settings.jarvisModel = jm.value.trim(); };
  $("#btn-jarvis-test").onclick = testJarvis;
}
async function testJarvis() {
  const s = $("#jarvis-test-status");
  settings.jarvisEndpoint = $("#set-jarvis-endpoint").value.trim();
  settings.jarvisModel = $("#set-jarvis-model").value.trim();
  if (!settings.jarvisEndpoint) { s.textContent = "Enter an API endpoint first"; return; }
  s.textContent = "Testing…"; Sound.play("tap");
  try {
    const text = await callOpenJarvis([
      { role: "system", content: "You are a health check. Reply with exactly one word." },
      { role: "user", content: "Reply with the single word: ready" },
    ]);
    s.textContent = "✓ Connected — model replied: " + text.slice(0, 40);
    setJarvisStatus(true); toast("OpenJarvis connected");
  } catch (err) {
    s.textContent = "✗ " + err.message + " — is `jarvis serve` running and is this origin allowed by CORS?";
    setJarvisStatus(false);
  }
}
function saveSettings() {
  settings.user = $("#set-user").value.trim() || "guest";
  const pass = $("#set-pass").value;
  store.set("volume", settings.volume); store.set("accent", settings.accent);
  store.set("iconStyle", settings.iconStyle); store.set("user", settings.user);
  store.set("scheme", settings.scheme); store.set("scene", settings.scene);
  store.set("voiceName", settings.voiceName);
  if (pass) store.set("passSet", true);   // note: demo only — do not store real passwords in a kiosk
  settings.jarvisEnabled = $("#set-jarvis-enabled").checked;
  settings.jarvisEndpoint = $("#set-jarvis-endpoint").value.trim();
  settings.jarvisModel = $("#set-jarvis-model").value.trim();
  store.set("jarvisEnabled", settings.jarvisEnabled);
  store.set("jarvisEndpoint", settings.jarvisEndpoint);
  store.set("jarvisModel", settings.jarvisModel);
  jarvisResetHistory(); updateJarvisMode();
  Sound.play("open"); toast("Settings saved");
}
function resetSettings() {
  settings.volume = 70; settings.accent = THEMES[0].color; settings.iconStyle = "line"; settings.user = "guest";
  settings.scheme = "royalgold"; settings.scene = "photo"; settings.voiceName = "";
  settings.jarvisEnabled = false; settings.jarvisEndpoint = "http://localhost:8000/v1/chat/completions"; settings.jarvisModel = "";
  ["volume","accent","iconStyle","user","passSet"].forEach(k => store.set(k, k === "volume" ? 70 : k === "accent" ? THEMES[0].color : k === "iconStyle" ? "line" : k === "user" ? "guest" : false));
  store.set("scheme", "royalgold"); store.set("scene", "photo"); store.set("voiceName", "");
  store.set("jarvisEnabled", false); store.set("jarvisEndpoint", settings.jarvisEndpoint); store.set("jarvisModel", "");
  Voice.voice = null;
  applyAccent(settings.accent); applyIconStyle(settings.iconStyle); applyScheme(settings.scheme); applyScene(settings.scene); buildSettings();
  jarvisResetHistory(); updateJarvisMode();
  toast("Settings reset");
}

/* ─────────────────── Jarvis / Brother Thomas (offline) ───────────────── */

/* ── Voice (text-to-speech): Brother Thomas SPEAKS his replies ─────────
   Uses the browser's built-in speechSynthesis (offline — the voices come
   from the kiosk's operating system; Windows/macOS/Chrome all include
   English voices). Toggle with the VOICE button in his header.           */
/* ── Hi-tech voice waveform ────────────────────────────────────────────
   A glowing, layered sine-wave visualiser drawn on #jarvis-wave. It idles
   as a calm line and springs to life — the wave "moves" — whenever Brother
   Thomas is speaking. Speech has no amplitude data we can read, so we drive
   the motion from his speaking state plus his word boundaries.            */
const JarvisWave = {
  canvas: null, ctx: null, raf: null, t: 0,
  amp: 0.05, target: 0.05, energy: 0,      // amp eases toward target; energy = per-word kick
  running: false, speaking: false,
  init() {
    if (this.canvas) return;
    this.canvas = document.getElementById("jarvis-wave");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.resize();
    addEventListener("resize", () => this.resize());
  },
  resize() {
    if (!this.canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = this.canvas.getBoundingClientRect();
    this.canvas.width = Math.max(1, r.width * dpr);
    this.canvas.height = Math.max(1, r.height * dpr);
    if (this.ctx) this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.W = r.width; this.H = r.height;
  },
  start() {
    this.init();
    if (!this.ctx || this.running) return;
    this.running = true;
    const loop = () => { if (!this.running) return; this.draw(); this.raf = requestAnimationFrame(loop); };
    this.raf = requestAnimationFrame(loop);
  },
  stop() {
    this.running = false; this.speaking = false;
    if (this.raf) cancelAnimationFrame(this.raf), this.raf = null;
  },
  _listening: false,
  setSpeaking(on) {
    this.speaking = on;
    this.target = on ? 0.72 : (this._listening ? 0.28 : 0.06);
    this._refreshState();
    const stage = document.querySelector(".jarvis-stage");
    if (stage) stage.classList.toggle("speaking", on);
  },
  // gentle "hearing you" motion while the mic is live (and not speaking)
  setListening(on) {
    this._listening = on;
    if (!this.speaking) this.target = on ? 0.28 : 0.06;
    this._refreshState();
  },
  _refreshState() {
    const s = document.getElementById("jarvis-wave-state"); if (!s) return;
    const txt = this.speaking ? "SPEAKING" : (this._listening ? "LISTENING" : "STANDBY");
    s.textContent = txt; s.classList.toggle("live", this.speaking || this._listening);
  },
  kick() { this.energy = Math.min(1, this.energy + 0.6); },   // a word was spoken
  draw() {
    const { ctx, W, H } = this; if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    this.t += 0.045;
    // ease amplitude toward target; word-kicks add a decaying burst
    this.amp += (this.target - this.amp) * 0.12;
    this.energy *= 0.90;
    const level = this.amp + this.energy * 0.5;
    const mid = H / 2;
    const accent = (getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#e8c66a").trim();
    const accent2 = (getComputedStyle(document.documentElement).getPropertyValue("--accent-2") || "#ffe6ab").trim();
    // faint center guide line
    ctx.globalAlpha = 0.18; ctx.strokeStyle = accent; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(W, mid); ctx.stroke();
    ctx.globalAlpha = 1;
    // three layered waves, back (dim/slow) to front (bright/fast)
    const layers = [
      { col: accent,  a: 0.30, freq: 1.4, sp: 0.6, w: 1.6, ph: 0 },
      { col: accent2, a: 0.55, freq: 2.2, sp: 1.0, w: 2.2, ph: 1.6 },
      { col: accent2, a: 0.95, freq: 3.1, sp: 1.5, w: 2.8, ph: 3.1 },
    ];
    for (const L of layers) {
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const p = x / W;
        // envelope tapers the wave at both ends so it reads as a "voice" bar
        const env = Math.pow(Math.sin(Math.PI * p), 0.8);
        const y = mid + Math.sin(p * Math.PI * 2 * L.freq + this.t * L.sp + L.ph)
                        * (H * 0.42) * level * L.a * env
                      + Math.sin(p * Math.PI * 2 * (L.freq * 2.3) + this.t * L.sp * 1.7)
                        * (H * 0.10) * level * L.a * env;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = L.col;
      ctx.lineWidth = L.w;
      ctx.lineJoin = "round";
      ctx.shadowColor = L.col;
      ctx.shadowBlur = 12 * (0.5 + level);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
  },
};

const Voice = {
  enabled: store.get("voiceOn", true),
  voice: null,
  supported: "speechSynthesis" in window,
  pick() {
    if (!this.supported) return;
    const vs = speechSynthesis.getVoices();
    if (!vs.length) return;
    // Honour an operator-chosen voice (Settings ▸ Sound & Voice) when set.
    if (settings.voiceName) {
      const chosen = vs.find(v => v.name === settings.voiceName);
      if (chosen) { this.voice = chosen; return; }
    }
    const en = vs.filter(v => /^en/i.test(v.lang));
    // Deep, natural MALE voices across platforms — best-sounding first.
    const STRONG = /(guy|davis|tony|christopher|eric|roger|steffan|brian|ryan|daniel|george|arthur|william|david|liam|thomas)\b/i;
    const MALE = new RegExp(STRONG.source + "|\\b(male|oliver|mark|james|aaron|fred|alex|jon|paul|richard)\\b", "i");
    const NATURAL = /(natural|neural|premium|enhanced|online|siri)/i;
    const ROBOTIC = /(zira|hazel|susan|linda|female|microsoft (david|mark) desktop|espeak|compact)/i;
    const score = (v) => {
      let s = 0;
      const n = v.name;
      if (MALE.test(n)) s += 120;                      // must sound male
      if (STRONG.test(n)) s += 30;                     // a strong, deeper timbre
      if (NATURAL.test(n)) s += 90;                    // human-sounding, not robotic
      if (/google/i.test(n)) s += 45;                  // Google voices are very natural
      if (/en[-_]?GB/i.test(v.lang)) s += 14;          // warm, natural accent
      else if (/en[-_]?(US|AU|IE|CA)/i.test(v.lang)) s += 10;
      if (ROBOTIC.test(n)) s -= 80;                    // avoid the flat, dated engines
      return s;
    };
    // Rank English voices; strongly favour a natural, strong male voice.
    this.voice =
      en.slice().sort((a, b) => score(b) - score(a))[0] ||
      vs.find(v => /^en/i.test(v.lang)) || vs[0] || null;
  },
  speak(text) {
    if (!this.enabled || !this.supported || Sound.muted) return;
    speechSynthesis.cancel();                       // don't overlap replies
    const clean = String(text).replace(/[“”"]/g, "").replace(/[⚠︎🌍]/g, "").trim();
    if (!clean) return;
    const u = new SpeechSynthesisUtterance(clean);
    if (!this.voice) this.pick();
    if (this.voice) { u.voice = this.voice; u.lang = this.voice.lang; }
    else u.lang = "en-GB";
    // natural, unhurried human cadence (pitch left at natural — lowering it on
    // synthetic voices sounds robotic; strength comes from the chosen voice)
    u.rate = 0.97; u.pitch = 1.0;
    u.volume = Math.max(0, Math.min(1, settings.volume / 100));
    // drive the hi-tech waveform so it moves while he speaks
    u.onstart = () => JarvisWave.setSpeaking(true);
    u.onboundary = () => JarvisWave.kick();       // pulse the wave on each word
    u.onend = u.onerror = () => JarvisWave.setSpeaking(false);
    speechSynthesis.speak(u);
  },
  stop() { if (this.supported) speechSynthesis.cancel(); JarvisWave.setSpeaking(false); },
  toggle() {
    this.enabled = !this.enabled; store.set("voiceOn", this.enabled);
    if (!this.enabled) this.stop();
    updateVoiceButton();
    if (this.enabled) this.speak("Voice is on.");
  },
};
if (Voice.supported) speechSynthesis.onvoiceschanged = () => { Voice.pick(); if (typeof buildVoiceOptions === "function") buildVoiceOptions(); };
function updateVoiceButton() {
  const b = $("#jarvis-voice"); if (!b) return;
  b.classList.toggle("off", !Voice.enabled);
  $("#jarvis-voice-label").textContent = Voice.enabled ? "VOICE ON" : "VOICE OFF";
}

/* ── Speech recognition: talk to Brother Thomas + wake word ──────────────
   One continuous recogniser. When the assistant is CLOSED it listens for the
   wake word ("Brother Thomas" / "Jarvis") and opens him; when OPEN, spoken
   phrases become questions. Requires a browser with SpeechRecognition (Chrome/
   Edge) and microphone permission; degrades gracefully otherwise. */
const Listen = {
  SR: window.SpeechRecognition || window.webkitSpeechRecognition,
  rec: null, wantOn: false, on: false,
  get supported() { return !!this.SR; },
  WAKE: /\b(brother\s+thomas|brother\s+tom|jarvis|hey\s+thomas|hello\s+thomas)\b/,
  init() {
    if (!this.supported || this.rec) return;
    const r = new this.SR();
    r.continuous = true; r.interimResults = true; r.lang = "en-GB"; r.maxAlternatives = 1;
    r.onstart = () => { this.on = true; updateMicButton(); };
    r.onresult = (e) => {
      let interim = "", finalT = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const seg = e.results[i]; if (!seg || !seg[0]) continue;
        if (seg.isFinal) finalT += seg[0].transcript; else interim += seg[0].transcript;
      }
      // live proof it's hearing you: show the words in the input box as you speak
      const input = $("#jarvis-text"), open = !$("#jarvis").classList.contains("hidden");
      if (open && input) input.value = (finalT || interim).trim();
      if (finalT.trim()) { if (open && input) input.value = ""; this.handle(finalT); }
    };
    r.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") { this.wantOn = false; toast("Allow microphone access to talk to Brother Thomas."); }
      // "no-speech"/"aborted"/"network" are transient — onend will restart if wanted
    };
    r.onend = () => { this.on = false; updateMicButton(); if (this.wantOn) { try { r.start(); } catch {} } };
    this.rec = r;
  },
  start() {
    if (!this.supported) { toast("Voice input needs Chrome or Edge (with a microphone)."); updateMicButton(); return; }
    this.init(); this.wantOn = true;
    try { this.rec.start(); } catch {}
    updateMicButton();
  },
  stop() { this.wantOn = false; if (this.rec) { try { this.rec.stop(); } catch {} } this.on = false; updateMicButton(); },
  toggle() { this.wantOn ? this.stop() : this.start(); },
  handle(raw) {
    const txt = (raw || "").trim(); if (!txt) return;
    const low = " " + txt.toLowerCase() + " ";
    const jarvisOpen = !$("#jarvis").classList.contains("hidden");
    if (!jarvisOpen) {
      if (this.WAKE.test(low)) {                 // summoned by name
        Sound.ensure(); openFeature("jarvis");
        const q = txt.replace(this.WAKE, "").trim();
        if (q.length > 3) setTimeout(() => submitJarvis(q), 800);   // "Brother Thomas, who is the apostle?"
      }
      return;
    }
    // panel open → treat speech as a question (strip a leading wake word)
    const q = txt.replace(this.WAKE, "").trim();
    if (q) submitJarvis(q);
  },
};
function updateMicButton() {
  const live = Listen.on && Listen.wantOn;
  const b = $("#jarvis-mic");
  if (b) {
    b.classList.toggle("live", live);
    b.title = Listen.wantOn ? "Listening… tap to stop (or say “Brother Thomas”)" : "Speak — or say “Brother Thomas”";
  }
  const vm = $("#voice-mic"); if (vm) vm.classList.toggle("live", live);
  if (typeof JarvisWave !== "undefined") JarvisWave.setListening(live);
  const hint = $("#mic-hint");
  if (hint) {
    if (!Listen.supported) { hint.textContent = "🎙️ Voice input needs Chrome or Edge (with a microphone)."; hint.className = "mic-hint off"; }
    else if (live)        { hint.textContent = "🎙️ Listening… speak now."; hint.className = "mic-hint live"; }
    else if (Listen.wantOn){ hint.textContent = "🎙️ Starting the microphone…"; hint.className = "mic-hint"; }
    else                  { hint.textContent = "🎙️ Tap the mic and speak — or just say “Brother Thomas”."; hint.className = "mic-hint"; }
  }
}
/* Voice Mode: waveform-only immersive view (chat text hidden). Entering starts
   voice detection; leaving returns to the typed-chat layout. */
function enterVoiceMode() {
  const shell = document.querySelector(".jarvis-shell"); if (shell) shell.classList.add("voice-mode");
  if (Listen.supported) { if (!Listen.wantOn) Listen.start(); }
  else toast("Voice input needs Chrome or Edge — you can still type to Brother Thomas.");
  if (typeof JarvisWave !== "undefined") JarvisWave.setListening(Listen.on && Listen.wantOn);
  updateMicButton();
}
function exitVoiceMode() {
  const shell = document.querySelector(".jarvis-shell"); if (shell) shell.classList.remove("voice-mode");
  if (typeof JarvisWave !== "undefined") JarvisWave.setListening(false);
  setTimeout(() => { try { $("#jarvis-text").focus(); } catch {} }, 60);
}

function jarvisSay(cls, text) {
  const log = $("#jarvis-log");
  const div = document.createElement("div"); div.className = "j-msg " + cls; div.textContent = text;
  log.appendChild(div); log.scrollTop = log.scrollHeight;
  if (cls === "bot") Voice.speak(text);            // Brother Thomas speaks
}
/* Rich profile card (photo + information) shown when someone asks about a
   specific person, e.g. "who is Bishop Aldrin Palanca?". He also speaks a
   short, natural summary. */
function jarvisPersonCard(p, sec) {
  const log = $("#jarvis-log");
  const catId = sec && sec.id;
  const idx = catId ? dirItems(catId).indexOf(p) : -1;
  const glyph = svg(ICONS[catId] || ICONS.apostle);
  const about = p.about || p.description || "";
  const facts = p.extra ? Object.entries(p.extra).map(([k, v]) => `${k}: ${v}`) : [];
  const factsHTML = facts.slice(0, 4).map(f => `<span class="jc-fact">${esc(f)}</span>`).join("");
  const card = document.createElement("div");
  card.className = "j-card";
  card.innerHTML =
    `<div class="jc-photo">${glyph}${p.image ? `<img src="${withV(p.image)}" alt="${esc(p.name)}" onerror="this.remove()">` : ""}</div>` +
    `<div class="jc-info">` +
      `<div class="jc-name">${esc(p.name)}</div>` +
      (p.position ? `<div class="jc-pos">${esc(p.position)}</div>` : "") +
      (p.location ? `<div class="jc-loc">📍 ${esc(p.location)}</div>` : "") +
      (about ? `<div class="jc-desc">${esc(about)}</div>` : "") +
      (factsHTML ? `<div class="jc-facts">${factsHTML}</div>` : "") +
      (idx >= 0 ? `<button class="jc-more" type="button">View full profile</button>` : "") +
    `</div>`;
  log.appendChild(card); log.scrollTop = log.scrollHeight;
  if (idx >= 0) card.querySelector(".jc-more").addEventListener("click", () => { Sound.play("tap"); dirOpenProfile(catId, idx); });
  // a short, natural spoken summary — no self-reference
  const firstSentence = (about.split(/(?<=\.)\s/)[0] || "").trim();
  const spoken = `${p.name}${p.position ? ", " + p.position : ""}.${p.location ? " Based in " + p.location + "." : ""} ${firstSentence}`.replace(/\s+/g, " ").trim();
  Voice.speak(spoken);
}
function jarvisGreet() {
  updateJarvisMode();
  // He greets by name (Brother Thomas) — but never as an AI/assistant/"Jarvis".
  jarvisSay("bot", "Peace be with you. I am Brother Thomas. How may I help you today?");
}
/* Grounds a local model as Brother Thomas using the church content. */
function jarvisSystemPrompt() {
  const c = CONTENT.church;
  const leaders = CONTENT.sections
    .filter(s => s.items && s.items.length && s.items[0].confidence !== "placeholder")
    .map(s => `${s.label} — ${s.items.map(i => i.name).join("; ")}`).join(" | ");
  return `You are ${ASSISTANT_NAME}, a warm, respectful, softly-spoken man who helps people at the ${c.name} (PMCC 4th Watch). ` +
    `Speak naturally in the first person as a person, and introduce yourself as Brother Thomas when greeting. NEVER say or imply that you are an AI, a chatbot, a language model, an assistant, a program, or "Jarvis"; never mention these words or your own nature — simply help as Brother Thomas. ` +
    `Answer concisely (2-4 sentences), reverently, and helpfully. Never invent church leaders or facts not given here. ` +
    `Church facts: founded ${c.founded}; headquarters ${c.headquarters}; ${c.members}; present in ${c.countries}; motto "${c.tagline}". ` +
    `Meaning of "4th Watch": ${c.meaningOf4thWatch} Beliefs: ${c.doctrineSummary} ` +
    `Known leadership — ${leaders}. If asked to navigate the screen: tapping the center logo reveals the section icons; the bottom dock has Home, Gallery, Settings, me, Browser and Search.`;
}
let jarvisHistory = [];
function jarvisResetHistory() { jarvisHistory = [{ role: "system", content: jarvisSystemPrompt() }]; }
jarvisResetHistory();

function updateJarvisMode() {
  const on = settings.jarvisEnabled && settings.jarvisEndpoint;
  const dot = $("#jarvis-dot"), mode = $("#jarvis-mode");
  if (!dot || !mode) return;
  dot.className = "j-dot" + (on ? " ready" : "");
  mode.childNodes[1] && (mode.childNodes[1].nodeValue = on ? "Connected" : "Ready");
}
function setJarvisStatus(online) {
  const dot = $("#jarvis-dot"); if (dot) dot.className = "j-dot " + (online ? "on" : "off");
}
/* animated "typing" bubble; returns a remover */
function jarvisTyping() {
  const log = $("#jarvis-log");
  const div = document.createElement("div"); div.className = "j-msg bot j-typing";
  div.innerHTML = `<span></span><span></span><span></span>`;
  log.appendChild(div); log.scrollTop = log.scrollHeight;
  return () => div.remove();
}
/* Call a local OpenJarvis server (OpenAI-compatible /v1/chat/completions). */
async function callOpenJarvis(history) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 40000);
  try {
    const body = { messages: history, stream: false, temperature: 0.4 };
    if (settings.jarvisModel) body.model = settings.jarvisModel;
    const r = await fetch(settings.jarvisEndpoint, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body), signal: ctrl.signal,
    });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const j = await r.json();
    const text = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
    if (!text || !text.trim()) throw new Error("empty response");
    return text.trim();
  } finally { clearTimeout(timer); }
}
/* Look up a specific person by name across every leadership section. */
const NAME_STOP = /^(bishop|archbishop|presbyter|pastor|elder|apostle|brother|sister|deacon|minister)$/;
function jarvisFindPerson(t) {
  for (const sec of CONTENT.sections) {
    for (const p of (sec.items || [])) {
      if (!p.name) continue;
      // match on a distinctive part of their name (≥4 letters), not their title
      const words = p.name.toLowerCase().replace(/[".“”()]/g, "").split(/\s+/)
        .filter(w => w.length >= 4 && !NAME_STOP.test(w));
      if (words.some(w => t.includes(w))) return { p, sec };
    }
  }
  return null;
}
/* List the names in a section, or point to it if only placeholders exist. */
function jarvisNames(sec) {
  const real = (sec.items || []).filter(i => i.name && i.confidence !== "placeholder");
  if (!real.length) return `Tap the ${sec.label.toUpperCase()} icon to view this group.`;
  const names = real.map(i => i.name).join(", ");
  return `Our ${sec.label} include: ${names}. Tap the ${sec.label.toUpperCase()} icon (or use the Directory) to open any profile.`;
}
function jarvisReply(q) {
  const t = " " + q.toLowerCase().replace(/[".“”]/g, "") + " ";
  const c = CONTENT.church;
  const sec = (id) => CONTENT.sections.find(s => s.id === id);

  // 1) A specific person by name → give their profile summary
  const hit = jarvisFindPerson(t);
  if (hit && !/\b(all|list|who are the)\b/.test(t)) {
    const p = hit.p;
    const bits = [p.about || p.description].filter(Boolean);
    const role = p.ministryRole ? ` ${p.ministryRole}` : "";
    const loc = p.location ? ` Based in ${p.location}.` : "";
    return `${p.name}${p.position ? " — " + p.position : ""}.${loc} ${bits.join(" ")}${role}`.replace(/\s+/g, " ").trim();
  }

  // 2) Greetings / identity / thanks
  if (/\b(hello|hi|hey|peace|salam|good (morning|evening|afternoon))\b/.test(t)) return "Peace be with you. I am Brother Thomas. How may I help you today?";
  if (/\b(who are you|your name|what are you|brother thomas|jarvis)\b/.test(t)) return "I am Brother Thomas. You can ask me about our Apostle, Bishops, Presbyters, Pastors, Elders, our branches around the world, our history, or our beliefs.";
  if (/\bthank/.test(t)) return "You are most welcome. God bless you and keep you.";

  // 3) Leadership groups
  if (/\b(apostle|founder|chief|executive minister|ferriol|leader of the church)\b/.test(t)) return `The church was founded in ${c.founded} by Apostle Arsenio T. Ferriol. ${jarvisNames(sec("apostle")).replace(/^Our Apostle include: /, "Our Apostle: ")}`;
  if (/\bbishop/.test(t)) return jarvisNames(sec("bishops"));
  if (/\bpresbyter/.test(t)) return jarvisNames(sec("presbyters"));
  if (/\bpastor/.test(t)) return jarvisNames(sec("pastors"));
  if (/\belder/.test(t)) return jarvisNames(sec("elders"));
  if (/\btestimon/.test(t)) return "We have testimonies of God's faithfulness from members around the world. Open the Directory and choose Testimonies to read them.";

  // 4) Branches / locations
  if (/\b(middle east|dubai|abu dhabi|qatar|saudi|kuwait|gulf|uae)\b/.test(t)) return `Yes — we have congregations across the Middle East District, including Dubai, Abu Dhabi, Qatar, Saudi Arabia and more. Tap BRANCHES to spin the globe and tap the Middle East points.`;
  if (/\b(branch|congregation|country|countries|location|where|globe|philippines|asia|europe|america|canada|australia|netherlands)\b/.test(t)) return `We have congregations in ${c.countries}. Tap the BRANCHES icon to open the 3D globe — spin it and tap a glowing point, or search a country.`;

  // 5) History / facts / doctrine
  if (/\b(history|founded|found|1972|began|start|origin|timeline)\b/.test(t)) return `The PMCC (4th Watch) was founded in ${c.founded} in the Philippines and has grown into a global fellowship. Tap HISTORY to read the full timeline.`;
  if (/\b(member|members|how many|congregants|people|size)\b/.test(t)) return `The church has ${c.members} across ${c.countries}.`;
  if (/\b(head ?quarter|based|main office|central)\b/.test(t)) return `Our headquarters is in ${c.headquarters}.`;
  if (/\b(4th watch|fourth watch|watch mean|name mean|why called|meaning)\b/.test(t)) return c.meaningOf4thWatch;
  if (/\b(believe|belief|doctrine|teach|teaching|baptism|holy spirit|salvation|gospel|god|jesus|christ|bible|scripture)\b/.test(t)) return c.doctrineSummary;
  if (/\b(motto|tagline|mission|vision|slogan|purpose)\b/.test(t)) return `Our guiding call is: “${c.tagline}.”`;
  if (/\b(service|worship|mass|schedule|time|sunday)\b/.test(t)) return "Service times vary by branch. Open BRANCHES, select a congregation, and its details will show on the left (add exact times per branch in the content file).";

  // 6) Using the screen
  if (/\b(background|wallpaper|theme|colour|color|gallery)\b/.test(t)) return "Open the GALLERY icon in the dock to change the background, or SETTINGS to change the gold accent colour and icon style.";
  if (/\b(setting|password|volume|update|admin)\b/.test(t)) return "Open the SETTINGS icon in the dock for the username & password, volume, accent colour, icon style, and updates.";
  if (/\b(search|find)\b/.test(t)) return "Tap the SEARCH icon in the dock (or press Ctrl/⌘-K) to search people, branches and sections.";
  if (/\b(browser|internet|website|web)\b/.test(t)) return "Tap the BROWSER icon in the dock to open the in-app web browser.";
  if (/\b(voice|speak|talk|listen|microphone|mic)\b/.test(t)) return "Tap the microphone by the message box and simply speak your question — I'll listen and answer aloud. You can also just say “Brother Thomas” to call me.";
  if (/\b(directory|list of|profiles?|photos?|pictures?|bio|biograph)\b/.test(t)) return "Tap the DIRECTORY icon in the dock, choose a category (Bishops, Presbyters, Pastors, Elders or Testimonies), then tap a name to open a full profile — a large photo with About, Ministry Role, Church Assignment, Messages & Teachings, and Activities.";
  if (/\b(drag|move|reposition|pinch|stretch|zoom|resize|scale)\b/.test(t)) return "You can drag any section icon to reposition it, pinch (or scroll) to stretch the whole network, and double-tap an empty area to reset. It's built for a large touch screen.";
  if (/\b(full ?screen|kiosk|display|tab|toolbar)\b/.test(t)) return "The app runs full-screen — it goes full-screen on your first tap so there's no browser toolbar. Press F11 to toggle it manually.";
  if (/\b(what is this|about (the )?app|this application|this screen|this kiosk|who made|what can you do|purpose of this)\b/.test(t)) return `This is the ${c.name} interactive leadership directory — a touch kiosk to explore our Apostle, Bishops, Presbyters, Pastors, Elders, our branches on the 3D globe, and our history. Ask me anything about the church or how to use the screen.`;
  if (/\b(help|how do i|how to|use|navigate|start|open|guide)\b/.test(t)) return "Tap the centre logo to reveal the section icons, then tap one to open it — Apostle, Bishops, Presbyters, Pastors, Elders, Branches or History. The bottom dock has Home, Directory, Gallery, Settings, me, Browser and Search. Drag icons to move them and pinch to stretch.";

  return "I can tell you about our Apostle, Bishops, Presbyters, Pastors, Elders, a specific minister by name, our branches worldwide, our history and beliefs, or how to use this screen — drag the icons, open the globe, the Directory, Gallery, Settings and more. What would you like to know?";
}
let jarvisBusy = false;
/* Handle one question (from the text box OR from the voice mic). */
async function submitJarvis(q) {
  q = (q || "").trim();
  if (!q || jarvisBusy) return;
  jarvisSay("me", q); $("#jarvis-text").value = ""; Sound.play("tap");

  // A specific person → show a rich profile card (photo + information) rather
  // than a plain text answer. Works in both offline and AI modes.
  const pt = " " + q.toLowerCase().replace(/[".“”]/g, "") + " ";
  const person = jarvisFindPerson(pt);
  if (person && !/\b(all|list|who are the|how many)\b/.test(pt)) {
    setTimeout(() => { jarvisPersonCard(person.p, person.sec); Sound.play("open"); }, 380);
    return;
  }

  // Offline path: instant answer grounded in the church content.
  if (!settings.jarvisEnabled || !settings.jarvisEndpoint) {
    setTimeout(() => { jarvisSay("bot", jarvisReply(q)); Sound.play("open"); }, 380);
    return;
  }
  // Online path: ask the local OpenJarvis AI, fall back gracefully on failure.
  jarvisBusy = true;
  jarvisHistory.push({ role: "user", content: q });
  const stopTyping = jarvisTyping();
  try {
    const text = await callOpenJarvis(jarvisHistory);
    stopTyping(); jarvisSay("bot", text);
    jarvisHistory.push({ role: "assistant", content: text });
    if (jarvisHistory.length > 21) jarvisHistory.splice(1, jarvisHistory.length - 21); // keep system + last ~20
    setJarvisStatus(true); Sound.play("open");
  } catch (err) {
    stopTyping();
    const fb = jarvisReply(q);
    jarvisSay("bot", fb);
    jarvisSay("note", "⚠︎ Couldn’t reach the local AI (" + err.message + ") — answered from the built-in guide. Check MENU ▸ Settings ▸ Assistant.");
    jarvisHistory.push({ role: "assistant", content: fb });
    setJarvisStatus(false); Sound.play("open");
  } finally { jarvisBusy = false; }
}
$("#jarvis-form").addEventListener("submit", (e) => { e.preventDefault(); submitJarvis($("#jarvis-text").value); });

/* ─────────────────────────── Browser ────────────────────────────────── */
function normalizeUrl(u) {
  u = u.trim(); if (!u) return "https://pmcc4thwatch.org/";
  if (!/^https?:\/\//.test(u)) { if (u.includes(" ") || !u.includes(".")) return "https://duckduckgo.com/?q=" + encodeURIComponent(u); u = "https://" + u; }
  return u;
}
let browserLast = "https://pmcc4thwatch.org/";
function browserGo(u) {
  const url = normalizeUrl(u); browserLast = url;
  $("#browser-url").value = url;
  $("#browser-fallback").classList.add("hidden");
  const frame = $("#browser-frame"); frame.classList.remove("hidden");
  frame.src = url;
  clearTimeout(browserGo._t);
  // if the frame is still blank after a moment (X-Frame-Options / offline), show fallback
  browserGo._t = setTimeout(() => {
    try { if (!frame.contentDocument && frame.src !== "about:blank") showBrowserFallback(); }
    catch { /* cross-origin = it likely loaded fine */ }
  }, 3500);
  frame.onerror = showBrowserFallback;
}
function showBrowserFallback() { $("#browser-fallback").classList.remove("hidden"); }
$("#browser-form").addEventListener("submit", (e) => { e.preventDefault(); Sound.play("tap"); browserGo($("#browser-url").value); });
$("#browser-newtab").addEventListener("click", () => { Sound.play("tap"); window.open(browserLast, "_blank", "noopener"); });
$("#browser-open2").addEventListener("click", () => { Sound.play("tap"); window.open(browserLast, "_blank", "noopener"); });

/* ─────────────────────────── Search ─────────────────────────────────── */
function buildSearchIndex() {
  const idx = [];
  CONTENT.sections.forEach(sec => {
    idx.push({ kind: "Section", label: sec.label, sub: sec.subtitle, icon: sec.icon, open: () => openSection(sec, iconEl(sec.id)) });
    sec.items.forEach((it, i) => idx.push({ kind: sec.label, label: it.name, sub: it.position || "", icon: sec.icon, open: () => { openSection(sec, iconEl(sec.id)); setTimeout(() => renderItem(sec, i), 60); } }));
  });
  idx.push({ kind: "Section", label: "BRANCHES", sub: "Global congregations", icon: "branches", open: () => openBranches(iconEl("branches")) });
  CONTENT.branches.forEach(r => {
    idx.push({ kind: "Region", label: r.region, sub: r.countries.length + " countries", icon: "branches", open: () => openBranches(iconEl("branches")) });
    r.countries.forEach(c => idx.push({ kind: "Branch · " + r.region, label: c, sub: "Country", icon: "branches", open: () => openBranches(iconEl("branches")) }));
  });
  (CONTENT.testimonies || []).forEach((t, i) => idx.push({ kind: "Testimony", label: t.name, sub: t.role || "", icon: "testimonies", open: () => dirOpenProfile("testimonies", i) }));
  MENU.forEach(m => idx.push({ kind: "Menu", label: m.label, sub: m.sub, icon: m.icon, open: () => onMenu(m.id) }));
  return idx;
}
function iconEl(id) { return $(`.orbit-icon[data-section="${id}"]`); }
let SEARCH_INDEX = [];
function openSearch() {
  Sound.play("open");
  const s = $("#search"); s.classList.remove("hidden");
  requestAnimationFrame(() => s.classList.add("open"));
  $("#search-input").value = ""; $("#search-results").innerHTML = "";
  setTimeout(() => $("#search-input").focus(), 200);
}
function closeSearch() { const s = $("#search"); s.classList.remove("open"); setTimeout(() => s.classList.add("hidden"), 350); }
function runSearch(q) {
  const res = $("#search-results"); res.innerHTML = "";
  const term = q.trim().toLowerCase(); if (!term) return;
  const hits = SEARCH_INDEX.filter(e => (e.label + " " + e.sub + " " + e.kind).toLowerCase().includes(term)).slice(0, 12);
  if (!hits.length) { res.innerHTML = `<li class="sr-empty">No matches for “${q}”.</li>`; return; }
  hits.forEach((h, i) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.className = "sr-item"; b.style.animationDelay = `${i * 30}ms`;
    b.innerHTML = `<span class="sr-glyph">${svg(ICONS[h.icon] || ICONS.search)}</span><span>${h.label}<span class="sr-sub">${h.kind}${h.sub ? " · " + h.sub : ""}</span></span>`;
    b.addEventListener("click", () => { Sound.play("tap"); closeSearch(); if (!orbitExpanded) setOrbit(true); setTimeout(() => h.open && h.open(), 260); });
    li.appendChild(b); res.appendChild(li);
  });
}
$("#search-input").addEventListener("input", (e) => runSearch(e.target.value));

/* ─────────────────── Pinch-to-stretch ("hologram zoom") ──────────────── */
const zoomBadge = $("#zoom-badge"); let badgeTimer = null;
function flashZoom(v) { zoomBadge.textContent = `${Math.round(v*100)}%`; zoomBadge.classList.add("show"); clearTimeout(badgeTimer); badgeTimer = setTimeout(() => zoomBadge.classList.remove("show"), 900); }
function stageZoom() { return parseFloat(getComputedStyle($("#orbit-stage")).getPropertyValue("--zoom")) || 1; }
function makeStretchable(surface, applyZoom, { min = .6, max = 1.8, wheelNeedsCtrl = false } = {}) {
  let zoom = 1; const pointers = new Map(); let d0 = 0, z0 = 1, lastTap = 0;
  const apply = (z) => { zoom = Math.min(max, Math.max(min, z)); applyZoom(zoom); flashZoom(zoom); };
  surface.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2) { const [a, b] = [...pointers.values()]; d0 = Math.hypot(a.x-b.x, a.y-b.y); z0 = zoom; }
    const now = performance.now();
    if (pointers.size === 1 && now - lastTap < 350 && !e.target.closest(".orbit-icon, .hub, button, .list-chip, input")) { apply(1); Sound.play("tap"); }
    lastTap = now;
  });
  surface.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return; pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2 && d0 > 0) { const [a, b] = [...pointers.values()]; apply(z0 * (Math.hypot(a.x-b.x, a.y-b.y) / d0)); }
  });
  const lift = (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) d0 = 0; };
  surface.addEventListener("pointerup", lift); surface.addEventListener("pointercancel", lift); surface.addEventListener("pointerleave", lift);
  surface.addEventListener("wheel", (e) => { if (wheelNeedsCtrl && !e.ctrlKey) return; e.preventDefault(); apply(zoom * (e.deltaY < 0 ? 1.07 : .93)); }, { passive: false });
  return { reset: () => { zoom = 1; applyZoom(1); } };
}
const stageStretch = makeStretchable($("#orbit-stage"), (z) => $("#orbit-stage").style.setProperty("--zoom", z.toFixed(3)), { min: .65, max: 1.6 });
const panelStretch = makeStretchable($("#panel .panel-shell"), (z) => { $("#panel .panel-content").style.zoom = z.toFixed(3); }, { min: .8, max: 1.7, wheelNeedsCtrl: true });

/* ══════════════════════════════════════════════════════════════════════
   LIGHTBOX — full-screen, zoomable image preview
   Tap any panel photo to open. Scroll / pinch / double-tap or the +/−
   buttons scale the image; drag to pan when zoomed. ‹ › steps through a
   multi-image set (e.g. the History gallery). Esc / backdrop / ✕ closes.
   ══════════════════════════════════════════════════════════════════════ */
const Lightbox = (() => {
  const el = $("#lightbox");
  if (!el) return { open() {} };
  const img = $("#lb-img"), stage = $("#lb-stage"), val = $("#lb-zoom-val");
  const prev = $(".lb-prev"), next = $(".lb-next"), counter = $("#lb-counter");
  const MIN = 1, MAX = 5;
  let set = [], idx = 0, label = "";
  let zoom = 1, tx = 0, ty = 0;                 // pan offset in px
  const pointers = new Map(); let d0 = 0, z0 = 1, lastTap = 0;
  let panStart = null;

  function apply() {
    zoom = Math.min(MAX, Math.max(MIN, zoom));
    if (zoom <= 1) { tx = ty = 0; }
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${zoom.toFixed(3)})`;
    val.textContent = Math.round(zoom * 100) + "%";
    stage.classList.toggle("zoomed", zoom > 1);
  }
  function load(i) {
    idx = (i + set.length) % set.length;
    zoom = 1; tx = ty = 0;
    img.src = withV(set[idx]);
    img.alt = label ? `${label} — image ${idx + 1}` : "";
    const multi = set.length > 1;
    prev.classList.toggle("hidden", !multi);
    next.classList.toggle("hidden", !multi);
    counter.classList.toggle("hidden", !multi);
    counter.textContent = `${idx + 1} / ${set.length}`;
    apply();
  }
  function open(images, i = 0, lbl = "") {
    set = (images || []).slice(); if (!set.length) return;
    label = lbl || "";
    el.classList.remove("hidden");
    requestAnimationFrame(() => el.classList.add("open"));
    Sound.play("open");
    load(i);
  }
  function close() {
    el.classList.remove("open");
    setTimeout(() => el.classList.add("hidden"), 260);
    Sound.play("back");
  }
  const step = (d) => { if (set.length > 1) { Sound.play("tap"); load(idx + d); } };

  prev.addEventListener("click", (e) => { e.stopPropagation(); step(-1); });
  next.addEventListener("click", (e) => { e.stopPropagation(); step(1); });
  el.querySelectorAll("[data-lb-close]").forEach(b => b.addEventListener("click", close));
  el.querySelectorAll("[data-lb-zoom]").forEach(b => b.addEventListener("click", (e) => {
    e.stopPropagation();
    const k = b.dataset.lbZoom;
    if (k === "in") zoom *= 1.4; else if (k === "out") zoom /= 1.4; else { zoom = 1; tx = ty = 0; }
    apply();
  }));

  // wheel to zoom, pinch to zoom, double-tap to toggle, drag to pan
  stage.addEventListener("wheel", (e) => { e.preventDefault(); zoom *= (e.deltaY < 0 ? 1.12 : .89); apply(); }, { passive: false });
  stage.addEventListener("pointerdown", (e) => {
    stage.setPointerCapture?.(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2) { const [a, b] = [...pointers.values()]; d0 = Math.hypot(a.x - b.x, a.y - b.y); z0 = zoom; }
    else if (pointers.size === 1) {
      const now = performance.now();
      if (now - lastTap < 320) { zoom = zoom > 1 ? 1 : 2.4; if (zoom <= 1) { tx = ty = 0; } apply(); }
      lastTap = now;
      if (zoom > 1) panStart = { x: e.clientX - tx, y: e.clientY - ty };
    }
  });
  stage.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2 && d0 > 0) { const [a, b] = [...pointers.values()]; zoom = z0 * (Math.hypot(a.x - b.x, a.y - b.y) / d0); apply(); }
    else if (pointers.size === 1 && panStart && zoom > 1) { tx = e.clientX - panStart.x; ty = e.clientY - panStart.y; apply(); }
  });
  const lift = (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) d0 = 0; if (pointers.size === 0) panStart = null; };
  stage.addEventListener("pointerup", lift);
  stage.addEventListener("pointercancel", lift);
  document.addEventListener("keydown", (e) => {
    if (el.classList.contains("hidden")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "+" || e.key === "=") { zoom *= 1.4; apply(); }
    else if (e.key === "-") { zoom /= 1.4; apply(); }
  });

  return { open, close };
})();

/* ─────────────────────────── HUD clock ──────────────────────────────── */
function tickClock() {
  const now = new Date();
  $("#hud-clock").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  $("#hud-date").textContent = now.toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" }).toUpperCase();
}

/* ───────────────────────── Boot sequence ────────────────────────────── */
const BOOT = [ [10,"INITIALIZING…"], [30,"LOADING INTERFACE…"], [52,"PREPARING SCENE…"], [74,"SYNCING DIRECTORY…"], [93,"RENDERING NETWORK…"], [100,"WELCOME"] ];
function boot() {
  buildOrbit(); buildDock(); buildGallery(); buildSettings();
  SEARCH_INDEX = buildSearchIndex();
  applyScene(settings.scene);
  RevealVideo.init();               // AATF top-view backdrop (first frame at rest)
  tickClock(); setInterval(tickClock, 1000);
  updateMuteButton(); updateJarvisMode();
  let step = 0; const bar = $("#loader-progress"), status = $("#loader-status");
  const advance = () => { if (step >= BOOT.length) return finishBoot(); const [p, l] = BOOT[step++]; bar.style.width = p + "%"; status.textContent = l; setTimeout(advance, 420 + Math.random()*280); };
  setTimeout(advance, 500);
}
function finishBoot() {
  setTimeout(() => {
    $("#loader").classList.add("done");
    const dash = $("#dashboard"); dash.classList.remove("hidden");
    requestAnimationFrame(() => { layoutOrbit(); dash.classList.add("visible"); });
    Sound.play("boot");
  }, 500);
}

/* ══════════════════════════════════════════════════════════════════════
   PMCC LOGO · ADVANCED-AI / CYBERSECURITY REVEAL
   Pressing the center PMCC logo fires this: a full-screen, high-impact
   reveal — a live scanning node-grid on canvas, sweeping rings, a boot log
   of "systems online", a glitch flash and layered sound — then it hands off
   to the caller (which expands the directory network).
   ══════════════════════════════════════════════════════════════════════ */
const CyberReveal = {
  el: null, canvas: null, ctx: null, raf: null, running: false, nodes: [], t0: 0,
  BOOT: [
    "INITIALIZING SECURE CORE",
    "NEURAL ENGINE",
    "ENCRYPTION LAYER",
    "BIOMETRIC GATEWAY",
    "DIRECTORY MATRIX",
  ],
  OK: ["ONLINE", "ONLINE", "SECURED", "ACTIVE", "LINKED"],
  DURATION: 2600,
  init() {
    this.el = document.getElementById("cyber-reveal");
    this.canvas = document.getElementById("cr-canvas");
    if (this.canvas) this.ctx = this.canvas.getContext("2d");
  },
  resize() {
    if (!this.canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = innerWidth * dpr; this.canvas.height = innerHeight * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.W = innerWidth; this.H = innerHeight;
  },
  seed() {
    this.nodes = [];
    const n = Math.min(90, Math.round((this.W * this.H) / 26000));
    for (let i = 0; i < n; i++) {
      this.nodes.push({
        x: Math.random() * this.W, y: Math.random() * this.H,
        vx: (Math.random() - .5) * 0.35, vy: (Math.random() - .5) * 0.35,
      });
    }
  },
  run(after) {
    this.init();
    if (this.running || !this.el) { if (after) after(); return; }
    this.running = true;
    this.resize();
    this.seed();
    // reset + show
    this.el.classList.remove("done");
    const boot = document.getElementById("cr-boot"); if (boot) boot.innerHTML = "";
    this.el.classList.add("run");
    // sound: deep rising power sweep, then a bright "systems online" surge
    Sound.play("power");
    setTimeout(() => Sound.play("surge"), 900);
    // typed boot log with data blips
    this.BOOT.forEach((line, i) => {
      setTimeout(() => {
        if (!boot) return;
        const li = document.createElement("li");
        li.innerHTML = `<span>&gt; ${line}</span><span class="ok">✓ ${this.OK[i]}</span>`;
        boot.appendChild(li);
        Sound.play("blip");
      }, 420 + i * 260);
    });
    // canvas loop
    this.t0 = performance.now();
    const loop = (now) => {
      if (!this.running) return;
      this.draw((now - this.t0) / this.DURATION);
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
    // finish → fade out → hand off
    setTimeout(() => this.finish(after), this.DURATION);
  },
  draw(prog) {
    const { ctx, W, H, nodes } = this; if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    const accent = (getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#e8c66a").trim();
    // move + draw connecting network lines
    for (const p of nodes) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < 150) {
          ctx.globalAlpha = (1 - d / 150) * 0.5;
          ctx.strokeStyle = accent;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    for (const p of nodes) {
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2); ctx.fill();
    }
    // sweeping vertical scan bar
    const sx = ((prog * 1.2) % 1) * W;
    const grad = ctx.createLinearGradient(sx - 120, 0, sx + 120, 0);
    grad.addColorStop(0, "rgba(232,198,106,0)");
    grad.addColorStop(.5, "rgba(255,230,171,.28)");
    grad.addColorStop(1, "rgba(232,198,106,0)");
    ctx.fillStyle = grad; ctx.fillRect(sx - 120, 0, 240, H);
    // expanding radial scan rings
    const cx = W / 2, cy = H / 2;
    for (let k = 0; k < 3; k++) {
      const rp = (prog * 1.6 - k * 0.22); if (rp < 0 || rp > 1) continue;
      ctx.globalAlpha = (1 - rp) * 0.6;
      ctx.strokeStyle = accent; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, rp * Math.hypot(W, H) * 0.55, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  },
  finish(after) {
    this.el.classList.add("done");
    if (after) after();                     // reveal the network under the fade
    setTimeout(() => {
      this.running = false;
      if (this.raf) cancelAnimationFrame(this.raf), this.raf = null;
      this.el.classList.remove("run", "done");
      if (this.ctx) this.ctx.clearRect(0, 0, this.W, this.H);
    }, 550);
  },
};

/* ══════════════════════════════════════════════════════════════════════
   ON-SCREEN DIGITAL KEYBOARD
   A touch keyboard for the kiosk. It appears automatically whenever a text
   field is focused (Brother Thomas, Search, Browser address, Settings, the
   globe search) and types into it. Tapping keys never steals focus from the
   field (pointerdown is prevented), so the caret stays put.
   ══════════════════════════════════════════════════════════════════════ */
const Keyboard = {
  el: null, keysEl: null, target: null, shift: false, caps: false, mode: "abc",
  LAYOUTS: {
    abc: [
      ["1","2","3","4","5","6","7","8","9","0"],
      ["q","w","e","r","t","y","u","i","o","p"],
      ["a","s","d","f","g","h","j","k","l"],
      ["shift","z","x","c","v","b","n","m","back"],
      ["sym","@",".com","space",",",".","enter"],
    ],
    sym: [
      ["1","2","3","4","5","6","7","8","9","0"],
      ["!","@","#","$","%","&","*","(",")","'"],
      ["-","_","=","+","/",":",";","\"","?"],
      ["sym2","€","£","₱","~","`","|","back"],
      ["abc","<",">","space",",",".","enter"],
    ],
    sym2: [
      ["1","2","3","4","5","6","7","8","9","0"],
      ["[","]","{","}","^","\\","¥","¢","°"],
      ["§","¶","•","·","–","—","…","«","»"],
      ["sym","™","®","©","×","÷","±","back"],
      ["abc","<",">","space",",",".","enter"],
    ],
  },
  eligible(node) {
    if (!node) return false;
    if (node.tagName === "TEXTAREA") return !node.readOnly && !node.disabled;
    if (node.tagName !== "INPUT") return false;
    const t = (node.type || "text").toLowerCase();
    return ["text","search","password","email","url","tel","number"].includes(t) && !node.readOnly && !node.disabled;
  },
  init() {
    this.el = document.getElementById("osk");
    this.keysEl = document.getElementById("osk-keys");
    if (!this.el) return;
    document.getElementById("osk-hide").addEventListener("click", () => this.hide());
    // Show when an eligible field gains focus; hide when focus leaves fields.
    document.addEventListener("focusin", (e) => {
      if (this.eligible(e.target)) { this.target = e.target; this.mode = "abc"; this.shift = false; this.show(); }
    });
    document.addEventListener("focusout", (e) => {
      // If focus moves to another eligible field, focusin handles it; otherwise hide.
      setTimeout(() => {
        const a = document.activeElement;
        if (!this.eligible(a) && !(a && a.closest && a.closest("#osk"))) this.hide();
      }, 60);
    });
    this.render();
  },
  render() {
    if (!this.keysEl) return;
    const rows = this.LAYOUTS[this.mode];
    this.keysEl.innerHTML = "";
    rows.forEach(row => {
      const r = document.createElement("div"); r.className = "osk-row";
      row.forEach(k => r.appendChild(this.keyEl(k)));
      this.keysEl.appendChild(r);
    });
  },
  keyEl(k) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "osk-key"; b.dataset.k = k;
    const wide = { space:"osk-space", back:"osk-wide", enter:"osk-wide osk-enter", shift:"osk-wide", sym:"osk-wide", sym2:"osk-wide", abc:"osk-wide", ".com":"osk-wide" };
    if (wide[k]) b.className += " " + wide[k];
    const labels = { space:"space", back:"⌫", enter:"↵", shift:(this.shift||this.caps)?"⇪":"⇧", sym:"?123", sym2:"=\\<", abc:"ABC" };
    let label = labels[k] || k;
    if (this.mode === "abc" && k.length === 1 && /[a-z]/.test(k) && (this.shift || this.caps)) label = k.toUpperCase();
    b.textContent = label;
    if (k === "shift" && (this.shift || this.caps)) b.classList.add("active");
    // pointerdown: keep focus in the field, act immediately (feels responsive on touch)
    b.addEventListener("pointerdown", (e) => { e.preventDefault(); this.press(k); });
    return b;
  },
  press(k) {
    Sound.play("key");
    switch (k) {
      case "shift": this.shift ? (this.shift = false, this.caps = true) : this.caps ? (this.caps = false) : (this.shift = true); this.render(); return;
      case "back": this.insert("", true); return;
      case "space": this.insert(" "); break;
      case "enter": this.enter(); return;
      case "sym": this.mode = "sym"; this.shift = this.caps = false; this.render(); return;
      case "sym2": this.mode = "sym2"; this.render(); return;
      case "abc": this.mode = "abc"; this.render(); return;
      case ".com": this.insert(".com"); break;
      default: {
        let ch = k;
        if (this.mode === "abc" && /^[a-z]$/.test(k) && (this.shift || this.caps)) ch = k.toUpperCase();
        this.insert(ch);
      }
    }
    if (this.shift && !this.caps) { this.shift = false; this.render(); }   // one-shot shift
  },
  insert(text, isBack) {
    const el = this.target; if (!el) return;
    try { el.focus({ preventScroll: true }); } catch { el.focus(); }
    let start = el.selectionStart, end = el.selectionEnd;
    const supportsSel = start !== null && start !== undefined;
    if (supportsSel) {
      if (isBack) {
        if (start === end && start > 0) start -= 1;         // delete char before caret
        el.value = el.value.slice(0, start) + el.value.slice(end);
        const pos = start; el.setSelectionRange(pos, pos);
      } else {
        el.value = el.value.slice(0, start) + text + el.value.slice(end);
        const pos = start + text.length; el.setSelectionRange(pos, pos);
      }
    } else {
      // number/email fields may not report a caret — operate on the end
      el.value = isBack ? el.value.slice(0, -1) : el.value + text;
    }
    el.dispatchEvent(new Event("input", { bubbles: true }));
  },
  enter() {
    const el = this.target; if (!el) return;
    const form = el.form || (el.closest && el.closest("form"));
    if (form) {
      if (typeof form.requestSubmit === "function") form.requestSubmit();
      else form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    } else {
      el.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    }
  },
  show() {
    if (!this.el) return;
    this.render();
    this.el.classList.remove("hidden");
    requestAnimationFrame(() => {
      this.el.classList.add("open");
      document.body.classList.add("osk-open");
      // expose real height so centred modals can lift above the keyboard
      const h = this.el.getBoundingClientRect().height;
      if (h) document.documentElement.style.setProperty("--osk-h", h + "px");
    });
  },
  hide() {
    if (!this.el) return;
    this.el.classList.remove("open");
    document.body.classList.remove("osk-open");
    this.target = null;
    setTimeout(() => this.el.classList.add("hidden"), 260);
  },
};

/* ─────────────────────────── Wire-up ────────────────────────────────── */
Keyboard.init();
/* ══════════════════════════════════════════════════════════════════════
   AATF TOP-VIEW REVEAL VIDEO
   A full-screen backdrop (assets/AATF Top View.mp4). At rest it shows the
   first frame — the top view. expand() flies it forward and, when it reaches
   the end (~5s), fires a warp-glow "wasp" burst and pops the icons up.
   collapse() just hides the icons and leaves the footage where it is.
   Falls back to a plain icon reveal if the video can't load or autoplay.
   ══════════════════════════════════════════════════════════════════════ */
const RevealVideo = {
  v: null, stage: null, busy: false, ready: false, END: 5, RATE: 1.4, rraf: 0,
  init() {
    this.stage = $("#reveal-stage");
    this.v = $("#reveal-video");
    if (!this.v) return;
    this.v.src = withV("assets/AATF Top View.mp4");
    this.v.addEventListener("loadedmetadata", () => {
      this.ready = true;
      this.END = this.v.duration && isFinite(this.v.duration) ? this.v.duration : 5;
      this.toFirstFrame();
      this.stage.classList.add("on");        // show the top view as the backdrop
    }, { once: true });
    // paint the very first frame once it's decoded
    this.v.addEventListener("seeked", () => { this.stage.classList.add("on"); }, { once: true });
    this.v.addEventListener("error", () => { this.ready = false; this.stage.classList.remove("on"); });
    this.buildSparks();
    try { this.v.load(); } catch {}
  },
  // create drifting golden glow-orbs (shown after the reveal, via .revealed)
  buildSparks() {
    if (!this.stage || this.stage.querySelector(".rv-sparks")) return;
    const wrap = document.createElement("div"); wrap.className = "rv-sparks"; wrap.setAttribute("aria-hidden", "true");
    const N = 16;
    for (let i = 0; i < N; i++) {
      const s = document.createElement("span"); s.className = "rv-spark";
      const size = 4 + Math.random() * 12;
      s.style.left = (Math.random() * 100).toFixed(2) + "%";
      s.style.top = (Math.random() * 100).toFixed(2) + "%";
      s.style.width = size + "px"; s.style.height = size + "px";
      s.style.setProperty("--dur", (7 + Math.random() * 8).toFixed(1) + "s");
      s.style.setProperty("--tw", (2.4 + Math.random() * 3).toFixed(1) + "s");
      s.style.setProperty("--d", (-Math.random() * 6).toFixed(1) + "s");
      s.style.setProperty("--mx", (Math.random() * 40 - 20).toFixed(0) + "px");
      s.style.setProperty("--my", (-18 - Math.random() * 34).toFixed(0) + "px");
      wrap.appendChild(s);
    }
    this.stage.appendChild(wrap);
  },
  toFirstFrame() { try { this.v.currentTime = 0.04; } catch {} },   // decode & show the top view
  // Forward flight → warp-glow → icons pop up.
  expand() {
    if (this.busy || orbitExpanded) return;
    if (!this.ready) { setOrbit(true); return; }   // graceful fallback
    this.busy = true;
    cancelAnimationFrame(this.rraf);
    this.stage.classList.add("on");
    $("#orbit-stage").classList.add("reveal-playing");
    let done = false;
    const finish = () => {
      if (done) return; done = true;
      this.v.removeEventListener("timeupdate", onTime);
      try { this.v.pause(); this.v.currentTime = Math.max(0, this.END - 0.05); } catch {}
      $("#orbit-stage").classList.remove("reveal-playing");
      this.warp();                 // "wasp" glow burst at the end
      setOrbit(true);              // icons pop up
      this.busy = false;
    };
    const onTime = () => { if (this.v.currentTime >= this.END - 0.12) finish(); };
    this.v.addEventListener("timeupdate", onTime);
    this.v.addEventListener("ended", finish, { once: true });
    try { this.v.currentTime = 0; } catch {}
    const pr = this.v.play();
    if (pr && pr.catch) pr.catch(() => finish());   // autoplay blocked → just reveal
  },
  warp() {
    const b = $("#warp-burst");
    this.v.classList.remove("warp"); if (b) b.classList.remove("fire");
    void this.v.offsetWidth; if (b) void b.offsetWidth;
    this.v.classList.add("warp"); if (b) b.classList.add("fire");
    Sound.play("surge");
  },
  // Collapse: just hide the icons and leave the video exactly where it is
  // (no reverse playback — the footage stays put, per request).
  collapse() {
    if (this.busy || !orbitExpanded) return;
    setOrbit(false);
  },
};

// Press the PMCC logo → fly the AATF top-view video forward; at the end a
// warp-glow burst fires and the section icons pop up. Press again → the icons
// hide and the video reverses back to the top-view first frame.
$(".hub-core").addEventListener("click", () => {
  Sound.ensure(); goFullscreen();
  if (RevealVideo.busy) return;
  if (orbitExpanded) RevealVideo.collapse();
  else RevealVideo.expand();
});
$$("[data-close]").forEach(el => el.addEventListener("click", closeOverlay));
$$("[data-feature-close]").forEach(el => el.addEventListener("click", (e) => closeFeature(e.target.closest(".feature-overlay"))));
$$("[data-search-close]").forEach(el => el.addEventListener("click", closeSearch));
$("#btn-save-settings").addEventListener("click", saveSettings);
$("#btn-reset-settings").addEventListener("click", resetSettings);
// Settings password gate
$("#lock-form").addEventListener("submit", (e) => { e.preventDefault(); tryUnlockSettings(); });
// Preview the currently selected Brother Thomas voice
$("#btn-voice-test").addEventListener("click", () => { Sound.ensure(); Voice.enabled = true; Voice.voice = null; Voice.pick(); Voice.speak("Peace be with you. I am Brother Thomas, and it is my joy to serve you today."); });
// Brother Thomas voice toggle + floating widget
$("#jarvis-voice").addEventListener("click", () => { Sound.play("tap"); Voice.toggle(); });
// chat-row mic → switch into the immersive Voice Mode (waveform only)
$("#jarvis-mic").addEventListener("click", () => { Sound.play("tap"); enterVoiceMode(); });
// voice-mode mic → start/stop listening in place
$("#voice-mic").addEventListener("click", () => { Sound.play("tap"); Listen.toggle(); });
// voice-mode "Type instead" → back to the chat layout
$("#voice-type").addEventListener("click", () => { Sound.play("tap"); exitVoiceMode(); });

// Events HUD widget (Iron-Man style): square ↔ holographic monitor panel
const eventsWidget = document.getElementById("events-widget");
if (eventsWidget) {
  const ewToggle = eventsWidget.querySelector(".ew-toggle");
  const ewSet = (open) => { eventsWidget.classList.toggle("expanded", open); ewToggle.setAttribute("aria-expanded", open ? "true" : "false"); Sound.play(open ? "open" : "back"); };
  ewToggle.addEventListener("click", () => { Sound.ensure(); ewSet(!eventsWidget.classList.contains("expanded")); });
  eventsWidget.querySelectorAll(".ew-item").forEach(btn => btn.addEventListener("click", () => { Sound.play("tap"); toast((btn.dataset.ev || "Event") + " — updates coming soon"); }));
  // collapse when tapping outside the widget
  addEventListener("pointerdown", (e) => { if (eventsWidget.classList.contains("expanded") && !e.target.closest("#events-widget")) ewSet(false); }, true);
}
updateMicButton();
$("#bt-widget").addEventListener("click", () => { Sound.ensure(); Sound.play("open"); openFeature("jarvis"); });
updateVoiceButton();
// Directory flow wiring
$("#dir-back").addEventListener("click", dirBack);
$$("[data-pm-close]").forEach(el => el.addEventListener("click", closeProfile));
// close the category dropdown when clicking outside it (or the DIRECTORY button)
addEventListener("pointerdown", (e) => {
  const dd = $("#dir-dropdown");
  if (dd.classList.contains("hidden")) return;
  if (e.target.closest("#dir-dropdown") || e.target.closest('.dock-btn[data-id="directory"]')) return;
  closeDirDropdown();
}, true);
// close the per-icon name dropdown on outside tap (but not when tapping an icon)
addEventListener("pointerdown", (e) => {
  const m = $("#icon-menu");
  if (m.classList.contains("hidden")) return;
  if (e.target.closest("#icon-menu") || e.target.closest(".orbit-icon")) return;
  closeIconMenu();
}, true);
$("#btn-update").addEventListener("click", () => { $("#update-status").textContent = "Checking…"; Sound.play("tap"); setTimeout(() => { $("#update-status").textContent = "You’re up to date · v2.0"; toast("No updates available — you're current"); }, 1200); });

// Kiosk full-screen: browsers only allow fullscreen from a user gesture, so we
// request it on the very first tap/click (no browser tab/toolbar after that).
function goFullscreen() {
  const el = document.documentElement;
  const req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  if (req && !document.fullscreenElement) { try { const r = req.call(el); if (r && r.catch) r.catch(() => {}); } catch {} }
}
addEventListener("pointerdown", () => { Sound.ensure(); goFullscreen(); }, { once: true });
// F11-style manual toggle for the kiosk operator
addEventListener("keydown", (e) => { if (e.key === "F11") { e.preventDefault(); document.fullscreenElement ? document.exitFullscreen() : goFullscreen(); } });
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!$("#profile-modal").classList.contains("hidden")) return closeProfile();
    if (!$("#icon-menu").classList.contains("hidden")) return closeIconMenu();
    if (!$("#dir-dropdown").classList.contains("hidden")) return closeDirDropdown();
    if (!$("#search").classList.contains("hidden")) return closeSearch();
    const openFeat = $$(".feature-overlay").find(el => !el.classList.contains("hidden"));
    if (openFeat) return closeFeature(openFeat);
    if (activeOverlay) return closeOverlay();
    return orbitExpanded ? RevealVideo.collapse() : setOrbit(false);
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
});

boot();
