# Telemetry Plan

# Resorts World Live Stay + Show Package Pilot

## Purpose

This pilot is designed to determine whether package merchandising can increase room-booking intent and package engagement without negatively impacting ticket purchase behavior.

The pilot is not intended to validate a full package platform.

The pilot is intended to validate whether surfacing Stay + Show packages within the Resorts World Live experience creates measurable business value.

---

# Pilot Success Criteria

The pilot will be considered successful if:

* Guests engage with package merchandising.
* Guests enter the booking engine through package paths.
* Package paths generate measurable room-booking intent.
* Ticket purchase behavior remains stable.

---

# Business Questions

## Question 1

Do guests engage with Stay + Show package merchandising?

Success Metric:

* Package CTA Click Rate

---

## Question 2

Do package paths generate additional booking intent?

Success Metric:

* Booking Engine Arrivals
* Booking Starts

---

## Question 3

Does package merchandising negatively impact ticket sales intent?

Guardrail Metric:

* Ticket-Only CTA Click Rate

---

## Question 4

Which package treatment generates stronger intent?

Future Experiment:

* Package Available Badge
* Stay + Show CTA
* Concert Weekend Stay Module

---

# Primary KPI

## Package Booking Start Rate

Definition:

Percentage of users exposed to package merchandising who initiate a booking flow.

Formula:

Booking Starts ÷ Package CTA Clicks

---

# Secondary KPIs

## Package CTA Click Rate

Definition:

Percentage of exposed users who click a package CTA.

Formula:

Package CTA Clicks ÷ Package Impressions

---

## Booking Engine Arrival Rate

Definition:

Percentage of users who successfully arrive at the booking engine after selecting a package.

Formula:

Booking Engine Arrivals ÷ Package CTA Clicks

---

## Ticket-Only Click Rate

Definition:

Percentage of users who continue through the standard ticket flow.

Purpose:

Guardrail metric to ensure package merchandising does not suppress ticket demand.

---

# Required Events

## package_impression

Triggered when:

A package treatment becomes visible.

Examples:

* Stay + Show CTA
* Package Available Badge
* Concert Weekend Stay Module

Required Context:

* Event Name
* Event Date
* Artist Name
* Source Module
* Device Type

---

## package_cta_clicked

Triggered when:

User selects a package path.

Required Context:

* Event Name
* Event Date
* Artist Name
* CTA Text
* Package URL
* Source Module

---

## ticket_only_clicked

Triggered when:

User selects the ticket-only path.

Required Context:

* Event Name
* Event Date
* Artist Name
* Source Module

---

## booking_engine_arrived

Triggered when:

User successfully reaches the booking engine.

Required Context:

* Event Name
* Event Date
* Promotion Code
* Arrival Date
* Departure Date

---

## booking_started

Triggered when:

User begins the booking process within the booking engine.

Required Context:

* Event Name
* Event Date
* Promotion Code

---

## booking_completed

Triggered when:

A booking is successfully completed.

Required Context:

* Event Name
* Event Date
* Promotion Code
* Booking Value (if available)

---

# Funnel

## Step 1

Package Impression

↓

## Step 2

Package CTA Click

↓

## Step 3

Booking Engine Arrival

↓

## Step 4

Booking Start

↓

## Step 5

Booking Completion

---

# Guardrails

Monitor for:

* Ticket-only click rate decline
* Mobile engagement decline
* Excessive exits before booking engine arrival
* Booking engine handoff failures
* Package CTA confusion

---

# Reporting Dashboard

## Executive Metrics

* Package Impressions
* Package CTA Clicks
* Package CTR
* Booking Engine Arrivals
* Booking Starts
* Booking Completions

---

## Funnel Metrics

* Impression → CTA
* CTA → Booking Engine
* Booking Engine → Booking Start
* Booking Start → Booking Completion

---

## Business Outcome Metrics

* Package Attach Rate
* Room Booking Starts
* Booking Revenue (if available)
* Ticket-Only Click Rate

---

# Pilot Hypotheses

## H1

Stay + Show package merchandising will increase booking engine entries from Resorts World Live traffic.

Success Metric:

booking_engine_arrived

---

## H2

Stay + Show package merchandising will increase room-booking starts.

Success Metric:

booking_started

---

## H3

Package merchandising will not materially reduce ticket purchase intent.

Guardrail Metric:

ticket_only_clicked

---

## H4

Guests respond more strongly to package availability messaging than generic package promotion.

Future Experiment:

Package Available Badge vs Stay + Show CTA

---

# Future Enhancements

Not included in this pilot:

* Package comparison
* Package save/share functionality
* VIP package journeys
* Loyalty personalization
* Dynamic package recommendations
* Date-based package finder
* Concert weekend recommendation engine

These should be evaluated only after the pilot demonstrates measurable demand for package merchandising.
