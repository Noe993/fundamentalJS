// let number1= 20
// let number2= 30.5
// let number3= 40
// let number4=30


// let resultado

// resultado= number1 + number2

let n1 = parseInt( prompt('articulo 1:'))
console.log(n1)  //'',null
let n2 = parseInt( prompt('articulo 2:'))
console.log(n2)  //'',null
let n3 = parseInt( prompt('articulo 3:'))
console.log(n3)  //'',null
let subtotal = (n1+n2+n3)
subtotal = subtotal-(subtotal*.20)
const sub=confirm('su subtotal es de ' + subtotal)
console.log(sub) //'true, 
let iva= subtotal*.16
let total = subtotal + iva
//nos permite interactar con respuestas de usuario
const valor=confirm('su total a pagar es de ' + total)
console.log(valor) //'true, 