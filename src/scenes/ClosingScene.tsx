import {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {BodyCopy} from '../components/BodyCopy';
import {FloatingOrb} from '../components/FloatingOrb';
import {HeroTitle} from '../components/HeroTitle';
import {Kicker} from '../components/Kicker';
import {LogoMark} from '../components/LogoMark';
import {Reveal} from '../components/Reveal';
import {SourceNote} from '../components/SourceNote';
import type {Brand} from '../types/schema';
import {CHECKUP_COPY} from '../constants/copy';
import {getProgress} from './animation';

type ClosingSceneProps = {
	brand: Brand;
	startFrame: number;
	durationInFrames: number;
};

export function ClosingScene({brand, startFrame, durationInFrames}: ClosingSceneProps) {
	const frame = useCurrentFrame();

	const reveal = useMemo(
		() => getProgress(frame, startFrame, 55),
		[frame, startFrame],
	);

	return (
		<>
			<FloatingOrb
				brand={brand}
				className="left-[18%] top-[12%] h-[420px] w-[420px]"
			/>
			<div className="flex h-full flex-col justify-center">
				<Reveal progress={reveal} className="max-w-[1080px] space-y-10">
					<Kicker brand={brand}>{CHECKUP_COPY.action.kicker}</Kicker>
					<HeroTitle brand={brand}>{CHECKUP_COPY.action.title}</HeroTitle>
					<BodyCopy>{CHECKUP_COPY.action.body}</BodyCopy>
					<SourceNote>{CHECKUP_COPY.action.statValue}</SourceNote>
				</Reveal>
			</div>

			<footer className="absolute bottom-[72px] left-[96px] right-[96px] flex items-center justify-between border-t border-slate-950/10 pt-8">
				<p className="text-lg font-semibold tracking-[0.18em] uppercase text-slate-500">
					Annual Checkups
				</p>
				<LogoMark brand={brand} />
			</footer>
		</>
	);
}
