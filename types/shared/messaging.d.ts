declare module 'messaging' {
	class CloseEvent extends Event {
		readonly CONNECTION_LOST: any;
		readonly PEER_INITIATED: any;
		readonly SOCKET_ERROR: any;
		readonly code:
			| CloseEvent['CONNECTION_LOST']
			| CloseEvent['PEER_INITIATED']
			| CloseEvent['SOCKET_ERROR'];
		readonly wasClean: boolean;
	}
	class ErrorEvent extends Error {
		readonly BUFFER_FULL: any;
		readonly code: ErrorEvent['BUFFER_FULL'];
	}
	class MessageEvent extends Event {
		readonly data: any;
	}
	interface MessageSocket
		extends EventTarget<{
			bufferedamountdecrease: Event;
			close: CloseEvent;
			error: ErrorEvent;
			message: MessageEvent;
			open: Event;
		}> {}
	class MessageSocket {
		readonly CLOSED: any;
		readonly OPEN: any;
		readonly MAX_MESSAGE_SIZE: number;
		readonly bufferedAmount: number;
		onbufferedamountdecrease: (event: Event) => void;
		onclose: (event: CloseEvent) => void;
		onerror: (event: ErrorEvent) => void;
		onmessage: (event: MessageEvent) => void;
		onopen: (event: Event) => void;
		readonly readyState: MessageSocket['CLOSED'] | MessageSocket['OPEN'];
		send(data: any): void;
	}
	const peerSocket: MessageSocket;
}
