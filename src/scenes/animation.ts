import {Easing, interpolate} from 'remotion';

export const EASE_OUT_CUBIC = Easing.bezier(0.16, 1, 0.3, 1);
export const EASE_IN_OUT = Easing.bezier(0.65, 0, 0.35, 1);
export const SPRING_EASE = Easing.spring({
	damping: 34,
	mass: 1,
	stiffness: 240,
	overshootClamping: true,
});

export const getProgress = (
	frame: number,
	startFrame: number,
	durationInFrames: number,
) =>
	interpolate(frame, [startFrame, startFrame + durationInFrames], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: EASE_OUT_CUBIC,
	});

export const getRevealProgress = (
	frame: number,
	startFrame: number,
	durationInFrames: number,
) =>
	interpolate(frame, [startFrame, startFrame + durationInFrames], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: EASE_IN_OUT,
	});

export const getSpringProgress = (
	frame: number,
	startFrame: number,
	durationInFrames: number,
) =>
	interpolate(frame, [startFrame, startFrame + durationInFrames], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: SPRING_EASE,
	});
