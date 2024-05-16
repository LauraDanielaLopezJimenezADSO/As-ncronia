// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let array = [2, 4, 6, 54, 322]

const operacion = (x) => {
  return x > 10;
}

let resultado = array.findIndex(operacion); //el findIndex busca la posicion del primer numero que cumpla la condicion

console.log(resultado);