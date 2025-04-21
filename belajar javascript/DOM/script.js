// // // DOM Selection Method
// // // document.getElementById() => element
// // const judul = document.getElementById('judul');

// // judul.style.color = 'white'
// // judul.style.backgroundColor = 'grey';
// // judul.innerHTML = 'Belajar DOM';


// // // document.getElementsByTagName() => HTMLCollection
// // const paragraf = document.getElementsByTagName('p');

// // for ( let i = 0; i < paragraf.length; i++)
// // {
// //     paragraf[i].style.backgroundColor = 'lightblue';
// // }

// // const h1 = document.getElementsByTagName ('h1')[0];
// // h1.style.fontSize = '50px';


// // // document.getElementsByClassName() = HTMLCollection
// // const p1 =getElementsByClassName('p1')[0];
// // p1.innerHTML = 'ini diubah dari javascript';


// // // document.querySelector() = element
// const p4  = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'lightblue';

// // const p = document.querySelector('p'); => mengembalikan satu element 
// // p.innerHTML = "ini diubah melalui javascript";

// // // querySelectorAll() = nodeList
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// // querySelector dan querySelectorAll mengubah tanpa mengganti struktur html yang ada

// // =======================

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';


