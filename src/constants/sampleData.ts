export type CancerStatistic = {
	id: string;
	label: string;
	value: string;
	description: string;
	source?: string;
};

export type CheckupFrequency = {
	id: string;
	audience: string;
	recommendedFrequency: string;
	notes: string;
};

export const SAMPLE_CANCER_STATISTICS: CancerStatistic[] = [
	{
		id: 'early-detection',
		label: 'Early detection',
		value: 'TBD',
		description: 'Placeholder for the percentage of cancers detected at an earlier, more treatable stage through screening.',
		source: 'Replace with CDC or National Cancer Institute source.',
	},
	{
		id: 'five-year-survival',
		label: 'Five-year survival',
		value: 'TBD',
		description: 'Placeholder for cancer-specific five-year relative survival rates after verified data is added.',
		source: 'Replace with National Cancer Institute SEER source.',
	},
	{
		id: 'screening-impact',
		label: 'Screening impact',
		value: 'TBD',
		description: 'Placeholder for measurable screening impact, such as reduced mortality or earlier treatment initiation.',
		source: 'Replace with peer-reviewed or CDC/NCI source.',
	},
];

export const SAMPLE_CHECKUP_FREQUENCIES: CheckupFrequency[] = [
	{
		id: 'average-risk-adult',
		audience: 'Average-risk adults',
		recommendedFrequency: 'Annual checkup',
		notes: 'Use the yearly visit to review screening eligibility, family history, lifestyle factors, and symptoms.',
	},
	{
		id: 'colorectal-screening',
		audience: 'Colorectal cancer screening',
		recommendedFrequency: 'TBD by guideline',
		notes: 'Replace with current age range, interval, and test options from an official guideline source.',
	},
	{
		id: 'breast-cancer-screening',
		audience: 'Breast cancer screening',
		recommendedFrequency: 'TBD by guideline',
		notes: 'Replace with current mammography interval and age guidance from an official guideline source.',
	},
	{
		id: 'cervical-cancer-screening',
		audience: 'Cervical cancer screening',
		recommendedFrequency: 'TBD by guideline',
		notes: 'Replace with current Pap/HPV testing interval and age guidance from an official guideline source.',
	},
	{
		id: 'lung-cancer-screening',
		audience: 'Lung cancer screening',
		recommendedFrequency: 'TBD by guideline',
		notes: 'Replace with current low-dose CT eligibility and annual screening guidance for high-risk adults.',
	},
];

export const SAMPLE_DATA = {
	cancerStatistics: SAMPLE_CANCER_STATISTICS,
	checkupFrequencies: SAMPLE_CHECKUP_FREQUENCIES,
	lastUpdated: null,
};
