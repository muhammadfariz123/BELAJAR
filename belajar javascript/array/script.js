var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
console.log(hari[5]); //mengakses nilai array
console.log(typeof(hari)); //mengecek type data dari array
console.log(hari.length); //menghitung jumlah data yang ada di arrayy


// elemen pada array boleh beda tipe
var nama = ['budi', 20, true, 'saya', 5.5];
var mhs = ['anton', 'budi', 'caca', 'dani', 'emak'];
var angka = ['9', '10', '11', '12', '13'];
var myArr = ['teks', 2, false];

// memasukkan function ke array
var myFunc = function() {
    console.log('ini adalah fungsi');
}
var myArr2 = ['teks', 2, false, myFunc];

// memasukkan array ke dalam array (array multi function)
var myArr3 = ['teks', 2, false, myFunc, [1,2,3]];
console.log(myArr3[4] [1]);