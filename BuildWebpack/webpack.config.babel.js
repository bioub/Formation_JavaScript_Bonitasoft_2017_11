import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsWebpackPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

// 1 - Installer, lire des docs et activer ces 2 plugins :
// clean-webpack-plugin
// uglifyjs-webpack-plugin

// 2 -

export default function (env) {

  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['commons', 'mainIndex']
    }),
    new HtmlWebpackPlugin({
      template: './src/random.html',
      filename: 'random.html',
      chunks: ['commons', 'mainRandom']
    }),
    new CleanWebpackPlugin('dist'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
    })
  ];

  if (env === 'prod') {
    plugins.push(new UglifyJsWebpackPlugin());
  }

  return {
    entry: {
      mainIndex: './src/js/index',
      mainRandom: './src/js/index-random',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
    },
    devtool: (env === 'prod') ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [['env', {
              modules: false, // obligatoire pour le tree shaking
              targets: {
                browsers: ['Chrome 60', 'Edge 15', 'IE 11']
              }
            }]]
          },
        },
        {
          test: /\.json5$/,
          loader: 'json5-loader',
        }],
    },
    plugins
  };
};
