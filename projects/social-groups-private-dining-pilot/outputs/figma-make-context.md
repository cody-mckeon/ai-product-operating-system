# Social Groups / Private Dining — Figma Make Context

## Context Scope

This is bounded visual context for future prompt authors. It represents 35 supplied desktop screenshots across RWLV Meetings & Events, Group Dining, Request for Proposal, Our Team, Zouk Private Sales, and FUHU Private Events, plus the supplied design-system documentation. Screenshot capture dates and responsive behavior are unknown.

This file is not a page prompt, concept, wireframe, recommendation, or layout specification.

## Observed RWLV Design Behaviors

### Composition

- RWLV editorial pages vary composition by content role: full-width image arrival, centered orientation, split image/text, image with overlapping copy panel, layered imagery, and contained closing action (`rwlv-meetings-events/*`, `rwlv-group-dining/*`).
- One primary image or heading leads each captured section; supporting content remains visually subordinate.
- Zouk alternates immersive nightlife imagery with pale neutral fields for team, proof, and specification content (`zouk-private-sales/*`).
- FUHU uses a slower alternating venue-documentation rhythm (`fuhu-private-events/*`).

### Hierarchy

- RWLV: red uppercase eyebrow → thin dark display heading → concise body → red action.
- Zouk: thin uppercase arrival statement → heavy uppercase section/venue headings → body/spec content.
- Inquiry: category tabs → form title → grouped field headings → labels/inputs → submit.

### Typography

- RWLV display headings are thin/light and uppercase; labels, nav, tabs, and CTAs are smaller uppercase forms.
- Zouk section headings are heavier and bolder, while arrival messaging remains thin.
- FUHU headings are thin and widely tracked.
- Exact font families and values are unverified and must not be invented.

### Color

- RWLV relies on white/pale surfaces, charcoal text, restrained red action/category accents, and a faint warm contour motif.
- Zouk relies on white, pale gray, charcoal, and black UI surfaces; saturated nightlife/event photography supplies local color.
- FUHU uses neutral surfaces and image-derived venue color, with black/white CTA treatments.
- Exact values are unverified.

### Imagery

- RWLV uses clear property, venue, dining, patio, ballroom, social, and service imagery.
- Zouk uses nightlife lighting, event crowds, venue branding, client events, and named-person portraiture.
- FUHU sequences establishing venue views, private spaces, patio, and floor plan.
- No supplied imagery confirms the new packages, in-suite hospitality, F1, NFR, bachelorette, or Athena engagement-shoot content.

### CTAs

- RWLV actions use red outlines, red text links, occasional solid red, and strong uppercase labels.
- Zouk Private Sales uses black-outlined, softly rounded proposal controls across several depths.
- FUHU uses pill controls with fill changing for background contrast.
- CTA labels are specific to the action: connect, book event, reserve, learn, filter, request proposal, submit.

### Cards And Panels

- RWLV uses cards selectively: event master/detail panel, overlapping white editorial panel, and thin-bordered contact cards.
- Zouk uses venue images, large neutral content chapters, and proof fields rather than a uniform card grid.
- RFP fields use simple thin borders without decorative card nesting.

### Spacing And Rhythm

- Arrival and editorial sections have generous space; form fields and specifications become denser but remain grouped.
- Pages alternate immersive and informational surfaces rather than sustaining one density.
- Proof and operational detail appear after enough identity/context has been established in the supplied Zouk and FUHU sequences.

## Observed RWLV Content Behaviors

- Category labels clarify whether a section concerns Meetings, Group Dining, Social Groups Concierge, private rooms, outdoor dining, or bars/lounges.
- Venue imagery is paired with concrete description, capacity, square footage, features, or floor plans when evaluation detail is needed.
- Team copy uses two models: collective destination experts on RWLV and named specialist biographies on Zouk.
- Proof includes client quotation/identity, past-event imagery, named experience, staff expertise, specifications, and physical floor plans.
- Inquiry forms ask different questions by event category while preserving a shared tabbed wrapper.

## Observed RWLV Interaction Behaviors

- RWLV Meetings shows in-page anchor navigation and a named venue selector.
- The RFP shows category tabs with a short red active underline.
- Zouk Private Sales shows repeated proposal controls and venue anchors; `outputs/current-state.md` records a live proposal overlay.
- Static screenshots do not establish sticky behavior, hover/focus states, carousel logic, validation, or response behavior.
- The screenshot labeled as a Zouk overlay does not visually show that state.

## Evidence-Supported Emulation Context

