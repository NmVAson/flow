<template>
<div class="container">
  <h1>Results</h1>
  <ResultsChannelsDonutChart/>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import ResultsChannelsDonutChart from './ResultsChannelsDonutChart.vue';

export default {
  name: 'Results',
  components: {
    ResultsChannelsDonutChart
  },
  props: {
    id: String
  },
  mounted() {
    this.setID(this.id);
  },
  methods: {
    ...mapActions(['setID'])
  }
};
</script>

<style scoped>
.channels {
  width: 500px;
  margin: auto;
}
</style>
