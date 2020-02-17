<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <IntroSection/>
    <ConfidenceSection/>
  </div>
</template>

<script>
import IntroSection from './IntroSection.vue';
import ConfidenceSection from './ConfidenceSection.vue';

export default {
  name: 'ExperienceSamplingMethodForm',
  props: {
    title: String,
  },
  components: {
    IntroSection,
    ConfidenceSection,
  },
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>
