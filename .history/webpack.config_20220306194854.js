const path = require('path') // nodejs模块，帮助拼接路径
const htmlPlugin = require('html-webpack-plugin') // 自动生成html文件并引入相关资源

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
        exclude: /node_modules/,
      },
    ],
  },
  // 配置webpack 插件
  plugins: [
    new htmlPlugin({
      title: 'webpack+ts配置模版', // 自定义一些配置
      template: './src/index.html', // 根据模板生成
    }),
  ],
}
