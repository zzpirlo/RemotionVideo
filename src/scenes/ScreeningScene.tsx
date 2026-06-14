import {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {BodyCopy} from '../components/BodyCopy';
import {FloatingOrb} from '../components/FloatingOrb';
import {HeroTitle} from '../components/HeroTitle';
import {Kicker} from '../components/Kicker';
import {Reveal} from '../components/Reveal';
import {StatCard} from '../components/StatCard';
import type {Brand} from '../types/schema';
import {CHECKUP_COPY} from '../constants/copy';
import {getProgress} from './animation';

type ScreeningSceneProps = {
	brand: Brand;
	startFrame: number;
	durationInFrames: number;
};

export function ScreeningScene({brand, startFrame}: ScreeningSceneProps) {
	const frame = useCurrentFrame();

	const reveal = useMemo(
		() => getProgress(frame, startFrame, 55),
		[frame, startFrame],
	);
	const card = useMemo(
		() => getProgress(frame, startFrame + 28, 60),
		[frame, startFrame],
	);

	return (
		<>
			<FloatingOrb
				brand={brand}
				className="right-[-120px] bottom-[-140px] h-[620px] w-[620px]"
			/>
			<div className="flex h-full items-center justify-between gap-16">
				<Reveal
					progress={card}
					className="translate-x-16"
					style={{willChange: 'opacity, transform'}}
				>
					<StatCard
						brand={brand}
						label={CHECKUP_COPY.screening.statLabel}
						value={CHECKUP_COPY.screening.statValue}
					/>
				</Reveal>

				<Reveal progress={reveal} className="max-w-[1040px] space-y-9 text-right">
					<div className="ml-auto">
						<Kicker brand={brand}>{CHECKUP_COPY.screening.kicker}</Kicker>
					</div>
					<HeroTitle brand={brand}>{CHECKUP_COPY.screening.title}</HeroTitle>
					<BodyCopy>{CHECKUP_COPY.screening.body}</BodyCopy>
				</Reveal>
			</div>
		</>
	);
}
