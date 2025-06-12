const libreria = require('./');

libreria.write('./martin.json', {
    name: 'Martín',
    lastName: 'Hasmat',
    age: 45,
    dev: 'Fullstack',
    isActive: true,
})

console.log('Funciones disponibles:', libreria);

const lectura = libreria.read('./martin.json');
console.log('Acá está su lectura de datos:\n', lectura);