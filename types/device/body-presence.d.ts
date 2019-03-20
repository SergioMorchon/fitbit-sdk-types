declare module 'body-presence' {
	interface BodyPresenceReading extends SensorReading {
		readonly present: boolean;
	}

	type BodyPresenceConstructor = new (options?: SensorOptions) => Sensor<
		BodyPresenceReading,
		never
	>;

	const BodyPresenceSensor: void | BodyPresenceConstructor;

	export { BodyPresenceReading, BodyPresenceSensor };
}
