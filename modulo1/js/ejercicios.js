//**tipo de variables */

/*

var name="carlos";
console.log("El tipo de name es:",typeof name);

var age=20;
console.log("El tipo de age es:",typeof age);

var active=true;
console.log("El tipo de active es:",typeof active);

*/

//**conversiones numericas */

/*

var age1=parseInt(prompt("ingrese edad"));
if(isNaN(age1)){
    alert("no es valido");
}
else{
    alert("su edad es:"+ age1)
}

*/

/* 1) Mostrar la sumatoria y el promedio de los numeros introducidos por pantalla hasta que 
el numero sea negativo */

/*

var summation= 0;
var average= 0;
var counter=0;
var number=25;
debugger;
while (number>0){
    number=parseInt(prompt("ingrese un m+numero"));
    if(!isNaN(number) && number>=0){
        counter++;
        summation+=number;
    }
}
average=summation/counter;
alert("la sumatoria es:"+summation+"el promedio es:"+average);

*/

/*mostrar todos los numeros que hay entre un rango inicial y un rango final
suministrado por el usuario */

/*

var irank=parseInt(prompt("ingrese el rango inicial"));
var frank=parseInt(prompt("ingrese el rango final"));
if(!isNaN (irank) && !isNaN(frank) && irank>0 && irank<frank){
    document.write("<h1>De "+irank+" hasta "+frank+" existen los siguientes numeros:</h1> ");
    for (let index = irank; index <= frank; index++) {
        if(index%2==0){
            console.log("es par",index);
        document.write("<b>"+index+"</b><br>");
    }
    }

}

*/

/*
var number=parseInt(prompt("ingrese el numero"));
document.write("<h1>los multiplos de "+ number +" </h1> ");
for (let index = 0; index < number; index++) {
    if(number%index==0){
        document.write("<b>"+index+"</b><br>");
    }
}

*/

/*

var numero=parseInt(prompt("ingrese el numero"));
while (isNaN(numero)){
    alert("ingrese un numero")
    numero=parseInt(prompt("ingrese el numero"));
}
if(numero%2==0){
    alert("es par");
}
else{
    alert("es impar");
}

*/
//**crear un usuario y una contraseña */

/*
var user="dayana";
var password="123456";
var count=0;
var usernew=parseInt(prompt("enter your user"));
var passwordnew=parseInt(prompt("enter your password"));
while(usernew!=user && passwordnew !=password ){
    alert("the user or password does not match");
    var usernew=parseInt(prompt("enter your user"));
    var passwordnew=parseInt(prompt("enter your password"));
    count++;
    if(count>=5){
        alert("user blocked");
        break;
    }
}
*/

var table=parseInt(prompt("ingrese la tabla de multiplicar que quiere ver"));
while(isNaN(table) || table<=0){
    var table=parseInt(prompt("ingrese la tabla de multiplicar que quiere ver"));
}
var tablenew=parseInt(prompt("hasta cual tabla quiere ver"));
while(isNaN(tablenew)|| table<=0){
    var tablenew=parseInt(prompt("hasta cual tabla quiere ver"));
}
document.write("<h1>la tabla del "+table+" </h1>");

var count=0;
function multypli
for (count = 1; count <= 10; count++) {
	tabel=table*count;
document.write(table+"x"+count+"="+tabel+ "<br>");
}
document.write("<br>");
document.write("<h1>estas son todas las tablas hata el "+tablenew+" </h1>");

