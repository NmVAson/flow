import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import axios from 'axios';

Vue.use(Vuex);

const getters = {};

const mutations = {
  setID(state, value) {
    state.id = value;
  },
  updateDate(state, value) {
    state.datetime = value;
  },
  updateThought(state, value) {
    state.thought = value;
  },
  updatePlace(state, value) {
    state.place = value;
  },
  updateAction(state, value) {
    state.action = value;
  },
  updateWhy(state, value) {
    state.why = value;
  },
  updateConfidence(state, { key, value }) {
    state.confidenceMap[key] = value;
  },
  updateMood(state, { key, value }) {
    state.moodMap[key] = value;
  },
  updatePain(state, value) {
    state.pain = value;
  },
  updateCompany(state, value) {
    state.company = value;
  },
  updateFeels(state, { key, value }) {
    state.feelsMap[key] = value;
  },
  updateWho(state, value) {
    state.who = value;
  },
  updateWhat(state, value) {
    state.what = value;
  },
  updateAffect(state, value) {
    state.affect = value;
  },
};

const actions = {
  setID: ({ commit }, value) => commit('setID', value),
  updateDate: ({ commit }, value) => commit('updateDate', value),
  updateThought: ({ commit }, value) => commit('updateThought', value),
  updatePlace: ({ commit }, value) => commit('updatePlace', value),
  updateAction: ({ commit }, value) => commit('updateAction', value),
  updateWhy: ({ commit }, value) => commit('updateWhy', value),
  updateConfidence: ({ commit }, entry) => commit('updateConfidence', entry),
  updateMood: ({ commit }, entry) => commit('updateMood', entry),
  updatePain: ({ commit }, value) => commit('updatePain', value),
  updateCompany: ({ commit }, value) => commit('updateCompany', value),
  updateFeels: ({ commit }, entry) => commit('updateFeels', entry),
  updateWho: ({ commit }, value) => commit('updateWho', value),
  updateWhat: ({ commit }, value) => commit('updateWhat', value),
  updateAffect: ({ commit }, value) => commit('updateAffect', value),
  postFormData: ({ state }) => {
    axios
      .post('https://nmvason-flow.builtwithdark.com/esm', {
        formID: state.id,
        date: state.datetime,
        thought: state.thought,
        place: state.place,
        action: state.action,
        why: state.why,
        confidence: state.confidenceMap,
        mood: state.moodMap,
        pain: state.pain,
        company: state.company,
        feels: state.feelsMap,
        who: state.who,
        what: state.what,
        affect: state.affect,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default new Vuex.Store({
  state: {
    id: null,
    datetime: moment().format('YYYY-MM-DDTHH:mm:ss'),
    thought: '',
    place: '',
    action: '',
    why: '',
    confidenceMap: {},
    moodMap: {},
    pain: null,
    company: '',
    feelsMap: {},
    who: '',
    what: '',
    affect: '',
  },
  getters,
  mutations,
  actions,
});
