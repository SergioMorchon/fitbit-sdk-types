#!/usr/bin/env node

const { name: moduleName, version: moduleVersion } = require('../package.json');
const { execSync } = require('child_process');
const { existsSync, writeFileSync, readFileSync } = require('fs');
const { join } = require('path');

const moduleDependency = `${moduleName}@${moduleVersion}`;

/**
 * @param {() => void} fn
 * @param {string} action
 */
const tryRun = (fn, action) => {
	try {
		console.log(`Start ${action}`);
		fn();
		console.log('Done');
	} catch (error) {
		console.error(`Error while ${action}: ${error}`);
	}
};

tryRun(
	() =>
		execSync(`npm install --save-dev ${moduleDependency}`, {
			stdio: 'inherit',
		}),
	`Adding ${moduleDependency}`,
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
		`Adding ${targetFile}`,
	);
}
