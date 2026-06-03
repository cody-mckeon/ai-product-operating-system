# Analytics Requirements

## Executive Summary

This document translates the Entertainment pilot telemetry strategy into
analytics implementation requirements for Pendo, GA4, GTM, the data layer,
dashboards, and QA validation.

The Analytics Agent used `projects/entertainment-pilot/telemetry-plan.md` as
the required source and treated its Analytics Handoff, Event Measurement
Framework, Pendo Measurement Recommendations, and Dashboard Blueprint as the
primary implementation-planning source of truth.

The telemetry strategy being implemented supports three approved concepts:

- CON-01: Entertainment Trip Context
- CON-03: Action Confidence Guide
- CON-05: Entertainment Journey Continuity

The implementation should support these KPIs from the telemetry plan:

- Entertainment-to-Resort Context Engagement
- Resort Pathway Exploration From Entertainment
- Context-to-Commercial Continuation
- Qualified Commercial Action Rate
- Support-Assisted Decision Engagement
- CTA Path Differentiation
- Cross-Section Journey Continuation
- Lower-Page Support Content Engagement
- Discovery Control Engagement

The implementation focus is to make approved telemetry measurable across the
Entertainment page without creating new measurement strategy, new objectives,
new concepts, designs, engineering tickets, code, or analytics implementation.

## Measurement Traceability Matrix

