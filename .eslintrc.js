module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'dzmitry-kas-plugin',
        'unused-imports'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/indent': [2, 4],
        indent: [2, 4, {
            SwitchCase: 1,
            ignoredNodes: ['ConditionalExpression']
        }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'n/handle-callback-err': 'warn',
        'i18next/no-literal-string': ['error', { markupOnly: true, onlyAttribute: [''] }],
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/prop-types': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-invalid-void-type': 'warn',
        '@typescript-eslint/consistent-type-imports': 'warn',
        'n/no-callback-literal': 'off',
        'dzmitry-kas-plugin/path-checker': ['error', { alias: '@' }],
        'dzmitry-kas-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*']
            }

        ],
        'dzmitry-kas-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing']
            }
        ]
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },
    overrides: [
        {
            files: ['./src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ]
}
