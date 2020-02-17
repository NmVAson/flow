<template>
  <b-form-group
    :label-for=id
    :label=label
    label-cols-sm="5"
    label-align-sm="right"
    v-bind="model">
    <b-form-radio-group :id=id :options=options />
  </b-form-group>
</template>

<script>
export default {
  name: 'FormRadioLikertGroup',
  props: {
    id: String,
    label: String,
    model: String,
  },
  data: () => ({
    options: ['Not at all', '2', '3', '4', '5', '6', 'Very'],
  }),
};
</script>

<style scoped>
</style>
