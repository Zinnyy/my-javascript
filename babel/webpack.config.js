const path = require('path')


module.exports =  {
    //mode: 'development',
    entry: './srcc/srcc.js',
    
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'modern.js'
    },
    devServer: {
        static: { 
            directory: path.join(__dirname, 'dist/'),
    },
        devMiddleware: {
        publicPath: '/assets/'
        },
        port: 8080,
        hot: "only"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};