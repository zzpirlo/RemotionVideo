import {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {BodyCopy} from '../components/BodyCopy';
import {FloatingOrb} from '../components/FloatingOrb';
import {HeroTitle} from '../components/HeroTitle';
import {Kicker} from '../components/Kicker';
import {LogoMark} from '../components/LogoMark';
import {Reveal} from '../components/Reveal';
import type {Brand} from '../types/schema';
import {CHECKUP_COPY} from '../constants/copy';
import {getProgress, getSpringProgress} from './animation';

type OpeningSceneProps = {
	brand: Brand;
	startFrame: number;
	durationInFrames: number;
};

export function OpeningScene({brand, startFrame, durationInFrames}: OpeningSceneProps) {
	const frame = useCurrentFrame();

	const reveal = useMemo(
		() => getProgress(frame, startFrame, Math.min(45, durationInFrames)),
		[frame, startFrame, durationInFrames],
	);
	const pulse = useMemo(
		() => getSpringProgress(frame, startFrame + 30, 75),
		[frame, startFrame],
	);

	return (
		<>
			<FloatingOrb
				brand={brand}
				className="right-[-120px] top-[180px] h-[520px] w-[520px]"
			/>
			<div className="flex h-full flex-col">
				<header className="mb-16 flex items-center justify-between">
					<LogoMark brand={brand} />
					<div
						className="h-2 w-80 rounded-full bg-white/70"
						style={{transform: `scaleX(${pulse})`, transformOrigin: 'left'}}
					/>
				</header>

				<main className="flex flex-1 flex-col justify-center">
					<Reveal progress={reveal} className="space-y-10">
						<Kicker brand={brand}>{CHECKUP_COPY.opening.kicker}</Kicker>
						<HeroTitle brand={brand}>{CHECKUP_COPY.opening.title}</HeroTitle>
						<BodyCopy>{CHECKUP_COPY.opening.body}</BodyCopy>
					</Reveal>
				</main>
			</div>
		</>
	);
}
