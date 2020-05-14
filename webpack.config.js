const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode }) => {
  return {
    entry: "./src/index.tsx",
    mode,
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new webpack.ProgressPlugin()
    ],
    devServer: {
      contentBase: "./dist",
      hot: true
    },
    resolve: {
      extensions: [".js", ".json", ".ts", ".tsx"]
    }
  };
};
