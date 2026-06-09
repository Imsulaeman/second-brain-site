---
title: "End-to-End Encryption"
type: concept
tags: [security, encryption, communication, privacy]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# End-to-End Encryption

End-to-end encryption means the content of a communication is readable only by the communicating endpoints, not by the service carrying the message in between. Its core promise is narrower visibility: the provider can relay the message without being able to read the plaintext.

## Why It Matters

This is stronger than ordinary transport protection because it removes one major observer from the trust chain. With transport encryption, the service still sees the message after it arrives. With end-to-end encryption, the service ideally sees only encrypted payloads.

That makes it important for messaging, sensitive collaboration, and any case where the service provider itself is part of the threat model.

## The Main Limit

End-to-end encryption does not hide everything. It protects content, not necessarily [[concepts/communication-metadata|communication metadata]]. Providers may still know who contacted whom, when, and from where. Devices themselves can also remain weak points if they are compromised before or after the message is decrypted.

So the mature understanding is not "encrypted means hidden." It is "this layer protects message content from some observers, while other exposures still remain."

## Sources

- [[sources/surveillance-self-defense-security-basics]]
