module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'consistent-return': 'off',
    'no-sparse-arrays': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-nested-ternary': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  }
}
