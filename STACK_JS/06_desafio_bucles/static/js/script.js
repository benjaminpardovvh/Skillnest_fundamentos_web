function interacciones() {
    for (let i = 0; i <= 10; i++) {
        alert(`Haz interactuado ${i} veces`)
    }
}

function carga() {
    for (let i = 0; i <= 100; i += 10) {
        alert(`Cargando... ${i}%`)
    }
    alert(`Carga completada`)
}

function descuento() {
    //solo en este use la ia de google ¿porque? porque matildex en algo inefisiente con terminos de resolucion, la unica vez que la use no me dio lo que necesitada del todo, es parcialmente efectiva en mi opinion
    for (let i = 5; i <= 25; i += 5) {
        let producto = parseInt(prompt(`coloque el valor del producto`))
        alert(`producto ${producto} - descuento aplicado: ${i}% 
            \nvalor final: ${producto - (producto * (i/100))}`)
    }
}

function notificaciones(){
    for (let i = 5; i > 0; i--) {
        alert(`tienes ${i} notificaciones nuevas`)
    }
    alert(`no tienes notificaciones`)
}

function puntos(){
    let puntos = 0
    while (puntos <= 200) {
        alert(`CALCULANDO PUNTOS...`)
        puntos += 50
    }
    alert(`GANASTE ${puntos}\n¿INTENTAR DE NUEVO? \nSI\nNO<--`)
}