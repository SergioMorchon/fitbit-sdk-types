const { name: moduleName, version: moduleVersion } = require('../package.json');
const { execSync } = require('child_process');
const { existsSync, readFileSync, writeFileSync, renameSync } = require('fs');
const { join } = require('path');
const {walkFiles} = require('./file-system');

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

const commonTsConfig = {
	extends: '../tsconfig.json',
	include: ['**/*.ts'],
};

const fitbitProjects = [
	{
		directory: './app',
		tsConfig: {
			...commonTsConfig,
			include: [
				...commonTsConfig.include,
				'../node_modules/fitbit-sdk-types/types/device.d.ts',
			],
		},
	},
	{
		directory: './companion',
		tsConfig: {
			...commonTsConfig,
			include: [
				...commonTsConfig.include,
				'../node_modules/fitbit-sdk-types/types/companion.d.ts',
			],
		},
	},
	{
		directory: './settings',
		tsConfig: {
			...commonTsConfig,
			include: [
				...commonTsConfig.include,
				'**/*.tsx',
				'../node_modules/fitbit-sdk-types/types/settings.d.ts',
			],
		},
	},
];

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
			};
		});

	const projectTsConfigFileName = './tsconfig.json';
	const projectTsConfig = JSON.parse(
		readFileSync(projectTsConfigFileName).toString('utf-8'),
	);
	projectTsConfig.include = [
		'node_modules/fitbit-sdk-types/types',
		'**/*.ts',
		'**/*.tsx',
	];
	projectTsConfig.compilerOptions = {
		...projectTsConfig.compilerOptions,
		strict: true,
	};
	tryRun(
		() => writeFileSync(projectTsConfigFileName, stringify(projectTsConfig)),
		`adding type references to ${projectTsConfigFileName}`,
	);
};
