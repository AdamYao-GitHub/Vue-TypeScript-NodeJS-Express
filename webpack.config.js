var path = require('path');
var srcPath = path.resolve(__dirname, "client");
var distPath = path.resolve(__dirname, "dist");

module.exports = {
  devtool: 'source-map',
  mode: "production",
  entry: [
    srcPath + "/index.ts"
  ],
  output: {
    path: distPath,
    publicPath: '/',
    filename: "main.js"
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json']
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      include: /dist/,
      loader: "babel-loader",
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.vue?/,
      loader: "vue-loader",
      options: {
        loaders: {
          // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          // the "scss" and "sass" values for the lang attribute to the right configs here.
          // other preprocessors should work out of the box, no loader config like this necessary.
          'scss': 'vue-style-loader!css-loader!sass-loader',
          'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
        }
      }
    }, {
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  devServer: {
    hot: true,
    port: 4500
  }
};