import Attr from './attr.vue'

Attr.install = Vue => {
  Vue.component(Attr.options.name, Attr) // 注册或获取全局组件
}

export default Attr