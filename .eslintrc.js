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
    semi: 'off', // конфликт airbnb с typescript ???
    'no-console': 'off', // для отладки
    'no-underscore-dangle': 'off', // конфликт airbnb с typescript ???
    'import/no-unresolved': 'off', // конфликт airbnb с typescript ???
    'import/extensions': ['error', 'ignorePackages', { '': 'never', ts: 'never' }], // конфликт airbnb с typescript ???
    'no-useless-constructor': 'off', // временное отключение правила
    'no-empty-function': 'off', // временное отключение правила
  },
};
