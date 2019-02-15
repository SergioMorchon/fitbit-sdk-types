declare module 'orientation' {
	type Quaternion = [number, number, number, number];
	interface BatchReading extends SensorReading {
		readonly i: number;
		readonly j: number;
		readonly k: number;
		readonly scalar: number;
	}
	interface OrientationSensor extends Sensor<BatchReading> {
		readonly quaternion: Quaternion;
		readonly timestamp: number;
	}
	class OrientationSensor extends SensorBase {}
}
