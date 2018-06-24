const merge=require("merge");
const base=require("./webpack.base");
const webpack=require("webpack");
const path=require("path");

var devConfig={

}

const config=merge(base,devConfig);

module.exports=config;