interface StrictEventListener<EventMap> {
	addEventListener<EventName extends keyof EventMap>(
		type: EventName,
		listener: (event: EventMap[EventName]) => void,
	): void;
	removeEventListener<EventName extends keyof EventMap>(
		eventName: EventName,
	): void;
}
