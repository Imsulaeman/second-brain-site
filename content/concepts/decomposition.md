---
title: "Decomposition"
type: concept
tags: [decomposition, computational-thinking, problem-solving, programming]
created: 2026-06-09
updated: 2026-06-09
sources: 2
---

Familiar tasks get decomposed automatically — you don't consciously plan each step of brushing your teeth. The problem is that when something is new or complex, people try to tackle it the same way: as a single thing. That's exactly when you most need to decompose it. The instinct to confront a problem whole is strongest when the problem is least tractable that way.

Decomposition is one of the four core elements of [[concepts/computational-thinking]]. It means breaking a complex problem or system into smaller parts that can be examined, solved, or designed individually, then combining those solutions into an answer to the whole.

## The mechanism

Break → solve each part → recombine. The three steps matter equally. Breaking without recombining produces a list of answered sub-questions but no solution to the original problem. The sub-problems also need to be the right size — too large and you've just renamed the original problem; too small and you're tracking irrelevant detail.

Decomposition scales across the scope of a problem. A crime investigation, an essay, a software system, a recipe, a to-do list — all are decomposition at different scales. The technique doesn't change; the grain size of what counts as a "part" shifts with the domain.

## Examples

**Crime scene investigation** — solving a crime is complex precisely because there are many unknowns at once. Decomposed, the question "who did this?" becomes: what crime was committed, when, where, what evidence exists, who witnessed it, whether similar crimes have occurred recently. Each sub-question can be investigated independently and in parallel, by different people.

**Creating an app** — a first-time app creator faces an intimidating blank slate. Decomposed: what kind of app, who is it for, what does it look like, what graphics and audio are needed, what software will build it, how does the user navigate it, how will it be tested, where will it be distributed. The list isn't a guarantee of success — the work is still real — but it converts paralysis into a tractable queue.

**Writing an essay** — before writing a word, decompose into introduction (the claim), body paragraphs (each carrying one argument), and conclusion (the crystallization). Within each paragraph, decompose again: topic sentence → evidence → explanation. Each piece can be drafted and revised independently.

**Software engineering** — a large codebase is only writable and maintainable because functions, classes, modules, and services each handle one piece. The programmer writing a user authentication module doesn't need to hold the payment logic in mind. Decomposition is the structural principle that keeps software from collapsing under its own complexity.

## Division of labor

A solved sub-problem can be handed to whoever is best positioned to solve it. A team building an app can split graphics, backend, and testing across different people without each person needing to understand the whole system. This is decomposition's organizational payoff: it not only simplifies problem-solving, it enables collaboration by making interfaces between parts explicit.

## The recombination step

The combine step is where decomposition can fail silently. Each sub-problem may be solved correctly, but the solutions may not fit together — interfaces are incompatible, assumptions conflict, or an integration edge case wasn't modeled as a sub-problem. In software this is the integration testing problem; in writing it's the paragraph that makes sense alone but doesn't connect to the next one. Decompose carefully, recombine deliberately.

## Connections

- [[concepts/computational-thinking]] — decomposition is the first of the four CT core elements; in practice it comes first: decompose, then recognize patterns, abstract, then algorithm-build
- [[concepts/abstraction]] — after decomposing, each sub-problem is abstracted to filter out noise before a solution is designed
- [[concepts/5-whys]] — the 5 Whys technique is recursive decomposition applied specifically to root-cause analysis: each answer to "why?" breaks a symptom into its sub-cause
- [[concepts/problem-framing]] — problem-framing includes decomposition as one of its tools, but operates at a higher level: it asks whether you're solving the right problem, not just how to split it
- [[concepts/design-thinking]] — design thinking's ideation and prototyping phases both depend on decomposition to break a solution concept into testable pieces

## Sources

- [[sources/what-is-decomposition-bbc-bitesize]]
- [[sources/computational-thinking-tech-tip]]
