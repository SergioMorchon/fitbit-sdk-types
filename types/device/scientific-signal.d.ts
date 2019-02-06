declare module 'scientific/signal' {
	class LinearFilter {
		readonly a: Float32Array;
		readonly b: Float32Array;
		readonly z: Float32Array;
		constructor(a: Float32Array, b: Float32Array, zi?: Float32Array);
		update(x: Float32Array): Float32Array;
	}
}
