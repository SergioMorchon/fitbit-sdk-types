import * as fs from 'fs';
let ascii_data = 'Lorem ipsum dolor sit amet, sodales morbi, vestibulum vel.';
fs.writeFileSync('ascii.txt', ascii_data, 'ascii');
