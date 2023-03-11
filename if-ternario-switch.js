// TERNARIO

let fruta = 'Naranja'

let resultado = fruta == 'Naranja'? 'Buenisimo ma gustan las narajas': 'Que pena'

console.log(resultado)


// SWITCH

let semaforo = 'fdfd'

switch (semaforo){
    case 'verde':
        console.log('Podes cruzar')
        break
    
    case 'amarillo':
        console.log('Precaucion')
        break
        
    case 'rojo':
        console.log('Peligro - No CruzaRRRR')
        break

    default:
        console.log('El semaforo no FUNCIONA')    
        break
}

// EJERCICIOS

let dia = 'lunes'
function finDeSemana (dia) {
	switch (dia){
		case 'viernes':
			return 'buen finde'
			break
		case 'lunes':
			return 'buena semana'
			break
		default:
			return 'buen dia'
				
	}
}
let frase = finDeSemana(dia)
console.log(frase)


//-----------------------------------------

let clases = 'viernes'
function tengoClases(clases) {
	switch (clases) {
    	case 'lunes': 
			return 'tenés clases es lunes'
			break

		case 'miercoles': 
		return 'tenés clases es martes'
			break	

		case 'viernes':
			return 'tenés clases es viernes'
			break	

		default:
			return 'no tenés clases hoy'
			break		
	}
}
let devolucion = tengoClases(clases)
console.log(devolucion)


// EJERCICIOS DE LA CLASE 6

// DETERMINAR SI PEPITO ES MAYOR DE EDAD

let esMayorA18 = ( edadPepito )=> {
	
	let texto = undefined

	if ( edadPepito >= 18){
		texto = 'Pepito es Mayor'
	}else{
		texto = 'Pepito es Menor'
	}
	return texto
}
let mostrar = esMayorA18(25)
console.log(mostrar)


// MISMO EJERCICO PERO CON USO DE ${}

let edad = 23
let mayorEdad = ( edad )=>{

	let txt = ''

	if( edad >= 18){
		txt = 'mayor'
	}else{
		txt = 'menor'
	}

	return 'El usuario es '${txt}' de Edad'
}

let result = mayorEdad(edad)
console.log(result)








