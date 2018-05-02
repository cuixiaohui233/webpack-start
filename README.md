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

