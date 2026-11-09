---
name: "Portfolio — Mouhamadou Mouhtada Ndiaye"
description: "One-page editorial portfolio for a software engineering student, built as a relay rack: paper, ink, signal amber, validated green."
colors:
  paper: "#e8e4db"
  paper-raised: "#f2efe8"
  paper-sunk: "#ddd8cc"
  ink: "#1b1d1a"
  ink-soft: "#4a4c46"
  rule: "#b9b3a4"
  rule-strong: "#8e887a"
  amber: "#c8751a"
  amber-soft: "#e9c9a8"
  green: "#2f6b4f"
  green-soft: "#c9d9cf"
typography:
  display:
    fontFamily: "'Archivo Variable', Archivo, sans-serif"
    fontSize: "clamp(2.6rem, 6.2vw, 5.8rem)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Archivo Variable', Archivo, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Archivo Variable', Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "'DM Mono', monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.12em"
  mono:
    fontFamily: "'DM Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  base: "2px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  "9": "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "0.8rem 1.15rem"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.base}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "0.8rem 1.15rem"
    height: "46px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.base}"
  badge-status:
    backgroundColor: "transparent"
    textColor: "{colors.green}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "8px 10px"
  plate-name:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.base}"
    padding: "clamp(22px, 3vw, 36px)"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "4px 8px"
  rail-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.body}"
    rounded: "{rounded.base}"
    padding: "8px 0"
  project-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "20px 0 20px 24px"
  project-row-hover:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
---

# Design System: Portfolio — Mouhamadou Mouhtada Ndiaye

## Overview

**Creative North Star: "La salle des relais"**

The portfolio is a relay rack: a lacquered paper enclosure, an engraved nameplate, labeled ports, 1px wiring, and a single signal lamp that travels the circuit. The interface is not the subject. The work is. Every section is a panel on the same rack, so a recruiter can trace Senguichet from the mobile app to payment to validation before reading a biography.

The palette is deliberately narrow: paper, ink, one signal amber, and one validated green. There is no violet, no glow, no gradient text, and no skill bar. Depth comes from 1px rules, tonal paper, and two full-bleed charcoal panels reserved for the security and contact arguments. The system is flat by default and physical where it matters: a nameplate with screws, ports that light when a project is linked, a pulse that crosses the circuit once.

The motion grammar is one authored moment, not a layer of entrances. The amber pulse crosses the Senguichet circuit on load, lighting each port in sequence and settling the readout; after that, the interface answers the pointer and the keyboard and then stays still. Real evidence leads: the product demo, the mobile demo, the eight certificates, the two timelines. Nothing is presented as proof unless it is traceable.

**Key Characteristics:**
- Paper and charcoal, two grounds, no third.
- Amber as signal, never as body text.
- 1px rules, engraved labels, and a 200px rail that maps the page.
- One authored motion: the amber pulse across the Senguichet circuit.
- Real demos and real links.
- One section per screen; equal left and right edges.

## Colors

One accent carries the signal, one validates it, and the rest is paper and ink. The reader should remember a circuit, not a gradient.

