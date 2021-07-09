import particle from './particle.vue'

particle.install = Vue => {
  Vue.component(particle.options.name, particle) // 注册或获取全局组件
}

export default particle