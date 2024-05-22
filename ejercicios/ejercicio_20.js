// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.


//se crea la funcion que se resuelve luego de 1 s y toma el parametro numero
function num(numero) {
    //creamos la promesa
    return new Promise(resolve => {

        //utilizamos setTimeout para esperar 1 s
        setTimeout(() => {
            //cuando el tiempo se cumple llamamos a resolve, para resolver la promesa
            resolve(`La promesa se resolvio luego de: ${numero}`)
        }, numero)
    })
}

//creamos las promesas que se deevuelvan luego de tantos s
let p1 = num(1000);
let p2 = num(3000);
let p3 = num(5000);

//all devuelve un arreglo con los result de las promises
Promise.all([p1,p2,p3])
    .then(rta => {
        
        console.log("RESUELTAS")
        rta.forEach(rta =>{
            console.log(rta)
        })                                                                                             
    })