/*Realizá un programa que muestre todos los números enteros del 1 al 100, y luego, los mismos
números, pero en orden inverso.*/


function mostrarconFor() {

    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}


/*Realizá un programa que permita al usuario ingresar dos números enteros num1 y num2, donde el
primero siempre deberá ser menor o igual al segundo. La computadora debe mostrar la secuencia
de números existentes entre ambos: EXCLUYENDOLOS, INCLUYENDOLOS*/


function secuenciaEntreNumeros() {
    let num1 = parseInt(prompt(`Ingrese un numero entero`));
    let num2 = parseInt(prompt(`Ingrese otro numero entero menor al ingresado`));

    let orden1, orden2;

    if (num1 < num2) {
        orden1 = num1;
        orden2 = num2;
    } else {
        orden1 = num2;
        orden2 = num;
    }

    for (let i = (num1 + 1); i <= (num2 - 1); i++) {
        console.log(i)
    }

    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}


/*Realizá un programa que permita al usuario ingresar un número entero n entre 1 y 10. La
computadora debe mostrar la tabla de multiplicar de n.*/


function multiplicacion() {

    let numero = parseInt(prompt(`Ingrese un numero entero entre 1 y 10`));

    for (i = 0; i >= 10; i++) {
        alert(numero * i);
    }
}


/*Realizá un programa que permita al usuario ingresar un número natural n. La computadora debe
mostrar los primeros n múltiplos de 3 excepto aquellos que sean a la vez múltiplos de 5.*/


function multiplos() {

    let numeroNatural = parseInt(prompt(`Ingrese un numero natural (que no sea 0)`));







}


/*Realizá un programa que permita al usuario ingresar 5 edades. La computadora debe indicar
cuántas edades fueron valores impares mayores que 18.*/

function edadesImpares() {

    const EDADES = [];
    let cantidad = 0;

    for (let i = 0; i < 5; i++) {
        EDADES[i] = parseInt(prompt(`Ingrese una edad`));

        if ((EDADES[i] > 18) && (EDADES[i] % 2 != 0)) {
            cantidad++;
        }
    }

    console.log(`La cantidad de edades mayores a 18 e impares son= ${cantidad}`);
}


/*Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que
permita ingresar cant números reales, correspondientes a las ventas realizadas por cierto
vendedor. La computadora debe mostrar el total de las ventas.*/

function ventas() {

    let cant = parseInt(prompt(`Ingrese un numero entero`));
    let suma = 0;

    for (i = 0; i < cant; i++) {
        let ValorVenta = parseFloat(prompt(`Ingrese el valor de la venta`));
        suma += ValorVenta;
    }

    alert(`El total de laventas es de ${suma}`);


}


/*Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que
permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores
de baloncesto (en metros). La computadora debe mostrar la estatura promedio.*/


function estaturaPromedio() {


    let cantidadJugadores = parseInt(prompt("Ingrese la cantidad de jugadores en el equipo."));
    let estaturaAcumulado = 0;
    let estaturaActual = 0;

    for (i = 0; i < cantidadJugadores; i++) {
        let estatura = parseFloat(prompt("Ingrese estatura del jugador"))
        estaturaAcumulado += estaturaActual;
    }



    alert(`La estatura promedio del equipo es de ${(estaturaAcumulado / cantidadJugadores).toFixed(2)}mts.`);

}

/*Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que
permita ingresar cant números enteros. La computadora debe mostrar cuál fue el mayor número y
en qué posición apareció.*/

/*Realizá un programa que permita al usuario ingresar un número natural. La computadora debe
mostrar el factorial1 del número.*/