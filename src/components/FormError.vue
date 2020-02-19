<template>
  <b-jumbotron bg-variant="warning">
    <template v-slot:header>Oh no!</template>
    <template v-slot:lead>
      Something caused an error when we saved your responses.
    </template>
    <hr class="my-4">
    <p>Someone will reach out to you momentarily.</p>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'FormError'
};
</script>
