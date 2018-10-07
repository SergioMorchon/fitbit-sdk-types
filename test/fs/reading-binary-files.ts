import * as fs from 'fs';
let file = fs.openSync('filename.bin', 'r');
let buffer = new ArrayBuffer(3);
fs.readSync(file, buffer, 0, 3, 0);
let bytes = new Uint8Array(buffer);
console.log('bytes:', bytes[0], bytes[1], bytes[2]);
fs.closeSync(file);
