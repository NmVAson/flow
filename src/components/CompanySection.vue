<template>
  <FormCard title="Company">
    <b-form-group
      label-for="company"
      label="Who are you with?"
      label-cols-sm="5"
      label-align-sm="right">
      <b-form-select
        id="company"
        :options=options
        @input="updateCompany" />
    </b-form-group>
  </FormCard>
</template>

<script>
import { mapActions } from 'vuex';
import FormCard from './FormCard.vue';

export default {
  name: 'PainSection',
  components: {
    FormCard,
  },
  data: () => ({
    options: [
      'Alone',
      'Friend(s)',
      'Mother',
      'Father',
      'Sister(s) or brother(s)',
      'A female',
      'A male',
      'Other',
    ],
  }),
  methods: {
    ...mapActions([
      'updateCompany',
    ]),
  },
};
</script>
