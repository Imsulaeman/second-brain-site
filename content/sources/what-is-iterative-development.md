---
title: "What is Iterative Development?"
type: source
tags: [ux-design, iterative-development, agile, prototyping, user-research]
created: 2026-06-11
updated: 2026-06-11
sources: 1
---

An IxDF explainer on [[concepts/iterative-development|iterative development]] in UX design, drawing on video commentary from [[entities/laura-klein|Laura Klein]], [[entities/alan-dix|Alan Dix]], Frank Spillers, William Hudson, Morgane Peng, and Todd Zaki Warfel. Covers what iteration means, why teams fail at it, the local maxima trap, and how to show iterative work in a portfolio.

## The Core Idea

[[concepts/iterative-development|Iterative development]] means shipping imperfect versions deliberately — in order to learn — and then going back to improve based on what you found. The cycle repeats until the product is good enough, and in web products may never formally stop.

[[entities/laura-klein|Laura Klein]]'s observation is the sharpest entry point: most agile teams she studied in 2019–2020 weren't actually iterating. They shipped features to the Done column and never looked at them again — sometimes without even checking whether anyone used them. Teams would ship stripped-down versions "just to get them out the door" and then still never return. The result was products full of half-finished things that didn't cohere. That, Klein says, is one of the least agile things you can do.

## Incremental vs Iterative

These two words are often confused but describe fundamentally different approaches.

**Incremental** development builds fully complete parts before assembling the whole. You ship nothing until a complete component is done. The user gets nothing usable until late in the process.

**Iterative** development ships a working whole from the start — rough, minimal, but functional — and refines it with each cycle. The user always has something usable; it just gets progressively better.

![Incremental vs iterative development — Mona Lisa metaphor](../assets/iterative-vs-incremental-mona-lisa.png)
*Incremental (top row): progressively larger sections of the finished painting, nothing visible until late. Iterative (bottom row): a full sketch that gains detail and color with each pass. The iterative version is always "a Mona Lisa"; the incremental version is just a corner until the end.*

![Incremental vs iterative — user satisfaction during development](../assets/iterative-vs-incremental-satisfaction.png)
*Incremental development leaves users unhappy until the final product ships. Iterative development ships usable versions from the start — each one better and each one meeting some real user need.*

## The Local Maxima Problem

[[entities/alan-dix|Alan Dix]]'s contribution is the most important caution about iteration: **starting position constrains how good you can get.** This is the [[concepts/local-maxima|local maxima]] problem.

If you begin with a genuinely poor design and iterate on it, you will end up with a somewhat less poor design. You are climbing a small hill. No amount of incremental improvement will get you to the top of the mountain if you started in the wrong valley.

Dix uses the Malvern Hills in the UK — highest point around 900 feet, nothing higher for miles around. If you start there and always walk uphill, you reach 900 feet. If you want to reach Everest, you have to start in the Himalayas. Starting on Tiree, the island he lives on, gives you 120 meters at most.

The practical implication: iteration requires two things. A good enough starting point — not perfect, but in the right general area. And accurate diagnosis at each step — understanding *what* is wrong, not just that something is wrong. Fixing the obvious symptom without understanding the root cause may make the design worse. Sometimes you have to step back and make a radical change rather than keep iterating.

## MVP vs MDP

Frank Spillers draws a distinction that matters in UX: MVP (Minimum Viable Product) is the lean-startup concept — ship the highest-value proposition as fast as possible. But viability is defined from an engineering or business perspective, not a user perspective.

MDP — Minimum Desirable Product — shifts the question: what is the minimum that users actually *want*? Desirability from the user's perspective, not just feasibility from the build team's. Spillers also uses Minimum Happy Product and Minimum Usable Product as variants of the same idea. The point is that "viable" and "desirable" are not synonymous, and UX design must optimize for the latter.

## The Iterative Process

![The iterative process of UX design — User Research → Design → Build cycle](../assets/iterative-process-ux-cycle.png)
*The three-stage loop: User Research informs Design; Design informs Build; Build feeds back into User Research. Each pass validates and refines the idea.*

The four-stage workflow:
1. **Plan and research** — map requirements, conduct user research (interviews, observation, usability studies), understand context of use
2. **Design and prototype** — start with low-fidelity wireframes showing the top 3 user goals; progress to higher-fidelity as the design stabilizes
3. **Test and get feedback** — usability testing with real users completing real tasks; track success rate, error rate, time on task
4. **Refine and iterate** — address what testing surfaced; decide whether to tweak or make a more radical change

![Feedback bridge — stakeholders' and users' feedback driving each iteration](../assets/iterative-development-feedback-bridge.png)
*Both users' feedback and stakeholders' feedback are the cargo that carries the design forward across iterations. Neither alone is sufficient.*

## Benefits

User-centered by design. Reduces risk by catching errors early rather than discovering them after full build. Enables late-stage changes without catastrophic cost. Creates stakeholder visibility at each iteration rather than a single reveal. Produces a portfolio trail that shows design thinking in action.

## Disadvantages and Failure Modes

- **Resistance from waterfall teams** — stakeholders used to handoff workflows find iteration culturally unfamiliar
- **Time pressure** — iterating takes discipline; under deadline, teams revert to ship-and-never-return
- **Consistency drift** — multiple iterations without a design system produce incoherent products
- **Over-iteration** — perfect is the enemy of good; knowing when "good enough" is enough is its own skill
- **Local maxima** — iterating on a fundamentally wrong starting point produces a polished version of the wrong thing

Reid Hoffman's rule on the last point: *"If you are not embarrassed by the first version of your product, you've launched too late."*

The source is the IxDF topic page on iterative development, drawing on expert video commentary throughout.

## Key Concepts

- [[concepts/iterative-development|Iterative Development]]
- [[concepts/local-maxima|Local Maxima]]

## Key Entities

- [[entities/laura-klein|Laura Klein]] — UX designer, author of *Build Better Products*
- [[entities/alan-dix|Alan Dix]] — HCI professor, local maxima explanation
