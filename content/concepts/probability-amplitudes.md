---
title: "Probability Amplitudes"
type: concept
tags: [physics, quantum-mechanics, mathematics, Born-rule]
created: 2026-06-25
updated: 2026-06-25
sources: 1
---

# Probability Amplitudes

In quantum mechanics, the probability that a particle arrives at a given location is not computed directly. Instead, you compute a *probability amplitude* — a complex number (a number with both a real and imaginary component) — and the probability is the square of the amplitude's absolute value. This is the Born rule.

$$P = |\phi|^2$$

The reason for this indirect route is interference. Complex numbers can add in ways that real positive numbers cannot: two amplitudes can partially cancel, just as two waves can cancel. If you tried to add probabilities directly, you could only get constructive combinations — probabilities can only increase when you add paths. But quantum mechanics requires paths to cancel, producing zero probability at certain points. Only complex amplitudes allow this.

## What Changes With Multiple Paths

When a quantum particle has two possible paths from source to detector (for example, through slit 1 or slit 2 in the double-slit experiment), the combined amplitude is φ₁ + φ₂. The probability is:

$$P_{12} = |\phi_1 + \phi_2|^2 = |\phi_1|^2 + |\phi_2|^2 + 2|\phi_1||\phi_2|\cos\delta$$

where δ is the phase difference between the two amplitudes. The last term — the interference term — can be positive (constructive interference, more probable than either path alone) or negative (destructive interference, less probable, down to zero). This is the wave behavior: crests and troughs in the probability distribution.

Classical probabilities, by contrast, add simply: P = P₁ + P₂. There is no interference term. The difference between quantum and classical behavior is precisely this term.

## Amplitudes Must Be Complex

Feynman emphasizes that the amplitudes must be *complex numbers*, not just real numbers. Using real amplitudes produces the right pattern shape but fails to capture the relative phases of paths that differ in length or pass through different fields. The complex phase carries information about *how much* each path has "wound up" relative to the others — and that winding-up is what produces the observed interference patterns quantitatively.

This is not a mathematical convenience. The imaginary parts of the amplitudes are physically real in the sense that they have observable consequences: remove them and the predictions are wrong.

## Feynman's Path Integral

Feynman later developed an approach (the path integral formulation) in which a particle in quantum mechanics is assigned an amplitude for every conceivable path from start to finish. These amplitudes are all added up, and the resulting total amplitude determines the probability. The classical path — the one an ordinary particle would take — is the one where nearby paths reinforce each other (their phases are aligned). Quantum mechanics is classical mechanics plus all the paths nobody thought to include, with interference determining which regions of space are likely and which cancel out.

## Connections

- [[concepts/double-slit-experiment]] — the experiment where P₁₂ ≠ P₁ + P₂ is directly observed
- [[concepts/wave-particle-duality]] — amplitudes explain why particles show wave-like interference
- [[concepts/observation-destroys-interference]] — observing destroys the coherence between amplitudes, eliminating the cross-term
- [[concepts/quantum-probabilism]] — even with amplitudes we can only compute probabilities, not predict individual outcomes

## Sources

- [[sources/six-easy-pieces-feynman]]
