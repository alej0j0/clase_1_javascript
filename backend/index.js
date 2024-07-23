console.log("Carrito de compras");
//crear nombre de producto, sintaxis camel case
/* Templete string:
Alternativa a la concatenacion
Permite incrustar un valor dentro de un String*/
const nombreProducto = new String("iphone de mauricio")
console.log(`El producto es: ${nombreProducto}`)
const precioProducto = 10000
const precioProductor = "10000"

console.log(precioProducto)
console.log(precioProductor)

console.log(precioProducto === precioProductor)

/*objeto producto:
  Objeto literal:*/
const producto1 = {
    nombre : "iphone 45",
    color : 'Dorado',
    modelo : 'tupu4',
    decripcion : 'dragon volador',
    precio : 3453534534539,
    getModelo: function(){
        console.log(this.modelo)
    }
}

producto1.imagen = "imagen.jpg"
console.log(producto1)

//acceder a los atributos del objeto
console.log(producto1.decripcion)

//sin desestructuracion
nombrecillo = producto1.nombre
console.log(nombrecillo)

//con desestructuracion
const { decripcion, precio } = producto1;
console.log("Descripcion del producto:", decripcion, ",", "Valor del producto:", precio)

//object constructor:
const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de producto
const p1 = new Producto("Casco", "verde esmerealda", "12000")
console.log(p1)
//operador spread

const medidas = {
    "peso": "57 kg",
    "altura": "157 cm",
    "largo": "70 cm"
}


const newProducto = {...producto1, ...medidas} 