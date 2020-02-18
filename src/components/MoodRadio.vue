<template>
  <b-form-radio-group
    :id=id
    :options=options
    buttons
    button-variant="outline-secondary"
    v-bind:value="value"
    v-on:input="$emit('input', $event);" />
</template>

<script>
export default {
  name: 'FormRadioLikertGroup',
  props: {
    id: String,
    value: String,
  },
  data: () => ({
    options: [
      { text: 'very', value: 1 },
      { text: 'quite', value: 2 },
      { text: 'some', value: 3 },
      { text: 'neither', value: 4 },
      { text: 'some', value: 5 },
      { text: 'quite', value: 6 },
      { text: 'very', value: 7 },
    ],
  }),
};
</script>
