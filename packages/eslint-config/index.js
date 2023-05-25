module.exports = {
  extends: [
    '@antfu/eslint-config',
  ],
  plugins: ['disable-autofix'],
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-labels': 'off',
    'template-curly-spacing': ['error', 'always'],
    'no-await-in-loop': 'error',
    'for-direction': 'error',
    'no-sequences': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'unused-imports/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off',
    'newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 1 },
    ],
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
    'one-var': 'off',
    'no-useless-return': 'off',
    'no-restricted-syntax': [
      'off',
      'DebuggerStatement',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    'multiline-ternary': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    'prefer-const': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
}
