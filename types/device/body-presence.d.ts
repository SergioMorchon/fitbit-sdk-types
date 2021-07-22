declare module 'body-presence' {
	interface BodyPresenceReading extends SensorReading {
		readonly present: boolean;
	}

	type BodyPresenceSensor = Sensor<BodyPresenceReading, never>;

	type BodyPresenceConstructor = new (
		options?: SensorOptions,
	) => BodyPresenceSensor;

	const BodyPresenceSensor: void | BodyPresenceConstructor;

	export { BodyPresenceReading, BodyPresenceSensor };
}
