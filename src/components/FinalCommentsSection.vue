<template>
  <FormCard title="Final Thoughts" class="thoughts">
    <p>Since you were last beeped has anything
        happened or have you done anything which
        could have affected the way you feel?</p>
    <b-form-radio-group
        stacked
        id="affect"
        :options="options"
        :value="affect"
        @input="updateAffect"
      ></b-form-radio-group>
  </FormCard>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FormCard from './FormCard.vue';

export default {
  name: 'FinalCommentsSection',
  computed: {
    ...mapState(['affect']),
  },
  data: () => ({
    options: ['Yes, positively.', 'Yes, negatively.', 'No.'],
  }),
  components: {
    FormCard,
  },
  methods: {
    ...mapActions(['updateAffect']),
  },
};
</script>

<style scoped>
.thoughts {
  text-align: left;
}
</style>
