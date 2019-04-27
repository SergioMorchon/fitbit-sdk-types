declare module 'gyroscope' {
	interface GyroscopeReading extends SensorReading {
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface BatchedGyroscopeReading
		extends BatchedSensorReading<GyroscopeReading> {}

	type Gyroscope = Sensor<GyroscopeReading, BatchedGyroscopeReading>;

	type GyroscopeConstructor = new (options?: SensorOptions) => Gyroscope;

	const Gyroscope: void | GyroscopeConstructor;

	export { GyroscopeReading, BatchedGyroscopeReading, Gyroscope };
}
