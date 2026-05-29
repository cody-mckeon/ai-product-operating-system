# Design Tokens Doctrine

This document defines the foundational design token system for an AI-native hospitality and experience product operating system. It bridges brand doctrine, component doctrine, future Figma systems, Tailwind implementation, AI-generated interfaces, and modular hospitality UX.

Design tokens are the operating language of the interface. They translate atmosphere, hierarchy, pacing, accessibility, instrumentation, and implementation into reusable decisions. A token should make the right choice easier for designers, engineers, product teams, and AI agents.

This is a systems and governance document, not a code implementation file. It does not define a Tailwind config, Figma variable collection, or component library yet. It defines the philosophy, naming posture, constraints, and production expectations those systems should follow.

## 1. Token System Philosophy

The token system exists to make premium hospitality experience design repeatable without making it formulaic. It should help teams compose cinematic, calm, conversion-aware interfaces from reusable foundations that preserve craft, accessibility, and operational clarity.

Core principles:

- **Atmosphere before ornament:** Tokens should support warmth, depth, pacing, and quiet confidence. They should not create decorative noise or novelty for its own sake.
- **Restraint is a product quality:** A premium interface should feel composed. Color, type, motion, shadow, and spacing should create hierarchy without shouting.
- **Tokens express doctrine:** A token is not only a value. It is a reusable decision about brand behavior, component behavior, responsive behavior, and implementation discipline.
- **Mobile is the proving ground:** Token choices must work first on small screens, touch interactions, variable connectivity, and high-intent journeys.
- **Modularity must preserve continuity:** AI-generated and experiment-driven interfaces may rearrange modules, but token usage should make every surface feel like one coherent hospitality system.
- **Telemetry should remain invisible to guests:** Measurement-ready states, variants, and experiments should be designed into the system without making the interface feel mechanical.
- **Implementation should be predictable:** Tokens should map cleanly to Tailwind, component APIs, and future Figma variables while remaining understandable to non-engineering teams.

When a token choice makes an interface feel louder, denser, trendier, or less trustworthy, the system should choose the calmer option.

## 2. Color System

The color system should create warm luxury, editorial clarity, and operational legibility. It should avoid flashy casino aesthetics, hyper-saturated accents, aggressive contrast blocks, and monochrome sameness.

Color families:

- **Foundation neutrals:** Warm whites, soft parchment tones, stone, ash, charcoal, and near-black. These carry most surfaces, typography, dividers, and quiet structure.
- **Hospitality warmth:** Champagne, cognac, muted gold, clay, rosewood, and warm taupe. These add premium atmosphere without turning into decoration.
- **Editorial depth:** Deep ink, wine, forest, night olive, and mineral blue. These support immersive storytelling, campaigns, hero moments, and high-emphasis surfaces.
- **Operational states:** Success, warning, error, info, and neutral status colors. These should be clear, accessible, and less theatrical than brand accent colors.
- **Experience accents:** Theme-specific tones for stay, dining, wellness, entertainment, package, membership, and itinerary contexts.

Color token roles:

- **Background tokens:** Page, surface, surface elevated, surface inverse, campaign, immersive, and overlay.
- **Text tokens:** Primary, secondary, tertiary, disabled, inverse, accent, success, warning, error, and link.
- **Border tokens:** Subtle, standard, strong, inverse, focus, selected, and error.
- **Action tokens:** Primary background, primary text, secondary border, secondary text, ghost text, destructive, and disabled.
- **Data and telemetry tokens:** Funnel, experiment, cohort, performance, availability, demand, and operational status indicators.

Governance rules:

- Use warm neutrals as the default atmospheric base.
- Reserve saturated color for decisive actions, status, and rare brand moments.
- Do not use more than one dominant accent family in a single module unless the module is a data visualization or operational dashboard.
- Avoid pure black on pure white as the default reading environment. Use softened extremes where accessibility allows.
- Campaign palettes may vary, but they must inherit the core contrast, typography, spacing, and CTA rules.
- Status colors must never rely on hue alone. Pair color with iconography, text, position, or state.

