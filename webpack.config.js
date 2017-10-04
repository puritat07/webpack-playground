const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: './src/index.js',
    output: {
        path: __dirname+'/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.template.ejs',
        inject: 'body'
    })],
    devServer: {
        contentBase: __dirname+'/public',
        compress: true,
        port: 9000
      }
};

module.exports = config;