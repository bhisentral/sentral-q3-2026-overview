// All copy, stats and figures sourced from "Sentral Overview_Q3 2026.pptx".

export const networkStats = [
  { tag: "Vibrant Cities", num: "23" },
  { tag: "Connected Communities", num: "43", sub: "(+6 developments)" },
  { tag: "Units", num: "~13,000", sub: "(15% furnished)" },
  { tag: "Assets Under Management", num: "$7.0B+" },
  { tag: "Total Revenue / Year", num: "$450M" },
  { tag: "Employees", num: "500" },
];

export const markets = [
  "Seattle (2)", "Portland", "Salt Lake City", "Denver (2)", "Chicago",
  "Pittsburgh", "Philadelphia (2)", "San Francisco (7)", "Oakland", "San Jose",
  "Los Angeles (7)", "Beverly Hills (2)", "West Hollywood", "Santa Monica",
  "San Diego", "Las Vegas", "Scottsdale", "Phoenix (2)", "Nashville",
  "Charlotte (3)", "Atlanta (2)", "Austin (2)", "Houston", "West Palm Beach",
  "Miami (3)",
];

// Network map reuses the high-fidelity asset from the sibling
// sentral-development site (same underlying market data, cleaner render).
// Coverage map is cropped from this deck's own investment-criteria slide.
export const networkMapImage = "map_network.jpg";
export const coverageMapImage = "map_coverage.png";

export const partners = {
  investors: ["ICONIQ", "DivCore", "Ascendant", "Highgate"],
  clients: [
    "Allen Morris Company", "Hines", "DivcoWest", "Strada", "Rockpoint", "PMG",
    "LG Development", "Bridge Investment Group", "Lincoln", "CalSTRS",
    "Lubert Adler", "Mitsui Fudosan America", "BlackRock", "L&B Realty Advisors",
    "Tishman Speyer", "J.P. Morgan", "StockBridge", "Invesco",
    "Wheelock Street Capital", "JMB Realty Corporation", "Witkoff", "Gardner",
  ],
  lenders: [
    "ACORE Capital", "Ares", "Deutsche Bank", "Apollo", "Wells Fargo",
    "Blackstone", "Blue Owl", "Fannie Mae", "Brookfield", "Goldman Sachs",
    "KKR", "Freddie Mac", "J.P. Morgan", "Affinius Capital",
  ],
};

// Reuses the sibling sentral-development site's investor/client/lender
// logo-wall asset — same companies, cleaner render on the shared cream bg.
export const investorLogoWall = "investor_logowall.jpg";

export const leadership = [
  { name: "Roman Speron", title: "Chief Executive Officer", years: "21 yrs experience", prior: "Crescent Heights", photo: "headshot_roman.jpg", logo: "lg_roman.jpg" },
  { name: "Billie Hazley", title: "Chief Operating Officer", years: "22 yrs experience", prior: "Mitsui Fudosan America · Alliance Residential", photo: "headshot_billie.jpg", logo: "lg_billie.jpg" },
  { name: "Wendy Wood", title: "Chief Administrative Officer", years: "24 yrs experience", prior: "Amazon · Gables", photo: "headshot_wendy.jpg", logo: "lg_wendy.jpg" },
  { name: "Nitesh Gandhi", title: "Chief Commercial Officer", years: "16 yrs experience", prior: "Locale", photo: "headshot_nitesh.jpg", logo: "lg_nitesh.jpg" },
  { name: "Farrah Pinnock", title: "SVP, Accounting + Finance", years: "12 yrs experience", prior: "AR Global", photo: "headshot_farrah.jpg", logo: "lg_farrah.jpg" },
  { name: "Elliot Albert", title: "VP, Real Estate", years: "12 yrs experience", prior: "Lubert Adler Real Estate Funds", photo: "headshot_elliot.jpg", logo: "lg_elliot.jpg" },
  { name: "Jenelle Shapiro", title: "VP, Marketing", years: "16 yrs experience", prior: "Sares Regis Group · Pacifica Host Hotels", photo: "headshot_jenelle.jpg", logo: "lg_jenelle.jpg" },
  { name: "Kelly Lombardi", title: "VP, Development", years: "15 yrs experience", prior: "Crescent Heights", photo: "headshot_kelly.jpg", logo: "lg_kelly.jpg" },
  { name: "Nancy Godsk", title: "AVP, Revenue Management", years: "20 yrs experience", prior: "Essex · Hertz", photo: "headshot_nancy.jpg", logo: "lg_nancy.jpg" },
];

export const leadershipStats = [
  { num: "72%", label: "Sentral employees with multifamily experience" },
  { num: "21 yrs", label: "Team member's average years of industry experience" },
];

