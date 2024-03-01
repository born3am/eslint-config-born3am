import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig} */
const [eslintConfigImport] = compat.config({
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        // This option specifies the order of import groups
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'object', 'type', 'unknown'],
        // This option allows to specify custom groups and control their position
        pathGroups: [
          {
            pattern: 'react', // Matches import paths starting with 'react'
            group: 'external', // Assigns 'react' imports to the 'external' group
            position: 'before', // Places 'react' imports before other 'external' imports
          },
        ],
        // Defines import types that are not handled by configured pathGroups.
        pathGroupsExcludedImportTypes: ['unknown'],
        // This option enforces a newline between import groups
        'newlines-between': 'always',
        // This option controls the sorting of import statements within each group
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // This rule enforces that all imports appear before other statements
    'import/first': 'error',
    // This rule enforces a newline after the last import in a group
    'import/newline-after-import': 'error',
    // This rule disallows duplicate import statements
    'import/no-duplicates': 'error',
  },
});

// Export only the first config object from the array
export { eslintConfigImport };
