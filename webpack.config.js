
var webpack = require('webpack');
const { WebPlugin } = require('web-webpack-plugin');
module.exports={
    devtool: "source-map",
    //一个可执行模块或库的入口文件。
    entry:{
        router:"./src/router/router.js"
    },
    //输出路径
    output: {
        path: __dirname + '/dist/',
        filename: "[name].bundle.js",
        // publicPath: './dist/'
    },
    //解析 在引入别名的地方加载对应的模块
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            "jquery":"jquery/dist/jquery.js",
            'vue-router$': 'vue-router/dist/vue-router.common.js'
        }
    },
    module:{
        loaders:[
            {test:/\.vue$/, loader:'vue-loader'},
            {test:/\.js$/, loader:'babel-loader', exclude:/node_modules/}
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                babel:{
                    presets:['es2015'],
                    plugins:['transform-runtime']
                }
            }
        }),
        new WebPlugin({
            //输出的路径
            filename:"./dist/router/html.html",
            //输出时需要引入的实体
            requires:['router'],
            //使用到的html模块
            template:"./src/router/html.html"

        })
        // new WebPlugin({
        //     filename:"index.html",
        //     requires:['gamer']
        // })
    ]
};
