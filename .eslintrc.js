module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off'
  },
  env: {
    "browser": true
  }
}
