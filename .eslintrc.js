module.exports = {
  extends: [require.resolve('@healthdt/linter/dist/eslint')],
  globals: {
    REACT_APP_ENV: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['@healthdt/application-detail'], // 请替换成你的包名 application-detail
        caseSensitive: true,
        commonjs: true,
      },
    ],
  },
};
