//
// Webpack script
//

// Load some modules
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    // These are the entries to the script
    entry: {
        app: ['./src/app.scss','./src/app.js','./src/index.html'],
    },

    // The output
    output: {
        filename:'[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    // Module used (loaders are applied from bottom to top)
    module: {
        
        rules: [

            // CSS
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,    // 3. JS code -> external CSS (config is at the bottom of this file) 
                    "css-loader",                   // 2. CSS -> JS code
                    "sass-loader",                  // 1. SASS -> CSS
                ]
            },

            // VUE
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },

            // JS
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }
            },

            // ASSETS
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[sha512:hash:base64:6]-[name].[ext]'
                    }
                }
            },

            // Copy the HTML
            {
                test: /\.(html)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }
            }
        ], // rules
        

    },

    // PLUGINS
    plugins: [
        new MiniCssExtractPlugin({filename:'[name].css', chunkFilename: "[id].css"}),
        new VueLoaderPlugin(),
    ],
    
    // Config of the chunks app/vendor.js
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                },
            }
        } // splitChunks
    },
    
};