| Business Objective | KPI | Behavior | Event | Platform | Dashboard |
| --- | --- | --- | --- | --- | --- |
| BO-01: Increase broader resort consideration from high-intent entertainment browsing. | Entertainment-to-Resort Context Engagement | Engage with validated resort-value context. | `resort_context_engagement` | Pendo, GA4 | Executive Dashboard: Resort Context |
| BO-01: Increase broader resort consideration from high-intent entertainment browsing. | Resort Pathway Exploration From Entertainment | Navigate from entertainment to broader resort category pathways. | `resort_pathway_select` | Pendo, GA4 | Executive Dashboard: Resort Context; Analyst Dashboard: Cross-Experience Exploration |
| BO-01: Increase broader resort consideration from high-intent entertainment browsing. | Context-to-Commercial Continuation | Move from resort-context surfaces back to event CTAs, event details, venue actions, or support paths. | `context_commercial_continuation` | GA4, GTM, Dashboard | Executive Dashboard: Resort Context; Executive Dashboard: Primary Conversion |
| BO-02: Improve confidence and routing quality for entertainment commercial and support actions. | Qualified Commercial Action Rate | Select event ticket, table, booking, venue booking, or learn-more actions after decision-support context. | `event_commercial_action_select` | Pendo, GA4 | Executive Dashboard: Primary Conversion; Manager Dashboard: Action Confidence |
| BO-02: Improve confidence and routing quality for entertainment commercial and support actions. | Qualified Commercial Action Rate | Engage with venue booking actions. | `venue_booking_action_select` | Pendo, GA4 | Executive Dashboard: Primary Conversion; Manager Dashboard: Action Confidence |
| BO-02: Improve confidence and routing quality for entertainment commercial and support actions. | CTA Path Differentiation | Select among `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, and `LEARN MORE` paths. | `cta_path_select` | Pendo, GA4 | Manager Dashboard: Action Confidence |
| BO-02: Improve confidence and routing quality for entertainment commercial and support actions. | Support-Assisted Decision Engagement | Use FAQ tabs or FAQ question rows. | `faq_interaction` | Pendo, GA4 | Manager Dashboard: Support; Analyst Dashboard: Friction |
| BO-02: Improve confidence and routing quality for entertainment commercial and support actions. | Support-Assisted Decision Engagement | Open chat or use phone support from entertainment contexts. | `support_action_select` | Pendo, GA4 | Manager Dashboard: Support |
| BO-03: Improve journey continuity across discovery, venue context, FAQ, support, and validated resort-value information. | Cross-Section Journey Continuation | Move from event listings to theatre, venue, FAQ, footer, support, or validated resort-value sections. | `cross_section_navigation` | Pendo, GA4 | Manager Dashboard: Journey Continuity |
| BO-03: Improve journey continuity across discovery, venue context, FAQ, support, and validated resort-value information. | Lower-Page Support Content Engagement | Engage with theatre amenities, venue sections, FAQ, footer links, phone links, or chat after event browsing. | `lower_page_support_engagement` | Pendo, GA4 | Manager Dashboard: Journey Continuity; Manager Dashboard: Support |
| BO-03: Improve journey continuity across discovery, venue context, FAQ, support, and validated resort-value information. | Discovery Control Engagement | Use date range, category filters, view controls, or load more. | `discovery_control_use` | Pendo, GA4 | Manager Dashboard: Discovery |
| BO-03: Improve journey continuity across discovery, venue context, FAQ, support, and validated resort-value information. | Discovery Control Engagement | Use hero carousel or page anchors. | `orientation_control_use` | Pendo, GA4 | Manager Dashboard: Discovery; Manager Dashboard: Journey Continuity |
| BO-02: Improve confidence and routing quality for entertainment commercial and support actions. | Support-Assisted Decision Engagement | Repeatedly click inactive or unclear surfaces. | `friction_signal_observed` | Pendo, GA4, Dashboard | Analyst Dashboard: Friction |
| BO-03: Improve journey continuity across discovery, venue context, FAQ, support, and validated resort-value information. | Cross-Section Journey Continuation | Repeatedly switch CTAs, exit event browsing, or seek support without commercial continuation. | `journey_friction_pattern` | GA4, Dashboard | Analyst Dashboard: Friction |

## Event Catalog

### Event Name

`resort_context_engagement`

### Purpose

Measure engagement with validated resort-value context connected to
entertainment browsing.

### Associated KPI

Entertainment-to-Resort Context Engagement

### Associated Business Objective

BO-01

### Associated Concept

CON-01, CON-05

### Event Name

`resort_pathway_select`

### Purpose

Measure navigation from the Entertainment journey into validated rooms, dining,
offers, loyalty, venue, or other broader resort pathways.

### Associated KPI

Resort Pathway Exploration From Entertainment

### Associated Business Objective

BO-01

### Associated Concept

CON-01, CON-05

### Event Name

`context_commercial_continuation`

### Purpose

Measure whether guests who engage with validated resort context continue to an
entertainment commercial action, event detail, venue action, or support path.

### Associated KPI

Context-to-Commercial Continuation

### Associated Business Objective

BO-01, BO-03

### Associated Concept

CON-01, CON-03, CON-05

### Event Name

`event_commercial_action_select`

### Purpose

Measure qualified commercial intent from event cards and entertainment
decision surfaces.

### Associated KPI

Qualified Commercial Action Rate

### Associated Business Objective

BO-02

### Associated Concept

CON-03

### Event Name

`venue_booking_action_select`

### Purpose

Measure venue-level commercial intent from venue modules and venue-related
decision surfaces.

### Associated KPI

Qualified Commercial Action Rate

### Associated Business Objective

BO-02

### Associated Concept

CON-03, CON-05

### Event Name

`cta_path_select`

### Purpose

Measure distribution across the visible entertainment action paths so CTA
selection can be interpreted by intent path.

### Associated KPI

CTA Path Differentiation

### Associated Business Objective

BO-02

### Associated Concept

CON-03

### Event Name

`faq_interaction`

### Purpose

Measure FAQ tab and question engagement connected to entertainment
decision-making.

### Associated KPI

Support-Assisted Decision Engagement; Lower-Page Support Content Engagement

### Associated Business Objective

BO-02, BO-03

### Associated Concept

CON-03, CON-05

### Event Name

`support_action_select`

### Purpose

Measure direct support engagement from chat, phone, and support links in
entertainment contexts.

### Associated KPI

Support-Assisted Decision Engagement

### Associated Business Objective

BO-02

### Associated Concept

CON-03, CON-05

### Event Name

`cross_section_navigation`

### Purpose

Measure movement from event listings into theatre, venue, FAQ, footer, support,
or validated resort-value sections.

### Associated KPI

Cross-Section Journey Continuation

### Associated Business Objective

BO-03

### Associated Concept

CON-05

### Event Name

`lower_page_support_engagement`

### Purpose

Measure use of lower-page support and context surfaces after event browsing.

### Associated KPI

Lower-Page Support Content Engagement

### Associated Business Objective

BO-03

### Associated Concept

CON-03, CON-05

### Event Name

`discovery_control_use`

### Purpose

Measure use of date range, category filters, view controls, and load more
within event browsing.

### Associated KPI

Discovery Control Engagement

### Associated Business Objective

BO-03

### Associated Concept

CON-05

### Event Name

`orientation_control_use`

### Purpose

Measure use of hero carousel controls and page anchors that support page
orientation and promotional/navigation engagement.

### Associated KPI

Discovery Control Engagement; Cross-Section Journey Continuation

### Associated Business Objective

BO-03

### Associated Concept

CON-05

### Event Name

`friction_signal_observed`

### Purpose

Measure dead-click, rage-click, and unclear interaction signals on CTAs,
FAQ rows, controls, anchors, support surfaces, and other interactive areas.

### Associated KPI

Support-Assisted Decision Engagement

### Associated Business Objective

BO-02, BO-03

### Associated Concept

CON-03, CON-05

### Event Name

`journey_friction_pattern`

### Purpose

Measure unresolved journey patterns such as repeated CTA switching, support
escalation without commercial continuation, bounce, or exit from event
browsing.

### Associated KPI

Cross-Section Journey Continuation; Support-Assisted Decision Engagement

### Associated Business Objective

BO-02, BO-03

### Associated Concept

CON-03, CON-05

## Pendo Requirements

## Pendo Naming Standards

Feature names should follow:

Page > Module: Action

Examples:

- Entertainment > Event Card: Get Tickets
- Entertainment > FAQ: Expand Question
- Entertainment > Venue Module: View Venue
- Entertainment > Related Events: Select Event

Use this naming standard consistently across Pendo features, analytics
requirements, QA validation, and dashboard references.

### Feature Name

Entertainment > Resort Context: Engage

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: validated resort-context section name
- `data-pendo-module`: resort-context module name
- `data-pendo-feature`: `resort_context_engagement`
- `data-pendo-cta`: selected context label, when the interaction is a CTA
- `data-pendo-concept`: `CON-01`
- `data-pendo-business-objective`: `BO-01`

### Feature Purpose

Identify whether validated resort-value context is visible and useful enough
for guests to engage while browsing entertainment.

### Associated KPI

Entertainment-to-Resort Context Engagement

### Feature Name

Entertainment > Resort Pathway: Select

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: source section
- `data-pendo-module`: source module
- `data-pendo-feature`: `resort_pathway_select`
- `data-pendo-cta`: selected pathway label
- `data-pendo-destination-category`: rooms, dining, offers, loyalty, venue, or other validated resort category
- `data-pendo-concept`: `CON-01`
- `data-pendo-business-objective`: `BO-01`

### Feature Purpose

Identify whether entertainment browsing becomes a bridge into validated broader
resort exploration.

### Associated KPI

Resort Pathway Exploration From Entertainment

### Feature Name

Entertainment > Resort Context: Continue Commercial Path

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: context source section
- `data-pendo-module`: context source module
- `data-pendo-feature`: `context_commercial_continuation`
- `data-pendo-cta`: downstream action label
- `data-pendo-destination-category`: ticket, table, booking, event detail, venue, support
- `data-pendo-concept`: `CON-01`
- `data-pendo-business-objective`: `BO-01`

### Feature Purpose

Confirm that resort context supports entertainment decision-making instead of
pulling guests away from the commercial or support journey.

### Associated KPI

Context-to-Commercial Continuation

### Feature Name

Entertainment > Event Card: Select Commercial Action

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: event listing
- `data-pendo-module`: `EventCard`
- `data-pendo-feature`: `event_commercial_action_select`
- `data-pendo-cta`: `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, or `LEARN MORE`
- `data-pendo-event-id`: event identifier, if available
- `data-pendo-event-name`: event name
- `data-pendo-venue-name`: venue badge or venue name
- `data-pendo-event-date`: event date
- `data-pendo-concept`: `CON-03`
- `data-pendo-business-objective`: `BO-02`

