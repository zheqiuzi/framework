module.exports = {
    extends: 'eslint:recommended',
    env: {
        //node环境
        node: true,
        //es6
        es6: true,
    },
    rules: {
        //关闭console提示
        'no-console': 'off',//off 0/warn 1/error 2
        // 'indent': [ 'error', 2 ],
        //提示未使用单引号
        'quotes': [ 'warn', 'single' ],
        //提示末尾未使用分号
        "semi": "warn",
        //提示未被使用的变量
        "no-unused-vars":"warn"
    }
};


login
    js
    css

html
    login
static
images
css
    login
        login.css

js
    login
        loing.js

framework
jQuery
ztree

npm init --yes