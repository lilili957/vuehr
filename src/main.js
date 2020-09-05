import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  //element的样式文件，需要单独引入

Vue.use(ElementUI)    //插件需要注册才能使用。

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
