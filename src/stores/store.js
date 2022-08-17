import { reactive, readonly } from 'vue';
import axios from 'axios';

const state = reactive({
    couples: [],
    acara: [],
    quote: [],
    addtocalender: [],
    hadir: []
});

const mutations = {
    updateCouples: (payload) => state.couples = payload,
    updateAcara: (payload) => state.acara = payload,
    updateQuote: (payload) => state.quote = payload,
    updateAddtocalender: (payload) => state.addtocalender = payload,
    updateHadir: (payload) => state.hadir = payload,
}

const actions = {
    getCouples: () => {
      return axios.get('http://localhost:3000/couples').then((response) => {
        mutations.updateCouples(response.data);
      });
    },
    getAcara: () => {
      return axios.get('http://localhost:3000/acara').then((response) => {
        mutations.updateAcara(response.data);
      });
    },
    getQuote: () => {
      return axios.get('http://localhost:3000/quotes').then((response) => {
        mutations.updateQuote(response.data);
      });
    },
    getAddtocalender: () => {
      return axios.get('http://localhost:3000/addtocalender').then((response) => {
        mutations.updateAddtocalender(response.data);
      });
    },
    getHadir: () => {
      return axios.get('http://localhost:3000/hadir').then((response) => {
        mutations.updateHadir(response.data);
      });
    },
};

export default {
  state: readonly(state),
  mutations,
  actions
};
