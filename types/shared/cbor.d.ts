declare module 'cbor' {
	function encode(data: any): ArrayBuffer;
	function decode(data: ArrayBuffer | ArrayBufferView): any;
	class Float {
		value: number;
	}
}
