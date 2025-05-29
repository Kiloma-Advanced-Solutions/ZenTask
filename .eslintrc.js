module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {},
  env: {
    browser: true,
    node: true,
    es6: true
  }
}; 