// 1. Returnează un boolean dacă un număr este divizibil cu 10

// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

// Exemplu 1:
// Input: 100

// Output: true

// Exemplu 2:

// Input: 23

// Output: false

function getNrDiv10 (numar) {
    if (numar % 10 === 0) {
        return true ;
    } else {
        return false;
    }
}

console.log ('Ex 01 :');
console.log ('Input = 100 =', returneazaBoolean(100) );
console.log('Input = 23 =', returneazaBoolean (23) );

