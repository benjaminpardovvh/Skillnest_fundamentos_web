// Seleccionamos el botón por su id
let boton1 = document.getElementById("cambiarTexto1");
let boton2 = document.getElementById("cambiarTexto2");
let boton3 = document.getElementById("cambiarTexto3");

// Agregamos un evento 'click' al botón
boton1.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "mi nombre es yoshikage kira, tengo 33 años y vivo al norooeste de morioh";
    } else {
        this.innerText = "Haz clic en mí"
    }
});

boton2.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "abro camaras, bajo camaras, miro la puerta izquierda, miro la puerta derecha, repetir";
    } else {
        this.innerText = "Haz clic en mí"
    }
});

boton3.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Haz clic en mí") {
        this.innerText = `-Hola cartman
    \n-KYLE,NO QUEDA NADA, SE LO LLEVARON TODO, ¿¡¿¡PORQUE HACEN ESTO!?!?`;
    } else {
        this.innerText = "Haz clic en mí"
    }
});