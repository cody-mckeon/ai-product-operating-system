# Telemetry Plan

## Executive Summary

The approved entertainment pilot concepts are intended to make the Resorts
World Las Vegas Entertainment page work harder as a connected decision journey.
The core opportunity is not simply to increase isolated clicks. It is to help
guests move from entertainment interest into clearer resort context, stronger
commercial confidence, and better orientation across the long page.

Success should look like more qualified engagement with validated resort-value
content, clearer movement into appropriate commercial or support paths, and
stronger continuity across event discovery, venue information, FAQ, support,
and broader resort planning moments.

The behaviors that should change are:

- Guests engage with entertainment-adjacent resort context where it is
  validated.
- Guests choose commercial actions with clearer intent across tickets, tables,
  booking, learn-more, FAQ, chat, and phone support paths.
- Guests move through event listings, venue content, FAQ, support, and footer
  content with less visible friction.
- Guests continue to use primary commercial paths without declines in purchase
  or booking intent.

This plan is a measurement blueprint. It does not define GTM tags, GA4 schemas,
Pendo attributes, engineering requirements, QA requirements, dashboards, or
tracking tickets.

## Business Objectives

### BO-01

Increase broader resort consideration from high-intent entertainment browsing.

### Concept Alignment

Associated Concept IDs:

- CON-01
- CON-05

This objective traces to the approved Entertainment Trip Context concept and
the broader Entertainment Journey Continuity concept. It also traces to
`REC-01`, which prioritizes strengthening the entertainment-to-resort value
connection.

### BO-02

Improve confidence and routing quality for entertainment commercial and
support actions.

### Concept Alignment

Associated Concept IDs:

- CON-03
- CON-05

This objective traces to the approved Action Confidence Guide concept and the
continuity concept's connection between event browsing, FAQ, support, venue
context, and commercial actions. It also traces to `REC-03`.

### BO-03

Improve journey continuity across discovery, venue context, FAQ, support, and
validated resort-value information.

### Concept Alignment

Associated Concept IDs:

- CON-01
- CON-03
- CON-05

This objective traces to all approved concepts because the selected portfolio
depends on connecting entertainment discovery to context, decision confidence,
and long-page orientation without prescribing a layout or implementation.

## Success Metrics

## CON-01: Entertainment Trip Context

### Primary KPI

KPI Name: Entertainment-to-Resort Context Engagement

Definition: The share of entertainment visitors who engage with validated
resort-value context connected to entertainment browsing, such as broader
planning information, relevant resort category pathways, or confirmed related
content.

Why It Matters: CON-01 is intended to help guests understand entertainment as
part of a larger Resorts World visit. This KPI measures whether guests actually
engage with that contextual layer once it exists.

Concept Alignment:

- CON-01

### Secondary KPIs

KPI Name: Resort Pathway Exploration From Entertainment

Definition: Engagement with broader resort pathways from the entertainment
journey, such as rooms, dining, offers, loyalty, venue, or adjacent resort
categories where the relationship is validated.

Why It Matters: This indicates whether entertainment demand is becoming a
bridge to broader resort consideration rather than remaining an isolated event
list.

Concept Alignment:

- CON-01
- CON-05

KPI Name: Context-to-Commercial Continuation

Definition: The share of guests who engage with validated resort context and
then continue to an entertainment commercial action, event detail, venue
action, or support path.

Why It Matters: Context should support decision-making without distracting
from the primary entertainment journey.

Concept Alignment:

- CON-01
- CON-03
- CON-05

## CON-03: Action Confidence Guide

### Primary KPI

KPI Name: Qualified Commercial Action Rate

Definition: The share of entertainment visitors who select a high-intent
commercial path after encountering decision-support context, including ticket,
table, booking, event-detail, or venue booking actions.

Why It Matters: CON-03 is intended to improve confidence around action choice,
not merely increase any click. This KPI focuses on whether guests continue
toward meaningful commercial paths after clearer decision support.

Concept Alignment:

- CON-03

### Secondary KPIs

KPI Name: Support-Assisted Decision Engagement

Definition: Engagement with FAQ, chat, phone, or support content that is
connected to entertainment decision-making.

Why It Matters: Support engagement can be healthy when it resolves uncertainty,
but it must be interpreted alongside commercial continuation and friction
signals.

Concept Alignment:

- CON-03
- CON-05

