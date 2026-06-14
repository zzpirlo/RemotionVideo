type BodyCopyProps = {
	children: string;
};

export function BodyCopy({children}: BodyCopyProps) {
	return (
		<p className="max-w-[860px] text-[30px] font-medium leading-[1.35] tracking-[-0.02em] text-slate-700">
			{children}
		</p>
	);
}