### Primary
- **Signal Amber (#c8751a):** the traveling pulse, the port glow, the bracket rules, the active markers, and the single hover accent on linked project rows. It is a signal, not a surface: never body text on paper. The circuit readout index is ink for legibility.

### Secondary
- **Validated Green (#2f6b4f):** the availability badge, the certification checks, the security-layer lamps, and the "Validé" tags. **Green Wash (#c9d9cf)** is the only soft fill, used for the LED on charcoal panels.

### Neutral
- **Lacquered Paper (#e8e4db):** the page ground.
- **Raised Paper (#f2efe8):** the nameplate, the hover surfaces, and the video headers.
- **Sunken Paper (#ddd8cc):** screws, muted text on charcoal panels, and the video fallback.
- **Charcoal Ink (#1b1d1a):** primary text, primary buttons, and the full-bleed Cybersécurité, Contact, and Footer panels.
- **Graphite (#4a4c46):** secondary text, project descriptions, spec labels.
- **Rule Wire (#b9b3a4):** 1px dividers and ledger rules.
- **Strong Rule Wire (#8e887a):** borders that need to hold weight — nameplate and media frames.
- **Amber Wash (#e9c9a8):** text selection only; it never becomes a surface.

### Named Rules
**The Amber Is Signal Rule.** Amber appears on ports, pulses, bracket rules, and active markers; it never carries body text on paper. If a line needs to be read, it is ink.

**The Two-Ground Rule.** There are two grounds: lacquered paper and charcoal ink. The charcoal panels are full-bleed and reserved for the security and contact arguments. No third ground, no gradient sky.

**The No-Violet Rule.** Violet and lavender are absent from the system, including the favicon. The bolt is amber on paper.

## Typography

**Display Font:** Archivo Variable (fallback Archivo, sans-serif)
**Body Font:** Archivo Variable (fallback Archivo, sans-serif)
**Label/Mono Font:** DM Mono (fallback monospace)

**Character:** A tight, slightly squared grotesque paired with a technical mono. The display face has one voice — weight 600, condensed tracking — and the mono is reserved for labels, durations, addresses, dates, and measurements. The pairing reads as an instrument panel, not a code editor.

### Hierarchy
- **Display** (600, clamp(2.6rem, 6.2vw, 5.8rem), 0.86): The name only. At 901–1150px it steps to clamp(2.3rem, 4.6vw, 3.2rem); at ≤600px to clamp(2.1rem, 9vw, 2.6rem) with 0.9 line-height.
- **Headline** (600, clamp(2rem, 4.6vw, 3.6rem), 0.95): Section titles, balanced with `text-wrap: balance`.
- **Title** (600, 1.12rem, 1.35): Project names and timeline roles.
- **Body** (400, 1rem, 1.6, max 68ch): Prose, project descriptions, security leads. The lede is clamp(1rem, 1.25vw, 1.125rem).
- **Label** (400, 0.72rem, 1.4, 0.12em, uppercase): Metadata, durations, statuses, spec labels, contact labels.

### Named Rules
**The Mono Is a Tool Rule.** DM Mono is for data: labels, durations, addresses, dates, measurements. It never sets a paragraph or a headline; monospace is not a costume.

**The Name Is the Headline Rule.** The h1 is the name, set in the nameplate. There is no eyebrow, kicker, or job-title label above it.

**The Balance Rule.** Display and headline text use `text-wrap: balance`; do not manually break a headline into a shape.

## Layout

The page is a rack, not a stack of cards. A fixed 200px rail on desktop is the map; the main column is the bay. Every section is at least one screen and is allowed to be taller when the evidence demands it.

- A 200px rail is fixed at ≥901px; `#main` and the footer shift by the rail. Below 901px the rail becomes a 64px topbar with a full-screen menu dialog.
- Shell 1360px, gutter clamp(20px, 4vw, 56px). `.wrap` is the single left/right edge for every section; no section escapes the line.
- Hero: 100svh, flex column centered; nameplate, availability, circuit, actions. All other sections: min-height 100svh, flex column centered, padding-block clamp(72px, 10vh, 112px).
- Section grids: Senguichet main 0.95fr/1.05fr, secondary a centered portrait demo max 420px; certifications 2 columns; security 4 columns; journey 2 columns; contact a single column of full-width rows.
- Breakpoints: 1150px (hero name steps down), 900px (rail to topbar/menu), 800px (journey to one column), 700px (circuit to vertical), 600px (hero compacts, buttons full width), 520px (certification tags hide).
- Spacing rhythm: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.

### Named Rules
**The One-Ground-Per-Screen Rule.** Each section is a room. No second heading, no next panel, peeks into the current screen at 1440×900.

**The Rail Is the Map Rule.** The rail lists the five destinations. It is the only index; no decorative section numbers elsewhere.

**The Equal Edges Rule.** Every block begins and ends on the `.wrap` lines or the grid columns. Nothing is allowed to hang off one side.

## Elevation & Depth

Flat by default. Depth is drawn with 1px rules, tonal paper, and two full-bleed charcoal panels. The only shadows are physical: the nameplate sits on a soft under-shadow, and a lifted control gets a slightly stronger one.

### Shadow Vocabulary
- **Plate** (`0 1px 2px rgba(27,29,26,.08), 0 18px 40px -24px rgba(27,29,26,.35)`): the nameplate at rest; never on cards.
- **Lift** (`0 2px 4px rgba(27,29,26,.10), 0 24px 48px -24px rgba(27,29,26,.42)`): the hover/active lift on a control that already moved.

### Named Rules
**The Shadow Is Physical Rule.** A shadow is an offset under a solid object, not a colored halo. No glow, no 0-offset bloom, no hard offset.

**The Charcoal Panel Rule.** The security and contact sections are charcoal because they are arguments, not because they are "dark mode." They use paper text, 1px rgba rules, and green-soft lamps.

## Shapes

Nearly square. The system uses a 2px radius for every panel, button, tag, and video frame; circles are reserved for ports, LEDs, and timeline nodes. Borders are 1px; the only strong borders are the nameplate and the media frames.

### Named Rule
**The 2px Rule.** 2px on surfaces. 999px only on status LEDs, circuit ports, and timeline nodes. No large rounded cards.

## Components

### Buttons
- **Shape:** 2px radius, 1px border, min-height 46px.
- **Primary:** ink ground, paper text, mono 0.78rem/500/0.06em uppercase, padding 0.8rem 1.15rem; hover translateY(-2px), active translateY(1px), the arrow moves 3px; focus-visible 2px ink outline, 3px offset.
- **Ghost:** transparent ground, ink text, rule-strong border; hover ink ground / paper text. On charcoal, the overrides invert paper and ink.
- **Rule:** one button pair only; no pill buttons, no third style.

### Status Badge
1px green border, green mono 0.72rem uppercase, 8px × 10px padding, 8px green LED. No glow. It is the only green outlined element outside the certification checks.

### Nameplate
Raised paper, 1px strong rule, 2px radius, four 7px screw heads, plate shadow. The h1 is the name; the role and school sit below in mono. No eyebrow above the h1.

### Rail / Navigation
Fixed 200px paper rail, 1px rule on the right; brand bolt in amber; five links in Archivo 0.9rem, ink-soft, hover/active ink; `aria-current="location"`. Mobile: 64px topbar, 44px menu button, full-screen dialog with focus trap, Escape, and scroll lock.

### Project Ledger Row
A row, not a card: 1px rules, an 8px port at the left, the name in title, the description in graphite, stack/tag in mono, an arrow at the right. Hover/focus: paper-raised ground, amber port, arrow shifts 2px. A private project is a static row: no hover, no arrow, tag "Stage · code privé".

### Certification Line
18px green check ring, name, issuer, mono "Validé" tag. No years and no verification links are invented; the certificate titles and issuers are the evidence.

### Security Layer
Charcoal panel, 8px green-soft LED, title in display, one-sentence lead, mono list, 1px rgba rules. Four layers: Réseaux, Systèmes, Application, Pratiques. No skill bars, no percentages.

### Timeline Entry
1px vertical rule, 11px node (the first is amber), mono period, title, organization, details. Experience and Formation are two columns at ≥801px and one column below.

### Contact Line
Charcoal panel, three full-width rows: email, LinkedIn, GitHub; icon, mono label, display value, arrow. Hover: rgba paper 0.06; focus: paper outline. No form and no phone.

### Video Frame
Caption above, never below: title, duration, download. Charcoal frame, `object-fit: contain`, `preload="none"`. The product demo uses a 16:9 frame; the mobile demo uses a `--portrait` modifier at the video's native 576 × 1248 ratio and caps at 420px wide, so no fake phone chrome is added. The mobile demo is never presented as a production screenshot.

### Named Rule
**The Evidence Rule.** Every visual is the real product recorded in use. No stock photo, no invented screenshot, no fake verification link.

## Do's and Don'ts

### Do:
- **Do** use amber as a signal on ports, pulses, bracket rules, and active markers; keep body text in ink.
- **Do** keep the h1 as the name, set in the nameplate; no eyebrow above it.
- **Do** use 2px radii; reserve 999px for LEDs, ports, and timeline nodes.
- **Do** use 1px rules to structure; the rail, the circuit, and the ledger rows carry the world.
- **Do** keep two grounds: paper and charcoal. Use charcoal only for the security and contact arguments.
- **Do** keep one authored motion: the amber pulse that crosses the Senguichet circuit once.
- **Do** use the real product demo and mobile demo; never fake a capture.
- **Do** keep contact one action away.

### Don't:
- **Don't** use violet or lavender anywhere, including the favicon.
- **Don't** use glow, colored halos, or gradient text.
- **Don't** use skill bars, percentages, or progress rings; certifications are validated lines.
- **Don't** use emoji or Unicode glyphs as icons; use the inline SVG set.
- **Don't** present a recording as a static screenshot.
- **Don't** invent years, verification links, repos, projects, or claims.
- **Don't** add a contact form without a backend; use the honest mailto.
- **Don't** use large rounded cards or nested cards; the ledger rows and panels are the structure.
- **Don't** set long prose in DM Mono.
