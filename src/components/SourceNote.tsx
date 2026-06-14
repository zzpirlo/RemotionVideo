type SourceNoteProps = {
	children: string;
};

export function SourceNote({children}: SourceNoteProps) {
	return (
		<p className="mt-8 text-lg font-medium tracking-wide text-slate-500">
			{children}
		</p>
	);
}
