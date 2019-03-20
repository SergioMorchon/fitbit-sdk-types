declare module 'barometer' {
	interface BarometerReading extends SensorReading {
		readonly pressure: number | null;
	}

	interface BatchedBarometerReading
		extends BatchedSensorReading<BarometerReading> {}

	interface BarometerConstructor {
		new (options?: SensorOptions): Sensor<
			BarometerReading,
			BatchedBarometerReading
		>;
	}

	const Barometer: void | BarometerConstructor;

	export { BarometerReading, BatchedBarometerReading, Barometer };
}
