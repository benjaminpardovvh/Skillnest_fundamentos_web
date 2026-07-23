console.log(`hola :3`)
let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        console.log("Pan:", this.pan);
        console.log("Carne:", this.carne);
        console.log("Queso:", this.queso);
        console.log("Extras:", this.extras.join(", ")
        );
    }
};

//acceder al pan
console.log(hamburguesaEspecial.mostrarIngredientes())

//Variable\Objeto con metodo

let jojos = {
    nombre: "jose",
    apellido: "jose",
    edad: "sepa la bola",
    mostrarNombre: function () {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Apellido: ${this.apellido}`)
        console.log(`Edad: ${this.edad}`)
    },
    mostrarNombreAlert: function () {
        alert(`Nombre: ${this.nombre}`)
        alert(`Apellido: ${this.apellido}`)
        alert(`Edad: ${this.edad}`)
    }
}

console.log(jojos.mostrarNombre())
