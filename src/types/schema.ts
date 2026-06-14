import {z} from 'zod';

export type ValueProposition = {
	title: string;
	body: string;
	assetName: string;
};

export type AdContent = {
	Hook: string;
	Problem: {
		headline: string;
		body: string;
	};
	ValuePropositions: ValueProposition[];
	CallToAction: {
		headline: string;
		body: string;
		buttonLabel: string;
	};
	Assets: {
		logo: string;
		backgroundTrack: string;
		featureImages: string[];
	};
};

export const BrandSchema = z.object({
	primaryColor: z.string().min(1),
	secondaryColor: z.string().min(1),
	accentColor: z.string().min(1),
	fontFamily: z.string().min(1),
	logoUrl: z.string().url(),
});

export type Brand = z.infer<typeof BrandSchema>;
