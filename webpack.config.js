const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js", 
    mode: "production",  
    node: {
        __dirname: false
    },
    module : {
        rules:[ 
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name: 'public/images/[name].[ext]'
                    }
                  },
                ],
              },
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output:{
        filename: "bundle.js",
        chunkFilename: '[id].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: true, 
        port:3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};