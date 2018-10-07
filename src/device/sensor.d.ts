type BatchedReading<Reading> = { [P in keyof Reading]: Array<Reading[P]> };

interface Sensor<Reading> {
	readonly activated: boolean;
	onactivate(event: Event): void;
	onerror(event: SensorErrorEvent): void;
	onreading(event: Event): void;
	start(): void;
	stop(): void;
	readonly readings: BatchedReading<Reading>;
}

interface SensorErrorEvent {
	readonly defaultPrevented: boolean;
	readonly error: Error;
	readonly target: EventTarget;
	readonly type: string;
}

interface BatchedSensorReading {
	readonly timestamp: Float32Array;
}

interface SensorReading {
	readonly timestamp: number | null;
}

interface SensorOptions {
	readonly frequency?: number | undefined;
	readonly batch?: number | undefined;
}

interface BatchedSensorOptions extends SensorOptions {
	readonly batch?: number | undefined;
}
