const carrito = [
    {
        nombre : "Lenovo Thinkpad",
        descripcion : "Laptop para oficina",
        tipoProducto : "Computador portatil",
        modelo : "PV5",
        precio : {minimoVenta :300000,
                  compra : 120000
                 },
        caracteristicas : {dimensiones : {
                            alto : "3",
                            ancho : "50 cm",
                            largo : "30 cm"
                                         },
                           fabricacion : {
                            pais : "taiwan",
                            fecha : new Date(`2020-08-27`)
        
                        }
                    
        },     
        obtenerPrecioCompra : function(){
            return this.precio.compra
    }   
},
{
    nombre : "Xbox 360",
    descripcion : "Consola xbox 360",
    tipoProducto : "Consola de videojuegos",
    modelo : "fh3",
    precio : {minimoVenta :1500000,
              compra : 1000000
             },
    caracteristicas : {dimensiones : {
                        alto : "4",
                        ancho : "40 cm",
                        largo : "30 cm"
                                     },
                       fabricacion : {
                        pais : "china",
                        fecha : new Date(`2015-08-27`)
    
                    }
                
    },     
    obtenerPrecioCompra : function(){
        return this.precio.compra
}   
},
{
    nombre : "Play 5",
    descripcion : "Consola sony",
    tipoProducto : "Consola de videojuegos",
    modelo : "JN6",
    precio : {minimoVenta :400000,
              compra : 220000
             },
    caracteristicas : {dimensiones : {
                        alto : "1",
                        ancho : "30 cm",
                        largo : "30 cm"
                                     },
                       fabricacion : {
                        pais : "USA",
                        fecha : new Date(`2022-08-27`)
    
                    }
                
    },     
    obtenerPrecioCompra : function(){
        return this.precio.compra
}   
},
{
    nombre : "Lintendo Switch",
    descripcion : "Consola lintendo",
    tipoProducto : "Consola portatil",
    modelo : "LJ4",
    precio : {minimoVenta :8000,
              compra : 5000
             },
    caracteristicas : {dimensiones : {
                        alto : "1",
                        ancho : "5 cm",
                        largo : "10 cm"
                                     },
                       fabricacion : {
                        pais : "china",
                        fecha : new Date(`2023-08-27`)
    
                    }
                
    },     
    obtenerPrecioCompra : function(){
        return this.precio.compra
}   
},
{
    nombre : "PSP Sony",
    descripcion : "Consola Sony",
    tipoProducto : "Consola portatil",
    modelo : "JH5",
    precio : {minimoVenta :1000000,
              compra : 600000
             },
    caracteristicas : {dimensiones : {
                        alto : "1 ",
                        ancho : "5 cm",
                        largo : "10 cm"
                                     },
                       fabricacion : {
                        pais : "japon",
                        fecha : new Date(`2020-08-27`)
    
                    }
                
    },     
    obtenerPrecioCompra : function(){
        return this.precio.compra
}   
}
]


//punto 5.1 forEach


carrito.forEach((producto) => {
    const { nombre, tipoProducto, modelo, 
            caracteristicas: { dimensiones: { largo }, 
            fabricacion: { pais } } } = producto;
    console.log(`Nombre: ${nombre}, Tipo: ${tipoProducto}, Modelo: ${modelo}, Largo: ${largo}, País: ${pais}`);
});

//5.1 for of 
/*
for(producto of carrito)
    console.log(productos)

let productos = carrito
*/
for (let producto of productos) {
    const { nombre, tipoProducto, modelo, caracteristicas: { dimensiones: { largo }, fabricacion: { pais } } } = producto;
    console.log(`Nombre: ${nombre}`);
    console.log(`Tipo de producto: ${tipoProducto}`);
    console.log(`Modelo: ${modelo}`);
    console.log(`Dimensión largo: ${largo}`);
    console.log(`País de fabricación: ${pais}`);
    
}

//punto 6
//utilizando  el metodo reduce : reduce a un solo valor
//el arreglo con base en una expresion
let inventario = carrito.reduce((total, producto)=>{
    return total + producto.precio.compra
}, 0)

console.log(`El valor del inventario es: ${inventario}`)

//punto 7.1
// Consulta para productos fabricados en Japón
let productosChina = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === 'china';
});

console.log("Productos fabricados en china:" );
console.log(productosChina);

//punto 7.2

carrito.forEach((producto) =>{
    if(producto.caracteristicas.dimensiones.alto >=2 )
        console.log(producto.nombre)
})

//punto 7.3

let diez = carrito.filter((producto) => {
    return producto.precio.minimoVenta < 10000;
});

console.log("Productos con precio inferior a COP 10000:");
console.log(diez);




/*recorre el carrito de compras
//metodo forEach
carrito.forEach((producto) =>{
    if(producto.caracteristicas.fabricacion.pais === "japon")
    console.log(producto.nombre)
})*/


/*//filter : recorre el arreglo buscando elementos
//que concuerden con condicional establecida en el filtro
//creando un nuevo arreglo con los objetos que cumplen dicho criterio
let productosJapon = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === 'japon'

})
console.log(productosJapon)*/


/*
//calculos del total del inventario
let total = 0
carrito.forEach(producto =>{
    //acumular el valor de compra
    //de cada producto recorrido
    //en la variable total
    total += producto.precio.compra
})
console.log(`El valor del inventario es: ${total}`)
*/





/*metodo se transformacion map
let precioCompra = carrito.map((producto) =>{
    if(producto.caracteristicas.fabricacion.pais === "japon")
    return producto.precio.compra
})

console.log(precioCompra)
/*

/*ejecutar carrito
console.log(carrito[1].obtenerPrecioCompra())
imprimir nombre
console.log(carrito[1].nombre)*/