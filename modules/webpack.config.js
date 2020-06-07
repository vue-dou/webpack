
// webpack配置文件     打包命令： webpack --watch

module.exports = {
    entry: "./main.js", // 定义入口文件
    output: { // 打包成一个js
        filename: "./js/bundle.js"
    }
};