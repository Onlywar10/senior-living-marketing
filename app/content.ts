// Replace before anyone outside the team sees the page.
export const contact = {
  name: "Adam Bowen",
  role: "Head of Senior Living",
  email: "[EMAIL]",
  phone: "[PHONE]",
};

export const tabs = [
  { href: "/solutions/live-website", label: "Solutions" },
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
  { id: "inquiries", href: "/solutions/more-tours", title: "More Tours", problem: "Inquiries sit overnight, and families can't find what they need.", promise: "Every inquiry reaches your team, and your site is built for Google and AI search." },
] as const;

// The founder's story on the About page, in Adam's words.
export const ourStory = {
  before: [
    { kind: "lead", text: "For our founder, Adam Bowen, the inspiration behind our mission began with his grandfather, Lester Byers." },
    { kind: "p", text: "When Grandpa Lester reached a point in his life where he needed additional care, our family faced a challenge that countless others know all too well: finding a senior living community where he would feel comfortable, engaged, and genuinely cared for." },
    { kind: "p", text: "We spent countless hours researching communities, reading reviews, and scheduling visits. Too often, the websites we encountered offered little more than polished photographs and sales brochures. There was very little meaningful information about daily life, available activities, or what residents and their families could actually expect." },
    { kind: "p", text: "Despite our best efforts, Grandpa Lester moved between several communities as we searched for the right fit and the quality of care he deserved." },
    { kind: "line", text: "But finding the right community was only part of the challenge." },
    { kind: "p", text: "Once Grandpa Lester moved in, staying connected to his daily life proved just as difficult." },
    { kind: "p", text: "We wanted to encourage him to participate in activities, make friends, and enjoy everything his community had to offer. But we often didn't know what was happening or when. Finding out about upcoming events, daily activities, or even something as simple as the weekly menu frequently meant making phone calls and asking questions." },
    { kind: "strong", text: "Information wasn't readily available. Staying involved required constant effort." },
    { kind: "p", text: "And that experience made us realize something important." },
  ],
  pull: "Moving into a senior living community shouldn't mean becoming disconnected from family.",
  after: [
    { kind: "p", text: "For older adults, family involvement can be an important source of encouragement, companionship, and emotional well-being. Yet when families don't know what's happening in a community, opportunities to connect, participate, and encourage their loved ones can easily be missed." },
    { kind: "line", text: "We believe technology can help change that." },
    { kind: "p", text: "That's why we're building a platform designed to bring senior living communities, residents, and their families closer together." },
    { kind: "p", text: "By making community calendars, activities, dining menus, announcements, events, and other important information easily accessible, we help families stay informed and actively involved in their loved ones' lives." },
    { kind: "p", text: "When families know what's happening, they can encourage participation, plan visits around special events, start meaningful conversations, and celebrate everyday moments together—even when they can't be there in person." },
    { kind: "p", text: "For senior living communities, our platform provides an opportunity to showcase the care, experiences, and sense of belonging they work hard to create, while building stronger, more transparent relationships with families." },
    { kind: "line", text: "Our mission goes beyond building better websites." },
    { kind: "p", text: "We want to make it easier for families to find the right community, remain connected after move-in, and continue playing an active role in the lives of the people they love." },
    { kind: "p", text: "Because we believe that stronger family connections can contribute to happier, more engaged residents and a better quality of life." },
  ],
  ending: "Finding the right community is just the beginning. Staying connected is what matters every day.",
};

export const aboutValues = [
  { title: "Your site is yours.", body: "Your website and family contacts belong to you. You can take a full copy of your information at any time." },
  { title: "We tell you what's real.", body: "If we haven't built something yet, we say \u201ccoming.\u201d We don't sell what doesn't exist." },
  { title: "We earn it first.", body: "Founding communities pay nothing until the results we agree on are met." },
  { title: "We speak plain English.", body: "No jargon. If we can't explain it simply, it's our problem, not yours." },
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
