const merge=require("merge");
const base=require("./webpack.base");
const webpack=require("webpack");

var devConfig={

}

const config=merge(base,devConfig);

module.exports=devConfig;