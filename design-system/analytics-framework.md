# Analytics Framework

This framework defines the analytics-aware UX and telemetry doctrine for an AI-native hospitality and experience product operating system. It treats measurement as part of experience design: every page, component, call to action, package, offer, and conversion path should explain what the guest is trying to do, what the business needs to understand, and how future AI systems can use the signal responsibly.

The framework is informed by real hospitality and experience platforms such as Resorts World Las Vegas, where guest intent may move fluidly across entertainment, rooms, dining, wellness, events, nightlife, packages, loyalty, and on-property planning. A hospitality operating system cannot rely on generic web analytics alone. It needs behavioral context, operational clarity, conversion instrumentation, and reusable telemetry structures that can scale across multiple brands, venues, markets, and guest journeys.

This document is a systems doctrine and operational framework. It does not define implementation scripts, dashboards, or vendor-specific technical setup. It defines the standards those artifacts should follow.

## Framework Object Model

All analytics systems should preserve a shared set of product objects. These objects make the framework reusable across UX design, telemetry implementation, dashboard design, experimentation, and AI-assisted analysis.

Core objects:

- Guest journey: the end-to-end path from discovery to conversion, expansion, or abandonment.
- Surface: a page, route, screen, modal, drawer, booking widget, or third-party handoff point.
- Module: a reusable content or interaction block such as a hero, package rail, room card grid, offer banner, calendar, gallery, or sticky CTA.
- Entity: the object being evaluated, such as a room, suite, show, restaurant, treatment, package, offer, venue, event, or amenity.
- Action: the meaningful behavior performed by the guest.
- Signal: the interpreted behavioral meaning of one or more actions.
- Funnel: the measurable sequence of steps toward a conversion or operational outcome.
- Experiment: a controlled product variation tied to a hypothesis, audience, metric set, and decision rule.
- Insight: an evidence-backed interpretation that recommends a product, marketing, revenue, or operational response.

Every analytics artifact should be able to say which journey, surface, module, entity, action, signal, and funnel it represents. If it cannot, the artifact is probably too vague to govern.

## 1. Analytics Philosophy

Analytics exists to improve guest understanding, operational decision-making, and product quality. It is not a scoreboard for detached traffic metrics. The product should measure behavior only when the measurement has a clear UX, business, operational, or experimentation purpose.

Hospitality analytics must recognize that many guest journeys are exploratory before they are transactional. A guest may arrive through an artist page, browse a restaurant, consider a spa treatment, compare room types, inspect a package, leave, return on mobile, and convert later through a different surface. The framework must preserve this journey context instead of reducing the experience to a final purchase event.

The doctrine is built around five ideas:

- Analytics should be designed into UX decisions before launch.
- Events should describe meaningful guest intent, not implementation trivia.
- Telemetry should be modular enough to work across rooms, entertainment, dining, wellness, packages, and offers.
- Reporting should help operators decide what to do next.
- AI systems should use analytics to suggest improvements, not replace accountable product judgment.

Good analytics answers practical questions:

- What did guests notice?
- What did they understand?
- What did they consider?
- Where did they hesitate?
- What did they try that did not work?
- Which content, offer, or package influenced conversion?
- Which journey patterns should product, marketing, revenue, and operations improve?

Bad analytics counts activity without context. Page views, impressions, clicks, and time on page are useful only when connected to a journey hypothesis, a conversion path, or a product decision.

## 2. Telemetry-Aware UX Principles

Telemetry-aware UX means the interface is designed so meaningful behavior can be interpreted without making the guest experience feel surveilled, cluttered, or mechanically optimized. Measurement should follow the shape of the experience.

Core principles:

- Every important module should have a known measurement purpose.
- Every key CTA should have a defined intent, location, destination, and funnel role.
- Every conversion journey should expose progress, hesitation, abandonment, and recovery signals.
- Every reusable component should support reusable analytics metadata.
- Every experiment should start with a guest problem, not a button-color guess.
- Every dashboard should map to an operating decision.

Telemetry-aware UX does not mean every interaction needs an event. It means the system can distinguish between high-signal actions and noise. For example, a guest opening room details, checking dates, changing party size, and comparing packages carries stronger intent than a passive page view. A guest tapping the same inactive element repeatedly is a friction signal, not engagement.

Designers should consider telemetry when defining:

- Module hierarchy and content priority
- CTA labels, placement, and destination
- Offer visibility and package merchandising
- Mobile navigation behavior
- Filter, sort, and discovery patterns
- Multi-step booking paths
- Error, empty, loading, and unavailable states
- Cross-sell surfaces and post-selection recommendations

