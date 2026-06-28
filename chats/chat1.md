# Jetsea Logistics website redesign

_Started 2026-06-28 06:52 UTC_

---

## User

Redesign the website for Jetsea Logistics Pte Ltd http://www.jetsea.com.sg/

## Assistant

I'll take a look at the current Jetsea Logistics site first, then ask you a few questions before designing.I've got a good picture of Jetsea — a Singapore freight-forwarding & total logistics provider operating since 1994, with air freight, sea freight, local handling, IATA/FIATA accreditations, and a shipment tracker. Before I design, a few quick questions so I build the right thing.

_[tool: questions_v2]_

_[tool: web_fetch]_

## User

Questions answered:
- scope: Just the homepage (high fidelity)
- aesthetic: Clean & corporate (trustworthy, blues/neutrals)
- color: Deep navy + a bright accent
- audience: Large enterprise supply-chain managers
- emphasis: Trust & credentials (since 1994, accreditations), Get a quote / enquiry CTA
- feel: Subtle scroll/hover polish
- imagery: Use labeled placeholders for you to drop real photos
- variations: No, one strong direction
- tagline: Call Us: +65 65422500

Home
About Us
Services
Enquiries
References
tracker
Contact Us


About Us

Jetsea Logistics Pte Ltd, formerly known as EAS International Transportation (S’pore) Pte Ltd is a Singapore based total logistics solutions provider since 1994.

We’re primarily engaged in the business of International freight forwarding, However, today’s fluid and fast changing business environment, we also recognize that freight forwarding is no longer simply the transportation of goods. Customers are now on the hunt for “Freight Consultants”, a service provider who is able to assist in managing their global shipping needs by providing timely information, diversified options and cost effective solutions while maintaining the personalized touch.

Air Freight
Sea Freight
We Care
Local Handling
Cost saving solutions
On Time Logistics
Networks we work with




Accreditation we have




Location
Jetsea Logistics (S) Pte Ltd

9 Airline Road
#02-18 Cargo Agent’s Building D
Singapore 819827

Quick Links
About Us
Contact Us
Enquiries
Home
References
Services
tracker
RSS Latest World News
Serbian President Vucic says he will resign within weeks; move comes amid student protests June 27, 2026
Death toll in Venezuela quake tops 1,400 as rescue efforts intensify June 27, 2026
Hezbollah rejects US-brokered Israel-Lebanon security deal as 'surrender' June 27, 2026
Australia to double fine for flouting teen social media ban June 27, 2026
Tanker struck in Hormuz as Iran, US trade attacks in worst escalation since peace deal June 27, 2026
Copyright © 2026, Jetsea Logistics (S) Pte Ltd.

## Assistant

Building a clean, trustworthy navy-and-azure homepage focused on credentials and a strong quote CTA, with labeled photo placeholders and subtle scroll/hover polish.

_[tool: update_todos]_

_[tool: dc_write]_

The `.svc` and `.netcard` cards need inline base styles (the class is only used by JS for hover). Let me add them.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Redesigned the Jetsea homepage as a single high-fidelity Design Component — deep navy with a bright azure accent, Archivo/Public Sans/IBM Plex Mono type, and a credentials-forward, enterprise tone.

Sections: utility bar + sticky header, hero ("Freight, handled by consultants — not just carriers") with stats and a live-shipment placeholder, IATA/FIATA/SAAA/SLA accreditation strip, six services, an About block anchored on the 1994/"freight consultant" story, the four forwarding networks, a working shipment tracker, a quote CTA, and a full footer with the real Airline Road address and +65 6542 2500. Photo spots are labeled placeholders for you to drop real imagery, and scroll-reveal + card hover give it the subtle polish you asked for.

A couple of things to flag: the stats (30+ years, 4 networks) and the tracker are illustrative — happy to wire the tracker to a real carrier feed or adjust any numbers. Want me to extend this into the inner pages (Services, About, Contact) next?

## User

Found issues — fixing…

## Assistant

The observer isn't firing reliably in the scaled preview context. I'll keep the scroll reveal but add a guaranteed fallback that reveals everything shortly after mount, plus an immediate pass for anything already in view.

_[tool: dc_js_str_replace]_

_[tool: show_html]_

I'm fixing the reported bug, so I'll verify the content renders.

_[tool: show_html]_

_[tool: eval_js]_

_[tool: get_webview_logs]_

_[tool: eval_js]_

_[tool: eval_js]_

The element is the same node yet keeps reverting to opacity:0 — the JS reveal is fighting the runtime's re-renders. I'll drop the JS-driven reveal entirely and make it a pure CSS animation that plays on mount and holds its final state (never re-hidden). Let me read the current head and logic first.

_[tool: grep]_

_[tool: dc_html_str_replace]_

Now strip the JS reveal logic, keeping only the hover polish.

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

Confirmed: the runtime re-renders continuously, restarting the CSS animation each frame, so it's pinned at opacity 0. The spec warns about exactly this. I'll remove the reveal animation so content is always visible, and keep the hover polish (JS listeners on stable nodes are unaffected).

_[tool: dc_html_str_replace]_

_[tool: show_html]_

Content is now visible. Let me verify the lower sections render too.

_[tool: multi_screenshot]_

scrollIntoView is a no-op here (and discouraged). Let me scroll the window directly to confirm lower sections.

_[tool: save_screenshot]_

_[tool: eval_js]_

All sections present and rendering (6 services, 4 network cards, tracker input, footer with the Singapore address). The earlier screenshots just capture from the top; the DOM is complete. Handing to verification.

_[tool: ready_for_verification]_

Fixed — all content now renders reliably. The reveal animations were being restarted on every runtime re-render (a known constraint), pinning everything at opacity 0, so I removed the JS/CSS scroll reveal and kept content always visible. The hover polish on the service and network cards is intact.

The homepage is complete: navy + azure, credentials-forward, with the hero, services, About, network, a working tracker, quote CTA, and footer with the real Jetsea details. Want me to extend it into the inner pages (Services, About, Contact) next?

