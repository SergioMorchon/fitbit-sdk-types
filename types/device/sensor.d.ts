type BatchedReading<Reading> = { [P in keyof Reading]: Array<Reading[P]> };

interface Sensor<BatchReading extends {}, EventMap = {}>
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
	readonly readings: BatchedReading<BatchReading>;
	readonly activated: boolean;
	start(): void;
	stop(): void;
}

declare class SensorBase {
	constructor(options?: SensorOptions);
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
