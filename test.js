const rupiah = uang => {
  // bilangan jadi Array dan reverse
  const bilKeArray = bil =>
    String(bil)
      .split('')
      .reverse();

  // const bilangan habis dimod 3 ?
  const habisDibagi3 = value => value % 3 === 0;

  // const sisipkan titik
  const sisipkanTitik = value => value + '.';

  // bandingSama
  const bandingSama = (a, b) => a === b;

  return bilKeArray(uang)
    .map((value, index) => {
      let isKondisi = habisDibagi3(index) && bandingSama(index, 3);
      return isKondisi ? sisipkanTitik(value) : value;
    })
    .reverse()
    .join('');
};

var numberPattern = /\d+/g;

var b = 'contoh'.match(numberPattern);

function validNumber(number) {
  var numberPattern = /\d+/g;
  var hasil = number.match(numberPattern);

  if (hasil !== null) {
    return Number(hasil.join(''));
  }
  return 0;
}

validNumber('2000.00');
