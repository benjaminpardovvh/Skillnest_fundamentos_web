const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "#ff7eb3";
});

/*crea 2 botones con eventos mouseover y mouseout*/

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

boton1.addEventListener("mouseover", function () {
    this.innerText = "hola"
});

boton1.addEventListener("mouseout", function () {
    this.innerText = "adios"
});

const elemento = document.querySelector("body");

boton2.addEventListener("mouseover", function () {
    this.innerText = "flip"
    boton2.style.backgroundColor = "#F7E700"
    elemento.style.backgroundColor = "#008B54"
    boton2.style.color = "black"
})

boton2.addEventListener("mouseout", function () {
    this.innerText = "coin"
    boton2.style.backgroundColor = "#ff7eb3"
    elemento.style.backgroundColor = "white"
    boton2.style.color = "white"
});