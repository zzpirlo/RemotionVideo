import {readFileSync} from 'node:fs';

const contentPath = new URL('../src/constants/content.json', import.meta.url);
let content;

try {
	content = JSON.parse(readFileSync(contentPath, 'utf8'));
} catch {
	console.error('Missing or invalid src/constants/content.json');
	process.exit(1);
}

const requiredKeys = ['Hook', 'Problem', 'ValuePropositions', 'CallToAction', 'Assets'];
const missingKeys = requiredKeys.filter((key) => !(key in content));

if (missingKeys.length > 0) {
	console.error(`Missing content keys: ${missingKeys.join(', ')}`);
	process.exit(1);
}

if (!Array.isArray(content.ValuePropositions) || content.ValuePropositions.length !== 3) {
	console.error('ValuePropositions must contain exactly three items.');
	process.exit(1);
}

const propositionIssues = content.ValuePropositions
	.flatMap((proposition, index) => {
		const issues = [];

		if (!proposition.title) {
			issues.push(`ValuePropositions[${index}].title`);
		}

		if (!proposition.body) {
			issues.push(`ValuePropositions[${index}].body`);
		}

		if (!proposition.assetName) {
			issues.push(`ValuePropositions[${index}].assetName`);
		}

		return issues;
	});

if (propositionIssues.length > 0) {
	console.error(`Incomplete value propositions: ${propositionIssues.join(', ')}`);
	process.exit(1);
}

if (!content.Assets.logo || !content.Assets.backgroundTrack) {
	console.error('Assets.logo and Assets.backgroundTrack are required.');
	process.exit(1);
}

if (!Array.isArray(content.Assets.featureImages) || content.Assets.featureImages.length !== 3) {
	console.error('Assets.featureImages must contain exactly three files.');
	process.exit(1);
}

console.log('Content audit passed.');
