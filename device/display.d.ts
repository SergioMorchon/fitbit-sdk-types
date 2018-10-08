declare module 'display' {
	interface EventMap {
		change: Event;
		patata: string;
	}
	interface Display extends StrictEventListener<EventMap> {
		autoOff: boolean;
		brightnessOverride: number | undefined;
		on: boolean;
		onchange: (event: Event) => void;
		poke(): void;
	}

	export const display: Display;
}
