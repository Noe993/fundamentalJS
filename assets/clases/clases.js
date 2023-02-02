class Perro{
    constructor(nombre){
        this.nombre= nombre;
    }
    //Metodo
    hablar(){
        document.writeln(this.nombre + ' ladra');
    }

    alimentar(){
        document.writeln("Hola, soy "+this.nombre + ' ,gracias por alimentarme');
    }
}

var mascota_1= new Perro("Pancho");
mascota_1.hablar(); //pancho ladra
document.writeln("</br>")
var mascota_2= new Perro("Kika");
mascota_2.hablar(); // kika ladra
document.writeln("</br>")
var mascota_3= new Perro("Elemao");
mascota_3.alimentar(); // kika ladra


let hola = 1;
let HOLA = 2;
console.log(hola+HOLA);