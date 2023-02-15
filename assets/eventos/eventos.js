function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if (email === '123' && password==='515') {
        alert('Entra')
        
        let boton = document.getElementById("btn-login")
        boton.className = "btn btn-success"
        boton.innerHTML = "log"
        let modal= bootstrap.modal.getOrCreateInstance(document.getElementById('email'))
        modal.hide()
    }else{
        alert('Usuario/Contraseña incorrecto')
    }
}

function ubicacion(){
    alert("cambiamos ubicacion")
}
document.getElementById('ubicacion').onclick = ubicacion;

for (let i = 0; i < document.querySelectorAll('.card').length; i++) {
    //tomo cada carta
    let card = document.querySelectorAll('.card')[i]

    card.addEventListener("click",function(){

        for (let m = 0; m < document.querySelectorAll('.card').length; m++) {
            document.querySelectorAll('.card')[m].style.border = ""            
        }
        card.style.border = "10px solid orange"
    })
}


