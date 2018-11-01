declare module 'display' {
	interface Display
		extends EventTarget<{
				change: Event;
			}> {
		autoOff: boolean;
		brightnessOverride: number | undefined;
		on: boolean;
		onchange: (event: Event) => void;
		poke(): void;
	}

	const display: Display;
}
