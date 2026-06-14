import type {Brand} from '../types/schema';

type HeroTitleProps = {
	brand: Brand;
	children: string;
	className?: string;
};

export function HeroTitle({brand, children, className}: HeroTitleProps) {
	return (
		<h1
			className={[
				'max-w-[1120px] text-[clamp(2.75rem,4.2vw,5.125rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950',
				className,
			]
				.filter(Boolean)
				.join(' ')}
			style={{color: brand.primaryColor}}
		>
			{children}
		</h1>
	);
}
