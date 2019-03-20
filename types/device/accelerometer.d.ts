declare module 'accelerometer' {
	interface AccelerometerReading extends SensorReading {
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface BatchedAccelerometerReading
		extends BatchedSensorReading<AccelerometerReading> {}

	interface AccelerometerConstructor {
		new (options?: SensorOptions): Sensor<
			AccelerometerReading,
			BatchedAccelerometerReading
		>;
	}

	const Accelerometer: void | AccelerometerConstructor;

	export { AccelerometerReading, BatchedAccelerometerReading, Accelerometer };
}
