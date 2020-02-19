<template>
  <FormCard title="Context">
    <FormInput
      id="datetime"
      label="Date"
      type="datetime-local"
      :value="datetime"
      @input="updateDate"/>
    <FormInput
      id="thought"
      label="What were you thinking about?"
      type="text"
      :value="thought"
      @input="updateThought"/>
    <FormInput
      id="place"
      label="Where were you?"
      type="text"
      :value="place"
      @input="updatePlace"/>
    <FormInput
      id="action"
      label="What was the main thing you were doing?"
      type="text"
      :value="action"
      @input="updateAction"/>
    <b-form-group
      label-for="why"
      label="Why were you doing this particular activity?"
      label-cols-sm="5"
      label-align-sm="right">
      <b-form-radio-group
        id="why"
        :options="whyOptions"
        :value="why"
        @input="updateWhy"
      ></b-form-radio-group>
    </b-form-group>
  </FormCard>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FormCard from './FormCard.vue';
import FormInput from './FormInput.vue';

export default {
  name: 'IntroSection',
  computed: {
    ...mapState([
      'datetime',
      'thought',
      'place',
      'action',
      'why',
    ]),
  },
  data: () => ({
    whyOptions: ['I had to', 'I wanted to', 'I had nothing else to do'],
  }),
  components: {
    FormCard,
    FormInput,
  },
  methods: {
    ...mapActions([
      'updateDate',
      'updateThought',
      'updatePlace',
      'updateAction',
      'updateWhy',
    ]),
  },
};
</script>

<style scoped>
</style>
