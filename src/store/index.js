import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import axios from 'axios';

Vue.use(Vuex);

const getters = {};

const mutations = {
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
    state.confidenceMap.set(key, value);
  },
  updateMood(state, { key, value }) {
    state.moodMap.set(key, value);
  },
  updatePain(state, value) {
    state.pain = value;
  },
  updateCompany(state, value) {
    state.company = value;
  },
};

const actions = {
  updateDate: ({ commit }, value) => commit('updateDate', value),
  updateThought: ({ commit }, value) => commit('updateThought', value),
  updatePlace: ({ commit }, value) => commit('updatePlace', value),
  updateAction: ({ commit }, value) => commit('updateAction', value),
  updateWhy: ({ commit }, value) => commit('updateWhy', value),
  updateConfidence: ({ commit }, entry) => commit('updateConfidence', entry),
  updateMood: ({ commit }, entry) => commit('updateMood', entry),
  updatePain: ({ commit }, value) => commit('updatePain', value),
  updateCompany: ({ commit }, value) => commit('updateCompany', value),
  postFormData: ({ state }) => {
    axios
      .post('https://nmvason-flow.builtwithdark.com/esm', {
        date: state.datetime,
        thought: state.thought,
        place: state.place,
        action: state.action,
        why: state.why,
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
    datetime: moment().format('YYYY-MM-DDTHH:mm:ss'),
    thought: '',
    place: '',
    action: '',
    why: '',
    confidenceMap: new Map(),
    moodMap: new Map(),
    pain: null,
    company: '',
  },
  getters,
  mutations,
  actions,
});
