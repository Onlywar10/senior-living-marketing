// Replace before anyone outside the team sees the page.
export const contact = {
  name: "Adam Bowen",
  role: "Head of Senior Living",
  email: "[EMAIL]",
  phone: "[PHONE]",
};

export const tabs = [
  { href: "/solutions/live-website", label: "Solutions" },
  { href: "/why-kinlight", label: "Why Kinlight" },
  { href: "/examples", label: "Examples" },
  { href: "/offer", label: "The Offer" },
  { href: "/about", label: "About Us" },
];

export const bookHref = "/offer#book";

// The three previews on the Examples page. Swap image or href as each one is ready.
export const examples = [
  {
    title: "Your website",
    body: "Live calendars, menus, floor plans and tour booking, for every community.",
    image: "/previews/your-website.png",
    alt: "Preview of a senior living website with a large headline, photos and buttons to find a community.",
    href: "https://senior-living-demo-five.vercel.app/",
    cta: "Open the website",
    external: true,
  },
  {
    title: "Your communications",
    body: "One post goes out by text and email, in each family's language, and onto large-print paper.",
    image: "/previews/your-communications.png",
    alt: "Preview of a family text message about an ice cream social, next to a large-print weekly calendar.",
    href: "/solutions/post-once",
    cta: "Watch it work",
    external: false,
  },
  {
    title: "Your management portal",
    body: "Post, approve, and see families reached, tours booked and website freshness in one place.",
    image: "/previews/your-portal.png",
    alt: "Preview of a staff dashboard with families reached, messages sent, tours booked and a website visits chart.",
    href: "https://senior-living-demo-five.vercel.app/staff",
    cta: "Open the portal",
    external: true,
  },
];

export const sampleCommunity = "Wren Hollow";

// The short version of the offer, on the first screen.
export const heroOffer = ["We build it. No setup fee.", "You pay nothing until it hits the results we agree on."];

// Ordered by what each one costs an owner, most expensive first.
export const problems = [
  { text: "Inquiries sit overnight. By morning, that family called someone else.", stamp: "Lost move-in" },
  { text: "Families can't find your prices, so they move on.", stamp: "Lost prospect" },
  { text: "Your website shows last month's calendar.", stamp: "Lost trust" },
  { text: "Staff build the same calendar three times.", stamp: "Wasted hours" },
  { text: "Families call the front desk to ask what's happening.", stamp: "Staff time" },
];

// Catapult proof points for the band under the hero. Wording deliberately leaves out schools.
export const trustLine = "building and running websites since 2000.";
export const trustPoints = [
  { lead: "Hundreds", rest: "of websites hosted today" },
  { value: 25, suffix: "+", rest: "years of experience" },
  { value: 100, suffix: "+", rest: "languages for family messages" },
  { lead: "Monthly", rest: "accessibility checks" },
];

export const proof = [
  {
    lead: "Almost ",
    value: 15,
    suffix: "%",
    rest: "In assisted living, residents and families who feel engaged are almost 15% more likely to recommend their community.",
    source: "Holleran, benchmarks from 200,000+ people, via McKnight's Senior Living",
    link: "Kinlight keeps families in the loop every week, by text and email.",
  },
  {
    lead: "About ",
    value: 15,
    suffix: "%",
    rest: "larger share of move-ins when replying within 30 minutes instead of within 24 hours.",
    source: "A Place for Mom, study of 3,700+ communities",
    link: "Kinlight sends every inquiry straight to your team, by email or to your CRM.",
  },
  {
    value: 45,
    suffix: "%",
    rest: "Loneliness is linked to a 45% higher risk of death in older adults, and social isolation to a 29% higher risk.",
    source: "Perissinotto et al., 2012; Holt-Lunstad et al., 2015",
    link: "Kinlight sends the week's highlights and photos to every family, in their language.",
  },
];

// The four solutions. Same names and order in the menu, on the home page and on their pages.
export const solutions = [
  { id: "website", href: "/solutions/live-website", title: "Live Website", problem: "Our website is a brochure. It still shows last month's calendar.", promise: "A website that shows what life is really like there, not a brochure." },
  { id: "post", href: "/solutions/post-once", title: "Post Once", problem: "Our activities team builds the same calendar three times.", promise: "One post reaches your website, your families and paper." },
  { id: "family", href: "/solutions/family-connection", title: "Family Connection", problem: "Families call the front desk to ask what's happening this week.", promise: "Families who feel close to daily life, in their own language." },
  { id: "inquiries", href: "/solutions/inquiries-tours", title: "Inquiries & Tours", problem: "Inquiries sit overnight, and families can't find what they need.", promise: "Every inquiry reaches your team, and your site is built for Google and AI search." },
] as const;

