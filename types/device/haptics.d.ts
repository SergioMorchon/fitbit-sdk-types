declare module 'haptics' {
	type VibrationPatternName =
		| 'alert'
		| 'bump'
		| 'confirmation'
		| 'confirmation-max'
		| 'nudge'
		| 'nudge-max'
		| 'ping'
		| 'ring';
	interface Vibration {
		start(pattern: VibrationPatternName): boolean;
		stop(): void;
	}
	const vibration: Vibration;
}
