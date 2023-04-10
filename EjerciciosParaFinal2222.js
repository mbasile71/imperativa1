//-----------------------------------------------------------------
// TODO ORDENAR EL ARREGLO DE FORMA Y HACERLO DE FORMA ASCENDENTE Y DESCENDENTE POR PARAMETROS

let edades = [2, 12, 1, 5, 32, 56, 7];

const ordenarArreglo = (arr, cond)=>{

    if(cond !== 'ASC' && cond !== 'DESC'){
        console.log('Condicion no valida')
        return
    }

    let aux = undefined

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {

            if(cond === 'ASC'){

                if(arr[j] > arr[j + 1]){

                    aux = arr[j]
                    arr[j] = arr[j + 1] 
                    arr[j + 1] = aux
                }
            }else{

                if(arr[j] < arr[j + 1]){

                    aux = arr[j]
                    arr[j] = arr[j + 1] 
                    arr[j + 1] = aux
                }

            }
            
            
            
        }
        
    }
}
ordenarArreglo(edades, 'ASC')
console.log(edades)



//---------------------------------------------------------------------------
//------------------------------------------------------------------
// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN EL PRECIO

let productos = [
    {
      nombre: "televisor",
      precio: 500,
      stock: 7,
    },
    {
      nombre: "table",
      precio: 350,
      stock: 12,
    },
    {
      nombre: "celular",
      precio: 400,
      stock: 21,
    },
    {
      nombre: "notebook",
      precio: 600,
      stock: 16,
    },
  ];

const OrdenarArrStock = (arr)=>{

    let aux1;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {
            
            if(arr[j].precio > arr[j + 1].precio ){

                aux1 = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux1
            }
            
        }
        
    }

}
OrdenarArrStock(productos)
console.log(productos)



//--------------------------------------------------------------------------
// TODO FILTRAR LOS PRODUCTOS QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLO

const filtrarPorUnidades = (arr)=>{

    let arrFiltrado = []

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i].stock < 10){

            arrFiltrado.push(arr[i])
        }
        
    }
    return arrFiltrado
}
let nuevoArr = filtrarPorUnidades(productos)
console.log(nuevoArr)



//---------------------------------------------------------------------------
let matriz1 = [
    [2, 4, 3],
    [3, 1, 6], // [9, 3, 15]
    [8, 4, 9],
  ];
  
  // TODO ---> UN SOLO CICLO
  // CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
  // CON TODOS LOS ELEMENTOS DE LA FILA 2 (multiplicados x 3)

const multipX3 = (mat, fila)=>{

    let arrX3 = []

    for (let i = 0; i < mat[fila].length; i++) {
        
        arrX3.push(mat[fila][i] *= 3)
        
    }
    return arrX3
}
let nuevArrx3 = multipX3(matriz1, 1)
console.log(nuevArrx3)



//---------------------------------------------------------------------------
let matriz2 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
  ];
  // TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS DE
  // LA COLUMNA 1, POR UN STRING QUE DIGA "hola"

const cambColumna = (mat, col)=>{

    for (let i = 0; i < mat.length; i++) {
        
        mat[i][col] = 'Cambio'
        
    }
}
cambColumna(matriz2, 0)
console.table(matriz2)



//-----------------------------------------------------------------
// TODO CREAR UNA FUNCION QUE RETORNE EL TOTAL DE
// LA SUMA DE LA DIAGONAL SECUNDARIA
let matriz4 = [
    [2, 4, 5],
    [3, 1, 5],
    [8, 4, 9],
  ];

const sumaDiagSecundaria = (mat)=>{

    let suma = 0

    for (let i = 0; i < mat.length; i++) {
        
        suma += mat[i][mat.length -1 -i]

    }
    return suma
}
let sumaDSec = sumaDiagSecundaria(matriz4)
console.log(sumaDSec)



//-----------------------------------------------------------------
// TODO CREAR UNA FUNCION QUE RETORNE EL TOTAL DE sumar TODOS
// LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL Y A ESTE SUMARLE 10
let matriz3 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
  ];

const sumDiagoPrinMas10 = (mat)=>{

    let sum = 0

    for (let i = 0; i < mat.length; i++) {
        
        sum += mat[i][i]
        
    }
    return sum + 10
}
let resSum = sumDiagoPrinMas10(matriz3)
console.log(resSum)
