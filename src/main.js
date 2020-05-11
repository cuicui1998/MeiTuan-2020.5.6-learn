import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'assets/css/main.css'

// 按需导入element-ui的组件
import '../element'

// 导入图标
import 'assets/icons/iconfont'
import 'assets/css/icon.css'


Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



