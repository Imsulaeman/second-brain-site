---
title: "DNS"
type: concept
tags: [web, networking, internet, infrastructure]
created: 2026-06-08
updated: 2026-06-09
sources: 2
---

# DNS

DNS, short for Domain Name System, is the web's naming layer. It translates human-readable domain names into machine-usable IP addresses so browsers know which server to contact.

Without DNS, using the web would mean remembering numeric addresses instead of names like `mozilla.org`. That sounds like a convenience feature, but it is more than convenience. DNS is what lets the visible web stay legible while still resting on machine-level addressing underneath.

It also occupies a real step in the browsing sequence. Before a [[concepts/web-browser|browser]] can send an [[concepts/http|HTTP]] request to a [[concepts/web-server|server]], it usually needs DNS resolution first. That makes DNS one of the easiest places to misunderstand web failure: a site can "be down" to the user even when the content exists, simply because name resolution failed.

The beginner-friendly way to picture this is as an address book. You type a domain like `mozilla.org`; DNS helps the browser find the numeric address behind it. Large sites may resolve differently depending on where the user is, which is why the same domain can map to different servers for efficiency or geographic distribution. DNS therefore sits between the readable web and the machine-addressed internet.

DNS is also one reason the address bar is more informative than it looks. A domain name is not just branding. It is the human-facing handle that lets the browser begin the lookup process that eventually leads to a request being sent.

## Sources

- [[sources/how-the-web-works-mdn]]
- [[sources/the-world-wide-web-crash-course-computer-science-30]]