Telemetry is part of the UX contract. A component is not fully designed until the team can explain what guest behavior it should reveal.

## 3. Behavioral Measurement Strategy

Behavioral measurement should be organized around intent strength. The system should separate primary behavioral signals, secondary engagement signals, conversion intent indicators, and friction indicators.

Primary behavioral signals represent clear guest intent:

- Selecting dates or changing stay parameters
- Viewing room details after browsing listings
- Starting a booking, reservation, ticketing, or package flow
- Selecting a package, offer, restaurant, show, treatment, or venue
- Opening price, availability, inclusions, or policy details
- Adding an item to cart, itinerary, favorites, or booking flow
- Beginning checkout or lead submission
- Completing purchase, reservation, inquiry, or account action

Secondary engagement signals provide context but should rarely be treated as success metrics alone:

- Scroll depth across meaningful content zones
- Module impressions with sufficient viewport exposure
- Carousel navigation or media interaction
- Filter and sort usage
- Navigation menu opens
- Tab changes within experience detail pages
- Video starts, pauses, or completions
- Map, gallery, FAQ, or policy expansion

Conversion intent indicators show that a guest is evaluating a transaction:

- Repeated price inspection
- Date flexibility exploration
- Occupancy or party-size changes
- Package comparison
- Offer code entry
- Loyalty sign-in during purchase consideration
- Return visits to the same experience
- Availability checks
- CTA clicks that begin transactional flows

Friction indicators reveal difficulty, confusion, or broken expectations:

- Rage clicks
- Dead clicks
- Repeated form errors
- Backtracking between steps
- Booking date changes after price exposure
- Abandonment after fee, policy, availability, or account-gate exposure
- Repeated taps on disabled CTAs
- Mobile keyboard dismissal without form progress
- Navigation loops without deeper engagement

The operating system should treat these categories consistently across hospitality verticals so that room, entertainment, culinary, wellness, and package journeys can be compared without flattening their differences.

## 4. Experience Funnel Architecture

Experience funnels should model how guests move from discovery to commitment. Hospitality journeys are rarely linear, so funnels should allow re-entry, cross-sell, and assisted conversion rather than assuming a single page sequence.

Standard funnel stages:

1. Discovery: guest encounters a property, offer, event, package, venue, or category.
2. Orientation: guest understands what is available, where it happens, when it happens, and why it matters.
3. Consideration: guest compares options, inspects details, checks dates, views prices, or reviews inclusions.
4. Intent: guest selects a CTA, starts booking, adds to itinerary, or begins reservation.
5. Commitment: guest completes booking, purchase, reservation, inquiry, or sign-up.
6. Expansion: guest accepts cross-sell, upsell, package add-on, itinerary addition, loyalty action, or post-conversion recommendation.
7. Recovery: guest returns after abandonment, responds to remarketing, changes parameters, or completes through an assisted path.

Each funnel should define:

- Entry surfaces
- Core content modules
- Primary and secondary CTAs
- Required decision points
- Optional consideration behaviors
- Known friction points
- Conversion event
- Attribution rules
- Reporting owner
- Experimentation backlog

The goal is to understand both the path that converts and the moments where guests need more clarity, confidence, or relevance.

## 5. Hospitality Conversion Framework

Hospitality conversion is multi-intent. A guest might not be ready to book a room but may be ready to reserve dinner, buy show tickets, join a loyalty program, explore a package, or save a spa treatment. The system must support a hierarchy of conversions.

Primary conversions:

- Room booking completion
- Package booking completion
- Entertainment ticket purchase
- Restaurant reservation
- Wellness appointment booking
- Event inquiry submission
- Offer redemption
- Account or loyalty enrollment

Secondary conversions:

- Booking flow start
- Availability check
- Date selection
- Offer or package detail view
- Add to itinerary or favorites
- Reservation handoff to third-party provider
- Click to call
- Directions or map interaction
- Email or SMS sign-up

Micro-conversions:

- Gallery interaction
- Menu, schedule, or amenity expansion
- Policy view
- FAQ view
- Share action
- Save action
- Price detail expansion
- Room comparison action
- Package inclusion view

Each conversion should declare its guest meaning and operational meaning. For example, a package detail view may mean a guest is exploring value, while operationally it may indicate demand for bundled experiences, merchandising quality, or offer-market fit.

## 6. Package Journey Instrumentation

