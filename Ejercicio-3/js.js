var cadenaNombre = [{ E: 2 , U: 1, G: 1,  N: 1 ,  I: 1 , A: 1 }];
//metodo map crea un nuevo array con los resultados de una llamada a una funcion
var numeroVeces = cadenaNombre.map(function (current) {
    console.log(current);
    
});


/*la funcion del map nos pide tres parametros
current(es el recorrido de la funcion map)
index(0,1,2)
array en si 
los ultimos dos parametros son opcionales, el primero es obligatorio */