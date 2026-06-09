---
title: "How does artificial intelligence learn - Briana Brownell"
type: source
tags: [ai, machine-learning, education]
created: 2026-06-08
updated: 2026-06-09
sources: 1
file: "raw/How does artificial intelligence learn - Briana Brownell (ingested).md"
---

# How does artificial intelligence learn - Briana Brownell

This TED-Ed explainer teaches the three basic learning modes that sit under much of modern machine learning: [[concepts/unsupervised-learning|unsupervised learning]], [[concepts/supervised-learning|supervised learning]], and [[concepts/reinforcement-learning|reinforcement learning]]. It uses one continuous medical example to make the differences legible instead of treating the terms as abstract vocabulary.

## Three Learning Shapes

The source begins with pattern-finding. In its medical-data example, unsupervised learning scans thousands of patient profiles without labeled answers and looks for clusters, similarities, or emerging regularities. That makes it the exploratory mode: useful when researchers do not yet know what categories matter.

It then shifts to supervised learning, where the task is narrower and more explicit. Doctors and engineers feed the system labeled cases from healthy and sick patients, let it learn which features matter diagnostically, and then compare the system's predictions against real diagnoses. The important distinction is not just that labels exist. It is that humans stay in the loop by judging errors and adjusting the system against known outcomes.

Reinforcement learning enters when the problem becomes sequential. The source imagines treatment plans that unfold over time, where one decision changes the next state of the problem. Here the system improves by getting feedback about which medication or dosage choices lead to better patient outcomes and then revising its strategy as more results come in.

## Systems Can Combine These Modes

One of the source's better points is that these learning modes are not rival ideologies. They can be combined inside one larger system. Unsupervised learning can discover useful patient groupings, supervised learning can turn those patterns into sharper predictions, and reinforcement learning can simulate or refine treatment choices over time.

The closing move extends that idea to [[concepts/artificial-neural-networks|artificial neural networks]]. These systems mimic the relationship between neurons in the brain, using millions of weighted connections to handle tasks such as image recognition, speech recognition, and language translation. As models become more self-directed and layered, however, their decision paths become harder for their own creators to inspect.

## Power Without Full Transparency

That opacity is the source's second big lesson. Machine learning can become effective without becoming transparent. Researchers may know the training setup, the objective, and the performance result while still struggling to explain exactly why a complex model reached one answer instead of another.

Worth coming back to: this source is a clean orientation page for the three learning modes, but it also quietly sets up a later ethical problem. Once a system can learn strategies that humans did not hand-code directly, accuracy alone is no longer enough. Questions of interpretability, oversight, and responsible use become part of the topic.

## Sources

- `raw/How does artificial intelligence learn - Briana Brownell (ingested).md`
