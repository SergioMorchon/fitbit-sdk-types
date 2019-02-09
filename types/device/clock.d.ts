declare module 'clock' {
	export interface TickEvent extends Event {
		readonly date: Date;
	}
	export interface Clock
		extends EventTarget<{
			tick: TickEvent;
		}> {
		granularity: 'off' | 'seconds' | 'minutes' | 'hours';
		ontick: (event: TickEvent) => void;
	}

	const clock: Clock;
	export default clock;
}
