const { name: moduleName } = require('../package.json');
const { default: apply } = require('./apply');

const APPLY_COMMAND = 'apply';
const [, , applyArg] = process.argv;
if (applyArg !== APPLY_COMMAND) {
	console.log(
		`Run '${moduleName} ${APPLY_COMMAND}' to move this project to TypeScript`,
	);
	process.exit();
}

apply();
