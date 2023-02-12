import useClipboard from 'vue-clipboard3'
import moment from 'moment';
import axios from 'axios';

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

    // FORMS DANA
    const confirmDana = (web_url, store, slug, fieldErrors, fields) => {
        fieldErrors.nama= undefined;
        fieldErrors.jumlah= undefined;
        fieldErrors.pesan= undefined;
        fieldErrors.ditransfer_ke= undefined;
        fieldErrors.error= 0;

        validateForm(fields);
        if (fieldErrors.error != 0) return;

        axios
            .post(`${web_url}portofolio/api/dana/?portofolio__slug=${slug}`, fields)
            .then(() => {
                console.log('berhasil post');
                fields.nama = null;
                fields.jumlah = null;
                fields.pesan = null;
                fields.ditransfer_ke = null;


                axios.get(`${web_url}portofolio/api/dana/?portofolio__slug=${slug}`).then((response) => {
                    // console.log(response.data)
                    store.mutations.updateDana(response.data);
                });

                fields.message = "Terimakasih telah mengisi form"

            })
            .catch((err) => console.log(err));
    }

    const validateForm = (fields, fieldErrors) => {
        const errors = {};

        if (!fields.nama) {
            fieldErrors.nama = "Nama Required";
            fieldErrors.error += 1;
        }
        if (!fields.jumlah) {
            fieldErrors.jumlah = "Jumlah Required"; 
            fieldErrors.error += 1;
        }
        if (!fields.pesan) {
            fieldErrors.pesan = "Pesan Required"; 
            fieldErrors.error += 1;
        }
        if (!fields.ditransfer_ke) {
            fieldErrors.ditransfer_ke = "Ditransfer Required"; 
            fieldErrors.error += 1;
        }

        if (fields.jumlah && !numbervalid(fields.jumlah)) {
            fieldErrors.jumlah = "Just number required!";
            fieldErrors.error += 1;
        }

        return errors;
    };

    const numbervalid = (numberfield) => {
        const re = /^\d+\.?\d*$/;
        return re.test(numberfield);
    }
    
    return {
        copy,
        tanggal,
        waktu,
        confirmDana,
    }
}