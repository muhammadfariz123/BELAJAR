// block scope & function scope
//  javascript menggunakan function scope


// global scope / window scope
var a = 1;

// contoh function scope = variable b hanya di gunakan di dalam function saja
//  didalam function bisa mengakses varia
function tes () {
    var b = 2;
}

tes();
