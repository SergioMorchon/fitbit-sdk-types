// SHA-256 hash example
import * as Crypto from 'crypto';

const buffer = new ArrayBuffer(3);
const bytes = new Uint8Array(buffer);
bytes[0] = 1;
bytes[1] = 2;
bytes[2] = 3;

Crypto.subtle.digest('SHA-256', buffer).then(hash => {
	console.log(hash);
});
Crypto.subtle.digest({ name: 'SHA-256', foo: 'bar' }, buffer).then(hash => {
	console.log(hash);
});
