---
title: "Shortest Paths"
type: concept
tags: [algorithms, graphs, optimization, navigation]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Shortest Paths

The shortest-path problem asks for the least costly route from one node in a graph to another.

In an unweighted graph, "shortest" usually means fewest edges crossed. In a weighted graph, it means minimum total weight, where the weight might represent distance, time, cost, or some other penalty.

## Why it matters

Shortest paths are one of the cleanest examples of turning a messy network into a quantitative decision problem. Once the graph exists, the question becomes: what is the cheapest way through it?

In [[sources/introduction-to-algorithms-and-machine-learning]], this idea first appears through shortest paths in unweighted graphs and then deepens through Dijkstra's algorithm for weighted graphs. That sequencing matters. It shows how a simple intuition about closeness grows into a more general optimization problem.

## Two main cases

### Unweighted graphs

If every edge counts equally, shortest paths are closely tied to [[concepts/graph-traversal|breadth-first traversal]]. The first time you reach a node by breadth-first expansion, you have found it through the smallest possible number of steps.

### Weighted graphs

If different edges have different costs, fewer steps may not mean cheaper travel. Then you need an algorithm like Dijkstra's, which keeps expanding the currently cheapest known frontier.

## Why this concept travels well

Shortest paths are not just about maps. They show up in routing, logistics, communication networks, dependency structure, and decision systems where movement has cost. The deeper idea is that a network can be searched under a metric.

## Limits

The whole framing depends on the cost definition being meaningful. If the chosen weights misrepresent what actually matters, the "shortest" path can still be the wrong one in reality.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
