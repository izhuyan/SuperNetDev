<p align="center">
  <img src="./icons/icon128.png" width="96" height="96" alt="SuperNetDev" />
</p>

<h1 align="center">SuperNetDev</h1>

<p align="center">
  <strong>Chrome DevTools panel: inspect requests · rewrite APIs · mock responses</strong>
</p>

<p align="center">
  Fuzzy match · delay · rewrite headers/body · side-by-side Diff · field notes · rule scenarios
</p>

<p align="center">
  <a href="./README.md"><strong>English</strong></a> ·
  <a href="./README.zh-CN.md">简体中文</a>
</p>

<p align="center">
  <a href="https://github.com/izhuyan/SuperNetDev/releases"><img src="https://img.shields.io/github/v/release/izhuyan/SuperNetDev?color=369eff&labelColor=black&logo=github&style=flat-square" alt="Release" /></a>
  <a href="#install"><img src="https://img.shields.io/badge/chrome-load%20unpacked-4285F4?labelColor=black&logo=googlechrome&logoColor=white&style=flat-square" alt="Install" /></a>
  <a href="#quick-start"><img src="https://img.shields.io/badge/guide-5%20min%20start-c4f042?labelColor=black&style=flat-square" alt="Guide" /></a>
</p>

<p align="center">
  <a href="#overview">Overview</a> ·
  <a href="#features">Features</a> ·
  <a href="#install">Install</a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="#match-rules">Match</a> ·
  <a href="#faq">FAQ</a> ·
  <a href="#updates">Updates</a>
</p>

---

## Overview

**SuperNetDev** is a Chrome DevTools panel for frontend debugging. It puts “inspect requests” and “rewrite APIs” in one place: browse Fetch / XHR like Network, and apply persistent rules to delay, rewrite headers/body, or fully mock matched requests.

It targets everyday frontend pain points:

- Backend APIs are not ready, so the page cannot run
- A field fails occasionally — temporarily rewrite the response to verify UI
- Add delay to simulate slow network / loading / timeout
- Chrome Network can show traffic, but cannot “edit and apply immediately”

Install the extension → F12 → open **SuperNetDev** → create a rule from a request. Done.

> [!TIP]
> This folder is a ready-to-load Chrome extension. Follow the steps below — no extra toolchain required.

> [!NOTE]
> Interception is implemented by injecting into page `fetch` / `XMLHttpRequest`, so it mainly covers **XHR and Fetch**. Static assets can still appear in the list, but are not rewritten by default.

