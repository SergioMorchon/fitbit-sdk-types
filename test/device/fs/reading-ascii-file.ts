import * as fs from 'fs';
let ascii_read = fs.readFileSync('ascii.txt', 'ascii');
console.log('ASCII Data: ' + ascii_read);
