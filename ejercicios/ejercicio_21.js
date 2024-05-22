// Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.


// Crear tres Promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('¡Promise 1 resuelta!'), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('¡Promise 2 rechazada!')), 1500);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('¡Promise 3 resuelta!'), 2000);
});

// Promise.allSettled() para obtener información sobre el estado de todas las Promises
Promise.allSettled([p1, p2, p3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1}: ${result.value}`);
            } else {
                console.error(`Promise ${index + 1}: ${result.reason.message}`);
            }
        });
    })
    .catch(error => {
        console.error('Error al ejecutar Promise.allSettled:', error);
    });






