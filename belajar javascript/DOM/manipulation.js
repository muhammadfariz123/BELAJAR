// Manipulasi Element
// element.innerHTML => mengubah isi dari tagnya(apapun yang ada di tag)
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Belajar DOM dengan JavaScript</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = ('hello world!');


// ===============================

// element.style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'blue';
// judul.style.fontSize = '40px';
// judul.style.backgroundColor = 'red'; // tidak bisa karena tidak ada property background-color di element


// ================================

// element.setAttribute() => menambahkan attribute
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('class', 'judul1');

const a = document.querySelector('section#a a');
a.setAttribute('id', 'link');

// element.getAttribute() => melihat isi dari attribut
a.getAttribute('href'); 
judul.getAttribute('id');

// element.removeAttribute() => menghapus attribute yang ada di element
// a.removeAttribute('href');

// ================================

// element.classList => memanipulasi class yang ada
// element.classList.add(); => menambahkan class baru
const p2 = document.querySelector('.p2');
p2.classList.add('label');




// element.classList.remove(); => menghapus class yang ada
p2.classList.remove('label');



// element.classList.toggle(); => jika sebuah element tidak memilki class tertentu maka dia akan menambahkan, tetapi jika element tersebut sudah punya maka toogle akan menghilangkan class tersebut 
p2.classList.toggle('label');

// element.classList.item(); => untuk mengetahui kelas tertentu pada sebuah elemen
p2.classList.add('satu')
p2.classList.add('dua')
p2.classList.add('lima')
console.log(p2.classList.item(1)); // akan menampilkan 'dua'


// element.classList.contains(); =>
// dalam sebuah element punya ga kelas tertentu
console.log(
    p2.classList.contains('empat')
) // akan menampilkan false



// element.classList.replace(); =>
// untuk mengganti kelas yang ada dengan kelas yang baru
p2.classList.replace('dua', 'tiga'); // akan mengganti kelas 'dua' dengan 'tiga'
console.log(p2.classList.contains('dua')); // akan menampilkan false




