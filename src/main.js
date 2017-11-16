// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import demoRouter from './router';

Vue.use(VueRouter);
import App from './App';
import Vuex from 'vuex';
Vue.use(Vuex);

// vuex
import store from './vuex/store';
import * as type from './vuex/type';

// plugins
// import DevicePlugin from './plugins/device';
// import ToastPlugin from './plugins/toast';
// import AlertPlugin from './plugins/alert';
// import ConfirmPlugin from './plugins/confirm';
// import LoadingPlugin from './plugins/loading';
//
// Vue.use(DevicePlugin);
// Vue.use(ToastPlugin);
// Vue.use(AlertPlugin);
// Vue.use(ConfirmPlugin);
// Vue.use(LoadingPlugin);

const FastClick = require('fastclick');
FastClick.attach(document.body);

const routes = demoRouter;

const router = new VueRouter({
  routes
});

// simple history management
const history = window.sessionStorage;
history.clear();
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);

router.beforeEach(function (to, from, next) {
  store.commit(type.UPDATELOADINGSTATUS, {isLoading: true});

  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);

  if (toIndex) {
    if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
      store.commit(type.UPDATEDIRECTION, {direction: 'forward'});
    } else {
      store.commit(type.UPDATEDIRECTION, {direction: 'reverse'});
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    store.commit(type.UPDATEDIRECTION, {direction: 'forward'});
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1];
    window.location.href = `http${url}`;
  } else {
    next();
  }
});

router.afterEach(function (to) {
  store.commit(type.UPDATELOADINGSTATUS, {isLoading: false});
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

