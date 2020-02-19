<template>
  <FormCard title="Feels">
    <div v-for="question in questions" v-bind:key="question.id" >
      <FormRadioLikertGroup
        :id=question.id
        :label=question.label
        @input="e => updateFeels({ 'key': question.id, 'value': e })"/>
    </div>
    <p><i>If you had a choice...</i></p>
    <FormInput
      id="who"
      label="Who would you be with?"
      type="text"
      :value="who"
      @input="updateWho"/>
    <FormInput
      id="what"
      label="What would you be doing?"
      type="text"
      :value="what"
      @input="updateWhat"/>
  </FormCard>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FormCard from './FormCard.vue';
import FormRadioLikertGroup from './FormRadioLikertGroup.vue';
import FormInput from './FormInput.vue';

export default {
  name: 'FeelsSection',
  components: {
    FormCard,
    FormRadioLikertGroup,
    FormInput,
  },
  computed: {
    ...mapState([
      'who',
      'what',
    ]),
  },
  data: () => ({
    questions: [
      { id: 'challenge', label: 'Are you challenged by the activity?' },
      { id: 'skill', label: 'Are you skilled in the activity?' },
      { id: 'self-importance', label: 'Was this activity important to you?' },
      { id: 'others-importance', label: 'Was this activity important to others?' },
      { id: 'success', label: 'Were you succeeding at what you were doing?' },
      { id: 'wish', label: 'Do you wish you had been doing something else?' },
      { id: 'satisfaction', label: 'Were you satisfied with how you were doing?' },
      { id: 'importance', label: 'How important was this activity in relation to your overall goals?' },
    ],
  }),
  methods: {
    ...mapActions([
      'updateFeels',
      'updateWho',
      'updateWhat',
    ]),
  },
};
</script>
