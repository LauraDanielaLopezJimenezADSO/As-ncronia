// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

//definimos una funcion y con la palabra clase  async indicamos que es asincronica
async function num() {
    //usamos await para eperar a que se resuelva la promea 
    await new Promise(resolve =>
        //cuando se cumple el tiempo la funcion resolve se llama y la promesa se resuelve
        setTimeout(resolve, 1000));
        return "Operación completada"
}

//llamamos la funcion e impirmos el resultado -- con then manejamos el resul de la promesa
num().then(rta =>
    console.log(rta)
)