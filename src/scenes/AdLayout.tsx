import {useMemo} from 'react';
import {AbsoluteFill, Audio, Sequence, useCurrentFrame} from 'remotion';
import {BACKGROUND_AUDIO} from '../constants/audio';
import content from '../constants/content.json';
import {
	getBeatDropProgress,
	getCinematicZoom,
	getDuckingVolume,
	getSpringProgress,
	getStaggeredSpringProgress,
	TRANSITION_FRAMES,
} from '../constants/motion';
import type {Brand} from '../types/schema';
import {BodyCopy} from '../components/BodyCopy';
import {HeroTitle} from '../components/HeroTitle';
import {Kicker} from '../components/Kicker';
import {PlaceholderAsset} from '../components/PlaceholderAsset';

type AdLayoutProps = {
	brand: Brand;
};

function getActiveTransitionFrame(frame: number) {
	return [...TRANSITION_FRAMES].reverse().find((transitionFrame) => frame >= transitionFrame);
}

export function AdLayout({brand}: AdLayoutProps) {
	const frame = useCurrentFrame();

	const cinematicZoom = useMemo(() => getCinematicZoom(frame), [frame]);
	const duckingVolume = useMemo(() => getDuckingVolume(frame), [frame]);
	const activeTransitionFrame = getActiveTransitionFrame(frame);
	const framesSinceTransition = activeTransitionFrame ? frame - activeTransitionFrame : 0;
	const beatDropProgress =
		activeTransitionFrame && framesSinceTransition <= 30
			? getBeatDropProgress(frame, activeTransitionFrame) *
				(1 - getSpringProgress(frame, activeTransitionFrame + 30, 30))
			: 0;

	const introProgress = getSpringProgress(frame, 0, 75);
	const problemProgress = getSpringProgress(frame, 90, 75);
	const ctaProgress = getSpringProgress(frame, 600, 75);
	const ctaButtonProgress = getSpringProgress(frame, 630, 60);

	return (
		<AbsoluteFill
			className="overflow-hidden text-slate-950"
			style={{fontFamily: brand.fontFamily}}
		>
			<div
				className="absolute inset-[-8%] bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.38),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(15,118,110,0.18),transparent_38%)]"
				style={{
					transform: `scale(${cinematicZoom})`,
					transformOrigin: 'center',
					willChange: 'transform',
				}}
			/>

			{BACKGROUND_AUDIO.enabled ? (
				<Audio
					src={BACKGROUND_AUDIO.src}
					volume={duckingVolume}
					startFrom={0}
				/>
			) : null}

			<div className="relative z-10 h-full w-full">
				<div
					className="absolute left-[96px] top-[72px] z-20 h-1 w-96 rounded-full bg-teal-400 shadow-[0_0_28px_rgba(45,212,191,0.75)]"
					style={{
						opacity: beatDropProgress,
						transform: `scaleX(${0.15 + beatDropProgress * 0.85})`,
						transformOrigin: 'left',
						willChange: 'opacity, transform',
					}}
				/>

				<Sequence from={0} durationInFrames={90}>
					<section className="grid h-full grid-cols-[1.05fr_0.95fr] items-center gap-16">
						<div
							className="space-y-8 px-4"
							style={{
								opacity: introProgress,
								transform: `translate3d(0, ${(1 - introProgress) * 48}px, 0)`,
								willChange: 'opacity, transform',
							}}
						>
							<Kicker brand={brand}>00 / Hook</Kicker>
							<HeroTitle brand={brand}>{content.Hook}</HeroTitle>
							<BodyCopy className="max-w-[720px] text-[clamp(1.35rem,1.55vw,1.875rem)]">
								Annual checkups turn prevention into a visible plan.
							</BodyCopy>
						</div>

						<div
							style={{
								opacity: introProgress,
								transform: `translate3d(0, ${(1 - introProgress) * 48}px, 0) scale(${0.94 + introProgress * 0.06})`,
								willChange: 'opacity, transform',
							}}
						>
							<PlaceholderAsset
								brand={brand}
								assetName={content.Assets.logo}
								variant="logo"
								className="mx-auto w-[88%] max-w-[560px]"
							/>
						</div>
					</section>
				</Sequence>

				<Sequence from={90} durationInFrames={150}>
					<section className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-16">
						<div
							style={{
								opacity: problemProgress,
								transform: `translate3d(0, ${(1 - problemProgress) * 48}px, 0) scale(${0.94 + problemProgress * 0.06})`,
								willChange: 'opacity, transform',
							}}
						>
							<PlaceholderAsset
								brand={brand}
								assetName={content.Assets.featureImages[0]}
								className="mx-auto w-[88%] max-w-[560px]"
							/>
						</div>

						<div
							className="space-y-8 px-4"
							style={{
								opacity: problemProgress,
								transform: `translate3d(0, ${(1 - problemProgress) * 48}px, 0)`,
								willChange: 'opacity, transform',
							}}
						>
							<Kicker brand={brand}>01 / Problem</Kicker>
							<HeroTitle brand={brand}>{content.Problem.headline}</HeroTitle>
							<BodyCopy className="max-w-[760px] text-[clamp(1.25rem,1.45vw,1.75rem)]">
								{content.Problem.body}
							</BodyCopy>
						</div>
					</section>
				</Sequence>

				<Sequence from={240} durationInFrames={360}>
					<section className="grid h-full grid-cols-3 gap-8 pt-10">
						{content.ValuePropositions.map((proposition, index) => {
							const cardProgress = getStaggeredSpringProgress(frame, 240, index, 85);
							const imageProgress = getStaggeredSpringProgress(frame, 255, index, 75);

							return (
								<article
									key={proposition.title}
									className="space-y-6 rounded-[32px] bg-white/75 p-8 shadow-xl ring-1 ring-slate-950/5 backdrop-blur"
									style={{
										opacity: cardProgress,
										transform: `translate3d(0, ${(1 - cardProgress) * 56}px, 0) scale(${0.94 + cardProgress * 0.06})`,
										willChange: 'opacity, transform',
									}}
								>
									<div
										style={{
											opacity: imageProgress,
											transform: `translate3d(0, ${(1 - imageProgress) * 32}px, 0) scale(${0.96 + imageProgress * 0.04})`,
											willChange: 'opacity, transform',
										}}
									>
										<PlaceholderAsset
											brand={brand}
											assetName={proposition.assetName}
											className="min-h-[180px] w-full"
										/>
									</div>
									<div className="space-y-4">
										<p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">
											0{index + 1} / Value proposition
										</p>
										<HeroTitle
											brand={brand}
											className="max-w-none text-[clamp(1.85rem,2.2vw,2.75rem)]"
										>
											{proposition.title}
										</HeroTitle>
										<BodyCopy className="text-[clamp(1rem,1.05vw,1.2rem)]">
											{proposition.body}
										</BodyCopy>
									</div>
								</article>
							);
						})}
					</section>
				</Sequence>

				<Sequence from={600} durationInFrames={300}>
					<section className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-16">
						<div
							className="space-y-8 px-4"
							style={{
								opacity: ctaProgress,
								transform: `translate3d(0, ${(1 - ctaProgress) * 48}px, 0)`,
								willChange: 'opacity, transform',
							}}
						>
							<Kicker brand={brand}>03 / Call to action</Kicker>
							<HeroTitle brand={brand}>{content.CallToAction.headline}</HeroTitle>
							<BodyCopy className="max-w-[760px] text-[clamp(1.25rem,1.45vw,1.75rem)]">
								{content.CallToAction.body}
							</BodyCopy>
							<div
								className="inline-flex rounded-full bg-teal-700 px-10 py-5 text-lg font-black text-white shadow-xl"
								style={{
									opacity: ctaButtonProgress,
									transform: `translate3d(0, ${(1 - ctaButtonProgress) * 24}px, 0) scale(${0.9 + ctaButtonProgress * 0.1})`,
									willChange: 'opacity, transform',
								}}
							>
								{content.CallToAction.buttonLabel}
							</div>
						</div>

						<div
							style={{
								opacity: ctaProgress,
								transform: `translate3d(0, ${(1 - ctaProgress) * 48}px, 0) scale(${0.94 + ctaProgress * 0.06})`,
								willChange: 'opacity, transform',
							}}
						>
							<PlaceholderAsset
								brand={brand}
								assetName={content.Assets.backgroundTrack}
								variant="audio"
								className="mx-auto w-[88%] max-w-[560px]"
							/>
						</div>
					</section>
				</Sequence>
			</div>
		</AbsoluteFill>
	);
}
