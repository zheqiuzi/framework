var webpack = require('webpack');
const { WebPlugin } = require('web-webpack-plugin');
module.exports={
    devtool: "source-map",
    entry:{
        vueFamilyIndex:"./src/vueFamily/index.js",
        astIndex:"./src/ast/index.js",
        // reactIndex:"./src/reactFamily/index.js"
    },
    output: {
        path: __dirname + '/dist/',
        filename: "[name].bundle.js",
        // publicPath: './dist/'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            "jquery":"jquery/dist/jquery.js"
        }
    },
    module:{
        loaders:[
            {test:/\.vue$/, loader:'vue-loader'},
            {test:/\.js$/, loader:'babel-loader', exclude:/node_modules/},
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader'
            // }
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
            filename:"./dist/vueFamily/index.html",
            requires:['vueFamilyIndex'],
            template:"./src/vueFamily/index.html"

        }),
        new WebPlugin({
            filename:"./dist/ast/index.html",
            requires:['astIndex'],
            template:"./src/ast/index.html"

        }),
        // new WebPlugin({
        //     filename:"./dist/reactFamily/index.html",
        //     requires:['astIndex'],
        //     template:"./src/reactFamily/index.html"
        //
        // })

    ]
};
