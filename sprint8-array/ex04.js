// 4. Returnează numărul de vocale dintr-un șir de caractere (string)

// Creați o funcție care va returna un număr întreg al numărului de vocale găsite într-un șir. Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.

// Exemplu 1:

// Input: “string de test”

// Output: 3

// Explicație: Parcurgeți șirul și verificați fiecare caracter individual. Dacă este vocală, atunci o variabilă își mărește valoarea

// (adaugă +1). În șirul nostru de intrare avem vocalele: i, e, e ⇒ 3.

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU"; 

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count = count + 1;
        }
    }

    return count;
}


console.log(countVowels("string de test")); 
console.log(countVowels("TIBERIU"));    
console.log(countVowels("SMS"));         
console.log(countVowels("M-am dus in parc.")); 


