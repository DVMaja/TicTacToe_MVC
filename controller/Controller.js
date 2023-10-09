import Modell from "../modell/Modell.js";
import ElemView from "../view/ElemView.js";
//import JatekterView from "../view/JatekterView.js";

class Controller {
    #elemLista = [];

    constructor() {
        this.MODELL = new Modell();
        //const ELEMVIEW = new ElemView($(".jatekter"));

        for (let index = 0; index < 9; index++) {
            this.ELEMVIEW = new ElemView($(".jatekter"), index);
        }

        //feriratkozuk a saját eseményünkre
        $(window).on("elemreKatt", (event) => {
            //A viewnak meghívjuk a a set elem metódusát            
            //azt az objektumot jeleni amely kiváltotta az eseményt.
            this.MODELL.setAllpot(event.detail.getIndex());
            event.detail.setErtek(this.MODELL.getAllapot());

            //játék vége ellenörzése            
            if (this.MODELL.getVegeVanE() !== "tovább") {
                console.log(this.MODELL.getVegeVanE());
            }
        })


    }
}
export default Controller;