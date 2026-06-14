# Video Layout Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static 30-second Remotion layout using `src/constants/content.json`, four named `Sequence` blocks, Tailwind Flexbox/Grid alignment, responsive typography, and temporary asset placeholders.

**Architecture:** Add a structured content JSON file for the healthcare annual-checkups business, introduce a reusable branded placeholder component, and scaffold four static scene layouts in the main composition. Existing brand constants remain the source of truth for colors and font family.

**Tech Stack:** React, Remotion `AbsoluteFill`/`Sequence`, Tailwind CSS v4 utility classes, TypeScript, JSON module import.

---
### Task 1: Define content JSON schema and data

**Files:**
- Create: `src/constants/content.json`
- Modify: `src/types/schema.ts:1-20`

- [ ] **Step 1: Add TypeScript schema types**

Add the content types after `Brand`:

```typescript
export type ValueProposition = {
	title: string;
	body: string;
	assetName: string;
};

export type AdContent = {
	Hook: string;
	Problem: {
		headline: string;
		body: string;
	};
	ValuePropositions: ValueProposition[];
	CallToAction: {
		headline: string;
		body: string;
		buttonLabel: string;
	};
	Assets: {
		logo: string;
		backgroundTrack: string;
		featureImages: string[];
	};
};
```

- [ ] **Step 2: Run TypeScript check to confirm the new schema is valid**

Run:

```bash
npm run build
```

Expected: PASS, because only unused type declarations were added.

### Task 2: Create content JSON for the healthcare annual-checkups ad

**Files:**
- Create: `src/constants/content.json`

- [ ] **Step 1: Write industry-specific ad copy**

Create:

```json
{
	"Hook": "Your annual checkup can spot cancer risk before symptoms do.",
	"Problem": {
		"headline": "Cancer risk changes quietly.",
		"body": "Family history, lifestyle, medications, and symptoms evolve over time. Without a current prevention plan, screening gaps can stay hidden."
	},
	"ValuePropositions": [
		{
			"title": "Know your risk profile",
			"body": "Review age, family history, lifestyle factors, and symptoms with your care team.",
			"assetName": "feature-risk-profile.png"
		},
		{
			"title": "Stay current on screenings",
			"body": "Annual visits help confirm which screenings fit your age, history, and risk level.",
			"assetName": "feature-screening-timeline.png"
		},
		{
			"title": "Act earlier with confidence",
			"body": "Earlier detection can open more treatment options and protect the years ahead.",
			"assetName": "feature-earlier-action.png"
		}
	],
	"CallToAction": {
		"headline": "Schedule your next checkup.",
		"body": "Ask which screenings are right for you and leave with a prevention plan you can follow.",
		"buttonLabel": "Book your checkup"
	},
	"Assets": {
		"logos": "logo.png",
		"backgroundTrack": "background_track.mp3",
		"featureImages": [
			"feature-risk-profile.png",
			"feature-screening-timeline.png",
			"feature-earlier-action.png"
		]
	}
}
```

- [ ] **Step 2: Run TypeScript/Remotion build to verify JSON import compatibility**

Run:

```bash
npm run build
```

Expected: PASS, because `tsconfig.json` already enables `resolveJsonModule`.

### Task 3: Add a branded placeholder component

**Files:**
- Create: `src/components/PlaceholderAsset.tsx`
- Modify: `src/types/schema.ts:1-30` if needed for placeholder props

- [ ] **Step 1: Write the component**

Create:

```tsx
import type {Brand} from '../types/schema';

type PlaceholderAssetProps = {
	brand: Brand;
	assetName: string;
	variant?: 'image' | 'audio' | 'logo';
	className?: string;
};

export function PlaceholderAsset({
	brand,
	assetName,
	variant = 'image',
	className,
}: PlaceholderAssetProps) {
	return (
		<div
			className={[
				'flex min-h-[220px] items-center justify-center rounded-[32px] border-2 border-dashed p-8 text-center shadow-2xl',
				className,
			]
				.filter(Boolean)
				.join(' ')}
			style={{
				background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`,
				borderColor: `${brand.secondaryColor}80`,
				color: brand.secondaryColor,
			}}
		>
			<div className="max-w-[420px] space-y-3">
				<p className="text-xs font-bold uppercase tracking-[0.32em] opacity-80">
					Temporary asset
				</p>
				<h3 className="text-3xl font-black leading-tight">{assetName}</h3>
				<p className="text-sm font-semibold opacity-80">
					{variant === 'audio' ? 'Audio placeholder' : 'Image placeholder'}
				</p>
			</div>
		</div>
	);
}
```

- [ ] **Step 2: Run TypeScript check**

Run:

```bash
npm run build
```

Expected: PASS.

### Task 4: Scaffold the four main sequences

**Files:**
- Create: `src/scenes/AdLayout.tsx`
- Modify: `src/scenes/SceneSwitcher.tsx:1-20` or `src/Root.tsx:1-20` depending on current structure

- [ ] **Step 1: Create static sequence layout component**

Create:

```tsx
import {AbsoluteFill, Sequence} from 'remotion';
import content from '../constants/content.json';
import {DEFAULT_BRAND} from '../constants/brand';
import {BodyCopy} from '../components/BodyCopy';
import {HeroTitle} from '../components/HeroTitle';
import {Kicker} from '../components/Kicker';
import {PlaceholderAsset} from '../components/PlaceholderAsset';

