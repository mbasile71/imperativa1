/*let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY

console.table(arrayMatriz)

/*console.log(arrayMatriz.length)
for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i])
}*/


//IMPRIMIR PRIMERA FILA
/*console.log(arrayMatriz[0].length)
for (let columna = 0; columna < arrayMatriz[0].length; columna ++) {
    console.log(arrayMatriz[0][columna])
}*/


//IMPRIMIR PRIMERA COLUMNA
/*for (let fila = 0; fila < arrayMatriz.length; fila ++) {
    console.log(arrayMatriz[fila][0])
}*/


//RECORRER TODA LA MATRIZ - POR FILA    
/*for (let fila = 0; fila < arrayMatriz.length; fila ++) {
    
    for (let columna = 0; columna < arrayMatriz[fila].length; columna ++) {
        
        console.log(arrayMatriz[fila][columna])
        
    }
}*/


/*//RECORRER TODA LA MATRIZ - POR COLUMNA
console.log(arrayMatriz[0].length)
console.log(arrayMatriz.length)
for (let columna = 0; columna < arrayMatriz[0].length; columna ++) {
    
    for (let fila = 0; fila < arrayMatriz.length; fila ++) {
        
        console.log(arrayMatriz[fila][columna])
    }
    
} */

/*function generarMatriz10por10(long) {
  let num = 1;

  let mat = []; 

  for (let i = 0; i < long; i++) {

    for (let j = 0; j < long; j++) {
        
      mat.push([i][j]);
      num++;
    }
  }

  return mat;
}

let matriz10por10 = generarMatriz10por10(10);
console.log(matriz10por10);*/


//  EJERCICIOS QUE EL PROFE HIZO EN CLASE

let matrix = [
    [1, 2, 5],
    [3, 5, 7],
    [4, 7, 8],
  ];  

  //LINK --> CUANDO RECORRO UNA FILA , LA FILA ES ESTATICA Y LA COLUMNA DINAMICA
// CUANDO RECORRO UNA FILA LE PIDO LA LONGITUD a LA FILA
  // RECORRER UNA FILA Y SUMAR SUS ELEMENTOS
  /*let suma = 0
  let nFila = 0
  let recorrerFila = (mat, fila) =>{
    for (let i = 0; i < mat[fila].length; i++) {
        suma += mat[fila][i] 
        nFila = mat[fila]
        
    }
    return suma
  }
  let resultado = recorrerFila(matrix, 2)
  console.log(`Recorrido de la fila ${nFila} suma ${resultado}`)*/



  //LINK --> CUANDO RECORRO UNA COLUMNA , LA FILA ES DINAMICA Y LA COLUMNA ESTATICA
// CUANDO RECORRO UNA COLUMNA LE PIDO LA LONGITUD a LA MATRIZ
// RECORRER COLUMNA Y SUMAR ELELMENTOS

let matrix2 = [
    [1, 2, 5],
    [3, 5, 7],
    [4, 7, 8],
  ];  

/*let suma1 = 0
let numFila = 0  
let recorrerColumna = (mat, col)=>{
    for (let i = 0; i < mat.length; i++) {
        suma1 += matrix2[i][col]
        numFila = [col]
    }
return suma1
}
let resultado1 = recorrerColumna(matrix2, 2)
console.log(`Recorrido de la fila ${numFila} suma ${resultado1}`)*/


//RECORRER LA MATRIZ CUANDO FALTAN ELELMENTOS
let matrix3 = [
    [1, 2, 5],
    [3,  , 3],
    [4, 7, 8],
  ];  

/*let acc = 0
let recorrerMatriz = (mat, col)=>{
    for (let i = 0; i < mat.length; i++) {
        if(mat[i][col] !== undefined){
            acc += matrix3[i][col]
        }    
    }
    return acc
}
let res = recorrerMatriz(matrix3, 1)
console.log(res)*/


//recorrer toda la matriz y sumarla
let matrix4 = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 10],
    ]; 
    let sumaMatriz = 0
    let sumarTodaMatriz = (mat)=>{
    for (let i = 0; i < mat[0].length; i++) {
        for (let j = 0; j < mat.length; j++) {
            sumaMatriz += mat[i][j]
            
        }
    }
    return sumaMatriz
    }
    let result = sumarTodaMatriz(matrix4)
    console.log(result)

