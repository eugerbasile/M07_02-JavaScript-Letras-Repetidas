/*
var consonantes = ["G", "N"];
var vocales = ["E", "U", "I", "A"];
var numeros = ["3", "6", "9"];*/

var cadenaNombre = ["E", "U", "3", "G", "E", "6", "N", "I", "9", "A"];

var nombre = "EU3GE6NI9A";

console.log("Empezamos con el NOMBRE " + nombre);
//Hago bucle para recorrer array con su longitud, luego uso las condicionales para extraer cada elemento de acuerdo a una condicion y uso el comparador o 
for (var i = 0; i < cadenaNombre.length; i++) {
  if (cadenaNombre[i] == "G" || cadenaNombre[i] == "N") {
    console.log("Esto es una CONSONANTE " + cadenaNombre[i]);
  } else if (
    cadenaNombre[i] == "E" ||
    cadenaNombre[i] == "U" ||
    cadenaNombre[i] == "I" ||
    cadenaNombre[i] == "A"
  ) {
    console.log("Esto es una VOCAL " + cadenaNombre[i]);
  } else{
    console.log("Los nombres no llevan NUMEROS " + cadenaNombre[i]);
  }
}

/*

for (var i = 0; i < vocales.length; i++) {
  console.log("He encontrado la VOCAL " + vocales[i]);
}

for (var i = 0; i < consonantes.length; i++) {
  console.log("He encontrado la CONSONANTE " + consonantes[i]);
}

for (var i = 0; i < numeros.length; i++) {
  console.log("Los nombres no tienen NUMEROS " + numeros[i]);
}
*/
