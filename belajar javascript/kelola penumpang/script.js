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
            if (penumpang[i] == un) {
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