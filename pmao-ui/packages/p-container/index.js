import Pcontainer from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
Pcontainer.install = function (Vue) {
    Vue.component(Pcontainer.name, Pcontainer)
}
// 默认导出组件
export default {
    Pcontainer,
}