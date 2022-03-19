const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
// // make a array with pages names
// let pages = ['cat1', 'cat2', 'cat3', 'dog1', 'dog2', 'dog3'];
// // map a new HtmlWebpackPlugin to each of those names outputing array
// let htmlPlugins = pages.map( page =>{
//   return new HtmlWebpackPlugin({
//     filename: page + '.html',
//     template: './src/index.html'
//   });
// });


const PATHS = {
  src: path.join(__dirname, 'src')
};

module.exports = {
//   mode: 'development',  
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
      },
      {
        test: /\.twig$/i,
        use: "twig-loader",
      },
      {
        test: /\.vue$/i,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    // }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
};