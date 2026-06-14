import type {Brand} from '../types/schema';

type LogoMarkProps = {
	brand: Brand;
};

export function LogoMark({brand}: LogoMarkProps) {
	return (
		<div className="flex items-center gap-5">
			<img
				src={brand.logoUrl}
				alt=""
				className="h-12 w-auto rounded-2xl object-contain"
			/>
			<div
				className="h-12 w-1 rounded-full"
				style={{backgroundColor: brand.accentColor}}
			/>
		</div>
	);
}
