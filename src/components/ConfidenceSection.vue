<template>
  <FormCard title="Confidence">
    <div v-for="question in questions" v-bind:key="question.id" >
      <FormRadioLikertGroup
        :id=question.id
        :label=question.label
        @input="e => updateConfidence({ 'key': question.id, 'value': e })"/>
    </div>
  </FormCard>
</template>

<script>
import { mapActions } from 'vuex';
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
      { id: 'difficulty', label: 'Was it hard to concentrate?' },
      { id: 'conscious', label: 'How self-conscious were you?' },
      { id: 'positivity', label: 'Did you feel good about yourself?' },
      { id: 'control', label: 'Were you in control of the situation?' },
      { id: 'self', label: 'Were you living up to your own expectations?' },
      { id: 'others', label: 'Were you living up to expectations of others?' },
    ],
  }),
  methods: {
    ...mapActions([
      'updateConfidence',
    ]),
  },
};
</script>
