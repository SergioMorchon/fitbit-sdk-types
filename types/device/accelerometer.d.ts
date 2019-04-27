declare module 'accelerometer' {
	interface AccelerometerReading extends SensorReading {
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface BatchedAccelerometerReading
		extends BatchedSensorReading<AccelerometerReading> {}

	type Accelerometer = Sensor<AccelerometerReading, BatchedAccelerometerReading>;

	type AccelerometerConstructor = new (options?: SensorOptions) => Accelerometer;

	const Accelerometer: void | AccelerometerConstructor;

	export { AccelerometerReading, BatchedAccelerometerReading, Accelerometer };
}
