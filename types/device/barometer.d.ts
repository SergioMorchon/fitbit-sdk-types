declare module 'barometer' {
	interface BarometerReading extends SensorReading {
		readonly pressure: number | null;
	}
	interface Barometer extends Sensor<BarometerReading>, BarometerReading {}
	class Barometer extends SensorBase {}
}
