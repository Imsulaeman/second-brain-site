---
title: "Design Thinking"
type: concept
tags: [problem-solving, user-research, ux-design, innovation, ideation, weak]
created: 2026-06-03
updated: 2026-06-03
sources: 1
---

# Design Thinking

A structured, human-centered approach to problem-solving and innovation. Popularized by IDEO and the Stanford d.school in the 2000s. Offers a repeatable process for moving from ambiguous problem space to tested solution without skipping diagnosis or user understanding.

## The Five-Stage Model

The canonical Stanford d.school sequence:

1. **Empathize** — observe, interview, immerse. Understand users' needs, pain points, and context. **Don't assume.** This is the non-negotiable first stage. Real empathy requires perspective taking without judgment, recognising the other person's emotion, and communicating that recognition (see [[concepts/empathy]]). The memorable image is climbing down into the hole with the person rather than offering comfort from above. Common blocks include starting with "at least" silver linings and running shallow persona exercises that never change what gets built. Awareness of your own reactions is the prerequisite; without it you collect data *about* users instead of feeling *with* them.
2. **Define** — synthesize findings into a clear problem statement. Frame the real problem, not the symptom. [[concepts/5-whys]] lives here.
3. **Ideate** — generate many possible solutions. Quantity over quality at this stage; diverge before converging.
4. **Prototype** — build the cheapest/fastest version that tests the core hypothesis. Paper sketches, clickable wireframes, role-play.
5. **Test** — put the prototype in front of users. Watch what breaks. Learn. Iterate or pivot.

Not strictly linear — loop back as insights emerge. The point is **you can't ideate well until you've defined the problem, and you can't define the problem until you've empathized deeply**.

## Why It Matters

Design thinking formalizes something designers always did intuitively, making it accessible to engineers, product managers, and organizations that default to solution-first thinking. It draws heavily from [[concepts/first-principles-thinking|First Principles Thinking]] (questioning inherited assumptions) and [[concepts/second-order-thinking|Second-Order Thinking]] (mapping downstream user and system effects). Three core contributions:

1. **Forces diagnosis before solution** — the empathize → define sequence prevents jumping to answers.
2. **Makes prototyping cheap** — low-fidelity tests let you fail fast without burning budget or credibility.
3. **Treats failure as data** — a "failed" test is just information; pivot or iterate.

## Where 5 Whys Fits

[[concepts/5-whys]] is the **signature tool for the define phase**. After you've collected user stories, complaints, and drop-off data in the empathize stage, 5 Whys helps you drill from the visible symptom ("users abandon checkout") to the root cause ("users don't trust the payment-security signaling"). That root becomes the problem statement you take into ideation.

Without the drill, teams define problems at the symptom level and waste the ideate/prototype/test loop solving the wrong thing.

## Adjacent Tools in the Design Thinking Toolkit

- **Empathy maps** — quadrant chart of what users say, think, do, feel
- **Journey maps** — timeline of user experience from start to finish, highlighting pain points
- **Persona development** — archetypes representing user segments
- **How Might We (HMW) questions** — reframe problems as open-ended opportunities
- **Dot voting** — quick team prioritization of ideas
- **5 Whys** — root-cause drill ([[concepts/5-whys]])

## Criticisms and Failure Modes

- **Process worship** — running the five stages mechanically without actually learning anything; the form without the insight.
- **Shallow empathy** — one user interview and a persona template is not deep understanding.
- **Ideation theater** — generating 100 ideas but no courage to test the non-obvious ones.
- **Prototype without hypothesis** — building something to "see what happens" instead of testing a specific belief.
- **Ignoring constraints** — design thinking optimizes for desirability (users want it), but you also need feasibility (can we build it?) and viability (will it sustain the business?). Purely user-centered design can produce beautiful things no one will pay for or that can't be built.

## When to Use Design Thinking

- Ambiguous problem space — you know something's wrong but not what
- New product / feature ideation
- Service design, UX redesign
- Innovation projects where user needs are uncertain
- Cross-functional teams that default to solution-first thinking

## When to Reach for Something Else

- The problem is already clearly defined and the constraint is execution speed
- Technical or infrastructure problem with no user-facing ambiguity
- Regulatory/compliance context where user desires don't define the solution space

## Connection to Other Concepts

- [[concepts/5-whys]] — core define-phase tool; moves from symptom to root problem
- [[concepts/problem-framing]] — design thinking is one structured approach to framing; E5 (from HBR) is another
- [[concepts/first-principles-thinking]] — complementary: design thinking starts from user needs; first-principles starts from foundational constraints. Use both.
- [[concepts/critical-thinking]] — design thinking is a workflow that embeds critical thinking (question assumptions, gather evidence, test hypotheses)
- [[concepts/computational-thinking]] — CT is the parallel problem-solving framework from computing. Design thinking centers empathy and prototyping; CT centers logical structure and algorithm design. In practice: DT diagnoses the problem space, CT builds the solution.
- [[entities/don-norman]] — Norman's empathize → define → ideate sequence became the d.school model

## Sources

- [[sources/what-are-5-whys]] — 5 Whys as a key tool in the empathize/define phases
- [[sources/brene-brown-on-empathy]] — the four qualities of empathy and the distinction between feeling with versus feeling for
- [[sources/how-do-you-teach-empathy-jonathan-juravich]] — awareness as the root of empathy and concrete practices that turn noticing into action
