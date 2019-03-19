type BatchedReading<Reading> = {
	[P in keyof Reading]: Reading[P] extends number
		? Float32Array
		: Array<Reading[P]>
};

interface SensorReading {
	readonly timestamp: number | null;
}

interface Sensor<Reading extends SensorReading, EventMap = {}>
	extends EventTarget<
		EventMap & {
			activate: Event;
			error: SensorErrorEvent;
			reading: Event;
		}
	> {
	onactivate: (event: Event) => void;
	onerror: (event: SensorErrorEvent) => void;
	onreading: (event: Event) => void;
	readonly readings: BatchedReading<Reading>;
	readonly activated: boolean;
	start(): void;
	stop(): void;
}

interface SensorErrorEvent {
	readonly defaultPrevented: boolean;
	readonly error: Error;
	readonly target: EventTarget;
	readonly type: string;
}

interface SensorOptions {
	readonly frequency?: number;
	readonly batch?: number;
}

interface BatchedSensorOptions extends SensorOptions {
	readonly batch?: number;
}
