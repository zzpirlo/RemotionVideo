import {interpolate, spring} from 'remotion';
import {DURATION_IN_FRAMES, FPS} from './video';

export const SPRING_CONFIG = {
	stiffness: 100,
	damping: 10,
} as const;

export const STAGGER_FRAMES = 5;
export const TRANSITION_FRAMES = [0, 90, 240, 600] as const;
export const BEAT_DROP_FRAMES = [0, 90, 240, 600] as const;
export const CINEMATIC_ZOOM_START = 1;
export const CINEMATIC_ZOOM_END = 1.05;
export const DUCKED_VOLUME = 0.6;
export const FULL_VOLUME = 1;

export function getSpringProgress(
	frame: number,
	startFrame: number,
	durationInFrames: number,
) {
	return spring({
		frame: frame - startFrame,
		fps: FPS,
		from: 0,
		to: 1,
		config: SPRING_CONFIG,
		durationInFrames,
	});
}

export function getStaggeredSpringProgress(
	frame: number,
	startFrame: number,
	index: number,
	durationInFrames = 75,
) {
	return getSpringProgress(frame, startFrame + index * STAGGER_FRAMES, durationInFrames);
}

export function getCinematicZoom(frame: number, durationInFrames = DURATION_IN_FRAMES) {
	return interpolate(
		frame,
		[0, durationInFrames],
		[CINEMATIC_ZOOM_START, CINEMATIC_ZOOM_END],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
	);
}

export function getDuckingVolume(frame: number, durationInFrames = DURATION_IN_FRAMES) {
	const revealWindows = [
		[0, Math.min(105, durationInFrames)],
		[90, Math.min(195, durationInFrames)],
		[240, Math.min(420, durationInFrames)],
		[600, Math.min(720, durationInFrames)],
	];

	const isMajorReveal = revealWindows.some(
		([from, to]) => frame >= from && frame <= to,
	);

	return isMajorReveal ? DUCKED_VOLUME : FULL_VOLUME;
}

export function isBeatDropFrame(frame: number) {
	return BEAT_DROP_FRAMES.includes(frame as (typeof BEAT_DROP_FRAMES)[number]);
}

export function getBeatDropProgress(frame: number, transitionFrame: number) {
	return getSpringProgress(frame, transitionFrame, 30);
}
