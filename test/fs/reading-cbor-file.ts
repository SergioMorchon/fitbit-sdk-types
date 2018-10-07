import * as fs from 'fs';
let json_object = fs.readFileSync('cbor.txt', 'cbor');
console.log('Object guid: ' + json_object.guid);
