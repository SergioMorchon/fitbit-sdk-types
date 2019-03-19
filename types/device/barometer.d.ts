declare module 'barometer' {
	interface BarometerReading extends SensorReading {
		readonly pressure: number | null;
	}

	interface BarometerConstructor {
		new (options?: SensorOptions): Sensor<BarometerReading> & BarometerReading;
	}

	const Barometer: void | BarometerConstructor;

	export { BarometerReading, Barometer };
}
