//***pedir datos por teclado */

var nombre = prompt("Ingrese su nombre");
console.log("Este es mi nombre",nombre);
alert(nombre);

var edad = prompt("Ingrese su edad");
console.log("Esta es mi edad",edad);
alert(edad);

//** variables numericas */

var num = 5;
console.log("num",num)

//** variables de texto */

var palabras = "palabras";
console.log("palabras",palabras);

//** variables booleanas */

var activo = true;
console.log("activo",activo);

//** variables tipo arreglo */

var colores = ["red","cyan",activo,num];
console.log("colores",colores);

//** variables tipo objeto u object */

var vehiculo = {
    tipo:"automovil",
    modelo:2018,
    usado:true
};
console.log("vehiculo",vehiculo);
console.log("tipo de vehiculo",vehiculo.tipo);

var nombre = "carlos";
console.log("nombre",nombre);
nombre=true;
console.log("nombre",nombre);
nombre=20;
console.log("nombre",nombre);


//** diferencias entre var y let */

var apellido="lola";
console.log("apellido",apellido);
nombre=14;
console.log("apellido numerico",apellido);
if (true){
    apellido="pinches";
    console.log("apellido dentro del if",apellido);
}


