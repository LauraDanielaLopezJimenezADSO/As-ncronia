// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.



// vamos a utilizar setInterval

//a la funcin auto ejecutable se le pasan 2 parametros correspodndientes al valor inicial que seria desde donde inicia el ciclo de iteracion y el valor final correspondiente al final de la iteracion
(function (inicio=parseInt(prompt("ingrese el num de inicio")), fin=parseInt(prompt("ingrese el num de inicio"))){
    //la variavle contador va a almacenar el valor inicial  
    let cont = inicio;
    // la variable intervalo almacena un arroud funtion
    let intervalo = setInterval(() => {
        
        console.log(cont);
        //al contador ser menor que el valor final, va a sumar 1
        if (cont < fin) {
            cont++;
        } else {
            clearInterval(intervalo);
        }
        //cada segundo aparecera el valor de cont
    }, 1000); 

} )()



// vamos a utilizar setTimeout anidado
//a la funcin auto ejecutable se le pasan 2 parametros correspodndientes al valor inicial que seria desde donde inicia el ciclo de iteracion y el valor final correspondiente al final de la iteracion
(function (inicial=parseInt(prompt("Ingrese un numero inicial")), final=parseInt(prompt("Ingrese un numero "))){
    //la variavle contador va a almacenar el valor inicial 
    let contador = inicial;
    // la variable almacena una funcion auto ejecutable
    let temp = function(){
        console.log(contador)
        //al contador ser menor que el valor final, va a sumar 1
        if(contador < final){
            contador++
            setTimeout(temp, 1000)
        }
    }
    temp()
})();