// Unified 4-stage model powering the interactive dial: NOI Lift steps
// (0 / 5% / 15% / 27%) and Unlevered Yield steps (5.0 / 5.5 / 5.8 / 6.8%)
// both come from the deck's Value Creation Model (p.5) and Illustrative
// Unlevered Yields & Premiums (p.10) — merged into one dataset, one dial.
export const dialStages = [
  {
    key: "traditional",
    tierLabel: "Traditional",
    name: "Outdated Traditional Management",
    dim: true,
    desc: "A model unchanged for decades. Limited corporate leadership support and involvement, most functions outsourced, competing on lowest cost — average returns.",
    rentPremium: "—",
    yield: 5.0,
    noiLift: 0,
    feats: [
      "Unchanged model for decades",
      "Limited corporate leadership support",
      "Most functions outsourced",
      "Competing on lowest cost",
    ],
  },
  {
    key: "base",
    tierLabel: "Sentral Base",
    name: "Sentral Base Management",
    desc: "Whole-building, full-cycle property and asset management with a dynamic lease-up pricing model and an integrated resident app.",
    rentPremium: "20%",
    yield: 5.5,
    noiLift: 5,
    feats: [
      "Base of 20% rent premiums vs. competitors",
      "Whole building, full-cycle property and asset management",
      "Dynamic lease-up pricing model",
      "Integrated resident app & services",
      "Elite reputation scores (89 ORA, 8.81 Reputation.com)",
    ],
  },
  {
    key: "fullservice",
    tierLabel: "Full-Service",
    name: "Full Service Residential",
    desc: "Unique staffing model and talent, advanced events and activations, health & wellness programming, private membership clubs, and F&B partnerships.",
    rentPremium: "39%",
    yield: 5.8,
    noiLift: 15,
    feats: [
      "39% rent premiums vs. competitors (+19% to traditional)",
      "Unique staffing model and talent",
      "Advanced events + activations",
      "Health & wellness programming",
      "Private membership clubs",
      "Food + beverage + retail partnerships",
    ],
  },
  {
    key: "flex",
    tierLabel: "Flex & Furnished",
    name: "Flexible & Furnished Residential",
    desc: "A dynamic, in-house revenue management, sales and marketing engine drives net revenue premiums well beyond traditional multifamily.",
    rentPremium: "30–150%",
    yield: 6.8,
    noiLift: 27,
    feats: [
      "30%–150% net revenue premiums vs. traditional multifamily",
      "300+ corporate accounts",
      "Generated $41M of furnished unit revenue in 2025",
      "Dynamic, in-house revenue management, sales and marketing team",
      "44% direct booking to Sentral.com",
    ],
  },
];

export const hospitalityPillars = [
  { title: "Private Membership Clubs", body: "Monetize amenity spaces and create exclusive, profitable programs for residents and guests." },
  { title: "Food + Beverage + Retail Partnerships", body: "Public, private (residents and guests only) or third-party operated on-site offerings." },
  { title: "Health + Wellness", body: "Fitness-forward outdoor amenities designed to create additional revenue through group and private training led by notable instructors." },
  { title: "Events + Activations", body: "Unique curated experiences that promote adventure, engagement and discovery for residents and guests." },
];

export const flexNetwork = {
  pillars: [
    { title: "Multi-Channel Distribution", body: "Hotel and vacation rental OTAs, business travel platforms, plus direct booking through Sentral.com and corporate accounts." },
    { title: "Sentral Network — Loyalty", body: "Growing network of residents, guests and corporate accounts, with sales, marketing and instant rewards driving direct and repeat bookings." },
    { title: "Flexible Length of Stay", body: "Revenue management prices every length of stay to optimize rate, occupancy and NOI per booking and lease." },
    { title: "Integrated Offering and Operations", body: "Lean on-site staffing backed by vertically-integrated corporate support and tech across revenue, sales, marketing and operations." },
  ],
  stats: [
    { num: "22", label: "Communities" },
    { num: "16", label: "Vibrant cities" },
    { num: "~1,800", label: "Furnished units" },
    { num: "1.6M", label: "Users on Sentral.com" },
    { num: "282", label: "Corporate accounts" },
    { num: "$27M", label: "Direct booking revenue, 2025" },
  ],
};

