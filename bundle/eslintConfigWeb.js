import { eslintConfigBase } from '../config/eslintConfigBase.js';
import { eslintConfigImport } from '../config/eslintConfigImport.js';
import { eslintConfigJs } from '../config/eslintConfigJs.js';
import { eslintConfigPrettier } from '../config/eslintConfigPrettier.js';
import { eslintConfigReact } from '../config/eslintConfigReact.js';
import { eslintConfigTs } from '../config/eslintConfigTs.js';
import { eslintConfigVite } from '../config/eslintConfigVite.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export const eslintConfigWeb = [
  eslintConfigBase,
  eslintConfigImport,
  eslintConfigJs,
  eslintConfigTs,
  eslintConfigReact,
  eslintConfigVite,
  eslintConfigPrettier,
];
