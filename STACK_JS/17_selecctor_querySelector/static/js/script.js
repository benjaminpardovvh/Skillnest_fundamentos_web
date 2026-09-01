console.log("hola")

//etiqueta
let p = document.querySelector("p");
console.log(p); // <p>SELECT</p>

//id
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>

//clase + etiqueta
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

//clase (mas de 1 elemento)
let parrafos = document.querySelector(".texto");
console.log(parrafos.textContent); // "Este es el primer párrafo."

//mostrar solo el contenido
console.log(`el contenido del titulo es: ${title.textContent}`)

//inexistente
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

//tarea
/*crear un boton y aplicar condicion al igual que el ejemplo*/

let JAU_ORANGE = document.querySelector("#coso")

JAU_ORANGE.addEventListener("click", function () {
    if (JAU_ORANGE !== null) {
        if (JAU_ORANGE.textContent === "hola, cambio de color") {
            this.textContent = "ves?";
            this.style.backgroundColor = "black"
            this.style.color = "white"
        } else {
            this.textContent = "hola, cambio de color"
            this.style.color = "black"
            this.style.backgroundColor = "rgb(255, 217, 0)"
        }
    } else {
        console.log("El boton no existe")
    }
})