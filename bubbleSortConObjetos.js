let arrayCuentas = [
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      titularCuenta: "maria",
      saldoEnPesos: 8675,
    },
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      titularCuenta: "pepito",
      saldoEnPesos: 27771,
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jack",
    },
  ];

// ORDENAR EL ARREGLO DE OBJETOS POR SALDO DE CUENTAS

const ordenarPorSaldos = (array)=>{

    let aux

    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length - 1; j++) {
            
            if(array[j].saldoEnPesos < array[j + 1].saldoEnPesos){

                aux = array[j]
            array[j] = array[j + 1]
            array[j + 1] = aux
            }
            
        }
        
    }
}
ordenarPorSaldos(arrayCuentas)
console.log(arrayCuentas)


//--------------------------------------------------------------

//DEVOLVER UN BOOLEANO DICEINDO SI EL ARREGLO ESTA ORDENADO ASCENDENTE
let numeros = [1, 2, 8, 5, 18]; 

const estaOrdenado =(arr)=>{

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {

            if(arr[j] > arr[j + 1]){

                return false 

            }
        }
        
    }
    return true
}
let result = estaOrdenado(numeros)
console.log(result)