export const operationalCaseStudies = [
  {
    name: "Star Harbor", badge: "Best-In-Class Multifamily Management Takeovers",
    meta: "372 units · San Francisco", owner: "Strada Investment Group / Arizona SRS",
    photo: "cs_star_harbor.jpg",
    points: [
      "Takeover from Greystar; 5–8% rent premiums with dynamic pricing and 7-day-a-week office hours",
      "Hospitality-trained staff to deliver customer-first environment",
      "Review and rebidding of all operational contracts from incumbent with 20% average savings",
      "Additional services: integrated resident app, package delivery, lifestyle events, and guest suites",
    ],
  },
  {
    name: "Quincy", badge: "Innovative Hospitality Services (Full-Service)",
    meta: "501 units (30 furnished / 6%) · San Francisco", owner: "Strada Investment Group / BlackRock (CalSTRS)",
    photo: "cs_quincy_clean.jpeg",
    points: [
      "15–25% rent premiums through additional services and amenities while leasing over 45 units/month",
      "Dedicated professionals leading sales, experience, and maintenance through the Director model",
      "Hospitality-like standing front desk to improve welcome experience",
      "Implemented membership club, live-in fitness director, package delivery, and retail partnerships",
    ],
  },
  {
    name: "Sentral Michigan Ave", badge: "Market-Leading Flexible Living Operations",
    meta: "479 units (117 furnished / 24%) · Chicago", owner: "ICONIQ Capital",
    photo: "cs_michigan_ave.jpg",
    points: [
      "40–150% rent premiums through flexible-length furnished units",
      "Cross-trained staff to support residents and guests",
      "AI-supported revenue management across all lengths of stay as well as 300+ corporate accounts to support group business",
      "Sentral brand standards to ensure operational and cost efficiencies",
    ],
  },
];

export const codevCaseStudies = [
  {
    name: "Sentral Brickell", badge: "Capital Partnership + Development Services + Management",
    meta: "537 units (100 furnished / 19%) + 266 condos · Miami, FL", owner: "PMG / ICONIQ Capital",
    photo: "cs_brickell.jpg",
    points: [
      "ICONIQ and PMG acquired the 1.16-acre site in 2022, completed entitlement work, capitalized the project and commenced construction in May 2025",
      "Sentral's operating model increases NOI by 15% and un-trended YOC by +80 bps over a conventional multifamily business plan",
    ],
  },
  {
    name: "NORA", badge: "Capital Partnership + Development Services + Management",
    meta: "350 units (40 furnished / 11%) · West Palm Beach, FL", owner: "Wheelock Street Capital / NDT / Sentral / Others",
    photo: "cs_nora.jpg",
    points: [
      "Sentral engaged two years prior to construction to shape design, unit mix, amenities and operations",
      "Sentral positioned NORA to capture the increasing unmet demand for best-in-class rental product in WPB",
      "Project includes 65k+ SF of curated amenities: district-wide members club, poolside pavilion bar, orchard and dedicated fitness/wellness wing",
    ],
  },
  {
    name: "Century Park East", badge: "Development Services + Management",
    meta: "234 units (30 furnished / 13%) · Century City, Los Angeles, CA", owner: "JMB Realty",
    photo: "cs_century_park.jpg",
    points: [
      "JMB engaged Sentral during pre-development to guide the project's design, unit mix, and operations",
      "Driven by Sentral's experience managing best-in-class, highest-rent properties in the submarket",
      "Strategically oversized units with condo-level finishes targeting highest rents on the West Coast",
    ],
  },
];

export const trackRecords = [
  {
    id: "traditional",
    title: "Sentral Traditional Apartment Track Record",
    subtitle: "Select Takeover Results",
    uplift: "4%",
    axisMax: 23,
    rows: [
      ["Walnut Creek #1", 8098603, 7716434, "5%"],
      ["Pittsburgh #1", 4539556, 4458257, "2%"],
      ["Alameda #1", 5934389, 5673940, "5%"],
    ],
    total: ["Total", 18572548, 17848631, "4%"],
    footnotes: [],
  },
  {
    id: "fullservice",
    title: "Sentral Full-Service Apartment Track Record",
    subtitle: "Select Full-Service Results",
    uplift: "15%",
    axisMax: 60,
    rows: [
      ["San Jose #1", 15944488, 13468631, "18%"],
      ["Los Angeles #1*", 2628013, 2163444, "21%"],
      ["San Francisco #1**", 9293879, 7560846, "23%"],
      ["Seattle #1", 2001746, 1872707, "7%"],
      ["San Francisco #2", 11522651, 10668241, "8%"],
      ["Los Angeles #2", 4145706, 3906769, "6%"],
      ["Philadelphia #1", 981368, 937636, "5%"],
    ],
    total: ["Total", 46517851, 40578273, "15%"],
    footnotes: [
      "*Lease-Up (shown at 71% Dec-25 T-3 occupancy)",
      "**Lease-Up (shown at 64% Dec-25 T-3 occupancy)",
    ],
  },
  {
    id: "furnished",
    title: "Sentral Furnished & Flexible Apartment Track Record",
    subtitle: "Select Furnished & Flexible Results",
    uplift: "27%",
    axisMax: 28,
    hasFurnishedCol: true,
    rows: [
      ["Sentral East Austin", 2679888, 2223812, "21%", "27%"],
      ["Sentral Michigan Ave", 10162642, 8509088, "19%", "24%"],
      ["Sentral Wynwood", 5141809, 3906628, "32%", "99%"],
      ["Sentral SoBro", 6908297, 5034289, "37%", "48%"],
    ],
    total: ["Total", 24892635, 19673818, "27%", "47%"],
    footnotes: [],
  },
];

