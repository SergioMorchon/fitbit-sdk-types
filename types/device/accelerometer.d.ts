declare module 'accelerometer' {
	interface AccelerometerReading extends SensorReading {
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface Accelerometer
		extends Sensor<AccelerometerReading>,
			AccelerometerReading {}
	class Accelerometer extends SensorBase {}
}