### Feature Purpose

Measure high-intent event action selection from visible event cards.

### Associated KPI

Qualified Commercial Action Rate; CTA Path Differentiation

### Feature Name

Entertainment > Venue Module: Book Now

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: venues or theatre
- `data-pendo-module`: `VenueInfoPanel`
- `data-pendo-feature`: `venue_booking_action_select`
- `data-pendo-cta`: `BOOK NOW`
- `data-pendo-venue-name`: venue name
- `data-pendo-concept`: `CON-03`
- `data-pendo-business-objective`: `BO-02`

### Feature Purpose

Measure venue-level booking intent and connect venue engagement to commercial
confidence.

### Associated KPI

Qualified Commercial Action Rate

### Feature Name

Entertainment > Event Card: Select CTA Path

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: event listing
- `data-pendo-module`: `EventCard`
- `data-pendo-feature`: `cta_path_select`
- `data-pendo-cta`: selected CTA label
- `data-pendo-event-name`: event name
- `data-pendo-venue-name`: venue badge or venue name
- `data-pendo-action-type`: ticket, table, booking, detail, support, or unknown
- `data-pendo-concept`: `CON-03`
- `data-pendo-business-objective`: `BO-02`

### Feature Purpose

Support analysis of whether guests understand and choose the action path that
fits their intent.

### Associated KPI

CTA Path Differentiation

### Feature Name

Entertainment > FAQ: Interact

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: FAQ
- `data-pendo-module`: `FAQTabsAccordion`
- `data-pendo-feature`: `faq_interaction`
- `data-pendo-cta`: tab, question, previous category, or next category label
- `data-pendo-question-name`: question text or stable question name
- `data-pendo-question-category`: FAQ category
- `data-pendo-concept`: `CON-03`
- `data-pendo-business-objective`: `BO-02`

### Feature Purpose

Measure which entertainment decision questions guests use to resolve
uncertainty.

### Associated KPI

Support-Assisted Decision Engagement; Lower-Page Support Content Engagement

### Feature Name

Entertainment > Support: Select Contact Path

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: support, footer, FAQ, or floating support
- `data-pendo-module`: `FloatingChatButton`, footer contact, or support link module
- `data-pendo-feature`: `support_action_select`
- `data-pendo-cta`: chat, phone, or support link label
- `data-pendo-support-type`: chat, phone, footer link, or other support path
- `data-pendo-concept`: `CON-03`
- `data-pendo-business-objective`: `BO-02`

### Feature Purpose

Measure when guests seek direct support while evaluating entertainment
decisions.

### Associated KPI

Support-Assisted Decision Engagement

### Feature Name

Entertainment > Page Section: Navigate

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: source section
- `data-pendo-module`: `PageAnchorNav`, event listing, venue, FAQ, footer, or support module
- `data-pendo-feature`: `cross_section_navigation`
- `data-pendo-cta`: selected anchor or navigation label
- `data-pendo-destination-section`: destination section
- `data-pendo-concept`: `CON-05`
- `data-pendo-business-objective`: `BO-03`

### Feature Purpose

Measure whether the Entertainment page behaves as a connected journey across
event discovery, venue context, FAQ, support, and footer areas.

### Associated KPI

Cross-Section Journey Continuation

### Feature Name

Entertainment > Lower Page Support: Engage

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: theatre amenities, venues, FAQ, footer, support
- `data-pendo-module`: module name
- `data-pendo-feature`: `lower_page_support_engagement`
- `data-pendo-cta`: selected label, if applicable
- `data-pendo-prior-section`: event listing, if available
- `data-pendo-concept`: `CON-05`
- `data-pendo-business-objective`: `BO-03`

### Feature Purpose

Measure whether guests use support and context surfaces below event browsing.

### Associated KPI

Lower-Page Support Content Engagement

### Feature Name