type AdLayoutProps = {
	brand?: typeof DEFAULT_BRAND;
};

export function AdLayout({brand = DEFAULT_BRAND}: AdLayoutProps) {
	return (
		<AbsoluteFill className="overflow-hidden bg-white text-slate-950">
			<Sequence from={0} durationInFrames={90}>
				<section
					className="grid h-full grid-cols-[1.05fr_0.95fr] items-center gap-16 px-24"
					style={{fontFamily: brand.fontFamily}}
				>
					<div className="space-y-8">
						<Kicker brand={brand}>00 / Hook</Kicker>
						<HeroTitle brand={brand}>{content.Hook}</HeroTitle>
						<BodyCopy>Annual checkups turn prevention into a visible plan.</BodyCopy>
					</div>
					<PlaceholderAsset brand={brand} assetName={content.Assets.logos} variant="logo" />
				</section>
			</Sequence>

			<Sequence from={90} durationInFrames={150}>
				<section
					className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-16 px-24"
					style={{fontFamily: brand.fontFamily}}
				>
					<PlaceholderAsset
						brand={brand}
						assetName={content.Assets.featureImages[0]}
						className="order-2"
					/>
					<div className="order-1 space-y-8">
						<Kicker brand={brand}>01 / Problem</Kicker>
						<HeroTitle brand={brand}>{content.Problem.headline}</HeroTitle>
						<BodyCopy>{content.Problem.body}</BodyCopy>
					</div>
				</section>
			</Sequence>

			<Sequence from={240} durationInFrames={360}>
				<section
					className="grid h-full grid-cols-3 gap-10 px-24 pt-24"
					style={{fontFamily: brand.fontFamily}}
				>
					{content.ValuePropositions.map((proposition, index) => (
						<article key={proposition.title} className="space-y-6 rounded-[28px] bg-slate-50 p-8 shadow-sm">
							<PlaceholderAsset
								brand={brand}
								assetName={proposition.assetName}
								className="min-h-[180px]"
							/>
							<p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">
								0{index + 1} / Value
							</p>
							<HeroTitle brand={brand} className="text-4xl">
								{proposition.title}
							</HeroTitle>
							<BodyCopy>{proposition.body}</BodyCopy>
						</article>
					))}
				</section>
			</Sequence>

			<Sequence from={600} durationInFrames={300}>
				<section
					className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-16 px-24"
					style={{fontFamily: brand.fontFamily}}
				>
					<div className="space-y-8">
						<Kicker brand={brand}>03 / Call to action</Kicker>
						<HeroTitle brand={brand}>{content.CallToAction.headline}</HeroTitle>
						<BodyCopy>{content.CallToAction.body}</BodyCopy>
						<button
							className="rounded-full bg-teal-700 px-10 py-5 text-lg font-black text-white shadow-xl"
							type="button"
						>
							{content.CallToAction.buttonLabel}
						</button>
					</div>
					<PlaceholderAsset
						brand={brand}
						assetName={content.Assets.backgroundTrack}
						variant="audio"
					/>
				</section>
			</Sequence>
		</AbsoluteFill>
	);
}
```

- [ ] **Step 2: Replace the old scene switcher usage with the new layout**

Modify `src/scenes/AnnualCheckupsVideo.tsx` to render:

```tsx
import {AbsoluteFill} from 'remotion';
import {BrandShell} from '../components/BrandShell';
import {AdLayout} from './AdLayout';
import type {Brand} from '../types/schema';

type AnnualCheckupsVideoProps = {
	brand: Brand;
};

export function AnnualCheckupsVideo({brand}: AnnualCheckupsVideoProps) {
	return (
		<AbsoluteFill>
			<BrandShell brand={brand}>
				<AdLayout brand={brand} />
			</BrandShell>
		</AbsoluteFill>
	);
}
```

- [ ] **Step 3: Run TypeScript check**

Run:

```bash
npm run build
```

Expected: PASS.

### Task 5: Verify the static video scaffold

**Files:**
- No new files.

- [ ] **Step 1: Run the project build**

Run:

```bash
npm run build
```

Expected: PASS with no TypeScript errors.

- [ ] **Step 2: Review the visual result**

Run:

```bash
npm run dev
```

Expected: Remotion Studio opens locally and shows four static sequences at frames 0, 90, 240, and 600 with branded placeholders and responsive text.
