---
name: Muhammad Anas — Portrait Studio
description: A portrait-led engineering portfolio on ivory paper and sage ground.
colors:
  background: "#f7f7f4"
  foreground: "#141817"
  primary: "#171b19"
  primary-foreground: "#fff"
  accent: "#e0e8e1"
  border: "#cbd5cd"
  emerald: "#256950"
  muted: "#4f6057"
  sage-ground: "#cad8d0"
  section-paper: "#fafbf8"
  conversation-sage: "#dce7dd"
  conversation-ink: "#203d2d"
  tag-sage: "#e6ece6"
  tag-ink: "#374f3f"
  field-paper: "#fcfcf8"
  field-border: "#acbfaf"
  field-ink: "#17251c"
  error: "#923c2a"
typography:
  display:
    fontFamily: "Moderustic, sans-serif"
    fontSize: "94px"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  role:
    fontFamily: "Moderustic, sans-serif"
    fontSize: "44px"
    fontWeight: 800
    lineHeight: 1.18
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Moderustic, sans-serif"
    fontSize: "clamp(52px, 5.5vw, 84px)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  section:
    fontFamily: "Moderustic, sans-serif"
    fontSize: "clamp(36px, 3.4vw, 52px)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Moderustic, sans-serif"
    fontSize: "27px"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Moderustic, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "Moderustic, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
  tag:
    fontFamily: "Moderustic, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  tag: "5px"
  image-inset: "6px"
  control: "8px"
  card: "12px"
  canvas-mobile: "14px"
  menu: "16px"
  canvas: "18px"
  circle: "50%"
spacing:
  compact: "8px"
  control-gap: "12px"
  small: "16px"
  medium: "24px"
  large: "32px"
  column: "38px"
  section-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.accent}"
  input:
    backgroundColor: "{colors.field-paper}"
    textColor: "{colors.field-ink}"
    rounded: "{rounded.control}"
    padding: "13px 15px"
  tag:
    backgroundColor: "{colors.tag-sage}"
    textColor: "{colors.tag-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.tag}"
    padding: "5px 10px"
  featured-card:
    rounded: "{rounded.card}"
    padding: "0 24px 24px"
  contact-circle:
    backgroundColor: "{colors.conversation-ink}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.circle}"
    width: "150px"
    height: "150px"
---

# Design System: Muhammad Anas — Portrait Studio

## Overview

**Creative North Star: "Portrait Studio"**

A photographic grayscale portrait, sage arch, and curved emerald line establish the personal character of this engineering portfolio. Bold Moderustic lettering sits on a quiet ivory paper canvas inset into sage ground. The finished system feels calm, personal, and confident, with generous space around direct project evidence.

The approved source is `.impeccable/mocks/decision/portrait/portrait-studio.png`. Its obtainable-font match is self-hosted Moderustic: heavy display and role lettering use the upper end of the selected 700–800 range, while many implemented headings use the variable font's 750 weight. Home, About, Projects, Writing, Contact, and project notes share the same material, controls, rules, and typography.

**Key Characteristics:**
- Grayscale owner portrait with sage arch and emerald linework.
- Ivory paper inset into a sage surrounding field.
- Bold sans hierarchy with restrained supporting copy.
- Thin rules, modest rounded corners, and black primary actions.
- Semantic HTML content and visible keyboard focus.

## Colors

The palette is a cool ivory and sage family, anchored by near-black text and restrained emerald interaction cues. The frontmatter records the CSS source colors; the paper image changes the perceived field slightly in rendered output.

### Primary

- **Near-black control ink** (`primary`): primary actions and resume controls, with white labels.
- **Emerald** (`emerald`): current navigation rule, hovered links, focus outlines, and form caret.
- **Conversation ink** (`conversation-ink`): circular contact action and selected project filters.

### Neutral

- **Ivory paper** (`background`): shared canvas beneath the repeating paper plate.
- **Sage ground** (`sage-ground`): the page surround framing the canvas.
- **Section paper** (`section-paper`): featured-work and footer fields.
- **Conversation sage** (`conversation-sage`): the contact band.
- **Text ink** (`foreground`) and **muted sage ink** (`muted`): headings and supporting copy.
- **Quiet sage rule** (`border`): row dividers and outline controls.
- **Accent sage** (`accent`): outline-button hover surface.
- **Tag sage / tag ink**: small technology labels.
- **Field paper / field border / field ink**: contact form surfaces and content.
- **Error rust** (`error`): failed contact feedback.

**The Emerald Route Rule.** Use emerald to connect orientation and interaction: links, current navigation, focus, and the portrait's contact line.

## Typography

**Display and body font:** Moderustic, with sans-serif fallback. The local variable file is `public/fonts/Moderustic.ttf`, loaded with `next/font/local`, `display: swap`, and supported weights 300–800.

Heavy display lettering gives the name and engineering role the strongest emphasis. Supporting paragraphs retain a readable, quieter cadence. Headings balance line breaks; their negative tracking is deliberate.

### Hierarchy

