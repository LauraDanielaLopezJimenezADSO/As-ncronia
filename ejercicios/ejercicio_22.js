// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno

// Supongamos que tenemos una lista de elementos (pueden ser URLs, IDs, etc.)
const elementos = [1, 2, 3, 4, 5];

// Función asincrónica para procesar cada elemento
async function procesarElementos() {
    for (const elemento of elementos) {
        try {
            // Realizamos una llamada asincrónica (por ejemplo, una solicitud HTTP)
            const resultado = await hacerAlgoConElemento(elemento);

            // Procesamos el resultado (puede ser guardar en una base de datos, mostrar en la consola, etc.)
            console.log(`Resultado para elemento ${elemento}: ${resultado}`);
        } catch (error) {
            console.error(`Error al procesar elemento ${elemento}:`, error);
        }
    }
}

// Llamamos a la función para iniciar el procesamiento
procesarElementos();

// Función ficticia para simular una llamada asincrónica
async function hacerAlgoConElemento(elemento) {
    // Aquí puedes realizar la operación específica con el elemento
    // (por ejemplo, hacer una solicitud HTTP, acceder a una base de datos, etc.)
    // y devolver el resultado.
    return `Resultado para ${elemento}`;
}
