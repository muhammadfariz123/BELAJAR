// block scope & function scope
//  javascript menggunakan function scope


// global scope / window scope
var a = 1;

// contoh function scope = variable b hanya di gunakan di dalam function saja
//  didalam function bisa mengakses variable global scope
function tes () {
    var b = 2;
}

tes();



// contoh name conflict
// global scope / window scope
var a = 1;

// contoh function scope = variable b hanya di gunakan di dalam function saja
//  didalam function bisa mengakses variable global scope
function tes () {
    // ini name conflict
    var a = 2;
    // memanggil variable global scope
    console.log(window.a);
}

tes();
console.log(a);

// kalau pakai var yang diakses global 
// kalau ga ada var  yang di akses global maka akan di ambil dari function scope
// kalau ingin membuat variable lokal di dalam function harus deklarasi dengan var
