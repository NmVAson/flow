<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <IntroSection/>
    <ConfidenceSection/>
    <b-button
      variant="primary"
      v-on:click="sendAnswers"
      v-bind:class="{ disabled: isProcessing }">Submit</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import IntroSection from './IntroSection.vue';
import ConfidenceSection from './ConfidenceSection.vue';

export default {
  name: 'ExperienceSamplingMethodForm',
  props: {
    title: String,
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  components: {
    IntroSection,
    ConfidenceSection,
  },
  methods: {
    ...mapActions(['postFormData']),
    sendAnswers() {
      if (this.isProcessing) return;

      this.isProcessing = true;

      this.postFormData();
    },
  },
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  padding: 40px;
}
</style>
