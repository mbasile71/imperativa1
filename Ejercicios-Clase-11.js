//  EJECICIO SIN OBJETO LITERAL

/*const alicia = [10, 80, 75, 20]
const bob = [90, 90, 25, 30]
let puntosAicia = 0
let puntosBob = 0

let concurso = {

encontrarGanador: function(a, b){

    for( let i = 0 ; i < a.length ; i++){

        if( a[i] > b[i]){
            
            puntosAicia = puntosAicia + 1
            
        }else{

            puntosBob = puntosBob + 1

        }
        
    }
    return puntosAicia > puntosBob ? `"El Gandor es Alicia con ${puntosAicia} puntos"` : `"El Gandor es Bob con ${puntosBob}"`
    },


    etapas: function (a, b){

        for(let i = 0 ; i < a.length ; i++){

            if(a[i] > b[i]){

                console.log('Etapa ganada por Alicia')
            
            }else if(a[i] < b[i]){

                console.log('Etapa ganada por Bob')

            }else{

                console.log('Etapa Empatada')
            }
        }
        return("-------------------------")   
        },



}

let ganador = concurso.encontrarGanador(alicia, bob)
let resParciales = concurso.etapas(alicia, bob)
console.log(resParciales)
console.log(ganador)*/



// EJERCICIO BONUS EXTRA "DIGITAL HOUSE"

let multiplo = (a, b)=>{
if(a % b === 0){
    return true
}else{
    return false
}
}
let resultado1 = multiplo(5, 15)
console.log(resultado1)


let numero = 100

let digitaHouse = (a, b)=>{
for(let i = 1 ; i <= numero ; i++){
    console.log((i))
    if(a % (i) === 0){
        console.log("Digital")
        }else if(b % (i) === 0){
            console.log("House")
        }else if(a % (i) === 0 && b % (i) === 0){
            console.log("Digital House")
        }
    }
    return ("---------------------")
}

let resultado = digitaHouse(10, 5)
console.log(resultado)







