module.exports = {
  extends: 'airbnb',
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'react/react-in-jsx-scope': 0,
  },
};
