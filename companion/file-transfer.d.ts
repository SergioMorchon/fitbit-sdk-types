declare module 'file-transfer' {
	interface FileTransferEventMap {
		change: Event;
	}
	type ReadyState =
		| 'error'
		| 'pending'
		| 'transferring'
		| 'transferred'
		| 'canceled';
	interface FileTransferOptions {}
	interface FileTransfer extends StrictEventListener<FileTransferEventMap> {
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
			options?: FileTransferOptions | undefined,
		): Promise<FileTransfer>;
	}
	export const outbox: Outbox;
}
