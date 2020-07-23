const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const mode = argv.mode || 'development';
const isDev = mode === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssPlugin = require("autoprefixer")({overrideBrowserslist: [ "> 1%","last 2 versions","not ie <= 8"]})

// 清除dist文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: ["babel-polyfill",'./src/main.js'], //入口文件，src下的main.js
    output: {
        path: path.join(__dirname, 'dist'), // 出口目录，dist文件
        publicPath: '',// 表示在引入静态资源时，从根路径开始引入,否则路由多层时候资源找不到
        filename: 'js/[name].[hash].js', //这里name就是打包出来的文件名
        chunkFilename: 'js/[name].[hash].js',//指定动态生成的Chunk在输出时的文件名称
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.less$/,
                use: [ 
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [postCssPlugin]
                        }
                    },
                    {
                      loader:'less-loader',
                      options: {
                        sourceMap: true,
                        lessOptions: {
                          javascriptEnabled: true,
                          // modifyVars: {
                          //   'primary-color': '#ff4757',
                          //   'link-color': '#ff4757',
                          //   'border-radius-base': '2px',
                          // }
                        }
                      }
                    },
                    {
                        loader: 'style-resources-loader',
                        options: {
                          patterns:[
                              path.resolve(__dirname, './src/assets/less/theme.less'),
                          ]
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [postCssPlugin]
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [],
                options: {
                    limit: 5 * 1024,
                    name: 'images/[name].[hash:7].[ext]',
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                exclude: [],
                use: [
                    {
                        loader: 'file-loader?name=fonts/[name].[hash:8].[ext]',
                    },
                ],
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            favicon: path.resolve('./favicon.ico') // 增加
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: isDev ? 'css/[id].css' : 'css/[name].[hash].css',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"), //打包输出文件根目录
        port: 9090, // 端口
        historyApiFallback: true,//history 模式路由刷新 404 
        compress: true,
        disableHostCheck: true,
        watchOptions: {
            ignored: /node_modules/, //忽略不用监听变更的目录
            aggregateTimeout: 300, //防止重复保存频繁重新编译,n毫米内重复保存不打包
        },
        proxy: {
            "/api": {
                "target": "http://10.74.20.25",
                "changeOrigin": true,
                // "pathRewrite": {"^/api": "/api"}
            }
        },
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    minChunks: 2,// 引入两次及以上被打包
                    // 可选 'initial | async | all'，
                    // 分别代表，初始化时加载、异步加载、两者皆使用
                    chunks: 'all', 
                    // 代表权重值，值越大，打包优先级越高
                    priority: 10 ,
                }
            }
        },
        runtimeChunk: {
            name: 'runtime'
        },
    },
    devtool: isDev ? "eval-source-map" : "source-map",
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx', '.less','.json','.css','.vue'],
        alias: {
            '@': path.join(__dirname, 'src'),
            '@views': path.join(__dirname, 'src','views'), // ../views
            '@components': path.join(__dirname, 'src/components'),// ../../components or ../components,
        },
        modules: ['node_modules'],
    },
}