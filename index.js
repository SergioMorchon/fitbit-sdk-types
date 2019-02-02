const { name: moduleName, version: moduleVersion } = require('./package.json');

const APPLY_COMMAND = 'apply';
const [, , applyArg] = process.argv;
if (applyArg !== APPLY_COMMAND) {
	console.log(
		`Run '${moduleName} ${APPLY_COMMAND}' to move this project to TypeScript`,
	);
	process.exit();
}

const { execSync } = require('child_process');
const { existsSync, readFileSync, writeFileSync, renameSync } = require('fs');
const { join } = require('path');
const glob = require('glob');

const execute = command => {
	console.log(command);
	execSync(command, {
		stdio: 'inherit',
	});
};

execute(`npm install --save-dev ${moduleName}@${moduleVersion}`);

const commonTsConfig = {
	extends: '../tsconfig.json',
	include: ['**/*.ts'],
};

const stringify = data => JSON.stringify(data, null, 2);

[
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
]
	.filter(({ directory }) => existsSync(directory))
	.forEach(({ directory, tsConfig }) => {
		console.log(`Migrating ${directory}:`);
		glob.sync(`${directory}/**/*.j{s,sx}`).forEach(fileName => {
			const renamedFileName = fileName.replace(/\.js(x)?$/, '.ts$1');
			console.log(`\t${fileName} > ${renamedFileName}`);
			renameSync(fileName, renamedFileName);
		});

		const tsConfigFileName = join(directory, 'tsconfig.json');
		console.log(`\t${tsConfigFileName}`);
		writeFileSync(tsConfigFileName, stringify(tsConfig));
		console.log('Done');
	});

const projectTsConfigFileName = './tsconfig.json';
const projectTsConfig = JSON.parse(
	readFileSync(projectTsConfigFileName).toString('utf-8'),
);
projectTsConfig.include = [
	'node_modules/fitbit-sdk-types',
	'**/*.ts',
	'**/*.tsx',
];
projectTsConfig.compilerOptions = {
	...projectTsConfig.compilerOptions,
	strict: true,
};
writeFileSync(projectTsConfigFileName, stringify(projectTsConfig));
