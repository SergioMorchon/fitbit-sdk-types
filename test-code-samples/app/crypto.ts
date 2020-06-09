import * as Crypto from 'crypto';

const buffer = new ArrayBuffer(16);

Crypto.subtle.digest('SHA-256', buffer).then((hash) => {
	const h = new Uint8Array(hash);
});

const key = new ArrayBuffer(32);

for (let i = 0; i < 32; i++) {
	key[i] = i;
}

Crypto.subtle
	.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, [
		'sign',
		'verify',
	])

	.then((secret) => {
		console.log(`Secret is: ${secret}`);

		Crypto.subtle
			.sign('HMAC', secret, buffer)
			.then((signature) => {
				const sgn = new Uint8Array(signature);
				console.log(`HMAC signature is: ${sgn}`);

				Crypto.subtle
					.verify('HMAC', secret, signature, buffer)
					.then((success) => {
						console.log(success);
						if (success) {
							console.log('Signature was successfully verified!');
						} else {
							console.log('Bad signature!');
						}
					});
			})
			.catch((e) => {
				console.error(e);
			});
	})
	.catch((e) => {
		console.error(e);
	});
