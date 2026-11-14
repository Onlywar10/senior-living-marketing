// Replace before anyone outside the team sees the page.
export const contact = {
  name: "Adam Bowen",
  role: "Head of Senior Living",
  email: "[EMAIL]",
  phone: "[PHONE]",
};

export const tabs = [
  { href: "/solutions/family-connection", label: "Solutions" },
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
    alt: "Preview of the demo's page for families: the Community news step, with the website sign-up form where families pick their language and choose text, email or both.",
    href: "https://senior-living-demo-five.vercel.app/phones",
    cta: "Open the phone preview",
    external: true,
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
export const heroOffer = ["Your first 3 months free, guaranteed. No setup fee.", "You only stay on if we keep every promise. If not, you owe nothing."];

// What it's like now, everyday life first, then what it costs the business.
export const problems = [
  { text: "Families call the front desk to ask what's happening.", stamp: "Staff time" },
  { text: "Your website shows last month's calendar.", stamp: "Lost trust" },
  { text: "Staff build the same calendar three times.", stamp: "Wasted hours" },
  { text: "Families can't find your prices, so they move on.", stamp: "Lost prospect" },
  { text: "Inquiries sit overnight. By morning, that family called someone else.", stamp: "Lost move-in" },
  { text: "People searching for the right place for a loved one see only a sales brochure, and move on.", stamp: "Lost interest" },
];

// Catapult proof points for the band under the hero. Wording deliberately leaves out schools.
export const trustLine = "building and running websites since 2000.";
export const trustPoints = [
  { lead: "Hundreds", rest: "of websites hosted today" },
  { value: 25, suffix: "+", rest: "years of experience" },
  { value: 100, suffix: "+", rest: "languages for family messages" },
  { lead: "Monthly", rest: "accessibility checks" },
];

// The one statistic on the home page: the only one strong enough to keep.
export const proof = {
  value: 45,
  suffix: "%",
  rest: "Loneliness is linked to a 45% higher risk of death in older adults, and social isolation to a 29% higher risk.",
  link: "Kinlight invites families into their loved one's everyday life: the week's highlights and photos, and invitations to join in, all in their own language.",
};

// The four solutions, engagement first. Same names and order in the menu, on the home page and on their pages.
export const solutions = [
  { id: "family", href: "/solutions/family-connection", title: "Family Connection", problem: "Families call the front desk to ask what's happening this week.", promise: "Families who feel close to daily life, in their own language." },
  { id: "website", href: "/solutions/live-website", title: "Live Website", problem: "Our website is a brochure. It still shows last month's calendar.", promise: "A website that shows what life is really like there, not a brochure." },
  { id: "post", href: "/solutions/post-once", title: "Post Once", problem: "Our activities team builds the same calendar three times.", promise: "One post reaches your website, your families and paper." },
  { id: "inquiries", href: "/solutions/more-tours", title: "Every Inquiry Answered", problem: "Families have questions at 11 at night, and the website can only say “book a tour.”", promise: "A website chat that answers real questions about daily life, and every inquiry and tour request at your front desk." },
] as const;

/** Where "Solutions" opens: the first solution. */
export const solutionsHref = solutions[0].href;

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
  { title: "We earn it first.", body: "Founding communities get their first 3 months free, and only stay on if we've kept every promise." },
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
  { title: "We build it.", body: "Your new website is up and running within 30 days, moved over with nothing lost. We set up your calendars, menus and family list." },
  { title: "Your team posts.", body: "A few minutes a week. Or take a photo of your paper calendar and we'll turn it into a live one." },
  { title: "We keep our promises.", body: "Your first 3 months are free. If we miss a promise, you owe nothing." },
];

// The offer, from the alpha agreement (vault: 07 Deliverables/Alpha Agreement). Sell it here; the fine print is for the meeting.
export const pilotOffer = [
  { title: "Your first 3 months are free.", body: "Guaranteed, with no setup fee. We build your new website and set everything up with your team." },
  { title: "You only stay if we deliver.", body: "Kept every promise? You stay on for 9 more months at our normal price. Missed one? You owe nothing." },
  { title: "You help shape it.", body: "You get a direct line to our team and a say in what we build next." },
];

