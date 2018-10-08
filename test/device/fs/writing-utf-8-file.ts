import * as fs from 'fs';
let utf8_data = 'JavaScript is da best 😍';
fs.writeFileSync('utf8.txt', utf8_data, 'utf-8');
