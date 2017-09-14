var data = [
    {
        nama: 'a',
        kuota: 5,
        harga: 40000
    },
    {
        nama: 'b',
        kuota: 3,
        harga: 20000
    },
    {
        nama: 'c',
        kuota: 2,
        harga: 10000
    },
    {
        nama: 'd',
        kuota: 6,
        harga: 40000
    }
]


const selisih = (harga, kuota) => harga / kuota;

const olah = paket => {
    return {
        olah: selisih(paket.harga, paket.kuota),
        kuota : paket.kuota,
        harga: paket.harga
    }
    
}

const baru = data.map(olah).sort((a, b) => a.olah >  b.olah)

console.log(baru)