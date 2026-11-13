export type SolutionId = "website" | "post" | "family" | "inquiries";

export type IconName = "globe" | "pages" | "share" | "translate" | "calendar" | "bell" | "palette" | "chart" | "check" | "access" | "license" | "pulse" | "send" | "route" | "print" | "book" | "camera" | "spark" | "mail" | "target" | "ticket" | "users" | "reply" | "idea" | "survey" | "home" | "alert" | "chat" | "search" | "shield";

// visual and caption make a feature card expandable, with a quick graphic (see feature-visuals.tsx).
type Feature = { icon: IconName; name: string; benefit: string; visual?: string; caption?: string };
type Stat = { lead?: string; value?: number; suffix?: string; big?: string; text: string; source: string; link?: string };

export type SolutionDetail = {
  groups: { theme: string; features: Feature[] }[];
  proof: Stat[];
  proofHeading: string;
  faqs: { q: string; a: string }[];
  next: { href: string; label: string };
};

export const solutionDetails: Record<SolutionId, SolutionDetail> = {
  website: {
    groups: [
      {
        theme: "Your sites",
        features: [
          { icon: "globe", name: "A site for every community", benefit: "One for your organization and one for each community, moved over from your old site for you.", visual: "sites", caption: "Your organization's site at the top, and a site for each community below it. We move your old pages over for you." },
          { icon: "pages", name: "Community pages", benefit: "This week's menu, the activity calendar, news, photos and care team bios on every community page.", visual: "community-page", caption: "Our demo community's home page: what's happening today sits right under the welcome. The next morning, it has moved on to the new day by itself." },
          { icon: "share", name: "Shared content", benefit: "Post one update and it appears on all your communities' sites.", visual: "shared", caption: "Write one update, like flu shots this Thursday, and it appears on every community's site at once." },
          { icon: "translate", name: "A translated website", benefit: "Your site and event pages in Spanish and other common languages.", visual: "translated", caption: "Our demo site switches from English to Spanish in one tap, and Chinese is there too." },
        ],
      },
      {
        theme: "Always current",
        features: [
          { icon: "calendar", name: "Live calendars and menus", benefit: "Brought in from a PDF or a photo, checked by your staff, and live on your site.", visual: "calendar-import", caption: "Snap a whiteboard, a paper calendar or a PDF. Kinlight reads it and proposes the week, and your staff check only what's unclear before it goes live." },
          { icon: "bell", name: "Stale-page reminders", benefit: "Each page has an owner, who gets a nudge when it needs updating.", visual: "stale", caption: "The Freshness list shows who owns each page and when it's due. When one is due, its owner gets a nudge to update it." },
        ],
      },
      {
        theme: "Easy to run",
        features: [
          { icon: "palette", name: "Design studio for your website", benefit: "Templates in your brand, filled in from your calendar and menus.", visual: "studio", caption: "Your kitchen brings in the menu it already has. Today's specials go live on the website, and into the newsletter, texts and a printed menu card in your brand." },
          { icon: "chart", name: "Website numbers", benefit: "See visits for each community and who updated what.", visual: "numbers", caption: "The monthly scorecard shows website visits, families reached and posts published, next to last month." },
        ],
      },
      {
        theme: "Peace of mind",
        features: [
          { icon: "check", name: "Approval before publishing", benefit: "The right person says yes before anything goes live.", visual: "approval", caption: "Posts with resident photos, prices or holiday menus wait on the manager's Today screen. One tap approves and publishes them." },
          { icon: "access", name: "Accessibility", benefit: "Built for accessibility, and checked every month.", visual: "access", caption: "Visitors can make the text bigger or turn on high contrast on every page. We check the site for accessibility every month." },
          { icon: "license", name: "Compliance basics", benefit: "Your license number, privacy policy and accessibility statement on every site.", visual: "compliance", caption: "Your license number, privacy policy and accessibility statement sit at the bottom of every page." },
          { icon: "pulse", name: "Uptime monitoring", benefit: "We watch your site and get an alert if it goes down.", visual: "uptime", caption: "We watch your site around the clock. If it ever goes down, we're alerted right away." },
        ],
      },
    ],
    proofHeading: "Your community is better than your website shows.",
    proof: [
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
          { icon: "send", name: "One step to everywhere", benefit: "Publish to your website, your families and print in one step.", visual: "send", caption: "Add it once and preview it everywhere: the website calendar, the newsletter, texts and each resident's week page. Then Kinlight does the rest." },
          { icon: "route", name: "The “Where it went” screen", benefit: "See everything Kinlight did with your post, in one list.", visual: "went", caption: "Right after posting, your staff see everything Kinlight did: the website calendar, the large-print calendar, invites to 12 residents and their reminders." },
        ],
      },
      {
        theme: "Print made easy",
        features: [
          { icon: "print", name: "Large-print calendars, menus and flyers", benefit: "The same post, ready to print in standard and large type.", visual: "large-print", caption: "Settings has this month's large-print calendars, menus and flyers, plus a QR check-in sign for each activity, ready to print." },
          { icon: "palette", name: "Design studio for print", benefit: "Print templates in your community's brand.", visual: "print-studio", caption: "Drop in the kitchen's PDF or a photo. Kinlight reads it, asks only about what's unclear, then prints it in your community's brand." },
          { icon: "book", name: "Content library", benefit: "Activity ideas and templates, so nothing starts empty.", visual: "library", caption: "Start from a template like Bus trip, or copy a past event. The details and the schedule fill in, ready for your staff to edit." },
        ],
      },
      {
        theme: "Make it a habit",
        features: [
          { icon: "camera", name: "Weekly reminder and photo post", benefit: "A nudge each week. Take a photo, add a sentence, send. No app to download.", visual: "photo-post", caption: "Each activity asks for photos when it ends. Staff tap Add photos on their phone, and the photos are ready for the website, the newsletter and families." },
          { icon: "spark", name: "Writing help", benefit: "An AI assistant drafts posts and the weekly newsletter, for your staff to check.", visual: "writing-help", caption: "Kinlight drafts the weekly newsletter from your events, photos and menus. Each story is marked, and your staff check it before it goes out." },
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
    faqs: [
      { q: "How long does posting take each week?", a: "Our goal is a few minutes: a photo and a sentence from a phone. We measure it with you during the pilot." },
      { q: "Can a manager approve posts first?", a: "Yes. A manager approves before anything goes out. Emergency alerts, like a closure, can skip that step." },
      { q: "What if we only have a paper calendar?", a: "Take a photo of it. We turn it into live entries, and your staff check them." },
    ],
    next: { href: "/solutions/more-tours", label: "Next solution: Every Inquiry Answered" },
  },
  family: {
    groups: [
      {
        theme: "Reach every family",
        features: [
          { icon: "mail", name: "Text and email messages", benefit: "Families get updates where they already are, with no app to download.", visual: "messages", caption: "Each post becomes texts to residents and families and a story in the Sunday email. No app to download." },
          { icon: "target", name: "The right families", benefit: "Send to one community, care area or interest group.", visual: "audience", caption: "Send to everyone, a floor or a care area, residents or families. The count shows who it reaches before it goes out." },
          { icon: "translate", name: "Each family's language", benefit: "One message, translated person by person.", visual: "family-language", caption: "Every message goes out in each person's language. Here, the morning menu text switches from English to Spanish." },
          { icon: "check", name: "Manager approval", benefit: "Messages get a yes before they go out. Emergency alerts can skip it.", visual: "manager-approval", caption: "Choose who approves resident photos, prices, special menus and family requests. Urgent notices, like a closure, skip approval." },
          { icon: "route", name: "Delivery tracking", benefit: "See who got each message, and who didn't.", visual: "delivery", caption: "The Automations log shows every message Kinlight sent this week, who got it, and whether it was delivered, opened or answered." },
          { icon: "shield", name: "Email from your own address", benefit: "Messages come from your community's own address, not ours.", visual: "own-address", caption: "The Sunday email comes from your community's own address, so families know who it's from." },
        ],
      },
      {
        theme: "Bring them in",
        features: [
          { icon: "ticket", name: "Event RSVPs", benefit: "Families RSVP from a link in the text or email.", visual: "rsvps", caption: "When a family asks for a seat by text, Kinlight checks with their resident first, then confirms. Every reply it handled shows up in your reports." },
          { icon: "users", name: "Attendance tracking", benefit: "Tap names on a phone, or take a photo of the sign-in sheet.", visual: "attendance", caption: "Open the activity on a phone and tap who came, or let residents check in with the QR sign. Attendance is saved for your reports." },
        ],
      },
      {
        theme: "Hear back",
        features: [
          { icon: "reply", name: "Reach and replies", benefit: "See how many families you reached. Replies go to the right person.", visual: "replies", caption: "Family replies land in Communications, translated. Kinlight handles simple ones, and bills, health and open questions always go to the right person." },
          { icon: "idea", name: "Resident suggestions", benefit: "On paper or by QR code, logged for your activity team.", visual: "suggestions", caption: "Ideas from paper slips and QR codes are collected for your activity team. When one makes the calendar, the resident is told." },
          { icon: "survey", name: "Surveys", benefit: "Build your own from templates, for residents, families and staff. Printable, or read aloud.", visual: "surveys", caption: "Staff build their own surveys from templates, the way they add an event. Results come back by question, with the change since last time and themes from what people wrote." },
        ],
      },
    ],
    proofHeading: "Connection matters to everyone in your community.",
    proof: [
      {
        value: 45,
        suffix: "%",
        text: "Loneliness is linked to a 45% higher risk of death in older adults.",
        source: "Perissinotto et al., Archives of Internal Medicine, 2012",
        link: "Real connection with family matters, and it starts with knowing what's happening.",
      },
    ],
    faqs: [
      { q: "Do families need to download an app?", a: "No. It's texts and email." },
      { q: "How do families sign up?", a: "We load the contacts you already have, and families can sign up themselves and set their preferences." },
      { q: "Can we choose who gets each message?", a: "Yes. Send to one community, a care area or an interest group." },
    ],
    next: { href: "/solutions/live-website", label: "Next solution: Live Website" },
  },
  inquiries: {
    groups: [
      {
        theme: "Show what families need",
        features: [
          { icon: "home", name: "Apartments and floor plans", benefit: "Floor plans, what's included, care levels and what's open, kept up to date by your staff.", visual: "floor-plans", caption: "Each floor plan shows what's open now. Families can ask for an alert when one opens." },
          { icon: "alert", name: "Waitlist and availability alerts", benefit: "When your team marks an apartment open, the waitlist gets a message with a tour link.", visual: "waitlist", caption: "When your team marks an apartment open, everyone on that plan's waitlist gets a message with a tour link." },
        ],
      },
      {
        theme: "Get every inquiry to your team",
        features: [
          { icon: "mail", name: "Inquiry form", benefit: "An “ask about living here” form on every community site.", visual: "inquiry-form", caption: "Families tell you who they're asking for and what they need, right from the community site." },
          { icon: "chat", name: "Website assistant", benefit: "An AI chat that answers from your own content, and says so when it doesn't know.", visual: "assistant", caption: "The chat answers from your own website. When it doesn't know, it says so and gives your phone number." },
          { icon: "send", name: "Sent to your sales system", benefit: "Every inquiry goes to your sales system or email, marked with where it came from.", visual: "sales-system", caption: "Every inquiry comes in marked with where it came from, like Google or ChatGPT, and gets an instant reply. We send it on to your sales system or email." },
        ],
      },
      {
        theme: "Make touring easy",
        features: [
          { icon: "calendar", name: "Online tour booking", benefit: "Families pick a time, day or night.", visual: "tour-booking", caption: "Families pick a day and an open time for their tour, at any hour." },
          { icon: "check", name: "Tour confirmations", benefit: "Families who ask get a confirmation.", visual: "tour-confirm", caption: "Once they book, families see their tour details and get a confirmation by email and text." },
        ],
      },
      {
        theme: "Get found",
        features: [
          { icon: "search", name: "Show up when families search", benefit: "Your site is built to show up on Google and when families ask ChatGPT or Google's AI.", visual: "search", caption: "Your monthly report shows where you show up on Google for the searches families make." },
          { icon: "spark", name: "Checks on what AI tools say", benefit: "We look at what AI tools say about each community and flag mistakes.", visual: "ai-checks", caption: "We ask ChatGPT, Google, Perplexity and Gemini about your community, and fix the wrong answers we find." },
          { icon: "globe", name: "Your Google Business Profile", benefit: "Kept current with your events and menus.", visual: "business-profile", caption: "A public event you post also goes to your Google Business Profile, on Search and Maps." },
        ],
      },
    ],
    proofHeading: "When families reach out, speed matters.",
    proof: [
    ],
    faqs: [
      { q: "Does this work with our current sales system?", a: "Inquiries go to your sales system where we can connect to it, or to your email. Tell us which one you use and we'll give you a straight answer." },
      { q: "What does the chat say if it doesn't know an answer?", a: "It says it doesn't know, rather than guessing, and points the family to your inquiry form." },
      { q: "Do we have to show prices?", a: "No. Your site shows floor plans, what's included, care levels and what's open. Ask us about prices in your meeting." },
    ],
    next: { href: "/offer", label: "Next: the offer" },
  },
};
