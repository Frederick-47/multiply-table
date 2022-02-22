const { number, boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const {argv} = require('./config/yargs')


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(salida => console.log(salida))
    .catch(err => console.log(err));



