declare module 'cbor' {
	export function encode(data: any): ArrayBuffer;
	export function decode(data: ArrayBuffer | ArrayBufferView): any;
	export class Float {
		value: number;
	}
}
