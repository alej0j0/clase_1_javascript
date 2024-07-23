
//alert("hola mundo")
let nombre = prompt("Por favor ingrese su nombre")
document.querySelector("div").innerText = nombre

const precioProducto = 10000
const precioProductor = "10000"
console.log(precioProducto)
console.log(precioProductor)

//object constructor:
const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

const p1 = new Producto("Casco", "verde esmerealda", "12000")
console.log(p1)