Entertainment > Event Listing Controls: Use Control

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: event listing
- `data-pendo-module`: `EventListingControls`
- `data-pendo-feature`: `discovery_control_use`
- `data-pendo-cta`: date range, category filter, view control, or load more label
- `data-pendo-control-type`: date range, category, view mode, load more
- `data-pendo-control-value`: selected value, if available
- `data-pendo-concept`: `CON-05`
- `data-pendo-business-objective`: `BO-03`

### Feature Purpose

Measure how guests refine entertainment discovery and maintain browsing
continuity.

### Associated KPI

Discovery Control Engagement

### Feature Name

Entertainment > Orientation Controls: Use Control

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: hero or anchor bar
- `data-pendo-module`: `HeroCarousel` or `PageAnchorNav`
- `data-pendo-feature`: `orientation_control_use`
- `data-pendo-cta`: carousel arrow or anchor label
- `data-pendo-control-type`: carousel, page anchor
- `data-pendo-destination-section`: destination section, for anchors
- `data-pendo-concept`: `CON-05`
- `data-pendo-business-objective`: `BO-03`

### Feature Purpose

Measure orientation behavior on promotional and in-page navigation controls.

### Associated KPI

Discovery Control Engagement; Cross-Section Journey Continuation

### Feature Name

Entertainment > Interaction Surface: Friction Signal

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: section where friction occurred
- `data-pendo-module`: module where friction occurred
- `data-pendo-feature`: `friction_signal_observed`
- `data-pendo-cta`: affected label, if applicable
- `data-pendo-friction-type`: dead click, rage click, repeated click, or unclear affordance
- `data-pendo-concept`: `CON-03`
- `data-pendo-business-objective`: `BO-02`

### Feature Purpose

Identify where confidence or continuity concepts may create unclear
interaction patterns.

### Associated KPI

Support-Assisted Decision Engagement

### Feature Name

Entertainment > Journey Pattern: Friction

### Recommended Attributes

- `data-pendo-page`: `entertainment`
- `data-pendo-section`: source section
- `data-pendo-module`: source module
- `data-pendo-feature`: `journey_friction_pattern`
- `data-pendo-cta`: affected CTA label, if applicable
- `data-pendo-friction-type`: repeated CTA switching, support without continuation, bounce, or event listing exit
- `data-pendo-concept`: `CON-05`
- `data-pendo-business-objective`: `BO-03`

### Feature Purpose

Identify unresolved journey patterns that may indicate fragmentation,
confusion, or support demand without commercial continuation.

### Associated KPI

Cross-Section Journey Continuation; Support-Assisted Decision Engagement

## GA4 Requirements

### Event Name

`resort_context_engagement`

### Recommended Parameters

- `business_objective`: `BO-01`
- `kpi_name`: `Entertainment-to-Resort Context Engagement`
- `concept_id`: `CON-01`
- `page_name`: `entertainment`
- `section_name`
- `module_name`
- `context_label`
- `destination_category`, when applicable

### Associated KPI

Entertainment-to-Resort Context Engagement

### Associated Business Objective

BO-01

### Event Name

`resort_pathway_select`

### Recommended Parameters

- `business_objective`: `BO-01`
- `kpi_name`: `Resort Pathway Exploration From Entertainment`
- `concept_id`: `CON-01`
- `page_name`: `entertainment`
- `section_name`
- `module_name`
- `cta_label`
- `destination_category`
- `destination_url`, if available

### Associated KPI

Resort Pathway Exploration From Entertainment

### Associated Business Objective

BO-01

### Event Name

`context_commercial_continuation`

### Recommended Parameters

- `business_objective`: `BO-01`
- `kpi_name`: `Context-to-Commercial Continuation`
- `concept_id`: `CON-01`
- `page_name`: `entertainment`
- `source_section`
- `source_module`
- `downstream_action_type`
- `cta_label`
- `event_name`, when applicable
- `venue_name`, when applicable

### Associated KPI

Context-to-Commercial Continuation

### Associated Business Objective

BO-01, BO-03

### Event Name

`event_commercial_action_select`

### Recommended Parameters

- `business_objective`: `BO-02`
- `kpi_name`: `Qualified Commercial Action Rate`
- `concept_id`: `CON-03`
- `page_name`: `entertainment`
- `section_name`: event listing
- `module_name`: `EventCard`
- `cta_label`
- `action_type`
- `event_id`, if available
- `event_name`
- `venue_name`
- `event_date`

### Associated KPI

Qualified Commercial Action Rate

### Associated Business Objective

BO-02

### Event Name

`venue_booking_action_select`

### Recommended Parameters

- `business_objective`: `BO-02`
- `kpi_name`: `Qualified Commercial Action Rate`
- `concept_id`: `CON-03`
- `page_name`: `entertainment`
- `section_name`
- `module_name`: `VenueInfoPanel`
- `cta_label`: `BOOK NOW`
- `venue_name`
- `destination_url`, if available

### Associated KPI

Qualified Commercial Action Rate

### Associated Business Objective

BO-02

### Event Name

`cta_path_select`

### Recommended Parameters

- `business_objective`: `BO-02`
- `kpi_name`: `CTA Path Differentiation`
- `concept_id`: `CON-03`
- `page_name`: `entertainment`
- `module_name`
- `cta_label`
- `action_type`
- `event_id`, if available
- `event_name`, when applicable
- `venue_name`, when applicable

### Associated KPI

CTA Path Differentiation

### Associated Business Objective

BO-02

### Event Name

`faq_interaction`

### Recommended Parameters

