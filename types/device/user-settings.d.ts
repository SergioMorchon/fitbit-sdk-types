declare module 'user-settings' {
	interface LocaleSettings {
		readonly language: string;
	}
	interface Preferences {
		readonly clockDisplay: '12h' | '24h';
		readonly firstDayOfWeek: 0 | 1;
	}
	const preferences: Preferences;
	interface ExerciseSettings {
		readonly poolLength: number;
	}
	const exercise: ExerciseSettings;
	const locale: LocaleSettings;
	interface UnitsSettings {
		readonly bodyWeight: 'metric' | 'us' | 'stone';
		readonly distance: 'metric' | 'us';
		readonly height: 'metric' | 'us';
		readonly speed: 'metric' | 'us';
		readonly temperature: 'C' | 'F';
		readonly volume: 'metric' | 'us';
		readonly weight: 'metric' | 'us';
	}
	const units: UnitsSettings;
}
