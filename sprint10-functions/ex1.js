// 1. Scrieți o funcție care returnează pătratul unui număr

// Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).

// Exemplu 1:

// Input: num = 6

// Output: 36

// Exemplu 2:

// Input: num = 0

// Output: 0

// Exemplu 3:

// Input: num = -12

// Output: 144
const listaNumere = [6, 0, -12];
function findSquare(num) {
    return num * num; 
}

console.log(findSquare(listaNumere[0])); // 36
console.log(findSquare(listaNumere[1])); // 0
console.log(findSquare(listaNumere[2])); // 144
