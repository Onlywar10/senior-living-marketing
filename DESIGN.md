---
name: Kinlight
description: One post, signposted to everywhere it went. Warm charcoal sign panels on cool light, with amber for what is next or live.
colors:
  signal: "#e09a10"
  signal-bright: "#f6b93b"
  signal-ink: "#855700"
  on-signal: "#001030"
  ink: "#001030"
  ink-soft: "#46536e"
  ink-rule: "#2c3b5c"
  on-ink: "#f5f7fc"
  on-ink-soft: "#c8d2e6"
  mist: "#f3f5fa"
  steel: "#e3e8f2"
  paper: "#ffffff"
  rule: "#c6cfdf"
  error: "#a4262c"
typography:
  display:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline-small:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.25
  lede:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.2
  label:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.02em"
  data:
    fontFamily: "Overpass Mono, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 700
    fontFeature: "tnum"
rounded:
  tag: "0.2rem"
  control: "0.25rem"
  photo: "0.375rem"
  card: "0.5rem"
  panel: "0.6rem"
  bubble: "1rem"
  device: "2rem"
spacing:
  panel-inset-small: "0.75rem"
  panel-inset: "1.25rem"
  gutter-small: "1.25rem"
  gutter: "2.5rem"
  row: "1rem"
  section-inner-small: "3.5rem"
  section-inner: "5rem"
  section-small: "4rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.4rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-bright}"
    textColor: "{colors.on-signal}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.4rem"
    height: "3.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.4rem"
    height: "3.25rem"
  button-ghost-dark-hover:
    backgroundColor: "{colors.on-ink}"
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.3rem 0.6rem"
  tag-live:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.3rem 0.6rem"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.6rem 0.8rem"
    height: "3.1rem"
  panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.panel}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
---

# Design System: Kinlight

## Overview

**Creative North Star: "Signal Wayfinding"**

Kinlight looks the way a well-run building tells you where to go. Warm charcoal sign panels run edge to edge between cool light sections, hairline rows carry the information, and square-capped drawn arrows point to where each thing went. The result reads as technical and professional. The palette comes from the logo: navy for large areas and text, amber as the single accent. The site's core picture is one post, signposted to everywhere it went.

The density is that of good signage: few elements, large type, and each row saying one thing. The base size is 18px, or 22px with the A+ control, because buyers skew older and read between tours on a phone, iPad or office desktop. The system is light only, set in daytime materials, and depth comes from the contrast between panel and ground, with shadow kept to a few objects that sit on top.

Amber stays an accent: it never fills a whole section, the user's standing direction after rejecting a saturated yellow page. It also refuses the white split-hero software page and the dark neon page.

**Key Characteristics:**
- Warm charcoal sign panels running edge to edge, between cool light sections.
- Hairline rows, not cards, as the default way to list things.
- One amber accent, for the primary action and for what is live or current.
- Overpass for everything that signposts, Atkinson Hyperlegible Next for everything that is read.
- Large type by default.

## Logo

The Kinlight Amber Glow logo (public/brand/kinlight-logo.png): navy lettering with an amber dot over the i. Use it on light grounds only, because the lettering disappears on Logo Navy. It sets the header and footer; The icon (public/brand/kinlight-icon.png), a navy and amber K, is the browser tab and phone home-screen icon, on a white tile so the navy holds on dark tabs.

## Colors

Navy and cool blue-tinted neutrals from the logo, plus one amber in three strengths.

