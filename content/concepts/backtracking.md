---
title: "Backtracking"
type: concept
tags: [algorithms, search, problem-solving, constraint-satisfaction]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Backtracking

Backtracking is a search method that builds a candidate solution step by step and abandons a partial path as soon as it becomes clear that the path cannot possibly lead to a valid answer.

The key idea is not "search everything." It is "search, but stop early when a branch is already hopeless." That makes backtracking a disciplined improvement over brute force. It still explores possibilities, but it prunes the tree instead of walking every branch to the end.

## How it works

Backtracking problems usually have the same shape:

1. Start with an empty or partial state.
2. Add one more choice.
3. Check whether the partial state is still viable.
4. If yes, continue deeper.
5. If no, undo that choice and try another branch.

The method shines when partial failure can be detected early. In [[sources/introduction-to-algorithms-and-machine-learning]], Skycak teaches it through magic squares. The important move is not cleverness at the end. It is the ability to recognize, midway through construction, that a partial square is already impossible.

## Why it matters

Backtracking is one of the clearest examples of intelligent search. It teaches that many hard problems are not solved by raw computational strength alone, but by finding ways to rule out impossible futures before paying the full cost of reaching them.

That makes it conceptually close to [[concepts/problem-framing|problem framing]] and [[concepts/5-whys]]. In all three cases, the quality of progress depends on knowing what information lets you stop wasting effort.

## Example shape

Sudoku, n-queens, logic puzzles, scheduling under constraints, and combinatorial design problems often have this form. The solution space grows explosively, so the only workable strategy is to detect dead branches early.

## Limits

Backtracking is not magic. If the pruning test is weak, the search can still explode combinatorially. Its power comes from the quality of the "is this hopeless yet?" check.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
