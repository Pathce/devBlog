import nodeExternals from "webpack-node-externals";
import path from 'path';

module.exports = {
      entry: './server/server.tsx',
      target: 'node',
      mode: 'production',
      externals: [nodeExternals()],
      output: {
             path: path.resolve(__dirname, `server-build`),
             filename: 'index.js'
       },
      resolve: {
            extensions: [".tsx",".js"]
       },
      module: {
          rules: [
             {   test: /\.tsx$/,   use: ['babel-loader']  },
             {   test: /\.css$/,  use: 'css-loader' },
           ]
      }
  };