import Header from './header.vue'

Header.install = Vue => {
  Vue.component(Header.options.name, Header) // 注册或获取全局组件
}

export default Header