// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import fullCalendar from 'vue-fullcalendar';
import VueParticles from 'vue-particles';

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/iconfont/iconfont.css';
import '@/assets/styles/main.scss';

Vue.config.productionTip = true;
Vue.use(ElementUI);
Vue.use(VueParticles);
Vue.component('full-calendar', fullCalendar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
