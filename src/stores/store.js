import axios from 'axios';
import { useRoute } from 'vue-router';
import { defineStore } from 'pinia'
import { reactive, readonly, ref } from 'vue';
// store.js

var web_url = process.env.VUE_APP_WEB_URL_FIX

export const useCounterStore = defineStore('store', () => {
  const state = reactive({
    quote: [],
    hadir: [],
    invitation: [],
    multiimage: [],
    multiimagetheme: [],
    portobackground:[],
    ucapan: [],
    dompet:[],
    // theme: "false",
    theme: [],
    themeproduct: [],
    portofolio: [],
    story: [],
    acara: [],
    audio: [],
    dana: [],
  });

  const slug = ref('');
  const to = ref('');


  const mutations = {
    updateQuote: (payload) => state.quote = payload,
    updateHadir: (payload) => state.hadir = payload,
    updateInvitation: (payload) => state.invitation = payload,
    updateMultiImage: (payload) => state.multiimage = payload,
    updateMultiImageTheme: (payload) => state.multiimagetheme = payload,
    updateUcapan: (payload) => state.ucapan = payload,
    updateDompet: (payload) => state.dompet = payload,
    updateTheme: (payload) => state.theme = payload,
    updateThemeProduct: (payload) => state.themeproduct = payload,
    updatePortoBackground: (payload) => state.portobackground = payload,
    updatePortofolio: (payload) => state.portofolio = payload,
    updateStory: (payload) => state.story = payload,
    updateAcara: (payload) => state.acara = payload,
    updateAudio: (payload) => state.audio = payload,
    updateDana: (payload) => state.dana = payload,
}

  const actions = {
      getSlug: () => {
        const route = useRoute();
        slug.value = route.params.slug
        return slug
      },
      getTo: () => {
        const route = useRoute();
        to.value = route.params.to
        return to
      },
      getQuote: () => {
        actions.getSlug();
        return axios.get(`${web_url }api/portofolio/quote/?portofolio__slug=${slug.value}`).then((response) => {
          mutations.updateQuote(response.data[0]);
          // console.log(response.data[0])
        });
      },
      getQuote2: (slug) => {
        return axios.get(`${web_url}api/portofolio/quote/?portofolio__slug=${slug}`).then((response) => {
          mutations.updateQuote(response.data[0]);
          // console.log(response.data[0])
        });
      },
      getHadir: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/hadir/?portofolio__slug=${slug.value}`).then((response) => {
          mutations.updateHadir(response.data);
          // console.log(response.data.results);
        });
      },
      getInvitation: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/specialinvitation/?portofolio__slug=${slug.value}`)
        .then((response) => {
          mutations.updateInvitation(response.data);
        });
      },
      getInvitation2: (slug) => {
        return axios.get(`${web_url}api/portofolio/specialinvitation/?portofolio__slug=${slug}`)
        .then((response) => {
          mutations.updateInvitation(response.data);
        });
      },
      getMultiimage: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/multiimage/?portofolio__slug=${slug.value}`)
        .then((response) => {
          // console.log(response.data) 
          const imagelist = []
          for (let image in response.data) {
            imagelist.push(response.data[image].image)
          }
          mutations.updateMultiImage(imagelist);
        });
      },
      getMultiimage2: (slug) => {
        return axios.get(`${web_url}api/portofolio/multiimage/?portofolio__slug=${slug}`)
        .then((response) => {
          // console.log(response.data) 
          const imagelist = []
          for (let image in response.data) {
            imagelist.push(response.data[image].image)
          }
          mutations.updateMultiImage(imagelist);
        });
      },
      getMultiimageTheme2: (slug) => {
        return axios.get(`${web_url}api/portofolio/multiimagetheme/?portofolio__slug=${slug}`)
        .then((response) => {
          const imagethemelist = []
          for (let image in response.data) {
            imagethemelist.push(response.data[image].image)
          }
          mutations.updateMultiImageTheme(imagethemelist);
        });
      },
      getPortoBackground2: (slug) => {
        return axios.get(`${web_url}api/portofolio/portobackground/?portofolio__slug=${slug}`).then((response) => {
          mutations.updatePortoBackground(response.data[0]);
          // console.log(response.data[0])
        });
      },
      getUcapan: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/ucapan/?portofolio__slug=${slug.value}`) .then((response) => {
          mutations.updateUcapan(response.data);
        });
      },
      getDompet: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/dompet/?portofolio__slug=${slug.value}`) .then((response) => {
          mutations.updateDompet(response.data);
        });
      },
      getDompet2: (slug) => {
        return axios.get(`${web_url}api/portofolio/dompet/?portofolio__slug=${slug}`) .then((response) => {
          mutations.updateDompet(response.data);
        });
      },
      getTheme: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/themeproduct/?portofolio__slug=${slug.value}`) .then((response) => {
          const theme = { [response.data[0].theme.slug]: true }
          // console.log(theme)
          mutations.updateTheme(theme);
        });
      },
      getTheme2: (slug) => {
        return axios.get(`${web_url}api/portofolio/themeproduct/?portofolio__slug=${slug}`) .then((response) => {
          console.log(response.data[0])
          const theme = { [response.data[0].theme.slug]: true }
          // console.log(theme)
          mutations.updateTheme(theme);
        });
      },
      getThemeProduct: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/themeproduct/?portofolio__slug=${slug.value}`) .then((response) => {
          // console.log(response.data[0])
          mutations.updateThemeProduct(response.data[0]);
        });
      },
      getThemeProduct2: (slug) => {
        return axios.get(`${web_url}api/portofolio/themeproduct/?portofolio__slug=${slug}`) .then((response) => {
          // console.log(response.data[0])
          mutations.updateThemeProduct(response.data[0]);
        });
      },
      getPortofolio: () => {
        actions.getSlug();
        // const route = useRoute();
        // console.log(route.params)
        // slug.value = route.params.slug
        console.log(slug.value)
        return axios.get(`${web_url}api/portofolio/?slug=${slug.value}`)
        .then((response) => {
          // console.log(response);
          // if (response.data[0].timeZone) {
          //   if (response.data[0].timeZone == 'Asia/Jakarta') {
          //     response.data[0].timeZone = "WIB"
          //   } else if (response.data[0].timeZone == 'Asia/Makassar') {
          //     response.data[0].timeZone = "WITA"
          //   } else {
          //     response.data[0].timeZone = "WIT"
          //   }
          // }
          response.data[0].datetime_countdown = response.data[0].datetime_countdown.replace(/-/g, "/");
          mutations.updatePortofolio(response.data[0]);
        });
      },
      getPortofolio2: (slug) => {
        return axios.get(`${web_url}api/portofolio/?slug=${slug}`)
        .then((response) => {
          if (response.data[0].timeZone) {
            if (response.data[0].timeZone == 'Asia/Jakarta') {
              response.data[0].timeZone = "WIB"
            } else if (response.data[0].timeZone == 'Asia/Makassar') {
              response.data[0].timeZone = "WITA"
            } else {
              response.data[0].timeZone = "WIT"
            }
          }
          response.data[0].datetime_countdown = response.data[0].datetime_countdown.replace(/-/g, "/");
          mutations.updatePortofolio(response.data[0]);
        });
      },
      getStory: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/story/?portofolio__slug=${slug.value}`) .then((response) => {
          // console.log(response.data);
          mutations.updateStory(response.data);
        });
      },
      getStory2: (slug) => {
        return axios.get(`${web_url}api/portofolio/story/?portofolio__slug=${slug}`) .then((response) => {
          // console.log(response.data);
          mutations.updateStory(response.data);
        });
      },
      getAcara: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/acara/?portofolio__slug=${slug.value}`) .then((response) => {
          // console.log(response.data);
          mutations.updateAcara(response.data);
        });
      },
      getAcara2: (slug) => {
        return axios.get(`${web_url}api/portofolio/acara/?portofolio__slug=${slug}`) .then((response) => {
          // console.log(response.data);
          mutations.updateAcara(response.data);
        });
      },
      getAudio: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/?slug=${slug.value}`) .then((response) => {
          // console.log(response.data[0].track.url)
          // eslint-disable-next-line
          let myregex = /https\:\/\/drive\.google\.com\/file\/d\/([a-z0-9\-_]+)\&?/i
          // console.log(response.data[0].track)
          let text = response.data[0].track.url
          let result = text.match(myregex)[1]
          // console.log(result)
          let audio1 = new Audio(`"https://docs.google.com/uc?export=open&id=${result}"`)
          // console.log(audio1)
          mutations.updateAudio(audio1);
        });
      },
      getDana: () => {
        actions.getSlug();
        return axios.get(`${web_url}api/portofolio/dana/?portofolio__slug=${slug.value}`) .then((response) => {
          // console.log(response.data);
          mutations.updateDana(response.data);
        });
      },
  };

  return {
    state: readonly(state),
    mutations,
    actions,
  };

})