### Primary
- **Amber Signal** (#e09a10): The fill for primary buttons, live tags, the New chip and the booked tour time. Always carries Navy on Amber text.
- **Bright Amber** (#f6b93b): Amber on charcoal: route arrows, status words, jump-link arrows and hover text inside panels. Also the hover fill for primary buttons and the focus ring on dark.
- **Deep Amber** (#855700): Amber on light grounds: the current-page underline, the next-page row's hover text, the focus ring, form caret and checkbox accent.
- **Navy on Amber** (#001030): Text on amber fills only.

### Tertiary
- **Brick Error** (#a4262c): Form errors only, always with words: field border, message and summary box.

### Neutral
- **Logo Navy** (#001030): Sign panels, featured columns and plans, primary text on light, selected controls.
- **Slate Navy** (#46536e): Secondary text on light grounds, field borders, neutral list arrows and tags.
- **Navy Hairline** (#2c3b5c): Row dividers inside panels.
- **Soft White** (#f5f7fc): Primary text on charcoal.
- **Pale Blue** (#c8d2e6): Secondary text on charcoal.
- **Cool Mist** (#f3f5fa): The page ground, the header, and fills inside sample screens.
- **Pale Steel** (#e3e8f2): Alternating full-width sections, such as the research strip and every second section on Solutions.
- **White** (#ffffff): Forms, plan and promise cards, sample screens, field fills.
- **Steel Hairline** (#c6cfdf): Quiet row dividers on light grounds. Rows that need more weight use Logo Navy.

### Named Rules
**The Two Jobs Rule.** Amber does two jobs: it marks the way forward (the primary action, route and jump arrows) and it marks what is live or current (status words, live tags, the current page, the booked time). A list arrow that only marks an item stays neutral, and a tag that is not live stays neutral.

**The Three Ambers Rule.** Pick the amber by its ground. Fills use Amber Signal with Navy on Amber text (5.3:1), charcoal uses Bright Amber (7.2:1), and light grounds use Deep Amber (5.3:1 on stone, 4.7:1 on deep stone). Amber Signal as text on stone is only 2.75:1, and Deep Amber on charcoal is only 2.3:1.

**The Selected Is Ink Rule.** A chosen option in a group inverts to Logo Navy with Soft White text: text size, form intent, language, tour date. Amber waits until the choice is confirmed, as with the booked time in the tour sample.

## Typography

**Display Font:** Overpass (with system-ui, sans-serif)
**Body Font:** Atkinson Hyperlegible Next (with system-ui, sans-serif)
**Label/Mono Font:** Overpass Mono (with ui-monospace, monospace)

**Character:** Overpass descends from highway signage, so headings read as signs. Atkinson Hyperlegible Next was made for low-vision readers, so the reading text stays warm and plain beside it.

### Hierarchy
- **Display** (700, clamp 2.4 to 4.5rem, 1): The home page headline only. The floor drops to 2.05rem at the A+ size so long words still fit a phone.
- **Headline** (700, clamp 2 to 3.5rem, 1.05): Page titles and section headings, held to a short measure of 14 to 24ch.
- **Headline Small** (700, clamp 1.7 to 2.4rem, 1.1): Confirmation headings.
- **Title** (700, about 1.35rem, 1.25): Row titles, offer items, FAQ questions, plan names. Rows that act as signs step up, to 1.3 to 1.7rem for the next-page row and to 2.1rem for hero routes on large screens.
- **Lede** (400, clamp 1.2 to 1.4rem, 1.45): The sentence under a heading, 36 to 44rem wide.
- **Body** (400, 1rem, 1.55): All reading text, at 18px by default, held to 42 to 52rem.
- **Caption** (400, 0.9rem): Sample-screen captions and sources, in Slate Navy.
- **Button** (700, 1.05rem, 1.2): Buttons, in Overpass.
- **Label** (700, 0.85rem, 0.02em): Tags, in sentence case.
- **Data** (700, inherits size, tabular numerals): Schedule numerals inside sample screens.

### Named Rules
**The Sign Face Rule.** If it points, names or labels, it is Overpass: headings, nav, buttons, tags, row titles. If it is read as a sentence, it is Atkinson Hyperlegible Next, and form labels and message text stay there too.

**The Schedule Numeral Rule.** Overpass Mono is for schedule numerals in sample screens and nothing else: it sets the times in a site calendar and the dates in a tour picker. It never sets prose, headings or labels. Prices stay in Overpass with tabular numerals.

**The Everything Scales Rule.** Sizes are in rem, on a root of 112.5% (18px) that the A+ control raises to 137.5% (22px). A pixel font size would ignore the reader's choice.

## Layout

Two structures alternate. **Sign panels** are charcoal, inset from the viewport edge by 0.75rem, or 1.25rem from 40rem up, like a sign on a wall. **Ground sections** run full width on stone or deep stone. Content sits in a centered column of up to 86rem, with 1.25rem gutters, or 2.5rem from 40rem up.

Every page in the sequence opens with a charcoal panel directly under the header, and legal pages use a plain 46rem reading column instead. Section rhythm is 4rem, growing to 6rem from 40rem up, and sections right below a page head use 3.5rem growing to 5rem. Two-column splits arrive at 64rem in uneven 5:7 or 7:5 fractions, and collapse to one column below it. Rows use about 1rem of vertical padding.

The routes are Home (by the wordmark), five text tabs (Solutions, Why Kinlight, Examples, The Offer, About Us), four solution pages reached from the Solutions menu and page tabs, with /solutions opening Live Website and Book a meeting as the one amber button. Below 80rem the tabs and button collapse into a Menu; below 64rem the header stops being sticky.

### Named Rules
**The Next Door Rule.** Pages form a sequence, and each ends with a full-width next-page row that names where it goes, followed by the closing panel: Home, Solutions, Why Kinlight, Examples, then The Offer. The Offer ends the sequence, so its form stands alone with no next-page row or closing panel.

## Elevation & Depth

Depth is mostly tonal: charcoal against stone, deep stone against stone, paper against both. Panels, plan cards and promise cards are flat. One soft shadow lifts the few objects that behave like something placed on the page.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 18px 36px -22px rgb(38 35 31 / 0.5)`): The application form, the post composer, and the standalone site and tour sample screens.

### Named Rules
**The Flat Sign Rule.** Signs are mounted flat, so panels never take a shadow. Lift belongs to tools and sample screens sitting on a light ground.

## Shapes

Corners are gently eased and tighten as elements get smaller: panels at 0.6rem, cards and sample screens at 0.5rem, photos at 0.375rem, buttons and fields at 0.25rem, tags at 0.2rem. Borders are decisive, at 2px on controls and sample-screen frames, and 1px on hairline rows, with heavier 3px underlines on navigation. Photos are plain rounded rectangles with no frame, rotation or filter.

Only sample screens use softer depicted shapes: 2rem phone frames, 1rem message bubbles and small browser-chrome dots belong to the device being shown.

### Named Rules
**The Square Cap Rule.** Arrows and chevrons are drawn strokes with square caps, heavy for their size (5 units on a 48-unit box). They come in three directions, each with a meaning: up-right, right and down. They are not icon-font glyphs or rounded icon-set arrows.

## Components

### Buttons
Firm, plain and large, with Overpass labels.
- **Shape:** Slightly eased corners (0.25rem) with a 2px border and a minimum height of 3.25rem.
- **Primary:** Amber Signal fill, Navy on Amber text, padding 0.7rem 1.4rem. A trailing arrow is optional and nudges 3px right on hover.
- **Hover / Focus:** Colors shift over 160ms. Primary brightens to Bright Amber. Focus is a 3px ring offset 3px, in Deep Amber, or Bright Amber on dark.
- **Secondary:** Transparent with a Logo Navy border, and fills charcoal on hover.
- **Ghost on dark:** Transparent with an Soft White border, and fills enamel on hover.
- **Header variant:** Book a meeting shrinks to a 2.75rem minimum height.

### Tags
Small bordered status labels, in Overpass and sentence case.
- **Style:** 1.5px current-color border, 0.2rem corners, no wrapping.
- **State:** Neutral tags use Slate Navy, or Soft White on charcoal. Live tags fill with Amber Signal and appear only when something has actually happened.

### Cards / Containers
- **Sign panel:** Logo Navy, 0.6rem corners, inset from the viewport edge. It always carries the dark focus treatment.
- **Corner Style:** Gently eased (0.5rem) for cards; promise cards use 0.375rem.
- **Background:** White on stone. The featured plan and comparison column go Logo Navy instead.
- **Shadow Strategy:** Flat, except the Lift cases in Elevation & Depth.
- **Border:** None on cards. Sample screens carry a 2px Logo Navy frame.
- **Internal Padding:** 1.25 to 1.75rem, growing from 40rem up.

### Inputs / Fields
- **Style:** White fill, 2px Slate Navy border, 0.25rem corners, 3.1rem minimum height, labels bold above the field. Selects use a square-capped chevron.
- **Focus:** The global 3px Deep Amber ring, with a Deep Amber caret.
- **Error:** Brick Error border thickened by a 1px inset, a bold message in words under the field, and a focused summary box linking to each problem.

### Navigation
- **Header:** Stone ground, sticky from 64rem up. Tabs are Overpass 600 with a 3px transparent underline. Hover shows Logo Navy, and the current page shows Deep Amber and goes to 700.
- **Text size:** A two-part control, A and A+, with a 2px Logo Navy border and 2.75rem targets. The chosen part inverts to charcoal, and the choice persists between visits.
- **Footer:** Wordmark, all routes in Overpass 600, and underlined legal links, above a Steel Hairline.

### Route Rows
The signature pattern: a full-width hairline row with a amber arrow, an Overpass title, a detail line and a status word. A amber spots banner stays pinned to the top of every page. The first screen is a full-window photo hero. Home's post-flow scene animates one post along amber lines to three preview cards, with a pause button; repeating rows ease in on scroll. Below 48rem, the detail tucks under the title. Jump links on Solutions reuse the row with a down arrow.

### Next-Page Row
A full-width Overpass link between two Logo Navy rules, reading "Next: ..." with a large right arrow. Hover turns the text Deep Amber.

### Post It Demo
The site's one on-demand moving idea. A composer with a amber button routes a post through approval, website, families and print over about three seconds. Waiting destinations dim to 38% opacity and desaturate, then come up over 360ms as each live tag lights. The page loads in the finished state, so nothing depends on animation to be seen, and a status line announces progress to screen readers.

### Sample Screens
Drawn browser, phone, print and tour-picker mocks on White, always for the fictional Wren Hollow and always captioned as samples.

### Motion

Home page animations play when they scroll into view, show their finished state by default and under reduced motion, and have a pause. Numbers count up once with `CountUp` (app/components/story.tsx). Sound familiar stays a compact list of problems: it names the pain and only hints at the fix.
State changes run 160 to 360ms. Arrows, chevrons and signal reveals use `cubic-bezier(0.16, 1, 0.3, 1)`. Under `prefers-reduced-motion`, animations and transitions drop to 1ms and smooth scrolling turns off.

## Do's and Don'ts

### Do:
- **Do** keep the look technical and professional but warm: charcoal and stone that lean brown, with amber as the only accent.
- **Do** choose amber by its ground: Amber Signal for fills, Bright Amber on charcoal, Deep Amber on light.
- **Do** list things as hairline rows before reaching for cards.
- **Do** keep every font size in rem, so the A+ control scales the whole page.
- **Do** keep buttons and toggles at 2.75rem or taller, with a visible 3px focus ring on every ground.
- **Do** caption every sample screen as a sample, using the fictional Wren Hollow.
- **Do** state errors in words as well as color.
- **Do** end each page in the sequence with a next-page row.

### Don't:
- **Don't** use saturated yellow in any fill, accent or field.
- **Don't** build the white split-hero software page or the dark neon page.
- **Don't** spend amber on decoration: a list arrow, a tag that is not live or a heading stays neutral.
- **Don't** use Amber Signal as text on stone, or Deep Amber as text on charcoal.
- **Don't** put a shadow on a sign panel.
- **Don't** set prose, headings or labels in Overpass Mono.
- **Don't** add eyebrows above headings or section numbers.
- **Don't** make any content depend on an animation to be visible.
