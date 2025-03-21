// sebuah fungsi yang memanggil dirinya sendiri
// for (var i = 10; i >= 1; i--){
//     console.log(i);
// }

// fungsi rekursi yang infinite loop
// function tampilAngka(n){
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10);


// base case = kondisi akhir dari rekursif yang menghasilkan nilai
// function tampilAngka(n){
//     // ini base case
//     if ( n === 0 ) {
//         return;
//     }
//     console.log(n);
//     tampilAngka(n-1);
// }

// tampilAngka(10); 

// rekursi faktorial
function faktorial(n){
    // base case
    if ( n === 0 ) {
        return 1;
    }
    return n * faktorial(n-1);
}
console.log(faktorial(5)); // 120

// implementasi rekursif:
// 1. menggantikan looping
// 2. fibonacci
// pencarian dan penelusuran pada struktur data list dan tree
// bahasa pemrograman yang tidak memiliki pengulangan
-haskel,erlang,prolog,dll