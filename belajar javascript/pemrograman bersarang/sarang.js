console.log('******');


var s = ''
for ( var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}

console.log(s);

var s = ''
for ( var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}

var s = '';
var n = 10;

for (var i = 0; i < n; i++) {
    // Menambahkan spasi agar bintang bergeser ke kanan
    for (var j = 0; j < n - i - 1; j++) {
        s += ' ';
    }
    // Menambahkan bintang
    for (var k = 0; k <= i; k++) {
        s += '*';
    }
    s += '\n';
}

var s = '';
var n = 10;

for (var i = 0; i < n; i++) {
    // Menambahkan spasi di kiri agar segitiga rata tengah
    for (var j = 0; j < n - i - 1; j++) {
        s += ' ';
    }
    // Menambahkan bintang kiri
    for (var k = 0; k <= i; k++) {
        s += '*';
    }
    // Menambahkan bintang kanan (tanpa spasi)
    for (var l = 0; l < i; l++) {
        s += '*';
    }
    s += '\n';
}

console.log(s);


console.log(s);