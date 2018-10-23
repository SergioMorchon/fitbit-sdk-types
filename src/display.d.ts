declare module 'display' {
	interface EventMap {
		change: Event;
	}
	interface Display extends EventTarget<EventMap> {
		autoOff: boolean;
		brightnessOverride: number | undefined;
		on: boolean;
		onchange: (event: Event) => void;
		poke(): void;
	}

	export const display: Display;
}
