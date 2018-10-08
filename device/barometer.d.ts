declare module 'barometer' {
	interface BarometerReading {
		readonly pressure: number | null;
		readonly timestamp: number | null;
	}
	interface Barometer extends Sensor<BarometerReading>, BarometerReading {}
	export class Barometer extends SensorBase {}
}
