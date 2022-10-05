const Ninja = require ("./ninja")

class Sensei extends Ninja {
    constructor (nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    } 

    speakWisdom() {
        super.drinkSake();
        return "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
    }
}
const superSensei = new Sensei ("Master Splinter");
console.log(superSensei.speakWisdom());
superSensei.showStats();