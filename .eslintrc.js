module.exports = {
  extends: [require.resolve('@healthdt/linter/dist/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
