<template>
  <b-form-group
    :label-for=id
    :label=label
    label-cols-sm="5"
    label-align-sm="right">
    <b-form-input :id=id :type=type :v-model=model />
    </b-form-group>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    id: String,
    type: String,
    label: String,
    model: String,
  },
};
</script>

<style scoped>
</style>
