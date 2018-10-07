import * as fs from 'fs';
let json_object = fs.readFileSync('json.txt', 'json');
console.log('JSON guid: ' + json_object.guid);
