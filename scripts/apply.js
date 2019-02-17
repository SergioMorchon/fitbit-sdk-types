const { name: moduleName, version: moduleVersion } = require('../package.json');
const { execSync } = require('child_process');
const { existsSync, writeFileSync, renameSync, unlinkSync } = require('fs');
const { join } = require('path');
const { walkFiles } = require('./file-system');

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

/**
 * @param {any} data
 */
const stringify = data => JSON.stringify(data, null, 2);

/**
 * @param {string} target
 */
const getTypesPathForTarget = target =>
	`../node_modules/fitbit-sdk-types/types/${target}`;

const commonTsConfig = {
	extends: '../node_modules/@fitbit/sdk/sdk-tsconfig.json',
	compilerOptions: {
		strict: true,
	},
	include: ['**/*.ts'],
};

const fitbitProjects = [
	{
		directory: './app',
		tsConfig: {
			...commonTsConfig,
			compilerOptions: {
				types: [getTypesPathForTarget('device')],
			},
		},
	},
	{
		directory: './companion',
		tsConfig: {
			...commonTsConfig,
			compilerOptions: {
				types: [getTypesPathForTarget('companion')],
			},
		},
	},
	{
		directory: './settings',
		tsConfig: {
			...commonTsConfig,
			compilerOptions: {
				types: [getTypesPathForTarget('settings')],
			},
			include: [...commonTsConfig.include, '**/*.tsx'],
		},
	},
];

const defaultTsProjectFile = 'tsconfig.json';

exports.default = () => {
	tryRun(
		() =>
			execSync(`npm install --save-dev ${moduleDependency}`, {
				stdio: 'inherit',
			}),
		`installing the module ${moduleDependency}`,
	);

	fitbitProjects
		.filter(({ directory }) => existsSync(directory))
		.forEach(({ directory, tsConfig }) => {
			for (const fileName of walkFiles(directory)) {
				if (!/.*\.j(s|sx)$/.test(fileName)) {
					continue;
				}

				const renamedFileName = fileName.replace(/\.js(x)?$/, '.ts$1');
				tryRun(
					() => renameSync(fileName, renamedFileName),
					`renaming ${fileName} > ${renamedFileName}`,
				);

				const tsConfigFileName = join(directory, 'tsconfig.json');
				tryRun(
					() => writeFileSync(tsConfigFileName, stringify(tsConfig)),
					`creating ${tsConfigFileName}`,
				);
			}
		});

	tryRun(() => {
		unlinkSync(defaultTsProjectFile);
	}, `removing unneeded ${defaultTsProjectFile}`);
};
