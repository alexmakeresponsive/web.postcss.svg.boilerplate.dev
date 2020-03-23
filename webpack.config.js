//Require modules
var path              = require("path");
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer      = require('autoprefixer');
// var postStylus        = require('poststylus');
var lostGrid          = require('lost');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



//init
//Objects
var extractThemeCSS  = new ExtractTextPlugin('design/theme/styles.theme.min.css');
var extractVendorCSS = new ExtractTextPlugin('design/vendor/styles.vendor.min.css');
// var extractVendorJS = new ExtractTextPlugin('design/vendor/scripts.vendor.min.js');
//Variables
var entryPoints  = {};
var plugins      = [];
var devtoolValue = '';
var NODE_ENV     = process.env.NODE_ENV;


//Actions
//1
plugins.push(extractThemeCSS);
plugins.push(extractVendorCSS);
// plugins.push(extractVendorJS);
plugins.push(
    new webpack.ProvidePlugin({
        // Component: 'moduleComponentPath',
        // cash:      'moduleCashPath',
        M:         'moduleMPath'
    })
);
// plugins.push(
//     new webpack.LoaderOptionsPlugin({
//         options: {
//             stylus: {
//                 use: [postStylus([ 'autoprefixer', 'lost' ])]
//             }
//         }
//     })
// );
// plugins.push(new BundleAnalyzerPlugin());
// plugins.push(new webpack.optimize.CommonsChunkPlugin({
//     name: 'common',
//     filename: './templates/common.bundle.js',
//     minChunks: 2
// }));

// console.log('plugins after pushed = ', plugins);
//2
switch(NODE_ENV) {
    case 'development':
        devtoolValue = 'source-map';
        break;
    case 'production':
        devtoolValue = 'nosources-source-map';
        break;
}
//3
entryPoints  = {
    './templates/index.bundle':     ['./components/theme/pages/Index/index.jsx'],
    './design/vendor/scripts.vendor.min': './components/vendor/hubScripts.js'
};
//4
if (NODE_ENV === 'production') {
    var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    plugins.push(
        new UglifyJsPlugin({
            sourceMap: true
        })
    );
}
//5
if (NODE_ENV === 'development') {
    var liveReloadString = 'webpack-dev-server/client?http://localhost:9000';

    for (var prop in entryPoints) {
        typeof entryPoints[prop] ===  "object" ? entryPoints[prop].unshift(liveReloadString) : true;
    }
}



module.exports = {
    // mode: NODE_ENV,

    devtool: false,

    context: __dirname + '/draft',
    entry: entryPoints,
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env', 'react'] }
                    }
                ]
            },
            {
                test: /components\/vendor\/?(?:[^\/]+\/?)*.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env'] }
                    }
                ]
            },
            // {
            //     test: /\.svg$/,
            //     use: [
            //         {
            //             loader: 'svg-sprite-loader',
            //             options: {
            //                 symbolId: 'svg-symbol'
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /components\/vendor\/?(?:[^\/]+\/?)*.js$/,
            //     use: extractVendorJS.extract(
            //         {
            //             use: [
            //                 {
            //                     loader: 'babel-loader',
            //                     options: { presets: ['env'] }
            //                 }
            //             ]
            //         }
            //     )
            // },
            {
                test: /components\/theme\/?(?:[^\/]+\/?)*.styl$/,
                use: extractThemeCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    // If you are having trouble with urls not resolving add this setting.
                                    // See https://github.com/webpack-contrib/css-loader#url
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 10', 'last 2 version']
                                        }),
                                        lostGrid

                                    ],
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    }
                )
            },
            {
                test: /components\/vendor\/?(?:[^\/]+\/?)*.styl$/,
                use: extractVendorCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    // If you are having trouble with urls not resolving add this setting.
                                    // See https://github.com/webpack-contrib/css-loader#url
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 10', 'last 2 version']
                                        }),
                                        lostGrid

                                    ],
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    }
                )
            },
            {
                test: /components\/vendor\/?(?:[^\/]+\/?)*.css$/,
                use: extractVendorCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    // If you are having trouble with urls not resolving add this setting.
                                    // See https://github.com/webpack-contrib/css-loader#url
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 10', 'last 2 version']
                                        })
                                    ],
                                    sourceMap: true
                                }
                            }
                        ]
                    }
                )
            }
        ]
    },
    // externals: {
    //     window: "window"
    // },
    resolve: {
        alias: {
    //         moduleComponentPath: path.resolve(__dirname, './draft/components/vendor/materialize1/js/component.js'),
    //         moduleCashPath:      path.resolve(__dirname, './draft/components/vendor/materialize1/js/cash.js'),
            moduleMPath:         path.resolve(__dirname, './draft/components/vendor/materialize1/Carousel/index.js'),
        }
    },
    plugins: plugins,

    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: __dirname + '/build/',
        publicPath: '/',
        watchContentBase: true,
    }
};