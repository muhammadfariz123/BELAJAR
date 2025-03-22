// manipulasi array

// 1. menambah isi array
// var arr =["a", 1, true];
// console.log(arr[1]);


// jika tidak diisi akan diisi undefined
// var arr = [];
// arr[0] = 'fariz';
// arr[1] = 20;
// arr[2] = true;

// console.log(arr);





// 2. menghapus isi array
// cara manual
// var arr = ["a", 1, true];
// arr[1] = undefined;
// console.log(arr);




// 3. menampilkan isi array
// var arr = ['sandika', 'fariz', 'satria'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('mahasiswa ke-' + (1+i) + ' : ' + arr[i]);
// } 



// method pada array
// length  : mengetahui jumlah elemen pada array
// join () : menggabungkan elemen array menjadi string
// push () : menambahkan elemen array di akhir array
// pop () : menghapus elemen array di akhir array
// shift () : menghapus elemen array di awal array
// unshift () : menambahkan elemen array di awal array
// slice () : mengambil elemen array dari index awal sampai index akhir
// splice () : menyambungkan sebuah elemen array di index tertentu






// 1. join
// var arr = ['sandika', 'fariz', 'satria'];
// console.log(arr);
// console.log(arr.join()); 
// console.log(arr.join(' - ')); // sandika - fariz - satria

// 2. push
// bisa langsung menambahkan beberapa
// arr.push('dody');
// arr.push('zaki', 'rida');
// console.log(arr);

// 3. pop
// hanya bisa hapus satu satu di akhir elemen array
// arr.pop();
// console.log(arr);

// 4. shift
// arr.shift();
// console.log(arr);

// // 5.unshift
// arr.unshift('dody');
// console.log(arr);


// 6.splice
// splice(indexAwal, mauDihapusBerapa(opsional), elemenBaru1, elemenBaru2, ....)
// var arr = ['sandika', 'fariz', 'satria'];
// arr.splice(2, 0, 'dody', 'zaki');
// console.log(arr.join('-'));
// arr.splice(1, 2, 'dody', 'zaki');
// console.log(arr.join('-'));

// 7. slice (mengiris sebuah array menjadi array yang baru)
// slice(awal,akhir);
var arr = ['sandika', 'fariz', 'andi', 'satria'];
var arr2 = arr.slice(1,3);
console.log(arr2.join('-')); // fariz - andi
console.log(arr); // sandika - fariz - andi - satria
