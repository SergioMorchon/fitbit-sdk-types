declare module 'body-presence' {
	interface BodyPresenceReading extends SensorReading {
		readonly present: boolean;
	}

	interface BodyPresenceConstructor {
		new (options?: SensorOptions): Sensor<BodyPresenceReading> &
			BodyPresenceReading;
	}

	const BodyPresenceSensor: void | BodyPresenceConstructor;

	export { BodyPresenceReading, BodyPresenceSensor };
}
