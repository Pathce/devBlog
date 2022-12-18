import nodeExternals from "webpack-node-externals";
import path from 'path';

module.exports = {
      entry: './src/index.ts',
      target: 'node',
      mode: 'production',
      externals: [nodeExternals()],
      output: {
             path: path.resolve(__dirname, `dist`),
             filename: 'index.js'
       },
      resolve: {
            extensions: [".ts",".js"]
       },
      module: {
          rules: [
             {   test: /\.ts$/,   use: ['babel-loader']  },
           ]
      }
  };