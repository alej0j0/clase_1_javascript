//ejemplo
//sintaxis: declaracion de funcion
function saludo(nombre){
    console.log(`hola ${nombre} ¿como estas?`);
}
//invocar, llamar,
saludo("Alejandro")//->argumento

//sintaxis: expresion funcion:
//se asigna a constante
const saludo2 = function(nombre){
    console.log(`hola ${nombre} como estas`)
}
saludo2("Roberto")