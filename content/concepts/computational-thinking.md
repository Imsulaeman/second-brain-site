---
title: "Computational Thinking"
type: concept
tags: [computational-thinking, problem-solving, programming, digital-literacy, education]
created: 2026-06-09
updated: 2026-06-09
sources: 2
---

# Computational Thinking

Computational thinking (CT) is a problem-solving framework that breaks complex problems into manageable parts, looks for patterns, filters out irrelevant detail, and builds a step-by-step plan for a solution. It is not synonymous with coding, and it does not require a computer. It is a way of thinking that computers happen to be very good at executing.

---

## Where CT Sits

![[DL_CS_CT_coding.png]]

CT lives inside **Digital Literacy** (DL) — the capacity to use digital technology to locate, organize, understand, evaluate, and create information. **Computer Studies** (CS) is the intersection of DL and CT: the domain concerned with how computers actually compute. Coding falls squarely inside all three.

The key insight: CT can be practiced entirely unplugged. Logic puzzles, recipes, maps, and game rules all develop CT skills. This is why DL and CT don't fully overlap in the diagram — some CT development happens away from any screen.

---

## The Four Core Elements

Both sources agree on a canonical four-element core. These are the moves CT actually makes:

![[CT_flowchart.png]]

**[[concepts/decomposition|Decomposition]]** — break the problem into smaller, manageable sub-problems. Solve each separately, then combine. A to-do list for cleaning your room is decomposition. So is breaking an essay into introduction, argument, and conclusion before writing.

**[[concepts/pattern-recognition|Pattern Recognition]]** — examine the problem for similarities to previously solved problems, or for recurring structure within the current one. If a pattern exists, the solution can be simplified, grouped, or reused. If no pattern exists, that's also useful: it means no further simplification is available.

**[[concepts/abstraction|Abstraction]]** — step back from the details and focus only on what matters for solving the problem. Remove irrelevant information. A public transit map is abstraction: it shows stops and direction, not street widths or building heights. A book report abstracts a novel into its central thesis.

**Algorithmic Thinking** — create an ordered, step-by-step plan to solve the problem. Algorithms can be written in plain language, as flowcharts, or as pseudocode. Recipes, furniture assembly instructions, and parliamentary procedures are all algorithms.

The relationship between them in practice: decompose first, recognize patterns in the pieces, abstract away noise from each piece, then write the algorithm that combines the solutions.

---

## Extended Practices (LTS Framework)

The Let's Talk Science framework extends the four-element core with five additional practices that matter in technical and computational work:

| Practice | Icon | Core Idea |
|---|---|---|
| **Data Collection & Analysis** | ![[data-collection-analysis.png]] | Gather data systematically; find patterns, trends, and discrepancies |
| **Data Representation** | ![[data-representation.png]] | Convert raw data into human-readable formats: tables, charts, graphs |
| **Debugging** | ![[debugging.png]] | Find and fix errors (syntax errors, logic errors) through systematic testing |
| **Logical Thinking** | ![[logical-thinking.png]] | Reason from premises to conclusions; the engine behind abstraction, algorithms, and pattern recognition |
| **Testing & Evaluating** | ![[testing-evaluating.png]] | Try something, observe what happens, judge against criteria, iterate |

Debugging deserves special attention: it is CT applied recursively to the solution itself. A bug is a gap between what you told the computer to do and what you intended. Finding it requires decomposing the program into testable units, looking for pattern breaks, and applying logical thinking to eliminate candidates.

---

## Computational Concepts (Programming Layer)

When CT extends into programming, nine concepts become essential. These are not CT practices — they are the vocabulary of the medium:

| Concept | Icon | Core Idea |
|---|---|---|
| **Conditionals** | ![[conditionals.png]] | If/then/else: branch the flow based on a condition |
| **Data** | ![[data.png]] | Values computers store: character, string, integer, float, Boolean |
| **Events** | ![[events.png]] | One action triggers another (click, tap, keypress) |
| **Functions** | ![[functions.png]] | Group reusable steps under one name |
| **Inputs & Outputs** | ![[inputs-outputs.png]] | Communication between humans, computers, and environment |
| **Operators** | ![[operators.png]] | Math and logic commands (+, -, *, /, <, >, ==, &&, OR, NOT) |
| **Repetition (Loops)** | ![[repetition-loops.png]] | Repeat steps automatically; enables automation |
| **Sequences** | ![[sequences.png]] | Steps always follow an order; may include conditionals and loops |
| **Variables** | ![[variables.png]] | Named containers for data; abstract because the name represents a value |

