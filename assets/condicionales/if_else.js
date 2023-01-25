// let score = 6
// if(score > 7){
//     document.writeln('Alumno aprobado con :'+score)
// }else{
//     document.writeln('alumno reprobado con: '+score)
// }
/*
const dinero = 100
let retiro= parseInt(prompt("Cuanto dinero quieres sacar"))
if(retiro< dinero){
    document.writeln("Dinero recobrado exitosamente, quedan:$"+(dinero-retiro))
    
}else{
    document.writeln("no tienes fondos suficientes")
    alert("No tienes dinero suficiente")
}

condicion ? expre1 : expre2
var elvisLives = 5 > 4 ? "Sip" : "Nop";
document.writeln(elvisLives)
*/

let cali = parseInt(prompt("Introduce tu calificacion"))
console.error("hola")
console.warn("mamaguebp")
if(typeof (cali) != "number"){
    document.writeln("Introduce un numero")
}else{
    if(cali<6){
        document.writeln("Reprobado")
        warn("Reprobado")
    }else if(cali<8 && cali>6){
        document.writeln("Aprobado condicional")
        alert("Aprobado condicional")
    }else if(cali<10 && cali>8){
        document.writeln("Aprobado ")
        alert("Aprobado ")
    }else if(cali>10){
        document.writeln("Calificacion no valida")
        alert("Calificacion no valida")
    }
}
