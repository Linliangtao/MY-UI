import CodePer from './codePer.vue'

CodePer.install = Vue => {
  Vue.component(CodePer.options.name, CodePer) // 注册或获取全局组件
}

export default CodePer