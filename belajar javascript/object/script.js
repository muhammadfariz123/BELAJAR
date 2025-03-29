// object : kumpulan nilai yang memiliki nama
var mahasiswa = {
    nama : 'fariz',
    lulus : true,
    IPSemester : [2.90, 3.00, 3.10, 3.20, 3.30],
    IPKumulatif : function () {
        var total = 0;
        var ips = this.IPSemester;
        for (var i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total / ips.length;
    }
}

mahasiswa.IPKumulatif();


// variable di dalam object disebut properti
// function dalam object disebut method
var Orang = {
    nama : 'Fariz',
    umur : 20,
    pekerjaan : 'Programmer',
    sapa : function () {
        return + 'hi, nama saya' + this.nama + ' umur saya' + this.umur + 'pekerjaan saya' + this.pekerjaan;
    }
}

// bisa membuat object di dalam object
var mhs = {
    nama : 'Fariz',
    umur : 20,
    ips : [3.00, 2.50, 3.50],
    alamat : {
        jalan : 'kombas',
        kota : 'purwokerto',
        provinsi : 'jawa tengah',
    }
};




