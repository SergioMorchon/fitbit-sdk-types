#!/usr/bin/env node

import { install } from './install.js';
import { help } from './help.js';

const [, , command, ...args] = process.argv;

const INSTALL_COMMAND = 'install';

const MIGRATE_ARG = '--migrate';
const VSCODE_ARG = '--vscode';

switch (command) {
	case INSTALL_COMMAND:
		install({
			migrate: args.includes(MIGRATE_ARG),
			vscode: args.includes(VSCODE_ARG),
		});
		break;
	default:
		help({
			install: INSTALL_COMMAND,
			migrate: MIGRATE_ARG,
			vscode: VSCODE_ARG,
		});
}