Packages are hospitality compositions. They combine room nights, entertainment, dining, wellness, resort credit, exclusive access, or time-bound offers into a single decision object. Their analytics must measure both the package as a product and the guest's understanding of its contents.

Package journey stages:

- Package impression
- Package card engagement
- Package detail view
- Inclusion exploration
- Date or availability check
- Room or experience component selection
- Price inspection
- Policy or restrictions view
- CTA click
- Booking start
- Booking completion
- Abandonment or recovery

Package engagement metrics:

- Impression-to-detail rate
- Detail-to-availability-check rate
- Inclusion interaction rate
- Package CTA click-through rate
- Package booking start rate
- Package booking completion rate
- Abandonment by step
- Revenue per package visitor
- Cross-sell attachment rate
- Package comparison behavior
- Repeat package visits

Package telemetry should preserve package identity, package category, seasonality, included experience types, offer eligibility, price band, availability state, CTA location, and source surface. A resort package that includes a concert, dinner credit, and two-night stay should be attributable as a package journey, not split into disconnected room and entertainment metrics.

Package analytics should answer:

- Which packages attract attention?
- Which inclusions create confidence?
- Which restrictions create friction?
- Which guest segments prefer bundled value versus standalone booking?
- Which source surfaces drive qualified package intent?
- Which package combinations support operational yield?

## 7. CTA Measurement Philosophy

CTAs are declarations of guest intent. They should be instrumented with enough context to explain what the guest saw, what they chose, and where the system sent them.

Every material CTA should define:

- CTA text
- CTA type
- CTA priority
- Source page
- Source module
- Destination
- Funnel stage
- Associated entity
- Associated offer or package
- Position within viewport or module
- Experiment assignment when applicable

CTA types:

- Primary conversion CTA
- Secondary consideration CTA
- Navigation CTA
- Cross-sell CTA
- Upsell CTA
- Recovery CTA
- Utility CTA
- Support CTA

CTA measurement should avoid treating all clicks as equal. A "Book Now" click on a hero module, a sticky mobile footer, a room card, and a package detail page may represent different levels of readiness. The analytics structure should preserve this context.

CTA performance should be assessed through downstream quality, not only click-through rate. A CTA that receives many clicks but produces abandonment may be misleading, unclear, or over-promising. A lower-volume CTA with high booking completion may be more valuable.

## 8. Scroll Depth and Attention Mapping

Scroll depth should measure whether guests reach meaningful content zones, not arbitrary percentages alone. Hospitality pages often combine hero media, offer cards, venue details, schedules, galleries, maps, FAQs, and booking widgets. The system should map attention by content purpose.

Attention zones may include:

- Hero orientation
- Primary offer or package module
- Experience overview
- Availability or date module
- Room, event, or venue cards
- Dining menu or culinary highlights
- Wellness treatment overview
- Inclusion and amenity details
- Pricing and policy details
- Gallery or media proof
- Location and logistics
- FAQ or reassurance content
- Related experiences

Scroll and attention metrics:

- Zone reached
- Zone visible duration
- Zone interaction rate
- CTA visibility before click
- Sticky CTA exposure
- Content sequence completion
- Drop-off before critical information
- Re-scroll or backtracking behavior

Attention mapping should help teams understand whether important decision-support content is discoverable. If guests abandon before reaching package inclusions or room policies, the design may need to surface reassurance earlier.

## 9. Engagement Signal Taxonomy

Engagement signals should be classified by guest meaning. The same interaction can have different value depending on context.

Exploratory engagement:

- Browsing category pages
- Opening navigation menus
- Viewing multiple experience cards
- Scanning galleries
- Using filters without selecting dates

Evaluative engagement:

- Comparing room types
- Opening package inclusions
- Viewing menus, schedules, or treatment details
- Checking prices
- Reviewing policies
- Returning to the same detail page

Transactional engagement:

- Selecting dates
- Starting booking
- Adding to cart
- Choosing seats, times, rooms, or package components
- Entering contact or payment information

Reassurance engagement:

- Viewing cancellation policies
- Reading FAQs
- Opening accessibility, location, age restriction, parking, or dress code information
- Viewing reviews, gallery media, or venue proof

Assistance engagement:

- Clicking call, chat, concierge, directions, or contact options
- Opening support content after form errors
- Returning through saved itinerary or email links

This taxonomy allows analytics, design, and AI optimization systems to distinguish curiosity from intent and friction from healthy consideration.

## 10. Friction Detection Systems

Friction detection should identify where guests struggle to progress, understand value, or trust the next step. Friction is not only technical failure. It can be conceptual, emotional, operational, or commercial.

