declare module 'power' {
	interface BatteryEventMap {
		change: Event;
	}
	interface Battery extends EventTarget<BatteryEventMap> {
		readonly chargeLevel: number;
		readonly charging: boolean;
		onchange: (event: Event) => void;
		readonly timeUntilFull: number;
	}
	export const battery: Battery;

	interface ChargerEventMap {
		change: Event;
	}
	interface Charger extends EventTarget<ChargerEventMap> {
		readonly connected: boolean;
		onchange: (event: Event) => void;
		powerIsGood: boolean | undefined;
	}
	export const charger: Charger;
}
