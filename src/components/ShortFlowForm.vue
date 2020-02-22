<template>
  <div class="container">
    <h1>Experience Sampling Form</h1>
    <FormCard>
      <FormInput
        id="datetime"
        label="Date"
        type="datetime-local"
        :value="datetime"
        @input="updateDate"/>
      <FormInput
        id="action"
        label="What was the main thing you were doing?"
        type="text"
        :value="action"
        @input="updateAction"/>
      <b-form-group
        label-for="why"
        label="Why were you doing this particular activity?"
        label-cols-sm="5"
        label-align-sm="right">
        <b-form-radio-group
          id="why"
          :options="whyOptions"
          :value="why"
          @input="updateWhy"
        ></b-form-radio-group>
      </b-form-group>
      <b-form-group
        label="How do you feel?"
        label-cols-sm="5"
        label-align-sm="right">
        <b-form-radio-group
          buttons
          button-variant="outline-secondary"
          v-model="happy"
          @input="e => updateMood({ 'key': 'happy', 'value': e })">
          <b-form-radio value="3">
            <font-awesome-icon icon="laugh-beam" size="lg"/>
          </b-form-radio>
          <b-form-radio value="0">
            <font-awesome-icon icon="meh" size="lg"/>
          </b-form-radio>
          <b-form-radio value="-3">
            <font-awesome-icon icon="sad-tear" size="lg"/>
          </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group
        label="Do you wish you were doing something else?"
        label-cols-sm="5"
        label-align-sm="right">
        <b-form-radio-group
          buttons
          button-variant="outline-secondary"
          v-model="wish"
          @input="e => updateFeels({ 'key': 'wish', 'value': e })">
          <b-form-radio value="1">
            <font-awesome-icon icon="thumbs-up" size="lg"/>
          </b-form-radio>
          <b-form-radio value="0">
            <font-awesome-icon icon="thumbs-down" size="lg"/>
          </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <FormRadioLikertGroup
        id="challenge"
        label="Are you challenged by the activity?"
        @input="e => updateFeels({ 'key': 'challenge', 'value': e })"/>
      <FormRadioLikertGroup
        id="skill"
        label="Are you skilled in the activity?"
        @input="e => updateFeels({ 'key': 'skill', 'value': e })"/>
    </FormCard>
    <b-button
      variant="primary"
      v-on:click="sendAnswers"
      v-bind:class="{ disabled: isProcessing }">Submit</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FormCard from './FormCard.vue';
import FormInput from './FormInput.vue';
import FormRadioLikertGroup from './FormRadioLikertGroup.vue';

export default {
  name: 'ShortFlowForm',
  props: {
    id: String,
    happy: Number,
    wish: Boolean
  },
  data: () => ({
    isProcessing: false,
    whyOptions: ['I had to', 'I wanted to', 'I had nothing else to do']
  }),
  components: {
    FormCard,
    FormInput,
    FormRadioLikertGroup
  },
  computed: {
    ...mapState([
      'datetime',
      'action',
      'why'
    ])
  },
  methods: {
    ...mapActions([
      'updateDate',
      'updateAction',
      'updateWhy',
      'updateMood',
      'updateFeels',
      'postFormData'
    ]),
    sendAnswers() {
      if (this.isProcessing) return;

      this.isProcessing = true;

      this.postFormData(this.id)
        .then(() => this.$router.push({ name: 'success', params: { userId: this.id } }))
        .catch(() => this.$router.push('/error'))
        .finally(() => { this.isProcessing = false; });
    }
  }
};
</script>

<style scoped>
</style>
