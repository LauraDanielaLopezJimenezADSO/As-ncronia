// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento 
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback


// aqui se creo una lista(funcion) donde se le estan pasando dos argumentos
function mapa(array, callback) {
    // aqui es la variable donde se van a almacenar los nuevos datos
    let resultado = []
    //for of iterar elemento en una lista
    for(let num of array){
        // aqui se envia a la lista 
        resultado.push(callback(num))
        
    }
    // se retorna a la funcion map
    return resultado
}

// declarar una variable como una lista vacia 
let lista = []
//aqui se deja el ciclo para que repita 10 veces
for(let i = 0; i<10;i++){
    // estamos guardando los elementos en la lista
    lista.push(parseInt(prompt("Ingrese un numero ")))
}

// almacenamos en la variable final el return de la funcion mapa 
let final = mapa(lista, function(numero){
    return numero * numero
})

console.log(final)

