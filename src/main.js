import Vue from 'vue';
import './plugins/bootstrap-vue';
import './plugins/vue-fontawesome';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import ExperienceSamplingMethodForm from './components/ExperienceSamplingMethodForm.vue';
import FormSuccess from './components/FormSuccess.vue';
import FormError from './components/FormError.vue';
import Results from './components/Results.vue';
import ShortFlowForm from './components/ShortFlowForm.vue';
import SignUp from './components/SignUp.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    component: SignUp
  },
  {
    name: 'form',
    path: '/form/:id',
    component: ExperienceSamplingMethodForm,
    props: true
  },
  {
    name: 'short',
    path: '/short/:id',
    component: ShortFlowForm,
    props: true
  },
  {
    name: 'success',
    path: '/success/:id',
    component: FormSuccess,
    props: true
  },
  {
    path: '/error',
    component: FormError
  },
  {
    name: 'results',
    path: '/results/:id',
    component: Results,
    props: true
  }
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
