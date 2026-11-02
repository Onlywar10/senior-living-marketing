export type SolutionId = "website" | "post" | "family" | "inquiries";

export type IconName = "globe" | "pages" | "share" | "translate" | "calendar" | "bell" | "palette" | "chart" | "check" | "access" | "license" | "pulse" | "send" | "route" | "print" | "book" | "camera" | "spark" | "mail" | "target" | "ticket" | "users" | "reply" | "idea" | "survey" | "home" | "alert" | "chat" | "search" | "shield";

type Feature = { icon: IconName; name: string; benefit: string };
type Stat = { lead?: string; value?: number; suffix?: string; big?: string; text: string; source: string; link?: string };
type Tile = { label: string; value: number; suffix?: string; note?: string; highlight?: boolean };

export type SolutionDetail = {
  groups: { theme: string; features: Feature[] }[];
  proof: Stat[];
  proofHeading: string;
  scorecard: Tile[];
  faqs: { q: string; a: string }[];
  next: { href: string; label: string };
};

export const solutionDetails: Record<SolutionId, SolutionDetail> = {
  website: {
    groups: [
      {
        theme: "Your sites",
        features: [
          { icon: "globe", name: "A site for every community", benefit: "One for your organization and one for each community, moved over from your old site for you." },
          { icon: "pages", name: "Community pages", benefit: "This week's menu, the activity calendar, news, photos and care team bios on every community page." },
          { icon: "share", name: "Shared content", benefit: "Post one update and it appears on all your communities' sites." },
          { icon: "translate", name: "A translated website", benefit: "Your site and event pages in Spanish and other common languages." },
        ],
      },
      {
        theme: "Always current",
        features: [
          { icon: "calendar", name: "Live calendars and menus", benefit: "Brought in from a PDF or a photo, checked by your staff, and live on your site." },
          { icon: "bell", name: "Stale-page reminders", benefit: "Each page has an owner, who gets a nudge when it needs updating." },
        ],
      },
      {
        theme: "Easy to run",
        features: [
          { icon: "palette", name: "Design studio for your website", benefit: "Templates in your brand, filled in from your calendar and menus." },
          { icon: "chart", name: "Website numbers", benefit: "See visits for each community and who updated what." },
        ],
      },
      {
        theme: "Peace of mind",
        features: [
          { icon: "check", name: "Approval before publishing", benefit: "The right person says yes before anything goes live." },
          { icon: "access", name: "Accessibility", benefit: "Built for accessibility, and checked every month." },
          { icon: "license", name: "Compliance basics", benefit: "Your license number, privacy policy and accessibility statement on every site." },
          { icon: "pulse", name: "Uptime monitoring", benefit: "We watch your site and get an alert if it goes down." },
        ],
      },
    ],
    proofHeading: "Your community is better than your website shows.",
    proof: [
      {
        value: 68,
        suffix: "%",
        text: "of people who toured a senior living community were surprised how nice it was, despite seeing pictures online.",
        source: "Caring.com survey of 1,181 people who toured, 2015",
        link: "Show families what life is really like before they ever tour.",
      },
    ],
    scorecard: [
      { label: "Website freshness", value: 96, suffix: "%", note: "of pages up to date", highlight: true },
      { label: "Posts", value: 14 },
      { label: "Families reached", value: 214 },
      { label: "Family update views", value: 142 },
    ],
    faqs: [
      { q: "Will we lose our Google rankings when we switch?", a: "We redirect your old page addresses to protect your rankings. If the move breaks a page, we fix it." },
      { q: "Who owns the site?", a: "You own your content and family contacts, and you can get a full export." },
      { q: "Can each community have its own look?", a: "Each community gets its own site and pages, built from your organization's shared templates and branding. Tell us what you have in mind in your meeting." },
    ],
    next: { href: "/solutions/post-once", label: "Next solution: Post Once" },
  },
  post: {
    groups: [
      {
        theme: "Post once",
        features: [
          { icon: "send", name: "One step to everywhere", benefit: "Publish to your website, your families and print in one step." },
          { icon: "route", name: "The “Where it went” screen", benefit: "See your post on every channel, and how many families it reached." },
        ],
      },
      {
        theme: "Print made easy",
        features: [
          { icon: "print", name: "Large-print calendars, menus and flyers", benefit: "The same post, ready to print in standard and large type." },
          { icon: "palette", name: "Design studio for print", benefit: "Print templates in your community's brand." },
          { icon: "book", name: "Content library", benefit: "Activity ideas and templates, so nothing starts empty." },
        ],
      },
      {
        theme: "Make it a habit",
        features: [
          { icon: "camera", name: "Weekly reminder and photo post", benefit: "A nudge each week. Take a photo, add a sentence, send. No app to download." },
          { icon: "spark", name: "Writing help", benefit: "An AI assistant drafts posts from a photo and a line, for your staff to check." },
        ],
      },
    ],
    proofHeading: "Stop doing the same job three times.",
    proof: [
      {
        big: "3 → 1",
        text: "The website calendar, the flyer and the family update become one post.",
        source: "An example of how it works, not a measured result. We'll share real staff-time results after the pilot.",
      },
    ],
    scorecard: [
      { label: "Posts this month", value: 14, note: "14 on the website, 11 to families, 6 printed", highlight: true },
      { label: "Families reached", value: 214 },
      { label: "Website freshness", value: 96, suffix: "%" },
      { label: "Family update views", value: 142 },
    ],
    faqs: [
      { q: "How long does posting take each week?", a: "Our goal is a few minutes: a photo and a sentence from a phone. We measure it with you during the pilot." },
      { q: "Can a manager approve posts first?", a: "Yes. A manager approves before anything goes out. Emergency alerts, like a closure, can skip that step." },
      { q: "What if we only have a paper calendar?", a: "Take a photo of it. We turn it into live entries, and your staff check them." },
    ],
    next: { href: "/solutions/family-connection", label: "Next solution: Family Connection" },
  },
  family: {
    groups: [
      {
        theme: "Reach every family",
        features: [
          { icon: "mail", name: "Text and email messages", benefit: "Families get updates where they already are, with no app to download." },
          { icon: "target", name: "The right families", benefit: "Send to one community, care area or interest group." },
          { icon: "translate", name: "Each family's language", benefit: "One message, translated person by person." },
          { icon: "check", name: "Manager approval", benefit: "Messages get a yes before they go out. Emergency alerts can skip it." },
          { icon: "route", name: "Delivery tracking", benefit: "See who got each message, and who didn't." },
          { icon: "shield", name: "Email from your own address", benefit: "Messages come from your community's own address, not ours." },
        ],
      },
      {
        theme: "Bring them in",
        features: [
          { icon: "ticket", name: "Event RSVPs", benefit: "Families RSVP from a link in the text or email." },
          { icon: "users", name: "Attendance tracking", benefit: "Tap names on a phone, or take a photo of the sign-in sheet." },
        ],
      },
      {
        theme: "Hear back",
        features: [
          { icon: "reply", name: "Reach and replies", benefit: "See how many families you reached. Replies go to the right person." },
          { icon: "idea", name: "Resident suggestions", benefit: "On paper or by QR code, logged for your activity team." },
          { icon: "survey", name: "Built-in surveys", benefit: "For residents, families and staff. Printable, or read aloud." },
        ],
      },
    ],
    proofHeading: "Connection matters to everyone in your community.",
    proof: [
      {
        lead: "Almost ",
        value: 15,
        suffix: "%",
        text: "In assisted living, residents and families who feel engaged are almost 15% more likely to recommend their community.",
        source: "Holleran research, via McKnight's Senior Living, 2019",
        link: "Families who feel close are the ones who recommend you.",
      },
      {
        value: 45,
        suffix: "%",
        text: "Loneliness is linked to a 45% higher risk of death in older adults.",
        source: "Perissinotto et al., Archives of Internal Medicine, 2012",
        link: "Real connection with family matters, and it starts with knowing what's happening.",
      },
    ],
    scorecard: [
      { label: "Families reached", value: 214, note: "of 221 families", highlight: true },
      { label: "Family update views", value: 142, note: "this month", highlight: true },
      { label: "Posts", value: 14 },
      { label: "Website freshness", value: 96, suffix: "%" },
    ],
    faqs: [
      { q: "Do families need to download an app?", a: "No. It's texts and email." },
      { q: "How do families sign up?", a: "We load the contacts you already have, and families can sign up themselves and set their preferences." },
      { q: "Can we choose who gets each message?", a: "Yes. Send to one community, a care area or an interest group." },
    ],
    next: { href: "/solutions/inquiries-tours", label: "Next solution: Inquiries & Tours" },
  },
  inquiries: {
    groups: [
      {
        theme: "Show what families need",
        features: [
          { icon: "home", name: "Apartments and floor plans", benefit: "Floor plans, what's included, care levels and what's open, kept up to date by your staff." },
          { icon: "alert", name: "Waitlist and availability alerts", benefit: "When your team marks an apartment open, the waitlist gets a message with a tour link." },
        ],
      },
      {
        theme: "Get every inquiry to your team",
        features: [
          { icon: "mail", name: "Inquiry form", benefit: "An “ask about living here” form on every community site." },
          { icon: "chat", name: "Website assistant", benefit: "An AI chat that answers from your own content, and says so when it doesn't know." },
          { icon: "send", name: "Sent to your sales system", benefit: "Every inquiry goes to your sales system or email, marked with where it came from." },
        ],
      },
      {
        theme: "Make touring easy",
        features: [
          { icon: "calendar", name: "Online tour booking", benefit: "Families pick a time, day or night." },
          { icon: "check", name: "Tour confirmations", benefit: "Families who ask get a confirmation." },
        ],
      },
      {
        theme: "Get found",
        features: [
          { icon: "search", name: "Show up when families search", benefit: "Your site is built to show up on Google and when families ask ChatGPT or Google's AI." },
          { icon: "spark", name: "Checks on what AI tools say", benefit: "We look at what AI tools say about each community and flag mistakes." },
          { icon: "globe", name: "Your Google Business Profile", benefit: "Kept current with your events and menus." },
        ],
      },
    ],
    proofHeading: "When families reach out, speed matters.",
    proof: [
      {
        lead: "About ",
        value: 15,
        suffix: "%",
        text: "larger share of move-ins when replying within 30 minutes instead of within 24 hours.",
        source: "A Place for Mom, study of 3,700+ communities",
        link: "Every inquiry reaches your team, so they can reply fast.",
      },
      {
        lead: "Almost ",
        value: 50,
        suffix: "%",
        text: "of families A Place for Mom helps need a quick solution because of an urgent health need.",
        source: "A Place for Mom, 2016",
        link: "Families in a hurry find answers on your site, at any hour.",
      },
    ],
    scorecard: [
      { label: "Inquiries this month", value: 18, note: "11 from your website, 5 from Google, 2 from referrals", highlight: true },
      { label: "Website freshness", value: 96, suffix: "%" },
      { label: "Families reached", value: 214 },
      { label: "Posts", value: 14 },
    ],
    faqs: [
      { q: "Does this work with our current sales system?", a: "Inquiries go to your sales system where we can connect to it, or to your email. Tell us which one you use and we'll give you a straight answer." },
      { q: "What does the chat say if it doesn't know an answer?", a: "It says it doesn't know, rather than guessing, and points the family to your inquiry form." },
      { q: "Do we have to show prices?", a: "No. Your site shows floor plans, what's included, care levels and what's open. Ask us about prices in your meeting." },
    ],
    next: { href: "/offer", label: "Next: the offer" },
  },
};
