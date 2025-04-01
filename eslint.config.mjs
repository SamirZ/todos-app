import { defineConfig } from "eslint/config";
import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    ignores: ["dist/"],
  },
  { files: ["src/**/*.{js,ts}", "test/**/*.{js,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["**/*.{js,ts}"],
    languageOptions: { globals: globals.node },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["test/**/*.{js,ts}"],
    ...jest.configs["flat/recommended"],
  },
  eslintPluginPrettierRecommended,
]);