## 3. Typography Scale

Typography should create editorial pacing, decision clarity, and calm hierarchy. The scale should support cinematic storytelling without making operational interfaces feel like marketing pages.

Recommended token roles:

- **Display:** Used for immersive hero moments, major campaign titles, destination-led pages, and brand-level arrival experiences.
- **Headline:** Used for section titles, package names, featured modules, modal titles, and major decision points.
- **Title:** Used for card titles, comparison labels, editorial blocks, itinerary sections, and grouped controls.
- **Body:** Used for primary reading, descriptions, product details, inclusions, policies, and guidance.
- **Label:** Used for buttons, filters, tabs, metadata, form labels, tags, and compact navigation.
- **Caption:** Used for helper text, constraints, legal notes, timestamps, telemetry labels, and secondary metadata.
- **Numeral:** Used for prices, availability, dates, occupancy, event times, dashboard metrics, and progress indicators.

Scale principles:

- The scale should step deliberately. Avoid arbitrary intermediate sizes created for one-off layouts.
- Display sizes should be rare and contextually earned.
- Body text should remain highly readable on mobile.
- Label text should never become so small that touch surfaces feel cramped or inaccessible.
- Numerals should align clearly in pricing, availability, comparison, and telemetry contexts.

## 4. Font Usage Principles

The font system should balance editorial warmth with interface precision. Hospitality experiences benefit from a sense of taste, but the system must remain legible, scalable, and implementable.

Usage principles:

- **Primary sans:** Use for product UI, body copy, labels, navigation, cards, forms, and most components.
- **Editorial serif or refined display face:** Use sparingly for destination storytelling, campaign headlines, quotes, and select brand moments.
- **Numeral treatment:** Use tabular or stable numerals where prices, dates, counts, and metrics must compare cleanly.
- **Fallback discipline:** Every font role should define practical fallback behavior for performance, localization, and AI-generated surfaces.
- **No novelty fonts:** Avoid overly stylized type that limits accessibility, localization, or long-term brand durability.

Font governance:

- Do not mix more than two type families in normal product surfaces.
- Do not use decorative type for critical booking, pricing, accessibility, policy, or status information.
- AI-generated interfaces should choose role-based font tokens, not arbitrary font names.
- Campaign typography may create atmosphere, but conversion and operational information must remain system legible.

## 5. Spacing System

Spacing should create breathing room, sequence, and compositional balance. The system should avoid arbitrary spacing values and dense visual noise.

Spacing token families:

- **Micro spacing:** Inline gaps, icon-text spacing, compact metadata, control internals, and small state indicators.
- **Component spacing:** Button padding, card padding, form spacing, modal internals, list rows, and component groups.
- **Module spacing:** Section padding, rail spacing, editorial block spacing, comparison groups, and campaign bands.
- **Page spacing:** Top-level page rhythm, hero-to-content transitions, footer spacing, and long-form storytelling cadence.

Rules:

- Use smaller steps inside dense controls and larger steps between narrative modules.
- Increase vertical spacing before increasing decorative styling.
- Preserve enough spacing around CTAs so they feel intentional rather than wedged into content.
- Mobile spacing should be generous enough for touch, but compact enough to preserve momentum.
- Repeated modules should use consistent spacing so experimentation does not fracture the interface.

## 6. Layout Rhythm

Layout rhythm defines the pacing of attention across a page or flow. Hospitality interfaces should feel like a guided sequence: arrival, orientation, discovery, evaluation, decision, and continuation.

Rhythm principles:

- **Arrival needs air:** Hero and entry modules should establish place, mood, and promise with enough whitespace to feel composed.
- **Discovery needs cadence:** Rails, cards, editorial bands, and recommendations should be separated enough that users can understand each set.
- **Evaluation needs structure:** Comparison, pricing, availability, and package detail areas should become denser but not visually frantic.
- **Decision needs focus:** CTA sections should reduce competing elements and make the next step obvious.
- **Continuation needs softness:** Confirmation, save, itinerary, and cross-sell moments should feel helpful rather than extractive.