Public downloads: [Releases](https://github.com/izhuyan/SuperNetDev/releases) · Source: [SuperNetDev-core](https://github.com/izhuyan/SuperNetDev-core)

---

## Features

| Feature | Description |
| :--- | :--- |
| **Network list** | Name / Status / Type / Initiator / Size / Time; filters for All, Fetch/XHR, Doc, CSS, JS, Font, Img, Media, WS, Other |
| **Match modes** | Contains / wildcard / regex / exact; matched rows show a pencil icon to edit the rule |
| **Delay** | Delay responses in ms to test loading, skeletons, and timeouts |
| **Rewrite headers/body** | Add/remove/edit request & response headers; replace request body |
| **Mock response** | Full mock — optionally skip the real network call |
| **Quick rewrite** | Edit Headers / Payload / Response in the detail pane; rules land in the Quick rewrite group |
| **Side-by-side Diff** | When rewritten, compare original vs current response with line highlights |
| **Field notes** | Notes next to JSON keys, remembered per API |
| **Rule scenarios** | Groups with color & collapse; enable/disable or switch scenes in one click |
| **Global search** | `Ctrl+F` for requests; hovering JSON uses local find first |
| **Update hint** | Red dot on **About** when a newer version is available |

---

## Install

<p align="center">
  <img src="./docs/guide-install.png" width="720" alt="Load the extension in Chrome" />
</p>

1. Make sure this folder is complete (`manifest.json`, `icons`, etc.)
2. Open Chrome and go to `chrome://extensions`
3. Turn on **Developer mode** (top right)
4. Click **Load unpacked**
5. Select **this folder** (the whole unpacked directory)
6. Open any page → press **F12** → open the **SuperNetDev** panel

> [!IMPORTANT]
> Load the **folder**, not a single file inside it. If you downloaded a ZIP, unzip it first.

You can also download the latest `SuperNetDev-Extension.zip` from [Releases](https://github.com/izhuyan/SuperNetDev/releases), unzip it, and load that folder the same way.

---

## Quick start

<p align="center">
  <img src="./docs/guide-network.png" width="720" alt="Network list" />
</p>

### Network list: like Network, built for API debugging

1. Open the page you want to debug → **F12** → **SuperNetDev**
2. Switch to **Network**, filter **Fetch/XHR**
3. Refresh, click a request for details (Headers / Payload / Response)
4. Click **Create rule from this request** (or **New rule**)
5. Path / body drafts are filled automatically — configure delay, mock, header/body rewrites, then save (`Ctrl+S`)
6. Make sure **Intercept** is on, then refresh to verify

Matching defaults to fuzzy — often `getStudentInfo` is enough to hit the API.

<p align="center">
  <img src="./docs/guide-rules.png" width="720" alt="Intercept rules" />
</p>

### Delay, rewrite, and mock

For matched rules you can:

- **Delay**: add hundreds of ms to a few seconds for loading / timeout copy
- **Rewrite request / response headers**: add, remove, or set any header
- **Replace request body**: tweak inputs during integration
- **Mock response**: replace the whole body, optionally without a real request
- **Quick rewrite**: edit in the detail pane; rules go to the Quick rewrite group

Great for “backend not ready”, “verify a frontend branch”, or “bypass one bad field temporarily”.

### Rule scenarios

Group rules by scenario (login integration, page mocks, slow network), with color and collapse, and enable/disable a whole group in one click.

> [!IMPORTANT]
> After you close DevTools, **enabled rules keep working** (the injected script still runs on the page). Turn off **Intercept** or disable rules when you no longer need them.

---

## Match rules

| Mode | Example | Notes |
| :--- | :--- | :--- |
| Fuzzy | `getStudentInfo` | Matches `/cs-api/student/getStudentInfo?studentId=20240001` |
| Wildcard | `*/cs-api/course/*` | `*` matches any segment |
| Regex | `transcript$` | Match URL with a regular expression |
| Exact | Full URL or pathname | Must match exactly |

Matched **enabled** rules show a pencil icon on the name — click to edit.

---

## Shortcuts & tips

| Action | How |
| :--- | :--- |
| Switch Network / Rules | Top tabs; or hold right-click and swipe left/right |
| Search requests | `Ctrl+F` (when hovering JSON, searches local text first) |
| Save rule | `Ctrl+S` in the rule editor |
| Clear list | Eraser button in the toolbar |
| Keep log across navigations | Enable **Preserve log** |
| Check for updates | Open **About**; a red dot means a newer build is available |

---

## Updates

1. Open the panel; if **About** has a red dot, click it
2. Click **Download** next to the version
3. Unzip and replace this folder (or load the new folder with **Load unpacked**)
4. On `chrome://extensions`, click **Reload** on the SuperNetDev card

Latest builds: [Releases](https://github.com/izhuyan/SuperNetDev/releases)

---

## FAQ

**Q: No requests in the panel?**  
Check the filter (try Fetch/XHR), refresh the page, and make sure DevTools is attached to the correct tab.

**Q: Rule saved but not applied?**  
Confirm **Intercept** is on, the rule is **enabled**, and the pattern matches the URL. Refresh after changes.

**Q: APIs still rewritten after closing F12?**  
Expected. Turn off **Intercept** or disable those rules.

**Q: Are images, scripts, and other static assets rewritten?**  
No by default. Interception mainly covers Fetch / XHR.

**Q: How to uninstall?**  
`chrome://extensions` → SuperNetDev → **Remove**.

---

## Links & feedback

- **Public downloads**: [izhuyan/SuperNetDev](https://github.com/izhuyan/SuperNetDev)
- **Source repo**: [izhuyan/SuperNetDev-core](https://github.com/izhuyan/SuperNetDev-core)
- **Issues**: GitHub Issues
- **WeChat**: `bbq-nu`

---

## Sponsor

If SuperNetDev saves you time, open **Sponsor** in the panel and buy the author a coffee ☕

---

<p align="center">
  <sub>Made for frontend debugging · SuperNetDev</sub>
</p>
