function takeWhile(array, callback) {
    const result = [];

    for (const element of array) {
        if (!callback(element)) {
            break;
        }
        result.push(element);
    }

    return result;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6];

// Callback que devuelve true para números menores o iguales a 3
const callback = (num) => num <= 3;

const result = takeWhile(numbers, callback);
console.log(result); // Salida esperada: [1, 2, 3]
