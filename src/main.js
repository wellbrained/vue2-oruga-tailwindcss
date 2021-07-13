import Vue from 'vue'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga';
import '@oruga-ui/oruga/dist/oruga-full.css'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(Oruga, {
  button : {
    override: true,
    rootClass: 'button-root',
    variantClass: 'button-'
  },
  datepicker : {
    override: true,
    rootClass: 'datepicker-root',
    variantClass: 'button-'
  },
  dropdown : {
    override: true,
    rootClass: 'dropdown-root',
    triggerClass: 'dropdown-trigger',
    menuClass: 'dropdown-menu',
    itemClass: 'dropdown-item',
    itemActiveClass: 'dropdown-item-active',
  },
  select : {
    override: true,
    rootClass: 'select-root',
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