KPI Name: CTA Path Differentiation

Definition: Distribution of engagement across `GET TICKETS`, `BUY TICKETS`,
`BOOK NOW`, `TABLES`, `LEARN MORE`, venue booking, FAQ, chat, and phone paths.

Why It Matters: The concept depends on guests understanding which path fits
their need. A healthier distribution should show clearer intent by path, not
random or repeated action switching.

Concept Alignment:

- CON-03

## CON-05: Entertainment Journey Continuity

### Primary KPI

KPI Name: Cross-Section Journey Continuation

Definition: The share of entertainment visitors who move from event discovery
into at least one supporting journey area, such as venue context, FAQ, support,
footer information, or validated resort-value context.

Why It Matters: CON-05 treats the page as a connected decision journey. This
KPI measures whether guests are using the broader page ecosystem instead of
encountering isolated sections.

Concept Alignment:

- CON-05

### Secondary KPIs

KPI Name: Lower-Page Support Content Engagement

Definition: Engagement with theatre amenities, venue sections, FAQ categories,
FAQ questions, footer contact details, phone links, or chat after event
browsing.

Why It Matters: The evidence shows a long page with important support and
venue content below the event listings. This metric indicates whether guests
reach and use those support surfaces.

Concept Alignment:

- CON-03
- CON-05

KPI Name: Discovery Control Engagement

Definition: Engagement with date range, category filters, view controls, load
more, hero carousel controls, or page anchors where those controls are visible
and relevant.

Why It Matters: Discovery controls help guests stay oriented and narrow the
entertainment journey. This metric also provides future context for Tier 2
CON-02 without making CON-02 a primary pilot concept.

Concept Alignment:

- CON-05

## Guardrail Metrics

Guardrail metrics should not decline while the concepts are evaluated. These
metrics are supported by the observed page surfaces and approved concept risks.

| Guardrail Metric | Why It Should Not Decline | Concept Alignment |
| --- | --- | --- |
| Primary entertainment commercial action rate | Resort context and support content should not reduce intent for tickets, tables, booking, or event details. | CON-01, CON-03, CON-05 |
| Ticket purchase intent | Action confidence should preserve or improve intent toward ticket paths such as `GET TICKETS` and `BUY TICKETS`. | CON-03 |
| Table or venue booking intent | Clarifying decisions should not reduce qualified table, venue, or booking interest. | CON-03 |
| Global booking intent from entertainment | Entertainment-to-resort context should not weaken the existing global booking path. | CON-01 |
| Bounce rate | Added context or journey changes should not make the page feel less relevant on entry. | CON-01, CON-05 |
| Exit rate from event browsing | Guests should not abandon the page more often from the event listing area. | CON-03, CON-05 |
| Dead clicks | New or adapted decision-support surfaces should not create unclear interactive affordances. | CON-03, CON-05 |
| Rage clicks | Guests should not show repeated frustrated interaction with CTAs, controls, FAQ rows, or support surfaces. | CON-03, CON-05 |
| Support escalation without commercial continuation | More support use is not automatically success if it reflects unresolved confusion. | CON-03 |

## Measurement Confidence

| KPI | Confidence | Assessment |
| --- | --- | --- |
| Entertainment-to-Resort Context Engagement | Medium Confidence | The behavior should be directly observable if validated resort context exists in the experience. Confidence is limited because no business rules, package inventory, loyalty rules, or analytics data were provided. |
| Resort Pathway Exploration From Entertainment | Medium Confidence | Pathway engagement is directly observable, but it is a proxy for broader resort consideration. It does not prove booking or revenue impact. |
| Context-to-Commercial Continuation | Medium Confidence | Sequential behavior is observable, but causality is limited without experiment design or baseline analytics. |
| Qualified Commercial Action Rate | High Confidence | Commercial action selection is directly observable on visible CTAs. Limitations remain because downstream ticketing, table, booking, and vendor flows were not provided. |
| Support-Assisted Decision Engagement | Medium Confidence | FAQ, chat, phone, and support interactions are observable, but they are ambiguous: they can signal useful confidence-building or unresolved confusion. |
| CTA Path Differentiation | Medium Confidence | Distribution across visible paths is observable, but interpretation requires destination rules and path intent that were not provided. |
| Cross-Section Journey Continuation | Medium Confidence | Movement across page areas is observable, but it is a proxy for continuity and depends on scroll, anchor, and section-engagement visibility. |
| Lower-Page Support Content Engagement | Medium Confidence | Engagement with FAQ, venue, footer, and chat surfaces is observable. It does not prove guests found the content useful without qualitative evidence or downstream outcomes. |
| Discovery Control Engagement | Medium Confidence | Control use is observable where controls exist. Confidence is limited by missing mobile control states, date picker states, calendar view, empty states, loading states, and post-filter results. |

