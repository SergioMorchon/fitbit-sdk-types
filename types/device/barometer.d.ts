declare module 'barometer' {
	interface BarometerReading extends SensorReading {
		readonly pressure: number | null;
	}

	interface BatchedBarometerReading
		extends BatchedSensorReading<BarometerReading> {}

	type BarometerConstructor = new (options?: SensorOptions) => Sensor<
		BarometerReading,
		BatchedBarometerReading
	>;

	const Barometer: void | BarometerConstructor;

	export { BarometerReading, BatchedBarometerReading, Barometer };
}
