declare module 'accelerometer' {
	interface AccelerometerReading extends SensorReading {
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface AccelerometerConstructor {
		new (options?: SensorOptions): Sensor<AccelerometerReading> &
			AccelerometerReading;
	}

	const Accelerometer: void | AccelerometerConstructor;

	export { AccelerometerReading, Accelerometer };
}
