module.exports = {
  root: true,
  extends: [
    'universe/native',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
  ignorePatterns: ['/.expo','node_modules'],
};
