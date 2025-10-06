// 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

// Exemplu 1:

// Input: sir = “Îmi place programarea” litera = “a”

// Output: 4

// Exemplu 2:

// Input: sir = “Vreau să lucrez în IT”, litera = “r”

// Output: 2

// Notă: Nu se ține cont de scrierea cu majuscule sau minuscule. Litera A și litera a trebuie numărate la calcularea numărului de apariții pentru A sau pentru a.
function letterCount(text) {
    return text.split('').filter(c => c === 'A' || c === 'a' || c === 'R' || c === 'r').length;
}

console.log("Numarul de aparatie al literelor a si r sunt: ", letterCount("Imi place programarea."));
console.log("Numarul de aparatie al literelor a si r sunt: ", letterCount("Vreau să lucrez în IT."));