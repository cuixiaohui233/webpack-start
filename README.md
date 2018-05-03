1.npm  install -g webpack

2.npm init 初始化项目，生成 pack.json 文件

3.npm --save-dev -g webpack

4.新建文件夹结构如下：

    ·public -> index.html

    ·app -> Greeter.js

    ·app ->  main.js

5.在 index.html 中写入最基础的 html 代码，以便引入打包后的代码

6.编写 webpack.config.js 文件：

        module.exports = {
            entry: __dirname + "/app/main.js",// 唯一入口
            output: {
                path: __dirname + "/public",// 打包后存放文件的地方
                filename: "bundle.js"// 打包后文件输出的文件名
            }
        }

7.在 pack.json 中修改文件来更快捷的执行打包任务（这一块不是特别明白，好像怎么写的都有，教程和公司代码不一样）

        {
          "name": "webpack-sample-project",
          "version": "1.0.0",
          "description": "Sample webpack project",
          "scripts": {
            "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
          },
          "author": "zhang",
          "license": "ISC",
          "devDependencies": {
            "webpack": "3.10.0"
          }
        }

8.生成 Source Maps 便于调试

需要配置 devtool,有好几种，就写对中小型的项目的吧，ecal-source-map:

修改 webpack.config.js文件：

        module.exports = {
            devtool:'eval-source-map',
            entry: ....,
            output: ...
        }

9.使用webpack构建本地服务器

npm install --save-dev webpack-dev-server

先写到这里吧

|devserver的配置选项|功能配置|
|---|---|
|contentBase|默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）|
|port|设置默认监听端口，如果省略，默认为“8080”|
|inline|设置为 true，当源文件改变是会自动刷新页面|
|historyApiFallback|在单页面开发时非常有用，依赖于HTML5 history API,如果设置为true,所有的跳转都指向index.html|

在webpack.config.js 中添加配置：

        module.export = {
            devtool: 'eval-source-map',

            entry: __dirname + "/app/main.js",
            output:{
                 __dirname + "/public",
                 filename: "bundle.js"
            },

            devServer: {
                 contentBase: "./public",// 本地服务器加载时所载的目录
                 historyApiFallback: true,// 不跳转
                 inline: true// 实时更新
            }
        }

        云里雾去的，关于这块

        还有 package.json 中的 scripts 对象中添加如下命令，用以开启本地服务：

        "scripts": {
            "server":"webpack-dev-server --open"
        }

        然后，就可以在终端 npm run server ，在本地的8080端口查看结果
10.Loaders

Loaders 据教程说时 webpack 最激动人心的功能之一，呃呃...各种转换，scss 转换为 css,或者把 ES5 语法转换为 ES6 语法，再或者将

jsx 转化为 js 等等,

关于Loaders,需要单独安装，并且需要在webpack.config.js文件中的modules关键字下进行配置，明天再写，


