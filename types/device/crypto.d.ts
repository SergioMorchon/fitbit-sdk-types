declare module 'crypto' {
	type SHA_256 = 'SHA-256';
	interface Algorithm {
		name: SHA_256;
		[key: string]: any;
	}
	interface SubtleCrypto {
		digest(
			algorithm: SHA_256 | Algorithm,
			data: ArrayBuffer | ArrayBufferView,
		): Promise<string>;
	}
	const subtle: SubtleCrypto;
}
