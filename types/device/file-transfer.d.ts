declare module 'file-transfer' {
	interface FileTransfer
		extends EventTarget<{
			change: Event;
		}> {
		readonly name: string;
		readonly readyState:
			| 'canceled'
			| 'error'
			| 'pending'
			| 'transferred'
			| 'transferring';
		cancel(): void;
	}
	interface Outbox {
		enqueue(
			name: string,
			data: ArrayBuffer | ArrayBufferView,
		): Promise<FileTransfer>;
		enqueueFile(file: string, name?: string): Promise<FileTransfer>;
		enumerate(): Promise<FileTransfer[]>;
	}
	const outbox: Outbox;

	interface Inbox
		extends EventTarget<{
			newfile: Event;
		}> {
		nextFile(name?: string): string | undefined;
	}

	const inbox: Inbox;
}
