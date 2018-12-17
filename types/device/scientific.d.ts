declare module 'scientific' {
	interface Scientific {
		range(stop: number): Float32Array;
		range(start: number, stop: number): Float32Array;
		range(start: number, stop: number, step: number): Float32Array;
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
		div(a: Float32Array, c: number): Float32Array;
		div(c: number, a: Float32Array): Float32Array;
		mul(a1: Float32Array, a2: Float32Array): Float32Array;
		mul(a: Float32Array, c: number): Float32Array;
		mul(c: number, a: Float32Array): Float32Array;
		sub(a1: Float32Array, a2: Float32Array): Float32Array;
		sub(a: Float32Array, c: number): Float32Array;
		sub(c: number, a: Float32Array): Float32Array;
		add(a1: Float32Array, a2: Float32Array): Float32Array;
		add(a: Float32Array, c: number): Float32Array;
		add(c: number, a: Float32Array): Float32Array;
		sqrt(arr: Float32Array): Float32Array;
		square(arr: Float32Array): Float32Array;
		abs(arr: Float32Array): Float32Array;
	}
	const scientific: Scientific;

	namespace signal {
		class LinearFilter {
			constructor(a: Float32Array, b: Float32Array, zi?: Float32Array);
			readonly a: Float32Array;
			readonly b: Float32Array;
			readonly z: Float32Array;
			update(x: Float32Array): Float32Array;
		}
	}
}
