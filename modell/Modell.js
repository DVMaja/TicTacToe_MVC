class Modell {
    #lista = [];
    #index;
    #lepesSzam
    #allapot;
    constructor() {
        //this.#id;
        this.#allapot = "X";
        this.#lepesSzam = 0;
        this.#lista = [, ".", ".", ".", ".", ".", ".", ".", ".", "."];

        //kattintások száma 9-et eléri akkor vége a játéknak
        //győzelem figyelése

    }

    setAllpot(index) {
        //beállítja a sset állapotot
        if (this.#allapot === "X") {
            this.#allapot = "O";
        } else {
            this.#allapot = "X";
        }
        this.#lista[index] = this.#allapot;
        console.log(this.#lista);
        this.#lepesSzam++;
    }

    getVegeVanE() {
        let vEll = this.#vizSzintesGyozelem();
        if (vEll.indexOf("OOO") > -1) {
            return "O nyert";
        } else if (vEll.indexOf("XXX") > -1) {
            return "X nyert";
        } else if (this.#lepesSzam === 9) {
            return "Döntetlen";
        }
        return "Tovább";
    }

    #vizSzintesGyozelem() {
        //sokféleképpen meg lehet oldani
        //véginmegyünk a listán és stringet képezünk, úgy 
        //hogy minden harmadik urtán teszünk egy speciális karaktert @

        let vEll = "";
        for (let i = 0; i < 9; i++) {
            vEll += this.#lista[i];
            if (i % 3 === 2) {
                vEll += "@";
            }
        }
        vEll += "@";
        console.log(vEll.indexOf("OOO"), vEll.indexOf("XXX"));
        return vEll;
    }

    #fuggolegesGyozelem() {
        let fEll = "";
        for (let i = 0; i < 3; i++) {
            fEll +=
                this.#lista[i] +
                this.#lista[i + 3] +
                this.#lista[i + 6];
            fEll += "@";
        }
        return fEll;
    }

    getAllapot() {
        //visszaadja az állapotot
        return this.#allapot;
    }
}
export default Modell;