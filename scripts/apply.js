const { name: moduleName, version: moduleVersion } = require('../package.json');
const { execSync } = require('child_process');
const { existsSync, writeFileSync, renameSync } = require('fs');
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

const es2015 = {
	target: 'es2015',
	lib: ['es2015'],
};

const fitbitProjects = {
	'./app': {
		tsConfig: {
			extends: '../tsconfig.json',
			include: ['**/*.ts', getTypesPathForTarget('device')],
		},
		jsConfig: {
			extends: '../tsconfig.json',
			compilerOptions: {
				checkJs: true,
			},
			include: ['**/*.js', getTypesPathForTarget('device')],
		},
	},
	'./companion': {
		tsConfig: {
			extends: '../tsconfig.json',
			compilerOptions: {
				...es2015,
			},
			include: ['**/*.ts', getTypesPathForTarget('companion')],
		},
		jsConfig: {
			extends: '../tsconfig.json',
			compilerOptions: {
				...es2015,
				checkJs: true,
			},
			include: ['**/*.js', getTypesPathForTarget('companion')],
		},
	},
	'./settings': {
		tsConfig: {
			extends: '../tsconfig.json',
			compilerOptions: {
				...es2015,
			},
			include: ['**/*.ts', '**/*.tsx', getTypesPathForTarget('settings')],
		},
		jsConfig: {
			extends: '../tsconfig.json',
			compilerOptions: {
				...es2015,
				checkJs: true,
			},
			include: ['**/*.js', '**/*.jsx', getTypesPathForTarget('settings')],
		},
	},
};

exports.default = (/** @type {'ts' | 'js'} */ mode) => {
	tryRun(
		() =>
			execSync(`npm install --save-dev ${moduleDependency}`, {
				stdio: 'inherit',
			}),
		`installing the module ${moduleDependency}`,
	);

	Object.entries(fitbitProjects)
		.filter(([directory]) => existsSync(directory))
		.forEach(([directory, { tsConfig, jsConfig }]) => {
			if (mode === 'ts') {
				for (const fileName of walkFiles(directory)) {
					if (!/.*\.j(s|sx)$/.test(fileName)) {
						continue;
					}

					const renamedFileName = fileName.replace(/\.js(x)?$/, '.ts$1');
					tryRun(
						() => renameSync(fileName, renamedFileName),
						`renaming ${fileName} > ${renamedFileName}`,
					);
				}
			}

			const configFileName = join(
				directory,
				mode === 'ts' ? 'tsconfig.json' : 'jsconfig.json',
			);
			tryRun(
				() =>
					writeFileSync(
						configFileName,
						stringify(mode === 'ts' ? tsConfig : jsConfig),
					),
				`creating ${configFileName}`,
			);
		});
};
