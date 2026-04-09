

## Plan: Fix Cases Section, Robot Size, and Spacing

### Problems Identified
1. **Cases section** uses wrong data and wrong design. The reference site has: company logo image at top, location line (flag + country — industry), company name in bold serif-like font, subtitle badge (e.g. "Маркетинговое агентство / Салоны красоты"), description, metrics with strikethrough style, tags at bottom, and a "Подробнее →" link.
2. **Robot** is constrained to 90-95vh with opacity 0.09 — barely visible and not truly full-screen.
3. **Too much empty space** — large padding values (py-20 md:py-28) across all sections.

### Changes

#### 1. Rewrite `CasesSection.tsx` to Match Reference

Use the exact data from the reference site:
- **EnJen Digital** (🇺🇸 США — МАРКЕТИНГ): TikTok Scraper, GPT ssenariylar, Avtoposting. Subtitle: "Маркетинговое агентство / Салоны красоты". Metrics: -200 ч/мес, -$3 000/мес
- **Avtotest7** (🇺🇿 УЗБЕКИСТАН — ОБРАЗОВАНИЕ): QR-hisob, Online platforma, AI-agent. Subtitle: "Автошкола / Экспресс-курсы". Metrics: -150 ч/мес, -$2 000/мес
- **ReFind Commerce** (🇬🇧 ВЕЛИКОБРИТАНИЯ — E-COMMERCE): Yagona inbox, AI-yordamchi. Subtitle: "Маркетплейс / Amazon · eBay · TikTok Shop". Metrics: -90 ч/мес, -$1 200/мес
- **easyTag** (🇬🇧 ВЕЛИКОБРИТАНИЯ — E-COMMERCE): same tags. Subtitle: "Маркетплейс / Amazon · eBay · TikTok Shop". Metrics: -85 ч/мес, -$1 100/мес
- **Sargu Trans** (🇲🇩 МОЛДОВА — АВТО): Uchrashuvlar, Avto-kalendar. Subtitle: "Автосалон / Продажа автомобилей". Metrics: -60 ч/мес, -$800/мес
- **"Сейчас в работе"** card (🇺🇿 УЗБЕКИСТАН): 3 новых проекта under NDA

Card design to replicate from reference:
- White card with subtle border and shadow
- Company name in bold display font
- Green/colored subtitle badge
- Metrics displayed with strikethrough-style bold values
- Tags as outlined pill badges at bottom
- "Подробнее →" link in header
- 2-column grid layout

#### 2. Fix Robot in `HeroSection.tsx`
- Change robot image to `w-full h-full object-cover` filling the entire hero section
- Increase opacity from 0.09 to ~0.12-0.15 for better visibility
- Remove `max-w-none` constraint, use `object-cover` to fill viewport
- Position robot to fill entire `inset-0` container

#### 3. Reduce Empty Space Across All Sections
- Reduce padding from `py-20 md:py-28` to `py-12 md:py-16` across: `TodaySection`, `ProblemsSection`, `SolutionSection`, `HowItWorksSection`, `ChatDemo`, `ResultsSection`, `CasesSection`, `PricingSection`, `CTASection`
- Tighten margins between heading and content (mb-12 → mb-8)

### Files Modified
- `src/components/CasesSection.tsx` — full rewrite with reference data and design
- `src/components/HeroSection.tsx` — robot sizing fix
- All section components — reduce vertical padding

