declare module 'power' {
	interface Battery
		extends EventTarget<{
			change: Event;
		}> {
		readonly chargeLevel: number;
		readonly charging: boolean;
		readonly timeUntilFull: number;
	}
	const battery: Battery;
	interface Charger
		extends EventTarget<{
			change: Event;
		}> {
		readonly connected: boolean;
		readonly powerIsGood: boolean | undefined;
	}
	const charger: Charger;
}
