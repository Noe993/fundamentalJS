/*
for (let i = 0; i < 10; i++) {
    document.writeln(i)
}
------------------------------------------------------------
const enterprises = ['tesla','amazon','microsoft','meta']
console.warn('for traditional')
for(let i=0;i < enterprises.length;i++){
    console.log(enterprises[i])
}

console.warn('for in')
for(let i in enterprises){
    console.log(enterprises[i])
}

console.warn('for of')
for(let enterprise of enterprises){
    console.log(enterprises[i])
}
*/
for (let i = 1; i < 7; i++) {
    document.writeln("<h"+i+">"+"Encabezado nivel "+i+"</h"+i+">")
    
}