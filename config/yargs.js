const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: '\nnúmero con el cual se multiplicará por los primeros diez primeros números naturales\n'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Muestra la tabla en consola\n'
                    })
                    // .check((argv, options) => {
                    //     if(argv.l){
                    //         return crearArchivo(argv.base)
                    //                 .then(salida => {console.log(salida)})
                    //     }
                    //     return 'archivo creado'
                    // })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        describe: 'selecciona los n primeros numeros naturales que selecciones \n'
                    })
                    .check((argv, options) => {
                        if(isNaN(argv.b)){
                            throw 'ERROR!!!!! La base tiene que ser un número'
                        }
                        return true
                    })
                    .argv;


module.exports = {
    argv
}