// Our promises, benefit first. Each is one we fully control, so together they are the guarantee.
export const pilotPromises = [
  { title: "Your website, up and running in 30 days.", body: "Built beside your current site and moved over with nothing lost, with calendars, menus and family texting ready to go.", stamp: "30 days" },
  { title: "Real life on every community page.", body: "This week's menu, the activity calendar and recent news, on every page, every week.", stamp: "Every week" },
  { title: "No question left waiting.", body: "Every website inquiry and tour request gets an automatic reply, day or night, and reaches your front desk within 5 minutes.", stamp: "Day or night" },
  { title: "Found on Google and AI search.", body: "Your communities show up correctly on Google and in AI tools like ChatGPT.", stamp: "Google + AI" },
  { title: "One post reaches the website, families and print.", body: "Your staff post once. It reaches your website, families' phones in their own language, and large-print paper. Nothing goes out without the approval your rules require.", stamp: "Post once" },
  { title: "A monthly scorecard.", body: "Every month you see it working, in plain numbers.", stamp: "Every month" },
];

// What we ask in return. Kept short: the details are for the meeting.
export const pilotAsks = ["Use Kinlight every week: post what's happening and keep calendars and menus current.", "Share your family contacts, in any form.", "Give us honest feedback, so we can make it better."];

export const faqs = [
  {
    q: "Will we lose our Google rankings when we switch?",
    a: "We redirect every old page address so your rankings carry over. Moving you over with nothing lost is one of our promises. If we miss it, you owe nothing.",
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

// The people Kinlight brings closer to everyday life, for the section after the hero. Engagement first; the people
// choosing where to live next come last, as a hint rather than the headline.
export const circle = {
  heading: "Everyone in your community, closer to everyday life.",
  lede: "Built for the people who run your community. Loved by families. Used by residents. And the people choosing where to live next can see it too.",
  items: [
    { who: "Residents", title: "Know what's going on, and join in.", body: "Every week, each resident gets a link to their own week: what's happening, with the activities they'll enjoy picked out. One tap saves their seat." },
    { who: "Families", title: "Feel part of everyday life.", body: "The week's highlights and photos by text and email, in their own language. They can RSVP to family events and know what to ask about when they call.", href: "https://senior-living-demo-five.vercel.app/phones", cta: "See a family's phone" },
    { who: "Your team", title: "Minutes a week, not hours.", body: "Post an activity once. It reaches residents, families, your website and paper. Each morning, everyone sees what needs them today.", href: "https://senior-living-demo-five.vercel.app/staff", cta: "Open the staff area" },
    { who: "Your next residents", title: "See what makes you different.", body: "This week's activities, meals and photos on your website, and a chat that answers their questions about daily life at any hour, in their own language. They see real life, not a brochure.", href: "https://senior-living-demo-five.vercel.app/", cta: "Open a community website" },
  ],
};

// The lifecycle, from a family's first search to years of living there.
export const lifecycle = {
  heading: "From first look to fifth year.",
  lede: "Kinlight is there at every stage, for the resident and the family beside them.",
  stages: [
    { stage: "Looking", title: "A family searches at 11 at night.", body: "They find this week's calendar, tonight's dinner and real photos, and their question gets an answer right away." },
    { stage: "Deciding", title: "They come to see for themselves.", body: "They book a tour at any hour. Your team sees it on their day, with what the family asked." },
    { stage: "Moving in", title: "Welcome, from day one.", body: "Their interests are noted, family members are invited to join, and a welcome post goes up with their permission." },
    { stage: "Living there", title: "Something good every week.", body: "Their week page picks out what they'll enjoy, with a reminder before it starts. One tap saves a seat." },
    { stage: "Staying close", title: "Family, in the loop.", body: "Highlights, photos and what's coming, every week, in each family's language. Families who feel close stay close." },
  ],
};

// What the founding communities will measure. No borrowed statistics: our own numbers, from the monthly scorecard.
export const pilotMeasures = {
  heading: "What our founding communities will measure.",
  lede: "No borrowed statistics. We'll measure what changes in your community, every month, and show you in plain numbers.",
  items: [
    "Families reached each week",
    "Residents who sign up from their week page",
    "Questions answered, and how fast",
    "Staff minutes each week",
    "Inquiries and tours, before and after",
  ],
  note: "With your permission, we'll share what we learn with other operators after the first 3 months.",
};
