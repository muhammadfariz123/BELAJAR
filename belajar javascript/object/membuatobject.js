// membuat object
// object literal
// var mhs ={
//     nama : 'budi',
//     umur : 20,
//     ipk : 3.5,
//     jurusan : 'teknik informatika'
// }
// var mhs2 ={
//     nama : 'anto',
//     umur : 22,
//     ipk : 3.9,
//     jurusan : 'teknik informatika'
// }



// =======================


// function declaration : sedikit lebih ringkas daripada object literal
// function cetakMhs (nama,  umur, ipk, jurusan){
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.umur = umur;
//     mhs.ipk = ipk;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = cetakMhs('fariz', '20', '3.5', 'teknik informatika');



// =======================
// constructor function (keyword new)
function Mahasiswa (nama, umur, ipk, jurusan) {
    this.nama = nama;
    this.umur = umur;
    this.ipk = ipk;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('rizal', 20, 3.5, 'teknik informatika');
// object.create()