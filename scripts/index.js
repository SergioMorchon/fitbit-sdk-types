#!/usr/bin/env node

import { parseArgs } from 'node:util';
import { install } from './install.js';
import { help } from './help.js';

const {
	values: { migrate = false, vscode = false },
	positionals: [command],
} = parseArgs({
	strict: true,
	options: {
		migrate: { type: 'boolean' },
		vscode: { type: 'boolean' },
	},
	allowPositionals: true,
});

switch (command) {
	case 'install':
		install({ migrate, vscode });
		break;
	default:
		help();
}
