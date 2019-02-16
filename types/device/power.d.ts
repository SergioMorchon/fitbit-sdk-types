declare module 'power' {
	interface Battery
		extends EventTarget<{
			change: Event;
		}> {
		readonly chargeLevel: number;
		readonly charging: boolean;
		onchange: (event: Event) => void;
		readonly timeUntilFull: number;
	}
	const battery: Battery;
	interface Charger
		extends EventTarget<{
			change: Event;
		}> {
		readonly connected: boolean;
		onchange: (event: Event) => void;
		readonly powerIsGood: boolean | undefined;
	}
	const charger: Charger;
}
