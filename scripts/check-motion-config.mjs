import {readFileSync} from 'node:fs';

const motionPath = new URL('../src/constants/motion.ts', import.meta.url);
let source;

try {
	source = readFileSync(motionPath, 'utf8');
} catch {
	console.error('Missing src/constants/motion.ts');
	process.exit(1);
}

const requiredSnippets = [
	'stiffness: 100',
	'damping: 10',
	'export const STAGGER_FRAMES = 5;',
	'export const TRANSITION_FRAMES = [0, 90, 240, 600] as const;',
	'export const BEAT_DROP_FRAMES = [0, 90, 240, 600] as const;',
	'getSpringProgress(',
	'getStaggeredSpringProgress(',
	'getCinematicZoom(',
	'getDuckingVolume(',
];

const missingSnippets = requiredSnippets.filter((snippet) => !source.includes(snippet));

if (missingSnippets.length > 0) {
	console.error(`Missing motion config snippets: ${missingSnippets.join(', ')}`);
	process.exit(1);
}

console.log('Motion config passed.');
