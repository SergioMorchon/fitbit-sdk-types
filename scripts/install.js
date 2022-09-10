import { execSync } from 'node:child_process';
import {
	existsSync,
	writeFileSync,
	readFileSync,
	readdirSync,
	statSync,
	renameSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	VSCODE_PATH,
	TASKS_FILE_NAME,
	getTasksFile,
	SETTINGS_FILE_NAME,
	getSettingsFile,
} from './vscode-integration.js';

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

const folders = ['app', 'companion', 'settings'];

const renameToTs = () => {
	for (const folder of folders) {
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
};

const configureVisualStudioCode = (
	/** @type {Array<Readonly<{label: string, tsconfig: string}>>} */ tasks,
) => {
	tryRun(() => {
		writeFileSync(
			join(VSCODE_PATH, TASKS_FILE_NAME),
			JSON.stringify(getTasksFile(tasks), null, '\t'),
		);
		writeFileSync(
			join(VSCODE_PATH, SETTINGS_FILE_NAME),
			JSON.stringify(getSettingsFile(), null, '\t'),
		);
	}, 'Visual Studio Code integration');
};

export const install = (
	/** @type {{migrate: boolean, vscode: boolean}} */
	{ migrate, vscode },
) => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const pkg = JSON.parse(
		readFileSync(join(__dirname, '../package.json'), 'utf-8'),
	);
	const moduleDependency = `${pkg.name}@${pkg.version}`;

	tryRun(
		() =>
			execSync(`npm install --save-dev ${moduleDependency}`, {
				stdio: 'inherit',
			}),
		`Add dev dependency ${moduleDependency}`,
	);

	const tsconfigFileName = 'tsconfig.json';
	/** @type {Array<Readonly<{label: string, tsconfig: string}>>} */
	const tasks = [];

	for (const folder of folders) {
		if (!existsSync(folder)) {
			continue;
		}

		const sourceFile = join(__dirname, 'scaffolding', folder, tsconfigFileName);
		const targetFile = join(folder, tsconfigFileName);
		tryRun(
			() => writeFileSync(targetFile, readFileSync(sourceFile, 'utf-8')),
			`Create ${targetFile}`,
		);
		tasks.push({
			label: `TS ${folder}`,
			tsconfig: `${folder}/${tsconfigFileName}`,
		});
	}

	if (migrate) {
		renameToTs();
	}

	if (vscode) {
		configureVisualStudioCode(tasks);
	}
};
