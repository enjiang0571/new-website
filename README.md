# Handoff: BeeFintech Marketing Site — Concept D ("Bluechip Editorial")

## Overview

A long-form marketing/landing page for **BeeFintech** — Hong Kong's leading insurance SaaS for broker firms. The page is a single-scroll site with anchored navigation (Platform / AI Broker / Security / Customers / Company), positioning the product as the trusted backbone of HK insurance broking ("9 years, 150+ broker firms, 130+ insurers, zero breaches, 95% renewal rate").

Concept D is the **bluechip / editorial** direction: soft white paper, charcoal ink, vivid logo blue (`#2B7DF5`) used surgically as accent. Visually closer to Stripe / Linear / HKMA than to a typical SaaS gradient page. Designed at **1440 px desktop width**.

## Screenshots

The `screenshots/` folder has 5 reference PNGs of the rendered design, top to bottom:

| File | Shows |
|---|---|
| `01-hero.png` | Top nav, hero, "trust in numbers" rail, approval strip |
| `02-product-showcase.png` | "Try Bee AI" demo card + "Mobile + Web in sync" 3-phone showcase + web console |
| `03-platform-grid.png` | "One workspace" 6-card platform grid |
| `04-security-awards.png` | Security 2×2 + Awards & Credentials 6-card grid |
| `05-company-cta-footer.png` | Company section + blue CTA strip + dark footer |

Open `preview.html` in a browser to see the live, interactive version.

## About the Design Files

The files in this bundle are **design references created in HTML/JSX** — a runnable prototype showing intended look, layout and content, **not production code to copy directly**. The components are written as inline-style React for fast iteration; they have no build pipeline and depend on a few sibling prototype helpers (`<IOSDevice>`, `<ChromeWindow>`, screen mocks, etc.) that exist only inside this bundle.

**The task is to recreate this design in the target codebase's existing environment** — Next.js / Astro / a Vue site / whatever the BeeFintech web team already runs — using its established component library, styling system (Tailwind / CSS modules / styled-components / etc.), routing, and image pipeline. If no environment exists yet, pick the most appropriate framework for a marketing site (Next.js with Tailwind is a sensible default) and implement there.

Treat the inline `style={{ … }}` blocks as a **specification of values**, not the recommended way to ship CSS. Lift the colors, spacings, typography, and copy out of the JSX into the codebase's own tokens and components.

## Fidelity

**High-fidelity (hifi).** Final colors, typography scale, spacing, and copy are intentional. Recreate the layout pixel-faithfully at 1440 px desktop, then make it responsive. Mobile/tablet breakpoints are **not** in scope for this concept — designs will need to be derived (notes under "Responsive behavior" below).

## File map

```
design_handoff_concept_d/
├── README.md                  ← you are here
├── preview.html               ← open in a browser to see the live design
├── screenshots/               ← 5 reference PNGs of the rendered page
│   ├── 01-hero.png
│   ├── 02-product-showcase.png
│   ├── 03-platform-grid.png
│   ├── 04-security-awards.png
│   └── 05-company-cta-footer.png
├── source/
│   ├── concept-d.jsx          ← the page itself (the spec to recreate)
│   ├── product-showcase.jsx   ← "Mobile + Web in sync" section
│   ├── awards-block.jsx       ← "Awards & Credentials" section
│   ├── screens.jsx            ← mock app/web screens used inside device frames
│   ├── ios-frame.jsx          ← iPhone bezel component used by ProductShowcase
│   ├── browser-window.jsx     ← Chrome window chrome used by ProductShowcase
│   └── shared.css             ← minimal global styles (font + tnum)
└── assets/
    ├── beefintech-logo.png    ← header logo (height 26 px)
    └── award-*.png            ← 6 award/credential cards
```

To preview: open `preview.html` in any modern browser. It loads React + Babel from a CDN and renders the concept at a fixed 1440 px width.

---

## Page sections (top to bottom)

The page is one continuous scroll. Section IDs in parentheses are the anchor targets used by the top nav.

