import { inject, computed } from 'vue'


export default function useStore(){
    // LOAD STATE
    const store = inject('store');

    // SLUG
    const slug = store.actions.getSlug().value;

    // PORTOFOLIO
    const portofolio = computed(() => store.state.portofolio);

    // THEME
    const theme = computed(() => store.state.theme);
    const themeproduct = computed(() => store.state.themeproduct);

    // DOMPET
    var dompets = computed(() => store.state.dompet);

    // HADIR
    const hadir = computed(() => store.state.hadir); 

    // STORY
    const story = computed(() => store.state.story); 

    var web_url = process.env.VUE_APP_WEB_URL_FIX

    return {
        store,
        slug,
        portofolio,
        theme,
        themeproduct,
        dompets,
        web_url,
        hadir,
        story
    }
}