<template>
  <FormCard title="Confidence">
    <div v-for="question in questions" v-bind:key="question.id" >
      <FormRadioLikertGroup :id=question.id :label=question.label />
    </div>
  </FormCard>
</template>

<script>
import FormCard from './FormCard.vue';
import FormRadioLikertGroup from './FormRadioLikertGroup.vue';

export default {
  name: 'ConfidenceSection',
  components: {
    FormCard,
    FormRadioLikertGroup,
  },
  data: () => ({
    questions: [
      { id: 'concentration', label: 'How well were you concentrating?' },
      { id: 'concentration-difficulty', label: 'Was it hard to concentrate?' },
      { id: 'conscious', label: 'How self-conscious were you?' },
      { id: 'positivity', label: 'Did you feel good about yourself?' },
      { id: 'control', label: 'Were you in control of the situation?' },
      { id: 'expectations-self', label: 'Were you living up to your own expectations?' },
      { id: 'expectations-others', label: 'Were you living up to expectations of others?' },
    ],
  }),
};
</script>

<style scoped>
</style>
