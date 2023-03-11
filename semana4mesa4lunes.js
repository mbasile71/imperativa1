//EJERCICIO 1
//DA UNDEFINED. ESTE SERIA EL CODIGO CORRECTO QUECUENTA LOS ARRAYS (5)
let numbers = [22, 33, 54, 66, 72];
console.log(numbers.length);

//EJERCICIO 2: DEVUELVE EL 5TA POSICION DEL ARRAY QUE ES IRONMAN.
let grupoDeAmigos = [
  "Harry",
  "Ron",
  "Hermione",
  "Spiderman",
  "Hulk",
  "Ironman",
  "Penélope Glamour",
  "Pierre Nodoyuna",
  "Patán",
];
console.log(grupoDeAmigos[7]);

//EJERCICIO 3: DA ERROR POR CARACTERES INCORRECTOS ALP EGAR EL CODIGO:
// MODIFICADAS LAS COMILLAS DA UN STRING CUALQUIERA

let str = "un string cualquiera";
let arrayAleatorio = [
  "Digital",
  "House",
  "true",
  "string",
  "123",
  "false",
  "54",
  str,
];
console.log(arrayAleatorio[arrayAleatorio.length - 1]);

//COLECCIONES DE PELICULAS
// 1)
let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
console.log(peliculas[2]);

//PASAR A  MAYUSCULAS

function convertirMayusculas(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i].toUpperCase());
  }
  return resultado;
}

let peliculasMayusculas = convertirMayusculas(peliculas);

console.log(peliculasMayusculas);

//3. AGREGAR PELICULAS
peliculas.push(
  "toy story",
  "finding nemo",
  " kung fu panda",
  "wally",
  "fortnite"
);

console.log(convertirMayusculas(peliculas));

//4.SACANDO FORTNITE
let videjuego = peliculas.pop();
console.log(convertirMayusculas(peliculas));
