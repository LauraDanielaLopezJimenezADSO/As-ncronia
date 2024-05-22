// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica


async function datos() {
    try{
        //usamos fectch para obtener una solicitud http la cual devuelve una promesa

        //con await esperamos la respuesta del servidor antes de continuar - -- trae el archivo
        let rta = await fetch('ejercicio_19json.json');
        //analizamo s los datosm y se convierte a formato JSCO
        let dato = await rta.json();

        //let info = dato.info;
        

        // //accedemos a la informacion que tiene el JSON
        // let nombre = dato.nombre;
        // let apellido = dato.apellido;
        // let edad = dato.edad;

        // // mostrar información en la consola.
        console.log(dato)
        console.log(`Nombre: ${dato.nombre}, Apellido: ${dato.apellido}, Edad: ${dato.edad}`);

    }catch(error){
        console.error('Error al cargar el archivo JSON:', error)
    }
}

datos();






















// async function datos() {
//     try {
//         let rta = await fetch('ejercicio_19json.json');

//         if (!rta.ok) {
//             throw new Error(`Error al cargar el archivo JSON. Estado de respuesta: ${rta.status} ${rta.statusText}`);
//         }

//         let dato = await rta.json();
//         let info = dato.info;
//         console.log(info);
//     } catch (error) {
//         console.error('Error al cargar el archivo JSON:', error);
//     }
// }

// datos();







// async function obtenerDatosDesdeJSON() {
//     try {
//       const respuesta = await fetch('ejercicio_19json.json');
//       const datos = await respuesta.json();
      
//       // Manipula los datos según tus necesidades
//       const informacionEspecifica = datos.informacionEspecifica;
//       console.log(informacionEspecifica);
//     } catch (error) {
//       console.error('Error al obtener datos desde el archivo JSON:', error);
//     }
//   }
  
//   // Llama a la función
//   obtenerDatosDesdeJSON();










