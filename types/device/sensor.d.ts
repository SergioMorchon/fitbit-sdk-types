type BatchedSensorReading<Reading> = {
	[P in keyof Reading]: Reading[P] extends number
		? Float32Array
		: Array<Reading[P]>;
};

interface SensorReading {
	readonly timestamp: number | null;
}

type Sensor<Reading extends SensorReading, BatchedReading, Options> = Reading &
	EventTarget<{
		activate: Event;
		error: SensorErrorEvent;
		reading: Event;
	}> & {
		onactivate: (event: Event) => void;
		onerror: (event: SensorErrorEvent) => void;
		onreading: (event: Event) => void;
		readonly readings: BatchedReading;
		readonly activated: boolean;
		start(): void;
		stop(): void;
		setOptions(options: SensorOptions): void;
	};

interface SensorErrorEvent {
	readonly defaultPrevented: boolean;
	readonly error: Error;
	readonly target: EventTarget;
	readonly type: string;
}

interface SensorOptions {
	readonly frequency?: number;
}

interface BatchedSensorOptions extends SensorOptions {
	readonly batch?: number;
}