These are inferred grammar statements, not page recommendations.

| Inferred guidance | Evidence basis | Scope | Confidence |
| --- | --- | --- | --- |
| Emulate the observed separation of image-led arrival, editorial orientation, operational detail, and inquiry states. | All six screenshot families; `visual-principles.md` | Cross-family visual grammar | High |
| Emulate RWLV's restrained use of red as a category/action signal within white, warm, image-led compositions. | RWLV Meetings, Group Dining, Team, RFP | RWLV-branded contexts | High |
| Emulate the observed use of category eyebrows and precise CTA labels to clarify content role and action intent. | RWLV editorial and RFP screenshots; `typography.md` | RWLV content hierarchy | High |
| Emulate the visual idea of team evidence through people, roles, service context, and access—but preserve the distinction between RWLV collective framing and Zouk named profiles. | RWLV Team; Zouk Meet the Team | Team-led sections | High |
| Emulate portfolio breadth through a scannable overview followed by contextual detail, rather than an unexplained logo wall. | RWLV Event Venues; Zouk venue row/catalog; `ai-design-kit.md` | Portfolio-led sections | High |
| Emulate adjacent operational proof—capacity, features, floor plan, or approved client evidence—when a venue or service claim is presented. | Zouk/FUHU specs, RWLV Event Venues, Zouk proof | Evaluation/proof sections | High |
| Preserve visible RWLV property signals when property-wide credibility is in scope: resort navigation context, red accent roles, contour motif, environmental photography, and category language. | RWLV screenshot families | Property-wide RWLV context | High |
| Treat Zouk's saturated nightlife color as image-specific atmosphere, not as a general RWLV interface palette. | Zouk hero/proof/events versus RWLV pages | Cross-brand comparison | High |

## What Future Figma Prompts Should Emulate

- **Emulate the observed use of one dominant focal element per section.** Evidence: RWLV editorial modules, Zouk team/proof chapters, FUHU image/spec sections. Scope: composition. Confidence: High.
- **Emulate varied editorial structures rather than a wall of identical cards.** Evidence: RWLV Group Dining and Meetings. Scope: discovery content. Confidence: High.
- **Emulate clear transitions from atmosphere to practical detail.** Evidence: FUHU and Zouk venue chapters; RWLV Event Venues. Scope: evaluation content. Confidence: High.
- **Emulate human service evidence in a source-appropriate form.** Evidence: RWLV contextual host image/contact methods and Zouk named profile. Scope: team context. Confidence: High.
- **Emulate restrained, explicit actions after explanatory context.** Evidence: RWLV outlined CTAs and Zouk proposal repetition; design-system conversion guidance. Scope: CTA context. Confidence: High.
- **Emulate real venue and event specificity in imagery.** Evidence: all supplied screenshot families and `imagery.md`. Scope: imagery. Confidence: High.

## What Future Figma Prompts Should Avoid

- Avoid exact fonts, color values, spacing units, radii, or shadows not present in confirmed sources.
- Avoid treating Zouk's purple/blue nightlife photography as the universal property palette; it is localized to Zouk venue imagery.
- Avoid turning every portfolio area into an equal, repeated card when the reviewed pages use selectors, editorial chapters, image rows, and specification sections.
- Avoid inventing named team members, testimonials, client marks, package inclusions, event offers, venue capacities, or imagery.
- Avoid using `zouk-private-sales/08-request-proposal-overlay.png` as proof of overlay styling.
- Avoid a generic SaaS/dashboard grammar unsupported by the hospitality evidence.
- Avoid collapsing editorial discovery and long-form inquiry into the same visual density; the reviewed RFP is deliberately task-led and image-free.

## Prompt Context Block

> Ground visual work in the supplied desktop evidence. RWLV production pages combine white and pale warm surfaces, restrained red category/action cues, a faint contour motif, thin uppercase display headings, clear environmental hospitality photography, generous editorial spacing, and varied image/text compositions. Zouk Private Sales contributes a separate high-contrast grammar: saturated nightlife imagery, heavy uppercase section headings, named team portraiture, client/event proof, compact venue recognition, long-form venue specifications, and repeated black-outline proposal actions. FUHU contributes venue-specific image/spec/floor-plan sequencing. Preserve the distinction between RWLV property credibility and Zouk venue atmosphere. Use one dominant focal point per section, keep labels and actions explicit, and move from orientation to proof/detail to inquiry without inventing content, assets, tokens, people, claims, or interactions. This context does not specify a page concept or module order.

