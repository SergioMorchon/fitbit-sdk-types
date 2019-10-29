declare module 'barometer' {
	interface BarometerReading extends SensorReading {
		readonly pressure: number | null;
	}

	interface BatchedBarometerReading
		extends BatchedSensorReading<BarometerReading> {}

	type Barometer = Sensor<
		BarometerReading,
		BatchedBarometerReading,
		BatchedSensorOptions
	>;

	type BarometerConstructor = new (options?: BatchedSensorOptions) => Barometer;

	const Barometer: void | BarometerConstructor;

	export { BarometerReading, BatchedBarometerReading, Barometer };
}
