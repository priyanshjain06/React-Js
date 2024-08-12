module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the version
    },
  },
  rules: {
    // Override specific rules or add additional rules here
    'react/prop-types': 'off', // Disable prop-types rule if you are using TypeScript or don't want prop-types
    'react/react-in-jsx-scope': 'off', // Not required with React 17+
    'react/jsx-no-target-blank': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
