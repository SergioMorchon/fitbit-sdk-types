declare module 'scientific' {
	function range(stop: number): Float32Array;
	function range(start: number, stop: number): Float32Array;
	function range(start: number, stop: number, step: number): Float32Array;
	function stride(arr: Float32Array, stride?: number): Float32Array;
	function std(arr: Float32Array): number;
	function variance(arr: Float32Array): number;
	function argmax(arr: Float32Array): number;
	function argmin(arr: Float32Array): number;
	function max(arr: Float32Array): number;
	function min(arr: Float32Array): number;
	function sum(arr: Float32Array): number;
	function mean(arr: Float32Array): number;
	function div(a1: Float32Array, a2: Float32Array): Float32Array;
	function div(a: Float32Array, c: number): Float32Array;
	function div(c: number, a: Float32Array): Float32Array;
	function mul(a1: Float32Array, a2: Float32Array): Float32Array;
	function mul(a: Float32Array, c: number): Float32Array;
	function mul(c: number, a: Float32Array): Float32Array;
	function sub(a1: Float32Array, a2: Float32Array): Float32Array;
	function sub(a: Float32Array, c: number): Float32Array;
	function sub(c: number, a: Float32Array): Float32Array;
	function add(a1: Float32Array, a2: Float32Array): Float32Array;
	function add(a: Float32Array, c: number): Float32Array;
	function add(c: number, a: Float32Array): Float32Array;
	function sqrt(arr: Float32Array): Float32Array;
	function square(arr: Float32Array): Float32Array;
	function abs(arr: Float32Array): Float32Array;
}
