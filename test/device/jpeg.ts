import { decodeSync } from 'jpeg';

decodeSync('file.jpeg', 'output-filename.txi', {
	delete: true,
	overwrite: true,
});