---

## CT Approaches: How Learners Engage

The LTS framework adds an engagement layer — the posture learners take toward code:

| Approach | Icon | Core Idea |
|---|---|---|
| **Making** | ![[making.png]] | Write code from scratch — the CREATE phase |
| **Reusing & Remixing** | ![[reusing-remixing.png]] | Adapt others' code to new purposes — the MODIFY phase |
| **Tinkering** | ![[tinkering.png]] | Explore existing code through trial and playful change — the USE phase |
| **Unplugged** | ![[unplugged.png]] | Practice CT skills without any computer: mazes, logic games, paper programming |

These map to the **Use-Modify-Create (UMC) progression** (Lee et al. 2011): learners develop confidence by first using code, then modifying it, and finally creating original work. Skipping to "making" before "tinkering" produces learners who can follow tutorials but cannot debug or adapt.

---

## CT Across Subjects

CT is not a computer science topic. The Bowers Institute cross-subject matrix shows where each element appears naturally:

| | Decomposition | Pattern Recognition | Abstraction | Algorithms |
|---|---|---|---|---|
| **Math** | Factoring large numbers into smaller parts; Tangrams | Sequencing, symmetry, two-variable strategies | Solving word problems by filtering relevant data | PEMDAS, FOIL — order-of-operations algorithms |
| **Science** | Breaking large experimental questions into tractable sub-experiments | Sorting/classification in biology and astronomy; neurons doing pattern recognition | Scientific laws as succinct abstraction of broad experiment sets | Lab procedure = a set of instructions |
| **ELA** | Breaking an essay into argument, intro, conclusion | Phonics: letter patterns → pronunciation | Book report = abstract the thesis, omit the plot details | Poetic forms as algorithms: meter, rhyme, line order |
| **Social Studies** | Causal inference — break historical events into societal and cultural factors | Empire trajectories follow similar patterns across history | Thematic analysis over minute historical detail | Legislative process = conditional algorithm with veto override |

The insight: students already do CT constantly. Naming it as CT and calling it out in existing activities is often more powerful than introducing it as a separate subject.

---

## Facilitative Questions

When guiding CT work, these questions activate each element:

**Decomposition:** What are the different parts of this problem? How could it be divided into smaller parts?

**Pattern Recognition:** Are there any patterns? Does this resemble a problem you've already solved? Does anything repeat?

**Abstraction:** What are you trying to solve? Which details actually matter? What can be left out?

**Algorithms:** What is the first step? What order should the steps follow?

---

## Connections to the Wiki

CT is closely related to several existing frameworks:

- [[concepts/problem-framing]] — CT's decomposition move is one of the techniques problem-framing uses; they operate at different altitudes. Problem-framing asks "are we solving the right problem?" CT asks "how do we solve the chosen problem systematically."
- [[concepts/design-thinking]] — Design thinking and CT are parallel problem-solving frameworks with different origins. Design thinking centers empathy and prototyping; CT centers logical structure and algorithm design. In practice they are complementary: design thinking diagnoses the problem space, CT builds the solution.
- [[concepts/5-whys]] — 5 Whys is decomposition applied recursively to root-cause analysis: each "why" breaks a symptom into a sub-cause.
- [[concepts/inductive-reasoning]] and [[concepts/deductive-reasoning]] — CT's "logical thinking" practice encompasses both. Deductive logic applies general rules to specific cases (building an algorithm from known facts). Inductive logic derives general patterns from observations (pattern recognition).
- [[concepts/agentic-coding-workflows]] — CT is the underlying mental model for directing AI coding agents. Decomposing tasks, writing clear algorithmic instructions, and debugging agent output are all CT practices applied to the AI collaboration context.
- [[synthesis/apple-developer-academy-prep-learning-and-thinking]] — CT is a core reasoning skill in the ADA prep synthesis.
- [[synthesis/apple-developer-academy-prep-digital-literacy]] — CT sits inside the Digital Literacy cluster; the DL/CS/CT Venn diagram is the structural map.

## Sources

- [[sources/computational-thinking-introduction]]
- [[sources/computational-thinking-tech-tip]]
