module.exports = {
  plugins: ['disable-autofix'],
  rules: {
    'unused-imports/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off',
    'disable-autofix/unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'disable-autofix/unused-imports/no-unused-imports': 'error',
  },
}
