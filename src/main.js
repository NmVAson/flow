import Vue from 'vue';
import './plugins/bootstrap-vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import ExperienceSamplingMethodForm from './components/ExperienceSamplingMethodForm.vue';
import FormSuccess from './components/FormSuccess.vue';
import FormError from './components/FormError.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/form/:id', component: ExperienceSamplingMethodForm, props: true },
  { path: '/success', component: FormSuccess },
  { path: '/error', component: FormError }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app');
