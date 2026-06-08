---
title: "Surveillance Self-Defense Security Basics"
type: source
tags: [security, privacy, surveillance, digital-security, weak]
created: 2026-06-08
updated: 2026-06-08
sources: 1
file: "raw/Surveillance Self-Defense Security Basics (ingested).md"
---

# Surveillance Self-Defense Security Basics

This EFF material approaches digital security as an ongoing practice rather than a one-time tool decision. Its center of gravity is [[concepts/threat-modeling|threat modeling]]: decide what you are protecting, from whom, and at what cost before choosing tactics or software.

## Security As Process

The source is very good at resisting gadget thinking. Password managers, encryption, two-factor authentication, secure devices, Tor, and privacy tools all matter, but none of them mean much without a clear picture of the threat, the stakes, and the weak link in the larger system.

## Practical Security Habits

The document is broad, but several patterns stand out: use unique passwords, prefer passphrases for high-value secrets, enable stronger forms of multi-factor authentication, encrypt full devices, separate highly sensitive work onto more secure hardware when needed, and think carefully about tool creators, update habits, metadata exposure, and legal context.

The visuals make the encryption section much clearer than a text-only summary would. The page includes paired lock-screen images for phone and laptop to distinguish ordinary device locking from true full-disk encryption, then walks through a sequence of transit diagrams: unencrypted transport, transport-layer encryption, HTTPS, end-to-end encryption, and the final "defense in depth" view that combines at-rest and in-transit protection. Those diagrams are doing explanatory work, not just decoration. They show exactly who can read a message at each stage and where servers remain able to see plaintext.

## Metadata And Exposure

One of the source's most useful reminders is that privacy is not only about content. [[concepts/communication-metadata|Communication metadata]] can reveal relationships, routines, health concerns, political activity, and location patterns even when the message body stays unread.

The metadata image matters here too. It visually drives home the point that locks on message content do not hide who contacted whom, when, or through what route. That visual distinction between encrypted content and exposed metadata is one of the source's central lessons.

Worth coming back to: this source treats security as a planning discipline. The right question is rarely "what is the most secure tool?" but "what risks am I actually trying to reduce?"

## Sources

- `raw/Surveillance Self-Defense Security Basics (ingested).md`
