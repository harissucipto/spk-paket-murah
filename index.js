console.clear();
var app = new Vue({
    el: '#app',
    data: {
        kuotaBaru: 0,
        hargaBaru: 0,
        pakets: [
            {
                kuota: 3,
                harga: 20000
            },
            {
                kuota: 4,
                harga: 20000
            },
            {
                kuota: 1,
                harga: 10000
            }
        ]
    },
    methods: {
        selisih(kuota, harga) {
            return harga / kuota;
        },
        olah(paket) {
            return {
                olah: this.selisih(paket.harga, paket.kuota),
                kuota : paket.kuota,
                harga: paket.harga
            }
        },
        tambahPaket() {
            const paketBaru = {
                kuota: this.kuotaBaru,
                harga: this.hargaBaru
            }
            this.pakets.push(paketBaru)

            // hapus kembali
            this.kuotaBaru = 0;
            this.hargaBaru = 0;
        },
        hapusSemua() {
            this.pakets.splice(0)
        }
    },
    computed: {
        hasilUrut() {
            // olah data paket lalu urut paket termurah
            return this.pakets.map(this.olah).sort((a, b) => a.olah <  b.olah)
        }
    }
})