- `business_objective`: `BO-02`
- `kpi_name`: `Support-Assisted Decision Engagement`
- `concept_id`: `CON-03`
- `page_name`: `entertainment`
- `section_name`: FAQ
- `module_name`: `FAQTabsAccordion`
- `faq_category`
- `question_name`, when applicable
- `interaction_type`: tab select, question expand, previous category, next category

### Associated KPI

Support-Assisted Decision Engagement; Lower-Page Support Content Engagement

### Associated Business Objective

BO-02, BO-03

### Event Name

`support_action_select`

### Recommended Parameters

- `business_objective`: `BO-02`
- `kpi_name`: `Support-Assisted Decision Engagement`
- `concept_id`: `CON-03`
- `page_name`: `entertainment`
- `section_name`
- `module_name`
- `support_type`: chat, phone, footer link, or other support path
- `cta_label`
- `destination_url`, if available

### Associated KPI

Support-Assisted Decision Engagement

### Associated Business Objective

BO-02

### Event Name

`cross_section_navigation`

### Recommended Parameters

- `business_objective`: `BO-03`
- `kpi_name`: `Cross-Section Journey Continuation`
- `concept_id`: `CON-05`
- `page_name`: `entertainment`
- `source_section`
- `source_module`
- `destination_section`
- `navigation_type`: anchor, scroll-linked interaction, CTA, footer, support

### Associated KPI

Cross-Section Journey Continuation

### Associated Business Objective

BO-03

### Event Name

`lower_page_support_engagement`

### Recommended Parameters

- `business_objective`: `BO-03`
- `kpi_name`: `Lower-Page Support Content Engagement`
- `concept_id`: `CON-05`
- `page_name`: `entertainment`
- `section_name`
- `module_name`
- `interaction_type`
- `cta_label`, when applicable
- `prior_section`, if available

### Associated KPI

Lower-Page Support Content Engagement

### Associated Business Objective

BO-03

### Event Name

`discovery_control_use`

### Recommended Parameters

- `business_objective`: `BO-03`
- `kpi_name`: `Discovery Control Engagement`
- `concept_id`: `CON-05`
- `page_name`: `entertainment`
- `section_name`: event listing
- `module_name`: `EventListingControls`
- `control_type`
- `control_value`, if available
- `result_state`, if available

### Associated KPI

Discovery Control Engagement

### Associated Business Objective

BO-03

### Event Name

`orientation_control_use`

### Recommended Parameters

- `business_objective`: `BO-03`
- `kpi_name`: `Discovery Control Engagement`
- `concept_id`: `CON-05`
- `page_name`: `entertainment`
- `section_name`
- `module_name`: `HeroCarousel` or `PageAnchorNav`
- `control_type`
- `control_label`
- `destination_section`, when applicable

### Associated KPI

Discovery Control Engagement; Cross-Section Journey Continuation

### Associated Business Objective

BO-03

### Event Name

`friction_signal_observed`

### Recommended Parameters

- `business_objective`: `BO-02`
- `kpi_name`: `Support-Assisted Decision Engagement`
- `concept_id`: `CON-03`
- `page_name`: `entertainment`
- `section_name`
- `module_name`
- `friction_type`
- `cta_label`, if applicable
- `interaction_count`, if available

### Associated KPI

Support-Assisted Decision Engagement

### Associated Business Objective

BO-02, BO-03

### Event Name

`journey_friction_pattern`

### Recommended Parameters

- `business_objective`: `BO-03`
- `kpi_name`: `Cross-Section Journey Continuation`
- `concept_id`: `CON-05`
- `page_name`: `entertainment`
- `source_section`
- `friction_type`
- `prior_action_type`, if available
- `next_action_type`, if available
- `support_used`, if available

### Associated KPI

Cross-Section Journey Continuation; Support-Assisted Decision Engagement

### Associated Business Objective

BO-02, BO-03

## GTM Requirements

### Event: `resort_context_engagement`

### Trigger

User interaction with validated resort-context modules or CTAs on the
Entertainment page.

### Variables

- Page name
- Section name
- Module name
- Context label
- Destination category
- Business objective
- KPI name
- Concept ID

### Dependencies

- Validated resort-context module inventory
- Stable module names
- Destination category taxonomy

### Event: `resort_pathway_select`

### Trigger

Click or tap on a validated broader resort pathway from entertainment context.

### Variables

- CTA label
- Destination category
- Destination URL
- Source section
- Source module
- Business objective
- KPI name
- Concept ID

### Dependencies

- Destination mapping for rooms, dining, offers, loyalty, venue, and other
  approved pathway categories
- URL capture or equivalent destination identifier

### Event: `context_commercial_continuation`

### Trigger

Sequential behavior where a guest engages resort context and then selects an
entertainment commercial, event detail, venue action, or support path.

### Variables

- Source section
- Source module
- Downstream action type
- CTA label
- Event name
- Venue name
- Business objective
- KPI name
- Concept ID

### Dependencies

- Session-level sequence visibility
- Prior context engagement state
- Commercial and support action taxonomy

### Event: `event_commercial_action_select`

### Trigger

Click or tap on event-card commercial CTAs including `GET TICKETS`,
`BUY TICKETS`, `BOOK NOW`, `TABLES`, and `LEARN MORE`.

### Variables

- Event ID, if available
- Event name
- Venue name
- Event date
- CTA label
- Action type
- Business objective
- KPI name
- Concept ID

### Dependencies

