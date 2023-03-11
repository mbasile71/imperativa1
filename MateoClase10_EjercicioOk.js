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
    consultarCliente: function (cliente) {
        for(let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === cliente) {
                return this.clientes[i]
            }
        }
        return "Cliente no encontrado";
    },
    deposito: function (titular, dineroAdepositar) {
        let clienteEncontrado = this.consultarCliente(titular);
        clienteEncontrado.saldoEnPesos += dineroAdepositar;
        console.log(`Depósito realizado, su nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`);
    },
    extraccion: function (titular, montoAextraer) {
        let clienteEncontrado = this.consultarCliente(titular);
        if (clienteEncontrado.saldoEnPesos >= montoAextraer) {
            clienteEncontrado.saldoEnPesos -= montoAextraer;
            return console.log(`Extracción realizada correctamente, su nuevo saldo es: ${clienteEncontrado.saldoEnPesos};`)
        }
        return console.log("Fondos Insufucientes");
    }
}

let clienteEncontrado = banco.consultarCliente("Ansel Ardley");
console.log(clienteEncontrado);

banco.deposito("Jacki Shurmer", 1);

banco.extraccion("Jarret Lafuente", 10000);