Common hospitality friction categories:

- Availability mismatch
- Price surprise
- Fee or policy uncertainty
- Package restriction confusion
- Date or time incompatibility
- Mobile form difficulty
- Third-party handoff confusion
- CTA ambiguity
- Navigation dead ends
- Offer eligibility uncertainty
- Account or loyalty interruption
- Slow-loading media or booking widgets

Friction indicators:

- Rage clicks
- Dead clicks
- Repeated disabled CTA taps
- Form error clusters
- Drop-off after price reveal
- Drop-off after policy reveal
- Repeated date changes without progress
- Backtracking from booking to detail pages
- Navigation loops
- Search refinements with no result selection
- Mobile keyboard open without submission
- Timeouts or reloads during checkout

Friction reporting should connect signals to surface, component, journey, device, and guest segment where possible. The goal is not to shame a metric but to identify the next repair.

## 11. Rage Click and Dead Click Frameworks

Rage clicks and dead clicks should be treated as operational alerts when they occur on conversion-critical surfaces.

Rage clicks indicate repeated rapid interaction in a tight area. They may suggest broken controls, slow response, unclear disabled states, accidental overlays, or user impatience. Dead clicks indicate interaction with an element that appears clickable but produces no meaningful response.

High-priority surfaces for rage and dead click monitoring:

- Booking CTAs
- Date pickers
- Room selectors
- Package cards
- Offer code fields
- Checkout progression controls
- Restaurant reservation widgets
- Entertainment seat or ticket selectors
- Mobile navigation
- Sticky CTA bars
- Filter and sort controls

Rage and dead click events should include:

- Page or route
- Component or module
- Element label or semantic role
- Device type
- Viewport size
- Funnel stage
- Associated entity
- Error state if present
- Experiment variant if present

These signals should trigger UX review when they cluster around conversion steps, newly launched modules, mobile breakpoints, or experiment variants.

## 12. Mobile Interaction Telemetry

Hospitality conversion is often mobile-first. Guests may browse from social media, search while traveling, compare options at night, book on the way to the property, or interact while already on-site. Mobile telemetry must measure touch behavior, layout exposure, and compressed decision-making.

Mobile-specific signals:

- Sticky CTA impressions and taps
- Tap target errors or repeated taps
- Mobile navigation opens and selections
- Filter drawer opens, applies, and cancels
- Date picker opens, changes, and abandonment
- Keyboard focus, blur, and form completion
- Scroll depth by content zone
- Swipe, carousel, and gallery interactions
- Click-to-call, map, and directions usage
- App handoff or third-party widget handoff
- Orientation changes where relevant

Mobile conversion behavior should be evaluated by task efficiency:

- Can guests find the right experience quickly?
- Can they understand price, availability, and restrictions without excessive scrolling?
- Can they progress through forms without repeated correction?
- Are sticky CTAs visible but not intrusive?
- Does navigation support rapid category switching?
- Are high-intent actions reachable within thumb-friendly zones?

Mobile reporting should avoid desktop-biased assumptions. Shorter sessions can still be high intent. A mobile guest who selects dates and taps call may be more valuable than a desktop guest who browses many pages passively.

## 13. Navigation Intent Tracking

Navigation is a map of guest intent. It should show what guests seek, what categories are discoverable, and where the information architecture supports or blocks movement.

Navigation telemetry should track:

- Menu opens
- Category selections
- Search usage
- Header CTA clicks
- Footer link clicks
- Breadcrumb use
- Cross-category movement
- Return-to-home behavior
- On-page anchor navigation
- Mobile drawer engagement

Navigation intent categories:

- Stay intent
- Entertainment intent
- Dining intent
- Wellness intent
- Offer intent
- Package intent
- Event intent
- Loyalty intent
- Operational intent, such as parking, directions, policies, or contact

Navigation performance should be assessed through downstream engagement. A top-level nav item is effective when it leads guests into qualified discovery or conversion behavior, not simply when it gets clicked.

Navigation analysis should answer:

- Which categories guests seek first
- Which labels create confusion
- Which paths lead to meaningful consideration
- Which paths loop or dead-end
- Which mobile nav items deserve priority
- Which cross-category journeys suggest packaging opportunities

## 14. Experience Discovery Metrics

Experience discovery covers how guests find entertainment, rooms, dining, wellness, and other property experiences. Discovery metrics should reveal whether the product helps guests form a plan.

Discovery surfaces:

