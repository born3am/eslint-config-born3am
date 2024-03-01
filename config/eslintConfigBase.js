import eslintPluginPrettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig} */
export const eslintConfigBase = {
  ignores: ['.DS_Store', '.env.*', 'bin/**/*', 'build/**/*', 'cache/**', 'dist/**/*', 'jest.config.js', 'lib/**/*', 'node_modules/**/*', 'package-lock.json'],

  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.es2021,
      ...globals.browser,
      ...globals.node,
      ...globals.nodeBuiltin,
      ...globals.jest,
    },
    // Default parser is espree (no need to specify it here)
    parserOptions: {
      // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
      // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      requireConfigFile: false,
    },
  },

  linterOptions: {
    noInlineConfig: false,
    reportUnusedDisableDirectives: true,
  },

  plugins: {
    'simple-import-sort': simpleImportSort,
    prettier: eslintPluginPrettier,
  },

  rules: {
    // Options: 'error' or 'warn' or 'off'

    // Rules from "prettier"
    'prettier/prettier': [
      'error',
      // Empty object to use Prettier default options
      {},
      // Set to 'true' to use .prettierrc config file rules
      {
        usePrettierrc: true,
      },
    ],

    // Rules from "simple-import-sort" (to handle exports)
    'simple-import-sort/exports': 'error',
  },
};
