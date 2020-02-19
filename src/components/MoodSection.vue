<template>
  <FormCard title="Mood">
    <b-container>
      <b-row class="mood" v-for="mood in moods" v-bind:key="mood.left">
        <b-col>{{ mood.left }}</b-col>
        <b-col cols="7">
          <MoodRadio
            class="radio"
            :id=mood.left
            @input="e => updateMood({ 'key': mood.left, 'value': e })"/>
        </b-col>
        <b-col>{{ mood.right }}</b-col>
      </b-row>
    </b-container>
  </FormCard>
</template>

<script>
import { mapActions } from 'vuex';
import FormCard from './FormCard.vue';
import MoodRadio from './MoodRadio.vue';

export default {
  name: 'MoodSection',
  components: {
    FormCard,
    MoodRadio
  },
  data: () => ({
    moods: [
      { left: 'alert', right: 'drowsy' },
      { left: 'happy', right: 'sad' },
      { left: 'irritable', right: 'cheerful' },
      { left: 'strong', right: 'weak' },
      { left: 'active', right: 'passive' },
      { left: 'lonely', right: 'sociable' },
      { left: 'ashamed', right: 'proud' },
      { left: 'involved', right: 'detached' },
      { left: 'excited', right: 'bored' },
      { left: 'closed', right: 'open' },
      { left: 'clear', right: 'confused' },
      { left: 'tense', right: 'relaxed' },
      { left: 'competitive', right: 'cooperative' }
    ]
  }),
  methods: {
    ...mapActions([
      'updateMood'
    ])
  }
};
</script>

<style scoped>
.mood {
  align-items: center;
  padding: 5px;
}
</style>
