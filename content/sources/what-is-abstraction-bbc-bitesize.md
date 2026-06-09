---
title: "What Is Abstraction — BBC Bitesize KS3"
type: source
tags: [abstraction, computational-thinking, pattern-recognition, model, education]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# What Is Abstraction — BBC Bitesize KS3

**Source:** BBC Bitesize, KS3 Computer Science Revision
**Raw file:** `raw/What is abstraction - Abstraction - KS3 Computer Science Revision.md`

## Summary

![[abstraction-cornerstone.png]]

Abstraction is the process of filtering out the characteristics you don't need so you can concentrate on the ones you do. It follows pattern recognition in the CT sequence: once you've found which characteristics are shared, abstraction strips away the specific details to leave a general model. That model then tells you how to approach *any* instance of the problem, not just a specific one.

## Key Points

**Definition:** Filtering out irrelevant characteristics and specific details, keeping only the general patterns that are necessary for solving the problem. The result is a **model** — a general idea of the problem.

**The cats example (specific details):**
- General characteristics all cats share: eyes, tail, fur, meowing, liking fish
- Specific characteristics: black fur, long tail, green eyes, love of salmon, loud meow
- To draw a basic cat, you need the generals (eyes, tail, fur), not the specifics (color, length, sound)
- Without abstraction you might believe all cats have long tails and short fur — a false constraint

![[abstraction-cat-stamp.png]]

**The cats comparison (all types of cats):**

![[pattern-recognition-cats-comparison.png]]

Different cats share the same general features (eyes, tails, fur) but the specifics vary. Abstracting produces a model cat that represents *all cats*, not any specific cat.

**Cake baking — general vs. specific:**

| General patterns | Specific details |
|---|---|
| We need to know a cake has ingredients | We don't need to know what those ingredients are |
| Each ingredient has a specified quantity | We don't need to know what that quantity is |
| Each cake needs a specified time to bake | We don't need to know how long the time is |

**Model definition:** A model is a general idea of the problem. It represents all instances, not a specific one. A model cake is any cake — not a specific sponge or fruit cake. From the model we can learn how to bake *any* cake.

**Why it matters:** Without abstraction, solutions become over-specified. You end up solving one specific case instead of the general problem. This is a source of incorrect solutions, not just inefficient ones.

## Concepts

- [[concepts/abstraction]] — the core concept this source defines, adding the BBC "model" framing
- [[concepts/computational-thinking]] — abstraction is one of the four CT cornerstones
- [[concepts/pattern-recognition]] — pattern recognition identifies the shared characteristics; abstraction then filters out the specifics, keeping only the shared ones
- [[concepts/algorithm]] — the algorithm is designed for the abstracted model, not for a specific instance
