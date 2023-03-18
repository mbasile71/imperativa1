// ANCHOR ---> Repaso de condicionales y ciclos
// ANCHOR ---> Repaso de arreglos y objetos

// const productos = require("./db.json")


/*let productos = [
    {
      nombre: "motorola",
      precio: 40,
      cantidad: 5,
      categoria: "telefonia",
    },
    {
      nombre: "notebook",
      precio: 80,
      cantidad: 10,
      categoria: "computacion",
    },
    {
      nombre: "zapatilla",
      precio: 20,
      cantidad: 2,
      categoria: "indumentaria",
    },
    {
      nombre: "Macbook",
      precio: 100,
      cantidad: 7,
      categoria: "computacion",
    },
    {
      nombre: "samsung",
      precio: 60,
      cantidad: 15,
      categoria: "telefonia",
    },
    {
      nombre: "monitor",
      precio: 30,
      cantidad: 5,
      categoria: "computacion",
    },
  ];
  
  // TODO ---> Simulacion frontend E-commerce
  
  /* 
  1)Las personas encargadas del backend nos enviaron una lista de productos pero 
      se olvidaron de asignarles un ID unico para cada producto,
      nuestra tarea es agregarles ese ID unico a cada uno
      Requisito: debe empezar en 1 y ser secuencial 
  2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
      si se venden todos los productos que tenemos en stock
  3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
      X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
  4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
      especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
      multiplicar dicho precio (Aumentar 15% = Precio * 1.15)
  


      let agregarId = (arreglo)=>{
        for (let i = 0; i < arreglo.length; i++) {
            arreglo[i].id = i + 1
            
        }
      }
      agregarId(productos)
      //console.log(productos)


      let dineroTotalVenta = (arreglo)=>{
        let sumatoria = 0
        for (let i = 0; i < arreglo.length; i++) {
            sumatoria += arreglo[i].precio * arreglo[i].cantidad
            
        }
        return sumatoria
      }
      let TotalVentas = dineroTotalVenta(productos)
      //console.log(TotalVentas)


      let filtrarPorCategorias = (arreglo, categ)=>{
        let productosFiltrados = []
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].categoria === categ){
                productosFiltrados.push(arreglo[i])
            }
            
        }
        return productosFiltrados
      }
      let arrayFiltradoCategorias = filtrarPorCategorias(productos, 'telefonia')
      console.log(arrayFiltradoCategorias)


      let aumentoPorCategoria = (arreglo, categ, porcenaje)=>{
        
        for (let i = 0; i < arreglo.length; i++) {
            if(arreglo[i].categoria === categ){
                arreglo[i].precio *=  porcenaje
            }
                        
        }
        
      }
      aumentoPorCategoria(productos, 'telefonia', 1.15)
      console.log(productos)*/




      // EJERCICIOS DE CLASE 12 PASADOS POR EL PROFE LOOP DE PARES, ETC....


      //LOOP DE PARES

      /*const loopDePares = (numero)=>{
        
        for (let i = 1; i <= 100; i++){
          let res = i + numero          
          if(res % 2 === 0){
            console.log(`El numero ${i} es par`)
            res = 0
          }else{
            console.log(i)
          }
        }

      }
      loopDePares(11)*/



      // LOOP DE IMPARES

      /*const loopDeImpares = (numero, palabra)=>{
        for (let i = 0; i <= 100; i++) {
          let suma = i + numero
          if(suma % 2 !== 0){
            console.log(palabra)
            suma = 0
          }else{
            console.log(i)
          }
        }
      }
      let resultado = loopDeImpares(10, 'Hola')
      console.log(resultado)*/


      // SUMATORIA

      /*const sumatoria = (numero)=>{
        let sumatoria = 0
        for (let i = 1; i <= numero; i++) {
          sumatoria += i
          
        }
        return sumatoria
      }
      let sumaTotal = sumatoria(6)
      console.log(sumaTotal)*/


      // NUEVO ARREGLO

      const nuevoArreglo = (numero)=>{
        let Arreglo = []
        for (let i = 1; i <= numero; i++) {
          Arreglo.push(i)
          
        }
      return Arreglo
      }
      let resultadoArreglo = nuevoArreglo(20)
      console.log(resultadoArreglo)

      




