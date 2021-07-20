import Vue from 'vue'
import Oruga from '@oruga-ui/oruga'
import MyIconComponent from '@/components/Icons.vue'
import App from './App.vue'
import '@oruga-ui/oruga/dist/oruga.css'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.component('custom-iconpack', MyIconComponent)
Vue.use(Oruga, {
  iconPack: 'Custom Icons',
  iconComponent: 'custom-iconpack',
  icon: {
    override: true,
    rootClass: 'icon-root',
    variantClass: 'icon-variant',
  },
  field: {
    override: true,
    rootClass: 'field-root',
    variantClass: 'field-',
    messageClass: 'field-message',
    labelClass: 'field-label',
  },
  button: {
    override: true,
    rootClass: 'button-root',
    elementsWrapperClass: 'button-wrapper',
    iconClass: 'button-icon',
    variantClass: 'button-',
  },
  datepicker: {
    override: true,
    rootClass: 'datepicker-root',
  },
  dropdown: {
    override: true,
    rootClass: 'dropdown-root',
    triggerClass: 'dropdown-trigger',
    menuClass: 'dropdown-menu',
    itemClass: 'dropdown-item',
    itemActiveClass: 'dropdown-item-active',
    menuPositionClass: 'dropdown-position-',
  },
  select: {
    override: true,
    rootClass: 'select-root',
    selectClass: 'select-item',
    variantClass: 'select-',
    iconRightClass: 'select-iron-right'
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
