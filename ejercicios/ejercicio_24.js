// Objeto original
const targetObj = {
    name: "John",
    age: 30
};

// Handler que define el comportamiento personalizado del proxy
const handler = {
    // Intercepta la lectura de propiedades
    get: function(target, prop, receiver) {
        console.log(`Propiedad "${prop}" está siendo leída.`);
        return target[prop];
    },
    // Intercepta la escritura de propiedades
    set: function(target, prop, value, receiver) {
        console.log(`Propiedad "${prop}" está siendo modificada con el valor "${value}".`);
        target[prop] = value;
        return true;
    }
};

// Crear el objeto proxy
const proxyObj = new Proxy(targetObj, handler);

// Acceder a las propiedades del proxy
console.log(proxyObj.name); // Esto imprimirá "Propiedad "name" está siendo leída." y luego "John"
proxyObj.age = 35; // Esto imprimirá "Propiedad "age" está siendo modificada con el valor "35".
