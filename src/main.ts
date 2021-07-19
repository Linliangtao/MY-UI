import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './base'
import Header from '@/base/header/header.vue'
import BLayout from '@/base/layout/layout.vue'
import Attr from '@/base/attr/attr.vue'
import CodePer from '@/base/codePer/codePer.vue'
import Particle from '@/base/particle/particle.vue'

const app = createApp(App)
app.use(store).use(router).mount('#app')
app.component('Header', Header)
app.component('BLayout', BLayout)
app.component('Attr', Attr)
app.component('CodePer', CodePer)
app.component('Particle', Particle)