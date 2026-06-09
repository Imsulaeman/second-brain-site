---
title: "A Quick Guide to Conditional Logic — Khan Academy"
type: source
tags: [logic, conditionals, sufficient-conditions, necessary-conditions, LSAT, reasoning]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# A Quick Guide to Conditional Logic — Khan Academy

**Source:** Khan Academy / LSAT prep series
**Raw file:** `raw/A quick guide to conditional logic (Khan Academy).md`

## Summary

A reference guide for translating 14 common prose phrasings into conditional logic diagrams. The core insight: the same logical structure (X → Y) hides behind many different surface phrasings in natural language. Accurate translation requires reading for *logical meaning*, not word-by-word parsing.

## The 14 Translation Patterns

| Prose form | Diagram | Contrapositive |
|---|---|---|
| If X, then Y | X → Y | ¬Y → ¬X |
| X if Y | Y → X | ¬X → ¬Y |
| X only if Y | X → Y | ¬Y → ¬X |
| Only X are Y | Y → X | ¬X → ¬Y |
| Any X is Y | X → Y | ¬Y → ¬X |
| Every X is Y | X → Y | ¬Y → ¬X |
| No X is Y | X → ¬Y | Y → ¬X |
| X cannot be Y | X → ¬Y | Y → ¬X |
| Without X, no Y | Y → X | ¬X → ¬Y |
| X requires Y | X → Y | ¬Y → ¬X |
| In order for X, Y must be true | X → Y | ¬Y → ¬X |
| X depends on Y | X → Y | ¬Y → ¬X |
| X happens whenever Y | Y → X | ¬X → ¬Y |
| No X unless Y | X → Y | ¬Y → ¬X |

**High-risk translations (most commonly mistranslated):**
- **"X if Y"** → Y → X (not X → Y). The word "if" points to the sufficient condition, which is Y here.
- **"Only X are Y"** → Y → X. "Only" signals the necessary condition — only X can be Y means being Y requires being X.
- **"X happens whenever Y"** → Y → X. "Whenever" makes Y the trigger.
- **"No X unless Y"** → X → Y. "Unless Y" means "if not Y, then not X" — equivalently, X requires Y.

## Key Takeaways from the Source

**Trigger → Result:** The left side of the arrow is the trigger (sufficient condition). If it's true, the right side is guaranteed 100% of the time. Timeline is irrelevant — only the direction of sufficiency matters.

**Translate logical meaning, not words:** "X if Y" does not map X on the left just because X appears first. Read what the sentence is *claiming* before assigning positions.

**Contrapositives are always included:** Every translation comes with its logically equivalent contrapositive. Knowing both is necessary for test reasoning because the trigger you're given is often the contrapositive trigger, not the original.

## Concepts

- [[concepts/sufficient-and-necessary-conditions]] — every translation pattern in this guide is an instance of the sufficient/necessary distinction; the table expands the concept's signal-word section with 14 concrete prose forms