export const aboutValues = [
  { title: "Your site is yours.", body: "Your website and family contacts belong to you. You can take a full copy of your information at any time." },
  { title: "We tell you what's real.", body: "If we haven't built something yet, we say \u201ccoming.\u201d We don't sell what doesn't exist." },
  { title: "We earn it first.", body: "Founding communities pay nothing until the results we agree on are met." },
  { title: "We speak plain English.", body: "No jargon. If we can't explain it simply, it's our problem, not yours." },
];

export const comparison = {
  rows: ["Website", "Up to date?", "Families", "Who owns it"],
  columns: [
    {
      name: "A website agency",
      cells: ["A nice site.", "Only when you ask and pay.", "Not part of the job.", "Sometimes they do."],
    },
    {
      name: "An engagement app",
      cells: ["Rarely touches your website.", "Only inside the app.", "They have to log in.", "Your site isn't part of it."],
    },
    {
      name: "Kinlight",
      highlight: true,
      cells: ["Built for senior living.", "Yes. One post updates it.", "Text and email. Nothing to download.", "You do."],
    },
  ],
};

export const catapultPoints = [
  "One dashboard for many sites",
  "Approval before anything goes out",
  "Accessibility checked every month",
  "Text and email translated into 100+ languages",
];

// What a family finds on each kind of site, for the Real life section. Sample wording.
export const brochureVsLife = [
  { topic: "Activities", brochure: "\u201cEngaging activities\u201d", life: "Chair yoga at 10. Ice cream social at 2, in the garden." },
  { topic: "Photos", brochure: "Stock photos of models", life: "Yesterday's garden club and this week's family visits." },
  { topic: "Meals", brochure: "\u201cChef-prepared dining\u201d", life: "Tonight: roast chicken, green beans, lemon cake." },
  { topic: "Families", brochure: "One old quote, with no name", life: "Notes from families this week." },
  { topic: "Apartments", brochure: "\u201cCall for pricing\u201d", life: "One-bedroom floor plan, what's included, 2 open." },
  { topic: "Last updated", brochure: "2021", life: "Today" },
];

export const howSteps = [
  { title: "Book a meeting.", body: "We learn about your communities, show you what your site could look like, and check the fit." },
  { title: "We build it.", body: "We move your current site over, with no broken pages and no lost search rankings. We set up your calendars, menus and family list." },
  { title: "Your team posts.", body: "A few minutes a week. Or take a photo of your paper calendar and we'll turn it into a live one." },
  { title: "We check the results we agreed on.", body: "You pay nothing until we hit them." },
];

export const pilotOffer = [
  { title: "We build your new website.", body: "No setup fee. We build it next to your current site and set everything up with your team." },
  { title: "You pay nothing until it works.", body: "We agree on the results first. You pay nothing until they're met." },
  { title: "You help shape it.", body: "You get a direct line to our team and a say in what we build next." },
];

export const pilotPromises = [
  { title: "Always current", body: "If a menu or calendar is more than 7 days out of date because of us, that month is free." },
  { title: "Safe switch", body: "No broken pages and no lost search rankings when we move your site, or we fix it and credit a month." },
];

export const pilotAsks = [
  "A named contact, and a staff champion in each community",
  "Weekly posts, honest feedback and short surveys, so we can measure results",
  "A switch to the new site once it meets our agreed checklist, and a case study if we hit the results",
];

export const faqs = [
  {
    q: "Will we lose our Google rankings when we switch?",
    a: "We redirect your old page addresses so your rankings carry over. If the move breaks a page or costs you rankings, we fix it and credit a month.",
  },
  {
    q: "Who owns our website and family contacts?",
    a: "You do. You can take a full copy of your information at any time.",
  },
  {
    q: "How much staff time does it take?",
    a: "Minutes a week. Post once and it goes everywhere.",
  },
  {
    q: "What do families need to download?",
    a: "Nothing. Families get texts and email.",
  },
];
