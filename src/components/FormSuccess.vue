<template>
  <b-jumbotron bg-variant="light">
    <template v-slot:header>Success!</template>
    <template v-slot:lead>
      Thank you for submitting your flow experience sample.
    </template>
    <hr class="my-4">
    <p>We have recieved your response and will let you know when your
      results are ready.</p>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'FormSuccess'
};
</script>
