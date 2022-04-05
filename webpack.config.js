const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     static: './dist',
    // },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Webpack Onboarding',
    //         emplate: "./src/index.html",
    //         inject: "body",
    //         scriptLoading: "blocking",
    //     })
    // ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         { loader: "css-loader", options: {} },
            //         // {
            //         //     loader: "postcss-loader",
            //         //     options: {
            //         //         ident: 'postcss',
            //         //         plugins: [
            //         //             require('autoprefixer')({
            //         //                 'browsers': ['> 1%', 'last 2 versions']
            //         //             }),
            //         //         ]
            //         //     }
            //         // },
            //         { loader: "sass-loader", options: {} }
            //     ]
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};