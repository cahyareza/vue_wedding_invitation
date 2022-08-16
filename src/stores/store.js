import { reactive, readonly } from 'vue';
import axios from 'axios';

const state = reactive({
    couples: [],
    acara: [],
    quote: [],
});

const mutations = {
    updateCouples: (payload) => state.couples = payload,
    updateAcara: (payload) => state.acara = payload,
    updateQuote: (payload) => state.quote = payload,
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
};

export default {
  state: readonly(state),
  mutations,
  actions
};
