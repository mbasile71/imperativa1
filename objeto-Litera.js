/*// EJERCICIO PLAYGROUN 2

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cant){
        deportista.energia = (deportista.energia) - (5 * cant)
        deportista.experiencia = (cant * 2) + (deportista.experiencia)
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);*/


//----------------------------------------------------------------------------

//BASTICK - ALT + 96

/*// EJERCICIO DE EJEMPLO EN CLASE POR JORGE - CLASE 10

let persona = {
    nombre: 'marcelo',
    edad: 52,
    esCasado: true,
    hablar: function(){
        return 'estoy hablando'
    },
    correr: function(){
        return `estoy corriendo y me llamo ${this.nombre}`
    },
}
console.log(persona)

//AGREGO Y MODIFICO AL OBJETO
persona.dni = 22352502
persona.peso = 85
persona.nombre = 'marcelo javier'
persona.hablar = function(){
    return 'cambio al estoy hablando'
}
persona.dormir = function(){
    return `soy ${this.nombre} y estoy durmiendo, no MOLESTAR`
}

//ELIMINAR UN OBJETO
delete persona.dni

console.log(persona)
console.log(persona.hablar())
console.log(persona.dormir())*/


//-----------------------------------------------------------------------
// REALIZAR UN LISTADO DE ALUMNOS
// CADA ALUMNO DEBE TENER NOMBRE, NOTA, UN METODO CALCULAR EL PROMEDIO

/*let alumnos = [
    {
        nombre: 'marcelo',
        notas: [7,12,8,],
        calcularPromedio: function(){
            let suma = 0
            for(let i = 0 ; i < this.notas.length ; i++){
                suma = suma + this.notas[i]
            }
            let promedio = suma / this.notas.length
                        
            return promedio
        },
        estaAprobado: function(){
            let promFinal = this.calcularPromedio()
            if(promFinal >= 7){
                return true
            }else{
            return false
            }
        },
    },
    {
        nombre: 'maria',
        notas: [7,3,5],
        calcularPromedio: function(){
            let suma = 0
            for(let i = 0 ; i < this.notas.length ; i++){
                suma = suma + this.notas[i]
            }
            return suma / this.notas.length
        },
        estaAprobado: function(){
            let promFinal = this.calcularPromedio()
            if(promFinal >= 7){
                return true
            }
            return false
            
        },
    },
]
// let resultado = alumnos[0].calcularPromedio()  MUESTRA LA POSICION QUE YO LE INDIQUE
// console.log(resultado)

// REALIZO UN FOR PARA QUE RRECORRA TODO EL ARRAY

let mostrarTodosPromedios = arr=>{
    for( let i = 0 ; i < arr.length ; i++){

        console.log(`El promedio de ${arr[i].nombre} es de ${arr[i].calcularPromedio()} Esta aprobado=${arr[i].estaAprobado()}`)
    }
}
mostrarTodosPromedios(alumnos)*/



//--------------------------------------------------------------

// EJERCICIO MESA DE TRABAJO CLASE 10 - BANCO



