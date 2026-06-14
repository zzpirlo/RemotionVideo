import {z} from 'zod';

export const BrandSchema = z.object({
	primaryColor: z.string().min(1),
	secondaryColor: z.string().min(1),
	accentColor: z.string().min(1),
	fontFamily: z.string().min(1),
	logoUrl: z.string().url(),
});

export type Brand = z.infer<typeof BrandSchema>;
