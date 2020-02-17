<template>
  <FormCard title="Contextualize the Activity">
    <FormInput id="datetime" label="Date" type="datetime-local"/>
    <FormInput id="thought" label="What were you thinking about?" type="text"/>
    <FormInput id="place" label="Where were you?" type="text"/>
    <FormInput id="action" label="What was the main thing you were doing?" type="text"/>
    <b-form-group
      label-for="why"
      label="Why were you doing this particular activity?"
      label-cols-sm="5"
      label-align-sm="right">
      <b-form-radio-group
        id="why"
        :options="whyOptions"
      ></b-form-radio-group>
    </b-form-group>
  </FormCard>
</template>

<script>
import FormCard from './FormCard.vue';
import FormInput from './FormInput.vue';

export default {
  name: 'IntroSection',
  props: {
    title: String,
  },
  data: () => ({
    whyOptions: ['I had to', 'I wanted to', 'I had nothing else to do'],
  }),
  components: {
    FormCard,
    FormInput,
  },
};
</script>

<style scoped>
</style>
