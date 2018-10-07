import { listDirSync } from 'fs';
const listDir = listDirSync('private/data');
var dirIter;
while ((dirIter = listDir.next()) && !dirIter.done) {
	console.log(dirIter.value);
}
