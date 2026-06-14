import content from './content.json';

export const BACKGROUND_AUDIO = {
	src: `/${content.Assets.backgroundTrack}`,
	enabled: false,
	reason: 'Set to true after adding a valid public/background_track.mp3 file.',
} as const;

export const SFX = {
	whoosh: {
		src: '/sfx/whoosh.mp3',
		enabled: false,
	},
	pop: {
		src: '/sfx/pop.mp3',
		enabled: false,
	},
} as const;
