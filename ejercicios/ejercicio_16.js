// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

//se crea la funcion que se resuelve luego de 1 s y toma el parametro numero
function num(numero) {
    //creamos la promesa
    return new Promise(resolve => {

        //utilizamos setTimeout para esperar 1 s
        setTimeout(() => {
            //cuando el tiempo se cumple llamamos a resolve, para resolver la promesa
            resolve(numero)
        }, 1000)
    })
}

//creamos las promesas
let p1 = num(2);
let p2 = num(5);
let p3 = num(10);

//all devuelve un arreglo con los result de las promises
Promise.all([p1,p2,p3])
    .then(rta => {
        //sumamos los result utilizando reduce 
        let sum = rta.reduce((acu, num) => acu + num, 0);
        console.log("resultado final", sum)                                                                                             
    })

    // .catch(error => console.error("ERROR",error))


                                  