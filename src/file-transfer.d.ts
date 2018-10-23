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
	//#region companion
	interface Outbox {
		enqueue(
			name: string,
			data: ArrayBuffer | ArrayBufferView,
			options?: FileTransferOptions | undefined,
		): Promise<FileTransfer>;
	}
	export const outbox: Outbox;
	//#endregion
	//#region device
	type FileName = string;
	interface Inbox
		extends EventTarget<{
				newfile: Event;
			}> {
		onnewfile: (event: Event) => void;
		nextFile(): FileName | undefined;
	}

	export const inbox: Inbox;
	//#endregion
}
