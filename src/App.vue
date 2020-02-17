<template>
  <div id="app">
    <img alt="Flow logo" src="./assets/logo.png">
    <ExperienceSamplingMethodForm
      title="FLOW"/>
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
  margin-top: 60px;
}
img {
  width: 200px;
}
</style>
