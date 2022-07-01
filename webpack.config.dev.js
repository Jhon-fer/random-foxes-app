const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'fonts/[hash][ext][query]',
        clean: true,
    },

    mode: 'development',

    resolve: {
      extensions: ['.js'],
    },

    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(woff|woff2)$/i,
            use: {
                loader: "url-loader",
                options: {
                    limit: 10000,
                    mimetype: "application/font-woff",                    
                    name: '[name].[contenthash].[ext]',
                    outputPath: "./fonts/",
                    publicPath: "../fonts/",
                    esModule: false,
                }
            },
        }
        ],
      },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: './index.html',
        }),

        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
    ],
};
