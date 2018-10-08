declare module 'user-settings' {
	interface Preferences {
		readonly clockDisplay: '12h' | '24h';
		readonly firstDayOfWeek: 0 | 1;
	}
	export const preferences: Preferences;
	interface ExerciseSettings {
		readonly poolLength: number;
	}
	export const exercise: ExerciseSettings;
	interface DeviceSettings {
		readonly airplaneModeEnabled: boolean;
		readonly vibrationEnabled: boolean;
	}
	export const device: DeviceSettings;
	export const locale: LocaleSettings;
	interface UnitsSettings {
		readonly bodyWeight: 'metric' | 'us' | 'stone';
		readonly distance: 'metric' | 'us';
		readonly height: 'metric' | 'us';
		readonly speed: 'metric' | 'us';
		readonly temperature: 'C' | 'F';
		readonly volume: 'metric' | 'us';
		readonly weight: 'metric' | 'us';
	}
	export const units: UnitsSettings;
}
