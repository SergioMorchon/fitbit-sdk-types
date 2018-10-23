declare module 'orientation' {
	type Quaternion = [number, number, number, number];
	interface BatchReading {
		readonly i: number;
		readonly j: number;
		readonly k: number;
		readonly scalar: number;
		readonly timestamp: number;
	}
	interface OrientationSensor extends Sensor<BatchReading> {
		readonly quaternion: Quaternion;
		readonly timestamp: number;
	}
	export class OrientationSensor extends SensorBase {}
}
