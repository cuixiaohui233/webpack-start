module.exports = {
    mode: 'development',// 提供模式配置选项告诉WebPACK相应地使用其内置的优化。
    devtool: 'eval-source-map',

    entry:__dirname + "/app/main.js",// 入口文件
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },// 出口文件
    devServer: {
        contentBase: "./public",// 本地服务器加载的页面所在的目录
        historyApiFallback: true,// 不跳转
        inline: true
    },
    module:{
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,// 处理 css loader
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true,// 这里启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]'// 指定 css 的类样式
                        }
                    }// 引入多个 loader
                ]
            }
        ]
    }

};