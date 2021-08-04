import plink from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
plink.install = function (Vue) {
    Vue.component(plink.name, plink)
}

// 默认导出组件
export default plink