## Hypotheses

### HYP-01

Description: If validated resort-value context is connected to entertainment
discovery, guests will engage more often with broader Resorts World planning
pathways while continuing to pursue entertainment actions.

Expected behavior change: Increased resort pathway exploration from the
entertainment journey without a decline in primary entertainment commercial
action rate.

Success criteria: Resort pathway exploration increases or becomes meaningfully
visible while primary commercial action guardrails remain stable.

Associated KPI: Entertainment-to-Resort Context Engagement

Concept Alignment:

- CON-01
- CON-05

### HYP-02

Description: If commercial and support paths are clarified around guest intent,
guests will choose ticket, table, booking, learn-more, FAQ, chat, or phone paths
with stronger intent and less visible friction.

Expected behavior change: Increased qualified commercial action rate, healthier
CTA path differentiation, and stable or reduced dead-click and rage-click
signals.

Success criteria: Qualified commercial action rate improves or remains stable
while friction guardrails do not decline.

Associated KPI: Qualified Commercial Action Rate

Concept Alignment:

- CON-03

### HYP-03

Description: If the Entertainment page is experienced as a connected journey,
guests will move more naturally from event discovery into supporting venue,
FAQ, support, and validated resort-value content.

Expected behavior change: Increased cross-section journey continuation and
lower-page support content engagement.

Success criteria: Cross-section journey continuation increases while bounce
rate and exit rate from event browsing do not worsen.

Associated KPI: Cross-Section Journey Continuation

Concept Alignment:

- CON-05

## Event Measurement Framework

| Behavior | Purpose | Metric Category |
| --- | --- | --- |
| Engage with validated resort-value context | Understand whether entertainment interest connects to broader resort consideration. | Planning |
| Navigate from entertainment to broader resort category pathways | Evaluate whether entertainment is functioning as a bridge into related resort exploration. | Cross-Experience Exploration |
| Select event ticket, table, booking, or learn-more actions | Measure qualified commercial intent from event discovery. | Conversion Intent |
| Engage with venue booking actions | Measure venue-level commercial intent. | Conversion Intent |
| Use FAQ tabs or FAQ question rows | Understand whether support content is used to resolve decision uncertainty. | Support |
| Open chat or use phone support | Understand when guests seek direct support during entertainment evaluation. | Support |
| Move from event listings to theatre, venue, FAQ, footer, or support sections | Measure whether the long page operates as a connected journey. | Navigation |
| Use date range, category filters, view controls, or load more | Evaluate discovery refinement and browsing continuity. | Discovery |
| Use hero carousel or page anchors | Understand orientation and promotional/navigation engagement. | Engagement |
| Repeatedly click inactive or unclear surfaces | Identify possible confusion or friction. | Friction |

## Pendo Measurement Recommendations

Measure interactions that explain whether the approved concepts are changing
guest behavior. These recommendations are strategic only and do not define
attributes, selectors, implementation details, or tracking requirements.

| Interaction Opportunity | Why It Matters | Concept Objective Supported |
| --- | --- | --- |
| Engagement with validated resort-context surfaces near entertainment browsing | Shows whether CON-01 creates visible broader resort consideration. | BO-01 |
| Movement from resort-context surfaces back to event CTAs or event details | Confirms context supports the entertainment journey instead of distracting from it. | BO-01, BO-03 |
| Selection patterns across ticket, table, booking, and learn-more actions | Helps evaluate whether action confidence changes path choice. | BO-02 |
| FAQ category and question engagement tied to entertainment decision areas | Indicates which decision questions guests seek to resolve. | BO-02, BO-03 |
| Chat and phone support engagement from entertainment contexts | Helps identify support demand and possible unresolved confusion. | BO-02 |
| Event listing controls, date range, category filters, view controls, and load more | Provides discovery and continuity context, especially for mobile and date-led browsing questions. | BO-03 |
| Movement between event listings, theatre amenities, venues, FAQ, footer, and support | Shows whether the page behaves as a connected journey. | BO-03 |
| Dead-click and rage-click signals on CTAs, FAQ rows, controls, anchors, and support surfaces | Identifies friction risk where confidence or continuity concepts may be unclear. | BO-02, BO-03 |