- **Display:** frontmatter `display`, for the desktop hero name; responsive sizes are detailed below.
- **Role:** frontmatter `role`, for the hero's full-stack role, in muted dark sage.
- **Headline:** frontmatter `headline`, for route introductions.
- **Section:** frontmatter `section`, for major content sections.
- **Title:** frontmatter `title`, for archive project headings; featured headings are smaller (19px).
- **Body:** frontmatter `body`, with introductory copy commonly enlarged to 17–19px. Project and editorial paragraphs use observed measures of 45–65ch.
- **Control and tag:** frontmatter roles for actions and compact technology labels. Navigation uses sentence case (14px) rather than uppercase tracking.

**The Name First Rule.** Preserve the large, centered name-to-role hierarchy in the portrait-led home introduction.

## Layout

The shared canvas is inset from the viewport with a nominal 26px outer vertical margin, width `calc(100% - 106px)`, and a minimum height matching the viewport minus those margins. Main content uses a 1126px maximum width and an 88% fluid width. The paper plate repeats at 1430 × 998px. Two partially clipped hairline circles extend the portrait's curved language into the ground.

At the wide desktop composition, the home hero has a measured 840px height: portrait first, then centered name, role, summary, actions, and capability strip. Below it, featured work uses a heading column and two cards. Other routes use two-column introductions, archives, experience rows, and contact copy/form; horizontal rules organize longer content.

Between 1101px and 1535px, the hero and header scale with viewport units to retain the approved desktop proportions. At 1100px and below, the canvas has 20px outer margins, desktop navigation changes to a menu dialog, the hero returns to normal content flow, and featured work becomes two columns. At 760px and below, outer margins shrink to 12px, canvas corners tighten, most sections become one column, hero actions stack, and capabilities become a two-column list. The hero name uses `clamp(42px, 10.7vw, 66px)` with a 9ch measure; the role becomes 27px. Mobile sections commonly use 58–68px vertical space; desktop narrative sections commonly use 85–112px.

## Elevation & Depth

The implementation uses tonal fields, paper grain, thin borders, and the photographic portrait for depth. It has no box-shadow vocabulary. Project screenshots sit on sage wells, and the contact band changes the surface tone. The mobile menu overlays the page with translucent dark sage and a solid ivory panel.

Motion stays brief and local: the portrait arrives once over 1.2 seconds with a 10px rise and saturation settling; screenshots scale to 1.025 on hover over 0.5 seconds. Controls change color over 0.2 seconds, and the pending contact icon rotates over one second. Reduced-motion preferences disable animations and transitions and use automatic scrolling.

## Shapes

The frontmatter records the observed corner scale. Small technology labels are gently rounded; controls and form fields use modest corners; project cards and image wells use larger corners; the outer canvas uses the broadest corners. The MA brand mark and contact action are circles. Dividers and card/field borders are one pixel. Focus uses a two-pixel emerald outline with a five-pixel offset; fields use a separate two-pixel pale-sage focus outline with a two-pixel offset.

**The Quiet Edge Rule.** Use thin sage rules and modest corners to define structure; preserve the paper and portrait as the principal sources of depth.

## Components

### Actions

Primary buttons use near-black fill, white semibold labels, a 48px height, and 24px horizontal padding. Small resume controls use 40px height and 16px horizontal padding; menu icon buttons are 44px squares. Primary hover reduces the fill to 85% opacity. Outline controls use the quiet sage border and accent-sage hover fill. Secondary text links have an underline with generous offset and emerald hover. Disabled buttons ignore pointer interaction and have half opacity.

### Fields

Contact inputs and textarea use field-paper surfaces, one-pixel sage borders, 13px by 15px padding, and 15px text. Labels are visible, 14px, and semibold. Placeholder text remains legible. The textarea is vertically resizable with a 155px minimum height. Hover darkens the border; focus adds the pale-sage outline. Pending, success, and rust-colored error feedback remain visible alongside the form.

### Navigation

The desktop header centers its sentence-case links between the brand and social/resume actions. Current-page links receive an emerald underline. The mobile Radix dialog provides large links, a close control, and a resume action; active links turn emerald. The skip link appears on keyboard focus. All page labels, headings, actions, and capability names are semantic HTML, while the hero plate contains only the portrait artwork.

### Project cards and tags

Featured cards have a quiet border, inset image, compact title, description, and small sage technology tags. The archive uses larger borderless cards in a two-column grid. Project images retain their full screenshots with `object-fit: contain`; hovering enlarges them slightly and turns the title emerald. The project without an image has an explicitly typographic C++ cover.

### Portrait and conversation close

The actual `public/assets/plates/portrait.png` plate carries the grayscale owner likeness, sage arch, fade edge, and emerald line. The actual `paper.png` plate carries the paper material. Preserve these assets with their supplied artwork rather than redrawing their material in CSS. A contact link sits at the desktop portrait line; the broader contact band repeats the sage field and circular dark-green action across routes.

## Do's and Don'ts

### Do:

- Do retain the actual portrait and paper plates, with text and controls rendered as semantic HTML.
- Do carry Moderustic, sage/ivory fields, black actions, and thin rules across routes.
- Do keep real project screenshots contained and preserve the distinction between source links, demos, and project notes.
- Do preserve visible focus, readable form labels, mobile reflow, and reduced-motion behavior.

### Don't:

- Don't replace the owner portrait, arch, emerald line, or paper material with generic substitutes.
- Don't introduce decorative terminal imitation or generic image grids into the approved world.
- Don't turn quiet structural rules into a shadow-heavy card system.
- Don't embed navigation, headings, or action labels in artwork.
