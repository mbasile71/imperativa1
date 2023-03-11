/*let laMitad = numero => numero / 2

console.log( laMitad(10) )


let dividir = (num1, num2) => num1 / num2

console.log( dividir(15, 5) )*/

let esMultiplo = (a, b) => {
    let resto = a % b  //Obtengo el Resto
    return resto == 0  //Si el Resto es 0 es multiplo
}
console.log( esMultiplo(15, 3) )

let saludo = () => "Hola Mundo"
console.log( saludo() )

let horaActual = () => {
    let fecha = new Date()
    return fecha.getHours() + " : " + fecha.getMinutes()
}
console.log( horaActual() )
