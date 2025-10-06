// 2. Scrieți o funcție numită tellFortune care:

// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

// Exemplu 1:

// Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”

// Output: “Vei fi un Programator în Italia, căsătorit cu Emanuel și vei avea 3 copii.”

function tellFortune (nrCopii, nPart, locatieGeo, locMunca) {
    return " Vei fi un " + locMunca + " in " + locatieGeo + " casatorit cu " + nPart + " si vei avea " + nrCopii + "copii";
}

const ex01 = tellFortune (3, "Emanuel", "Italia", "Programator");
console.log (ex01);