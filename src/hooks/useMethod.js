import useClipboard from 'vue-clipboard3'
import moment from 'moment';

export default function useMethod(){
    // COPY METHOD
    const { toClipboard } = useClipboard()

    const copy = async (vari) => {
        try {
            await toClipboard(vari)
            // console.log('Copied to clipboard')
        } catch (e) {
            console.error(e)
        }
    }

    // TANGGAL METHOD
    const tanggal = (value) => {
        return moment(value).locale('id').format('dddd, DD MMMM YYYY');
    }

    // WAKTU METHOD
    const waktu = (value) => {
        return moment(value, "HH:mm:ss").format("HH:mm");
    }

    // MOVE METHOD
    const move = (val, multiimage) => {
        var flag = val.value;
        flag++;
        if(flag >= multiimage.length){
            flag = 0;
        }
        val.value = flag
        val.id = flag
    }

    const change_timezone = (value) => {
        if (value == 'Asia/Jakarta') {
            return "WIB"
        } else if (value == 'Asia/Makassar') {
            return "WITA"
        } else if (value == 'Asia/Jayapura'){
            return "WIT"
        } else {
            return value
        }
    }
    
    return {
        copy,
        tanggal,
        waktu,
        move,
        change_timezone
    }
}