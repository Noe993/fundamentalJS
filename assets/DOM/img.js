//creo un objeto imagen

let imagen= document.createElement('img')
imagen.src = 'img/monke.jpg'

let div_imagen_= document.getElementById('miImagen_')
let div_imagen= document.querySelector('#miImagen_')
console.log(div_imagen_)
div_imagen.appendChild(imagen)