---
title: "Two-Factor Authentication"
type: concept
tags: [security, authentication, accounts, digital-security]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# Two-Factor Authentication

Two-factor authentication adds a second proof of identity on top of a password, usually something you have or temporarily generate rather than something you know. The point is to make a stolen password insufficient on its own.

## Why It Works

Passwords fail in predictable ways: reuse, phishing, breaches, shoulder-surfing, malware, and weak recovery flows. 2FA reduces the damage by requiring another barrier after the password is entered.

This is not perfect security. It is layered security. A password can be leaked without immediately becoming full account access.

## Not All Second Factors Are Equal

The strongest practical lesson from the EFF guide is prioritization. Authenticator apps and hardware keys are usually better than SMS codes because text messages are easier to intercept, redirect, or socially engineer.

That makes 2FA a good example of [[concepts/threat-modeling|threat modeling]] in practice. The question is not "does this service offer 2FA?" but "what kind of second factor is it, and what attack am I actually trying to resist?"

## Recovery Is Part Of The System

Backup codes and recovery options matter because a perfect login barrier is useless if losing your phone means losing the account forever. But backup mechanisms also create new secrets that must be stored safely. Security improves when the whole recovery flow is designed deliberately rather than added as an afterthought.

## Sources

- [[sources/surveillance-self-defense-security-basics]]
