# eslint-config
ESlint "Flat" configuration for Born3am Projects

### Pre-requisites
Check that `@born3am/prettier` package is properly installed and configured. `Prettier` is integrated with `eslint` and eslint will fail if it does not find the Prettier package and the prettier config file. Further details about Prettier can be found [here][(https://github.com/Born3am Projects/prettier-config](https://github.com/born3am/prettier-config-born3am)).

### Installation
1) Create an empty file `eslint.config.js` in the root of your project.

2) Install the `@born3am/eslint-config` package as a dev dependency.
  ```bash
  npm install --save-dev @born3am/eslint-config
  ```

The package `@born3am/eslint-config` includes the following **dev-dependencies**:

  ```bash
  @eslint/eslintrc
  eslint
  eslint-config-prettier
  eslint-plugin-deprecation
  eslint-plugin-import
  eslint-plugin-jsx-a11y
  eslint-plugin-prettier
  eslint-plugin-promise
  eslint-plugin-react
  eslint-plugin-simple-import-sort
  eslint-plugin-typescript-sort-keys
  eslint-plugin-jest
  eslint-plugin-vitest
  globals
  typescript
  typescript-eslint
  ```
... and the following **peer-dependencies**:
  ```bash
  jest
  prettier
  typescript
  vitest
  vite-plugin-eslint
  ```

### Usage

There are three primary preset configuration bundles, each tailored to a specific project type. Each configuration is an independent package module that can be imported and used separately in the `eslint.config.js` file, as follows:
1) **WebApps Projects**
Include eslint configs for `React`, `Javascript` and `TypeScript` files. The testing framework used in this context is `Vitest`.

- Configs included (in this order):
  ```js
  const eslintConfigWeb = [
    eslintConfigBase,
    eslintConfigImport,
    eslintConfigJs,
    eslintConfigTs,
    eslintConfigReact,
    eslintConfigVite,
    eslintConfigPrettier,
  ];
  ```

- Usage in `eslint.config.js`:
  ```js
  // eslint.config.js
  import { eslintConfigWeb } from '@born3am/eslint-config'

  /** @type {import('eslint').Linter.FlatConfig[]} */
  export default eslintConfigWeb
  ```

2) **NodeJS Projects**
Include eslint configs for `Javascript` and `TypeScript` files. The testing framework used in this context is `Jest`.

- Configs included (in this order):
  ```js
  const eslintConfigNode = [
    eslintConfigBase,
    eslintConfigImport,
    eslintConfigJs,
    eslintConfigTs,
    eslintConfigJest,
    eslintConfigPrettier,
  ];
  ```

- Usage in `eslint.config.js`:
  ```js
  // eslint.config.js
  import { eslintConfigNode } from '@born3am/eslint-config'
  
  /** @type {import('eslint').Linter.FlatConfig[]} */
  export default eslintConfigNode
  ```

3) **AppsScript Projects**
Include eslint configs for `Javascript` and `Google Apps Script` files. The testing framework used in this context is `Jest`.

- Configs included (in this order):
  ```js
    const eslintConfigAppsScript = [
      eslintConfigBase,
      eslintConfigJs,
      eslintConfigJest,
      eslintConfigPrettier,
    ];
  ```

- Usage in `eslint.config.js`:
  ```js
  // eslint.config.js
  import { eslintConfigAppsScript } from '@born3am/eslint-config'

  /** @type {import('eslint').Linter.FlatConfig[]} */
  export default eslintConfigAppsScript
  ```

### Scripts
Setup `package.json` Scripts:

```json
{
 "scripts": {
    "lint": "eslint -c eslint.config.js --cache .",
    "lint:fix": "npm run lint -- --no-cache --fix",
    "prettier": "prettier --check --cache --no-error-on-unmatched-pattern '**/*.md' '**/*.yml' '**/*.json' '**/*.html' '**/*.css' '**/*.scss' '**/*.sass' '**/*.less'",
    "prettier:fix": "npm run prettier -- --no-cache --write",
    "fix": "npm run prettier:fix ; npm run lint:fix"
  }
}
```
`prettier` is integrated with `eslint` and rules from both are applied to all javascript/typescript files in one go, via the eslint script only.

Other files like `.md`, `.yml`, `.json`, `.html`, `.css`, `.scss`, `.sass`, `.less` are handled uniquely by `prettier` and linting rules cannot be applied to them inside `eslint.config.js`.

Regardless of the file type, the fix script should always handle all files.

### Maintenance
To check for deprecated rules, resolve conflicts, update rules, or gain a better understanding of the rules, you can utilize the [eslint-flat-config-viewer](https://github.com/antfu/eslint-flat-config-viewer) package.

Please note, this package isn't installed as a dependency and is solely used for rule viewing. As a standalone package, it can be executed without installation. To view the rules in a browser window, execute the following command in your terminal, making sure you're in the same directory as the `eslint.config.js` file:
```bash
npx eslint-flat-config-viewer
```
