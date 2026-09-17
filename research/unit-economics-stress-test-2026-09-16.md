# BLUNT Unit-Economics Stress Test — Private-Label Coffee (Charles Harkins)
**Date:** Tue Sep 16, 2026 (PT)  
**Scope:** Coffee-only. Hero SKU = 12 oz whole-bean private label. Goal = fund future café + Christian bookstore with Brittney — not national scale. Warm network first; paid ads later.

---

## Assumptions (CHANGED / LABELED)

| # | Assumption | Status |
|---|------------|--------|
| A1 | Retail test band $18 / $20 / $22 / $24 | Matches Liberty Beans $18–22 claim; $24 = story premium test |
| A2 | Shopify Basic **$39/mo** (monthly) used as conservative fixed cost; annual = **$29/mo** | Fact from Shopify pricing |
| A3 | Payment = Shopify Payments **2.9% + $0.30** (not Stripe-on-Shopify +2%) | Fact |
| A4 | **Free shipping absorbed** into bag price for dropship/inventory base cases (common DTC) | MODEL CHOICE — alternate pass-through shown |
| A5 | Liberty Beans mapper **$15** = product wholesale; **shipping NOT published** on mapper | Gap — two cases modeled |
| A6 | Dripshipper **$9.39+** + **free US shipping** per their wholesale page / reviews | "+" means some SKUs higher — treat $9.39 as floor |
| A7 | Small-inventory COGS proxies: SJ **$7–10** finished; Peacemaker **$9–12.50**; ship self **$4.50–$6** | Published proxies; Aldo's = no public unit $ |
| A8 | Cubit bag-only **$0.52–$0.75** at 500–1K — only if you buy empty bags separately | Not needed if SJ/Peacemaker finished |
| A9 | Warm-network CAC = **$0**; paid scenarios **$15 / $30 / $50** labeled | $15–30 / $20–50 from MHI coffee Meta benchmarks; $45–53 blended F&B from Eightx |
| A10 | No returns, no tax, no inserts, no labor time valued | Conservative ops ignore |

---

## 1) Cost stack per bag

### PATH A — DROPSHIP (no inventory)

