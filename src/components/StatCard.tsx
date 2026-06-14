import type {Brand} from '../types/schema';

type StatCardProps = {
	brand: Brand;
	label: string;
	value: string;
};

export function StatCard({brand, label, value}: StatCardProps) {
	return (
		<div className="w-[420px] rounded-[36px] border border-white/80 bg-white/70 p-8 shadow-[0_30px_90px_rgba(15,118,110,0.16)] backdrop-blur-xl">
			<p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
				{label}
			</p>
			<p
				className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em]"
				style={{color: brand.primaryColor}}
			>
				{value}
			</p>
		</div>
	);
}
