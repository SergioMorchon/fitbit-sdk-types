declare module 'heart-rate' {
	interface HeartRateSensorReading extends SensorReading {
		readonly heartRate: number | null;
	}
	interface HeartRateSensor
		extends Sensor<HeartRateSensorReading>,
			HeartRateSensorReading {}
	class HeartRateSensor extends SensorBase {}
}
