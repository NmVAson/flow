<template>
<div class="container">
  <h1>Results</h1>
  <p class="text-muted">{{ totalExperiences }} / 56 experience sampling forms completed</p>
  <ResultsChannelsDonutChart :userID="id"/>
  <ResultsHappinessTable :userID="id"/>
</div>
</template>

<script>
import ResultsService from '@/api/ResultsService';
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
  data() {
    return {
      totalExperiences: '---'
    };
  },
  mounted() {
    ResultsService
      .getTotalResponses(this.id)
      .then((result) => { this.totalExperiences = result; });
  }
};
</script>

<style>
.channels {
  margin: auto;
  padding: 50px;
}
</style>
