import * as fs from 'fs';

if (fs.existsSync('/private/data/my-file.txt')) {
	console.log('file exists!');
}
