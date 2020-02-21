<template>
  <b-jumbotron bg-variant="light" class="container">
    <template v-slot:header>Ohhi!</template>
    <template v-slot:lead>
      This app administers an experience test based on Mihaly Csikszentmihalyi's
      reasearch on flow, or being "in the zone". It'll help you figure out which
      activities you do put you in flow, and contribute to your overall happiness.
    </template>
    <hr class="my-4">
    <blockquote class="blockquote">
      <p>We experience it as a uniﬁed ﬂowing from one moment to the next,
      in which we feel in control of our actions, and in which there is
      little distinction between self and environment; between stimulus
      and response; or between past, present, and future.</P>
      <footer class="blockquote-footer">Mihaly Csikszentmihalyi</footer>
    </blockquote>
    <hr class="my-4">
    <h2>The Test</h2>
    <p>A slackbot will prompt you, randomly, to fill out a survey 6 to 9 times
      a day during waking hours (8 am to 10 pm) for 7 days. At the end
      of the test, you'll be able to see activities that put you in flow,
      activities that bore you, and activities that give you anxiety.</p>
    <b-button variant="primary"
      href="https://slack.com/oauth/v2/authorize?client_id=9935879956.951685795523&scope=commands,incoming-webhook">
      <font-awesome-icon :icon="['fab', 'slack']" size="lg"/>
      start the test by adding this slackbot to your workspace
    </b-button>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'FormSuccess',
  props: {
    id: String
  }
};
</script>

<style scoped>
.container {
  padding: 0 20%;
}
.blockquote {
  padding: 0 20%;
  text-align: justify;
}
</style>
