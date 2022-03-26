const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, 'src/components/'),
            '@Pages': path.resolve(__dirname, 'src/pages/'),
            '@Redux': path.resolve(__dirname, 'src/redux/')
        }
    },

    watch: true,

    mode: 'development',

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        }, {
            test: /\.s?css/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    devtool: 'eval-cheap-module-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

