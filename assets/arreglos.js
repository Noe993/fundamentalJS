// //creacion de un arreglo
// let arr2=[]
// console.log(arr2)

//datos en un areglo}
// let crypto = ['btc','xrp','tron']
// console.log({crypto})

// let size= crypto.length
// console.log({size})

let arr=[]
let suma=0
for (let i = 0; i < 3; i++) {
    let n1 = parseInt( prompt('numero '+(i+1)+':'))
    arr.push(n1)
    suma= suma+ arr[i]
}
console.log('primer numero: '+arr[0]+',ultimo numero: '+arr[2])
console.log(suma)

