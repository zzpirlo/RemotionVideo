export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_IN_FRAMES = 900;

export const CHECKUP_VIDEO = {
	id: 'AnnualCheckups',
	fps: FPS,
	width: WIDTH,
	height: HEIGHT,
	durationInFrames: DURATION_IN_FRAMES,
	defaultProps: {
		durationInFrames: DURATION_IN_FRAMES,
	},
} as const;
