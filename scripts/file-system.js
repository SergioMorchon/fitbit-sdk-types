const {readdirSync, statSync} = require('fs');
const {sep} = require('path');

/**
 * @param {string} directoryName
 * @returns {IterableIterator<string>}
 */
function* walkFiles(directoryName) {
	const files = readdirSync(directoryName);
	for (const file of files) {
		const fullFileName = `${directoryName}${sep}${file}`;
		if (statSync(fullFileName).isDirectory()) {
			for (const fileName of walkFiles(fullFileName)) {
				yield fileName;
			}
		} else {
			yield fullFileName;
		}
	}
}

exports.walkFiles = walkFiles;