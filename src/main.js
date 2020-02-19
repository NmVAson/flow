import Vue from 'vue';
import './plugins/bootstrap-vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import ExperienceSamplingMethodForm from './components/ExperienceSamplingMethodForm.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/form/:id', component: ExperienceSamplingMethodForm, props: true },
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
