// events tidak sama dengan even
// events = kejadian
// event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam dom, kejadian tersebbut bisa dilakukan oleh user
// (mouse event,keyboard event,dll) ataupun dilakukan secara otomatis oleh API (animasi selesai dijalankan, halaman selesai di load , dll)

// cara 'mendengarkan' event
// A. event handler = 1. inline HTML attribute, 2. Element method
// B. addEventListener()

//  Rferensi EVENTS DOM LENGKAP oleh MOZILLA https://developer.mozilla.org/en-US/docs/Web/Events
// event handler
// 1. inline HTML attribute
// on<event> / onclick
const p3 = document.querySelector('.p3');

p3.addEventListener('click', function(){
      p3.style.backgroundColor = 'lightblue';
      p3.style.color = 'red';
});

// p3.addEventListener('click', function(){
//       p3.style.color = 'red';
// });
// function ubahWarna() {
//   p3.style.backgroundColor = 'lightblue';
// }

function ubahWarna2() {
  p2.style.backgroundColor = 'lightblue';
}

// // 2. Element Method
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna2;

// // addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
  const ul = document.querySelector('ul');
  const liBaru = document.createElement('li');
  const teksli = document.createTextNode('item Baru');
  liBaru.appendChild(teksli);

  ul.appendChild(liBaru);
});

// const p1 = document.querySelector('section#a .p1');;
// p1.style.backgroundColor = 'green';

// const sectionA = document.getElementById('a');
// const paragrafBaru = document.createElement('p');
// const teksBaru = document.createTextNode('Ini Paragraf Baru');
// paragrafBaru.appendChild(teksBaru);


// sectionA.appendChild(paragrafBaru);
// paragrafBaru.style.backgroundColor = 'blue';
// paragrafBaru.style.color = 'white';


// paragrafBaru.innerHTML = "aku fariz";



// const p2 = document.querySelector('.p2');



// const a = document.querySelector('section#a a');
// a.removeAttribute('href');


// const sectionB = document.querySelector('section#b p');
// sectionB.innerHTML = "ini header";

// const h1 = document.createElement('h1');
// const isih1 = document.createTextNode('ini header');


