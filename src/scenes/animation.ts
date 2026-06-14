import {spring} from 'remotion';
import {FPS} from '../constants/motion';

export const getProgress = (
	frame: number,
	startFrame: number,
	durationInFrames: number,
) =>
	spring({
		frame: frame - startFrame,
		fps: FPS,
		from: 0,
		to: 1,
		durationInFrames,
		config: {
			damping: 10,
			stiffness: 100,
		},
	});

export const getRevealProgress = getProgress;

export const getSpringProgress = getProgress;