- Homepage modules
- Category landing pages
- Search results
- Experience listing pages
- Offer and package modules
- Calendar or event listings
- Editorial guides
- Related experience modules
- On-property planning surfaces

Homepage engagement analysis should identify which modules create qualified exploration. A homepage hero, entertainment rail, room offer module, culinary feature, wellness promotion, and package carousel should be evaluated by downstream journey quality, not isolated clicks. The homepage should reveal whether guests understand the property's experience ecosystem and whether the page is routing them toward relevant next steps.

Discovery metrics:

- Category impression-to-selection rate
- Listing impression-to-detail rate
- Filter usage and apply rate
- Sort usage and downstream selection
- Search result selection rate
- No-result rate
- Detail view depth
- Save or itinerary add rate
- Related experience click-through
- Cross-category exploration rate

Discovery analytics should preserve content context. A guest selecting a culinary experience from a concert detail page carries a different meaning than a guest selecting it from global navigation. The first suggests journey expansion; the second suggests direct dining intent. A guest opening a wellness treatment from a package page may indicate premium trip planning, while the same action from search may indicate direct spa intent.

## 15. Offer and Package Attribution

Offer and package attribution should explain how commercial messages influence guest behavior without over-crediting the last click. Hospitality guests often need multiple exposures before committing.

Attribution inputs:

- First exposure
- Meaningful impression
- Detail engagement
- CTA click
- Availability check
- Booking start
- Conversion
- Cross-sell or upsell acceptance
- Return session exposure

Attribution dimensions:

- Offer ID or package ID
- Offer category
- Package category
- Source page
- Source module
- Campaign source
- Guest segment when available and appropriate
- Device type
- Stay dates or event dates
- Booking window
- Price band
- Availability state

Offer measurement should distinguish:

- Discovery influence
- Consideration influence
- Transaction influence
- Recovery influence
- Expansion influence

The system should avoid simplistic "last CTA wins" thinking. A homepage package card, an email landing page, a room detail upsell, and a checkout add-on may all contribute to the same guest decision.

## 16. Entertainment Funnel Instrumentation

Entertainment journeys have distinct discovery and urgency patterns. Guests may browse by artist, date, venue, genre, price, seating, or trip timing. Instrumentation should capture the relationship between event interest and broader hospitality conversion.

Entertainment funnel stages:

- Event impression
- Event detail view
- Date or showtime inspection
- Seat, ticket, or availability interaction
- Price inspection
- Ticket purchase start
- Ticket purchase completion
- Related room, dining, or package engagement
- Post-purchase expansion

Entertainment metrics:

- Event card click-through
- Artist or event detail engagement
- Date selection rate
- Ticketing handoff rate
- Handoff completion when available
- Entertainment-to-room cross-sell rate
- Entertainment-to-dining cross-sell rate
- Event package engagement
- Abandonment after price or availability
- Calendar filter effectiveness

Entertainment instrumentation should preserve event name, venue, date, category, campaign context, ticketing provider handoff, related package ID, and source module. When a guest starts with entertainment and later books a room, the operating system should recognize that entertainment may have created travel intent.

## 17. Room Booking Intent Signals

Room booking intent should be measured through progressive commitment, not only final booking. Guests often evaluate dates, price, room type, resort fees, cancellation policies, and package options before purchase.

Room intent signals:

- Date picker open
- Check-in and check-out selection
- Occupancy change
- Promo or offer code entry
- Room listing view
- Room detail view
- Room comparison
- Rate plan expansion
- Price detail expansion
- Policy view
- Add room or select rate
- Booking step progression
- Payment start
- Booking confirmation

Room booking friction signals:

- No availability result
- Date re-selection after price reveal
- Occupancy changes without room selection
- Abandonment after fees or policy exposure
- Repeated promo code errors
- Backtracking from checkout to room listings
- Mobile form correction clusters

Room reporting should connect product behavior with revenue and operations:

- Search-to-availability rate
- Availability-to-room-selection rate
- Room-selection-to-checkout rate
- Checkout completion rate
- Average booking window
- Package attach rate
- Offer redemption rate
- Upsell acceptance rate
- Abandonment by step

## 18. Cross-Sell and Upsell Attribution

Cross-sell and upsell systems should be measured as guest relevance systems, not merely revenue extractors. Hospitality recommendations should feel helpful, timely, and context-aware.

Cross-sell examples:

- Room guest sees show recommendation
- Entertainment buyer sees room package
- Dining guest sees pre-show cocktail experience
- Wellness guest sees pool, cabana, or dining add-on
- Package guest sees upgrade or exclusive access

