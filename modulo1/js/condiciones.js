/*

var edad = prompt("Ingrese su edad");

function calcularEdad(edad)
{
if(edad >= 18)
{
    console.log("Usted es mayor de edad");
    if(edad <= 33)
    {
        console.log("Usted es millenial",edad);
    } else if(edad >= 70)
    {
        console.log("usted es un anciano",edad);

    }else{
        console.log("Usted ya no es millenial",edad);
    }
}
else
{
    console.log("Usted es menor  de edad",edad);
}
}
calcularEdad(edad);
calcularEdad(23);
calcularEdad(89);
calcularEdad(15);
calcularEdad(67);

*/



/**Operadores de comparacion */

var a = 5;
var b = (5);
if (a==b){
    console.log("a y b son igual");
}
if (a===b){
    console.log("a y b son iguales en tipo y en vslor");
}
else{
    console.log("no son iguales en tipo y valor");
}

//** operador ternario */
var x = 5;
var y = 10;
if (a==b){
    console.log("",x);
}
else{
    console.log("",y);
}


var resultado = a==b? 10:20;
console.log(resultado);

var year = prompt("Introduzca un año");
var resultado1 = year != 2018? true : false ;
console.log(resultado1);

//** Switch */
 var day = prompt ("intruduzca un dia de la semana");
 function setDay(day){
     switch (day) {
     case "sabado":
         console.log("Voy a ir al cine");
    break;
    case "domingo":
    console.log("Voy a hacer deporte");
    break;
    case "lunes":
    console.log("Voy a trabajar");
    break;
    default:
    console.log("No es un dia valido");
 }
 }
setDay(day);
setDay(domingo);

