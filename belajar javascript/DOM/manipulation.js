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
a.removeAttribute('href');










// element.classList