declare module 'display' {
	interface Display
		extends EventTarget<{
			change: Event;
		}> {
		readonly aodActive: boolean;
		aodAllowed: boolean;

		readonly aodAvailable: boolean;
		readonly aodEnabled: boolean;
		autoOff: boolean;
		brightnessOverride: 'dim' | 'normal' | 'max' | void;
		on: boolean;
		onchange: (event: Event) => void;
		poke(): void;
	}

	const display: Display;
}
