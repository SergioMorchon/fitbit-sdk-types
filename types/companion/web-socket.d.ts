declare class MessageEvent extends Event {
	readonly data: any;
	constructor(type: string, eventInitDict?: MessageEventInit | undefined);
}

interface MessageEventInit {
	data: any;
}

declare class CloseEvent extends Event {
	readonly code: number;
	readonly reason: string;
	readonly wasClean: boolean;
}

type BinaryType = 'blob' | 'arraybuffer';

interface WebSocket
	extends EventTarget<{
		close: CloseEvent;
		error: Event;
		message: MessageEvent;
		open: Event;
	}> {
	readonly CONNECTING: 0;
	readonly OPEN: 1;
	readonly CLOSING: 2;
	readonly CLOSED: 3;

	binaryType: BinaryType;
	readonly bufferedAmount: number;
	onclose: ((event: CloseEvent) => void) | void;
	onerror: ((event: Event) => void) | void;
	onmessage: ((event: MessageEvent) => void) | void;
	onopen: ((event: Event) => void) | void;

	readonly readyState:
		| WebSocket['CONNECTING']
		| WebSocket['OPEN']
		| WebSocket['CLOSING']
		| WebSocket['CLOSED'];
	readonly url: string;
	close(code?: number): void;
	send(data: string | ArrayBuffer | ArrayBufferView | Blob): void;
}

declare class WebSocket implements WebSocket {
	constructor(url: string, protocols?: string | ReadonlyArray<string>);
}
