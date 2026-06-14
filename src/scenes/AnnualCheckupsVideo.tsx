import {AbsoluteFill} from 'remotion';
import {BrandShell} from '../components/BrandShell';
import type {Brand} from '../types/schema';
import {SceneSwitcher} from './SceneSwitcher';

type AnnualCheckupsVideoProps = {
	brand: Brand;
};

export function AnnualCheckupsVideo({brand}: AnnualCheckupsVideoProps) {
	return (
		<AbsoluteFill>
			<BrandShell brand={brand}>
				<SceneSwitcher brand={brand} />
			</BrandShell>
		</AbsoluteFill>
	);
}
