// Manipulasi Node
// document.createElement();
// document.createTextNode();
// node.appendChild();
// 1. buat elemen baru
const paragrafBaru1 = document.createElement('p');
const isiParagBaru1 = document.createTextNode('ini paragraf baru');

// 2. simpan tulisan ke dalam paragraf
paragrafBaru1.appendChild(isiParagBaru1);

// 3. simpan pargraf baru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(paragrafBaru1);
paragrafBaru1.style.backgroundColor = 'green';


// ====================================================

// node.insertBefore();
// parentNode.appendChild();
// parentNode.insertBefore();
// 1. membuat elemen
const liBaru = document.createElement('li');
const isili = document.createTextNode('Item baru');

// 2. menambahkan teks ke li baru:
liBaru.appendChild(isili);

// 3.menyimpan li baru ke section b di dalam ul
const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// parentNode.removeChild();
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// parentNode.replaceChild();
// 1. menyeleksi element
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
// 2. membuat element baru header
const header = document.createElement('h2');
const isiHeader = document.createTextNode('ini header baru');
header.appendChild(isiHeader);
sectionB.replaceChild(header, p4);

header.style.backgroundColor = 'green';
liBaru.style.backgroundColor = 'green';

