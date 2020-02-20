<template>
  <b-jumbotron bg-variant="light">
    <template v-slot:header>Success!</template>
    <template v-slot:lead>
      Thank you for submitting your flow experience sample.
    </template>
    <hr class="my-4">
    <p>Keep up the good work! You can always
      <router-link :to="{ path: `results/${id}` }">view your pending results.</router-link>
    </p>
  </b-jumbotron>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FormSuccess',
  computed: {
    ...mapState(['id'])
  }
};
</script>
