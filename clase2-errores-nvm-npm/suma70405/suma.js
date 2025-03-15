
export const suma = (...numeros) => { /// numeros es, por el ... un array 
    if(numeros.length === 0) return 0
    if(!numeros.every(numero => typeof numero === 'number')) return null  //[1,'2',3,4,5]

    return numeros.reduce((sumaTotal, numero) => sumaTotal + numero, 0)

}

