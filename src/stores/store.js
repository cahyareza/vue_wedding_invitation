import { reactive, readonly, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

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
    dompet:[],
    theme: "false",
    portofolio: [],
});

const slug = ref('');

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
    updateTheme: (payload) => state.theme = payload,
    updatePortofolio: (payload) => state.portofolio = payload,
}

const actions = {
    getSlug: () => {
      const route = useRoute();
      slug.value = route.params.slug
      return slug
    },
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
    getTheme: () => {
      return axios.get('http://localhost:3000/theme').then((response) => {
        mutations.updateTheme(response.data);
      });
    },
    getPortofolio: () => {
      actions.getSlug();
      // const route = useRoute();
      // slug.value = route.params.slug
      // console.log(slug.value)
      return axios.get('http://127.0.0.1:8000/portofolio/api/portofolio/?slug=${slug.value}')
      .then((response) => {
        // console.log(response.data.results);
        mutations.updatePortofolio(response.data.results[0]);
      });
    },
};

export default {
  state: readonly(state),
  mutations,
  actions
};
