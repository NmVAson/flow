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
import axios from 'axios';
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
    sendAnswers() {
      if (this.isProcessing) return;

      this.isProcessing = true;

      axios
        .post('https://nmvason-flow.builtwithdark.com/esm', {
          date: new Date(),
          thought: 'Test thought',
          place: 'Test location',
          action: 'Test action',
          why: 'Test reason',
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => { this.isProcessing = false; });
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
