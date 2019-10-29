declare module 'display' {
	interface Display
		extends EventTarget<{
			change: Event;
		}> {
		autoOff: boolean;
		brightnessOverride: 'dim' | 'normal' | 'max' | void;
		on: boolean;
		onchange: (event: Event) => void;
		poke(): void;
	}

	const display: Display;
}
