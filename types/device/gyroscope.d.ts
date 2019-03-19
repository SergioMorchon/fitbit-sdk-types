declare module 'gyroscope' {
	interface GyroscopeReading extends SensorReading {
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface GyroscopeConstructor {
		new (options?: SensorOptions): Sensor<GyroscopeReading> & GyroscopeReading;
	}

	const Gyroscope: void | GyroscopeConstructor;

	export { GyroscopeReading, Gyroscope };
}