- Stable event metadata on event cards
- CTA label capture
- Action-type classification

### Event: `venue_booking_action_select`

### Trigger

Click or tap on venue module booking CTAs.

### Variables

- Venue name
- Section name
- Module name
- CTA label
- Destination URL
- Business objective
- KPI name
- Concept ID

### Dependencies

- Stable venue module naming
- Venue name capture
- Destination mapping

### Event: `cta_path_select`

### Trigger

Click or tap on tracked event, venue, support, or detail CTAs used for CTA path
differentiation analysis.

### Variables

- CTA label
- Action type
- Event name
- Venue name
- Module name
- Business objective
- KPI name
- Concept ID

### Dependencies

- CTA action-type taxonomy
- Consistent event and venue metadata

### Event: `faq_interaction`

### Trigger

Click or tap on FAQ tabs, FAQ question rows, previous category, or next
category controls.

### Variables

- FAQ category
- Question name
- Interaction type
- Section name
- Module name
- Business objective
- KPI name
- Concept ID

### Dependencies

- Stable FAQ category names
- Stable FAQ question identifiers or names
- Expanded FAQ state visibility, if question expansion is tracked

### Event: `support_action_select`

### Trigger

Click or tap on chat, phone, footer support, or other entertainment support
paths.

### Variables

- Support type
- CTA label
- Source section
- Source module
- Destination URL, if applicable
- Business objective
- KPI name
- Concept ID

### Dependencies

- Support path taxonomy
- Chat open-state visibility
- Phone link capture

### Event: `cross_section_navigation`

### Trigger

Guest moves between major Entertainment sections through anchors, navigation
controls, section CTAs, footer links, or other tracked page movement.

### Variables

- Source section
- Source module
- Destination section
- Navigation type
- Business objective
- KPI name
- Concept ID

### Dependencies

- Section naming convention
- Anchor and destination mapping
- Scroll or interaction visibility sufficient to classify section movement

### Event: `lower_page_support_engagement`

### Trigger

Engagement with theatre amenities, venue sections, FAQ, footer links, phone
links, or chat after event browsing.

### Variables

- Section name
- Module name
- Interaction type
- CTA label
- Prior section, if available
- Business objective
- KPI name
- Concept ID

### Dependencies

- Prior event-browsing state
- Lower-page module inventory
- Footer and support interaction capture

### Event: `discovery_control_use`

### Trigger

Use of date range, category filter, view control, or load more on the event
listing.

### Variables

- Control type
- Control value
- Result state, if available
- Section name
- Module name
- Business objective
- KPI name
- Concept ID

### Dependencies

- Stable control naming
- Selected value capture
- Post-control result state visibility, where available

### Event: `orientation_control_use`

### Trigger

Use of hero carousel controls or page anchors.

### Variables

- Control type
- Control label
- Source section
- Destination section
- Module name
- Business objective
- KPI name
- Concept ID

### Dependencies

- Hero carousel state visibility
- Page anchor destination mapping
- Mobile anchor availability confirmation

### Event: `friction_signal_observed`

### Trigger

Dead-click, rage-click, repeated-click, or unclear affordance signal on
tracked Entertainment surfaces.

### Variables

- Friction type
- Section name
- Module name
- CTA label, if applicable
- Interaction count, if available
- Business objective
- KPI name
- Concept ID

### Dependencies

- Friction detection capability in analytics tooling
- Stable surface metadata
- Threshold definitions supplied by analytics tooling configuration

### Event: `journey_friction_pattern`

### Trigger

Detected sequence pattern such as repeated CTA switching, support escalation
without commercial continuation, bounce, or exit from event browsing.

### Variables

- Friction type
- Source section
- Prior action type
- Next action type
- Support used
- Business objective
- KPI name
- Concept ID

### Dependencies

- Session-level path visibility
- Event-browsing exit or bounce classification
- Support-to-commercial continuation sequence visibility

## Data Layer Requirements

Required data points should be limited to values needed to support the
telemetry goals.

### Page And Context

- `page_name`
- `page_type`
- `section_name`
- `module_name`
- `component_name`
- `viewport_type`, when available
- `device_type`, when available

### Traceability

- `business_objective`
- `kpi_name`
- `concept_id`
- `event_name`
- `metric_category`
- `dashboard_destination`

### Event And Venue Metadata

- `event_id`, if available
- `event_name`
- `venue_name`
- `event_date`
- `event_category`, if available
- `event_position`, if available

### CTA And Destination Metadata

- `cta_label`
- `action_type`
- `destination_category`
- `destination_section`
- `destination_url`, if available
- `source_section`
- `source_module`

### FAQ And Support Metadata

- `question_name`
- `question_category`
- `support_type`
- `interaction_type`

### Discovery And Orientation Metadata

- `control_type`
- `control_value`
- `result_state`, if available
- `navigation_type`

### Friction Metadata

- `friction_type`
- `interaction_count`, if available
- `prior_action_type`, if available
- `next_action_type`, if available
- `support_used`, if available

## Dashboard Requirements

### Executive Dashboard

The Executive Dashboard should emphasize whether the pilot improves commercial
confidence and broader resort consideration without harming core entertainment
intent.

Recommended sections:

- Primary Conversion
- Resort Context

Metrics:

- Qualified Commercial Action Rate
- Primary entertainment commercial action guardrail
- Ticket purchase intent
- Table or venue booking intent
- Global booking intent from entertainment
- Entertainment-to-Resort Context Engagement
- Resort Pathway Exploration From Entertainment
- Context-to-Commercial Continuation

