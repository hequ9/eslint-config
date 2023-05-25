module.exports = {
  plugins: ['no-autofix'],
  rules: {
    'unused-imports/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off',
    'no-autofix/unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-autofix/unused-imports/no-unused-imports': 'error',
  },
}
