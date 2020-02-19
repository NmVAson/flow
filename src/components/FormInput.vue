<template>
  <b-form-group
    :label-for=id
    :label=label
    label-cols-sm="5"
    label-align-sm="right">
    <b-form-input
      :id=id
      :type=type
      v-bind:value="value"
      v-on:input="$emit('input', $event);"/>
    </b-form-group>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    id: String,
    type: String,
    label: String,
    value: String,
  },
};
</script>