Tokenized rhythm should define consistent relationships between section padding, module gaps, media proportions, and CTA placement.

## 7. Grid and Container Rules

Grid and container tokens should support immersive storytelling, modular merchandising, operational dashboards, and mobile-first conversion flows.

Container roles:

- **Full bleed:** Used for immersive media, hero imagery, campaign atmosphere, and map-like experiences.
- **Wide content:** Used for editorial layouts, feature grids, comparison areas, and package storytelling.
- **Standard content:** Used for most page sections, forms, cards, and content modules.
- **Narrow content:** Used for focused reading, confirmation, policy, login, inquiry, and checkout steps.
- **Control container:** Used for filters, segmented controls, sticky booking bars, and dense operational UI.

Grid rules:

- Desktop grids may create editorial asymmetry, but content alignment must remain intentional.
- Mobile layouts should collapse into a single clear sequence unless comparison is the primary task.
- Cards in the same rail or grid should use stable dimensions to avoid layout shift.
- The system should prefer fewer, stronger columns over crowded layouts.
- Full-bleed media should still respect readable text zones, safe areas, and CTA reachability.

## 8. Border Radius System

Radius tokens should express refinement, not softness for its own sake. Hospitality interfaces should feel tailored and precise.

Radius roles:

- **None:** Edge-to-edge media, dividers, full-bleed sections, table grids, and flush operational surfaces.
- **Subtle:** Buttons, inputs, chips, compact cards, thumbnails, and controls.
- **Standard:** Content cards, offer cards, itinerary steps, dropdowns, and panels.
- **Large:** Modals, feature cards, immersive media frames, and premium package modules.
- **Pill:** Badges, segmented controls, availability states, and compact CTA treatments where the shape supports scanning.

Rules:

- Do not over-round every element. Excessive radius can make premium interfaces feel casual or generic.
- Cards should not rely on radius alone for hierarchy.
- Interactive controls in the same group should share a radius logic.
- Radius should map to component role, not personal preference.

## 9. Elevation and Shadow System

Elevation should clarify layers and focus without creating heavy visual effects. Shadows should feel natural, warm, and restrained.

Elevation roles:

- **Flat:** Default page sections, editorial content, static cards, and most surfaces.
- **Raised:** Interactive cards, dropdowns, sticky controls, and selected modules.
- **Floating:** Modals, popovers, command surfaces, date pickers, and mobile sheets.
- **Immersive overlay:** Text over media, image scrims, and campaign overlays.
- **Operational focus:** Drawers, panels, compare trays, booking summaries, and telemetry overlays.

Rules:

- Prefer contrast, spacing, and hierarchy before adding shadow.
- Use soft shadows with low opacity and natural blur.
- Avoid glossy, neon, or dramatic shadow effects.
- Sticky mobile CTAs should feel present but not heavy.
- Elevation must pair with accessible focus and layering behavior.

## 10. Motion Timing Tokens

Motion should clarify state, sequence, and continuity. It should never distract from booking, reading, comparing, or accessibility.

Timing roles:

- **Instant:** Checkbox state, toggle state, small icon feedback, and status changes.
- **Fast:** Hover, press, focus ring, menu reveal, chip selection, and small component transitions.
- **Standard:** Card expansion, sheet entry, tab change, filter update, and content reveal.
- **Slow:** Hero media transitions, campaign reveals, immersive storytelling moments, and guided itinerary transitions.
- **Ambient:** Subtle background media or atmospheric movement where it does not impair performance or reading.

Easing roles:

- **Standard ease:** Default UI transitions.
- **Enter ease:** Surfaces entering the viewport or becoming active.
- **Exit ease:** Surfaces leaving or collapsing.
- **Emphasis ease:** Rare moments where attention must be guided.

