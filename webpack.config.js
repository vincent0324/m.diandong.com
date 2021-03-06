const webpack = require('webpack');
const path = require('path');

const config = {

    entry: {
        guide: path.resolve(__dirname, 'source/components/guide/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/mall'),
        filename: '[name].debug.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|woff|svg|ttf|eot)$/,
                loader: 'url-loader?limit=10000' // 限制大小小于10k的
            }
        ]
    },

    // plugins: [],

    resolve: {
        alias: {
            zepto: path.resolve(__dirname, 'source/lib/zepto/zepto'),
            cookie: path.resolve(__dirname, 'source/lib/cookie/cookie'),
            user: path.resolve(__dirname, 'source/lib/user/user'),
            area: path.resolve(__dirname, 'source/lib/area/area'),
            tip: path.resolve(__dirname, 'source/lib/tip/tip'),
            swiper: path.resolve(__dirname, 'source/lib/swiper/idangerous.swiper.min'),
            countdown: path.resolve(__dirname, 'source/lib/countdown/countdown'),
            quickselect: path.resolve(__dirname, 'source/lib/quickselect/quickselect')
        }
    }
};

module.exports = config;
