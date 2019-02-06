import { LinearFilter } from 'scientific/signal';

const numSamples = 4096;
const sampleFreq = 44100;
const X = new Float32Array(numSamples);
for (let i = 0; i < X.length; i++) {
	const t = i / sampleFreq;
	// Form a signal containing a 50 Hz sinusoid of amplitude 0.7
	let S = 0.7 * Math.sin(2 * Math.PI * 50 * t);
	// ...and a 120 Hz sinusoid of amplitude 1.
	S += Math.sin(2 * Math.PI * 120 * t);
	// Corrupt the signal with zero-mean white noise with a variance of 4.
	X[i] = S + 2 * Math.random();
}
const filter50hz = new LinearFilter(
	new Float32Array([
		2.88394643e-9,
		0.0,
		-8.65183928e-9,
		0.0,
		8.65183928e-9,
		0.0,
		-2.88394643e-9,
	]),
	new Float32Array([
		1,
		-5.99415495,
		14.97093756,
		-19.94220015,
		14.94252458,
		-5.97142422,
		0.99431717,
	]),
);
const y: Float32Array = filter50hz.update(X);
