var path = require('path');
var postcssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var webpack = require('webpack');

module.exports = {
  entry : {
    index : path.resolve(__dirname, 'src/index.js')
  },
  output : {
    path : 'out/',
    filename : '[name].js'
  },
  module : {
    preLoaders : [{
      test : /\.jsx?$/,
      include: [new RegExp(path.join(__dirname, 'src'))],
      loader : 'eslint'
    }],
    loaders : [{
      test : /\.jsx?$/,
      exclude : /node_modules/,
      loader : 'react-hot'
    }, {
      test : /\.jsx?$/,
      exclude : /node_modules/,
      loader : 'babel',
      query : {
        presets : ['es2015', 'react', 'stage-2']
      }
    }, {
      test : /\.css$/,
      loaders : ['style', 'css', 'postcss']
    }, {
      test : /\.html$/,
      loader : "file?name=[name].[ext]"
    }]
  },
  eslint: {
    configFile: path.resolve(__dirname, '.eslintrc.js')
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss : function (webpack) {
    return [autoprefixer, precss, postcssImport({
      addDependencyTo : webpack
    })];
  },
  resolve : {
    extensions : ['', '.js', '.jsx']
  }
};
