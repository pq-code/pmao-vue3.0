import Pheader from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
Pheader.install = function (Vue) {
    Vue.component(Pheader.name, Pheader)
}
// 默认导出组件
export default {
    Pheader,
}