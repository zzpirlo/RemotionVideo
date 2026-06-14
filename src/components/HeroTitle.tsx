import type {Brand} from '../types/schema';

type HeroTitleProps = {
	brand: Brand;
	children: string;
};

export function HeroTitle({brand, children}: HeroTitleProps) {
	return (
		<h1
			className="max-w-[1120px] text-[82px] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950"
			style={{color: brand.primaryColor}}
		>
			{children}
		</h1>
	);
}
