import { ref } from 'vue'

const countdown = ref(null)

const useTimer = () => {
    const createTimer = (target, container, cb) => {
        // target => UNIX time target
        // Container => variable for return result
        // cb => callback if countdown finish
        const now = new Date().getTime()
        const distance = target - now
        if ( distance > 0 ) {
        const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
        const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const detik = Math.floor((distance % (1000 * 60)) / 1000);
        
        container.value = { hari, jam, menit, detik }
        //alert(JSON.stringify(container))
        
        if (hari === 0 && jam === 0 && menit === 0 && detik === 0 ) cb()
        } else {
        container.value = { hari: 0, jam: 0, menit: 0, detik: 0 }
        } 
    };

    return {
        createTimer,
        countdown
    };
}

export default useTimer;