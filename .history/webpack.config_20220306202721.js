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
  mode: 'development',
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
      {
        test: /\.less$/,
      },
      {
        loader: 'babel',
        // 设置babel预定义环境
        options: {
          // 设置预定义的环境
          presets: [
            [
              // 指定环境的插件
              '@babel/preset-env',
              // 配置信息
              {
                // 要兼容的目标浏览器
                targets: {
                  chrome: '58',
                  ie: '11',
                },
                // 指定corejs的版本
                corejs: '3',
                // 使用corejs的方式 "usage" 表示按需加载
                useBuiltIns: 'usage',
              },
            ],
          ],
        },
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
  // 用来设置引用模块
  resolve: {
    extensions: ['./ts', './js'], // 以这两个为结尾的都可以当作模块去引用
  },
}