## 11. Transition Philosophy

Transitions should make the interface feel coherent and responsive. They should not perform for attention.

Principles:

- Use motion to confirm cause and effect.
- Use stagger sparingly for editorial reveal, not routine lists.
- Preserve scroll momentum and avoid trapping users in animation.
- Respect reduced motion preferences across all animated tokens.
- Do not animate critical price, availability, or policy changes in a way that hides the update.
- AI-generated surfaces should use tokenized motion roles, not bespoke animation timing.

## 12. CTA Styling Tokens

CTA tokens should make action feel like concierge guidance: clear, timely, and confidence-building.

CTA roles:

- **Primary:** Main booking, reservation, inquiry, save, package selection, or availability action.
- **Secondary:** Explore details, compare, learn more, view menu, see schedule, or continue browsing.
- **Tertiary:** Low-emphasis utility actions such as share, copy, dismiss, or edit.
- **Persistent:** Sticky mobile booking bars, booking summaries, and high-intent continuation actions.
- **Contextual:** Inline CTAs inside editorial, package, comparison, or recommendation modules.
- **Destructive:** Cancel, remove, clear, or abandon actions.

Rules:

- Primary CTAs should be visually decisive but not aggressive.
- CTA copy should describe the next guest action, not internal business goals.
- Do not stack multiple primary CTAs in one module.
- Persistent CTAs must not obscure content, legal requirements, or accessibility controls.
- Mobile CTAs should meet touch target requirements and remain reachable.
- CTA variants should be measurable through consistent state and event naming.

## 13. Surface Hierarchy

Surface tokens define how content layers relate to one another. The system should create depth without visual clutter.

Surface roles:

- **Page:** The base environment.
- **Section:** A full-width content band with a distinct purpose.
- **Module:** A reusable experience unit such as a hero, offer stack, rail, timeline, or comparison area.
- **Card:** A repeated item inside a module.
- **Panel:** A supporting surface for filters, summaries, details, or operational controls.
- **Overlay:** Modal, sheet, popover, drawer, or media overlay.
- **Status layer:** Availability, inventory, telemetry, validation, or operational readiness messages.

Rules:

- Do not nest cards inside cards.
- Page sections should not all become floating cards.
- Repeated cards should have clear content hierarchy and consistent internal spacing.
- Overlays should dim or separate the background without making the experience feel harsh.
- Status layers should be useful and quiet unless the condition is blocking.

## 14. Hospitality Experience Themes

Experience themes allow the system to adapt tone across hospitality domains while preserving shared foundations.

Theme families:

- **Stay:** Calm, warm, spacious, trust-building, and detail-oriented.
- **Dining:** Sensory, editorial, intimate, and schedule-aware.
- **Wellness:** Soft, restorative, clear, and low-friction.
- **Entertainment:** Energetic but controlled, immersive, date-aware, and crowd-conscious.
- **Package:** Curated, value-clear, itinerary-driven, and confidence-building.
- **Membership:** Polished, exclusive, transparent, and relationship-oriented.
- **Itinerary:** Practical, sequential, reassuring, and operationally precise.

Theme rules:

- Themes may alter accent color, imagery posture, icon emphasis, and editorial tone.
- Themes should not alter core accessibility, spacing, CTA, or state rules.
- Theme tokens should be additive, not replacements for the full system.
- AI-generated themes must declare the experience domain and journey stage before choosing tokens.

## 15. Responsive Breakpoints

Breakpoints should describe behavior, not only screen width. The system should define how experience modules transform across device contexts.

Breakpoint roles:

- **Compact mobile:** Single-column, thumb-first, high-priority content, persistent action patterns.
- **Standard mobile:** Sequential storytelling, simplified filters, stable cards, and concise CTAs.
- **Tablet:** Transitional layouts that may introduce two-column comparison or wider media.
- **Desktop:** Editorial composition, broader comparison, immersive media, and multi-module scanning.
- **Wide desktop:** Increased composition room without stretching text beyond readable measures.

