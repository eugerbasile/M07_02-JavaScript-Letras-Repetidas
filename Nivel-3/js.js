/**************************EJERCICIO UNO ***************************/
function ejercicioUno() {
  var letrasNombre = ["E", "U", "G", "E", "N", "I", "A"];
  console.log(" Este es el [EJERCICIO - 1] " );
  for (var i = 0; i < letrasNombre.length; i++) {
     
    console.log(letrasNombre[i]);
  }
}
/**************************EJERCICIO DOS ***************************/
function ejercicioDos() {
  var cadenaNombre = ["E", "U", "3", "G", "E", "6", "N", "I", "9", "A"];

  var nombre = "EU3GE6NI9A";
  console.log(" Este es el [EJERCICIO - 2] " );
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
    } else {
      console.log("Los nombres no llevan NUMEROS " + cadenaNombre[i]);
    }
  }
}
/**************************EJERCICIO TRES ***************************/
function ejercicioTres() {
  var cadenaNombre = [{ E: 2, U: 1, G: 1, N: 1, I: 1, A: 1 }];
  console.log(" Este es el [EJERCICIO - 3]" );
  //metodo map crea un nuevo array con los resultados de una llamada a una funcion
  var numeroVeces = cadenaNombre.map(function (current) {
    console.log(current);
  });
}
/**************************EJERCICIO CUATRO ***************************/
function ejercicioCuatro() {
  var nombre = ["E", "U", "G", "E", "N", "I", "A"];
  var espacio = [" "];
  var apellido = ["R", "O", "D", "R", "I", "G", "U", "E", "Z"];

  var fullname;
  console.log(" ESTE ES EL [EJERCICIO - 4] " );
  fullname = nombre.concat(espacio, apellido);

  console.log(fullname);
}
/**************************NIVEL 2 ***************************/
function nivelDos() {
  var str =
    "Una dirección de correo electrónico es la dirección que utiliza para Recibir y enviar correos electrónicos. Se Muestra a los destinatarios de sobre correos electrónicos para que sepan quién le envía un correo electrónico. Cada dirección de correo electrónico Sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero Reducir texto <br> eliminarlas en cualquier momento. Una dirección de correo electrónico consisten en el signo @ (arroba), el número de usuario delante y el dominio detrás, por Ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro Ejemplo se ionos.es. Esta información varía de proveedor a proveedor, por lo que una Parte del dominio també Puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos Proveedores. Si ha registrado sume propio dominio, por Ejemplo, www.el-número-de-sobre-sueños.es, las direcciones de correo electrónico que configura para el dominio el Tienen como Parte del dominio (número-de-usuario @ el-número -de-sobre-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El número de usuario se la parte de una dirección de correo electrónico que Reducir texto <br> seleccionar libremente en la medida de lo posible. Puede, por Ejemplo, utilizar sume propio número o el número o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio Deseada ya esté registrada. En este caso, debera considerar alternativas para el número de usuario de super dirección de correo electrónico. Si utiliza sume propio dominio, estas restricciones no se aplican Porque Sólo Usted Reducir texto <br> crear direcciones de correo electrónico que coincidan con super propio dominio. En resumen, nombre-de-usuario@ionos.es es un email ";
    console.log(" ESTE ES EL [NIVEL - 2] " );

  //var exprReg = /\w+@\w+\.+[a-z/g;

  /*Esta expresion regular busca caracteres de la a a la z en mayuscula y minuscula , numeros, acentos,ñ y espacios en el mail, cierro y le pongo el mas para que lo repita una o mas veces, luego el arroba y lo que sigue igual a lo anterior. Luego el punto y lo que le sigue a continuacion , al finalizar despues de la barra le pongo que sea global y explore la cadena completa y luego la i para que no distinga entre mayusculas y minusculas  */
  var exprReg =
    /[a-zA-Z0-9._À-ÿ\00C0-017F\s]+@[a-zA-Z0-9._À-ÿ-00C0017F\s]+\.[a-zA-Z]+/gi;
  var result = str.match(exprReg);
  //Pongo set para no repetir
  var noRepetir = [...new Set(result)];

  console.log(noRepetir);
}
