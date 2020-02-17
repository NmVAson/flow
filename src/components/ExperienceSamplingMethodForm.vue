<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <b-form-group label-for="datetime" label="Date" label-cols="auto">
      <b-form-input id="datetime" type="datetime-local" v-model="datetime" disabled></b-form-input>
    </b-form-group>

    <b-form-group label-for="thought" label="What were you thinking about?" label-cols="auto">
      <b-form-input id="thought" type="text" v-model="thought"></b-form-input>
    </b-form-group>

    <b-form-group label-for="place" label="Where were you?" label-cols="auto">
      <b-form-input id="place" type="text" v-model="place"></b-form-input>
    </b-form-group>

    <b-form-group
      label-for="action"
      label="What was the main thing you were doing?"
      label-cols="auto">
      <b-form-input id="action" type="text" v-model="action"></b-form-input>
    </b-form-group>

    <b-form-group
      label-for="why"
      label="Why were you doing this particular activity?"
      label-cols="auto">
      <b-form-radio-group
        id="why"
        v-model="why"
        :options="whyOptions"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ExperienceSamplingMethodForm',
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
