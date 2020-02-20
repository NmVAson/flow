<template>
<div class="container">
  <h1>Results</h1>
  <ResultsChannelsDonutChart/>
  <ResultsHappinessTable/>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import ResultsChannelsDonutChart from './ResultsChannelsDonutChart.vue';
import ResultsHappinessTable from './ResultsHappinessTable.vue';

export default {
  name: 'Results',
  components: {
    ResultsChannelsDonutChart,
    ResultsHappinessTable
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

<style>
.channels {
  margin: auto;
  padding: 50px;
}
</style>
