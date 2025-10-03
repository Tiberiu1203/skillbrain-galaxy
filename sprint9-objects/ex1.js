// 1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.

// Exemplu 1:

// Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]

// Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

function getReteta (titlu,portii,ingrediente) {
    const myReteta = {
        titlu : titlu, 
        portii : portii, 
        ingrediente : ingrediente
    };

console.log("Titlu: " + myReteta.titlu);
console.log("portii: " + myReteta.portii);
console.log("Ingrediente:")
myReteta.ingrediente.forEach(ing => console.log("- " + ing));

return myReteta;
};

getReteta ("Canard au sauce rouge" , 4 , ["Piept de rata", "vin rosu", "cartofi dulci", "portocale"])