Rules:

- Mobile should not receive a reduced-quality experience. It should receive a more focused one.
- Desktop should not simply widen mobile cards.
- Breakpoints should govern layout, density, and interaction model.
- Avoid breakpoint-specific one-offs unless a component has a documented reason.

## 16. Mobile Density Rules

Mobile density should balance breathing room with momentum. Premium mobile UX should feel focused, not sparse to the point of inefficiency.

Rules:

- Prioritize one decision per viewport when users are near conversion.
- Keep primary actions reachable and visually stable.
- Avoid long horizontal comparisons unless the task explicitly requires them.
- Use progressive disclosure for policies, inclusions, room details, package terms, and telemetry-heavy content.
- Do not hide critical price, date, availability, accessibility, or cancellation information behind decorative reveals.
- Use compact metadata rows only when labels remain readable and tap targets remain accessible.
- Sticky surfaces must account for browser chrome, safe areas, and scrollable content.

## 17. Visual Hierarchy Tokens

Visual hierarchy tokens should standardize how attention is assigned across modules and flows.

Hierarchy roles:

- **Hero priority:** One dominant promise, one primary action, and a clear next path.
- **Section priority:** A clear title, supporting context, and a meaningful content set.
- **Card priority:** Image or title first depending on module purpose, then fit signals, metadata, and action.
- **Operational priority:** Status, required action, validation, or blocking constraint first.
- **Telemetry priority:** Measurement labels should remain secondary unless the interface is an internal dashboard.

Hierarchy levers:

- Type scale
- Spacing
- Color contrast
- Media ratio
- Surface elevation
- Position
- Motion
- CTA emphasis

Rules:

- Do not solve hierarchy by making everything larger.
- Metadata should support decisions, not clutter cards.
- Price and availability should be legible but not visually crude.
- High-intent modules should reduce decorative hierarchy and increase task clarity.

## 18. Interaction State Tokens

Interaction tokens define how components communicate readiness, feedback, and system state.

Required states:

- **Default:** The resting state of a component.
- **Hover:** Desktop affordance without changing layout.
- **Pressed:** Immediate tactile feedback.
- **Focus visible:** Keyboard and assistive navigation indicator.
- **Selected:** Active choice, saved item, chosen filter, or current tab.
- **Expanded:** Revealed details, open accordions, drawers, and menus.
- **Loading:** Awaiting availability, price, recommendations, or AI response.
- **Disabled:** Unavailable or blocked interaction with a clear reason when needed.
- **Error:** Blocking issue or validation failure.
- **Success:** Confirmed action, saved state, booking progress, or completion.

Rules:

- State changes should not rely on color alone.
- Loading states should preserve layout dimensions to reduce shift.
- Disabled states should be visibly distinct but still readable.
- Focus visible styles must be designed, not left to chance.
- AI-generated components must include state guidance for interactive elements.

## 19. Accessibility Token Rules

Accessibility is a baseline requirement, not a review phase. Token decisions should make accessible implementation easier by default.

Rules:

- Text and interactive states must meet appropriate contrast requirements for their purpose and size.
- Focus indicators must be visible on all backgrounds, including media overlays.
- Touch targets must meet minimum size and spacing requirements on mobile.
- Motion tokens must include reduced motion alternatives.
- Status tokens must combine color with text, shape, icon, or position.
- Typography tokens must preserve readable line height and measure.
- Surface and overlay tokens must support screen reader order and keyboard escape patterns.
- Tokens used for experimentation must not create inaccessible variants.

Accessibility governance:

- No token may be promoted to production without contrast review.
- Campaign-specific palettes must be tested against primary CTA, text, border, and focus states.
- AI-generated interfaces should default to accessible token combinations and flag uncertain contrast.

## 20. AI Generation Guidance

