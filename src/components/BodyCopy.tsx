type BodyCopyProps = {
	children: string;
	className?: string;
};

export function BodyCopy({children, className}: BodyCopyProps) {
	return (
		<p
			className={[
				'max-w-[860px] text-[30px] font-medium leading-[1.35] tracking-[-0.02em] text-slate-700',
				className,
			]
				.filter(Boolean)
				.join(' ')}
		>
			{children}
		</p>
	);
}
