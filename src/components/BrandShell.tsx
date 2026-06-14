import type {ReactNode} from 'react';
import type {Brand} from '../types/schema';

type BrandShellProps = {
	brand: Brand;
	children: ReactNode;
};

export function BrandShell({brand, children}: BrandShellProps) {
	return (
		<div
			className="relative flex h-full w-full overflow-hidden"
			style={{
				background: `radial-gradient(circle at 18% 18%, ${brand.accentColor}33 0, transparent 34%), radial-gradient(circle at 82% 78%, ${brand.primaryColor}22 0, transparent 36%), linear-gradient(135deg, ${brand.secondaryColor}, #ffffff 58%, ${brand.accentColor}18)`,
				fontFamily: brand.fontFamily,
			}}
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_42%)] opacity-80" />
			<div className="relative z-10 flex h-full w-full flex-col p-[96px] text-slate-950">
				{children}
			</div>
		</div>
	);
}
