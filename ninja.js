class Ninja {
    constructor (nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    } 

    sayName(){
        console.log(this.nombre)
    }

    showStats() {
        let datos = {
            "nombre" : this.nombre,
            "fuerza" : this.fuerza,
            "velocidad" : this.velocidad,
            "salud" : this.salud
        }
        console.log(datos)
    }

    drinkSake() {
        this.salud = this.salud + 10
        console.log(this.salud)
    }
}

const ninja1 = new Ninja("Hyabusa", 30);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake()

module.exports = Ninja
