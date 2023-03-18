// ANCHOR ---> ULTIMO REPASO, VAMOS QUE SE PUEDE 💪💪💪

// TODO ---> CREAR UNA FUNCION QUE RECIBA DOS NUMERO, LOS MULTIPLIQUE Y RETORNE
// LO SIGUIENTE : SI EL RESULTADO ES PAR ("es par") sino ("es impar")

let multiplicar = (num1, num2)=>{
    let resultado = num1 * num2

    if(resultado % 2 === 0){
        return `El numero ${resultado} es PAR`
    }else{
        return `El numero ${resultado} es IMPAR`
    }

    //USO DE TERNARIO  return resultado % 2 === 0 ? `El numero ${resultado} es PAR` : `El numero ${resultado} es IMPAR`
}
let condicion = multiplicar(5, 6)
console.log(condicion)


//-----------------------------------------------

// TODO ---> ENCONTRAR EL MENOR NUMERO DEL ARREGLO

let num = [12, 3, 24, 2, 54, 100, 50];

let buscarMenor = (arr)=>{
    let menor = arr[0]
    let indice = 0

for (let i = 1; i <= arr.length; i++) {
        if(menor > arr[i]) {
        menor = arr[i]
        indice = i + 1

    }
    
}
return `El numero menor es ${menor} y su posicion es ${indice}`
}
let numeroMenor = buscarMenor(num)
console.log(numeroMenor)


//-------------------------------------------------------------

// TODO ---> Agregar al siguiente objeto el metodo promediar
// El mismo debera calcular el promedio en base a la propiedad NOTAS

let estudiante = {
    nombre: "Carmen",
    notas: [8, 6, 10],
    edad: 20,
  };

  estudiante.promediar = function(){
    let sumaNotas = 0
    for (let i = 0; i < this.notas.length; i++) {
        
        sumaNotas += this.notas[i]
        
    }
    return sumaNotas / this.notas.length
  };
  
  let promedio = estudiante.promediar()
  console.log(promedio)


  //-------------------------------------------------------------

  // TODO ---> Encontrar el primer elemento que cumpla con la condicion de
// haber ganado un ticket y que ademas sea mayor de edad( 18 años o mas )
// deberas retornar dicho elemento

let participantes = [
    {
      nombre: "Florencia",
      edad: 22,
      ganoTicket: false,
    },
    {
      nombre: "Juan Pablo",
      edad: 17,
      ganoTicket: true,
    },
    {
      nombre: "Fernando",
      edad: 31,
      ganoTicket: false,
    },
    {
      nombre: "Guillermina",
      edad: 27,
      ganoTicket: true,
    },
    {
      nombre: "Gabriel",
      edad: 32,
      ganoTicket: true,
    },
  ];

  let primerGanador = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].ganoTicket === true && arr[i].edad >= 18){
            return arr[i]
        }
        
    }
    return 'No encontrado'
  }

  let primerGanadorMayor18 = primerGanador(participantes)
  console.log(primerGanadorMayor18)


  //--------------------------------------------------------

  // TODO ---> Dado el siguiente arreglo de socios de una empresa
// se nos solicita filtrar a aquellos que tengan un total de
// 1500 acciones o mas, pero ademas, ser parte de la empresa desde antes
// de este año( los del 2023 no cuentan)
// Devolver un arreglo con dichos socios

let socios = [
  {
    nombreCompleto: "Joel Perez",
    añoDeEntrada: 2018,
    cantidadAcciones: 3200,
  },
  {
    nombreCompleto: "Juan Lopez",
    añoDeEntrada: 2022,
    cantidadAcciones: 4100,
  },
  {
    nombreCompleto: "Carmen Lopettegi",
    añoDeEntrada: 2023,
    cantidadAcciones: 1900,
  },
  {
    nombreCompleto: "Ernesto farias",
    añoDeEntrada: 2019,
    cantidadAcciones: 1300,
  },
  {
    nombreCompleto: "Juana Gimenez",
    añoDeEntrada: 2023,
    cantidadAcciones: 1200,
  },
];

let filtrarSocios = (arr)=>{
  
  let nuevoArr = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].cantidadAcciones >= 1500 && arr[i].añoDeEntrada < 2023){

      nuevoArr.push(arr[i])  
    }
        
  }
  return nuevoArr
}

let arregloFiltrado = filtrarSocios(socios)
console.log(arregloFiltrado)