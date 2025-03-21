// FUNCTION 
// var kubus1 = 7;
// var kubus2 = 19;


// function volume(kubus1, kubus2) {
//     let volume1 = kubus1 ** 3;
//     let volume2 = kubus2 ** 3;

//     let volumetotal = `jadi total kedua kubus adalah = `  + volume1 + volume2;
//     return volumetotal;
// }

// console.log(volume(kubus1, kubus2));


// Function dengan interaksi user
// alert('Disini saya akan menghitung sebuah volume kubus, silahkan klik tanda OK untuk melanjutkan!');

// function volume(kubus1, kubus2) {
//     let volume1 = kubus1 ** 3;
//     let volume2 = kubus2 ** 3;

//     let volumetotal = `jadi total volume kedua kubus adalah = `  + volume1 + volume2;
//     return volumetotal;
// }

// var lagi = true;

// while (lagi) {
//     var kubus1 = Number(prompt('masukkan angka untuk sisi kubus 1: '));
//     var kubus2 = Number(prompt('masukkan angka untuk sisi kubus 2: '));
    
//     alert(volume(kubus1, kubus2));
    
//     lagi = confirm('mau menghitung luas volume kubus lagi? jika iya klik ok, jika tidak klik cancel');
// }
// alert('terimakasih!')



// function deklarasi
// penulisan function deklarasi : function identifier (parameterlist(opsional)) {function body}
// contoh
// function tampilPesan (nama) {
//     alert ('halo' + nama);
// }
// function expression
// penulisan function expression : function identifier(opsuonal) (parameterlist(opsional)) {function body}
// contoh

var tampilPesan = function (nama) {
    console.log('halo ' + nama);
}

tampilPesan('andi'); //tampilPesan('andi'); //tampilPesan('andi'); //