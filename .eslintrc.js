module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['@trbl', 'plugin:@typescript-eslint/recommended'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/no-unused-prop-types': 'warn',
        'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
        'react/jsx-indent': [
            1,
            4,
            { checkAttributes: true, indentLogicalExpressions: true },
        ],
        'react/jsx-indent-props': 'off',
        'react/require-default-props': 'off',
        'no-underscore-dangle': 'off',
        semi: 'off',
        indent: 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            files: ['*.tsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
    ],
}
