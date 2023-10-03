import Modell from "../modell/Modell.js";
import ElemView from "../view/ElemView.js";
import JatekterView from "../view/JatekterView.js";
class Controller {
    constructor() {
        const MODELL = new Modell();
        const ELEMVIEW = new ElemView($(".jatekter"));
        $(window).on("elemreKatt", (event) => { 
            //console.log("Controllerbe katt")
            
            MODELL.setAllpot();
            ELEMVIEW.setErtek(MODELL.getAllapot());
        })

        
    }
}
export default Controller;