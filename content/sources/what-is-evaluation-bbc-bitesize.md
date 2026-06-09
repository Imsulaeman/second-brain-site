---
title: "What Is Evaluation — BBC Bitesize KS3"
type: source
tags: [evaluation, algorithm, computational-thinking, debugging, education]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# What Is Evaluation — BBC Bitesize KS3

**Source:** BBC Bitesize, KS3 Computer Science Revision
**Raw file:** `raw/What is evaluation - Evaluating solutions - KS3 Computer Science Revision.md`

## Summary

![[evaluation-developer.png]]

Evaluation is the checking stage after an algorithm has been designed. Before programming begins, the algorithm must be tested against four criteria: it is fully understood, it is complete, it is efficient, and it meets the original design criteria. Skipping evaluation doesn't save time — it moves the fault-finding into programming, where it is much harder to fix.

## Four Criteria for a Valid Algorithm

1. **Fully understood** — every step is clear and unambiguous
2. **Complete** — every aspect of the problem is covered; nothing has been left out
3. **Efficient** — it solves the problem making best use of available resources (as quickly as possible, using least space)
4. **Meets design criteria** — the solution is exactly what was requested; it is fit for purpose

## Four Ways a Solution Can Be Faulty

**Not fully understood** — the problem wasn't decomposed properly; some steps are unclear.

**Incomplete** — part of the problem was accidentally left out. *Cake example:* the algorithm says how long to bake but never says to put the cake in the oven or set the oven temperature. Even if the cake reaches the oven, it could end up undercooked or burnt.

![[evaluation-ingredients-decomp.png]]

*Ingredients sub-decomposition:* each ingredient needs a name, quantity, and timing for when to add it.

**Inefficient** — the algorithm works but is unnecessarily long or complicated. *Cake example:* fetching ingredients one trip per ingredient when one trip for all ingredients is possible.

![[evaluation-inefficient-algorithm.png]]

9 steps for three ingredients when the efficient version does the same in 5.

![[evaluation-efficient-algorithm.png]]

**Doesn't meet design criteria** — the solution isn't what was asked for. If the spec called for a chocolate fudge cake with chocolate icing and flakes, producing a plain chocolate cake fails the design criteria.

*Equipment sub-decomposition (incomplete):*

![[evaluation-equipment-decomp.png]]

The equipment list says what equipment is needed but not which equipment to use with which ingredient. A complete decomposition would specify both.

## How to Evaluate

Ask three questions of the algorithm:
1. **Does it make sense?** — Is every step clear? If not, go back and decompose further.
2. **Does it cover all parts?** — If drawing a cat, does it describe everything needed, not just eyes, tail, and fur? Add steps until complete.
3. **Does it repeat tasks unnecessarily?** — Remove repetition until efficient.

After self-checking, ask a friend to review it. A fresh eye often catches errors the author missed.

## Dry Runs

A **dry run** is a pen-and-paper trace through an algorithm before it is programmed. Work through every step, note the path the flow takes, and check the output.

The BBC links dry runs explicitly to the name/age algorithm from the Algorithms source: try ages 15 and 75. Does each age take the correct path? Does each produce the correct output? If not, something needs fixing. Recording the path shows exactly where the error occurred.

Dry runs are also used on completed programs — programmers trace code paths to find bugs.

## Concepts

- [[concepts/evaluation]] — the core concept this source introduces
- [[concepts/algorithm]] — evaluation applies to an algorithm before it is programmed; dry runs use the name/age algorithm as the worked example
- [[concepts/computational-thinking]] — evaluation is the checking stage that follows the four-cornerstone CT process
- [[concepts/decomposition]] — two of the four fault types (not understood, incomplete) are failures of decomposition; the ingredients and equipment sub-decompositions are decomposition examples
