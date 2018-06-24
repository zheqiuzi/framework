var esprima = require('esprima');//code->tree
var escodegen=require('escodegen');//each tree
var estraverse=require('estraverse');//tree->code

//表达式转换为语法树
var code = 'var a = 3;a + 5;';
var ast = esprima.parse(code);
console.log(ast);
console.log(JSON.stringify(ast));

//遍历语法树并在每个变量名称末尾+字符"_1"

estraverse.traverse(ast, {
    enter: function (node) {
        if(node.body&&node.body.length>0){
            node.body.forEach(function (item) {
                if(item.type=='VariableDeclaration'){
                    item.declarations[0].init.value++;
                }
            });
        }
    }
});

//语法树转换为表达式

var e=escodegen.generate(ast);
console.log(e);



//写一条错误的代码
//xxx;
//写一条可以格式化的代码
var x=123;
