// Replace before anyone outside the team sees the page.
export const contact = {
  name: "Adam Bowen",
  role: "Head of Senior Living",
  email: "[EMAIL]",
  phone: "[PHONE]",
};

export const tabs = [
  { href: "/solutions", label: "Solutions" },
  { href: "/why-kinlight", label: "Why Kinlight" },
  { href: "/examples", label: "Examples" },
  { href: "/offer", label: "The Offer" },
  { href: "/questions", label: "Questions" },
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
    href: "/solutions#post",
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
export const heroOffer = ["We build it. No setup fee.", "You pay nothing until it hits the results we agree on.", "Miss the results and you owe nothing."];

export const problems = [
  { text: "Your website shows last month's calendar.", stamp: "Out of date" },
  { text: "Families call the front desk to ask what's happening.", stamp: "Asked again" },
  { text: "Staff build the same calendar three times.", stamp: "Wasted hours" },
  { text: "Families can't find your prices, so they move on.", stamp: "Moved on" },
  { text: "Inquiries sit overnight. By morning, that family called someone else.", stamp: "Too late" },
];

export const proof = [
  {
    stat: "68% of recent movers and 75% of family helpers",
    rest: "were frustrated that prices weren't on community websites.",
    source: "Creating Results survey, via Next Avenue",
  },
  {
    stat: "Replying within 30 minutes",
    rest: "led to about 15% more move-ins than replying the next day.",
    source: "A Place for Mom, study of 3,700+ communities",
  },
  {
    stat: "Only about half",
    rest: "of calls to senior care providers are answered by a person.",
    source: "Invoca, 2026 senior care benchmarks",
  },
];

export const solutions = [
  { id: "website", href: "/solutions", title: "Live Website", body: "A website that keeps its calendars, menus and floor plans up to date." },
  { id: "post", href: "/solutions/post-once", title: "Post Once", body: "One post goes to your website, families' phones and large-print paper." },
  { id: "family", href: "/solutions/family-messaging", title: "Family Messaging", body: "Weekly highlights and photos by text and email, in each family's language." },
  { id: "conversion", href: "/solutions/conversion-tools", title: "Conversion Tools", body: "Every inquiry goes to your team, and families book tours online." },
];

export const solutionDetails = {
  website: {
    title: "Live Website",
    purpose: "A website that keeps itself up to date.",
    next: { href: "/solutions/post-once", label: "Next: Post Once" },
    steps: [
      { title: "We build it next to your old site", body: "A site for your organization and one for each community, using your content and your brand." },
      { title: "We move everything over", body: "We redirect your old page addresses so your Google rankings carry over." },
      { title: "You check it, then we switch", body: "We agree on a checklist. When it's met, the new site goes live." },
    ],
    included: [
      "This week's menu and activity calendar, live on every community page",
      "Floor plans, what's included, care levels and open apartments",
      "Photos, news, staff bios and virtual tour links",
      "Your license number on every page",
      "Privacy policy and accessibility statement",
      "Accessibility checked every month",
      "Your site in Spanish and other common languages",
      "Built to show up on Google and in tools like ChatGPT",
      "We check what AI tools say about each community and flag mistakes",
      "Your Google Business Profile kept current",
      "A reminder when any page goes stale",
      "We watch your site and get alerted if it goes down",
    ],
  },
  post: {
    title: "Post Once",
    purpose: "One post reaches everyone. Staff stop doing the same job three times.",
    next: { href: "/solutions/family-messaging", label: "Next: Family Messaging" },
    steps: [
      { title: "Staff add it once", body: "An event, a menu or a photo. Or take a photo of your paper calendar and we'll turn it into a live one for staff to check." },
      { title: "A manager approves it", body: "Nothing goes out until the right person says yes." },
      { title: "It goes everywhere", body: "Your website, families' texts and inboxes, and print-ready calendars, menus and flyers." },
      { title: "You see where it went", body: "One screen shows it's on the website, how many families it reached, and that it's ready to print." },
    ],
    included: [
      "Standard and large-print versions of calendars, menus and flyers",
      "A weekly reminder to staff: share one moment from this week",
      "Photo post from a phone: a photo and a sentence, no app",
      "An AI helper that drafts posts from a photo and a line",
      "A weekly family digest built for you, for staff to review",
      "A library of activity ideas and templates, so nothing starts empty",
      "Templates in your community's brand",
      "Attendance counts from a tap list or a photo of the sign-in sheet",
    ],
  },
  family: {
    title: "Family Messaging",
    purpose: "Keeps every family in the loop, in their language.",
    next: { href: "/solutions/conversion-tools", label: "Next: Conversion Tools" },
    steps: [
      { title: "We load your family contacts", body: "Send them to us in any form. We handle the texting registration and consent records." },
      { title: "Families choose what they get", body: "They can sign up themselves and set their own preferences." },
      { title: "They hear from you every week", body: "Highlights, photos, events and news, by text and email, in their language." },
    ],
    included: [
      "Each family gets messages in their own language",
      "Email from your community's own address",
      "Send to one community, care area or interest group",
      "Manager approval before messages go out",
      "Urgent alerts for closures and outbreaks skip the approval step",
      "See who received each message and who didn't",
      "Replies go to the right person on your team",
      "RSVPs for family events, from a link in the message",
      "Quiet hours and limits on how often families hear from you",
      "Families can opt out of one community without leaving the rest",
      "Surveys for families, residents and staff",
      "No app to download",
    ],
  },
  conversion: {
    title: "Conversion Tools",
    purpose: "Turns inquiries into booked tours.",
    next: { href: "/why-kinlight", label: "Next: why Kinlight" },
    steps: [
      { title: "Families get answers", body: "Your menus, calendar, floor plans and care levels are right on the site. A website assistant answers questions day or night." },
      { title: "They book a tour", body: "They pick a time online and get a confirmation." },
      { title: "Your team gets it right away", body: "Every inquiry goes to your CRM or email, tagged by where it came from." },
    ],
    included: [
      "Website assistant that says \u201cI don't know\u201d instead of guessing",
      "Online tour booking with confirmations",
      "Inquiries tagged by source",
      "Waitlist by apartment type",
      "A text with a tour link when your team marks an apartment open",
      "A one-page monthly scorecard for each community",
    ],
    coming: [
      "\u201cStarting at\u201d prices on your floor plans",
      "An instant text back to every new inquiry, day or night",
      "Tour reminders, plus \u201cjoin us for lunch\u201d and open-house sign-ups",
      "A short care assessment that shows families which care fits",
      "A cost comparison: your community against staying at home",
      "A simple way to ask every family for a review",
    ],
  },
};

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

export const pilotOffer = [
  { title: "We build your new website.", body: "No setup fee. We build it next to your current site and set everything up with your team." },
  { title: "You pay nothing until it works.", body: "We agree on the results first. You pay nothing until they're met." },
  { title: "Miss the results and you owe nothing.", body: "As long as you keep your side of the pilot, you owe us nothing and you keep your content." },
  { title: "Hit the results and you get 30% off.", body: "A 12-month contract at 30% off Community Life, locked in." },
  { title: "You help shape it.", body: "You get a direct line to our team and a say in what we build next." },
];

export const pilotPromises = [
  { title: "Always current", body: "If a menu or calendar is more than 7 days out of date because of us, that month is free." },
  { title: "Safe switch", body: "No broken pages and no lost search rankings when we move your site, or we fix it and credit a month." },
];

export const pilotAsks = [
  "A named contact, and a staff champion in each community",
  "Short feedback calls",
  "A switch to the new site once it meets the checklist we agree on. If you decide not to switch, the pilot ends.",
];

export const faqs = [
  {
    q: "What does it cost?",
    a: "During the pilot, nothing until the results we agree on are met. Then you get a 12-month contract at 30% off. Book a meeting and we'll walk you through it.",
  },
  {
    q: "Do we have to replace our current website?",
    a: "Yes. Kinlight becomes your website. We build it next to your current one, and you switch once it meets the checklist we agree on.",
  },
  {
    q: "How much staff time does it take?",
    a: "Minutes a week. Post once and it goes everywhere.",
  },
  {
    q: "What about families who don't use email or apps?",
    a: "We text them. We also prepare large-print calendars for residents, ready to print. There's no app to download.",
  },
  {
    q: "Who owns our website and family contacts?",
    a: "You do. You can take a full copy of your information at any time.",
  },
  {
    q: "Is family information private?",
    a: "We never sell it, and we never share it for anyone else's marketing. We'll show you exactly how we handle it, including under California privacy law.",
  },
  {
    q: "Does it work with our CRM?",
    a: "Inquiries reach your team right away, by email or in your CRM where we can connect to it. Tell us which one you use and we'll give you a straight answer.",
  },
  {
    q: "What happens after the pilot?",
    a: "Hit the results: you move to a 12-month contract at 30% off. Miss them: if you kept your side of the pilot, you owe nothing and you keep your content.",
  },
];
