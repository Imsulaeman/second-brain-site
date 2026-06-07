---
title: "Introduction to Algorithms and Machine Learning"
type: source
tags: [algorithms, machine-learning, programming, education, justin-skycak]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Introduction to Algorithms and Machine Learning

[[entities/justin-skycak|Justin Skycak]]'s *Introduction to Algorithms and Machine Learning: from Sorting to Strategic Agents* is a 424-page exercise-driven curriculum built out of Math Academy's Eurisko sequence. It is not written like a survey text that explains ideas from a safe distance. It is written like a training ground. The student is expected to code everything from scratch, test aggressively, debug alone before asking for help, and climb from elementary programming exercises to game-playing agents without outsourcing the machinery to libraries. The book's claim is not merely that algorithms and machine learning are learnable. It is that they become learnable fastest when the abstractions are earned by implementation.

The opening chapters make that standard explicit. Part I starts with short coding drills, number-base conversion, recursive sequences, Monte Carlo coin-flip simulation, roulette-wheel selection, and Cartesian products. These are not glamorous topics, but the point is foundational fluency: loops, conditionals, arrays, recursion, testing, and the habit of turning a verbal procedure into code. The debugging advice in the first chapter is part of the book's real spine. Print everything. Find the first discrepancy. Use Google. Do not ask for help before making a serious effort to isolate the bug. Technical self-sufficiency is treated as something trainable.

Part II turns that baseline into algorithmic thinking. The student moves through brute-force search, [[concepts/backtracking|backtracking]] via magic squares, bisection and Newton-Raphson root finding, [[concepts/gradient-descent|single-variable and multivariable gradient descent]], and then the classic sorting families from selection sort through merge sort and quicksort. The sequence matters. Search, optimization, and sorting are introduced not as separate textbook units but as related ways of navigating possibility spaces more intelligently.

Part III is where the book broadens from procedures to reusable structures. Matrix arithmetic and reduced row echelon form become code, not just notation. Then come simulation-heavy chapters like Euler estimation, the SIR disease model, and Hodgkin-Huxley neurons; practical data structures like hash tables; and the simplex method for constrained optimization. This middle section shows that "algorithms and machine learning" is the wrong narrow label for the book. It is really a broader computational-mathematical apprenticeship.

Part IV is the main machine-learning block, and it is notably concrete. Regression is built first through the pseudoinverse: linear, polynomial, multiple linear, power, exponential, and logistic forms. Then the book slows down and teaches [[concepts/bias-variance-tradeoff|overfitting, underfitting, cross-validation, and the bias-variance tradeoff]] before moving into regression via gradient descent, multiple regression with interaction terms, [[concepts/k-nearest-neighbors|k-nearest neighbors]], and [[concepts/naive-bayes|Naive Bayes]]. The important thing is not just the model list. It is the framing: machine learning is a pile of understandable pieces, each with assumptions, failure modes, and implementation details. The book keeps forcing the student to verify models with plots, residual thinking, and cross-validation instead of equating "fit" with "looks plausible."

Part V pushes into graphs and modern model structure. [[concepts/graph-traversal|Breadth-first and depth-first traversal]], [[concepts/shortest-paths|shortest paths]] in unweighted and weighted graphs, [[concepts/decision-trees|decision trees]], neural-network regressors, and [[concepts/backpropagation|backpropagation]] form a clean escalation from explicit symbolic procedures toward layered learned models. Decision trees receive a surprisingly long treatment, which fits the book's general style: it likes transparent models whose structure can be inspected before it moves on to less transparent ones like neural nets.

Part VI is what gives the book its real personality. Instead of ending with neural nets as a generic ML finale, it turns toward games. The student builds canonical and reduced tic-tac-toe game trees, learns [[concepts/minimax-strategy|minimax]], handles search-depth limits and heuristic evaluation in Connect Four, and then arrives at Blondie24 and [[concepts/neuroevolution|neuroevolution]]. The final movement is important because it shows two different routes to strategic intelligence: explicit search with hand-built evaluation logic, and learned evaluators evolved through competition. That makes the subtitle feel earned. The book truly goes from sorting to strategic agents.

Across the whole book, the recurring pedagogical message is that implementation depth dissolves mystique. Matrices are less magical once you code them. Regression is less magical once you derive and fit it yourself. Neural networks are less magical once you compute forward passes and backpropagation by hand. Even strategic agents become less magical once you build the game tree, label the outcomes, and then watch learned evaluation functions take over where exhaustive search becomes too expensive.

Worth coming back to: the book's deepest contribution is not any single algorithm. It is the continuity it builds between basic coding drills, mathematical modeling, machine learning, and game-playing AI. Skycak makes them feel like one long staircase rather than separate domains.

## Sources

- PDF in `raw/introduction-to-algorithms-and-machine-learning.pdf`
