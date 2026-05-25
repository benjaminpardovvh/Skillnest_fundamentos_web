console.log("conexión exitosa")

function cambiarTexto() {
    let titulo = "Hola, bienvenido"
    if (document.getElementById("titulo").innerText == titulo) 
    { document.getElementById("titulo").innerText = "Has cambiado el texto con JS" }
    else { document.getElementById("titulo").innerText = titulo }
}

//posible solucion: usar "setTimeout()" y "location.reload()"