Primary traceability:

- BO-01 through `resort_context_engagement`, `resort_pathway_select`, and
  `context_commercial_continuation`
- BO-02 through `event_commercial_action_select`,
  `venue_booking_action_select`, and `cta_path_select`

### Manager Dashboard

The Manager Dashboard should emphasize which page areas and decision-support
surfaces are working across discovery, continuity, action confidence, and
support.

Recommended sections:

- Journey Continuity
- Discovery
- Action Confidence
- Support

Metrics:

- Cross-Section Journey Continuation
- Lower-Page Support Content Engagement
- Movement from event listings to venue, FAQ, support, and footer areas
- Discovery Control Engagement
- Date range interaction
- Category and view control interaction
- Load-more engagement
- CTA Path Differentiation
- Support-Assisted Decision Engagement
- FAQ, chat, phone, and venue action engagement

Primary traceability:

- BO-02 through `cta_path_select`, `faq_interaction`, and
  `support_action_select`
- BO-03 through `cross_section_navigation`,
  `lower_page_support_engagement`, `discovery_control_use`, and
  `orientation_control_use`

### Analyst Dashboard

The Analyst Dashboard should emphasize diagnostic patterns, friction, and
cross-experience exploration.

Recommended sections:

- Friction
- Cross-Experience Exploration

Metrics:

- Dead clicks
- Rage clicks
- Exit rate from event browsing
- Bounce rate
- Repeated CTA switching
- Support escalation without commercial continuation
- Exploration from entertainment into validated rooms, dining, offers,
  loyalty, venue, or related resort pathways
- Return from broader context into entertainment commercial actions
- Desktop and mobile differences where device evidence is available

Primary traceability:

- BO-01 through `resort_pathway_select` and
  `context_commercial_continuation`
- BO-02 through `friction_signal_observed`
- BO-03 through `journey_friction_pattern`

## QA Validation Requirements

### Event: `resort_context_engagement`

### Validation Goal

Verify validated resort-context interactions are tracked with objective, KPI,
concept, section, module, and context labels.

### Expected Behavior

The event fires when a guest engages with a validated resort-context surface.
Pendo and GA4 receive matching traceability metadata.

### Validation Method

- Verify event fires
- Verify Pendo receives the feature event
- Verify GA4 receives the event
- Verify attributes and parameters populate
- Verify Executive Dashboard can receive resort context data

### Event: `resort_pathway_select`

### Validation Goal

Verify broader resort pathway selections are classified by destination
category.

### Expected Behavior

The event fires when a guest selects a validated resort pathway from the
Entertainment page.

### Validation Method

- Verify event fires
- Verify destination category populates
- Verify Pendo and GA4 receive the event
- Verify Executive and Analyst dashboard mappings receive the data

### Event: `context_commercial_continuation`

### Validation Goal

Verify continuation from resort context to commercial, event detail, venue, or
support paths can be measured.

### Expected Behavior

The event or sequence is available when context engagement is followed by a
downstream Entertainment action.

### Validation Method

- Verify prior context engagement is available
- Verify downstream action type populates
- Verify GA4 receives sequence-relevant metadata
- Verify dashboard receives continuation data

### Event: `event_commercial_action_select`

### Validation Goal

Verify event-card commercial actions are tracked with event metadata and CTA
classification.

### Expected Behavior

The event fires when a guest selects `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`,
`TABLES`, or `LEARN MORE` from an event card.

### Validation Method

- Verify event fires for each visible CTA label
- Verify event name, venue name, event date, CTA label, and action type
  populate
- Verify Pendo receives the feature event
- Verify GA4 receives the event
- Verify Executive and Manager dashboard mappings receive the data

### Event: `venue_booking_action_select`

### Validation Goal

Verify venue-level booking actions are tracked with venue context.

### Expected Behavior

The event fires when a guest selects a venue module booking CTA.

### Validation Method

- Verify event fires
- Verify venue name and CTA label populate
- Verify Pendo and GA4 receive the event
- Verify Primary Conversion and Action Confidence dashboard mappings receive
  the data

### Event: `cta_path_select`

### Validation Goal

Verify CTA path differentiation can classify each selected action path.

### Expected Behavior

Each tracked CTA selection includes label and action type.

### Validation Method

- Verify event fires for each CTA label
- Verify action type classification populates
- Verify Pendo and GA4 receive the event
- Verify Manager Dashboard can segment CTA path distribution

### Event: `faq_interaction`

### Validation Goal

Verify FAQ category and question interactions are measurable.

### Expected Behavior

The event fires for FAQ tabs, FAQ question rows, and FAQ category navigation.

### Validation Method

- Verify event fires
- Verify question category populates
- Verify question name populates for question rows
- Verify Pendo and GA4 receive the event
- Verify Support dashboard mappings receive the data

### Event: `support_action_select`

### Validation Goal

Verify direct support paths are tracked by support type.

### Expected Behavior

The event fires when a guest selects chat, phone, footer support, or related
support links.

### Validation Method

- Verify event fires
- Verify support type and CTA label populate
- Verify Pendo and GA4 receive the event
- Verify Support dashboard mappings receive the data

### Event: `cross_section_navigation`

### Validation Goal

Verify major page-section movement can be attributed to source and destination
sections.

### Expected Behavior

