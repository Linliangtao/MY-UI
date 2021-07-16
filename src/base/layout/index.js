import BLayout from './layout.vue'

BLayout.install = Vue => {
  Vue.component(BLayout.options.name, BLayout) // 注册或获取全局组件
}

export default BLayout