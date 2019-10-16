// Este comentario es solo para una línea

/*
  Sino puedes escribir asi para varias lineas
*/

document.addEventListener("DOMContentLoaded", cargaCompleta);

function cargaCompleta(event) {
  
  alert("La web ya terminó de cargar"); // Alertas

  var nombre = "Lucas"; // Creación de variables

  var nombre = prompt("¿Podrías escribir tu nombre?", "Lucas"); // Pedido para introducir datos

  if (nombre != null) {
    alert("Bienvenido " + nombre);
  }
  
  var resultado = multiplicar(5, 8);
  if (resultado > 15) {
    alert("La multiplicación de 5 x 8 es mayor que 15");
  } else {
    alert("La multiplicación de 5 x 8 es menor que 15");
  }

  for (var i = 0; i < 3; i++) {
    alert("Ciclos 'for': " + i);
  }
  
}

// De esta forma se crea una multiplicación
function multiplicar(primerNumero, segundoNumero) {
  var resultado = 0;
  resultado = primerNumero * segundoNumero;
  return resultado;
}
