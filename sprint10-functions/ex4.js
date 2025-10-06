// 4. Scrieți o funcție pentru a adăuga numere nelimitate

// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

// Exemplu 1:

// Input: addNumber(1, 2, 3)

// Output: 6

// Exemplu 2:

// Input: addNumber(1, 2, 3, 4, 5)

// Output: 15

// Hint: Pentru a rezolva problema, vom folosi operatorul spread / rest (...) pentru a defini argumentele funcției:
// const addNumber = (…argumente) ⇒ {}

const addNumber = (...argumente) => {
    return argumente.reduce((suma, numere) => suma + numere, 0);
}

console.log("Suma numerelor este: ", addNumber(1, 2, 3));
console.log("Suma numerelor este: ", addNumber(1, 2, 3, 4, 5)); 
console.log("Suma numerelor este: ", addNumber(10, 20, 30, 40)); 