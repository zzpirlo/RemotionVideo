import type {CSSProperties, ReactNode} from 'react';

type RevealProps = {
	progress: number;
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
};

export function Reveal({progress, children, className = '', style}: RevealProps) {
	const opacity = Math.min(1, Math.max(progress * 1.4, 0));
	const translateY = (1 - opacity) * 42;

	return (
		<div
			className={className}
			style={{
				opacity,
				transform: `translate3d(0, ${translateY}px, 0)`,
				willChange: 'opacity, transform',
				...style,
			}}
		>
			{children}
		</div>
	);
}
