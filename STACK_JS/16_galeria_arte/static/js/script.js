const imagen = document.getElementById("imagen")
const descripcion = document.getElementById("descripcion")

imagen.addEventListener("mouseover", function() {
    this.src = "static/img/noche-estrellada-sobre-el-ródano.png"
    descripcion.innerText = "Noche estrellada sobre el ródano, Vincent van Gogh (1888)"
})

imagen.addEventListener("mouseout",  function() {
    this.src = "static/img/campo-de-trigo-con-cipreses.png"
    descripcion.innerText = "Campo de trigo con cipreses, Vincent van Gogh (1889)"
})