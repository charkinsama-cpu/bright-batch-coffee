# Bright Batch Coffee — Storefront Preview

**This is a design / UX preview**, not a live store.  
Next step: port the look and structure into a **Shopify** theme and real product catalog.

Placeholder brand name: **Bright Batch Coffee** (easy to rename — see checklist below).

## What this is

A phone-ready, static HTML/CSS/JS single-page storefront that feels like a real coffee shop ready to sell online:

- Home hero + primary **Shop the 12 oz bag** CTA  
- Product block: 12 oz whole bean (description, tasting-note placeholders, demo price)  
- Why Bright Batch (hospitality / third-place story)  
- How it works: Order → We roast & ship → Brew at home  
- FAQ (shipping, whole bean, freshness, returns)  
- Footer with email + Instagram placeholders  
- Mock cart drawer (UI only)

**Powered by Shopify at launch** — that note lives here in the README, not on the customer-facing storefront.

## Open the preview

```bash
# From this folder — any static server works, or open the file directly:
open index.html
# or
python3 -m http.server 8080
# then visit http://localhost:8080
```

Primary file: `index.html`  
Styles: `css/styles.css`  
Behavior: `js/main.js`  
Launch checklist: `LAUNCH.md`

## Brand notes (for Shopify theme)

| Token | Value |
|--------|--------|
| Vibe | Hospitality / third-place warmth — welcome, calm, human |
| Faith | Quiet “why” (community, gathering, care) — not sermon-on-bag |
| Palette | Warm cream `#F7F1E8`, espresso `#2C1810`, terracotta `#C4785A` / amber `#D4A574` |
| Hero SKU | 12 oz whole-bean private-label bag |
| Fulfillment (customer-facing) | Roasted fresh and shipped to your door |
| Do not name on site | Liberty Beans (invisible roastery / sync partner) |

Fonts: **Fraunces** (display) + **Source Sans 3** (body) via Google Fonts.

## Rename checklist (brand name)

When the final brand name is locked:

1. [ ] Replace “Bright Batch” / “Bright Batch Coffee” in `index.html` (title, logo, headings, footer, meta description)  
2. [ ] Update email / Instagram placeholders (`hello@brightbatch.example`, `@brightbatch`)  
3. [ ] Swap SVG bag label text and logo mark if needed  
4. [ ] Update this README + `LAUNCH.md` titles  
5. [ ] In Shopify: store name, legal name, product titles, email templates, domain  
6. [ ] Replace placeholder product art with real bag photography  
7. [ ] Set real price, shipping, and policies (remove “demo price” badges)

## Distinct from other previews

This storefront is intentionally a **coffee hospitality** experience — not an auto-detailing / services clone (Harbor Shine, SteamWorks, Mickey’s). Warm cream surfaces, serif display type, bag-forward product UI, and a quiet third-place story.

## Tech stack

- Static HTML / CSS / JS  
- Mobile-first layout + hamburger nav  
- No build step, no framework  
- Cart is mock-only until Shopify checkout is connected  

See **LAUNCH.md** for Charles’s go-live steps.
