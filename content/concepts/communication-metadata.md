---
title: "Communication Metadata"
type: concept
tags: [privacy, surveillance, metadata, security]
created: 2026-06-08
updated: 2026-06-09
sources: 1
---

# Communication Metadata

Communication metadata is the information about a communication other than its content: who contacted whom, when, for how long, from where, using what service, and often under what routing or subject context. It sounds secondary because it is not the message itself. In practice it is often enough to reconstruct the social meaning of the message.

## Why Metadata Matters

People often picture privacy as a lock around content. That picture is incomplete. A phone company, email provider, platform, or network observer may not see the message body but can still learn who you speak with, how frequently, at what hours, from which devices, and across which locations. That can expose routines, political associations, medical concerns, intimate relationships, and organizational structure.

Metadata is powerful because it is relational. One data point may look harmless. A pattern of calls after midnight, travel-linked logins, repeated contact with a journalist, or a burst of messages before a public protest can say far more than a single decrypted sentence.

The strongest examples in the EFF guide are deliberately concrete: hotline calls, medical contact chains, activist messages, and clinic communication. The point is that metadata often reveals the shape of a life even when content remains sealed.

## Content Privacy Is Not Enough

This is why [[concepts/privacy]] and [[concepts/threat-modeling]] cannot stop at "use encryption." End-to-end encryption can protect message contents while still leaving a large metadata trail. Good security practice asks what adversary is being blocked, what information still leaks, and whether the remaining leakage is acceptable for the situation.

## Practical Use

The right question is not "is my message encrypted?" but "what can someone still learn without reading it?" That shift turns metadata from a technical footnote into a central part of digital-security reasoning.

## Sources

- [[sources/surveillance-self-defense-security-basics]]
