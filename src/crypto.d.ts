declare module 'crypto' {
	//#region companion
	type TypedArray =
		| Int8Array
		| Uint8Array
		| Int16Array
		| Uint16Array
		| Int32Array
		| Uint32Array;

	export function getRandomValues(values: TypedArray): void;
	//#endregion
	//#region device
	interface Algorithm {
		name: 'SHA-256';
	}
	interface SubtleCrypto {
		digest(
			algorithm: string | Algorithm,
			data: ArrayBuffer | ArrayBufferView,
		): Promise<string>;
	}
	export const subtle: SubtleCrypto;
	//#endregion
}
