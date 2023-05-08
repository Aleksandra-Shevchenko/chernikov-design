module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    es6: true,
    jest: true,
    node: true,
    'jest/globals': true,
    jasmine: true,
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'react-hooks'],
  rules: {
    'import/no-unresolved': 'off', // Otherwise we can't do relative imports
    'import/extensions': 'off', // Let's not change every single import to use file extensions just yet
    'no-unused-vars': 'off', // For some reason the plugin crashes if this isn't defined
    '@typescript-eslint/no-unused-vars': 'error', // See above (this time use error)
    '@typescript-eslint/ban-ts-ignore': 'off', // We're just nowhere near being able to ban @ts-ignore
    '@typescript-eslint/ban-ts-comment': 'off', // We're just nowhere near being able to ban @ts-ignore
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // This one we obviously need
    'react/jsx-wrap-multilines': 'off', // Conflicts with Prettier in some edge cases
    'react/jsx-one-expression-per-line': 'off', // Conflicts with Prettier in some edge cases
    'react/jsx-curly-newline': 'off', // Conflicts with prettier
    'react/jsx-props-no-spreading': 'off', // Used in HOCs
    'react/require-default-props': 'off', // Turning this off, because it doesn't recognize destructured props with defaults in functional components
    'react/static-property-placement': 'off', // This doesn't work great with TypeScript
    'react/state-in-constructor': 'off', // We want to be able to initialize e.g. state outside of the constructor
    'global-require': 'off', // There are cases such as all image files and json files etc. where we need this. Sometimes  And it's not really ever abused
    'react/prop-types': 'off', // Not needed because we use use TypeScript
    'react/no-unused-prop-types': 'off', // Not needed because we use use TypeScript
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off', // This does not work with the new style of declaring class members in constructors
    'no-use-before-define': 'off', // This gives error from importing React, therefore off
    'no-param-reassign': 'off', // This gives error from using immer.js
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // To be manually disabled when appropriate:
    // 'react/no-array-index-key'  Sometimes array items just aren't unique
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['Checkbox', 'Radio'],
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
