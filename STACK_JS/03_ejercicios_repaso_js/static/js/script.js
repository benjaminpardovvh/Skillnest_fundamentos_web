function ejercicio1() {
    let nombre = prompt(`inserte su nombre`)
    let peso = parseInt(prompt(`Ingresa el peso del pedido`))
    if (peso <= 2) {
        alert(`nombre: ${nombre} 
        peso: ${peso} 
        Paquete: pequeño.
        precio del envio: 10.000`)
    }
    else if (peso > 2 && peso <= 5) {
        alert(`nombre: ${nombre} 
        peso: ${peso} 
        Paquete: mediano. 
        precio del envio: 15.000`)
    }
    else if (peso > 5 && peso <= 10) {
        alert(`nombre: ${nombre} 
        peso: ${peso} 
        Paquete: grande. 
        precio del envio: 20.000`)
    }
    else if (peso > 10) {
        alert(`nombre: ${nombre} 
        peso: ${peso} 
        Paquete: enorme. 
        precio del envio: 30.000`)
    }
    else {
        alert(`inserte valores validos`)
    }
}

function ejercicio2() {
    let usuario = prompt(`coloque que tipo de usuario es: `)
    let libros = parseInt(prompt(`coloque la cantidad de libros solicitados: `))
    if (usuario == "Estudiante" && libros > 5) {
        alert(`Estas excediendo los prestamos permitidos 
por favor solicite una cantidad valida`)
    }
    else if (usuario == "Estudiante" && libros <= 5) {
        alert(`Prestamo permitido :)`)
    }
    else if (usuario == "Profesor" && libros > 20) {
        alert(`usted esta excediendo los prestamos permitidos 
por favor solicite una cantidad valida`)
    }
    else if (usuario == "Profesor" && libros <= 20) {
        alert(`Prestamo permitido :)`)
    }
    else {
        alert(`ingrese valores validos`)
    }
}

function ejercicio3() {
    let nombre = prompt(`Ingresa tu nombre`)
    let edad = parseInt(prompt(`Ingresa tu Edad`))
    if (edad <= 10 && edad > 0) {
        alert(`Nombre: ${nombre}
            \nEdad: ${edad}
            \nCategoria: niño`)
    }
    else if (edad >= 11 && edad <= 17) {
        alert(`Nombre: ${nombre}
            \nEdad: ${edad}
            \nCategoria: Adolecente`)
    }
    else if (edad >= 18 && edad <= 60) {
        alert(`Nombre: ${nombre}
            \nEdad: ${edad}
            \nCategoria: Adulto`)
    }
    else if (edad > 60) {
        alert(`Nombre: ${nombre}
            \nEdad: ${edad}
            \nCategoria: Adulto mayor`)
    }
}

function ejercicio4(){
    let nombre = prompt(`Ingresa tu nombre:`)
    let añosEmpresa = parseInt(prompt(`Ingrese cuantos años estubo en esta empresa`))
    if (añosEmpresa < 5) {
        alert(`Usted (${nombre}) no puede recibir la bonificacion 
por estar muy poco tiempo en la empresa (${añosEmpresa})`)
    }
    else if
}