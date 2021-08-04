import phead from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
phead.install = function (Vue) {
    Vue.component(phead.name, phead)
}

// 默认导出组件
export default phead