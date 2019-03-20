declare module 'gyroscope' {
	interface GyroscopeReading extends SensorReading {
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface BatchedGyroscopeReading
		extends BatchedSensorReading<GyroscopeReading> {}

	type GyroscopeConstructor = new (options?: SensorOptions) => Sensor<
		GyroscopeReading,
		BatchedGyroscopeReading
	>;

	const Gyroscope: void | GyroscopeConstructor;

	export { GyroscopeReading, BatchedGyroscopeReading, Gyroscope };
}
