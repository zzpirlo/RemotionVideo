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

type CheckupSceneProps = {
	brand: Brand;
	startFrame: number;
	durationInFrames: number;
};

export function CheckupScene({brand, startFrame, durationInFrames}: CheckupSceneProps) {
	const frame = useCurrentFrame();

	const reveal = useMemo(
		() => getProgress(frame, startFrame, 55),
		[frame, startFrame],
	);
	const card = useMemo(
		() => getProgress(frame, startFrame + 30, 60),
		[frame, startFrame],
	);

	return (
		<>
			<FloatingOrb
				brand={brand}
				className="left-[-160px] bottom-[-120px] h-[560px] w-[560px]"
			/>
			<div className="flex h-full items-center justify-between gap-16">
				<Reveal progress={reveal} className="max-w-[1040px] space-y-9">
					<Kicker brand={brand}>{CHECKUP_COPY.checkup.kicker}</Kicker>
					<HeroTitle brand={brand}>{CHECKUP_COPY.checkup.title}</HeroTitle>
					<BodyCopy>{CHECKUP_COPY.checkup.body}</BodyCopy>
				</Reveal>

				<Reveal
					progress={card}
					className="translate-x-16"
					style={{willChange: 'opacity, transform'}}
				>
					<StatCard
						brand={brand}
						label={CHECKUP_COPY.checkup.statLabel}
						value={CHECKUP_COPY.checkup.statValue}
					/>
				</Reveal>
			</div>
		</>
	);
}
