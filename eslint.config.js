import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default [
  // Ignoring
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/*.config.js'],
  },

  // BACKEND TS
  {
    files: ['backend/**/*.ts'],
    languageOptions: {
      parser: parser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
    },
    rules: {
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      curly: ['error', 'all'],
      'no-irregular-whitespace': ['error', { skipTemplates: true, skipStrings: true }],
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          alphabetize: { order: 'asc', caseInsensitive: false },
          'newlines-between': 'always',
        },
      ],
    },
  },

  // WEBAPP TS/TSX
  {
    files: ['webapp/**/*.{ts,tsx}'],
    languageOptions: {
      parser: parser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      'react-refresh/only-export-components': 'off',
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      curly: ['error', 'all'],
      'no-irregular-whitespace': ['error', { skipTemplates: true, skipStrings: true }],
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          alphabetize: { order: 'asc', caseInsensitive: false },
          'newlines-between': 'always',
        },
      ],
    },
  },
];
