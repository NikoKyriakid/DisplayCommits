const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: [
        path.join(APP_DIR, 'index.js')
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    context: __dirname,
    resolve: {
        // Add '.js' and '.jsx' as resolvable extensions.
        extensions: [".jsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}  
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: '*.html', context: 'src/' }
        ]),
        new CleanWebpackPlugin(['dist'], {
			verbose: true
		})
        
    ]
};