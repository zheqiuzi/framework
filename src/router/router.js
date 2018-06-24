var Vue=require("vue");
var VueRouter=require("vue-router");
var Vuex=require("vuex");

Vue.use(VueRouter);

const Foo={
    template:"<a>Foo</a>"
}
const Bar={
    template:"<a>bar</a>"
}


const routes=[
    {path:"/foo",component:Foo},
    {path:"/bar",component:Bar}
]



const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})


const app=new Vue({
    router
}).$mount("#app");
