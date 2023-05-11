/*Realizá un programa que permita al usuario ingresar un número entero. La computadora debe
indicar si se trata de un número par o impar.*/


function esPar() {

    let numero = parseInt(prompt("Ingrese un numero."));

    if (numero % 2 == 0) {
        alert(`el numero${numero} es par`);
    } else {
        alert(`el numero${numero} no es par`);
    }

}


/*Realizá un programa que permita al usuario ingresar la cantidad de inscriptos a una conferencia
y la cantidad de asientos disponibles el auditorio. La computadora debe indicar si alcanzan los
asientos, en caso contrario, indicar cuántos faltan para que todos los inscriptos puedan sentarse.*/

function validarCupo() {

    let inscriptos = parseInt(prompt(`Ingrese cantidad de inscriptos`));
    let asientos = parseInt(prompt(`Ingrese cantidad de asientos`));

    if (asientos < inscriptos) {
        alert(`No hay asientos. Faltan ${inscriptos-asientos} asientos`)
    } else {
        alert(`hay asientos disponibles`);
    }
}


/*Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
indicar cuál de ellos es el mayor.*/


function calcularMaximoDeTres() {
    let num1 = parseInt(prompt(`Ingrese un numero entero`));
    let num2 = parseInt(prompt(`Ingrese otro numero entero`));

    if (num1 < num2) {
        alert(`El numero mayor es ${num2}`)
    } else if (num2 < num1) {
        alert(`El numero mayor es ${num1}`);
    } else {
        alert("ingreso el mismo numero");
    }
}


/*Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe
indicar cuál de ellos es el mayor.*/

function numeroMaximo() {

    let numero1 = parseInt(prompt(`Ingrese un numero entero`));
    let numero2 = parseInt(prompt(`Ingrese un numero entero`));
    let numero3 = parseInt(prompt(`Ingrese un numero entero`));
    const mensaje = "El mayor es";

    if ((numero1 == numero2) && (numero1 == numero3)) {
        alert(`No hay numero mayor entre los tres`)
    } else {
        if (numero1 > numero2) {
            if (numero1 > numero3) {
                alert(`${mensaje}${numero1}`)
            } else {
                alert(`${mensaje}${numero3}`)
            }
        } else if (numero2 > numero3) {
            alert(`${mensaje}${numero2}`);

        } else {
            alert(`${mensaje}${numero3}`);
        }

    }


    /*Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género
    ('F' para mujeres, 'M' para hombres). La computadora debe indicar si la persona está en edad de
    jubilarse1. En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido),
    informar tal situación.*/

    function jubilacion() {

        const MAX_EDAD = 120;
        const MIN_EDAD = 1;
        const EDAD_FEM = 60;
        const EDAD_MASC = 65;
        const EDAD_INV = "La edad INGRESADA es invalida";
        const GENERO_INV = "El genero es invalido";

        let edad = parseInt(prompt(`Por favor, ingrese su edad en años.`));

        if (edad > MAX_EDAD || edad < MIN_EDAD) {
            alert(EDAD_INV);
        } else {
            let genero = prompt(`Ingrese genero F o M`);
            if (genero != "M" && genero != "F") {
                alert(GENERO_INV);

            } else {
                if ((edad >= EDAD_MASC) || (edad >= EDAD_FEM && genero == "F")) {
                    alert("Puede jubilarse")
                }
            }


        }

    }


    /*Realizá un programa que permita al usuario ingresar la edad y el sueldo de cierto empleado. La
    computadora muestra el monto del aporte al sindicato que se debe descontar del salario del
    empleado, según el siguiente cuadro: MENOS DE 20000 0.7% -  ENTRE 20000 Y 29000 1.4% - ENTRE 30000 Y 39000 2.1% - 40000 O MAS 4.8%*/

    function aporte() {

        const CATE1 = 20000;
        const CATE2 = 30000;
        const CATEG3 = 40000;

        const APORTE1 = 0.007;
        const APORTE2 = 0.014;
        const APORTE3 = 0.021;
        const APORTE4 = 0.028;

        const EDAD_LIMITE = 30;
        const ADICIONAL_EDAD = 1.3;

        let edadd = parseInt(prompt("Ingrese la edad del empleado"));
        let suueldo = parsefloat(prompt("ingrese sueldo del empleado"));

        let aporte = 0;

        if (suueldo < CATE1) {
            aporte = sueldo * APORTE1;
        } else if (suueldo < CATE2) {
            aporte = suueldo * APORTE2;
        } else if (suueldo < CATE3) {
            aporte = suueldo * APORTE3;
        } else {
            aporte = sueldo * APORTE4;
        }

        if (edad <= EDAD_LIMITE) {
            aporte = aporte * ADICIONAL_EDAD;
        }

        alert(`El aporte de ese empleado es de ${aporte}`);
    }
}


/*8) Realizá un programa que permita al usuario ingresar tres números. La computadora debe
mostrarlos ordenados de menor a mayor.*/

function ordenamiento() {


    let num_1 = parseInt(prompt("Ingrese un numero entero"));
    let num_2 = parseInt(prompt("Ingrese un segundo numero entero"));
    let num_3 = parseInt(prompt("Ingrese un tercer numero entero"));

    let num_menor;
    let num_medio;
    let num_mayor;


    if (num_1 < num_2 && num_1 > num_3) {
        num_menor = num_1;
        if (num_2 < num_3) {

            num_medio = num_2;
            num_mayor = num_3;
        } else {
            num_medio = num_3;
            num_mayor = num_2;
        }

    } else if (num_2 < num_1 && num_2 > num_3) {
        num_menor = num_2;
        if (num_1 < num_3) {

            num_medio = num_1;
            num_mayor = num_3;
        } else {
            num_medio = num_3;
            num_mayor = num_1;
        }
    } else {
        num_menor = num_3;
        if (num_1 < num_2) {
            num_medio = num_1;
            num_mayor = num_2

        } else {
            num_medio = num_2;
            num_mayor = num_1;
        }
    }

    alert(`El orden es ${num_menor},${num_medio},${num_mayor}`)
}


//Hacer:

/*Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
indicar si el mayor es divisible3 por el menor.*/


/*Realizá un programa que permita al usuario ingresar los lados a, b y c de un triángulo. La
computadora informa si el triángulo es o no válido4. En caso afirmativo, además informa si es
equilátero, isósceles o escaleno.5*/

/*Flujo de selección múltiple (SWITCH)
10) Realizá un programa que permita al usuario ingresar un número entero entre 1 y 12. La
computadora debe mostrar por pantalla el nombre del mes del año que representa tal número. Si se
ingresa un número fuera de rango, debe mostrar un error. 

11) Realizá un programa que permita al usuario ingresar una letra, correspondiente a un dígito del
sistema de numeración romanos.La computadora debe mostrar su correspondiente valor decimal.
Si se ingresa una letra inexistente, la computadora debe informar que no existe tal dígito. 

12) Realizá un programa que permita al usuario ingresar el día y el mes de su cumpleaños (de manera
independiente). La computadora debe indicar cuál es su signo del zodiaco. Deben validarse tanto el
día como el mes. */