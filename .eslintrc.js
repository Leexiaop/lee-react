module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    parser: 'babel-eslint',
    rules: {
        indent: ['error', 4],
        'arrow-body-style': ['error', 'always'],
        semi: ['error', 'always'],
        allowIndentationTabs: 0,
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx']
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'comma-dangle': ['error', 'never'],
        'import/no-extraneous-dependencies': [2, {
            devDependencies: true,
            peerDependencies: true,
            optionalDependencies: true,
            bundledDependencies: true
        }],
        'global-require': 0,
        'arrow-parens': ['error', 'as-needed'],
        'no-console': 'off',
        'react/prop-types': 'off',
        strict: 0,
        'react/jsx-props-no-spreading': 'off',
        'no-param-reassign': ['error', { props: false }]
    }
};
