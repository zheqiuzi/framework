const Vue=require('vue');
const Vuex=require('vuex');
// const VueRouter=require( 'vue-router');

var store=new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            return state.count++;
        }
    }
});
var app=new Vue({
    store,
    computed:{
        count(){
            return this.$store.count;
        }
    }
}).$mount("#app");