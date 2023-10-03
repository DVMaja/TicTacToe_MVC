class ElemView {
    #index;//egész szám

    constructor(SzuloElem, index) {
        this.SzuloElem = SzuloElem;
        this.#index = index;
        //gyakori alkalmazás
        this.kattinthato = true;
        //console.log("elérhető az elemview");
        this.#htmlOsszerak();
        this.elem = $(".elem:last-child");

        //console.log(this.elem);
        this.pElem = this.elem.children("p");

        this.elem.on("click", () => {
            if (this.kattinthato) {
                this.#esemenyTrigger("kivalaszt");
                //nem lehet többet rá kattintani
                this.kattinthato = false;
            }
            //console.log("Katt")
        })
    }
    getIndex() {
        return this.#index;
    }

    #htmlOsszerak() {
        let txt = `<div class="elem col-sm-4"><p></p></div>`;
        txt += "";
        this.SzuloElem.append(txt);
    }

    setErtek(jel) {
        this.pElem.html(jel);
    }

    #esemenyTrigger(esemenyneve) {
        const esemeny = new CustomEvent("elemreKatt", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default ElemView;