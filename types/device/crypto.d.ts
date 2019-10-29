declare module 'crypto' {
	type BufferSource =
		| ArrayBuffer
		| Int8Array
		| Uint8Array
		| Int16Array
		| Uint16Array
		| Int32Array
		| Uint32Array;
	type TypedArray =
		| Int8Array
		| Uint8Array
		| Int16Array
		| Uint16Array
		| Int32Array
		| Uint32Array;
	type CryptoKeyUsage =
		| 'encrypt'
		| 'decrypt'
		| 'sign'
		| 'verify'
		| 'deriveKey'
		| 'deriveBits'
		| 'wrapKey'
		| 'unwrapKey';

	interface AlgorithmAesGcm {
		additionalData: BufferSource;
		iv: BufferSource;
		name: 'AES-GCM';
		tagLength: number | void;
	}

	type Algorithm<T extends string> = T | { name: T };
	interface KeyAlgorithm {
		name: string;
		hash: string | void;
	}
	class CryptoKey {
		readonly algorithm: KeyAlgorithm;
		readonly extractable: boolean;
		readonly type: 'secret' | 'public' | 'private';
		readonly usages: CryptoKeyUsage[];
	}
	interface SubtleCrypto {
		decrypt(
			algorithm: AlgorithmAesGcm,
			key: CryptoKey,
			data: BufferSource,
		): Promise<ArrayBuffer>;
		digest(
			algorithm: Algorithm<'SHA-256'>,
			data: BufferSource,
		): Promise<ArrayBuffer>;
		exportKey(format: 'raw', key: CryptoKey): Promise<ArrayBuffer>;
		importKey(
			format: 'raw',
			keyData: BufferSource,
			algorithm: string | KeyAlgorithm,
			extractable: boolean,
			keyUsages: string[],
		): Promise<CryptoKey>;
		sign(
			algorithm: Algorithm<'HMAC'>,
			key: CryptoKey,
			data: BufferSource,
		): Promise<ArrayBuffer>;
		verify(
			algorithm: Algorithm<'HMAC'>,
			key: CryptoKey,
			signature: BufferSource,
			data: BufferSource,
		): Promise<boolean>;
	}
	const subtle: SubtleCrypto;
	const getRandomValues: (values: TypedArray) => void;
}
