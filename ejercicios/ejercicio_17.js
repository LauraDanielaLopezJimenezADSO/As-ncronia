// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.


// Realiza una solicitud para cargar el archivo JSON por medio de http para obetner los datos
fetch('ejercicio_17json.json')
//manejamos la respuesta con then , el parametro response es la respuesta del servidor
//llamamos a .json la cual devuelve una promesa
.then(response => response.json())
//aqui manejamos los datos analizados y el parametro data contiene el objeto json del archivo
.then(data => {
    //se imprime en consola
  console.log('archivo JSON:', data);
})
//manejo de errores 
.catch(error => console.error('Error al cargar el archivo JSON:', error));