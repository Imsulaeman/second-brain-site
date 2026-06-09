---
title: "Conditional Reasoning and Logical Equivalence — Khan Academy"
type: source
tags: [logic, conditionals, contrapositive, converse, inverse, logical-equivalence, LSAT, reasoning]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# Conditional Reasoning and Logical Equivalence — Khan Academy

**Source:** Khan Academy / LSAT prep series
**Raw file:** `raw/Conditional reasoning and logical equivalence - Khan Academy.md`

## Summary

Identifies the four variations of a conditional statement and shows which are logically equivalent and which are not. Only the **contrapositive** is always logically equivalent to the original. The **converse** and **inverse** are not — confusing them with valid inferences is one of the most common logical errors.

## The Four Variations

Given: **A → B** (e.g., "Whenever I do yoga, I feel calm")

| Name | Form | Logically equivalent? |
|---|---|---|
| Original | A → B | — |
| **Contrapositive** | ¬B → ¬A | **Yes** |
| Converse | B → A | No |
| Inverse | ¬A → ¬B | No |

**Why the contrapositive is valid:** If A guarantees B, then not-B is proof that A couldn't have happened. Reverse the arrow and negate both sides.

**Why the converse is invalid:** "If I'm calm, then I'm doing yoga." Calm has many other causes. Knowing the result doesn't prove the trigger.

**Why the inverse is invalid:** "If I'm not doing yoga, I'm not calm." Not doing yoga still allows other triggers of calm (sleep, vacation, a puppy). Absence of one sufficient condition doesn't eliminate the result.

## Forming a Contrapositive with Multiple Terms

When the original has compound conditions (AND or OR), the contrapositive requires an extra step.

**Example:** "If I'm skateboarding, I will wear a helmet *and* protective gloves."

Diagram: Skateboarding → helmet **and** gloves

**Step 1 — Flip:** Move everything on the left to the right and vice versa.

Helmet and gloves → skateboarding *(not yet equivalent)*

**Step 2 — Negate every term:**

¬helmet and ¬gloves → ¬skateboarding *(not yet equivalent)*

This reads "if I'm wearing neither," which is too narrow — if I have gloves but no helmet, I'm still not skateboarding.

**Step 3 — Flip AND ↔ OR:**

¬helmet **or** ¬gloves → ¬skateboarding *(now equivalent)*

If either piece of necessary equipment is missing, I cannot be skateboarding.

**The rule:** In any contrapositive, every AND becomes OR and every OR becomes AND.

## Concepts

- [[concepts/sufficient-and-necessary-conditions]] — names and defines the four variations; adds the three-step multi-term contrapositive procedure and the AND↔OR flip rule
