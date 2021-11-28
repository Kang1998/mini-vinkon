module.exports = {
  extends: ['taro/react'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-indent-props': 'off',
    'taro/no-spread-in-props': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: './tsconfig.json'
  },
  globals: {
    wx: true,
    RongIMLib: true
  },
  env: { node: true, es6: true, commonjs: true, browser: true }
}
