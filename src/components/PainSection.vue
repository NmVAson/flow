<template>
  <FormCard title="Overall Pain or Discomfort">
    <b-form-group
      label-for="pain"
      label="Do you feel any physical discomfort?"
      label-cols-sm="5"
      label-align-sm="right">
      <b-form-radio-group
        id="pain"
        :options=options
        buttons
        button-variant="outline-secondary"
        @input="updatePain" />
    </b-form-group>
  </FormCard>
</template>

<script>
import { mapActions } from 'vuex';
import FormCard from './FormCard.vue';

export default {
  name: 'PainSection',
  components: {
    FormCard
  },
  data: () => ({
    options: [
      { text: 'none', value: 1 },
      { text: '2', value: 2 },
      { text: '3', value: 3 },
      { text: '4', value: 4 },
      { text: '5', value: 5 },
      { text: '6', value: 6 },
      { text: 'severe', value: 7 }
    ]
  }),
  methods: {
    ...mapActions([
      'updatePain'
    ])
  }
};
</script>
