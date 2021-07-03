import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//#1
new Vue({
  render: h => h(App),
}).$mount('#app')

// #2
// new Vue({
//   el: '#app',
//   render:  createElement => createElement(App)
// });
// #3

