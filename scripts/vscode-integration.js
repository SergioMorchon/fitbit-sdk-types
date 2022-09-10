export const getSettingsFile = () => ({
	'task.allowAutomaticTasks': 'on',
});

/**
 * @typedef TypeScriptWatchTask
 * @property {string} label
 * @property {string} tsconfig
 */

const getTypeScriptWatchTask = (
	/** @type {TypeScriptWatchTask} */
	{ label, tsconfig },
) => ({
	type: 'typescript',
	tsconfig,
	label,
	option: 'watch',
	problemMatcher: ['$tsc-watch'],
	group: 'build',
	hide: true,
	runOptions: {
		runOn: 'folderOpen',
	},
	isBackground: true,
	presentation: {
		echo: false,
		reveal: 'never',
		panel: 'shared',
		showReuseMessage: false,
	},
});

export const getTasksFile = (
	/** @type {ReadonlyArray<TypeScriptWatchTask>} */ tasks,
) => ({
	version: '2.0.0',
	tasks: tasks.map(getTypeScriptWatchTask),
});

export const VSCODE_PATH = '.vscode';
export const SETTINGS_FILE_NAME = 'settings.json';
export const TASKS_FILE_NAME = 'tasks.json';