Upsell examples:

- Room upgrade
- Suite upgrade
- Flexible rate plan
- Resort credit package
- VIP seating
- Enhanced dining experience
- Premium wellness treatment
- Late checkout or amenity add-on

Attribution should capture:

- Source journey
- Recommendation module
- Recommended entity
- Relevance rationale
- Impression
- Interaction
- Acceptance
- Rejection or dismissal
- Downstream conversion
- Revenue or operational value

Cross-sell success should include attach quality, not only click-through. A recommendation that distracts from the primary booking path may harm conversion even if it gets attention.

## 19. Experimentation and A/B Testing Principles

Experimentation should be structured, ethical, and operationally useful. Tests should improve guest understanding or business outcomes while protecting accessibility, trust, and performance.

Experiment requirements:

- Clear hypothesis
- Guest problem statement
- Primary metric
- Guardrail metrics
- Target audience
- Journey surface
- Expected decision
- Minimum run criteria
- QA plan
- Analytics validation plan
- Rollout and rollback criteria

Experiment types:

- Messaging tests
- CTA hierarchy tests
- Package merchandising tests
- Booking flow simplification tests
- Navigation label tests
- Mobile sticky CTA tests
- Cross-sell recommendation tests
- Reassurance content tests
- Offer presentation tests
- Search and filter tests

Experiment guardrails:

- Booking completion
- Revenue per visitor
- Error rate
- Accessibility compliance
- Page performance
- Support interactions
- Rage clicks and dead clicks
- Refund, cancellation, or operational complaint signals where available

Experimentation should avoid random UI variation. Every test should be connected to a journey diagnosis, such as insufficient clarity, weak offer comprehension, mobile friction, or low confidence before purchase.

## 20. AI-Assisted UX Optimization

AI-assisted optimization should use behavioral data to help teams identify opportunities, generate hypotheses, summarize patterns, and recommend experiments. AI should not independently change conversion-critical experiences without human review.

AI systems may assist with:

- Funnel anomaly detection
- Friction cluster summaries
- Experiment hypothesis generation
- CTA and content variant ideation
- Dashboard narrative summaries
- Segment pattern detection
- Package performance analysis
- Cross-sell opportunity discovery
- QA checklist generation
- Instrumentation coverage review

AI recommendations should include:

- Evidence used
- Confidence level
- Affected journey
- Guest interpretation
- Business interpretation
- Suggested action
- Required validation
- Risks or guardrails

AI should be instructed to privilege operational clarity over metric chasing. For example, it should not recommend making a CTA more aggressive if downstream abandonment suggests guests need more price or policy clarity.

## 21. Pendo Instrumentation Philosophy

Pendo can serve as a behavioral analytics, product guidance, and experience intelligence layer when its instrumentation is governed intentionally. The system should use Pendo to understand real product behavior, validate UX decisions, and support iterative improvement.

Pendo should be used for:

- Feature adoption analysis
- Funnel behavior
- Page and route engagement
- Guide and announcement performance
- Segment-based behavior review
- Rage and dead click analysis where supported
- Retention and repeat engagement patterns
- Qualitative feedback prompts when appropriate

Pendo should not become a dumping ground for random events. Tagged features, pages, and events should map to the same taxonomy used across the broader analytics framework.

Pendo instrumentation should prioritize:

- Conversion-critical CTAs
- Reusable components
- Booking and reservation steps
- Package and offer modules
- Navigation surfaces
- Mobile-specific controls
- New feature launches
- Experiment variants

The Pendo model should remain compatible with broader data architecture. Pendo tags, custom events, metadata, and visitor/account properties should use consistent naming, ownership, and QA rules.

## 22. Custom Data Attribute Governance

Custom data attributes provide a durable bridge between UX components and analytics systems. They should be semantic, stable, and reusable across analytics vendors, QA tools, automation agents, and future AI systems.

Recommended attribute families:

- `data-pendo-page`
- `data-pendo-module`
- `data-pendo-component`
- `data-pendo-action`
- `data-pendo-entity-type`
- `data-pendo-entity-id`
- `data-pendo-offer-id`
- `data-pendo-package-id`
- `data-pendo-funnel`
- `data-pendo-step`
- `data-pendo-cta-priority`
- `data-pendo-experiment`
- `data-pendo-variant`

Attribute principles:

