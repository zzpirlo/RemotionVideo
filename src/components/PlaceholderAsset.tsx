import type {Brand} from '../types/schema';

type PlaceholderAssetProps = {
	brand: Brand;
	assetName: string;
	variant?: 'image' | 'audio' | 'logo';
	className?: string;
};

export function PlaceholderAsset({
	brand,
	assetName,
	variant = 'image',
	className,
}: PlaceholderAssetProps) {
	return (
		<div
			className={[
				'flex min-h-[220px] items-center justify-center rounded-[32px] border-2 border-dashed p-8 text-center shadow-2xl',
				className,
			]
				.filter(Boolean)
				.join(' ')}
			style={{
				background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`,
				borderColor: `${brand.secondaryColor}80`,
				color: brand.secondaryColor,
			}}
		>
			<div className="max-w-[420px] space-y-3">
				<p className="text-xs font-bold uppercase tracking-[0.32em] opacity-80">
					Temporary asset
				</p>
				<h3 className="text-3xl font-black leading-tight">{assetName}</h3>
				<p className="text-sm font-semibold opacity-80">
					{variant === 'audio' ? 'Audio placeholder' : variant === 'logo' ? 'Logo placeholder' : 'Image placeholder'}
				</p>
			</div>
		</div>
	);
}