The event fires or is derivable when a guest moves from event listings into
theatre, venue, FAQ, footer, support, or resort-value sections.

### Validation Method

- Verify source section populates
- Verify destination section populates
- Verify navigation type populates
- Verify Pendo and GA4 receive the event
- Verify Journey Continuity dashboard mappings receive the data

### Event: `lower_page_support_engagement`

### Validation Goal

Verify lower-page context and support surfaces are tracked after event
browsing.

### Expected Behavior

The event fires when a guest engages theatre amenities, venue sections, FAQ,
footer links, phone links, or chat after event browsing.

### Validation Method

- Verify event fires
- Verify prior section populates when available
- Verify section and module metadata populate
- Verify Pendo and GA4 receive the event
- Verify Journey Continuity and Support dashboard mappings receive the data

### Event: `discovery_control_use`

### Validation Goal

Verify event listing controls are tracked with control type and selected value.

### Expected Behavior

The event fires when a guest uses date range, category filter, view controls,
or load more.

### Validation Method

- Verify event fires
- Verify control type populates
- Verify selected control value populates when available
- Verify Pendo and GA4 receive the event
- Verify Discovery dashboard mappings receive the data

### Event: `orientation_control_use`

### Validation Goal

Verify hero carousel and page-anchor controls are tracked.

### Expected Behavior

The event fires when a guest uses carousel controls or page anchors.

### Validation Method

- Verify event fires
- Verify control type and control label populate
- Verify destination section populates for anchors
- Verify Pendo and GA4 receive the event
- Verify Discovery and Journey Continuity dashboard mappings receive the data

### Event: `friction_signal_observed`

### Validation Goal

Verify friction signals can be associated with the affected Entertainment
surface.

### Expected Behavior

Dead-click, rage-click, repeated-click, or unclear-affordance signals populate
with section and module metadata.

### Validation Method

- Verify friction signal is captured by the analytics tooling
- Verify section, module, and friction type populate
- Verify Pendo or GA4 receives the signal where configured
- Verify Analyst Dashboard can receive friction data

### Event: `journey_friction_pattern`

### Validation Goal

Verify unresolved journey patterns can be detected or derived for reporting.

### Expected Behavior

Repeated CTA switching, support without commercial continuation, bounce, and
event-listing exit patterns are available for analyst reporting.

### Validation Method

- Verify relevant source events exist
- Verify sequence or path logic can derive the pattern
- Verify dashboard receives derived journey-friction data
- Verify support-used and prior/next action fields populate when available

## Implementation Risks

- Missing metadata: Event IDs, stable venue identifiers, FAQ question IDs,
  destination categories, and result states were not confirmed in the provided
  evidence.
- Missing identifiers: Event cards show event names, venue badges, dates, and
  CTA labels, but stable event identifiers were not provided.
- Missing content ownership: CTA destination rules, FAQ answer ownership,
  support ownership, vendor handoffs, VIP rules, and venue policy ownership
  were not provided.
- Tracking ambiguity: `BOOK NOW`, ticket, table, venue booking, and learn-more
  CTAs may point to different downstream systems or intent paths that need
  consistent action-type classification.
- Dynamic content concerns: Event cards, date filters, category filters, view
  modes, load more, hero slides, and venue image carousels may change by state
  or content feed.
- Third-party dependency concerns: Ticketing, table reservation, booking,
  chat, phone, and possible vendor flows were not provided, so downstream
  receipt and continuation tracking may depend on external systems.
- Mobile visibility concerns: Desktop controls are documented, but mobile
  category/view controls and mobile anchor behavior were not fully visible in
  the screenshots.
- Missing interaction states: Opened menu, booking, ticketing, table
  reservation, event detail, expanded FAQ, opened chat, date picker, calendar,
  empty, loading, error, and post-load-more states were not provided.
- Dashboard dependency concerns: Reporting requires consistent event,
  objective, KPI, platform, and dashboard mappings across Pendo, GA4, GTM, and
  downstream dashboard datasets.

## Analytics Readiness Assessment

### Pendo Readiness

Medium

Pendo readiness is Medium because the page has clear measurable features,
modules, CTAs, FAQ rows, support paths, and controls. Readiness is limited by
missing stable identifiers, missing expanded states, unconfirmed mobile
control behavior, and unresolved destination ownership for commercial/support
paths.

### GA4 Readiness

Medium

GA4 readiness is Medium because the telemetry strategy maps cleanly to
event-level behavior and recommended parameters. Readiness is limited by
missing event IDs, downstream flow visibility, sequence dependencies, and
third-party systems for booking, ticketing, tables, chat, and support.

### GTM Readiness

Medium

GTM readiness is Medium because triggers and variables can be specified for
visible surfaces and known interaction types. Readiness is limited by dynamic
content, missing state evidence, destination classification needs, and the need
for stable data-layer values.

### Dashboard Readiness

Medium

Dashboard readiness is Medium because the telemetry plan already defines an
Executive, Manager, and Analyst blueprint. Readiness is limited by lack of
baseline analytics, lack of current conversion data, missing downstream
commercial outcomes, and the need for consistent platform-to-dashboard mapping.

### QA Readiness

Medium

QA readiness is Medium because each major event can be validated against
expected firing behavior, attributes, GA4 parameters, Pendo receipt, and
dashboard routing. Readiness is limited by unavailable downstream states,
unconfirmed third-party receipt, and missing test coverage for mobile,
expanded, loading, empty, error, and post-interaction states.