- Names should describe product meaning, not CSS or implementation structure.
- Values should be stable across copy changes when possible.
- Entity IDs should connect to source-of-truth systems.
- CTA attributes should distinguish action, priority, and context.
- Package and offer attributes should remain available anywhere those entities appear.
- Experiment attributes should be present on affected surfaces.
- Attributes should avoid sensitive personal information.

Attribute governance should include ownership, review, documentation, and QA. A design-system component should not ship with ambiguous telemetry metadata.

## 23. Event Naming Conventions

Event names should be clear, consistent, and action-oriented. They should describe what the guest did in product terms.

Preferred structure:

`domain.object.action`

Examples of event name patterns:

- `navigation.menu.opened`
- `navigation.item.selected`
- `homepage.module.viewed`
- `package.card.selected`
- `package.detail.viewed`
- `package.inclusion.expanded`
- `package.availability.checked`
- `package.booking.started`
- `entertainment.event.viewed`
- `entertainment.ticketing.started`
- `room.dates.selected`
- `room.rate.selected`
- `booking.checkout.started`
- `booking.completed`
- `cta.clicked`
- `offer.applied`
- `form.error.shown`
- `friction.dead_click.detected`
- `friction.rage_click.detected`

Event naming rules:

- Use lowercase dot notation.
- Use past-tense verbs for completed guest actions.
- Avoid vague names such as `click`, `submit`, `interaction`, or `engagement`.
- Avoid implementation names such as React component names unless they are also product concepts.
- Preserve domain, object, action, and context properties.
- Do not encode volatile copy into event names.
- Use properties for variable context such as module, label, position, entity ID, and experiment variant.

Event naming should enable cross-journey analysis. If every team invents a different naming style, AI-assisted reporting and operational comparison will become unreliable.

## 24. Dashboard Strategy

Dashboards should be designed around decisions, not data availability. A dashboard should make it easier for a product, marketing, revenue, operations, or leadership team to decide what to inspect, improve, launch, pause, or escalate.

Dashboard types:

- Executive health dashboard
- Journey funnel dashboard
- Package performance dashboard
- Entertainment discovery dashboard
- Room booking dashboard
- Mobile conversion dashboard
- Navigation performance dashboard
- Experiment readout dashboard
- Friction monitoring dashboard
- Operational anomaly dashboard

Dashboard design principles:

- Start with the decision the dashboard supports.
- Show primary KPIs before diagnostic metrics.
- Include context, trend, and comparison.
- Segment by device, source, journey, and entity where useful.
- Include friction and guardrail metrics near conversion metrics.
- Avoid decorative charts that do not change decisions.
- Include clear ownership and refresh expectations.

Dashboard questions:

- Is the journey healthy?
- Where are guests dropping off?
- Which surfaces create qualified intent?
- Which packages or offers are gaining traction?
- Which mobile interactions need repair?
- Which experiments are ready for decision?
- Which operational issues need escalation?

## 25. KPI Hierarchy

KPIs should be hierarchical so teams can connect strategic outcomes to diagnostic signals.

North Star outcomes:

- Qualified guest conversion
- Revenue-producing experience engagement
- Successful hospitality journey completion
- Repeatable package and offer performance
- Operationally actionable guest understanding

Primary KPIs:

- Booking completion rate
- Package conversion rate
- Entertainment ticketing start and completion
- Restaurant reservation completion
- Wellness booking completion
- Revenue per qualified visitor
- Cross-sell and upsell attach rate
- Experiment win rate with guardrails met

Secondary KPIs:

- Booking start rate
- Availability check rate
- Detail view rate
- Package inclusion engagement
- CTA downstream completion
- Navigation-to-detail rate
- Search result selection rate
- Mobile form completion rate

Diagnostic metrics:

- Scroll zone reach
- Rage clicks
- Dead clicks
- Form errors
- No availability results
- Backtracking
- Filter abandonment
- Policy view before abandonment
- Page performance

KPI hierarchy should prevent teams from optimizing low-level metrics at the expense of journey health. More clicks are not better if they indicate confusion.

## 26. Operational Reporting Philosophy

Operational reporting should translate guest behavior into decisions for real teams. Hospitality products involve product managers, marketers, revenue managers, hotel operators, entertainment teams, dining teams, wellness teams, and guest services. Reporting should respect that operating reality.

Operational reports should include:

- What changed
- Where it changed
- Which guests or journeys were affected
- Which entities were involved
- Which friction signals increased or decreased
- Which conversion outcomes moved
- What action is recommended
- Who owns the next step

Reporting cadences:

