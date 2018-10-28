declare module 'heart-rate' {
	interface HeartRateSensorReading {
		readonly heartRate: number | null;
		readonly timestamp: number | null;
	}
	interface HeartRateSensor
		extends Sensor<HeartRateSensorReading>,
			HeartRateSensorReading {}
	class HeartRateSensor extends SensorBase {}
}
