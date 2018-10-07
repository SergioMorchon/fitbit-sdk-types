import * as fs from 'fs';
var file = fs.openSync('filename.bin', 'w+');
var buffer = new ArrayBuffer(3);
var bytes = new Uint8Array(buffer);
bytes[0] = 1;
bytes[1] = 2;
bytes[2] = 3;
fs.writeSync(file, buffer);
fs.closeSync(file);
