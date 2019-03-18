declare module 'file-transfer' {
	interface FileTransferOptions {}
	interface FileTransfer
		extends EventTarget<{
			change: Event;
		}> {
		readonly name: string;
		onchange: (event: Event) => void;
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
			options?: FileTransferOptions,
		): Promise<FileTransfer>;
		enumerate(): Promise<FileTransfer>;
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
		pop(): Promise<InboxItem>;
	}

	const inbox: Inbox;
}
