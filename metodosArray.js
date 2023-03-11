/*let arrayFrase = [
  "No",
  "he",
  "fracasado,",
  "simplemente",
  "me",
  "he",
  "topado",
  "con",
  "diez",
  "mil",
  "soluciones",
  "equivocadas"
];

let fraseNueva = arrayFrase.join(' ')
console.log(fraseNueva)

//-----------------------------------------------


let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
  }
];

let alumnoEgresado = estudiantes.pop()
console.log(estudiantes)
console.log('-------------------------')
console.log(alumnoEgresado)

//-------------------------------------------


let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  },
]
console.log(estudiantes)
estudiantes.push({nombre: 'Juan', promedio: 5, curso: 'iOS'})
estudiantes.push({nombre: 'Miguel', promedio: 2, curso: 'Android'})
console.log(estudiantes)


//Ejercicio SLICE

let frase = 'Breaking Bad Rules!'
let resultado = frase.slice(-10)
console.log(resultado)


// EJERCICIOS PLAYGROUNd - 03 de marzo
// EJERCICIO 1

//let string = ""
let string1 = "http://www."
let dominio =(string)=>{
    return string1 + string
}
console.log(dominio("digitalhouse.com.ar"))


//EJERCICIO 2

let texto = "Hola soy un texto"
let cantLetras = texto.length
console.log(cantLetras)


//EJERCICIO 3

let a = 'Este texto es mala onda'
let b = 'mala'
let c = 'buena'

const reemplazoFastFast = () => {
  
  return a.replace (b , c)
}
console.log(reemplazoFastFast())

    
// EJERCICIO 4

let text = 'Existen muchos lenguajes de programación y JavaScript es uno de ellos'
let palabra = 'programación'

const menciona = ()=>{
    return text.includes(palabra)
    }

console.log(menciona())


//EJERCICIO 5

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(-5)
console.log(licenciada)


//EJERCICO DE CLASE 9 DE HECHOS POR JORGE

let frase = 'hola como estas?'

let numerosDeLaSuerte = [12, 23, 10, 45, 70]

let nombreMascotas = [ 'Toti', 'Walker', 'Cachito', 'Jack', 'Mad']

//let cant = nombreMascotas.length

const recorrerArr = (arr)=>{

  for(let i = 0 ; i < arr.length ; i++)
    console.log(arr[i])
}
//recorrerArr(nombreMascotas)     **PUEDO PASRLE A ESTA FUNCION (recorrerArr) EL ARREGLO QUE QUIERA!!!
//recorrerArr(numerosDeLaSuerte)
recorrerArr(frase)


//------------------------------------------


let nom = "Marcelo"

console.log(nom.toUpperCase())



// EJERCICIO DE REVERSE QUE HIZO JORGE EN LA CLASE 9

let array = [12, 15, 3, 21]



let invertirarray = (arr)=>{

  let arrayInvertido = []
  let long = arr.length

  for(let i = 0 ; i < long ; i++){

    arrayInvertido.push( arr.pop() )
  
  }
  return arrayInvertido
}
let res = invertirarray(array)
console.log(res)


// OTRO EJERCICIO DE CLASE - SUMAR LOS NUMEROS DEL ARREGLO

let numeritos = [5, 5 , 10, 20]

const calculadora = ()=>{
  
}


//EJERCICOS DE PRACTICA DE LINK CLASE 9

let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
//console.log(arrayAleatorio.length)
console.log(arrayAleatorio[arrayAleatorio.length - 1])*/

// EJERCICIO 

let peliculas = ["star wars", "totoro", "rocky", "pulp fictios", "la vida es bella"]

let pasarAMayusculas = (arr)=>{

let peliculasEnMay = []
let long = arr.length

for( let i = 0 ; i < long ; i++){

      peliculasEnMay.push( arr[i].toUpperCase()) 

}
return peliculasEnMay
}
let peliculasFinalMayusculas1 = pasarAMayusculas(peliculas)
console.log(peliculasFinalMayusculas1)



let peliculas2 = [ "toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"]

let peliculasFinalMayusculas2 = pasarAMayusculas(peliculas2)
console.log(peliculasFinalMayusculas2)




