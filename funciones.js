// FUNCION EXPRESADA

let suma = function( numeroA, numeroB ){
    return numeroA + numeroB
}
console.log(suma(10, 5))

// Otro Ejercicio

let multip = function(x, y){
    return x * y
}

console.log(multip(10, 5))


// FUNCION DECLARADA

function resta(numeroC, numeroD){
    return numeroC - numeroD
}

console.log(resta(10,5))

//SCOPE LOCAL

let saludo = "Holis"
let ver = function (valor){
    //let saludo = "Hola, que tal?"
    return "saludo"
}
console.log(ver())