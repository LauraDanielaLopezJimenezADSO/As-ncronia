const validator = {
    numeric: /^[0-9]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    date: /^\d{4}-\d{2}-\d{2}$/
};

function createValidatorProxy(obj) {
    return new Proxy(obj, {
        set: function(target, key, value) {
            const valueType = Reflect.get(target, key);
            if (valueType === 'numeric' && !validator.numeric.test(value)) {
                console.error(`Error: El valor asignado a "${key}" debe ser numérico.`);
                return false;
            }
            if (valueType === 'alphanumeric' && !validator.alphanumeric.test(value)) {
                console.error(`Error: El valor asignado a "${key}" debe ser alfanumérico.`);
                return false;
            }
            if (valueType === 'email' && !validator.email.test(value)) {
                console.error(`Error: El valor asignado a "${key}" debe ser un correo válido.`);
                return false;
            }
            if (valueType === 'date' && !validator.date.test(value)) {
                console.error(`Error: El valor asignado a "${key}" debe ser una fecha válida en formato YYYY-MM-DD.`);
                return false;
            }
            if (typeof value === 'string' && /^\s|\s$/.test(value)) {
                console.error(`Error: No se permiten espacios en blanco al inicio o al final de "${key}".`);
                return false;
            }
            target[key] = value;
            return true;
        }
    });
}

// Ejemplo de uso:
const obj = createValidatorProxy({
    age: 'numeric',
    username: 'alphanumeric',
    email: 'email',
    birthDate: 'date'
});

obj.age = 25; // Correcto
obj.username = 'john123'; // Correcto
obj.email = 'john@example.com'; // Correcto
obj.birthDate = '1990-01-01'; // Correcto

obj.age = 'twenty'; // Error: El valor asignado a "age" debe ser numérico.
obj.username = 'john 123'; // Error: El valor asignado a "username" debe ser alfanumérico.
obj.email = 'john@example'; // Error: El valor asignado a "email" debe ser un correo válido.
obj.birthDate = '01/01/1990'; // Error: El valor asignado a "birthDate" debe ser una fecha válida en formato YYYY-MM-DD.
obj.username = ' john123 '; // Error: No se permiten espacios en blanco al inicio o al final de "username".
