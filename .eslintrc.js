module.exports = {
	extends: ['prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
	},
	rules: {
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public',
			},
		],
		'@typescript-eslint/interface-name-prefix': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-namespace': 'error',
	},
};
