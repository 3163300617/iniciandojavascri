
/* var rep =prompt("Ingrese el numero de repeticiones");
for (let index = 0; index < rep; index++) {
    console.log(index);
}*/
//**leer 10 numeros por teclado e imprimir si son pares y si es multiplo de tres */


/*for (let index = 0; index < 10; index++) {
    var rep = prompt("ingrese un numero de repeticiones");
    if (rep % 3 == 0) {
      console.log(" es multiplo de tres",rep);
    }
    if(rep%2==0){
        console.log("es par",rep);
    }
     else {
      console.log(" es impar.",rep);
    }
  }*/

  //**ciclo while */

  /*realizar la sumatoria de numeros por pantalla, cuando el numero sea iguañ a cero me debe 
  imprimir el resultado de la sumatoria9 */

  /*
  var numero=prompt("ingrese el numero");
  var suma=0;
  debugger;
  while (numero!=0){
      suma=suma+numero;
      numero=prompt("ingrese el numero");
  }
  console.log("la sumatoria de todos los numeros es:",suma);
*/

//**do while */

  var suma=0;
  do{
      var numero=prompt("ingrese numero");
      suma+=numero;
  }
  while (numero!=0);