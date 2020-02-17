<template>
  <FormCard title="Contextualize the Activity">
      <b-form-group
        label-for="datetime"
        label="Date"
        label-cols-sm="5"
        label-align-sm="right">
        <b-form-input id="datetime" type="datetime-local" v-model="datetime" disabled/>
      </b-form-group>

      <b-form-group
        label-for="thought"
        label="What were you thinking about?"
        label-cols-sm="5"
        label-align-sm="right">
        <b-form-input id="thought" type="text" v-model="thought"/>
      </b-form-group>

      <b-form-group
        label-for="place"
        label="Where were you?"
        label-cols-sm="5"
        label-align-sm="right">
        <b-form-input id="place" type="text" v-model="place"/>
      </b-form-group>

      <b-form-group
        label-for="action"
        label="What was the main thing you were doing?"
        label-cols-sm="5"
        label-align-sm="right">
        <b-form-input id="action" type="text" v-model="action"/>
      </b-form-group>

      <b-form-group
        label-for="why"
        label="Why were you doing this particular activity?"
        label-cols-sm="5"
        label-align-sm="right">
        <b-form-radio-group
          id="why"
          v-model="why"
          :options="whyOptions"
        ></b-form-radio-group>
      </b-form-group>
    </FormCard>
</template>

<script>
import moment from 'moment';
import FormCard from './FormCard.vue';

export default {
  name: 'IntroSection',
  props: {
    title: String,
    datetime: {
      type: Date,
      default: () => moment().format('YYYY-MM-DDTHH:mm:ss'),
    },
    thought: String,
    place: String,
    action: String,
    why: String,
    whyOptions: {
      type: Array,
      default: () => ['I had to', 'I wanted to', 'I had nothing else to do'],
    },
  },
  components: {
    FormCard,
  },
};
</script>

<style scoped>
</style>
