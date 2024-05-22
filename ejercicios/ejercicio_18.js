// Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").


// Realiza una solicitud para cargar el archivo JSON por medio de http para obetner los datos
fetch('ejercicio_18json.json')
//manejamos la respuesta con then , el parametro response es la respuesta del servidor
//llamamos a .json la cual devuelve una promesa
.then(response => response.json())
//aqui manejamos los datos analizados y el parametro data contiene el objeto json del archivo
.then(data => {
    // Filtra los elementos cuyo nombre comienza con "L"
    const iniciales = data.filter(item => 
        item.nombre.startsWith('l'));
    // Muestra los nombres filtrados en la consola
    console.log('nombres que comienzan con "l":', iniciales.map(item => item.nombre));
})
//manejo de errores 
.catch(error => console.error('Error al cargar el archivo JSON:', error));


