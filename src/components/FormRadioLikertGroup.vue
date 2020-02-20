<template>
  <b-form-group
    :label-for=id
    :label=label
    label-cols-sm="5"
    label-align-sm="right">
    <b-form-radio-group
      :id=id
      :options=options
      buttons
      button-variant="outline-secondary"
      v-bind:value="value"
      v-on:input="$emit('input', $event);" />
  </b-form-group>
</template>

<script>
export default {
  name: 'FormRadioLikertGroup',
  props: {
    id: String,
    label: String,
    value: String
  },
  data: () => ({
    options: [
      { text: 'not at all', value: 0 },
      { text: '1', value: 1 },
      { text: '2', value: 2 },
      { text: '3', value: 3 },
      { text: '4', value: 4 },
      { text: '5', value: 5 },
      { text: 'very', value: 6 }
    ]
  })
};
</script>
