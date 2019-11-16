const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// clean-webpack-plugin 的使用与教程里面的可能有一些出处，可能是此包更新过使得使用方法改变了
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
}
