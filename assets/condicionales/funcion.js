//funciones con saludar
/*
function saludar_nombre(nombre){
    console.log(arguments)
    document.writeln("hola "+nombre+ ", como estas?")
}

saludar_nombre("mamguebo")

//funcion de flecha
let saludar_flecha = (nombre) =>{
    document.writeln('</br>')
    document.writeln('SALUDAR DESDE LA FUNCION FLECHA,' +nombre)
}

function square(number){
    return number * number
}

saludar_flecha('Victor')

function validar_hora(hora){
    if(hora<= 5){
        document.writeln('Buenos dias')
    }
} 
*/
/*
let Auto={
    marca: "Ford",
    modelo:"F-150",
    anio: 2023,
    encender:function(){
        console.log("El auto esta encendido");
    },
    apagar:function(){
        console.log("El auto esta apagado");
    }
};

console.log(Auto.modelo);
Auto.apagar();
*/
let Goat={
    name: "Michael Jordan",
    team:"Chicago",
    number: 23,
    shoot_2:function(){
        console.log("anotaste 2 puntos");
    },
    shoot_3:function(){
        console.log("anotaste 3 puntos");
    }
};

console.log(Goat.team);
Goat.shoot_2();
