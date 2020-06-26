#!/usr/bin/env node

const { name: moduleName, version: moduleVersion } = require('../package.json');
const { execSync } = require('child_process');
const {
	existsSync,
	writeFileSync,
	readFileSync,
	readdirSync,
	statSync,
	renameSync,
} = require('fs');
const { join } = require('path');

const moduleDependency = `${moduleName}@${moduleVersion}`;

/**
 * @param {string} root
 * @returns {Generator<string>}
 */
function* walkFiles(root) {
	for (const fileName of readdirSync(root)) {
		const path = join(root, fileName);
		if (statSync(path).isDirectory()) {
			yield* walkFiles(path);
			continue;
		}

		yield path;
	}
}

/**
 * @param {() => void} fn
 * @param {string} action
 */
const tryRun = (fn, action) => {
	try {
		console.log(action);
		fn();
	} catch (error) {
		console.error(`${action}: ${error}`);
	}
};

tryRun(
	() =>
		execSync(`npm install --save-dev ${moduleDependency}`, {
			stdio: 'inherit',
		}),
	`Add dev dependency ${moduleDependency}`,
);

const tsconfigFileName = 'tsconfig.json';
for (const folder of ['app', 'companion', 'settings']) {
	if (!existsSync(folder)) {
		continue;
	}

	const sourceFile = join(__dirname, 'scaffolding', folder, tsconfigFileName);
	const targetFile = join(folder, tsconfigFileName);
	tryRun(
		() => writeFileSync(targetFile, readFileSync(sourceFile, 'utf-8')),
		`Create ${targetFile}`,
	);

	for (const fileName of walkFiles(folder)) {
		const result = /^(.*)\.js(x)?$/.exec(fileName);
		if (!result) {
			continue;
		}

		const [, name, x = ''] = result;
		const targetName = `${name}.ts${x}`;
		tryRun(
			() => renameSync(fileName, targetName),
			`Rename ${fileName} to ${targetName}`,
		);
	}
}
