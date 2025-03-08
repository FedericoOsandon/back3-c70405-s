// const suma = (numero1, numero2) => {
//     if(!numero1 || !numero2) return 0
//     if(typeof numero1 !== 'number' || typeof numero2 !== 'number') return null
//     const result = numero1 + numero2
//     return result
// }


// const suma = (...numeros) => { /// numeros es, por el ... un array 
//     // if(!numero1 || !numero2) return 0
//     if(numeros.length === 0) return 0


//     // if(typeof numero1 !== 'number' || typeof numero2 !== 'number') return null
//     let validInput = true
//     for (let i = 0; i < numeros.length && validInput; i++) { // [1,'2',3,4,5]
//        if(typeof numeros[i] !== 'number') {
//             validInput = false
//        }
        
//     }
//     if(!validInput) return null

//     let result = 0
//     // const result = numero1 + numero2
//     for (let i = 0; i < numeros.length; i++) {
//         result += numeros[i]        
//     }


//     return result
// }
const suma = (...numeros) => { /// numeros es, por el ... un array 
    if(numeros.length === 0) return 0
    if(!numeros.every(numero => typeof numero === 'number')) return null  //[1,'2',3,4,5]

    return numeros.reduce((sumaTotal, numero) => sumaTotal + numero, 0)

}



const testTotales      = 4
let cantTestQuePasamos = 0

console.log('______________________________________________________________________________')
console.log('Test 1: La función debe devolver null si un parámetro es no numérico')
let restultadoTest1 = suma(2, '2')
if( restultadoTest1 === null) {
    console.log('test 1 pasó')
    cantTestQuePasamos++    
} else console.log(`Test 1, no paó. Se recibió ${typeof restultadoTest1} pero esperabamos un null`)

console.log('______________________________________________________________________________')
console.log('Test 2: La función debe devolver 0 si no pasamos  parámetros')
let restultadoTest2 = suma()
if( restultadoTest2 === 0) {
    console.log('test 2 pasó')
    cantTestQuePasamos++    
} else console.log(`Test 2, no paó. Se recibió ${restultadoTest2} pero esperabamos un 0`)

console.log('______________________________________________________________________________')
console.log('Test 3: La función debe devolver la suma correctamente')
let restultadoTest3 = suma(2, 5)
if( restultadoTest3 === 7) {
    console.log('test 3 pasó')
    cantTestQuePasamos++    
} else console.log(`Test 3, no paó. Se recibió ${restultadoTest3} pero esperabamos un 7`)

console.log('______________________________________________________________________________')
console.log('Test 4: La función debe devolver null si un parámetro es no numérico')
let restultadoTest4 = suma(1,2,3,4,5)
if( restultadoTest4 === 15) {
    console.log('test 4 pasó')
    cantTestQuePasamos++    
} else console.log(`Test 4, no pasó. Se recibió ${restultadoTest4} pero esperabamos un 15`)

if(testTotales === cantTestQuePasamos) console.log('todos los test se pasaron correctamente')
else console.log(`Se ha pasado ${cantTestQuePasamos} de ${testTotales}`)