import { reactive, readonly } from 'vue';
import axios from 'axios';

const state = reactive({
    couples: []
});

const mutations = {
    updateCouples: (payload) => state.couples = payload,
}

const actions = {
    getCouples: () => {
      return axios.get('http://localhost:3000/couples').then((response) => {
        mutations.updateCouples(response.data);
      });
    },
};

export default {
  state: readonly(state),
  mutations,
  actions
};
