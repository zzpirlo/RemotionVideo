import type {Brand} from '../types/schema';

type FloatingOrbProps = {
	brand: Brand;
	className: string;
};

export function FloatingOrb({brand, className}: FloatingOrbProps) {
	return (
		<div
			className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
			style={{
				background: `radial-gradient(circle, ${brand.accentColor}44 0%, ${brand.accentColor}11 52%, transparent 72%)`,
			}}
		/>
	);
}
