# RemotionVideo

Professional Remotion scaffold for a healthcare video about why annual checkups matter in cancer prevention.

## Commands

```bash
npm run dev
npm run build
npm run render
```

## Structure

- `src/components/` — reusable UI primitives such as `BrandShell`, `Reveal`, `StatCard`, and typography components.
- `src/scenes/` — timeline sections and animation helpers. Interpolate/spring logic is centralized in `src/scenes/animation.ts`.
- `src/constants/` — brand, copy, and video defaults.
- `src/types/schema.ts` — Zod `BrandSchema` used by composition props.

## Brand schema

The main composition `AnnualCheckups` uses `defaultProps` that satisfy `BrandSchema`:

```ts
{
  primaryColor: "#0F766E",
  secondaryColor: "#ECFDF5",
  accentColor: "#2DD4BF",
  fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
  logoUrl: "https://via.placeholder.com/360x112/0F766E/FFFFFF?text=Annual+Checkup"
}
```

Replace `logoUrl` with the production healthcare brand asset before rendering.

## Content sources

On-screen copy is intentionally cautious and source-led. Key references used for the scaffold:

- [CDC — Cancer Screening Tests](https://www.cdc.gov/cancer/prevention/screening.html)
- [CDC — Preventive Care](https://www.cdc.gov/chronic-disease/prevention/preventive-care.html)
- [National Cancer Institute — Cancer Screening Tests](https://www.cancer.gov/about-cancer/screening/screening-tests)
- [National Cancer Plan — Detect Cancers Early](https://nationalcancerplan.cancer.gov/goals/detect-cancers-early)

## Remotion animation guidance

The scaffold centralizes animation math in `src/scenes/animation.ts`:

- Use `interpolate()` with clamped ranges for deterministic timeline motion.
- Use `Easing.spring()` with `interpolate()` for normalized spring-style motion.
- Reserve frame-based `spring()` for true physics-style motion where duration and physical config are intentionally part of the creative brief.

This follows Remotion guidance for `interpolate()`, `spring()`, `Easing.spring()`, and performance.
