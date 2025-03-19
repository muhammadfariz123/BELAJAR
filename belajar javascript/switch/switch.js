// jika di masukkan di dalam prompt tipe datanya string
// var angka = parseInt(prompt('silahkan masukkan angka :'));

// if ( angka === 1) {
//     alert('anda memasukkang angka 1');
// } else if (angka === 2) {
//     alert ('anda memasukkan angka 2');
// } else if(angka === 3){
//     alert ('anda memasukkan angka 3');
// } else {
//     alert('angka yang anda masukkan salah!')
// }

// ------------------------------

// switch
// var angka = prompt('masukkan angka :');

// switch (angka) {
//     case '1' :
//         alert('anda memasukkan angka 1');
//         break;
//     case '2' :
//         alert('anda memasukkan angka 2');
//         break;
//     case '3' :
//         alert('anda memasukkan angka 3');
//         break;
//     default :
//         alert('angka yang anda masukkan salah!')
//         break;
// }

var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch( item ) {
    case 'nasi':
        alert('makanan / minuman sehat!');
        break;
    case 'daging':
        alert('makanan / minuman yang mengandung protein!');
        break;
    case 'susu':
        alert('makanan / minuman yang mengandung kalsium!');
        break;
    case 'hamburger':
        alert('makanan / minuman yang mengandung lemak!');
        break;
    case 'softdrink':
        alert('makanan / minuman yang mengandung gula!');
    default:
        alert('makanan / minuman yang anda masukkan tidak ada di daftar!');        
}


