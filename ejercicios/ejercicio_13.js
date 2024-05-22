// Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
// resuelta" cuando se cumpla.


//se crea la funcion num
function num(element) {
    return new Promise((resolve) => {
        // llamamos a la funcion setTIMEOUT Y lo que haya dentro se ejecutara luego de 3 segundos
        setTimeout(() =>{
            resolve("PROMESA RESUELTA")
        }, element);
    })
    
}

//cuando la promesa se cumpla la funcion ejecutara el mensaje 
num(3000).then((message) => {
    console.log(message);
});






































