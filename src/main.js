// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

// 0splGL787be69VgsOZX2t3vMvw016i0F 公司的
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '0splGL787be69VgsOZX2t3vMvw016i0F' //Sb0LOC7mGYDYFfLOtElz0wfV
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
