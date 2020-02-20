<template>
<div class="container">
  <h1>Results</h1>
  <p class="text-muted">{{ totalExperiences }} / 56 experience sampling forms completed</p>
  <ResultsChannelsDonutChart/>
  <ResultsHappinessTable/>
</div>
</template>

<script>
import { mapActions } from 'vuex';
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
    this.setID(this.id);

    ResultsService.getTotalResponses().then((result) => { this.totalExperiences = result; });
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