- Daily anomaly checks for conversion-critical flows
- Weekly journey health reviews
- Weekly experiment monitoring
- Monthly package and offer performance review
- Monthly mobile UX review
- Quarterly taxonomy and instrumentation review

Operational intelligence should connect digital behavior to business readiness. For example, increased demand for a dining package may require inventory review, staffing coordination, merchandising changes, or revised cross-sell logic.

## 27. Future Predictive UX Systems

Predictive UX systems should use historical and real-time signals to anticipate guest needs and surface better experiences. Prediction should be introduced carefully, with transparency, guardrails, and continuous validation.

Future predictive capabilities:

- Journey propensity scoring
- Package affinity modeling
- Entertainment-to-room intent prediction
- Dining cross-sell recommendation
- Wellness interest prediction
- Abandonment risk detection
- Offer eligibility and relevance scoring
- Mobile friction risk alerts
- Inventory-aware experience recommendations
- Dynamic reassurance content

Predictive systems should be evaluated against:

- Conversion lift
- Guest satisfaction proxies
- Operational feasibility
- Fairness and bias review
- Explanation quality
- Long-term retention or repeat engagement
- Guardrail stability

Predictive UX should not simply maximize short-term revenue. In hospitality, relevance, trust, timing, and operational deliverability matter.

## 28. Agent-Assisted Analytics Workflows

AI agents should help maintain analytics quality and accelerate decision-making. Agents can inspect documentation, compare instrumentation plans, summarize dashboards, generate QA checklists, and propose experiments based on behavioral evidence.

Agent workflow types:

- Instrumentation planning agent
- Event taxonomy review agent
- Funnel diagnosis agent
- Experiment design agent
- Dashboard narrative agent
- QA validation agent
- Package performance analyst agent
- Mobile friction analyst agent
- Operational reporting agent

Agent instructions should include:

- Use the approved taxonomy.
- Identify the guest intent behind each signal.
- Distinguish primary, secondary, conversion, and friction signals.
- Avoid vanity metrics.
- Recommend actions tied to operating decisions.
- Flag missing attribution context.
- Flag inconsistent event naming.
- Flag unclear CTA purpose.
- Preserve privacy and avoid sensitive data collection.

Agents should provide evidence-based recommendations with confidence levels and validation steps. They should not present speculation as certainty.

## 29. Governance and QA Rules

Analytics governance ensures the telemetry system remains trustworthy as the product grows. Without governance, dashboards drift, events duplicate, attributes become inconsistent, and experiments lose credibility.

Governance rules:

- Every tracked event must have an owner.
- Every event must map to a domain, object, action, and purpose.
- Every conversion funnel must define primary and guardrail metrics.
- Every reusable component with meaningful interactions must define telemetry metadata.
- Every package and offer module must preserve entity identity.
- Every experiment must pass analytics QA before launch.
- Every dashboard must list owner, audience, source, cadence, and decision purpose.
- Every new data attribute must follow naming and privacy rules.
- Every deprecated event must have a migration or retirement note.

QA checks:

- Event fires once per intended action.
- Event does not fire on passive render unless explicitly defined as an impression.
- Required properties are present.
- Entity IDs are correct.
- CTA context is captured.
- Experiment variant is captured.
- Mobile and desktop behavior are both validated.
- Error, empty, loading, and disabled states are reviewed.
- Third-party handoffs preserve source context where possible.
- No sensitive personal information is captured in attributes or event properties.

Instrumentation should be treated like product infrastructure. It deserves review, testing, documentation, and ongoing maintenance.

## 30. Future System Vision

The long-term vision is an AI-native hospitality operating system where UX, analytics, experimentation, operations, and optimization reinforce each other.

In this future system:

- Design components carry telemetry metadata by default.
- Funnels are modeled as reusable journey objects.
- Packages and offers are measured consistently across surfaces.
- Dashboards explain what changed and why it matters.
- AI agents summarize friction, propose experiments, and inspect taxonomy drift.
- Operators can see how digital behavior affects rooms, entertainment, dining, wellness, and packages.
- Experimentation becomes a disciplined learning system.
- Predictive UX helps guests discover relevant experiences without eroding trust.
- Measurement improves hospitality quality, not just conversion rates.

The framework should evolve as the product matures. Early versions may focus on taxonomy, CTA instrumentation, package tracking, and funnel dashboards. Later versions may add predictive modeling, agent-assisted optimization, automated QA, and operational anomaly detection.

The durable principle remains the same: analytics should make hospitality experiences more understandable, more useful, more measurable, and more humane.
