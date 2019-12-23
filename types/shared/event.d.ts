interface EventTarget<EventMap = {}> {
	addEventListener<EventName extends keyof EventMap>(
		eventName: EventName,
		eventListener: (eventName: EventMap[EventName]) => void,
	): void;
	removeEventListener<EventName extends keyof EventMap>(
		eventName: EventName,
		eventListener: (event: EventMap[EventName]) => void,
	): void;
}

declare class Event {
	readonly defaultPrevented: boolean;
	readonly target: EventTarget;
	readonly type: string;
	preventDefault(): void;
	stopImmediatePropagation(): void;
	stopPropagation(): void;
}
