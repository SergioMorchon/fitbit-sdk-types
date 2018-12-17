declare module 'scientific' {
	interface Scientific {
		range(stop: number): Float32Array;
		range(start: number, stop: number): Float32Array; // tslint:disable-line unified-signatures
		range(start: number, stop: number, step: number): Float32Array; // tslint:disable-line unified-signatures
		stride(arr: Float32Array, stride?: number): Float32Array;
		std(arr: Float32Array): number;
		variance(arr: Float32Array): number;
		argmax(arr: Float32Array): number;
		argmin(arr: Float32Array): number;
		max(arr: Float32Array): number;
		min(arr: Float32Array): number;
		sum(arr: Float32Array): number;
		mean(arr: Float32Array): number;
		div(a1: Float32Array, a2: Float32Array): Float32Array;
		div(a: Float32Array, c: number): Float32Array; // tslint:disable-line unified-signatures
		div(c: number, a: Float32Array): Float32Array; // tslint:disable-line unified-signatures
		mul(a1: Float32Array, a2: Float32Array): Float32Array;
		mul(a: Float32Array, c: number): Float32Array; // tslint:disable-line unified-signatures
		mul(c: number, a: Float32Array): Float32Array; // tslint:disable-line unified-signatures
		sub(a1: Float32Array, a2: Float32Array): Float32Array;
		sub(a: Float32Array, c: number): Float32Array; // tslint:disable-line unified-signatures
		sub(c: number, a: Float32Array): Float32Array; // tslint:disable-line unified-signatures
		add(a1: Float32Array, a2: Float32Array): Float32Array;
		add(a: Float32Array, c: number): Float32Array; // tslint:disable-line unified-signatures
		add(c: number, a: Float32Array): Float32Array; // tslint:disable-line unified-signatures
		sqrt(arr: Float32Array): Float32Array;
		square(arr: Float32Array): Float32Array;
		abs(arr: Float32Array): Float32Array;
	}
	const scientific: Scientific;

	namespace signal {
		class LinearFilter {
			readonly a: Float32Array;
			readonly b: Float32Array;
			readonly z: Float32Array;
			constructor(a: Float32Array, b: Float32Array, zi?: Float32Array);
			update(x: Float32Array): Float32Array;
		}
	}
}
