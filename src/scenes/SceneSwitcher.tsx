import type {Brand} from '../types/schema';
import {OpeningScene} from './OpeningScene';
import {CheckupScene} from './CheckupScene';
import {ScreeningScene} from './ScreeningScene';
import {ClosingScene} from './ClosingScene';

type SceneSwitcherProps = {
	brand: Brand;
};

export function SceneSwitcher({brand}: SceneSwitcherProps) {
	return (
		<>
			<OpeningScene brand={brand} startFrame={0} durationInFrames={135} />
			<CheckupScene brand={brand} startFrame={135} durationInFrames={135} />
			<ScreeningScene brand={brand} startFrame={270} durationInFrames={135} />
			<ClosingScene brand={brand} startFrame={405} durationInFrames={45} />
		</>
	);
}
