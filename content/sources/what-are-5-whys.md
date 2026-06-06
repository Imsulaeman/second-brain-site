---
title: "What are 5 Whys"
type: source
tags: [problem-solving, root-cause-analysis, design-thinking, ux-design, kaizen]
created: 2026-06-03
updated: 2026-06-06
sources: 1
---

# What are 5 Whys (Interaction Design Foundation)

**Source:** [interaction-design.org — 5 Whys](https://www.interaction-design.org/literature/topics/5-whys)
**Clipped:** 2026-06-03

## Summary

A definition page on the **5 Whys** root-cause technique developed by [[entities/sakichi-toyoda|Sakichi Toyoda]] at [[entities/toyota|Toyota]] in the 1930s. Iteratively ask "why?" — typically five times — to peel symptoms off until you reach the systemic root cause. Originally a manufacturing tool, now a staple of [[concepts/design-thinking|design thinking]], [[concepts/critical-thinking|critical thinking]], and [[concepts/problem-framing|problem framing]] in UX, product, and service design.

## Key Takeaways

- **Symptoms ≠ root cause.** Most apparent problems are end results several steps removed from what actually started the chain. If you do not address the root, the symptoms keep returning.
- **Five is a guideline, not a rule.** Could be three, could be eight. Stop when the answer hits "bedrock" — repeats, becomes irrelevant, or is no longer decomposable.
- **Linear, not branching.** Unlike open follow-up questions, 5 Whys drills straight down a single chain. That discipline is the point.
- **Strongest in the empathize and define phases** of [[concepts/design-thinking|design thinking]] — before drafting a problem statement, before ideation.
- **Anchor in evidence, not assumption.** Each "why" must be answered from observation or user data, not from the team's narrative. The technique fails when it becomes a brainstorm of plausible reasons.
- **Avoid accusatory framing.** "Why did you do that?" puts people on defense. "What led to that?" / "Can you walk me through what happened?" preserves the truthful answer.

## Toyota's Canonical Example

1. Why did the robot stop? → The circuit overloaded, blowing a fuse.
2. Why? → Insufficient lubrication on the bearings; they locked up.
3. Why? → The oil pump was not circulating enough oil.
4. Why? → The pump intake was clogged with metal shavings.
5. Why? → **There was no filter on the pump.** ← root cause

Fixing the fuse (level 1) ships the symptom back. Adding a filter (level 5) ends the chain.

## UX Example (Newsletter Subscriptions Dropped)

1. Why are subscriptions down? → Users click the button within 2 seconds.
2. Why? → They are trained to dismiss subscription pop-ups fast.
3. Why? → The internet is full of these pop-ups.
4. Why? → Orgs deployed them with [automatic opt-in](https://ixdf.org/literature/topics/automatic-opt-in) dark patterns.
5. Why? → Opt-out / passive flows produce fewer subscribers.

Surface diagnosis: "design changed, fix the design." Root: the automatic opt-in pattern was removed.

## Common Failure Modes

- **Stopping too early** — first or second answer feels reasonable, you accept it, ship a patch on a symptom.
- **Treating it as a checklist** — racing to five regardless of whether each step is anchored in evidence.
- **Inserting assumptions** — replacing observation with the team's pet theory.
- **Doing it alone** — single-perspective chains miss blind spots. Use the team to challenge each step.
- **Accusatory phrasing** — burns the source of truth (the user, the teammate).
- **Shallow / vague answers** — signal you need to rephrase, return to evidence, or try a different starting symptom.

## When to Use It

- Empathize / define phase of [[concepts/design-thinking|design thinking]]
- Post-incident review (engineering, ops)
- User-research synthesis when symptoms keep recurring
- Personal [[concepts/kaizen|kaizen]] — diagnosing why a habit, project, or decision keeps failing
- Debugging a system whose surface error keeps moving

## Connections

- [[concepts/5-whys|5 Whys]] — full concept page
- [[concepts/first-principles-thinking|First Principles Thinking]] — both strip away inherited surface explanations; 5 Whys is causal-chain drill, first-principles is constraint decomposition
- [[concepts/inversion|Inversion]] — complement: instead of "why did X happen," ask "how would I cause X to fail?"
- [[concepts/second-order-thinking|Second-Order Thinking]] — adjacent: 5 Whys looks backward at causes; second-order looks forward at consequences
- [[concepts/critical-thinking|Critical Thinking]] — 5 Whys is one of its core operational tools
- [[concepts/problem-framing|Problem Framing]] — output of a good 5 Whys is a sharpened problem statement
- [[concepts/design-thinking|Design Thinking]] — empathize/define phase tool
- [[entities/sakichi-toyoda|Sakichi Toyoda]] — originator
- [[entities/toyota|Toyota]] — origin context (TPS, kaizen)
- [[entities/don-norman|Don Norman]] — cited as advocate of root-cause thinking in 21st-century / human-centered design

## Sources

- [Interaction Design Foundation — What are 5 Whys](https://www.interaction-design.org/literature/topics/5-whys)
- Raw: `raw/5 Whys.md`
