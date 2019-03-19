declare module 'orientation' {
	type Quaternion = [number, number, number, number];
	interface BatchedOrientationSensorReading extends SensorReading {
		readonly i: number;
		readonly j: number;
		readonly k: number;
		readonly scalar: number;
	}

	interface OrientationSensorReading extends SensorReading {
		readonly quaternion: Quaternion | null;
	}

	interface OrientationSensorConstructor {
		new (options?: SensorOptions): Sensor<BatchedOrientationSensorReading> &
			OrientationSensorReading;
	}

	const OrientationSensor: void | OrientationSensorConstructor;

	export {
		BatchedOrientationSensorReading as OrientationSensorReading,
		OrientationSensor,
	};
}
