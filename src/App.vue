<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>Flow</b-navbar-brand>
    </b-navbar>
    <ExperienceSamplingMethodForm
      title="Experience Sampling Form"/>
  </div>
</template>

<script>
import ExperienceSamplingMethodForm from './components/ExperienceSamplingMethodForm.vue';

export default {
  name: 'App',
  components: {
    ExperienceSamplingMethodForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 200px;
}
.btn-group > .btn:not(:first-child) {
  border-left-width: 0;
}
</style>
