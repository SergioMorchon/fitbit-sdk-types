import * as fs from 'fs';
let file = fs.openSync('filename.bin', 'r');
let buffer = new ArrayBuffer(3);
let bytes_read = fs.readSync(file, buffer, 0, 3, 0);
let bytes = new Uint8Array(buffer);
console.log('bytes read: ', bytes_read);
console.log('bytes:', bytes[0], bytes[1], bytes[2]);
fs.closeSync(file);

let buffer2 = fs.readFileSync('filename.bin');
let bytes2 = new Uint8Array(buffer2);
console.log('bytes: ', bytes2[0], bytes2[1], bytes2[2]);
