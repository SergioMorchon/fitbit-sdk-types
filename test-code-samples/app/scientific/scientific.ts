import {
	range,
	stride,
	std,
	variance,
	argmax,
	argmin,
	max,
	min,
	mean,
	div,
	mul,
	sub,
	add,
	sqrt,
	square,
	abs,
	diff,
	cumsum,
	clip,
} from 'scientific';
const arr = new Float32Array([1, 2, 3, 4, 5]);
const range1: Float32Array = range(3);
const range2: Float32Array = range(1, 3);
const range3: Float32Array = range(1, 10, 2);
const stride1: Float32Array = stride(arr, 3);
const std1: number = std(arr);
const variance1: number = variance(arr);
const argmax1: number = argmax(arr);
const argmin1: number = argmin(arr);
const max1: number = max(arr);
const min1: number = min(arr);
const mean1: number = mean(arr);
const div1: Float32Array = div(arr, arr);
const div2: Float32Array = div(arr, 3);
const div3: Float32Array = div(3, arr);
const mul1: Float32Array = mul(arr, arr);
const mul2: Float32Array = mul(arr, 3);
const mul3: Float32Array = mul(3, arr);
const sub1: Float32Array = sub(arr, arr);
const sub2: Float32Array = sub(arr, 3);
const sub3: Float32Array = sub(3, arr);
const add1: Float32Array = add(arr, arr);
const add2: Float32Array = add(arr, 3);
const add3: Float32Array = add(3, arr);
const sqrt1: Float32Array = sqrt(arr);
const square1: Float32Array = square(arr);
const abs1: Float32Array = abs(arr);
const diff1: Float32Array = diff(arr);
const cumsum1: Float32Array = cumsum(arr);
const clip1: Float32Array = clip(arr, 1, 2);
const clip2: Float32Array = clip(arr, 1, undefined);
const clip3: Float32Array = clip(arr, undefined, 2);
