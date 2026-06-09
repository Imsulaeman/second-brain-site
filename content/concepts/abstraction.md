---
title: "Abstraction"
type: concept
tags: [abstraction, computational-thinking, problem-solving, programming]
created: 2026-06-09
updated: 2026-06-09
sources: 3
---

The word sounds like it means vague or unclear — in ordinary speech it often does. In computing and problem-solving it means the opposite: a precise simplification that lets you work at a higher level without managing lower-level detail. The computing definition comes closer to "the summary of something" or "the extraction from something."

## Interface and implementation

Every abstraction has two sides. The **interface** is what you see and interact with. The **implementation** is everything happening behind it. Pressing the "on" button on a coffee maker is the interface; the water pump, heating element, and drip mechanism are the implementation. A good abstraction makes the interface clean enough that you never need to think about the implementation unless something breaks.

This is the key nuance: abstraction doesn't erase complexity. The heating element is still heating water. The chemistry in the recipe is still happening. Abstraction *contains* complexity within a defined boundary and exposes only what you need to operate the system. The inner workings remain intact; you just don't have to touch them.

## Filtering to a Model

The BBC framing adds precision to what abstraction *produces*: a **model**. A model is a general idea of a problem that represents all instances, not a specific one. Once you have a model, you can design a solution that works for any instance — not just the one in front of you.

The cats example makes this concrete. All cats share eyes, tails, and fur. Those are the general characteristics. Specific characteristics — fur color, tail length, eye color — vary from cat to cat. Abstracting means keeping the generals and discarding the specifics. The result is a model cat: not any particular cat, but the idea of a cat that applies to all cats.

Without abstraction, the risk is over-specification: you solve the specific case in front of you but the solution breaks for any variant. If you assume all cats have long tails and short fur, your algorithm for "draw a cat" fails on any other cat.

The same structure applies to any problem: find the shared pattern first (pattern recognition), then filter out the details that vary (abstraction), keeping only what is needed to construct a general solution.

## Why it scales

Once you can treat a system as a black box with a simple interface, you can reason about it at a higher level — stack that system into a larger one, and reason about that. A recipe abstracts food chemistry. A dinner party plan abstracts recipes. A catering business plan abstracts dinner parties. Each layer frees you to reason about the next one up without holding the physics in mind.

This is also why abstraction is central to software engineering: large codebases are only manageable because each component exposes a clean interface. The caller doesn't need to read the source code; they need to understand the contract.

## Everyday examples

**Coffee maker** — press on, get coffee. The water pump, heating element, and drip valve are yours to ignore. The machine's designers decided those details were none of your business.

**Baking from a recipe** — the chemical reactions between baking soda and acid, the heat distribution physics of your oven, the Maillard reactions producing browning — all real, all irrelevant to you. The recipe abstracts them into: mix, pour, bake at 350° for 40 minutes.

**Getting dressed** — you apply learned associations ("this jacket with these pants") rather than re-deriving color theory each morning. Prior experience has been compressed into usable shortcuts that don't require re-analysis.

**Driving** — you use the steering wheel, pedals, and gear selector. The starter motor engaging the flywheel, the crankshaft turning, the pistons firing — none of that is your problem. Navigation is also abstracted: you follow a known route rather than re-optimizing every possible path.

## In computing

- **APIs** (Application Programming Interfaces): a set of defined methods for retrieving data or triggering actions, with the underlying code hidden from the caller.
- **Object-oriented programming:** a `Car` class exposes `.start()` and `.stop()`. Internal state variables and hardware logic are hidden from any code that uses the class.
- **SQL / databases:** a `SELECT` query retrieves data without requiring the caller to know how it's physically stored, which index was used, or how the query was executed.

In each case a layer of complexity is real but contained — accessible if you need it, invisible if you don't.

## Connections

- [[concepts/computational-thinking]] — abstraction is one of the four core CT elements, alongside decomposition, pattern recognition, and algorithmic thinking
- [[concepts/problem-framing]] — problem-framing uses abstraction to separate what is essential in a problem from what is incidental; both ask "what can we filter out?"
- [[concepts/design-thinking]] — in design thinking's define phase, abstraction is the act of stripping peripheral constraints to focus on the core user need
- [[concepts/inductive-reasoning]] — inductive reasoning derives general abstractions (rules, patterns) from specific observations
- [[concepts/deductive-reasoning]] — deductive reasoning applies an abstraction (a general rule) to a specific case

## Sources

- [[sources/understanding-abstraction-everyday-examples]]
- [[sources/computational-thinking-introduction]]
- [[sources/what-is-abstraction-bbc-bitesize]]
