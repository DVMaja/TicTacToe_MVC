import ElemView from "./ElemView.js";

class JatekterView{

    constructor(SzuloElem){
        this.SzuloElem = SzuloElem;
        this.#htmlOsszerak();
        
        //const ELEMVIEW = new ElemView();
    }

    #htmlOsszerak(){
        let txt = `<div class="jatekter"></div>`
        this.SzuloElem.append(txt);
    }
}
export default JatekterView;