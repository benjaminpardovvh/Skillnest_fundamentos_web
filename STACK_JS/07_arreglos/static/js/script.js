console.log(`hola :3`)
//variables a ARRAY

let nombre1 = "pedrito"
let nombre2 = "juanita"
let nombre3 = "jonathan"
let nombre4 = "diego"

//transformar en array y mostrar

let nombres = ["pedrito", "juanita", "jonathan", "diego"]

//mostrar a maria (2) en una alerta
function carga() {
    alert(`${nombres[2]}`)
}

let compras = [5000, 2300, 12000, 4500, 3000]
let alumnos = ["Ana", "Pedro", "María", "José"]
let datos = ["Carlos", 18, true]
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"]

//La propiedad .length devuelve la cantidad de elementos.

console.log(frutas.length); // 4 --> conteo de elementos
let ultima = frutas[frutas.length - 1]
console.log(ultima)
//variable.length -1 siempre trae el ultimo elemento

function interacciones() {
    alert(`${alumnos[0]} fue a comprar una ${frutas[3]} donde el ${datos[0]} a $${compras[2]}`)
}

let cosas = ["hola", "a", "todos", "los", "programadores"]

function descuento() {
    alert(`${cosas[cosas.length - 2]} ${cosas[cosas.length - 1]}`)
}

function notificaciones() {
    let edades = [12, 15, 18, 20, 25];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            console.log(edades[i]);
        }
    }
}
let tareas = ["barrer", "cocinar", "realizar compras"]
function manipulacion() {
    //modificar
    tareas[1] = "construir"
    //añadir al final
    tareas.push("hacer commit al server")
    //eliminar al final
    let eliminar = tareas.pop()
    //añadir al inico
    tareas.unshift("Boxear")
    //eleminar al inicio
    eliminar += " " + tareas.shift()
    //juntar
    alert(tareas.join(" - "))
}

function edades() {
    let edades = [15, 18, 20, 14, 25];
    let cantidadEdades = edades.length
    alert(`${edades[0]} ${edades[4]} ${cantidadEdades}`)
}

function nombresJojo() {
    let nombres2 = ["pedrito", "juanita", "jonathan", "diego" , "carlitos" , "martin"]
    for (let i = 0; i <= 5; i++) {
        alert(`hola ${nombres2[i]}`)
    }
}

