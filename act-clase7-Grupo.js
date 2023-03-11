// Ejercicio 1

console.log("Ejercicio 1");
const diezSiguientes = (num) => {

    for (let i = 1; i <= 10; i++) {
        console.log(num+i);
    }

}

diezSiguientes(10);

// Ejercicio 2

console.log("Ejercicio 2");
const tresEnTres = () => {
    
    for (let i = 5; i <= 20; i+=3) {
        console.log(i);
    }

}

tresEnTres();

// Ejercicio 3

console.log("Ejercicio 3");
const sumaDeCeroACien = () => {

    let resultado = 0;

    for (let i = 1; i <= 100; i++) {
        resultado +=i;
    }
    return resultado;
}

console.log(sumaDeCeroACien());

// Ejercicio 4

console.log("Ejercicio 4");
const factorial = (num) => {
    
    let resultado = 1;

    for (let i = 1; i <= num; i++) {
        
        resultado *=i;

    }
    console.log(resultado);
}

factorial(5);

// Ejercicio 5

console.log("Ejercicio 5");
const fibonacci = (numero) => {

    let num1 = 0;
    let num2 = 1;
    let suma = 1;

    for (let i = 1; i <= numero; i++) {

        console.log(suma);
        suma = num1 + num2;
        num1 = num2;
        num2 = suma;

    }

}

fibonacci(13);



