// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

//definimos una funcion sin argumentos
function captura() {
    //instanciamos la promesa y le pasamos el argumento de reject
    return new Promise((resolve, reject) =>{
        //creamos la funcion setimeout que se rechaza luego de 2 s    
        setTimeout(() =>{
            reject(new Error("Error: Promise rechazada"))
        }, 2000)
    })
}

captura()
//capturamos el error con uso del bloque catch 
    .catch(error => 
        //se muestra el mensaje de error
        console.log("ERROR", error.message))

