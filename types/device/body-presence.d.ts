declare module 'body-presence' {
	interface BodyPresenceReading extends SensorReading {
		readonly present: boolean;
	}

	interface BodyPresenceConstructor {
		new (options?: SensorOptions): Sensor<BodyPresenceReading, never>;
	}

	const BodyPresenceSensor: void | BodyPresenceConstructor;

	export { BodyPresenceReading, BodyPresenceSensor };
}
