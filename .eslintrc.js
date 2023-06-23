module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parserOptions: {
		parser: 'babel-eslint',
		requireConfigFile: false,
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react'],
	rules: {
		// Use consistent naming convention for rules
		camelcase: 0,

		// Remove unnecessary or redundant rules
		'no-console': 'off',
		'no-sparse-arrays': 'off',

		// Use consistent use of object property quotes
		'object-curly-spacing': ['error', 'always'],
		'quote-props': ['error', 'consistent-as-needed'],

		// Use consistent spacing before and after curly braces
		'space-before-blocks': 'error',
		'arrow-spacing': 'error',

		// Use consistent spacing before and after function parentheses
		'space-before-function-paren': ['error', 'never'],

		// Use consistent spacing around operators
		'space-infix-ops': 'error',

		// Use consistent linebreaks across different operating systems
		'linebreak-style': ['error', 'unix'],

		// Use consistent indentation
		indent: ['error', 2],

		// Use consistent use of semicolons
		semi: ['error', 'always'],

		// Use consistent use of quotation marks
		quotes: ['error', 'single', { allowTemplateLiterals: true }],

		// Use consistent use of comma-spacing
		'comma-spacing': ['error', { before: false, after: true }],

		// Use consistent use of parentheses around arrow function arguments
		'arrow-parens': ['error', 'as-needed'],

		// Use consistent use of curly braces around block statements
		curly: ['error', 'all'],

		// Use consistent naming convention for variables
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
		'react/state-in-constructor': ['error', 'never'],
		'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
		'react/no-array-index-key': 'off',
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/alt-text': 'off',
		'jsx-a11y/no-autofocus': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'import/no-cycle': 'off',
		'import/prefer-default-export': 'off',
		'max-len': ['error', { code: 250 }],
	},
}
