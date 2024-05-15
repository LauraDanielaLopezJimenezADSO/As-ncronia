// aqui se creo una lista(funcion) donde se le estan pasando dos argumentos
function filter(array, callback) {
    // aqui es la variable donde se van a almacenar los nuevos datos
    let resultado = []
    //for of iterar elemento en una lista
    for(let num of array){
        // se hace la condicion del callback
        if(callback(num)){
            //aqui se envia a la lista
            resultado.push(num)
        }else{
            continue;
        }
    }
    return resultado
}

// declarar una variable como una lista vacia 
let lista = []
for(let i = 0; i<10;i++){
    lista.push(parseInt(prompt("Ingrese un numero ")))
}

// almacenamos en la variable final el return de la funcion filter 
let final = filter(lista, function(numero){
    
    if(numero % 2 === 0){
        return true;
    } else{
        return false;
    }
})

console.log(final)
