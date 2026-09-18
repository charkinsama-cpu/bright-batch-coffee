# Gather. Grind. Grow. — Storefront Preview

**This is a design / UX preview**, not a live store.  
Next step: port the look and structure into a **Shopify** theme and real product catalog.

**Wordmark / tagline:** Gather. Grind. Grow.  
**Legal / company brand name:** TBD — do not invent a company name on the storefront. Lead with the tagline.

## What this is

A phone-ready, static HTML/CSS/JS single-page storefront:

- Hero — Gather. Grind. Grow. + hospitality line + Shop CTA  
- Shop — 12 oz whole-bean product card (demo price, labeled demo)  
- About / Story — Gather. Grind. Grow. meaning in plain warm language  
- How it works — Order → We roast & ship → Brew at home  
- Contact — email / Instagram placeholders + Shopify checkout note  
- Footer + mock cart drawer (UI only)  
- Mobile hamburger + sticky shop CTA  

## Open the preview

```bash
# From this folder — any static server works, or open the file directly:
open index.html
# or
python3 -m http.server 8080
# then visit http://localhost:8080
```

| File | Role |
|------|------|
| `index.html` | Storefront page |
| `css/styles.css` | Styles |
| `js/main.js` | Hamburger, mock cart, sticky CTA |
| `assets/logo-bean-wordmark.png` | Victor’s official bean + wordmark (primary) |
| `assets/favicon.svg` | Compact bean favicon |
| `assets/logo.svg` | Optional inline-style SVG reference |
| `LAUNCH.md` | Go-live checklist (internal) |

## Brand notes (for Shopify theme)

| Token | Value |
|--------|--------|
| Wordmark | **Gather. Grind. Grow.** (company name TBD) |
| Vibe | Soft hospitality — welcome, calm, human |
| Faith | Quiet “why” (community, gathering, growth) — not sermon-on-bag |
| Palette | Cream `#F5F0E8`, terracotta `#C4785A`, espresso `#3C2A21`, sage `#8A9A7B` |
| Hero SKU | 12 oz whole-bean bag (bags first; café with Brittney = soft future note) |
| Fulfillment (customer-facing) | Roasted fresh and shipped to your door |
| Do not name on customer pages | Liberty Beans (invisible roastery / sync partner) |

Fonts: **Fraunces** (display) + **Source Sans 3** (body) via Google Fonts.  
Logo: use `assets/logo-bean-wordmark.png` (Victor) in header/hero — not a generated stand-in.

## When the legal brand name locks

1. [ ] Add legal name beside the tagline where needed (footer copyright, Shopify legal)  
2. [ ] Update email / Instagram placeholders (`hello@gathergrindgrow.example`, `@gathergrindgrow`)  
3. [ ] In Shopify: store name, product titles, email templates, domain  
4. [ ] Replace placeholder product art with real bag photography  
5. [ ] Set real price, shipping, and policies (remove “demo price” badges)

## Tech stack

- Static HTML / CSS / JS  
- Mobile-first layout + hamburger nav + sticky shop CTA  
- No build step, no framework  
- Cart is mock-only until Shopify checkout is connected  

See **LAUNCH.md** for Charles’s go-live steps.
