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

    let = zi;
    switch (nr) {
        case 1:
            zi = "Luni";
            break;
        case 2:
            zi = "Marti";
            break;
        case 3:
            zi = "Miercui";
            break;
        case 4:
            zi = "Joi";
            break;
        case 5:
            zi = "Vineri";
            break;
        case 6:
            zi = "Sambata";
            break;
        case 7,0:
            zi = "Duminica";
            break;
        default: throw (" nr " + nr + " nu este valid ")    
    }
    return zi;
}

console.log (ziSap (1));
console.log (ziSap (5));    
console.log (ziSap (8));  