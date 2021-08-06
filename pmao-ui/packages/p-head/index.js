import phead from './src/index.vue'
import pheaditem from './src/p-head-item'
// 为组件提供 install 安装方法，供按需引入
phead.install = function (Vue) {
    Vue.component(phead.name, phead)
}
pheaditem.install = function (Vue) {
    Vue.component(pheaditem.name, pheaditem)
}
// 默认导出组件
export default {
    phead,
    pheaditem,
}