declare module 'clock' {
	type Granularity = 'off' | 'seconds' | 'minutes' | 'hours';
	interface TickEvent extends Event {
		readonly date: Date;
	}
	interface Clock {
		granularity: Granularity;
		ontick: (event: TickEvent) => void;
	}

	const clock: Clock;
	export default clock;
}
