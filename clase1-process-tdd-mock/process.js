// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.memoryUsage())
// console.log(process.version)
// process.env
// console.log(process.argv.slice(2))
// comander

import { Command } from 'commander'

export const program = new Command()

program 
    .option('--mode <mode>', 'Modo de trabajo del entorno de ejecución de server', 'production')
    .parse()

console.log(program.opts())


// para tener distintos entornos (desarrollo - testingg - producción)
// comander + dotenv + .env y Argument.

// listener de process 


// console.log('inicio')
//     process.on('exit', code => {
//         console.log('Evento que se ejecuta antes de salir del proceso: ',  code)
//     })
//     process.on('uncaughtException', exception => {
//         console.log('escuchando todos los errores no controlados: ', exception)
//     })
// Console
// console.log('fin')
