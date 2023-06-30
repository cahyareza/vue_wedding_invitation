import { computed } from 'vue'
import {useCounterStore} from '@/stores/store'


export default function useStore(){
    // LOAD STATE
    const store = useCounterStore();

    // SLUG
    const slug = store.actions.getSlug().value;

    // PORTOFOLIO
    const portofolio = computed(() => store.state.portofolio);

    // THEME
    const theme = computed(() => store.state.theme);
    const themeproduct = computed(() => store.state.themeproduct);

    // QUOTE
    const quote = computed(() => store.state.quote); 

    // ACARA
    const acara = computed(() => store.state.acara);

    // INVITATION
    const invitation = computed(() => store.state.invitation);

    // DOMPET
    var dompets = computed(() => store.state.dompet);
    var dompet = computed(() => store.state.dompet);

    // HADIR
    const hadir = computed(() => store.state.hadir); 

    // STORY
    const story = computed(() => store.state.story); 

    // MULTIIMAGE
    const multiimage = computed(() => store.state.multiimage);
    
    // MULTIIMAGETHEME
    const multiimagetheme = computed(() => store.state.multiimagetheme); 

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
        story,
        quote,
        acara,
        invitation,
        multiimage,
        multiimagetheme,
        dompet,
    }
}