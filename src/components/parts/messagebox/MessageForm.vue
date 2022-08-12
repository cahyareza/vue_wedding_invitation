<template>
    <div class="container m-4 mt-1">
        <div class="box">
            <form class="form">
                <p class="has-text-weight-bold mb-4"> Kirim ucapan:</p>
                <!-- New Item Field -->
                <div class="field">
                    <div class="control">
                        <input class="input" v-model="fields.nama" type="text" placeholder="Nama lengkap">
                        <span style="color: red">{{ fieldErrors.nama }}</span>
                    </div>
                </div>

                <!-- Email Field -->
                <div class="field">
                    <div class="control">
                        <input class="input" v-model="fields.alamat" type="text" placeholder="Alamat">
                        <span style="color: red">{{ fieldErrors.alamat }}</span>
                    </div>
                </div>  

                <!-- Urgency Field -->
                <div class="field">
                    <div class="control">
                        <input class="textarea" v-model="fields.pesan" placeholder="Pesan">
                        <span style="color: red">{{ fieldErrors.pesan }}</span>
                    </div>
                </div>
                                
                <button @submit="submitForm" class="button is-rounded is-size-6">Kirim sekarang</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageForm',
    data() {
        return {
            fields: {
                nama: "",
                alamat: "",
                pesan: '',
            },
            fieldErrors: {
                nama: undefined,
                alamat: undefined,
                pesan: undefined, 
            },
        }
    },
    methods: {
        submitForm(evt) {
            evt.preventDefault();

            this.fieldErrors = this.validateForm(this.fields); 
            // test if error length 0, then go to next run
            if (Object.keys(this.fieldErrors).length) return;

            this.fields.nama = ''; 
            this.fields.alamat = ''; 
            this.fields.pesan = ''; 
        },
        validateForm(fields) {
            const errors = {};
            if (!fields.nama) errors.nama = "Nama Required";
            if (!fields.alamat) errors.alamat = "Alamat Required";
            if (!fields.pesan) errors.pesan = "Pesan Required";
      
            return errors;
        },
    }
}
</script>