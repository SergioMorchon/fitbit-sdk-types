declare module 'crypto' {
	//#region companion
	type TypedArray =
		| Int8Array
		| Uint8Array
		| Int16Array
		| Uint16Array
		| Int32Array
		| Uint32Array;

	function getRandomValues(values: TypedArray): void;
	//#endregion
	//#region device
	type SHA_256 = 'SHA-256';
	type Algorithm = {
		name: SHA_256;
		[key: string]: any;
	};
	interface SubtleCrypto {
		digest(
			algorithm: SHA_256 | Algorithm,
			data: ArrayBuffer | ArrayBufferView,
		): Promise<string>;
	}
	const subtle: SubtleCrypto;
	//#endregion
}
