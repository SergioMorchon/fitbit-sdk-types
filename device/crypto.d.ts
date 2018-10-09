declare module 'crypto' {
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
}
