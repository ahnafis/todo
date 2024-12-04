import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{ts}"],
    extends: ["./node_modules/gts"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
