---
title: "Evaluation"
type: concept
tags: [evaluation, algorithm, computational-thinking, debugging, problem-solving]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# Evaluation

## Core Idea

Evaluation is the checking stage between designing an algorithm and programming it. Once you have built a solution using decomposition, pattern recognition, abstraction, and algorithmic thinking, evaluation asks: *does this solution actually solve the problem, completely, correctly, and efficiently?*

The BBC frames this precisely: without evaluation, faults in the algorithm are not caught before programming begins. A faulty algorithm produces a faulty program — and faults discovered in code are much harder to fix than faults discovered on paper.

---

## What to Check

A valid algorithm must satisfy all four criteria:

| Criterion | Question to ask | Fault if missing |
|---|---|---|
| **Fully understood** | Is every step clear and unambiguous? | Steps left vague; programmer guesses wrong |
| **Complete** | Does it cover every part of the problem? | Important steps omitted (oven temperature, placement) |
| **Efficient** | Is it as short and fast as the task allows? | Steps repeated unnecessarily; wasted resources |
| **Meets design criteria** | Does it match what was specified? | Solution technically works but fails the brief |

---

## Four Fault Types

**Not fully understood** — the problem was not decomposed thoroughly enough. Some steps are unclear or missing.

**Incomplete** — part of the problem was left out. The algorithm for baking a cake says how long to bake, but never says to put the cake in the oven or set the temperature. The cake may not be baked at all, or may be burnt.

**Inefficient** — the algorithm works but repeats steps unnecessarily. Fetching one ingredient per trip when all ingredients could be fetched at once turns 5 steps into 9. Both solutions work; only one is efficient.

**Doesn't meet design criteria** — the solution doesn't match the original specification. Producing a plain chocolate cake when a chocolate fudge cake with icing and flakes was requested is a design criteria failure even if the cake is technically a cake.

---

## Dry Runs

A **dry run** is the primary evaluation technique: trace the algorithm by hand, on paper, before writing any code.

Steps:
1. Pick a representative input (or several)
2. Follow the algorithm step by step, noting which path each condition takes
3. Check that the output is correct for each input
4. If the output is wrong, the path through the algorithm shows exactly where the fault occurred

The BBC demonstrates this with the name/age algorithm from [[concepts/algorithm]]: try ages 15 and 75. Age 75 should take the "aged to perfection" branch; age 15 should take the "spring chicken" branch. If either path returns the wrong output, the algorithm has a fault.

Dry runs are also used on completed programs — stepping through code line by line to find where a bug appears.

---

## Evaluation Is Not Optional

Skipping evaluation doesn't save time — it defers the cost to the programming stage where it is higher. An algorithm fault found on paper costs a minute to fix. The same fault found in code may require hours of debugging, refactoring, and retesting.

This is structurally the same lesson as the Lean/quality concept of "fail fast": catch defects at the earliest stage, before they are embedded in more complex work.

---

## Connections

- [[concepts/algorithm]] — evaluation applies to an algorithm; a dry run walks through the algorithm's paths. The name/age example links both concepts concretely.
- [[concepts/computational-thinking]] — evaluation is the checking stage that completes the CT process after the four cornerstones produce an algorithm
- [[concepts/decomposition]] — two of the four fault types (not understood, incomplete) are decomposition failures; the cake ingredients and equipment examples show what incomplete decomposition looks like
- [[concepts/debugging]] — dry runs on programs are a form of debugging; evaluation and debugging are the same activity at different stages (before vs. after coding)

## Sources

- [[sources/what-is-evaluation-bbc-bitesize]]
