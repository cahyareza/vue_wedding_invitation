import { reactive, readonly, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const state = reactive({
    quote: [],
    hadir: [],
    invitation: [],
    multiimage: [],
    ucapan: [],
    dompet:[],
    theme: "false",
    portofolio: [],
});

const slug = ref('');

const mutations = {
    updateQuote: (payload) => state.quote = payload,
    updateHadir: (payload) => state.hadir = payload,
    updateInvitation: (payload) => state.invitation = payload,
    updateMultiImage: (payload) => state.multiimage = payload,
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
    getQuote: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/quote/?portofolio__slug=${slug.value}`).then((response) => {
        mutations.updateQuote(response.data[0]);
        // console.log(response.data[0])
      });
    },
    getHadir: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/hadir/?portofolio__slug=${slug.value}`).then((response) => {
        mutations.updateHadir(response.data);
        // console.log(response.data.results);
      });
    },
    getInvitation: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/specialinvitation/?portofolio__slug=${slug.value}`)
      .then((response) => {
        mutations.updateInvitation(response.data);
      });
    },
    getMultiimage: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/multiimage/?portofolio__slug=${slug.value}`)
      .then((response) => {
        // console.log(response.data) 
        const imagelist = []
        for (let image in response.data) {
          imagelist.push(response.data[image].image)
        }
        mutations.updateMultiImage(imagelist);
      });
    },
    getUcapan: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/ucapan/?portofolio__slug=${slug.value}`) .then((response) => {
        mutations.updateUcapan(response.data);
      });
    },
    getDompet: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/dompet/?portofolio__slug=${slug.value}`) .then((response) => {
        mutations.updateDompet(response.data);
      });
    },
    getTheme: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/themeproduct/?portofolio__slug=${slug.value}`) .then((response) => {
        const theme = { [response.data[0].theme]: true }
        mutations.updateTheme(theme);
      });
    },
    getPortofolio: () => {
      actions.getSlug();
      // const route = useRoute();
      // slug.value = route.params.slug
      // console.log(slug.value)
      return axios.get(`http://127.0.0.1:8000/portofolio/api/portofolio/?slug=${slug.value}`)
      .then((response) => {
        // console.log(response.data[0]);
        mutations.updatePortofolio(response.data[0]);
      });
    },
};

export default {
  state: readonly(state),
  mutations,
  actions
};
