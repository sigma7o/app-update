import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

// This file defines the ESLint configuration for your entire project.
export default defineConfig([
  // Configuration to ignore the 'dist' folder from linting
  globalIgnores(['dist']),
  {
    // Defines the files to which this configuration applies
    files: ['**/*.{js,jsx}'],
    // Extends other configurations
    extends: [
      js.configs.recommended, // Recommended rules for JavaScript
      reactHooks.configs['recommended-latest'], // Recommended rules for React Hooks
      reactRefresh.configs.vite, // Rules for React Refresh with Vite
    ],
    // Configures language options
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // Enables browser globals
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX
        sourceType: 'module', // Use modules
      },
    },
    // Overrides or adds individual rules
    rules: {
      // 'no-unused-vars' rule: Ignores variables that start with an uppercase letter.
      // This is useful for React components, as they typically start with an uppercase letter.
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);