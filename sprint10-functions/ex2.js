// 2.  Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)

//     Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.
    
//     Exemplu 1:
    
//     Input: start = 3, end = 5
    
//     Output: < un număr mai ≥ 3 și < 5>
    
//     Hint: Pentru a rezolva problema, va fi folosită funcția built in a JavaScript-ului: Math.random().
    
//     Notă: Exemplele date sunt de natură abstractă pentru a nu crea confuzii. Numerele aleatoare generate nu pot fi estimate în avans, fiecare apel de funcție generând un nou număr aleator. Singura regulă impusă este respectarea intervalului dat de parametrii de început și de sfârșit.

function getRandom(start, end) {
    return Math.random() * (start - end) + end;
}

const randomNum = getRandom(3, 5)
console.log("Numarul aleatoriu intre 3 si 5 este: ", randomNum)