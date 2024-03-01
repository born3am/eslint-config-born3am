import jest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.FlatConfig} */
export const eslintConfigJest = {
  files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{spec,test}.{js,jsx,ts,tsx}'],
  plugins: { jest },

  // https://www.npmjs.com/package/eslint-plugin-jest#rules
  rules: {
    ...jest.configs.recommended.rules,
    ...jest.configs.style.rules,
  },
};
