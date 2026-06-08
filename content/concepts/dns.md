---
title: "DNS"
type: concept
tags: [web, networking, internet, infrastructure]
created: 2026-06-08
updated: 2026-06-08
sources: 2
---

# DNS

DNS, short for Domain Name System, is the web's naming layer. It translates human-readable domain names into machine-usable IP addresses so browsers know which server to contact.

Without DNS, using the web would mean remembering numeric addresses instead of names like `mozilla.org`. That sounds like a convenience feature, but it is more than convenience. DNS is what lets the visible web stay legible while still resting on machine-level addressing underneath.

It also occupies a real step in the browsing sequence. Before a [[concepts/web-browser|browser]] can send an [[concepts/http|HTTP]] request to a [[concepts/web-server|server]], it usually needs DNS resolution first. That makes DNS one of the easiest places to misunderstand web failure: a site can "be down" to the user even when the content exists, simply because name resolution failed.

## Sources

- [[sources/how-the-web-works-mdn]]
- [[sources/the-world-wide-web-crash-course-computer-science-30]]
