module.exports = {
  env: {
    browser: true, // браузерное окружение
    node: true, // окружение node.js
    es2023: true, // стандарт ECMAScript 2023 (ES14)
    jest: true, // для корректной работы ESLint с Jest
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-console': 'off', // временное отключение правила
  },
};
