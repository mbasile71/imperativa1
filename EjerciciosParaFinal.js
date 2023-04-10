// TODO FILTRAR LOS PRODUCTOS QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLO

let items = [
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
    stock: 5,
  },
];

const filtrarPorStock = (arr)=>{

let nuevoArr = []
for (let i = 0; i < arr.length; i++) {
  
    if(arr[i].stock < 10){
        nuevoArr.push(arr[i])
    }
    
}
return nuevoArr
}
let resultado1 = filtrarPorStock(items)
console.log(resultado1)



//-----------------------------------------------------------------
// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

let edades = [2, 12, 1, 5, 32, 56, 7];

const ordenarDesc = (arr)=>{

let aux = 0
for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr.length - 1; j++) {
        
        if(arr[j] < arr[j + 1]){
            aux = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = aux
        }
        
    }
    
}    
}
ordenarDesc(edades)
console.log(edades)



//------------------------------------------------------------------
// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

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

const ordenarArrAsc = (arr)=>{

let aux = 0
for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr.length - 1; j++) {
        
        if( arr[j].stock > arr[j + 1].stock){

            aux = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = aux
        }
    }
    
}    
}
ordenarArrAsc(productos)
console.log(productos)



//------------------------------------------------------------------
// DADA LA SIGUIENTE MATRIZ

let matriz1 = [
    [2, 4, 3],
    [3, 1, 5], // [9, 3, 15]
    [8, 4, 9],
  ];
  
  // TODO ---> UN SOLO CICLO
  // CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
  // CON TODOS LOS ELEMENTOS DE LA FILA 2 (multiplicados x 3)

const arrMultiPor3 = (arr, fila)=>{

let arrNew = []
for (let i = 0; i < arr[fila].length; i++) {
    arrNew.push(arr[fila][i] * 3)
    
}
return arrNew
}
let resultado2 = arrMultiPor3(matriz1, 1)
console.log(resultado2)
  


//---------------------------------------------------------
  let matriz2 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
  ];
  // TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS DE
  // LA COLUMNA 0, POR UN STRING QUE DIGA "hola"

const modifCol = (arr, col)=>{

for (let i = 0; i < arr.length; i++) {
    
    arr[i][col] = 'hola'
    
}
}  
modifCol(matriz2, 0)
console.table(matriz2)



//-----------------------------------------------------------------
// TODO CREAR UNA FUNCION QUE RETORNE EL TOTAL DE sumar TODOS
// LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL
let matriz3 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
  ];

const sumarDiagPrinc = (arr)=>{

let sum = 0    
    for (let i = 0; i < arr.length; i++) {
    
        sum += arr[i][i]
    }
    return sum
}
let resultado3 = sumarDiagPrinc(matriz3)
console.log(resultado3)
 
    
    
//-----------------------------------------------------------------------
// TODO CREAR UNA FUNCION QUE RETORNE EL TOTAL DE
// LA SUMA DE LA DIAGONAL SECUNDARIA
let matriz4 = [
    [2, 4, 5],
    [3, 1, 5],
    [8, 4, 9],
  ];
//mat[0][2]
//mat[1][1]
//mat[2][0]

const sumaDiagSecun = (arr)=>{

let sum = 0
    for (let i = 0; i < arr.length; i++) {
        
        sum += arr[i][arr.length - 1 - i]
        
    }
    return sum
}
let resultado4 = sumaDiagSecun(matriz4)
console.log(resultado4)



//-----------------------------------------------------------
let matriz5 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
  ];
// TODO --> ACA DOBLE FOR
// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR SU NEGATIVO

const cambiarPorNegativo = (arr)=>{

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i].length; j++) {
            
            arr[i][j] *= -1
            
        }
        
    }
}
cambiarPorNegativo(matriz5)
console.table(matriz5)