import { reactive, readonly } from 'vue';
import axios from 'axios';

const state = reactive({
    couples: [],
    acara: [],
    quote: [],
    addtocalender: [],
    hadir: [],
    goto: [],
    invitation: [],
    ourmoment: [],
    ucapan: [],
    dompet:[]
});

const mutations = {
    updateCouples: (payload) => state.couples = payload,
    updateAcara: (payload) => state.acara = payload,
    updateQuote: (payload) => state.quote = payload,
    updateAddtocalender: (payload) => state.addtocalender = payload,
    updateHadir: (payload) => state.hadir = payload,
    updateGoto: (payload) => state.goto = payload,
    updateInvitation: (payload) => state.invitation = payload,
    updateOurmoment: (payload) => state.ourmoment = payload,
    updateUcapan: (payload) => state.ucapan = payload,
    updateDompet: (payload) => state.dompet = payload,
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
    getGoto: () => {
      return axios.get('http://localhost:3000/goto').then((response) => {
        mutations.updateGoto(response.data);
      });
    },
    getInvitation: () => {
      return axios.get('http://localhost:3000/spesial_invitation').then((response) => {
        mutations.updateInvitation(response.data);
      });
    },
    getOurmoment: () => {
      return axios.get('http://localhost:3000/ourMoment').then((response) => {
        mutations.updateOurmoment(response.data);
      });
    },
    getUcapan: () => {
      return axios.get('http://localhost:3000/ucapan').then((response) => {
        mutations.updateUcapan(response.data);
      });
    },
    getDompet: () => {
      return axios.get('http://localhost:3000/dompet').then((response) => {
        mutations.updateDompet(response.data);
      });
    },
};

export default {
  state: readonly(state),
  mutations,
  actions
};
