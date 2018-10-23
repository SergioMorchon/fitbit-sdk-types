interface EventInit {}
interface EventListener {}
interface EventTarget<EventMap = {}> {
	addEventListener<EventName extends keyof EventMap>(
		type: EventName,
		listener: (event: EventMap[EventName]) => void,
	): void;
	removeEventListener<EventName extends keyof EventMap>(
		eventName: EventName,
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
