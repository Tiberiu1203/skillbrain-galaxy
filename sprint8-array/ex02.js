// 2. Calculați suma numerelor dintr-un șir de numere

// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite.

// Exemplu 1:

// Input: [1, -5, 20, -34, 16, 29, 36, -4]

// Output: 59

// Exemplu 2:

// Input: [3.45, -2.68, 356, -75.96, 64, 19.28]

// Output: 364.09000000000003

function calculeazaSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numbers1 = [1, -5, 20, -34, 16, 29, 36, -4];
let numbers2 = [3.45, -2.68, 356, -75.96, 64, 19.28];

let sum1 = calculeazaSuma(numbers1);
let sum2 = calculeazaSuma(numbers2);

console.log("Suma listei 1 este:", sum1, " | Suma listei 2 este:", sum2);

