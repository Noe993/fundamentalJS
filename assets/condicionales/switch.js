// const type_payment = "cash"
// switch (type_payment) {
//     case "cash":
//         document.writeln("pague con efefctivo")
//         break;
//     case "cc":
//         document.writeln("pague con trajeta")
//         break;

//     default:
//         document.writeln("pague con cuerpo")
//         break;
// }
let edad = parseInt(prompt("Introduce la edad"))
switch (edad) {
    case (0):
        document.writeln("Acabas de nacer")
        break;
    case (18):
        document.writeln("mayor de edad")
        break;
    case (65):
        document.writeln("edad de jubilacion")
        break;
    default:
        document.writeln("edad no es correcta")
        break;
}