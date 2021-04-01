module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    indent: ['error', 2],
    quotes: [2, 'single', { avoidEscape: true }],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-unresolved': 'off',
    // https://github.com/benmosher/eslint-plugin-import/issues/1573
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      mjs: 'never',
    }],
    complexity: ['error', { max: 20 }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
        allow: ['^UNSAFE_'],
      },
    ],
  },
};
