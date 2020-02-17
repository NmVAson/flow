<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <IntroSection/>
  </div>
</template>

<script>
import IntroSection from './IntroSection.vue';

export default {
  name: 'ExperienceSamplingMethodForm',
  props: {
    title: String,
  },
  components: {
    IntroSection,
  },
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>
