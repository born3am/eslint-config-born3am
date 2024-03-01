import { eslintConfigBase } from '../config/eslintConfigBase.js';
import { eslintConfigJest } from '../config/eslintConfigJest.js';
import { eslintConfigJs } from '../config/eslintConfigJs.js';
import { eslintConfigPrettier } from '../config/eslintConfigPrettier.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export const eslintConfigAppsScript = [eslintConfigBase, eslintConfigJs, eslintConfigJest, eslintConfigPrettier];
