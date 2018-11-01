import * as fs from 'fs';
let utf8_read = fs.readFileSync('utf8.txt', 'utf-8');
console.log('UTF-8 Data: ' + utf8_read);