### 1. Top nav bar
- Full-width white bar, `1px` bottom border in `#E2E7EF`.
- Padding: `20px 56px`.
- Left cluster: BeeFintech logo (26 px tall) + nav links (`Platform`, `AI Broker`, `Security`, `Customers`, `Company`) — links are 14 px, color `#5A6478`, gap 28 px.
- Right cluster: language toggle "EN · 繁中" (13 px, `#5A6478`) + primary "Book a demo" button (charcoal `#0E1726` background, paper `#FBFCFE` text, 9×16 padding, 6 px radius, 13 px / weight 500).

### 2. Hero
- Two-column grid `1.4fr 1fr`, gap 64 px, padding `88px 56px 64px`, items aligned to **end** (the right column's "Trust in numbers" sits flush with the bottom of the headline).
- **Left column:**
  - Trust pill: `inline-flex` row, 6×12 px padding, `#EAF2FF` background, 999 radius, 12 px text in `#1E5BC6`, weight 500. Contains a 6×6 round dot in `#2B7DF5` and the text "Approved by YF Life · FWD · China Life Strategic Partner".
  - Headline `<h1>`: 84 px, line-height **0.98**, letter-spacing **-0.035em**, weight **600**. Three lines:
    - "The InsurTech"
    - "platform Hong Kong's"
    - "brokers <span style='color:#2B7DF5'>trust.</span>" — only the word "trust." is blue.
  - Sub: 19 px, line-height 1.45, color `#5A6478`, max-width 560 px, top margin 28 px. Copy: "Nine years. 150+ broker firms. 130+ insurers. Zero breaches. 95% of customers renew, every year."
  - Two CTAs, gap 12 px, top margin 36 px:
    - Primary: "Try Bee AI — no signup →" — `#2B7DF5` bg, white text, 14×22 padding, 8 radius, 15 px / weight 600.
    - Secondary: "Book a demo" — transparent bg, ink text, 1px `#E2E7EF` border, same padding, weight 500.
- **Right column** ("Trust in numbers"):
  - Left border `2px solid #2B7DF5`, padding-left 28 px.
  - Eyebrow: "TRUST, IN NUMBERS" — 11 px, letter-spacing 0.14em, uppercase, color `#2B7DF5`, weight 600, bottom margin 18 px.
  - Four stat rows, each 16 px top + bottom padding, 1px `#E2E7EF` divider between them (no divider after the last):
    1. **95%+** — annual renewal rate
    2. **8 yrs** — zero data breaches
    3. **60%+** — long-term life broker share
    4. **20,000+** — pros use our AI daily
  - Number: 38 px, line-height 1, letter-spacing -0.025em, weight 700, color `#0E1726`. Label: 13 px, `#5A6478`, top margin 6 px.

### 3. Approval strip
- Single horizontal row, `#EAF2FF` background, top + bottom 1px `#E2E7EF` borders.
- Padding `24px 56px`, items spaced via `justify-content: space-between`, color `#1E5BC6`, 13 px / weight 500.
- Items in order: eyebrow "APPROVED BY" (11 px / 0.14em / uppercase), then "YF Life", "**FWD**" (weight 700), "中國人壽 (海外)", "HKSTP", "HK ICT 2020", "Microsoft Azure", "Alibaba Cloud HK".

### 4. AI demo block (no section ID)
- Padding `88px 56px`. Grid `1fr 1.4fr`, gap 56 px.
- **Left:** eyebrow "TRY IT NOW" (blue, 11 px / 0.14em / uppercase, weight 600) → `<h2>` "Don't take our word for it." over a muted second line "Try our AI." (`#5A6478`). Heading is 44 px, line-height 1.05, weight 600, letter-spacing -0.025em. Sub-paragraph 16 px / 1.5 / `#5A6478`, max-width 380 px.
- **Right (the AI demo card):** white bg, 1px `#E2E7EF` border, 14 px radius, soft blue-tinted shadow `0 12px 40px -16px rgba(43,125,245,0.25)`.
  - **Header row** (14×18 padding, 1px bottom border): left "● Bee AI · ready" (8 px blue dot + label, 13 px); right "Credits **3 / 3**" (the "3 / 3" in `#2B7DF5`, weight 700).
  - **Chip row** (18 padding, flex-wrap, gap 8, 1px bottom border): four 8×14 chips with 999 radius, 13 px:
    - "Compare products" — **active**, `#2B7DF5` bg + white text + weight 600 + blue border.
    - "Generate proposal", "Visualize a scenario", "Ask Bee anything" — white bg, ink text, weight 400, `#E2E7EF` border.
  - **Conversation body** (18 padding):
    - User row: "You" eyebrow (12 px / `#5A6478`, 6 px gap below) → message "I'm 35, want retirement protection, budget HK$5,000/month. Compare 2-3 options." (15 px, 18 px gap below).
    - Assistant header: "Bee AI · 642ms" (12 px, blue, weight 600, 6 px gap below).
    - Result panel: `#EAF2FF` bg, 1px border, 10 px radius, 14 padding. Inside, a 3-column grid of product cards (gap 10, 12 px text):
      - Card has white bg, 1px border, 8 radius, 10 padding.
      - Card body: product name (weight 600, 6 px gap below) → price `HK$XXXX/mo` (`#5A6478`, 6 px gap) → 4 px progress bar (`#E2E7EF` track, blue fill at the given %) → "fit score" caption.
      - Three products + numbers:
        | Product | Price | Fit |
        |---|---|---|
        | ManuRetire 5 | HK$4800/mo | 78% |
        | AIA Pro Annuity | HK$5200/mo | 86% |
        | FWD Easy Save | HK$4400/mo | 64% |
    - Footer line, 14 px top margin, 12 px / `#5A6478`, separated by " · ":
      "⚡ <800ms" · "🔒 No data stored" · "🇭🇰 HK".

### 5. Product showcase — "Mobile + Web in sync" (`#platform-product`)
Rendered by `<ProductShowcase theme="light" accent="#2B7DF5" accentDeep="#1E5BC6"/>`. Padding `88px 56px`, top border `#E2E7EF`. See `source/product-showcase.jsx`.

- **Section header** (flex, items-end, justify-between, 56 bottom margin):
  - Left: eyebrow "THE PRODUCT · MOBILE + WEB IN SYNC" (11 px / 0.16em / blue / weight 700) → `<h2>` "From client onboarding<br/>to electronic signature." (56 px, line-height 1.02, weight 600, letter-spacing -0.03em).
  - Right: paragraph 16 / 1.55 / `#5A6478`, max 380 px: "FNA · proposal · AML · underwriting · settlement — the entire chain on one phone, mirrored on a manager-grade web console. Used daily by 200,000+ HK professionals."
- **Three iPhones** (3-col grid, gap 40, bottom margin 80). Each cell:
  - Centered iPhone frame (280 × ~580). Use the codebase's existing iPhone mockup component, OR replicate from `ios-frame.jsx` — rounded corners ~50 px, 8 px bezel, optional notch, status bar.
  - Below the device: numeric eyebrow ("01", "02", "03") in JetBrains Mono / monospace, blue, 12 px / weight 700 + a 1px hairline filling remaining width.
  - Title 18 px / weight 700, 6 px gap; description 14 px / `#5A6478` / line-height 1.55.
  - Phones (in order):
    1. **01 — FNA Overview.** "Five-step FNA, signed-and-locked. PIBA-2023 aligned, 7-year audit log."
    2. **02 — AI Proposal.** "3-min personalised proposals across 4,400+ products. RAG/KAG-grounded." (Phone is dark-mode in the dark theme; light-mode here.)
    3. **03 — Policy Dashboard.** "AUM, renewals, underwriting, commission — refreshed in real time."
  - Each phone screen is one of the `Screen*` components in `screens.jsx`. Treat them as **placeholders**: when implementing, swap in real product screenshots provided by BeeFintech, or rebuild the screens from the live mobile app. The mocks are intentionally rough.
- **Web console block** (grid `380px 1fr`, gap 48, items-center):
  - Left text:
    - Eyebrow "WEB CONSOLE" (11 / 0.16em / blue / 700, 12 bottom).
    - `<h3>` "Brokerage HQ in your browser." — 36 px, line-height 1.05, weight 600.
    - Paragraph (15 / 1.55 / `#5A6478`, 22 bottom).
    - Stat list (3 rows, each baseline-aligned, 8 bottom padding + 1px bottom border):
      - **100K+** — daily policy capacity
      - **16+** — data sources unified
      - **95%** — process automation
      Number: 22 px / weight 700 / letter-spacing -0.02em / min-width 90 px / `tabular-nums`. Label: 13 / `#5A6478`.
  - Right: a Chrome-style browser window (URL `app.beefintech.hk/dashboard`, single tab "🐝 LifeBee Dashboard", 1320 × 500). Inside: the `<WebDashboard/>` mock screen — sidebar nav + KPI cards + charts. Same caveat as phones: replace with a real screenshot when handing over.

### 6. Platform feature grid (`#platform`)
- Padding `88px 56px`, top border `#E2E7EF`.
- Eyebrow "PLATFORM" (11 / 0.14em / blue / 600, 14 bottom).
- `<h2>` 56 px / line-height 1.02 / weight 600 / letter-spacing -0.03em / max-width 880: "One workspace, the entire `<span>`policy lifecycle.`</span>`" — last two words in `#2B7DF5`.
- 3×2 card grid below (gap 24, top margin 56). Each card:
  - 24 padding, white bg, 1px `#E2E7EF` border, 12 radius.
  - 36×36 numeric badge: `#EAF2FF` bg, blue text, 8 radius, weight 700 — shows "1"…"6". 16 bottom margin.
  - Title 18 / weight 600, 8 bottom; body 14 / `#5A6478` / 1.5.
  - The six cards (in order):
    1. **LifeBee CRM** — "Client onboarding, FNA, e-signature, KYC. Mobile + web, in sync."
    2. **LifeBee EBA** — "E-Business Application — proposal to issuance, paperless."
    3. **LifeBee POS** — "Policy admin & service, renewals, claims, commissions."
    4. **LifeBee BI** — "Realtime dashboards across firm performance."
    5. **Bee AI Broker** — "RAG/KAG engine — compare 4,400+ products in seconds."
    6. **LifeBee Quote** — "Multi-insurer quoting & illustration in one click."

### 7. Security (`#security`)
- Padding `88px 56px`, white bg, top border.
- Grid `1fr 1.2fr`, gap 56.
- **Left:** eyebrow "SECURITY" → `<h2>` "Eight years.<br/>Zero breaches." (48 px / 1.02 / 600 / -0.03em) → paragraph 16 / 1.55 / `#5A6478` / max 420: "Hong Kong residency, end-to-end encryption, every action audited. Trusted with 100,000+ policies/day."
- **Right:** 2×2 card grid (gap 16). Each card: 22 padding, paper bg `#FBFCFE`, 1px border, 12 radius. Title 16 / weight 600 / **blue**, 8 bottom; body 13 / `#5A6478` / 1.5.
  - **HK PDPO** — "Full compliance, all data resides in Hong Kong."
  - **ISO 27001** — "In progress. SOC 2 Type II annual review."
  - **Encryption** — "AES-256 at rest, TLS 1.3 in flight."
  - **Audit trail** — "Every read/write signed, 7-year retention."

### 8. Customers (`#customers`)
- Padding `88px 56px`, top border.
- Eyebrow "CUSTOMERS" → `<h2>` "150+ broker firms. `<span style='color:#5A6478'>`One trusted backbone.`</span>`" (48 / 1.02 / 600 / -0.03em / max 720 — second sentence muted).
- 3-column testimonial grid (gap 24, top margin 48). Each card: 28 padding, white bg, 1px border, 12 radius.
  - Quote: 17 / 1.5 / ink, 20 bottom.
  - Attribution: 13 / `#5A6478`.
  - Three testimonials:
    1. "3-min proposals replaced 3-hour spreadsheets. We doubled new-client capacity." — *Director, mid-size HK broker firm*
    2. "95% renewal rate isn't marketing — it's a year-on-year audit number." — *COO, bancassurance group*
    3. "The AI catches policy mismatches our junior advisors used to miss." — *Head of Compliance, MPF firm*

### 9. Awards & Credentials (`#awards`)
Rendered by `<AwardsBlock theme="light"/>`. Padding `88px 56px`, top border.

- **Header** (grid `1fr 1.4fr`, gap 56, items-end, 48 bottom):
  - Left: eyebrow "AWARDS & CREDENTIALS" (11 / 0.14em / blue / **700**) → `<h2>` "<span color=blue>2017</span> · Hong Kong InsurTech, recognised." (52 / 1.02 / 700 / -0.03em).
  - Right: paragraph 17 / 1.55 / `#5A6478` / max 540, justify-self end: "Founded in 2017 at HKSTP. Trusted by 160+ broker firms across Hong Kong, Macau and Singapore. Government-vetted, insurer-approved."
- **6 award cards** (3-col grid, gap 20). Each card:
  - White bg, 1px border, 14 radius, 16 padding, flex column items-center gap 12, soft shadow `0 4px 16px -8px rgba(11,22,40,0.08)`.
  - Image: `width: 100%`, `height: 200px`, `object-fit: contain` — preserves aspect of the cropped award image.
  - Caption: 13 / `#5A6478` / weight 500, centered.
  - Cards (in order, file → caption):
    1. `award-hkstp.png` → "HKSTP InnoCentre Resident"
    2. `award-itc-tvp.png` → "ITC TVP Qualified Vendor"
    3. `award-ict-2020.png` → "HK ICT Awards 2020"
    4. `award-alibaba.png` → "Alibaba Cloud HK · Strategic Partner"
    5. `award-dbiz.png` → "Government D-Biz Vendor"
    6. `award-manulife.png` → "Manulife BOOST · Finalist"

### 10. Company (`#company`)
- Padding `88px 56px`, white bg, top border.
- Grid `1fr 1.4fr`, gap 56.
- **Left:** eyebrow "COMPANY" → `<h2>` "From HKSTP InnoCentre, since 2017." (48 / 1.02 / 600 / -0.03em).
- **Right:** body paragraph 16 / 1.6 / `#5A6478`: "BeeFintech is Hong Kong's leading insurance SaaS, recognised by HK ICT Awards 2020 and incubated at HKSTP. We exist to make insurance professionals 10× more effective — without compromising on trust."
  - Followed by a 2×2 fact grid (gap 16, top margin 32, 14 px text in ink). Each cell: tiny eyebrow (11 / `#5A6478` / uppercase / 0.1em letter-spacing / 4 bottom), then the value:
    - **HQ** — "Unit 505, InnoCentre, Kowloon Tong"
    - **Founded** — "2017"
    - **Team** — "40+ engineers & insurance experts"
    - **Backed by** — "HKSTP, Microsoft, Alibaba Cloud"

### 11. CTA strip
- Padding `88px 56px`, **blue `#2B7DF5` bg**, white text.
- Flex row, items-center, justify-between, gap 32, wrap.
- `<h2>` 48 / 1.05 / 600 / -0.025em / max 720: "Ready to see Bee AI on your book of business?"
- Two buttons (gap 12):
  - Primary: "Try Bee AI →" — white bg, **`#1E5BC6`** text, 15×24 padding, 8 radius, 15 / weight **700**.
  - Secondary: "Book a demo" — transparent bg, white text, 1.5px `rgba(255,255,255,0.6)` border, same padding, weight 600.

### 12. Footer
- `#0E1726` bg, paper text, padding `32px 56px`.
- Flex row, justify-between, items-center, wrap, gap 16, 13 px text.
- Items in order: "🔒 HK PDPO compliant", "🇭🇰 All data in Hong Kong", "🛡 ISO 27001 in progress", "✅ YF Life & FWD approved", and "● All systems operational · 99.99% uptime" with the bullet (and only the bullet) in `#2B7DF5`.

---

## Design tokens

Lift these into the codebase's token system (Tailwind theme, CSS custom properties, design-tokens JSON, etc.) — do NOT inline them per-component as the prototype does.

### Colors

| Token | Hex | Used for |
|---|---|---|
| `blue` | `#2B7DF5` | Primary accent — buttons, links, "trust" word, eyebrows, dots, blue text in headings |
| `blueDeep` | `#1E5BC6` | Pill text, CTA primary text on white-on-blue, secondary blue |
| `blueSoft` | `#EAF2FF` | Pill bg, approval strip bg, AI result panel bg, numeric badge bg |
| `ink` | `#0E1726` | Primary text, dark button bg, footer bg |
| `paper` | `#FBFCFE` | Page background, cards inside Security section |
| `line` | `#E2E7EF` | All hairlines, card borders, dividers |
| `muted` | `#5A6478` | Secondary text, captions, attributions |
| `white` | `#FFFFFF` | Card surfaces, button text on blue |

CTA section uses `blue` as the full background with white text. Footer uses `ink` as full background with `paper` (warm-white) as text.

### Typography

- **Family**: `"Inter", system-ui, sans-serif` for everything except the 2-digit eyebrow numbers (01/02/03) on the Product Showcase, which use `"JetBrains Mono", monospace`.
- **Type scale** (all sizes are px; line-heights and letter-spacing matter):
  | Role | Size | Weight | Line | Tracking |
  |---|---|---|---|---|
  | h1 hero | 84 | 600 | 0.98 | -0.035em |
  | Section h2 (large) | 56 | 600 | 1.02 | -0.03em |
  | Awards h2 | 52 | **700** | 1.02 | -0.03em |
  | Section h2 (medium) | 48 | 600 | 1.02 / 1.05 | -0.025em / -0.03em |
  | h3 | 36 | 600 | 1.05 | -0.025em |
  | h2 (small / AI demo) | 44 | 600 | 1.05 | -0.025em |
  | Stat number (right rail) | 38 | 700 | 1 | -0.025em |
  | Stat number (web console) | 22 | 700 | — | -0.02em |
  | Body large | 19 | 400 | 1.45 | — |
  | Body | 16–17 | 400 | 1.5–1.6 | — |
  | UI text | 14–15 | 400–600 | 1.5–1.55 | — |
  | Caption | 13 | 400–500 | 1.5 | — |
  | Eyebrow | 11 | 600–700 | — | **0.14em or 0.16em**, uppercase |
  | Smaller eyebrow | 12 | 700 | — | (mono) for 01/02/03 |
- Numbers use `font-variant-numeric: tabular-nums` (the `tnum` class in `shared.css`) where they need to align — stat columns, prices, etc.

### Spacing & layout

- **Page width**: 1440 px design canvas. Content is full-bleed; horizontal padding is `56 px` on every section.
- **Section vertical rhythm**: `88 px` top + bottom on every major section. The hero uses `88px 56px 64px` because the approval strip sits flush below it.
- **Card padding**: 22–28 px depending on density (Security 22, Platform 24, Customers 28).
- **Grid gaps**: 16 (tight pairs), 20 (Awards), 24 (Platform), 40 (phones), 48–56 (column splits), 64 (hero column split).
- **Border radius**: `999` for pills/chips/dots, `14` for the AI demo card and award cards, `12` for content cards and the numeric badge alternative, `10` for the AI result panel, `8` for buttons + small cards, `6` for the dark "Book a demo" button in the nav.
- **Borders**: always `1px solid #E2E7EF`. Awards & CTA secondary use `1.5px` for emphasis.
- **Shadows**: only two — the AI demo card uses `0 12px 40px -16px rgba(43,125,245,0.25)` (a soft blue glow); award cards use `0 4px 16px -8px rgba(11,22,40,0.08)` (neutral).

### Iconography

Concept D is **deliberately icon-light** — there are no decorative icons in the layout. The only "iconography" is:
- Emoji sparingly in copy: ⚡ 🔒 🇭🇰 🛡 ✅ ● — these appear in the AI demo footer and the page footer compliance strip. They can stay as emoji or be replaced with monochrome line icons (Lucide / Heroicons / Phosphor) at the team's preference.
- The arrow `→` glyph in CTAs ("Try Bee AI →") — keep as a Unicode arrow or swap for an `arrow-right` icon at 0.9em.
- Numeric badges `1–6` in the Platform grid — these are **typographic**, not icons. Keep them as text inside a 36×36 rounded square.

---

## Interactions & behavior

The prototype is mostly static. Implementing for production, add:

- **Top nav**: each link scrolls to its anchor (`#platform`, `#security`, `#customers`, `#company`; `#awards` and `#platform-product` are not in the visible nav but exist on the page). Use smooth scroll. Active link gets the blue color when its section is in view.
- **Sticky nav** on scroll: collapse padding from `20px 56px` to `12px 56px` past 80 px scroll, drop a soft 1px shadow under it.
- **Buttons**:
  - Primary blue button — hover: darken to `#1E5BC6`. Active: `scale(0.98)`. Focus: 2 px focus ring in `rgba(43,125,245,0.4)`.
  - Dark ink button — hover: lift shadow `0 4px 12px rgba(14,23,38,0.18)`.
  - Outline button — hover: bg `#FBFCFE`, border darkens to `#5A6478`.
- **AI demo card** is currently a static screenshot. **In production it should be live**: the chips switch the demo, and `Compare products` runs a real query against the BeeFintech AI endpoint. Until then, ship as-is and expose a "Try Bee AI" button that links out to the actual AI demo.
- **Cards** (Platform, Security, Customers, Awards): on hover, lift shadow `0 8px 24px -12px rgba(14,23,38,0.12)` and translateY(-2px), 200ms ease-out.
- **Anchor scroll-margin-top**: every section gets `scroll-margin-top: 80px` so anchored links don't slide under the sticky nav.
- **Forms** are not present on this page. CTAs link out: `Book a demo` → `/demo`, `Try Bee AI` → `/ai`.
- **Reduced motion**: respect `prefers-reduced-motion` — disable hover lifts and smooth scroll.

## Responsive behavior

The design is **1440 px desktop only**. For production the developer needs to derive:

- **≥1440**: as-shown.
- **1024–1439**: scale section padding to `48 px`, hero h1 to ~64 px, h2 to 44 px. Keep all 3-col grids.
- **768–1023**: collapse 3-col card grids to 2-col; keep 2-col column splits as 2-col but stack hero + AI demo + product showcase headers. Hero h1 ~52 px.
- **<768**: single column everywhere. Hero h1 ~40 px / line-height 1.05. Stat list becomes a horizontal scroll or 2×2. Award cards 1 col. Hide the language toggle in the nav, collapse nav links into a hamburger menu.

The AI demo card and the iPhone showcase are the trickiest — at narrow widths, the iPhone trio should stack vertically with no rotation, and the browser-window mock should drop its chrome and become a flat product screenshot.

---

## Content / copy

All copy in this design is final and approved (subject to legal review of the specific numbers). Do not paraphrase. The exact strings are listed inline in each section above; double-check against `source/concept-d.jsx` if anything looks ambiguous.

Two strings to double-check with the BeeFintech team before production:
- **"95%+ annual renewal rate"** and **"60%+ long-term life broker share"** — ensure these are auditable claims.
- **"Approved by YF Life · FWD · China Life"** — confirm the latest insurer-partner list.

Numeric claims appear in multiple places (95% / 8 yrs / 60% / 20,000+ / 150+ / 130+ / 4,400+ / 100K+ / 16+ / 200,000+). Centralize them as a `stats.ts` module so a single content edit updates every surface.

---

## Assets

All images live in `assets/`.

- `beefintech-logo.png` — the BeeFintech wordmark logo. Used in the top nav at 26 px height. Source: project asset library. **Replace with an SVG version if available** for crisp rendering at all densities.
- `award-*.png` (6 files) — cropped award/credential badges. Each was hand-cropped from the original BeeFintech credential slide and is intentionally photo-styled rather than a flat logo. Display at `height: 200 px` with `object-fit: contain`. **Ideally replace with vector logos from each issuing body** (HKSTP, ITC, HK ICT, Alibaba Cloud, etc.) once licensing is confirmed; until then ship the PNGs as-is.

Things **not** in this bundle:
- Real iPhone product screenshots — the prototype uses sketched-out `Screen*` components in `screens.jsx`. Get final screenshots from BeeFintech's mobile team and drop them into the iPhone frames.
- Real web dashboard screenshot — same story for the `<WebDashboard/>` component.
- Custom font files — Inter and JetBrains Mono should be loaded via the codebase's existing font pipeline (next/font, @fontsource, Google Fonts subset, etc.).

---

## State management

This page has effectively **no client state** beyond:
- Active anchor (computed from scroll position; can use IntersectionObserver).
- Sticky-nav toggle (computed from scroll position).
- Whether the AI demo is in "live" or "screenshot" mode (a build-time flag once the live demo is wired up).

No data fetching is required for the marketing page itself. The "Try Bee AI" CTA links to the live AI app, which is its own product surface and out of scope for this handoff.

---

## Open questions for the BeeFintech team

1. Final URL slug for the page — `/` (homepage) or a named route?
2. Confirm the language toggle — is "繁中" (Traditional Chinese) the only second locale, or do we need 简中 / EN both?
3. Confirm the 8 logos in the approval strip — the prototype lists 7 names. Should each be a real brand logo (lockup) instead of plain text?
4. The AI demo card — keep as static screenshot for v1, or block the page launch on a live embed?
5. Award card images — ship the cropped PNGs in this bundle, or wait for vector logos?