export const ssp = {
  investments: {
    functions: ["Sourcing", "Underwriting", "Financing", "Closing", "Asset Mgmt."],
    partners: [
      { name: "ICONIQ", aum: "$80+ billion assets under management" },
      { name: "DivCore", aum: "$40+ billion assets under management" },
    ],
  },
  operations: {
    functions: ["Leadership", "Operations", "Accounting / Finance", "Technology", "Client Service"],
  },
};

export const investmentCriteria = [
  { k: "Strategy", v: ["Value add acquisitions", "Development (co-GP with developers)"] },
  { k: "Target Markets", v: ["Top 30 U.S. multifamily markets", "Urban and walkable locations"] },
  { k: "Sentral Investment (Equity)", v: ["5%–10%+ of capital commitments", "Up to 100% of capital needs"] },
  { k: "Investment Period", v: ["Flexible"] },
  { k: "Target Leverage", v: ["55%+ LTC"] },
  { k: "Target Project-Level Returns", v: ["Acquisitions: 15%+ gross levered IRR", "Development: 18%+ gross levered IRR"] },
  { k: "Property Management Fee", v: ["2.5%–3.5% on traditional revenue", "6.0%–10.0% on furnished revenue"] },
  { k: "Partnership Economics", v: ["Flexible incentive / promote dependent upon business model"] },
];

export const existingMarkets = [
  "Seattle", "Portland", "San Francisco / Bay Area", "Salt Lake City", "Denver",
  "Los Angeles", "San Diego", "Las Vegas", "Phoenix", "Scottsdale", "Chicago",
  "Pittsburgh", "Nashville", "Charlotte", "Atlanta", "Austin", "Houston",
  "West Palm Beach", "Miami",
];
export const targetMarkets = ["Boston", "New York City", "Washington D.C.", "Philadelphia", "Raleigh", "Dallas", "Tampa"];

export const galleryProperties = [
  { name: "Sol Modern", photo: "gal_sol_modern_clean.jpg" },
  { name: "Figueroa Eight", photo: "gal_figueroa_clean.jpeg" },
  { name: "The Battery", photo: "gal_battery_clean.jpg" },
  { name: "NORA", photo: "gal_nora.jpg" },
  { name: "Sentral West Midtown", photo: "gal_west_midtown.jpg" },
  { name: "Sentral Union Station", photo: "gal_union_station.jpg" },
];

// Numbered eyebrow + italic-accent tagline for each divider band / section
// head, matching the sibling site's "NN · Section Title" convention.
export const sections = {
  network: { num: "02", title: "The Network", tag: "Established & expanding. Proven across the country." },
  partners: { num: "03", title: "The Company We Keep", tag: "Bluechip investors, clients and lenders. They trust Sentral with their assets." },
  leadership: { num: "04", title: "Our Leadership Team", tag: "Owners' mindset. Decades of multifamily and hospitality expertise." },
  valueModel: { num: "05", title: "The Sentral Value Creation Model", tag: "Owners choose the model. Sentral dials up the NOI." },
  residentExperience: { num: "06", title: "The Resident Experience", tag: "Engaging daily programming and events. Curated, and measured." },
  hospitality: { num: "07", title: "Full-Service Residential Hospitality", tag: "Four revenue-generating pillars. Hospitality that pays." },
  flexNetwork: { num: "08", title: "Flexible & Furnished Residential Network", tag: "A second revenue engine. Untapped revenue under the same roof." },
  operational: { num: "09", title: "Operational Expertise", tag: "The model, applied. Value-add upside in core multifamily assets." },
  codev: { num: "10", title: "Co-Development Expertise", tag: "Engaged early. Shaping projects before the first resident moves in." },
  trackRecord: { num: "11", title: "Operating Track Record", tag: "The model, proven in operation. Takeovers, lease-ups and full-service assets." },
  ssp: { num: "12", title: "Sentral Strategic Partners", tag: "Full alignment of capital, ownership and operations." },
  criteria: { num: "13", title: "Investment Criteria", tag: "Where we invest, and on what terms." },
  portfolio: { num: "14", title: "A Look Across the Portfolio", tag: "Coast to coast, one operating standard." },
};
