declare module 'orientation' {
	type Quaternion = [number, number, number, number];
	interface BatchedOrientationSensorReading
		extends BatchedSensorReading<
			SensorReading & {
				readonly i: number;
				readonly j: number;
				readonly k: number;
				readonly scalar: number;
			}
		> {}

	interface OrientationSensorReading extends SensorReading {
		readonly quaternion: Quaternion | null;
	}

	type OrientationSensor = Sensor<
		OrientationSensorReading,
		BatchedOrientationSensorReading
	>;

	type OrientationSensorConstructor = new (
		options?: BatchedSensorOptions,
	) => OrientationSensor;

	const OrientationSensor: void | OrientationSensorConstructor;

	export {
		BatchedOrientationSensorReading,
		OrientationSensorReading,
		OrientationSensor,
	};
}
