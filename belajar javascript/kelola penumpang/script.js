var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambahkan penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            } else {
            // jika sudah ada nama yang sama
                if (penumpang[i] == namaPenumpang) {
                    // tampilkan pesan kesalahannya
                    console.log("Kursi sudah terisi oleh " + namaPenumpang);
                    // kembalikan isi array & keluar dari function
                    return penumpang;
                } else {
                    // jika seluruh kursi terisi
                    if (i == penumpang.length - 1) {
                        //  tambah penumpang di akhir array
                        penumpang.push(namaPenumpang);
                        // kembalikan isi array & keluar dari function
                        return penumpang;
                    }
                }

            } 
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan kesalahannya
        console.log("Angkot kosong, tidak ada penumpang untuk dihapus");
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada nama yang sama
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang di kursi tersebut
                penumpang[1] = undefined;
                return penumpang;
            } else if ( i == penumpang.length - 1) {
                // jika tidak ada nama yang sama
                // lanjutkan pencarian ke kursi berikutnya
                console.log(namaPenumpang + "tidak ada di dalam angkot");
            }
        }
    }
}