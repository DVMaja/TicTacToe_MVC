class Modell {
    #id;
    #allapot;
    constructor() {
        //this.#id;
        this.#allapot = "X";

    }
    getId() {
        return this.#id;
    }

    setAllpot() {
        if (this.#allapot === "X") {
            this.#allapot = "O";
        } else { this.#allapot = "X"; }
    }

    getAllapot() {
        return this.#allapot;
    }
}
export default Modell;