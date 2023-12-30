 import { createApp } from 'vue'
 import '@icon-park/vue-next/styles/index.css';
import App from './App.vue'
import { createPinia } from 'pinia';
import route from './Router/Router.js'
// 创建一个 pinia 实例 (根 store) 并将其传递给应用
const pinia=createPinia()
const app=createApp(App)
app.use(pinia)
app.use(route)
app.mount('#app')
