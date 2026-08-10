const botonInicio = document.getElementById("inicio")
const meGusta = document.querySelectorAll('.like');
const perfil = document.getElementById('verPerfil');

botonInicio.addEventListener("click", function () {
    if (this.innerText === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión"
    }
});

meGusta.forEach(function(button) {
    button.addEventListener('click', function() {
        let cantidadLikes = parseInt(button.innerText);
        cantidadLikes++;
        button.innerText = cantidadLikes + ' Me gusta';
    });
});

perfil.addEventListener("click", function() {
    alert('Cargando el perfil del usuario...');
});