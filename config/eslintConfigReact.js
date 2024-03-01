import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig} */
export const eslintConfigReact = {
  files: ['**/*.{tsx}'],

  languageOptions: {
    parser: tsEslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  plugins: {
    'jsx-a11y': eslintPluginJsxA11y,
    react: eslintPluginReact,
  },

  rules: {
    // Rules from "eslint-plugin-jsx-a11y" (Accessibility rules)
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules
    ...eslintPluginJsxA11y.configs.recommended.rules,

    // Rules from "eslint-plugin-react"
    //https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
    ...eslintPluginReact.configs.recommended.rules,
    ...eslintPluginReact.configs['jsx-runtime'].rules,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/sort-default-props': ['error', { ignoreCase: true }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        multiline: 'last',
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    'react/no-invalid-html-attribute': 'error',
    'react/sort-comp': [
      'error',
      {
        order: ['static-methods', 'instance-variables', 'lifecycle', 'everything-else', '/^on.+$/', 'render'],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
  },
};
