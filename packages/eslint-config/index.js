/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 10:29:08
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 15:43:43
 * @FilePath     : /fallen-zero-ui/packages/eslint-config/index.js
 * @FileName     :
 */
module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-extra-semi': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
