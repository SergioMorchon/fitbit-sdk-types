/// <reference path="./src/device/sensor.d.ts" />

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
