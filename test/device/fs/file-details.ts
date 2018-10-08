import * as fs from 'fs';
let stats = fs.statSync('filename.txt');
if (stats) {
	console.log('File size: ' + stats.size + ' bytes');
	console.log('Last modified: ' + stats.mtime);
}
