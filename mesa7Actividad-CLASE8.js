//Ejercicio 2

let nombre = "Marcelo";

const saludo = (nombre) => {
    console.log(`Hola ${nombre}!`);
}

saludo(nombre);


//Ejercicio 3

let num1 = 25;
let num2 = 50;

const suma = (num1, num2) => {
    return num1 + num2;
}

console.log(suma(num1,num2));


//Ejercicio 4

let anioNacimiento = 1971;

const edad = (anioNacimiento) => {

    let anioActual = 2023;
    let edadActual = anioActual - anioNacimiento;

    console.log(`Tienes ${edadActual} años.`);
}

edad(anioNacimiento);


//Ejercicio 5

let intento = 8;

const adivinarNumero = (intento) => {
    let numeroCorrecto = 8;
    if (intento === numeroCorrecto) {
        console.log("Felicitaciones, ese era!");
    } else {
        console.log("Lo siento, intenta nuevamente!");
    }
}

adivinarNumero(intento);


//Ejercicio 6

const pares = () => {

    for(let i = 0; i <= 100; i++){
        if(i%2 === 0) {
            console.log(i);
        }
    } 
}

pares();


//Ejercicio 7

let numero = 85;

const cuantoFalta = (numero) => {

    let dosCifras = 10-numero;
    let tresCifras = 100-numero;

    if (numero < 10) {
        console.log(`Te faltan ${dosCifras} para llegar a ser un número de 2 cifras. `);
    } else if (numero < 100) {
        console.log(`Te faltan ${tresCifras} para llegar a ser un número de 3 cifras. `);
    } else {
        console.log(`Ingresa un numero de hasta 2 cifras`);
    }

}

cuantoFalta(numero);

//Ejercicio 9

let ene = 5;

const sumaHastaEne = (ene) => {

    let resultado = 0;

    for (let i = 0; i<ene; i++) {
        resultado += i;
    }

    return resultado;
}

console.log(sumaHastaEne(ene));