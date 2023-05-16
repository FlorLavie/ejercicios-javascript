/*Realizá un programa que permita validar una nota de examen. Se espera que la nota que el
usuario ingrese sea un número comprendido entre 0 y 10. La misma debe ser tantas veces ingresada
como sean necesarias hasta que quede comprendida dentro del rango descripto.*/

function nota() {
    let nota = parseInt(prompt("Ingrese una nota comprendida entre los numeros 1 y 10 por favor"));
    const NOTA_MINIMA = 0;
    const NOTA_MAXIMA = 10;

    while (nota < NOTA_MINIMA || nota > NOTA_MAXIMA) {
        alert("ERROR. Nota ingresada no esta en el rango entre el 0 y el 10")
        nota = parseInt(prompt("Ingrese una nota entre el 0 y el 10"));
    }

    alert(nota);
}


/*Realizá un programa que permita validar una nota de examen de la misma manera que el
ejercicio anterior, pero con las siguientes nuevas directivas:
▪ La nota 0 se reserva para los ausentes.
▪ Las notas 1 y 3 no se suelen poner nunca.*/


function notaDos() {
    let notaa = parseInt(prompt("Ingrese una nota comprendida entre los numeros 1 y 10 por favor"));
    const NOTA_MINIMAA = 0;
    const NOTA_MAXIMAA = 10;

    while ((notaa < NOTA_MINIMAA) || (notaa == 1 || notaa == 3) || (notaa > NOTA_MAXIMAA)) {
        alert("ERROR. Nota ingresada ES INVALIDA");
        notaa = parseInt(prompt("Ingrese una nota entre el 0 y el 10"));
    }

    alert(notaa);
}
notaDos();

/*Realizá un programa que permita validar una opción ingresada. La computadora preguntará al
usuario si desea continuar una operación de la forma "¿Deseás continuar? [S/N]". Se espera
que el usuario ingrese una 'S' o una 'N' (incluir las minúsculas). La opción debe ser tantas veces
ingresada como sean necesarias hasta que quede comprendida dentro de las posibilidades
esperadas. Realizá este ejercicio en dos versiones: con ciclo while y con ciclo do-while.*/

function validarOpcion() {

    let respuesta;
    let validez = false;

    do {
        respuesta = prompt("¿Desea continuar? [S/N]").toUpperCase();

        if (respuesta == "S") {
            alert(`Ud. decidió continuar la operación.`);
            validez = true;
        } else if (respuesta == "N") {
            alert(`Ud. decidió finalizar la operación.`);
            validez = true;
        }
    } while (!validez);




}

/*Realizá un programa que permita al usuario ingresar números hasta que se introduzca un 0. La
computadora debe mostrar el número máximo y el número mínimo.*/

function hastaIngresarElCero() {

    const CORTE = 0;

    let numero = parseInt(prompt("Ingrese un número , EL 0 FINALIZA"));
    let maximo = 0
    let minimo = 1000;

    while (numero != CORTE) {
        numero = parseInt(prompt("Ingrese otro número, EL 0 FINALIZA"));

        if (numero > maximo) {
            maximo = numero;
        }
        if (numero < minimo) {
            minimo = numero;
        }
    }
    alert(`El máximo fue: ${maximo}, y el mínimo: ${minimo}.`)

}

/*Realizá un programa que permita al usuario ingresar personas (para cada una, nombre y edad).
La carga termina cuando en el nombre de la persona se ingresa un asterisco ('*'). La computadora
debe indicar cómo se llama la persona más joven.*/

function personaMasJoven() {
    const CIERRE = "*";
    let nombre = prompt("ingrese nombre");
    let edad;

    let edadMasJoven = 150;
    let nombreMasJoven = "";

    while (nombre != CIERRE) {
        edad = parseInt(prompt("Ingrese edad de dicha persona"));
        if (edad < edadMasJoven) {
            edadMasJoven = edad;
            nombreMasJoven = nombre;
        }

        nombre = parseInt(prompt("ingresa el nombre de otra persona"));
    }

    alert(`La persona con la edad mas joven fue ${nombreMasJoven} con ${edadMasJoven} años`);

}

/*Realizá un programa que permita al usuario ingresar números mientras el promedio entre todos
los ingresados sea menor a 20. La computadora debe indicar la cantidad de valores leídos.*/

// do while , sabemos que se ejecutara al menos una vez el bucle

function validarPromedio() {
    let suma = 0;
    let cantidad = 0;
    let prom = 0;

    do {
        let numero = parseInt(prompt("ingrese numero"));
        suma += numero;
        cantidad++;
        prom = suma / cantidad;


    } while (prom < 20);

    alert(cantidad);
}


/*Realizá un programa que permita al usuario ingresar números enteros. Por cada carga debe
preguntar si se desea seguir ingresando, de la forma "¿Deseás ingresar otro número? [S/N]".
La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el
ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el porcentaje de
números pares ingresados.*/


function validarOpcionDos() {
    let numm;
    let respuesta;
    let validez = false;
    let cantidadPar = 0;
    let cantidadTotal = 0;


    do {
        numm = parseInt(prompt("Ingrese numero"));

        if (numm % 2 == 0) {
            par++;

        }

        respuesta = prompt("¿Desea continuar? [S/N]").toUpperCase();

        if (respuesta == "S") {
            alert(`Ud. decidió continuar la operación.`);
            validez = true;
        } else if (respuesta == "N") {
            alert(`Ud. decidió finalizar la operación.`);
            validez = true;
        }
    } while (!validez);

    let porcentaje = ((cantidadPar / cantidadTotal) * 100).toFixed(2);
    alert(`De los números ingresados el ${porcentaje}% son pares.`);



}


/*Realizá un programa que permita al usuario ingresar la cantidad de cierto artículo y el precio
unitario de dicho artículo. Por cada carga debe preguntar si se desea seguir ingresando de la forma
"¿Deseás ingresar otro artículo? [S/N]". La carga de datos finaliza cuando se detecta una
'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La
computadora debe mostrar el monto total del ticket..*/