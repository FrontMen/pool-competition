const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',

    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["latest", { "modules": false }],
                            "react"
                        ]
                    }
                }
            }
        ]
    }
};