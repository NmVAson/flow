<template>
<div class="channels">
  <h2>You spent {{ percentInFlow }}% of your time in flow</h2>
  <ResultsDonutChart :chartData="chartData" :options="chartOptions"/>
</div>
</template>

<script>
import ResultsService from '@/api/ResultsService';
import ResultsDonutChart from './ResultsDonutChart.vue';

export default {
  name: 'ResultsChannelsDonutChart',
  components: {
    ResultsDonutChart
  },
  props: {
    userID: String
  },
  data: () => ({
    percentInFlow: '---',
    chartData: {},
    chartOptions: {
      tooltips: {
        enabled: true,
        callbacks: {
          label: ((tooltipItems, data) => {
            const i = tooltipItems.index;
            const value = data.datasets[0].data[i];
            const uom = value === 1 ? 'experience' : 'experiences';
            const channel = data.labels[tooltipItems.index];

            return `${channel} (${value} ${uom})`;
          }),
          afterLabel: ((tooltipItems, data) => {
            const i = tooltipItems.index;
            const activities = data.datasets[0].activities[i].map((a) => `- ${a}`);

            return ['', 'Experiences:', ...activities];
          })
        }
      }
    }
  }),
  mounted() {
    ResultsService
      .getActivitiesByChannelofExperience(this.userID)
      .then(this.setChartData);
  },
  methods: {
    setChartData(result) {
      const labels = Array.from(result.keys());
      const values = Array.from(result.values());
      const counts = values.map((activityList) => activityList.length);
      const totalExperiences = counts.reduce((total, cur) => total + cur, 0);

      const percentInFlow = result.get('flow')?.length / totalExperiences;
      this.percentInFlow = Math.round(percentInFlow * 100) || '---';

      const dataset = {
        label: 'Channels of Experience',
        backgroundColor: ['#70A9A1', '#B2B09B', '#FF6F59'],
        data: counts,
        activities: values
      };

      this.chartData = {
        labels,
        datasets: [dataset]
      };
    }
  }
};
</script>
