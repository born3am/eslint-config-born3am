import vitest from 'eslint-plugin-vitest';

/** @type {import('eslint').Linter.FlatConfig} */
export const eslintConfigVite = {
  files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{spec,test}.{js,jsx,ts,tsx}'],
  plugins: { vitest },

  languageOptions: {
    globals: {
      ...vitest.environments.env.globals,
    },
  },

  // https://www.npmjs.com/package/eslint-plugin-vitest#rules
  rules: {
    ...vitest.configs.recommended.rules,
  },
};
