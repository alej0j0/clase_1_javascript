//definir un arreglo de nombres de producto
const nombres = ["casco", "guantes", "licra"];
//agregar elementos al arreglo:
nombres[3] = "zapatos"
console.table(nombres)
console.log(nombres[2])
//agregar elementos al final:
nombres.push("gafas")
//agregar elementos al inicio
nombres.unshift("cosa inicial")
//eliminar elementos de un arreglo
delete nombres[3]
//eliminar elemento del final
nombres.pop();
//eliminar elementos del principio
nombres.shift()

for( let i=0 ; i<nombres.length ; i=i+1){
    console.log(nombres[i])
}

//operador spread con arreglos
let productos = [...nombres]
const elemento = "compas"
productos = [...productos, elemento]
const transportador = "transportador"
productos = [ ...productos, transportador]


console.table(productos)


