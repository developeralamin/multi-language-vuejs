import i18n from '@/plugins/i18n';
import Vue from 'vue';
import FlagIcon from 'vue-flag-icon';
import App from './App.vue';

Vue.use(FlagIcon)
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
