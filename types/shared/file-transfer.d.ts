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
		enqueueFile(file: string, name?: string): Promise<FileTransfer>;
	}
	const outbox: Outbox;

	interface InboxItem {
		readonly bodyUsed: boolean;
		readonly length: number;
		readonly name: string;
		arrayBuffer(): Promise<ArrayBuffer>;
		cbor(): Promise<any>;
		json(): Promise<any>;
		text(): Promise<string>;
	}
	interface NewFileEvent extends Event {
		readonly file: InboxItem;
	}
	interface Inbox
		extends EventTarget<{
			newfile: NewFileEvent;
		}> {
		onnewfile: (event: NewFileEvent) => void;
		/**
		 * Only for device
		 */
		nextFile(): string | undefined;
		/**
		 * Only for companion
		 */
		pop(): Promise<InboxItem>;
	}

	const inbox: Inbox;
}
