declare module 'heart-rate' {
	interface HeartRateSensorReading extends SensorReading {
		readonly heartRate: number | null;
	}

	interface BatchedHeartRateSensorReading
		extends BatchedSensorReading<HeartRateSensorReading> {}

	type HeartRateSensorConstructor = new (options?: SensorOptions) => Sensor<
		HeartRateSensorReading,
		BatchedHeartRateSensorReading
	>;

	const HeartRateSensor: void | HeartRateSensorConstructor;

	export {
		HeartRateSensorReading,
		BatchedHeartRateSensorReading,
		HeartRateSensor,
	};
}
