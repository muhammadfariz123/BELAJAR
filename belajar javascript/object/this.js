// konsep this
// this adalah keyword yang digunakan untuk mengakses property dan method dari sebuah objek

// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log("Halo Dunia");
// }

// this.halo();

// this mengembalikan object global

// ===================================================
// cara 2 - object literal
// var obj = {a: 10, nama : 'fariz'};
// obj.halo = function(){
    //     console.log(this);
    //     console.log('halo');
    // }
    // obj.halo();
// this mengembalikan object yang bersangkutan

// ===================================================
// cara 3 - constructor
// function Halo(){
//     console.log(this);
//     console.log('halo');
// }

// new Halo();

// this mengembalikan object yang baru dibuat