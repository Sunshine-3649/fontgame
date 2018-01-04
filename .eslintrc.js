// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'spaced-comment': 2, // 注释风格要不要有空格什么的
    'semi': [2, 'always'], // 语句强制分号结尾
    "one-var": 0, //强制变量声明放在一起
    'no-undef': 0,
    'space-before-function-paren': ['error', 'never'], // 函数名字后边不能有空格
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
