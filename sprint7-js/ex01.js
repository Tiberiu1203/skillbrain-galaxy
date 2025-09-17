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

function returneazaBoolean (numar10) {
    if (numar10 % 10 === 0) {
        return true ;
    } else {
        return false;
    }
}

console.log ('Ex 01 :')
console.log ('Input = 100 =', returneazaBoolean(100) )
console.log('Input = 23 =', returneazaBoolean (23) );

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

const ex01 = tellFortune (3, "Emanuel", "Italia", "Programator")
console.log (ex01)
// 3. Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

// Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

// Exemplu 1:

// Input: 1

// Output: “Luni”

// Exemplu 2:

// Input: 5

// Output: “Vineri”

// Deschide un PR(pull request) cu soluția ta, încarcă link-ul folosind Text reply.

function ziSap (nr) {
    switch (nr) {
        case 1:
            zi = "Luni";
            break;
        case 2:
            zi = "Luni";
            break;
        case 3:
            zi = "Luni";
            break;
        case 4:
            zi = "Luni";
            break;
        case 5:
            zi = "Luni";
            break;
        case 6:
            zi = "Luni";
            break;
        case 7:
            zi = "Luni";
            break;
        default: throw (" nr " + nr + " nu este valid ")    
    }
    return zi;
}

console.log (ziSap (1));
console.log (ziSap (5));    