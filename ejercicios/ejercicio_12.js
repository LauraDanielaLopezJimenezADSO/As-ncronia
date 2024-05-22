// La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:




//se crea la funcion delay con un solo argumento
function delay(ms) {
    //se retorna una promesa 
    return new Promise((resolve) => {
        // hacemos uso del setTimeout, es una función que ejecuta otra función después de un número especificado de milisegundos.
        setTimeout(resolve, ms);
        //la funcion resolve es llamada despues del setTimeout haya esperado los milisegndos
    });
}

//.then toma una función que se ejecutará una vez que la promesa se haya resuelto.
delay(3000).then(() => {
    alert("Se ejecutará después de 3 segundos");
});



//Las promesas son objetos que representan la eventual finalización (o falla) de una operación asíncrona y su resultado.

