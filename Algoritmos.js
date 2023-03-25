// ANCHOR ---> MODULO 3 <Algoritmos />

// TODO ---> CREAR UNA FUNCION QUE RECIBA 2 NUMEROS Y DEVUELVA EL MAYOR
// SI SON IGUALES QUE DEVUELVA CUALQUIERA DE LOS 2

/*let devolverMayor = (num1, num2)=>{
    if (num1 > num2) {
        return num1
    }else{
        return num2
    }
}
let elMayor = devolverMayor(10, 5)
console.log(elMayor)*/


// IDEM EJERCICIO PERO CON TERNARIO

let devolverMayor = (num1, num2)=> num1 > num2 ? num1 : num2

let elMayor = devolverMayor(20, 30)
console.log(elMayor)


// 15, 17, 26, 40 - DEVOLVER EL MAYOR REUTILIZANDO LA FUNCION ANTERIOR

let elMayordeTodos = devolverMayor(devolverMayor(15, 17), devolverMayor(26,40))
console.log(elMayordeTodos)
