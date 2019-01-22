const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    mode:'development',
    entry:'./src/index.tsx',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    devtool:'source-map',
    resolve:{//查找模块的时候使用
        extensions:['.ts','.tsx','.js','.json']
    },
    devServer:{
        hot:true,    //启用热更新
        contentBase: path.join(__dirname,'dist')    //静态目录
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader'
            },
            {
                enforce:'pre',  //pre->表示这个loader要在正常loader执行前执行
                test:/\.js$/,
                loader:'source-map-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin() //配合devServer中hot一起用
    ]
}