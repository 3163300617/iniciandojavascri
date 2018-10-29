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
