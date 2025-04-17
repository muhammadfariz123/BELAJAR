// DOM Selection Method
// getElementById() => element
const judul = document.getElementById('judul');

judul.style.color = 'white'
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Belajar DOM';

// getElementsByTagName() => HTMLCollection
const paragraf = document.getElementsByTagName('p');

for ( let i = 0; i < paragraf.length; i++)
{
    paragraf[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName ('h1')[0];
h1.style.fontSize = '50px';

// getElementsByClassName() = HTMLCollection
const p1 =getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';
// querySelector() = element
// querySelectorAll() = nodeList

// document.getElementsByTagName()
