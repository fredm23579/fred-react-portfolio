/**
 * ESLint configuration for fred-react-portfolio.
 *
 * Uses ESLint 8 (flat config not required at this version).
 * Extends the React + hooks + react-refresh recommended rule sets.
 */
module.exports = {
  root: true,

  env: {
    browser: true,
    es2022: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // Suppresses the "React must be in scope" rule (not needed with React 17+ JSX transform)
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },

  settings: {
    // Let eslint-plugin-react auto-detect the installed React version
    react: { version: 'detect' },
  },

  plugins: ['react-refresh'],

  rules: {
    // Warn when a module exports something other than React components (HMR safety)
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // Warn on missing PropTypes so components stay self-documenting
    'react/prop-types': 'warn',

    // Allow unused vars prefixed with _ (common for destructured but unused args)
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

    // Prefer const over let when variable is never reassigned
    'prefer-const': 'error',
  },
};
