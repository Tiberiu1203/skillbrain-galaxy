class Autovehicul {
    constructor(producator, tip, culoare, rulaj) {
        this.producator = producator;
        this.tip = tip;
        this.culoare = culoare;
        this.rulaj = rulaj;
    }

    afiseazaDetalii() {
        return `Autovehicul [producator=${this.producator}, tip=${this.tip}, culoare=${this.culoare}, rulaj=${this.rulaj}]`;
    }
}

function main() {
    const a1 = new Autovehicul("BMW", "X5", "Gri", 180_000);
    const a2 = new Autovehicul("Toyota", "RAV4", "Alb", 95_000);
    const a3 = new Autovehicul("Skoda", "Kodiaq", "Rosu", 15_000);

    console.log(a1.afiseazaDetalii());
    console.log(a2.afiseazaDetalii());
    console.log(a3.afiseazaDetalii());
}

class AutovehiculSport extends Autovehicul {
    constructor(producator, tip, culoare, rulaj, putere, echipa) {
        super(producator, tip, culoare, rulaj);
        this.putere = putere;
        this.echipa = echipa;
    }

    concureaza(clasamentFinal) {
        if (clasamentFinal > 0) {
            console.log(`Am terminat competitia pe locul ${clasamentFinal}`);
        } else {
            console.log("Nu am reusit sa urc pe podium.");
        }
    }
}

function mainAutovehiculSport() {
    const s1 = new AutovehiculSport("Porsche", "911 GT3", "Negru", 12_000, 510, "Porsche Motorsport");
    const s2 = new AutovehiculSport("McLaren", "720S", "Portocaliu", 8_000, 720, "McLaren Racing");

    console.log(s1.afiseazaDetalii());
    s1.concureaza(1);

    console.log(s2.afiseazaDetalii());
    s2.concureaza(0);
}

main();
console.log("--- Autovehicule sport ---");
mainAutovehiculSport();
