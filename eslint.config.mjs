import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import storybook from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Base JS rules
  js.configs.recommended,

  // Common config for source files
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    plugins: {
      react,
      i18next,
      storybook,
    },

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      // i18n rules
      ...i18next.configs.recommended.rules,
    },
  },

  // TypeScript rules
  tseslint.configs.recommended,

  // React (flat config)
  react.configs.flat.recommended,

  // Overrides
  {
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
]);
