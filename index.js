Vue.filter('rupiah', function(uang) {
    // bilangan jadi Array dan reverse
    var bilKeArray = function bilKeArray(bil) {
        return String(bil).split('').reverse();
    };

    // harus bilangan kelipatan 3
    var habisDibagi3 = function habisDibagi3(value) {
        return value % 3 === 0;
    };

    // const sisipkan titik
    var sisipkanTitik = function sisipkanTitik(value) {
        return value + ',';
    };

    // bandingSama
    var bandingSama = function bandingSama(a, b) {
        return a === b;
    };

    return 'Rp. ' + bilKeArray(uang).map(function (value, index) {
        var isKondisi = habisDibagi3(index) && bandingSama(index, 3);
        return isKondisi ? sisipkanTitik(value) : value;
    }).reverse().join('');
})

var app = new Vue({
    el: '#app',
    data: {
        kuotaBaru: 0,
        hargaBaru: 0,
        pakets: [{
            kuota: 3,
            harga: 20000
        }, {
            kuota: 4,
            harga: 20000
        }, {
            kuota: 1,
            harga: 10000
        }]
    },
    methods: {
        selisih: function selisih(kuota, harga) {
            return harga / kuota;
        },
        olah: function olah(paket) {
            return {
                olah: this.selisih(paket.harga, paket.kuota),
                kuota: paket.kuota,
                harga: paket.harga
            };
        },
        tambahPaket: function tambahPaket() {

            var paketBaru = {
                kuota: this.kuotaBaru,
                harga: this.hargaBaru
            };
            this.pakets.push(paketBaru);

            // hapus kembali
            this.kuotaBaru = 0;
            this.hargaBaru = 0;
        },
        hapusSemua: function hapusSemua() {
            this.pakets.splice(0);
        },
        hapus: function hapus(id) {
            this.pakets.splice(id, 1);
        }
    },
    computed: {
        hasilUrut: function hasilUrut() {
            // olah data paket lalu urut paket termurah
            return this.pakets.map(this.olah).sort(function (a, b) {
                return a.olah < b.olah;
            });
        }
    }
});