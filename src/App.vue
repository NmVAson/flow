<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>Flow</b-navbar-brand>
    </b-navbar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #254441;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px;
}
h1 {
  padding: 20px;
  font-size: 2em;
}
h2 {
  padding: 15px;
  font-size: 1.5em;
}
img {
  width: 200px;
}
.btn-group > .btn:not(:first-child) {
  border-left-width: 0;
}
</style>
