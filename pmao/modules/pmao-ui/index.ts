import Pheader from './p-header/index.vue';

//组件集合
const COMPONENTS = [
    Pheader
];

const PMaoUI = {
    install : function (vue:any) {
        // vue.component(Pheader.name,Pheader);
        COMPONENTS.forEach((component) =>{
            vue.component((component.name,component));
        })
    }
}
let vue;
PMaoUI.install(vue);
export default PMaoUI;