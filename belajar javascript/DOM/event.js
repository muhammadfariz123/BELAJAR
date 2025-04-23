// // events tidak sama dengan even
// // events = kejadian
// // event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam dom, kejadian tersebbut bisa dilakukan oleh user
// // (mouse event,keyboard event,dll) ataupun dilakukan secara otomatis oleh API (animasi selesai dijalankan, halaman selesai di load , dll)

// // cara 'mendengarkan' event
// // event handler = 1. inline HTML attribute, 2. Element method
// // addEventListener()

// // event handler
// // 1. inline HTML attribute
// // on<event> / onclick
// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//   p3.style.backgroundColor = 'lightblue';
// }

// function ubahWarna2() {
//   p2.style.backgroundColor = 'lightblue';
// }

// // 2. Element Method
// const p2 = document.querySelector('.p2');
// p2.onclick = (ubahWarna2);

// // addEventListener
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//   const li = document.querySelector('ul');
//   const liBaru = document.createElement('li');
//   const teksli = document.createTextNode('item Baru');
//   liBaru.appendChild(teksli);

//   li.appendChild(liBaru);
// })