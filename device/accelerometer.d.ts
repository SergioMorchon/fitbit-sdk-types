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
	export class Accelerometer extends SensorBase {}
}