## Dashboard Blueprint

### Primary Conversion

Priority: Executive

Recommended focus:

- Qualified commercial action rate
- Primary entertainment commercial action guardrail
- Ticket purchase intent
- Table or venue booking intent
- Global booking intent from entertainment

### Resort Context

Priority: Executive

Recommended focus:

- Entertainment-to-resort context engagement
- Resort pathway exploration from entertainment
- Context-to-commercial continuation

### Journey Continuity

Priority: Manager

Recommended focus:

- Cross-section journey continuation
- Lower-page support content engagement
- Movement from event listings to venue, FAQ, support, and footer areas

### Discovery

Priority: Manager

Recommended focus:

- Discovery control engagement
- Date range interaction
- Category and view control interaction
- Load-more engagement

### Action Confidence

Priority: Manager

Recommended focus:

- CTA path differentiation
- Support-assisted decision engagement
- FAQ, chat, phone, and venue action engagement

### Support

Priority: Manager

Recommended focus:

- FAQ category engagement
- FAQ question engagement
- Chat engagement
- Phone support engagement
- Support escalation without commercial continuation

### Friction

Priority: Analyst

Recommended focus:

- Dead clicks
- Rage clicks
- Exit rate from event browsing
- Bounce rate
- Repeated CTA switching or unresolved support-seeking patterns

### Cross-Experience Exploration

Priority: Analyst

Recommended focus:

- Exploration from entertainment into validated rooms, dining, offers, loyalty,
  venue, or related resort pathways
- Return from broader context into entertainment commercial actions
- Differences by desktop and mobile where device evidence is available

## Leadership Success Criteria

Leadership should determine whether the approved concepts succeeded by looking
for a balanced pattern of stronger commercial confidence, broader resort
consideration, and healthier journey continuity.

Success signals:

- Guests engage with validated resort-context content connected to
  entertainment discovery.
- Broader resort pathway exploration increases or becomes measurable without
  reducing entertainment commercial intent.
- Qualified commercial action rate improves or remains stable while guests
  show clearer distribution across tickets, tables, booking, learn-more, FAQ,
  chat, and phone paths.
- Guests move from event browsing into venue, FAQ, support, and validated
  resort-value areas more consistently.
- Dead-click, rage-click, bounce, and event-listing exit signals do not worsen.

Risk signals:

- Resort context increases exploration but reduces ticket, table, venue, or
  booking intent.
- Support engagement rises without commercial continuation, suggesting
  unresolved confusion rather than better confidence.
- Guests repeatedly switch CTA paths or interact with unclear surfaces.
- Lower-page engagement remains weak, suggesting journey continuity did not
  improve.
- Mobile behavior remains unclear because key mobile states are still missing.

Recommended evaluation focus:

Leadership should focus first on whether the pilot improves decision quality
and resort consideration without harming primary entertainment intent. Analyst
detail such as rage clicks and dead clicks should be used as diagnostic
evidence, not as the main leadership definition of success.

## Evidence Limitations

- No pilot brief was available.
- No explicit business goals beyond the recommendation and concept documents
  were provided.
- No analytics baseline, behavioral analytics, conversion data, support data,
  scroll-depth data, revenue data, or guest research was provided.
- No downstream booking, ticketing, table reservation, event detail, checkout,
  opened FAQ, opened chat, opened hamburger menu, date picker, calendar, empty,
  loading, error, or post-load-more states were provided.
- Package inventory, offer rules, loyalty benefits, audience priorities,
  pricing, availability feeds, inventory rules, VIP eligibility, fulfillment
  rules, support ownership, accessibility details, and operational policy
  details were not provided.
- Mobile screenshots do not prove absence of controls across the full mobile
  experience; they only show what was visible in the reviewed captures.
- The `test.png` screenshot in the current-state screenshot folder is a
  documented 1-byte placeholder and was not treated as usable evidence.
- Several KPIs are proxies for consideration, confidence, or continuity. They
  should be interpreted with baseline data and qualitative evidence when those
  inputs become available.
