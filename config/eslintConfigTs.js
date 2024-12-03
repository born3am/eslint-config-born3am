import tsPluginSortKeys from 'eslint-plugin-typescript-sort-keys';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig} */
export const eslintConfigTs = {
  files: ['**/*.{ts,tsx}'],

  languageOptions: {
    parser: tsEslint.parser,
    parserOptions: { project: './tsconfig.json' },
  },

  plugins: {
    '@typescript-eslint': tsEslint.plugin,
    'typescript-sort-keys': tsPluginSortKeys,
  },

  rules: {
    // Rules from "typescript-sort-keys"
    // https://github.com/infctr/eslint-plugin-typescript-sort-keys
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',

    // Rules from "typescript-eslint"
    // https://typescript-eslint.io/rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    "@typescript-eslint/no-deprecated": "error",
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Disable eslint-no-shadow rule and enable @typescript-eslint/no-shadow rule to solve conflict (https://github.com/typescript-eslint/typescript-eslint/issues/2483)
    // 'no-shadow': 'off', // Comment in if problems arise

    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unified-signatures': 'warn',
  },
};
