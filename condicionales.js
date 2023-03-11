let edad = 18
let acceso = ''

if (edad < 16){
    acceso = 'Prohibido'
}
    else if (edad >=16 && edad <=18){
        acceso = 'Acceso Permitido con un Mayor'
    }
        else{
            acceso = 'Permitido'
        }

let resAcceso = acceso        
console.log( resAcceso )   

//----------------------------------------------

let dato = false

if (dato == true){
    console.log( 'es true' )
}else{
    console.log( 'es false' )
}

//---------------------------------------------

let lenguaje = "javascript";

if (lenguaje == 'javascript'){
    console.log( 'Estoy aprendiendo' )
} else{
    console.log( 'Lo aprenderé más adelante' )
}

//-----------------------------------------------

function puedePasar(nombre) {

    if (puedePasar == 'Cosme Fulanito'){
        return 'false'
        } else{
        return 'true' 
    }
}
console.log( puedePasar('Cosme Fulanito') )