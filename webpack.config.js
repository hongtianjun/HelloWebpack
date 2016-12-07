
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './index.js'
    ],
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "index.bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx','vue']
    },
    babel: {
        presets: ['es2015','react','stage-2'],
        //plugins: ['transform-runtime','transform-es2015-arrow-functions']
    },
    module:{
        loaders:[
            {test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel'},
            {test: /\.vue$/,exclude: /node_modules/,loader: 'vue'},
            {test: /\.css$/, loader: "css" }
        ]
    }
}