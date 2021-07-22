declare module 'heart-rate' {
	interface HeartRateSensorReading extends SensorReading {
		readonly heartRate: number | null;
	}

	interface BatchedHeartRateSensorReading
		extends BatchedSensorReading<HeartRateSensorReading> {}

	type HeartRateSensor = Sensor<
		HeartRateSensorReading,
		BatchedHeartRateSensorReading
	>;

	type HeartRateSensorConstructor = new (
		options?: BatchedSensorOptions,
	) => HeartRateSensor;

	const HeartRateSensor: void | HeartRateSensorConstructor;

	export {
		HeartRateSensorReading,
		BatchedHeartRateSensorReading,
		HeartRateSensor,
	};
}
