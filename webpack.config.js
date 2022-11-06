const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // 模式 *(切換到 production ，開啟 tree shaking 功能)
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[fullhash].js",
  },
  //loader
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            }, //如果要在sass裡面下import語法，加這個設定webpack才讀得懂
          },
          {
            loader: "postcss-loader",
          }, //如果要配置loader以外的屬性的話，可以寫成物件形式
          {
            loader: "sass-loader",
          },
        ],
      },
      //asset loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      //babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.[fullhash].css",
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
  ],
  devtool: "source-map",
};
