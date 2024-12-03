import eslintPluginPromise from 'eslint-plugin-promise';

/** @type {import('eslint').Linter.FlatConfig} */
export const eslintConfigJs = {
  files: ['**/*.{mjs,cjs,js,jsx}',
    '!dist/**/*',
    '!node_modules/**/*',
    '!vendor/**/*',
  ],

  plugins: {
    promise: eslintPluginPromise,
  },

  rules: {
    // Rules from "promise" (to enforce best practices for JS promises)
    // https://www.npmjs.com/package/eslint-plugin-promise
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-multiple-resolved': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-in-finally': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'warn',
    'promise/valid-params': 'warn',

    // Rules from "eslint" (native rules for JS files)
    'array-callback-return': 'off',
    'constructor-super': 'error',
    eqeqeq: ['warn', 'always'],
    'for-direction': 'error',
    'id-length': 'warn',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-fallthrough': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-sequences': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-sparse-arrays': 'error',
    'no-throw-literal': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
      },
    ],
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'prefer-const': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        object: true,
        array: false,
      },
    ],
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-template': 'error',
    'sort-vars': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'use-isnan': 'error',
  },
};
