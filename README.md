---
permalink: /
tags: [11ty, buildawesome, micro, starter]
---

# All-in-_One_ Examples

<p>
  <img src="https://img.shields.io/github/v/release/buildawesome-one/examples?label=&color=darkslategray&style=for-the-badge">
  <a href="https://pico-blades.buildawesome.one/"><img src="https://img.shields.io/badge/Demo_➜-blue?style=for-the-badge" hidden></a><!-- GitHub only -->
  <object data="https://img.shields.io/github/stars/buildawesome-one/examples?label=GitHub&labelColor=silver&color=gainsboro&style=for-the-badge"></object><!-- won't render on GitHub -->
</p>

<!-- to copy-paste w/o formatting use any plain text input field, i.e. browser address bar -->

Example starters showcasing [Build Awesome _One_](//buildawesome.one/) kit for:

<figure><!-- <img src> breaks shields w/ emojis on GitHub, but ![]() works -->

| [1] Multisite Starter                                                                                  |                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| [2] [*Bl*ades / Pico CSS](//pico-blades.buildawesome.one/) <!--{data-b=├── data-a="(default site)"}--> | ![](https://img.shields.io/netlify/41df6bc0-3b91-48f7-903a-3511ca3652a8?logo=&label=🥷)                                           |
| [3] [Bootstrap](//bootstrap.buildawesome.one/) <!--{data-b=├──}-->                                     | ![](https://img.shields.io/netlify/e58db8aa-94b7-4637-80cc-50e03cff45b0?logo=bootstrap&logoColor=lavender&label=&labelColor=gray) |
| [4] [Web Awesome](//webawesome.buildawesome.one/) <!--{data-b=├──}-->                                  | ![](https://img.shields.io/netlify/40dc0253-7a90-4970-ba8d-80a1ec52093c?logo=webawesome&label=&labelColor=gray)                   |
| [5] Sveltia CMS <!--{data-b=├──}-->                                                                    |                                                                                                                                   |
| [6] Liquid Templates <!--{data-b=└──}-->                                                               |
| [7] [Tailwind Starter](//tailwind.buildawesome.one/)                                                   | ![](https://img.shields.io/netlify/a980220a-630d-4022-9496-fb83b5db7c6b?logo=tailwindcss&label=&labelColor=gray)                  |
| [8] [OG Images Starter](//og-images.buildawesome.one/) <!--{data-a="(Shotpipe)"}-->                    | ![](https://img.shields.io/netlify/c4a8f0e9-2d85-4bd4-9607-a9043ab8a0a4?label=🖼️)                                                 |

<!--{.striped .borderless}-->

</figure>
<style>
  table td { vertical-align: middle }
  /* Render text as unselectable icon */
  [data-b]::before, [data-a]::after { font-family: monospace; opacity: 50% }
  [data-b]::before { content: attr(data-b) " " }
  [data-a]::after { content: " " attr(data-a) }
</style>

---

## Local development

As simple as:

```sh
cd multisite/
npm install    # dependencies
npm start      # development
npm run stage  # serve production version locally
               # ready to deploy! 🚀
```

For specific site:

```sh
SITE=bootstrap npm start
```

---

## Notes

### Multisite Starter for Web Awesome

This is a test button:

<wa-button variant="brand">Click Web Awesome Button!</wa-button>

### OG Images Starter (Shotpipe)

<big>Dynamic **Open Graph images** for your Eleventy starter, via [Shotpipe](//shotpipe.io) — the `og:image` most 11ty starters skip.</big>

Share any page of this site on X, Slack, or Discord and it renders a real social card instead of a bare link. The card's URL is signed locally **at build time** (one HMAC, no network call, no Chromium in CI), and the image renders lazily the first time a crawler fetches it — so your build stays exactly as fast as it was.

###### Enable it:

```sh
cd og-images/
npm i
npx shotpipe-init  # free key, no signup — writes it to .env
npm start
```

With no key set, the site still builds — the card is simply omitted until you run `npx shotpipe-init`. Nothing breaks, which is what makes it safe to ship in a starter.

###### How it works:

- **at build time** — the plugin signs the template parameters into a URL. No network, no headless browser.
- **in your `<head>`** — the URL waits in `<meta property="og:image">`, doing nothing.
- **on first share** — when a crawler fetches it, Shotpipe renders the template and caches the PNG forever.

###### Links:

- https://github.com/podop29/eleventy-plugin-shotpipe
- https://shotpipe.io

---

## <sup style>Featured by</sup>

- https://www.11ty.dev/docs/starter/
- https://sveltiacms.app/en/docs/frameworks/eleventy
- https://build.blades.ninja/starters/
- https://11tybundle.dev/starters/
- [awesome-buildawesome](https://github.com/anyblades/awesome-buildawesome)

<!--{.columns}-->
