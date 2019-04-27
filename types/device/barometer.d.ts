declare module 'barometer' {
	interface BarometerReading extends SensorReading {
		readonly pressure: number | null;
	}

	interface BatchedBarometerReading
		extends BatchedSensorReading<BarometerReading> {}

	type Barometer = Sensor<BarometerReading, BatchedBarometerReading>;

	type BarometerConstructor = new (options?: SensorOptions) => Barometer;

	const Barometer: void | BarometerConstructor;

	export { BarometerReading, BatchedBarometerReading, Barometer };
}
