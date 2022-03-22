const path = require('path') // nodejs模块，帮助拼接路径

// webpack 所有配置都放在module.exports里面
module.exports = {
  // 指定入口文件
  entry: './src/index.js',
  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // webpack打包时候需要使用的模块
  module: {
    // 指定加载规则
    rules: [
      {
        //指定规则生效文件
        test: /\.ts$/,
        use: 'ts-loader', // 用ts-loader处理以ts结尾的文件
      },
    ],
  },
}
