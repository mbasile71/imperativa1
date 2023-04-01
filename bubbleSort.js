//ORDENAR CON BUBBLE SORT

/*let numeros = [5, 2, 6, 1, 3];

let palabras = ["casa", "Zebra", "abeja", "avion"];

const ordenarconBubble = (arr)=>{

//let aux = undefined
let aux

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {
            
            if( arr[j] > arr[j + 1]){   //PARA ORDENAR DE MAYOR A MENOR SE CAMBIA EL SIGNO " < "

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
     
}
ordenarconBubble(numeros)
console.log(numeros)*/



// ORDENAR EL ARREGLO EN BASE AL PARAMETRO PASADO

let numeros = [5, 2, 6, 1, 3];

const ordenarconBubble = (arr, instruccion)=>{

if( instruccion !== 'ASC' && instruccion !== 'DESC' ){
    console.log('Valor Introducido Desconocido')
    return 
} 

let aux

for (let i = 0; i < arr.length; i++) {
        
    for (let j = 0; j < arr.length - 1; j++) {

        if( instruccion === 'ASC'){

            if( arr[j] > arr[j + 1]){   //PARA ORDENAR DE MAYOR A MENOR SE CAMBIA EL SIGNO " < "

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }else{
            
            if( arr[j] < arr[j + 1]){   //PARA ORDENAR DE MAYOR A MENOR SE CAMBIA EL SIGNO " < "

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
        
        
    }
}
}    
ordenarconBubble(numeros, "DESC")
console.log(numeros)

