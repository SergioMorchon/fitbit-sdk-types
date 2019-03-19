declare module 'heart-rate' {
	interface HeartRateSensorReading extends SensorReading {
		readonly heartRate: number | null;
	}
	interface HeartRateSensorConstructor {
		new (options?: SensorOptions): Sensor<HeartRateSensorReading> &
			HeartRateSensorReading;
	}

	const HeartRateSensor: void | HeartRateSensorConstructor;

	export { HeartRateSensorReading, HeartRateSensor };
}
