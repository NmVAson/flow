<template>
  <div class="container">
    <h1>Experience Sampling Form</h1>
    <IntroSection/>
    <ConfidenceSection/>
    <MoodSection/>
    <PainSection/>
    <CompanySection/>
    <FeelsSection/>
    <FinalCommentsSection/>
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
import MoodSection from './MoodSection.vue';
import PainSection from './PainSection.vue';
import CompanySection from './CompanySection.vue';
import FeelsSection from './FeelsSection.vue';
import FinalCommentsSection from './FinalCommentsSection.vue';

export default {
  name: 'ExperienceSamplingMethodForm',
  props: {
    id: String
  },
  data() {
    return {
      isProcessing: false
    };
  },
  components: {
    IntroSection,
    ConfidenceSection,
    MoodSection,
    PainSection,
    CompanySection,
    FeelsSection,
    FinalCommentsSection
  },
  methods: {
    ...mapActions(['postFormData']),
    sendAnswers() {
      if (this.isProcessing) return;

      this.isProcessing = true;

      this.postFormData(this.id)
        .then(() => this.$router.push({ name: 'success', params: { userId: this.id } }))
        .catch(() => this.$router.push('/error'))
        .finally(() => { this.isProcessing = false; });
    }
  }
};
</script>
