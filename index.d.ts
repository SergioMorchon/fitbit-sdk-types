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

declare module 'accelerometer' {
	interface AccelerometerReading {
		readonly timestamp: number | null;
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface Accelerometer
		extends Sensor<AccelerometerReading>,
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

	const me: Appbit;

	export { me };
}
