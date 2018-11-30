declare module 'messaging' {
	type CloseCode = 'CONNECTION_LOST' | 'PEER_INITIATED' | 'SOCKET_ERROR';
	class CloseEvent extends Event {
		readonly CONNECTION_LOST: 'CONNECTION_LOST';
		readonly PEER_INITIATED: 'PEER_INITIATED';
		readonly SOCKET_ERROR: 'SOCKET_ERROR';
		readonly code: CloseCode;
		readonly wasClean: boolean;
	}
	type ErrorCode = 'BUFFER_FULL';
	class ErrorEvent extends Error {
		readonly BUFFER_FULL: 'BUFFER_FULL';
		readonly code: ErrorCode;
	}
	class MessageEvent extends Event {
		readonly data: any;
	}
	type ReadyState = 'CLOSED' | 'OPEN';
	interface MessageSocket
		extends EventTarget<{
			bufferedamountdecrease: Event;
			close: CloseEvent;
			error: ErrorEvent;
			message: MessageEvent;
			open: Event;
		}> {}
	class MessageSocket {
		readonly CLOSED: 'CLOSED';
		readonly OPEN: 'OPEN';
		readonly MAX_MESSAGE_SIZE: number;
		readonly bufferedAmount: number;
		onbufferedamountdecrease: (event: Event) => void;
		onclose: (event: CloseEvent) => void;
		onerror: (event: ErrorEvent) => void;
		onmessage: (event: MessageEvent) => void;
		onopen: (event: Event) => void;
		readonly readyState: ReadyState;
		send(data: any): void;
	}
	const peerSocket: MessageSocket;
}
