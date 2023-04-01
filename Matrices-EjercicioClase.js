let gastos = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const calcularTotalSemana = (matriz, semana)=>{
let posSemana = semana - 1
let acc = 0

    for (let i = 0; i < matriz[posSemana].length; i++) {
        acc += matriz[posSemana][i]
         
    }
    return acc
}
let resSumaSemana = calcularTotalSemana(gastos, 3)
console.log(resSumaSemana)



//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TODOS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

const sumarDiaDeLaSemana = (matriz, dia)=>{
    let diaSemana = dia - 1
    let acc = 0

        for (let i = 0; i < matriz.length; i++) {
            acc += matriz[i][diaSemana]
            
        }
        return acc
}
let resSumaDia = sumarDiaDeLaSemana(gastos, 6)
console.log(resSumaDia)


//TODO
// CALCULAR EL TOTAL GASTADO DEL MES

const totalGastosMes = (matriz)=>{
let acc = 0

    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
           
            acc += matriz[i][j]
            
        }
        
    }
    return acc 
}
let restotalGastos = totalGastosMes(gastos)
console.log(restotalGastos)




// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?
let gastos1 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
  ];
   
const gastoMaximo = (mat)=>{
    let mayor = mat[0][0]
    let semana = 0
    let dia = 0
    let dias = ['lunes','martes','miercoles', 'jueves','viernes','sabado','domingo']
    
    for (let i = 0; i < mat.length; i++) {
        
        for (let j = 0; j < mat[i].length; j++) {
            
           if(mayor < mat[i][j]){          //CUANDO BUSCO EL MAXIMO EL SIGNO ES EL < "MENOR"
            mayor = mat[i][j]
            semana = i + 1
            dia = dias[j]
            
            }
           }
        }
        //return `El importe maximo gastado es $${mayor}, la semana es la ${semana} y el dia ${dia} `
        return {
            dia: dia,
            semana: semana,
            total: mayor
        }
}
let resultadoMaxGasto = gastoMaximo(gastos1)
console.log(resultadoMaxGasto)


//------------------------------------------------------------------




