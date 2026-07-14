console.log(`hola :)`)

/*ejemplo para for*/
function contar() {
    for (let i = 0; i <= 5; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}

function recorrerLista() {
    // Lista es un tipo de dato (array/lista)
    // [] -> ["nombres" , 4, True, [2,4]]
    /*
    let nombre = carlos
    alert(nombre)
    let nombres = ["Carlos" , "Maria"]
    alert(nombres[0]) --> imprime Carlos
    alert(nombres[1]) --> imprime Maria
    */
    let usuarios = ["Ana", "Luis", "María", "SHIZAAAAAAAAAA"];

    for (let i = 0; i < usuarios.length; i++) {
        alert(`Bienvenido, ${usuarios[i]}`);
    }
}
/*ejemplo para while*/
function musica() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false
    }
}

function datos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... (${datosPendientes} datos pendientes)`);
        datosPendientes--;
    }
    alert(`carga completada`)
}

function contrasena() {
    let contraseñaCorrecta = false;
// !algo=variable es distinto a true - dentro de una condicion
    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
            break;
            alert(`no se va a ejecutar wachin`);
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}

console.log(8 % 3)