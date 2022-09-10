export const help = () => {
	console.info(`
    Add types to your Fitbit SDK project.

    Positional arguments:
        install: Installs this package types in your project.

    Optional arguments:
        --migrate: Move from JavaScript files to TypeScript files.
        --vscode: Adds extra configuration for Visual Studio Code IDE.
    `);
};
