// EJERCICIO 1

const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]

const autoMayor2020 = (arr)=>{

    let nuevoArreglo = []

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i].modelo >= 2020)

        nuevoArreglo.push(arr[i])
        
    }
    return nuevoArreglo
}
let arrMay2020 = autoMayor2020(autos)
console.log(arrMay2020)


//--------------------------------------------------------------------
//EJERCICIO 2

let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

const ordenarNotaPromedio = (arr)=>{

    let aux;
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {
            
            if(arr[j].notaPromedio < arr[j + 1].notaPromedio){

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
        
    }
}
ordenarNotaPromedio(estudiantes)
console.log(estudiantes)



//--------------------------------------------------------------------------
//EJERCICIO 3 (1)

let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

const elemColumna = (mat, col)=>{

    let newColumna = []

    for (let i = 0; i < mat.length; i++) {
        
        newColumna.push(mat[i][col]) 
        
    }
    return newColumna
}
let newArrayCol = elemColumna(matrix, 2)
console.log(newArrayCol)


//-------------------------------------------------------------
//EJERCICIO 3 (2)

/*let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]*/

const imparesXCero = (mat)=>{

    for (let i = 0; i < mat.length; i++) {
        
        for (let j = 0; j < mat[i].length; j++) {
            
            if(mat[i][j] % 2 !== 0){

                mat[i][j] = 0

            }
        }
        
    }
}
imparesXCero(matrix)
console.table(matrix)


