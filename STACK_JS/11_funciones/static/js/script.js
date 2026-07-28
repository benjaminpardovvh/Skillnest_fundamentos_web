//ejemplo funcion simple (sin parametros)
function saludar(/*sin parametros*/) {
   alert("¡Hola, bienvenido!");
}

//saludar(); //Ejecutar una funcion
// saludar();
// saludar();
// saludar();
//funcion con parametros
//el parametro recibe un valor para trabajar en la funcion
//el parametro recive el tipo de dato al momento de dar valor
function saludarParam(nombre) {
   alert("¡Hola, " + nombre + "!");
}

// saludarParam("Tommy"); //ejecucion de la funcion con parametros:  function funcion("Argumento")
// saludarParam("Vicky");

//funciones con return
function mostrarMaximo() {
   function encontrarMaximo(a, b) {
      if (a > b) {
         return a;
      } else {
         return b;
      }
   }

   let numero1 = 10;
   let numero2 = 7;
   //maximo guarda el valor de retorno
   let maximo = encontrarMaximo(numero1, numero2);
   alert(`El número mayor entre ${numero1} y ${numero2} es: ${maximo}`);
}

//tarea: crear una funcion que reciba 3 parametros (a b c) 
/*debe:
sumar a + b
al resultado restarlo a c 
y lo que quede mostrarlo en un alert*/
function operatoriaCombinada() {
   function operacion(a, b, c, d) {
      d = (a + b) - c
      return d
   }
   let resultado = operacion(20, 10, 5, 0)
   alert(`${resultado}`)
}