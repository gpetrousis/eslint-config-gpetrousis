module.exports = {
	env: {
		node: true,
		es2020: true
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings'
	],
	plugins: [
	],
	rules: {
		'strict': 'off',
		'no-undef': 1,
		'nonblock-statement-body-position': ['error', 'beside'],
		'curly': ['error', 'multi-line'],
		'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
		'no-console': 'on',
		'arrow-parens': ['error', 'as-needed'],
		'object-curly-spacing': ['error', 'always'],
		'comma-dangle': ['warn', 'never'],
		'max-params': ['error', 3],
		'no-multiple-empty-lines': 'error'
	}
}