---
title: "How I select alignment research projects — Ethan Perez with Mikita Balesni and Henry Sleight"
type: source
tags: [alignment, research, project-selection, strategy, bottom-up, ethan-perez]
created: 2026-06-29
updated: 2026-06-29
sources: 1
---

# How I select alignment research projects — Ethan Perez with Mikita Balesni and Henry Sleight

Interview transcript (YouTube). Ethan Perez (Anthropic), Mikita Balesni (Apollo), and Henry Sleight discuss how to pick what to work on in alignment research. Highlighted in the generalist reading list for its generalizable guidance on being an excellent IC — particularly the case for bottom-up research and fast empirical feedback.

## Top-down vs bottom-up

**Top-down**: identify a problem → find approach. Required when specific safety problems need solving in a particular sequence (adversarial robustness now before scaling continues).

**Bottom-up**: notice something interesting or tractable → follow the nose → figure out what problem it solves later (or in parallel). Most productive when the field has lots of unexplored territory.

Most projects are a mix. Key trigger for opportunism: **each new model generation or capability** = tons of low-hanging fruit that experienced researchers haven't touched yet.

## Empirical prototyping

Don't spend a month reading before trying. Quick experiments (hours to one day) generate more confident knowledge than theory in most cases. If you can run a colab notebook in an afternoon, just do it.

After prototyping: write a 2-page doc (problem, motivation, potential solution, planned experiments) and share with people whose judgment you respect. Their reactions determine whether to continue.

## Reading prior work

Topic-dependent. For mature empirical subfields (robustness, backdoors), prior work is directly relevant — spend a day surveying it. For newer directions, your own experiments are more useful. Be critical: "is this actually solving the same kind of problem I'm working on?"

## Red flags for projects

- Experiment loop > 1 day (can't get overnight feedback; fix by finding simpler proxy experiments)
- Fixed cost > 1 month for first experiment (sometimes still worth it, but default red flag)
- "Even if fully successful, it wouldn't be that important" — the most valuable feedback category; often surfaces from reviewers who think rigorously about impact

## Switching projects

Know your alternatives. In the middle of a project, the temptation is to think "this is net useful" — which is true, but misses the counterfactual. Having other promising directions in mind makes switching emotionally easier (you're moving toward something better, not fleeing failure).

Example: Perez was running evals via human crowd-workers (slow, 1-week turnaround). While on another project, he realized LLMs could write the evals. Prototyped it over a weekend. Had hundreds of working evals by Monday. The choice to switch wasn't hard once the alternative was tangible.

## Project splitting and juniors

Junior researchers: don't split projects. Each project has a fixed cost that's larger for new researchers. Below ~30 hours/week, net contribution is near zero; above ~40-60 hours/week, contributions compound (all context is cached, experiments build on each other, you can respond quickly to feedback). 

Maintaining visibility into alternatives doesn't require running experiments — talking with people is enough to keep options live.

## Duplication with others

Quick 30-min sync: understand their angle; critically assess if it's actually the same problem (usually it's not, or there's a different angle). If truly the same: team up or switch areas.

## Final takeaway

> "The bottom-up research approach is probably underrated in a lot of alignment research. Lots of junior researchers spend a month reading and feel demotivated by critiques of every direction. The opposite attitude — 'this seems plausible, I can run this in an hour' — and then adjusting from reality feedback, would be more productive on the margin." — Ethan Perez

Related: [[concepts/bottom-up-research]] [[sources/tips-for-empirical-alignment-research-ethan-perez]] [[sources/a-reading-list-for-generalists-dylan-bowman]]
