/*function ejemplo(){
    return "hola, soy una funcion loca"
}
console.log(ejemplo())

/*let ejemplo = function(){
    return "hola, soy una funcion ok"
}
console.log(ejemplo())*/

/*let ejemplo = function(){
    return "hola, soy una funcion expresada"
}
console.log(ejemplo())*/

/*function anterior(x){
    return x - 1
}
console.log(anterior(10))

function triple(x){
    return x * 3
}
console.log(triple(10))*/

/*function anteriorDelTriple(x){
    function triple(x){
        return x * 3
    }
    return x * triple
}
console.log( anteriorDelTriple(10) )



// CLASE ESTACION DESERVICIO - CLASE 6

let totalAPagar = (vehiculo, litrosConsumidos) => {
    let total_1 = 0;
  
    if (vehiculo == "coche") {
      total_1 = litrosConsumidos * 86;
    } else if (vehiculo == "moto") {
      total_1 = litrosConsumidos * 70;
    } else if (vehiculo == "autobus") {
      total_1 = litrosConsumidos * 55;
    }
  
    if (litrosConsumidos <= 25) {
      total_1 += 50;
    } else {
      total_1 += 25;
    }
    return total_1;
  };
  console.log(totalAPagar("moto", 100));
  
// FIBONACCHI = 0 1 1 2 3 5 8 13


// PRUEBAS FOR

const loro = ()=>{
  for(let repe = 1; repe <= 5; repe++){
      console.log('Soy un loro')
  }
}
loro()

//------------------------------------

function noParesDeContarImparesHasta(numero){
  let impares = 0
  for(let ini = 1; ini <= numero; ini++){
      if(ini % 2 !== 0){
          impares += 1
      }
  }return impares
}
console.log(noParesDeContarImparesHasta(10))

// MOSTRAR LA TABLA DEL NUMERO INGRESADO

function tablaDeMultiplicar(numero) {
  multiplicador = 1
  for(veces = 1; veces <= 10; veces++){
   resultado = numero * multiplicador
   console.log(numero + '*' + multiplicador + '=' + resultado )
   multiplicador ++ 
   } 
   return resultado
}
let tabla = tablaDeMultiplicar(3)
console.log(tabla)

// EJERCICIO DE PLAYGROUND - WHILE

function tablaDeMultiplicar(numero){
  
  let i = 1
  
  while(i <= 10){

    console.log( numero + ' * ' + i + ' = ' (numero * i))
  
    i ++ 
    return numero
  } 
  
}
console.log(tablaDeMultiplicar(2))


 // Ejercicios de Clase7

 let mostrar10Siguientes = (numero)=>{

  for(let i = 1; i <= 10; i ++){
   resultado = numero + 1
   numero ++
   console.log(resultado)
  }
 }
 mostrar10Siguientes(10)


 // Otro Ejercicios de Clase7

 let sumatoria = ()=>{

    let suma = 0

    for(let i = 1; i <=3; i++){
    
      suma = suma + i
           
    }
    return suma
 }
 let total = sumatoria()
 console.log(total)


 //Otro Ejercicios de Clase7

 let factorial = (numero)=>{
  
  let resultado = 1
  
    for(let i = 1; i <= numero; i++){

      resultado = resultado * i
    }
    return resultado
 }
 let total = factorial(5)
 console.log(total)



 // EJERCICIO 4 PLAYGROUND (RETORMAR EL TRIPLE MENOS UNO)

let anterior = (x)=>{
  return x - 1
}
let ant =(anterior())

let triple = (x)=>{
  return x * 3
}
let porTres = (triple())

let anteriorDelTriple = (x)=>{
  return anterior( triple(x) )
}
let resultado = anteriorDelTriple(50)
console.log(resultado)*/


// FUNCION LORO - REPITE 5 VECES LA PALABRA LORO

let loro = ()=>{
 
  for(let repe = 1; repe <= 5; repe++){
      console.log('Soy un loro')
  }
}
loro()
