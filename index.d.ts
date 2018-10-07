type PermissionName =
	| 'access_activity'
	| 'access_user_profile'
	| 'access_heart_rate'
	| 'access_location'
	| 'access_internet'
	| 'run_background';

interface Permissions {
	granted(permissionName: PermissionName): boolean;
}

type BatchedReading<Reading> = { [P in keyof Reading]: Array<Reading[P]> };

interface Sensor {
	readonly activated: boolean;
	onactivate: (event: Event) => void;
	onerror: (event: SensorErrorEvent) => void;
	onreading: (event: Event) => void;
	start(): void;
	stop(): void;
}

interface BatchedSensor<Reading> extends Sensor {
	readonly readings: BatchedReading<Reading>;
}

interface SensorErrorEvent {
	readonly defaultPrevented: boolean;
	readonly error: Error;
	readonly target: EventTarget;
	readonly type: string;
}

interface SensorOptions {
	readonly frequency?: number | undefined;
	readonly batch?: number | undefined;
}

interface BatchedSensorOptions extends SensorOptions {
	readonly batch?: number | undefined;
}

declare module 'accelerometer' {
	interface AccelerometerReading {
		readonly timestamp: number | null;
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface Accelerometer
		extends BatchedSensor<AccelerometerReading>,
			AccelerometerReading {}
	export class Accelerometer {
		constructor(options?: SensorOptions);
	}
}

declare module 'appbit' {
	interface Appbit {
		appTimeoutEnabled: boolean;
		readonly applicationId: string;
		readonly buildId: string;
		onunload(this: Appbit, event: Event): void;
		readonly permissions: Permissions;
		exit(): void;
	}

	export const me: Appbit;
}

declare module 'barometer' {
	interface BarometerReading {
		readonly pressure: number | null;
		readonly timestamp: number | null;
	}
	interface Barometer
		extends BatchedSensor<BarometerReading>,
			BarometerReading {}
	export class Barometer {
		constructor(options?: SensorOptions);
	}
}

declare module 'body-presence' {
	interface BodyPresenceSensor extends Sensor {}
	export class BodyPresenceSensor {
		constructor(options?: SensorOptions);
		readonly present: boolean;
	}
}

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

declare module 'device' {
	interface Device {
		readonly firmwareVersion: string;
		readonly lastSyncTime: Date;
		readonly modelId: string;
		readonly modelName: string;
		readonly screen: {
			readonly width: number;
			readonly height: number;
		};
		readonly type: 'WATCH' | 'TRACKER';
	}

	export const me: Device;
}

declare module 'display' {
	interface Display {
		autoOff: boolean;
		brightnessOverride: number | undefined;
		on: boolean;
		onchange: (event: Event) => void;
		addEventListener(type: 'change', listener: (event: Event) => void): void;
		poke(): void;
	}

	export const display: Display;
}
