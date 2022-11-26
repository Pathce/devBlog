iconst path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks', '@emotion'],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'prettier/prettier': 'error',
	// 생략
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
      rules: {
'@typeiconst path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks', '@emotion'],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'prettier/prettier': 'error',
	// 생략
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/ban-types': 'off',
        // 생략
    },
    {
      files: ['packages/client-a/**/*.ts?(x)', 'packages/client-a/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/client-a/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-components/**/*.ts?(x)', 'packages/common-components/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-components/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-const/**/*.ts?(x)', 'packages/common-const/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-const/tsconfig.json`),
          },
        },
      },
    },script-eslint/ban-types': 'off',
        // 생략
    },
    {
      files: ['packages/client-a/**/*.ts?(x)', 'packages/client-a/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/client-a/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-components/**/*.ts?(x)', 'packages/common-components/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-components/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-const/**/*.ts?(x)', 'packages/common-const/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-const/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-components/**/*.ts?(x)', 'packages/common-components/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-components/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-const/**/*.ts?(x)', 'packages/common-const/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-const/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-hooks/**/*.ts?(x)', 'packages/common-hooks/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-hooks/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-types/**/*.ts?(x)', 'packages/common-types/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-types/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-utils/**/*.ts?(x)', 'packages/common-utils/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-utils/tsconfig.json`),
          },
        },
      },
    },
  ],
};
