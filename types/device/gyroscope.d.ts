declare module 'gyroscope' {
	interface GyroscopeReading {
		readonly timestamp: number | null;
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}
	interface Gyroscope extends Sensor<GyroscopeReading>, GyroscopeReading {}
	class Gyroscope extends SensorBase {}
}