AI-generated interfaces should use tokens as instruction, not decoration. The token system should help agents produce consistent, premium, measurable hospitality UX.

AI generation rules:

- Start by identifying journey stage, experience domain, guest intent, primary action, and telemetry intent.
- Choose token roles before choosing visual values.
- Use established spacing, type, color, surface, and CTA roles.
- Prefer fewer visual decisions with stronger hierarchy.
- Preserve mobile-first composition and touch accessibility.
- Avoid invented one-off colors, spacing values, shadows, type sizes, or animation timings.
- Do not generate fake luxury through excessive gold, black, gloss, sparkle, urgency, or ornament.
- Do not fabricate proof, testimonials, scarcity, availability, or operational details.
- Include states for loading, error, empty, disabled, and success when generating interactive surfaces.

AI-generated modules should be judged by whether they feel coherent, useful, accessible, measurable, and operationally truthful.

## 21. Tailwind Mapping Philosophy

Tailwind should become an implementation expression of the token doctrine, not the source of design intent.

Mapping principles:

- Map semantic token roles to Tailwind theme values where possible.
- Prefer named roles over raw color or spacing usage in component code.
- Keep Tailwind utilities aligned with system spacing, typography, radius, shadow, and motion scales.
- Avoid arbitrary values unless a component has an approved exception.
- Use component-level abstractions for repeated patterns such as CTA, card, surface, overlay, and status states.
- Keep experimental variants traceable to token roles so successful experiments can graduate cleanly.

Future Tailwind work should define:

- Semantic color names
- Type scale utilities
- Spacing scale alignment
- Radius scale
- Shadow and elevation tokens
- Motion duration and easing tokens
- CTA and surface component recipes
- State and focus conventions

No Tailwind config should be generated from this document until the Figma and implementation naming strategy is agreed.

## 22. Future Figma Variable System

The future Figma system should mirror the doctrine and make design decisions inspectable. Figma variables should support design, review, AI generation, and engineering translation.

Recommended collections:

- **Color:** Foundation, text, border, action, state, theme, and data tokens.
- **Typography:** Font family roles, size, line height, weight, letter spacing, and numeral behavior.
- **Spacing:** Micro, component, module, page, and responsive spacing.
- **Radius:** None, subtle, standard, large, pill, and component-specific aliases.
- **Elevation:** Shadow, overlay, scrim, and layer behavior.
- **Motion:** Duration, easing, transition role, and reduced motion alternatives.
- **Breakpoints:** Layout behavior labels and responsive component notes.
- **Component aliases:** CTA, card, panel, rail, hero, modal, sheet, comparison, and status aliases.

Figma governance:

- Variables should use semantic names that match implementation intent.
- Component variants should consume variables rather than hardcoded values.
- Theme modes should inherit from the foundation system.
- Experiment variants should be labeled and removable.
- AI-generated Figma work should create from variables and component roles, not isolated styling.

## 23. Operational Governance Rules

Token governance keeps the system coherent as teams, agents, experiments, and properties scale.

Governance rules:

- Every production token should have a role, rationale, owner, and implementation mapping.
- New tokens should be added only when an existing token cannot serve the need without weakening the system.
- One-off campaign values should remain local until repeated use proves they belong in the system.
- Experimental tokens should have a review date and success criteria.
- Deprecated tokens should define migration guidance before removal.
- Accessibility review is required for color, typography, motion, focus, and interactive state tokens.
- Component doctrine and token doctrine should evolve together.
- AI agents should be instructed to reuse approved token roles and flag missing tokens rather than inventing new ones silently.
- Tailwind, Figma, and documentation names should be reconciled before implementation work begins.
- Token changes that affect CTAs, pricing, availability, forms, or booking flows should include product and analytics review.

Decision standard:

If a token improves atmosphere but weakens clarity, accessibility, modularity, or operational truth, it should not ship. The system should make hospitality interfaces feel premium because they are composed, useful, trustworthy, and repeatable.
