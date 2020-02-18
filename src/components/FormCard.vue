<template>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      :label=title
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <slot></slot>
    </b-form-group>
  </b-card>
</template>

<script>
export default {
  name: 'FormCard',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px
}
</style>
