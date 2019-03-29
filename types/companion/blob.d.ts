interface BlobPropertyBag {
	type?: string;
}

declare class Blob {
	readonly size: number;
	readonly type: string;
	constructor(
		parts: ReadonlyArray<string | ArrayBuffer | ArrayBufferView>,
		options?: BlobPropertyBag,
	);
	slice(start?: number, end?: number, contentType?: string): Blob;
}
