// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.tsx',
//   devServer: {
//     historyApiFallback: true,
//     port: 3000,
//     hot: true
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.json'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(t|j)sx?$/,
//         use: ['babel-loader', 'ts-loader']
//       },
//     ],
//   },

//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: './public/index.html',
//     }),
//   ],
//   mode: 'development'
//   // mode: 'production'
// }


module.exports = function (env) {
  return require(`./webpack.${env}.js`)
}