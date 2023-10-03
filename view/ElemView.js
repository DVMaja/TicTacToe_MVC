class ElemView {

    constructor(SzuloElem) {
        this.SzuloElem = SzuloElem;
        //console.log("elérhető az elemview");
        this.#htmlOsszerak();
        this.elem = $(".elem:last-child");

        console.log(this.elem);
        this.pElem = this.elem.children("p");

        
        this.elem.on("click", () => {
            this.#esemenyTrigger("kivalszt");
            //console.log("Katt")
        })

    }

    #htmlOsszerak() {
        let txt = `<div class="elem"><p></p></div>`;
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