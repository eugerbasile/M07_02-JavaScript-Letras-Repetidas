/*ejercicio 4
Crea otra array con tu apellido donde cada posición corresponda a una letra.
Combinar los dos arrays en uno. Además, añade una posición con un espacio vacío entre la primera y la segunda. Es decir, partimos de 'array name y surname y al terminar la ejecución sólo tendremos una que se llamará fullname.*/





var nombre = ["E", "U", "G", "E", "N", "I", "A"];
var espacio = [" "];
var apellido = ["R", "O", "D", "R", "I", "G", "U", "E", "Z"];

var fullname;

fullname = nombre.concat(espacio, apellido);

console.log(fullname);