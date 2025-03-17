// latihan if else
// var angka = prompt('masukkan angka');

// if (angka == 2) {
//     alert(angka + 'adalah bilangan GENAP');
// } else {
//     alert(angka + 'adalah bilangan Ganjil');
// }

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}