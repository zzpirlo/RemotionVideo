import type {Brand} from '../types/schema';

type KickerProps = {
	brand: Brand;
	children: string;
	className?: string;
};

export function Kicker({brand, children, className}: KickerProps) {
	return (
		<div
			className={[
				'mb-8 flex items-center gap-4',
				className,
			]
				.filter(Boolean)
				.join(' ')}
		>
			<div
				className="h-2 w-16 rounded-full"
				style={{backgroundColor: brand.accentColor}}
			/>
			<p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-600">
				{children}
			</p>
		</div>
	);
}
