declare module 'body-presence' {
	interface BodyPresenceReading {
		readonly present: boolean;
	}
	interface BodyPresenceSensor extends Sensor<BodyPresenceReading> {}
	class BodyPresenceSensor extends SensorBase {
		readonly present: boolean;
	}
}
