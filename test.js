// var data = [
//     {
//         nama: 'a',
//         kuota: 5,
//         harga: 40000
//     },
//     {
//         nama: 'b',
//         kuota: 3,
//         harga: 20000
//     },
//     {
//         nama: 'c',
//         kuota: 2,
//         harga: 10000
//     },
//     {
//         nama: 'd',
//         kuota: 6,
//         harga: 40000
//     }
// ]


// const selisih = (harga, kuota) => harga / kuota;

// const olah = paket => {
//     return {
//         olah: selisih(paket.harga, paket.kuota),
//         kuota : paket.kuota,
//         harga: paket.harga
//     }
    
// }

// const baru = data.map(olah).sort((a, b) => a.olah >  b.olah)

// console.log(baru)


const rupiah = (uang) => {
    // bilangan jadi Array dan reverse
    const bilKeArray = bil => String(bil).split('').reverse();

    // const bilangan habis dimod 3 ?
    const habisDibagi3 = value => value % 3 === 0

    // const sisipkan titik
    const sisipkanTitik = (value) => value + '.'

    // bandingSama
    const bandingSama = (a, b) => a === b;

    return bilKeArray(uang).map((value, index) => {
        let isKondisi = habisDibagi3(index) && bandingSama(index, 3)
        return isKondisi ? sisipkanTitik(value) : value;
    }).reverse().join('')

}

console.log(rupiah(3000000000))


var numberPattern = /\d+/g;

var b = 'contoh'.match( numberPattern )
console.log(b === null);


function validNumber(number) {
    var numberPattern = /\d+/g;
    var hasil = number.match( numberPattern );

    if (hasil !== null) {
        return Number(hasil.join(''))
    }
    return 0;
}

validNumber('2000.00');
console.log('oi, mmm');