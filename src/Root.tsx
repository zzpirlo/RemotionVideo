import {Composition, registerRoot} from 'remotion';
import {DEFAULT_BRAND} from './constants/brand';
import {DURATION_IN_FRAMES, FPS, HEIGHT, WIDTH} from './constants/video';
import {AnnualCheckupsVideo} from './scenes/AnnualCheckupsVideo';
import './style.css';

export function Root() {
	return (
		<>
			<Composition
				id="AnnualCheckups"
				component={AnnualCheckupsVideo}
				durationInFrames={DURATION_IN_FRAMES}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
				defaultProps={{brand: DEFAULT_BRAND}}
			/>
		</>
	);
}

registerRoot(Root);
