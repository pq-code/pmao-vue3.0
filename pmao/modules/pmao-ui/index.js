import Phead from './p-head/p-head.vue';
import plink from './p-link/p-link.vue';

//组件集合
const COMPONENTS = [
    Phead,
    plink,
];

const PMaoUI = {}

PMaoUI.install = function (vue) {
    // vue.component(Pheader.name,Pheader);
    COMPONENTS.forEach((component) =>{
        vue.component((component.name,component));
    })
}
export default PMaoUI;