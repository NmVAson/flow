<template>
<div class="channels">
  <h2>{{ percentHappy }}% of your experiences made you happy!</h2>
  <b-card-group deck>
    <b-card no-body footer="in descending order of happiness" footer-class="text-muted">
      <b-card-header>
        <font-awesome-icon icon="laugh-beam" size="3x"></font-awesome-icon>
      </b-card-header>
      <b-card-body>
        <b-list-group flush v-for="item in happyList" :key="item">
          <b-list-group-item>{{ item }}</b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>

    <b-card no-body footer="in descending order of sadness" footer-class="text-muted">
      <b-card-header>
        <font-awesome-icon icon="sad-cry" size="3x"></font-awesome-icon>
      </b-card-header>
      <b-card-body>
        <b-list-group flush v-for="item in sadList" :key="item">
          <b-list-group-item>{{ item }}</b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
import ResultsService from '@/api/ResultsService';

export default {
  name: 'ResultsHappinessTable',
  props: {
    userID: String
  },
  data: () => ({
    percentHappy: '---',
    happyList: [],
    sadList: []
  }),
  mounted() {
    ResultsService
      .getActivitiesByMood(this.userID)
      .then(this.setLists);
  },
  methods: {
    setLists(results) {
      this.happyList = results.get('happy');
      this.sadList = results.get('sad');

      const totalExperiences = [...results.values()].flat().length;
      this.percentHappy = Math.round((this.happyList.length / totalExperiences) * 100);
    }
  }
};
</script>
