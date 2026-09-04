let contador = 0;
let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let carrito = document.querySelector("#contadorCarrito")
let email = document.querySelector("#email")
let login = document.querySelector(".login")
let imagen = document.querySelector("#imagenCambiante")

boton1.addEventListener("click", function() {
    if (boton1 !== null) {
        contador = contador + 1
        carrito.textContent = contador
    } else {
        console.log("no extiste el boton")
    }
})

boton2.addEventListener("click", function() {
    if (boton2 !== null) {
        contador = contador + 1
        carrito.textContent = contador
    } else {
        console.log("no extiste el boton")
    }
})

imagen.addEventListener("mouseover", function() {
    this.src = "static/img/comida-mexicana2.jpg"
})

imagen.addEventListener("mouseout", function() {
    this.src = "static/img/comida-mexicana.jpg"
})