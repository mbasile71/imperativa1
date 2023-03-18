
//A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 6, 15];

// EJERCICIO 1-A = Obtener en un nuevo array las edades menores a 18.

let menoresA18 = (arr)=>{

    let arrMenores18 = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 18){

            arrMenores18.push(arr[i])
        }
        
    }
    return arrMenores18
}
let arrayMenoresDe18 = menoresA18(edades)
console.log(arrayMenoresDe18)


// EJERCICIO 1-B = Obtener en un nuevo array las edades mayor o igual a 18.

let mayorIgualA18 = (arr)=>{

    let arrMayores18 = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 18){

            arrMayores18.push(arr[i])
        }
        
    }
    return arrMayores18
}
let arrayMayoresDe18 = mayorIgualA18(edades)
console.log(arrayMayoresDe18)


// EJERCICIO 1-D = Obtener el menor numero del arreglo.

let menor = (arr)=>{

    let primerElem = arr[0]
    let elMenor = 0

    for (let i = 1; i < arr.length; i++) {
        
        if(primerElem > arr[i]){ 
            primerElem = arr[i]
            elMenor = i + 1
        }
        
    }
    return `El menor numero es ${primerElem} y esta en la posicion ${elMenor}`
}
let resMenor = menor(edades)
console.log(resMenor)


// EJERCICIO 1-E = Obtener el mayor numero del arreglo.

let mayorNumero = (arr)=>{

    let primerOjeto = arr[0] 
    let posicion = 0

    for (let i = 1; i < arr.length; i++) {
        
        if(primerOjeto < arr[i] ){
            
            primerOjeto = arr[i]
            posicion = i + 1

        }
        
    }    
return `El numero mayor es ${primerOjeto} y su posicion es ${posicion}`
}
let resMayor = mayorNumero(edades)
console.log(resMayor)


// EJERCICIO 1-F = Obtener el promedio de edades.

let promedioEdades = (arr)=>{

    let sumaEdades = 0
    for (let i = 0; i < arr.length; i++) {
       
        sumaEdades += arr[i]
        
    }
    return `El promedio de las eades es de ${sumaEdades / arr.length}`
}
let promedio = promedioEdades(edades)
console.log(promedio)


// EJERCICIO 1-G = Incrementar en 1 todas las edades.

let sumarUno = (arr)=>{
    let arregloMasUno = []
    for (let i = 0; i < arr.length; i++) {
       
        arregloMasUno.push(arr[i] + 1) 
    
    }
    return arregloMasUno
}
let ArregloSumadoUno = sumarUno(edades)
console.log(ArregloSumadoUno)

