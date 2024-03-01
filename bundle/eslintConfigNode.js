import { eslintConfigBase } from '../config/eslintConfigBase.js';
import { eslintConfigImport } from '../config/eslintConfigImport.js';
import { eslintConfigJest } from '../config/eslintConfigJest.js';
import { eslintConfigJs } from '../config/eslintConfigJs.js';
import { eslintConfigPrettier } from '../config/eslintConfigPrettier.js';
import { eslintConfigTs } from '../config/eslintConfigTs.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export const eslintConfigNode = [eslintConfigBase, eslintConfigImport, eslintConfigJs, eslintConfigTs, eslintConfigJest, eslintConfigPrettier];
