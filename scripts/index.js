#!/usr/bin/env node

const { name: moduleName } = require('../package.json');
const { default: apply } = require('./apply');

const APPLY_TS_COMMAND = 'apply-ts';
const APPLY_JS_COMMAND = 'apply-js';
const [, , command] = process.argv;
if (command !== APPLY_JS_COMMAND && command !== APPLY_TS_COMMAND) {
	console.log(
		`Run '${moduleName} ${APPLY_JS_COMMAND}' to enhance your JavaScript project, or '${moduleName} ${APPLY_TS_COMMAND}' to move your project to the full TypeScript experience.`,
	);
	process.exit();
}

apply(command === APPLY_TS_COMMAND ? 'ts' : 'js');
