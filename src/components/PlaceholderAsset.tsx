import type {Brand} from '../types/schema';

type PlaceholderAssetProps = {
	brand: Brand;
	assetName: string;
	variant?: 'image' | 'audio' | 'logo';
	className?: string;
};

const ImageMock = ({brand}: {brand: Brand}) => (
	<div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-inner">
		<div className="flex items-center justify-between gap-3">
			<div className="space-y-3">
				<div className="h-4 w-24 rounded-full bg-white/90" />
				<div className="h-3 w-16 rounded-full bg-white/70" />
			</div>
			<div className="h-12 w-12 rounded-3xl bg-white/80 shadow-sm" />
		</div>
		<div className="mt-6 grid gap-3">
			<div className="h-28 rounded-[24px] bg-gradient-to-br from-white/75 to-slate-200/75" />
			<div className="grid grid-cols-3 gap-3">
				<div className="h-14 rounded-[18px] bg-[rgba(255,255,255,0.65)]" />
				<div className="h-14 rounded-[18px] bg-[rgba(250,250,255,0.7)]" />
				<div className="h-14 rounded-[18px] bg-[rgba(255,255,255,0.5)]" />
			</div>
		</div>
		<div className="mt-5 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
			<span>Mock preview</span>
			<span className="rounded-full bg-slate-900/10 px-3 py-1 text-slate-900">{brand.primaryColor.toUpperCase()}</span>
		</div>
	</div>
);

const LogoMock = ({brand}: {brand: Brand}) => (
	<div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-inner">
		<div className="flex items-center gap-5">
			<div
				className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/80 shadow-sm"
				style={{background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`}}
			>
				<div className="h-10 w-10 rounded-2xl bg-white/90" />
			</div>
			<div>
				<p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-700">Brand mark</p>
				<h3 className="text-2xl font-black text-slate-900">Annual Checkup</h3>
				<p className="mt-1 text-sm text-slate-600">Friendly healthcare identity</p>
			</div>
		</div>
	</div>
);

const AudioMock = ({brand}: {brand: Brand}) => (
	<div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-inner">
		<div className="flex items-center justify-between gap-5">
			<div>
				<p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-700">Sound design</p>
				<h3 className="text-2xl font-black text-slate-900">Health pulse</h3>
			</div>
			<div className="h-14 w-14 rounded-full bg-[rgba(45,212,191,0.18)] border border-teal-400/40 flex items-center justify-center text-teal-700">
				▶
			</div>
		</div>
		<div className="mt-6 space-y-2">
			<div className="h-3 rounded-full bg-slate-200" />
			<div className="h-3 rounded-full bg-teal-300" />
			<div className="h-3 rounded-full bg-slate-200" />
			<div className="h-3 rounded-full bg-teal-400" />
			<div className="h-3 rounded-full bg-slate-200" />
		</div>
	</div>
);

export function PlaceholderAsset({
	brand,
	assetName,
	variant = 'image',
	className,
}: PlaceholderAssetProps) {
	return (
		<div
			className={[
				'flex min-h-[240px] items-center justify-center rounded-[32px] p-8 text-slate-950 shadow-2xl',
				className,
			]
				.filter(Boolean)
				.join(' ')}
			style={{
				background: `linear-gradient(135deg, ${brand.secondaryColor}, ${brand.primaryColor})`,
			}}
		>
			<div className="max-w-[460px] space-y-6 text-left">
				<div className="space-y-3 rounded-[28px] border border-white/20 bg-slate-950/5 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.12)]">
					<p className="text-xs font-bold uppercase tracking-[0.32em] text-slate-600">
						Generated asset
					</p>
					<h3 className="text-3xl font-black leading-tight text-slate-950">
						{assetName}
					</h3>
					<p className="text-sm font-semibold text-slate-700">
						{variant === 'audio'
							? 'Rich audio illustration'
							: variant === 'logo'
							? 'Brand identity mockup'
							: 'Data-driven visual mockup'}
					</p>
				</div>

				<div>
					{variant === 'logo' ? (
						<LogoMock brand={brand} />
					) : variant === 'audio' ? (
						<AudioMock brand={brand} />
					) : (
						<ImageMock brand={brand} />
					)}
				</div>
			</div>
		</div>
	);
}
