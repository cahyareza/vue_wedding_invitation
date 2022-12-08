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
    // theme: "false",
    theme: {},
    themeproduct: [],
    portofolio: [],
    story: [],
    acara: [],
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
    updateThemeProduct: (payload) => state.themeproduct = payload,
    updatePortofolio: (payload) => state.portofolio = payload,
    updateStory: (payload) => state.story = payload,
    updateAcara: (payload) => state.acara = payload,
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
    getQuote2: (slug) => {
      return axios.get(`http://127.0.0.1:8000/portofolio/api/quote/?portofolio__slug=${slug}`).then((response) => {
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
    getInvitation2: (slug) => {
      return axios.get(`http://127.0.0.1:8000/portofolio/api/specialinvitation/?portofolio__slug=${slug}`)
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
    getDompet2: (slug) => {
      return axios.get(`http://127.0.0.1:8000/portofolio/api/dompet/?portofolio__slug=${slug}`) .then((response) => {
        mutations.updateDompet(response.data);
      });
    },
    getTheme: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/themeproduct/?portofolio__slug=${slug.value}`) .then((response) => {
        const theme = { [response.data[0].theme.name]: true }
        // console.log(theme)
        mutations.updateTheme(theme);
      });
    },
    getTheme2: (slug) => {
      return axios.get(`http://127.0.0.1:8000/portofolio/api/themeproduct/?portofolio__slug=${slug}`) .then((response) => {
        // console.log(response.data[0])
        const theme = { [response.data[0].theme.name]: true }
        // console.log(theme)
        mutations.updateTheme(theme);
      });
    },
    getThemeProduct: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/themeproduct/?portofolio__slug=${slug.value}`) .then((response) => {
        // console.log(response.data[0])
        mutations.updateThemeProduct(response.data[0]);
      });
    },
    getThemeProduct2: (slug) => {
      return axios.get(`http://127.0.0.1:8000/portofolio/api/themeproduct/?portofolio__slug=${slug}`) .then((response) => {
        // console.log(response.data[0])
        mutations.updateThemeProduct(response.data[0]);
      });
    },
    getPortofolio: () => {
      actions.getSlug();
      // const route = useRoute();
      // console.log(route.params)
      // slug.value = route.params.slug
      // console.log(slug.value)
      return axios.get(`http://127.0.0.1:8000/portofolio/api/portofolio/?slug=${slug.value}`)
      .then((response) => {
        // console.log(response);
        if (response.data[0].timeZone) {
          if (response.data[0].timeZone == 'Asia/Jakarta') {
            response.data[0].timeZone = "WIB"
          } else if (response.data[0].timeZone == 'Asia/Makassar') {
            response.data[0].timeZone = "WITA"
          } else {
            response.data[0].timeZone = "WIT"
          }
        }
        mutations.updatePortofolio(response.data[0]);
      });
    },
    getPortofolio2: (slug) => {
      return axios.get(`http://127.0.0.1:8000/portofolio/api/portofolio/?slug=${slug}`)
      .then((response) => {
        // console.log(response);
        if (response.data[0].timeZone) {
          if (response.data[0].timeZone == 'Asia/Jakarta') {
            response.data[0].timeZone = "WIB"
          } else if (response.data[0].timeZone == 'Asia/Makassar') {
            response.data[0].timeZone = "WITA"
          } else {
            response.data[0].timeZone = "WIT"
          }
        }
        mutations.updatePortofolio(response.data[0]);
      });
    },
    getStory: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/story/?portofolio__slug=${slug.value}`) .then((response) => {
        // console.log(response.data);
        mutations.updateStory(response.data);
      });
    },
    getStory2: (slug) => {
      return axios.get(`http://127.0.0.1:8000/portofolio/api/story/?portofolio__slug=${slug}`) .then((response) => {
        // console.log(response.data);
        mutations.updateStory(response.data);
      });
    },
    getAcara: () => {
      actions.getSlug();
      return axios.get(`http://127.0.0.1:8000/portofolio/api/acara/?portofolio__slug=${slug.value}`) .then((response) => {
        // console.log(response.data);
        mutations.updateAcara(response.data);
      });
    },
    getAcara2: (slug) => {
      return axios.get(`http://127.0.0.1:8000/portofolio/api/acara/?portofolio__slug=${slug}`) .then((response) => {
        // console.log(response.data);
        mutations.updateAcara(response.data);
      });
    },
};

export default {
  state: readonly(state),
  mutations,
  actions
};
