// EJERCICIO 1

let restarPares = (num1, num2)=>{

    if(num1 % 2 === 0 && num2 % 2 ===0){
        return `Los dos numeros son pares y el resultado es ${num1 - num2}`

    }else{
        return "Lo siento, uno o mas parámetros no cumple con la condición de ser un número par"

    }

}
let resultadoEj1 = restarPares(20, 18)
console.log(resultadoEj1)


//-----------------------------------------------------------
// EJERCICIO 2

let controlIngreso = (edad, entrada)=>{

    if(entrada === "si" && edad >= 18){

        return true

    }else if(entrada === "si" && edad < 18){

        return "Sólo puedes acceder con un adulto acompañante"
    }

    return false

    }

    let resultadoEj2 = controlIngreso(19, "si")
    console.log(resultadoEj2)


    // EJERCICIO 3

    let productos = [
        {
            producto : "remera",
            tipo: "indumentaria",
            precio: 2100
        },
        {
            producto : "notebook",
            tipo: "tecnologia",
            precio: 200000
        },
        {
            producto : "celular",
            tipo: "tecnologia",
            precio: 27000
        },
        {
            producto : "protector solar",
            tipo: "cosmetica",
            precio: 2500
        },
        {
            producto : "pantalon",
            tipo: "indumentaria",
            precio: 7500
        },
        {
            producto : "tablet",
            tipo: "tecnologia",
            precio: 60000
        },
       
    ]
    
    let filtroTecnologia = (arr)=>{

        let prodFiltrados = []

        for (let i = 0; i < arr.length; i++) {
            
            if( arr[i].tipo === "tecnologia" && arr[i].precio >= 50000){

                prodFiltrados.push(arr[i])
            }
            
        }
        return prodFiltrados
    }
    let resultadoEj3 = filtroTecnologia(productos)
    console.log(resultadoEj3)





