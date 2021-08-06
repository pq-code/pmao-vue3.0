import Phead from './p-head/p-head.vue';
import plink from './p-link/p-link.vue';

//组件集合
const COMPONENTS = [
    Phead,
    plink,
];


const install = function (Vue) {
    // vue.component(Pheader.name,Pheader);
    COMPONENTS.forEach((component) =>{
        Vue.component(component.name,component);
    })
}
export default {
    install,
    plink
};