| Cost line | Roastify (Base/Pro member) | Dripshipper | Liberty Beans |
|-----------|---------------------------|-------------|---------------|
| Coffee+roast+bag+label (all-in product) | **$12.00** | **$9.39+** | **$15.00** (mapper) |
| Dropship shipping (1st bag) | **$4.50** (+$1.25 add'l) | **$0** claimed free US | **Not published** |
| Platform membership (allocated later) | $15 or $49 /mo | $30 / $99 / $197 /mo | Not published (apply/onboard) |
| Shopify Basic | $39/mo ($29 annual) | same | same |
| Payment (at $20 ticket) | $0.88 | $0.88 | $0.88 |
| **Variable all-in before payment** | **$16.50** | **$9.39+** | **$15.00** (or **$20** if +$5 ship) |

**Sources:**  
- Roastify: https://roastify.app/pricing · https://docs.roastify.app/docs/merchant-app/billing/plans  
- Dripshipper fees: https://apps.shopify.com/dripshipper · product: https://www.dripshipper.io/wholesale-coffee  
- Liberty mapper $15: https://libertybeanscoffee.com/16677-2/ · margin claim: https://libertybeanscoffee.com/private-label/  
- Shopify: https://www.shopify.com/pricing  
- Stripe/Shopify Payments 2.9%+$0.30: https://stripe.com/pricing · Shopify pricing page  

### PATH B — SMALL INVENTORY (Aldo's-style / SJ / Peacemaker)

| Cost line | Specialty Java proxy | Peacemaker proxy | Notes |
|-----------|---------------------|------------------|-------|
| Finished 12 oz (coffee+roast+pack) | **$7–10** (use mid **$8.50**) | **$9–12.50** (use mid **$10.75**) | SJ Fast-Track PDF; Peacemaker blog |
| Empty bag only (if DIY) | Cubit 12oz standup **$0.75@500 / $0.52@1K** | same | Only if buying bags separate |
| US domestic ship 12oz packed | **$4.50–$6** USPS GA commercial | same | atoship 2026 guide |
| Shopify | $39/mo | $39/mo | No dropship membership |
| Payment @ $20 | $0.88 | $0.88 | |
| **Variable all-in (mid + $5 ship absorb)** | **$13.50** | **$15.75** | |
| Working capital | MOQ: Aldo's **25–250 bags**; SJ programs from ~25–100+ lb | Inventory float | Aldo's: no public $/bag |

**Sources:**  
- SJ finished $7–10 / retail $16–22: https://www.specialtyjava.com/Fast-Track-Guide-to-Private-Label-Coffee.pdf  
- Peacemaker COGS $9–12.50 / retail $14–18 (premium $22): https://www.peacemakercoffeecompany.com/post/brewing-success-the-real-numbers-behind-private-label-coffee  
- Cubit: https://www.cubitpackaging.com/blog/custom-coffee-bags-cost-pricing-guide  
- Ship bands: https://atoship.com/blog/cheapest-way-to-ship-coffee-and-tea-2026  
- Aldo's MOQ 25–250, custom pricing only: https://aldoscoffee.com/pages/wholesale  

---

## 2) Realistic retail price band (story-led DTC)

| Band | Price | Fit |
|------|-------|-----|
| Floor | **$18** | Liberty Beans published band; SJ avg retail floor |
| Core | **$20–$22** | Liberty 30–45% claim band; specialty DTC comps (Stumptown ~$19–20, Blue Bottle ~$18–19) |
| Story premium | **$24** | Justified only with strong faith/mission story + taste; Peacemaker "clean premium" ~$22 |
| Avoid | **<$18** with Roastify absorb-ship | Math dies (see §3) |

**Comps / claims:** Liberty $18–22 · SJ $16–22 · Peacemaker $14–18 std / $22 premium · MHI coffee ads treat <$25 single bag as common.

**Recommendation for Charles/Brittney story brand:** list **$22** (or $20 + free ship threshold on 2 bags). Do not race to $16–18 on Roastify.

---

## 3) Gross / contribution margin — dropship vs small inventory

**Definition here = contribution after product + ship absorb + payment. Before fixed tools & ads.**

### At retail $20 (absorb ship)

| Path | Variable COGS | Payment | Contrib $ | Contrib % |
|------|---------------|---------|-----------|-----------|
| Roastify | $16.50 | $0.88 | **$2.62** | **13%** |
| Dripshipper ($9.39 floor) | $9.39 | $0.88 | **$9.73** | **49%** |
| Liberty $15 (ship included ASSUMPTION) | $15.00 | $0.88 | **$4.12** | **21%** |
| Liberty $15 + $5 ship | $20.00 | $0.88 | **−$0.88** | **−4%** |
| Small inv SJ mid + $5 ship | $13.50 | $0.88 | **$5.62** | **28%** |
| Small inv Peacemaker mid + $5 ship | $15.75 | $0.88 | **$3.37** | **17%** |

### Price sensitivity (contrib $)

| Path | $18 | $20 | $22 | $24 |
|------|-----|-----|-----|-----|
| Roastify absorb | $0.68 | $2.62 | $4.56 | $6.50 |
| Drip $9.39 | $7.79 | $9.73 | $11.67 | $13.61 |
| Liberty $15 no extra ship | $2.18 | $4.12 | $6.06 | $8.00 |
| Liberty $15+$5 ship | −$2.82 | −$0.88 | $1.06 | $3.00 |
| SJ+$5 ship | $3.68 | $5.62 | $7.56 | $9.50 |
| PM+$5 ship | $1.43 | $3.37 | $5.31 | $7.25 |

**Blunt read:**  
- **Roastify at $18–20 with free ship is a hobby, not a business.** Need **$22–24** or charge shipping.  
- **Dripshipper looks best on paper** — verify live SKU invoice (the "+") and that free ship holds on branded dropship.  
- **Liberty's "30–45%" marketing claim clashes with mapper $15** unless shipping is in the $15 or retail is $22+ with ship pass-through. Get their unit-cost sheet before signing.  
- **Small inventory (SJ)** wins margin vs Roastify if you can sell through 25–100 bags without spoilage and handle ship yourself.

---

## 4) Break-even bags/month (cover tools/membership)

### Fixed monthly stacks (real fees)

| Stack | $/mo | Sources |
|-------|------|---------|
| Roastify Base + Shopify Basic monthly | **$54** | $15 + $39 |
| Roastify Base + Shopify annual-eq | **$44** | $15 + $29 |
| Roastify Pro + Shopify monthly | **$88** | $49 + $39 |
| Dripshipper Starter + Shopify monthly | **$69** | $30 + $39 |
| Dripshipper Starter annual ($20/mo eq) + Shopify monthly | **$59** | $240/yr + $39 |
| Inventory path: Shopify only | **$39** | no dropship sub |

### BE bags/mo = Fixed ÷ contrib (at $20 absorb-ship)

| Path contrib | Fixed $54 | $44 | $69 | $59 | $39 |
|--------------|-----------|-----|-----|-----|-----|
| Roastify $2.62 | **21** | **17** | 26 | 23 | 15 |
| Drip $9.73 | 6 | 5 | **7** | **6** | 4 |
| Liberty $4.12 | 13 | 11 | 17 | 14 | 10 |
| SJ $5.62 | 10 | 8 | 12 | 11 | **7** |
| PM $3.37 | 16 | 13 | 21 | 18 | 12 |

**Warm-network reality check:** Church/family/friends network of ~30–50 buyers/month at $22 is enough to cover tools on any path. Roastify needs volume or price; Drip/SJ need fewer bags.

*Does not include labels design, domain (~$15/yr), sample bags, or Brittney's time.*

---

## 5) Paid Meta/Google CAC — when it breaks

### Published ranges (not invented)

| Source | Range | URL |
|--------|-------|-----|
| MHI Growth Engine (Feb 2026) coffee/tea Meta | Single bag <$25: **$8–18 CPA**; starter $30–60: **$15–30**; subscription: **$20–50** | https://mhigrowthengine.com/blog/meta-ads-for-coffee-brands/ |
| Eightx coffee unit economics (Jun 2026) | Blended F&B CAC **$45–53**; strong coffee **$30–40** | https://eightx.co/blog/coffee-brand-unit-economics |

### Labeled scenarios (first-order net after CAC) at **$20** absorb-ship

| Path | Contrib | CAC $0 | CAC **$15** | CAC **$30** | CAC **$50** |
|------|---------|--------|-------------|-------------|-------------|
| Roastify | $2.62 | +$2.62 | **−$12.38** | **−$27.38** | **−$47.38** |
| Drip $9.39 | $9.73 | +$9.73 | **−$5.27** | **−$20.27** | **−$40.27** |
| SJ+$5 ship | $5.62 | +$5.62 | **−$9.38** | **−$24.38** | **−$44.38** |
| Liberty $15 | $4.12 | +$4.12 | **−$10.88** | **−$25.88** | **−$45.88** |

### Same at **$22** (better)

| Path | Contrib | CAC $15 | CAC $30 | CAC $50 |
|------|---------|---------|---------|---------|
| Roastify | $4.56 | −$10.44 | −$25.44 | −$45.44 |
| Drip | $11.67 | −$3.33 | −$18.33 | −$38.33 |
| SJ | $7.56 | −$7.44 | −$22.44 | −$42.44 |

**Blunt:** On a **one-bag first order**, every path loses money at **$15+ CAC**. Paid ads only work if:
1. **Subscription / repeat** (MHI LTV $150–400; Eightx $400–900 strong), OR  
2. **Bundle AOV ≥ $40–60** (2–3 bags), OR  
3. Warm network stays primary and ads are tiny brand-awareness tests.

**For the café/bookstore goal:** Do **not** scale Meta until repeat rate proves out. Warm network → email/SMS → only then paid.

---

## 6) Kill criteria — STOP vs CONTINUE

### STOP (or change path immediately)

| Signal | Why |
|--------|-----|
| Listing **≤$18** on Roastify with free ship | Contrib ≤ ~$0.70 — tools never pay for real work |
| Liberty quotes **$15 + separate shipping** and you absorb at ≤$22 | Near-zero / negative contribution |
| Paid CAC **≥$15** on single-bag AOV with no subscription attach | First-order loss ≥$5–12 on every path |
| After 90 days: **<15 bags/mo** on Roastify / **<8 bags/mo** on Drip+Shopify while still paying memberships | Fixed costs eating savings for café/bookstore |
| Spoilage / dead inventory > **15%** of first small-inventory buy (SJ/Aldo's) | Inventory path failed freshness/sales velocity |
| Cannot get **written** all-in unit cost (product+ship+label) from Liberty/Drip before launch | Flying blind on the largest cost line |

### CONTINUE (lean, coffee-only, mission path)

| Signal | Why |
|--------|-----|
| Price **$20–$24** with clear story; prefer **$22** | Leaves room after payment |
| Warm network covers tools in month 1–2 (**~7–21 bags** depending on path) | Matches "not national scale" |
| Start **Roastify Base ($15)** *or* **Drip Starter ($30)** *or* **SJ small MOQ** — pick one, don't stack all three | Cap fixed burn |
| If dropship: **verify Drip live invoice** (is $9.39+ real all-in?) — if yes, Drip wins unit econ | Best published dropship margin |
| If inventory: SJ **$7–10** finished + self-ship ≈ best margin; keep first buy **≤50 bags** | Limits float/spoilage |
| Paid ads only after **≥30%** of buyers reorder within 60 days OR subscription live | Cohort math, not vanity ROAS |
| Monthly cash after variable costs **> $200** consistently → park toward café/bookstore fund | Goal-aligned |

---

## Path ranking for THIS goal (café + bookstore fund, not scale)

| Rank | Path | Verdict |
|------|------|---------|
| 1 | **Dripshipper** (if $9.39+ and free ship verify) | Best published dropship margin; Starter $30; BE ~7 bags @ $20 |
| 2 | **Specialty Java small inventory** ($7–10 + self-ship) | Strong margin; Shopify-only fixed; MOQ discipline required |
| 3 | **Roastify Base** | Easiest brand packaging; **thin margins** — only at $22–24 or charge ship |
| 4 | **Liberty Beans** | Mapper $15 looks middling; get real ship+fee sheet before trusting 30–45% claim |
| 5 | **Peacemaker / Aldo's inventory** | Quality story; Peacemaker COGS higher; Aldo's = custom quote only |

---

## Source index (every cited fee/cost)

| Item | URL |
|------|-----|
| Roastify pricing / $12 / ship $4.50 | https://roastify.app/pricing |
| Roastify Base $15 / Pro $49 / annual | https://docs.roastify.app/docs/merchant-app/billing/plans |
| Dripshipper $30/$99/$197 / $240/yr | https://apps.shopify.com/dripshipper |
| Dripshipper 12oz $9.39+ | https://www.dripshipper.io/wholesale-coffee |
| Liberty mapper $15 | https://libertybeanscoffee.com/16677-2/ |
| Liberty 30–45% @ $18–22 | https://libertybeanscoffee.com/private-label/ |
| Shopify Basic $39/$29 · Payments 2.9%+30¢ | https://www.shopify.com/pricing |
| Stripe 2.9%+$0.30 | https://stripe.com/pricing |
| SJ finished $7–10 · retail $16–22 | https://www.specialtyjava.com/Fast-Track-Guide-to-Private-Label-Coffee.pdf |
| Peacemaker COGS $9–12.50 | https://www.peacemakercoffeecompany.com/post/brewing-success-the-real-numbers-behind-private-label-coffee |
| Cubit 12oz bag pricing | https://www.cubitpackaging.com/blog/custom-coffee-bags-cost-pricing-guide |
| USPS GA ~$4.50–$6 / 12oz | https://atoship.com/blog/cheapest-way-to-ship-coffee-and-tea-2026 |
| Aldo's MOQ 25–250 | https://aldoscoffee.com/pages/wholesale |
| Meta coffee CPA bands | https://mhigrowthengine.com/blog/meta-ads-for-coffee-brands/ |
| Coffee CAC / cohort economics | https://eightx.co/blog/coffee-brand-unit-economics |

