// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let mode = process.env.NODE_ENV;
const config = require('./config.json');
let _debug = true;
let _devTool = 'cheap-module-eval-source-map';
let _devserver = undefined;
let _optimization = undefined;
let _entry = [
    'url-search-params-polyfill',
    'eventsource-polyfill', // Necessary for hot reloading with IE
    require.resolve('react-dev-utils/webpackHotDevClient'),
    path.join(process.cwd(), 'app/index.js'),
];

let _out = {};
let _plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        // make fetch available
        fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
];

let _loaders =
    [
        {
            test: /\.js$/, // Transform all .js files required somewhere with Babel
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            },
            {
                loader: 'eslint-loader',
                options: {
                    failOnError: true,
                    emitWarning: true,
                    configFile: "./.eslintrc.json"
                }
            }
            ],
        },
        {
            // Preprocess our own .css files
            // This is the place to add your own loaders (e.g. sass/less etc.)
            // for a list of loaders, see https://webpack.js.org/loaders/#styling
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            // Preprocess 3rd party .css files located in node_modules
            test: /\.css$/,
            include: /node_modules/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
            use: 'file-loader',
        },
        {
            test: /\web.config$/,
            use: [{
                loader: 'raw-loader'
            }, {
                loader: 'file-loader',
                options: {
                    name: 'web.config'
                }
            }]
        },
        {
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/',
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    optipng: {
                        optimizationLevel: 4,
                    },
                    pngquant: {
                        quality: '75-90',
                        speed: 3,
                    },
                },
            },
            ],
        }
    ]
if (mode == "development") {
    _out = {
        path: path.join(__dirname, 'dist'),
        filename: 'develop.[name].js',
        publicPath: 'http://localhost:' + config.port + '/',
    }
    _plugins.push(new HtmlWebpackPlugin({
        inject: true,
        template: 'app/index.html',
    }));
    _devserver = {
        contentBase: path.join(__dirname, "dist"),
        port: config.port,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
        index: 'index.html',
        clientLogLevel: "none",
        open: false,
        disableHostCheck: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    };
} else {
    _debug = false;
    _devTool = "source-map";
    _plugins.push(new HtmlWebpackPlugin({
        inject: true,
        template: 'app/index.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
    }));
    _optimization = {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
    _out = {
        path: path.join(__dirname, 'dist'),
        filename: mode + "." + config.appname + '.[name].js',
        publicPath: config.baseUrl[process.env.NODE_ENV] + "/" + config.clientName + "/"
    }

    _entry = {
        vendor: ["url-search-params-polyfill", "react", "react-dom", "react-router-dom"],
        app: path.join(process.cwd(), 'app/index.js')
    };
}
module.exports = {
    devtool: _devTool,
    entry: _entry,
    output: _out,
    plugins: _plugins,
    devServer: _devserver,
    module: {
        rules: _loaders,
    },
    optimization: _optimization,
};