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
        'comma-dangle': ['error', 'never']
    }
};
