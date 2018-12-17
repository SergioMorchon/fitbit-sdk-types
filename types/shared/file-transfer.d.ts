declare module 'file-transfer' {
	type ReadyState =
		| 'error'
		| 'pending'
		| 'transferring'
		| 'transferred'
		| 'canceled';
	interface FileTransferOptions {}
	interface FileTransfer
		extends EventTarget<{
			change: Event;
		}> {
		readonly name: string;
		onchange: (event: Event) => void;
		readonly options: FileTransferOptions | undefined;
		readonly readyState: ReadyState;
		cancel(): void;
	}
	interface Outbox {
		enqueue(
			name: string,
			data: ArrayBuffer | ArrayBufferView,
			options?: FileTransferOptions,
		): Promise<FileTransfer>;
	}
	const outbox: Outbox;
	interface Inbox
		extends EventTarget<{
			newfile: Event;
		}> {
		onnewfile: (event: Event) => void;
		nextFile(): string | undefined;
	}

	const inbox: Inbox;
}
