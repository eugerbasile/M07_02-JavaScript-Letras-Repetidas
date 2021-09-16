/*al utilizar map(), podremos convertir un array en uno nuevo, cuyos valores serán una transformación del primero. Dicha transformación será efectuada por la función que se utilice en este proceso.*/

/*function contarCaracteres(letras) {
    var nombre = ["E","U", "G","E", "N", "I", "A"];
    var contador = 0;
  
        contador = contador + 1;
        
    }
  }
  console.log(contarCaracteres  );*/

/*var nombre = ["E","U", "G","E", "N", "I", "A"];
    var contador = {};

    var contarCaracteres = nombre.map (function(){

        contador[contarCaracteres] = ;
        console.log(nombre[i] + contarCaracteres.length);

    });
  */

var nombre = ["E", "U", "G", "E", "N", "I", "A"];
var listedCounts = {};
//var count;

var nameMaped = nombre.map((letter) => {
  console.log(letter);
  if (!listedCounts[letter]) {
    listedCounts[letter] = 1;
  } else {
    listedCounts[letter]++;
  }
  return listedCounts;
});

console.log(listedCounts);

/*la funcion del map nos pide tres parametros
current(es el recorrido de la funcion map)
index(0,1,2)
array en si 
los ultimos dos parametros son opcionales, el primero es obligatorio */
