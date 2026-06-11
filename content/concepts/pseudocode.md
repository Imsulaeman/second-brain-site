---
title: "Pseudocode"
type: concept
tags: [programming, algorithms, computational-thinking, design]
created: 2026-06-11
updated: 2026-06-11
sources: 1
---

# Pseudocode

Pseudocode is an informal, human-readable description of an algorithm that uses structured language conventions without being tied to any specific programming language syntax. It bridges the gap between a plain English description and actual code — precise enough to reason about logic, loose enough to write quickly.

## Conventions

The BBC Bitesize / standard teaching conventions:
- **Keywords** are written in UPPERCASE: `IF`, `ELSE`, `WHILE`, `FOR`, `INPUT`, `OUTPUT`, `BEGIN`, `END`
- **Variables** use lowercase or camelCase: `name`, `userAge`
- **Messages** use sentence case: `"Enter your name"`
- **Indentation** marks nested blocks (loops, conditionals)

Example — name/age check:
```
BEGIN
  INPUT name
  INPUT age
  IF age >= 18 THEN
    OUTPUT name + " is an adult"
  ELSE
    OUTPUT name + " is not an adult"
  END IF
END
```

## Why Pseudocode

Pseudocode separates the logic design problem from the syntax problem. Writing in a specific programming language forces attention on syntax details before the algorithm is validated. Pseudocode lets you reason about the logic, test it mentally, share it with people who use different languages, and catch logical errors before committing to code.

This is the design-before-implementation principle: the same thinking that motivates [[concepts/evaluation]] (dry-run the algorithm on paper before coding it).

## Pseudocode vs Flowcharts

Both represent the same algorithm differently. Pseudocode is text-based and faster to write; flowcharts are visual and better for following branching paths. The choice depends on the audience and the complexity of branching logic. Simple linear algorithms suit pseudocode; heavily branched decision trees often read more clearly as flowcharts.

## Sources

- [[sources/what-is-an-algorithm-bbc-bitesize]]
- [[concepts/algorithm]]
- [[concepts/computational-thinking]]
