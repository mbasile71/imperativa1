//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!


let banco = {

clientes: arrayCuentas,

// BUSCAR CLIENTE POR NOMBRE
consultarCliente: function (cliente) {
  
  for(let i = 0; i < this.clientes.length; i++) {

    if (this.clientes[i].titularCuenta === cliente) {

          return this.clientes[i]
    }

  }
  
  return "Cliente no encontrado";

},

// DEPOSITO DE DINERO EN CUENTA
deposito: function (titular , cantidad){

  for(let i = 0 ; i < this.clientes.length ; i++){

    if(this.clientes[i].titularCuenta === titular){

        nuevoSaldo = this.clientes[i].saldoEnPesos + cantidad
        
      }

  }
    return nuevoSaldo

},

extraccion: function (nombre , monto) {

    for(let i = 0 ; i < this.clientes.length ; i++){

      if(this.clientes[i].titularCuenta === nombre){

        if(this.clientes[i].saldoEnPesos >= monto){

          nuevoSaldoExtraccion = this.clientes[i].saldoEnPesos - monto
          return `Estraccion realizada correctamente, su nuevo saldo es $ ${nuevoSaldoExtraccion}`

        }else{

          return 'Saldo insuficiente'
        
        }
                
        }

    }
    
},

}

//BUSCA NOMBRE SI EXISTE
//let buscaCliente = banco.consultarCliente("Ansel Ardley")
//console.log(buscaCliente)


//BUSCA CLIENTE Y SUMA SALDO DEPOSITADO
//let saldoNuevo = banco.deposito( "Jacki Shurmer", 11 )
//console.log(`Deposito realizado, su nuevo saldo es $ ${saldoNuevo}`)

let saldoDespExtraccion = banco.extraccion( "Jarret Lafuente" , 1000 )
console.log(saldoDespExtraccion)

//-----------------------------------------------------------------------



/*const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let encontrarGanador = (a, b)=> {
    let puntosA = 0
    let puntosB = 0
    for(i = 0 ; i < a.length; i++) {
        if (a[i] > b[i]) {
            puntosA += 1
        } else if (a[i] < b[i]){
            puntosB += 1
        } 
    } 
    return puntosA > puntosB ? `Ganó Alicia`: `Ganó Bob`
}

let verQuienGana = encontrarGanador(alicia, bob)
console.log(verQuienGana)*/

