/*Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la
cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal,
asumiendo que trabaja todos los días hábiles y media jornada los sábados. */

let salarioPorHora = parseInt(prompt(`Ingrese el valor salarial de una hora de trabajo`));
let cantidadHoras = parseInt(prompt(`Ingrese horas trabajadas por dia`));

let jornadaCompleta = salarioPorHora * cantidadHoras * 5;
let jornadaMedia = salarioPorHora * cantidadHoras / 2;
let salarioSemanal = jornadaCompleta + jornadaMedia;

alert(`El salario semanal del empleado va a ser de ${salarioSemanal}`);





/*Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a
y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar
entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas. */

let valor1 = parseInt(prompt(`Por favor, ingrese un numero`));
let valor2 = parseInt(prompt(`Por favor, ingrese un segundo numero`));

alert(`Los datos ingresados son: valor1 = ${valor1} valor2=${valor2}`)

let aux = valor1;
valor1 = valo12;
valor2 = aux;

alert(`Los datos intercambiados son: valor1 = ${valor1} valor2=${valor2}`)




/*Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la
cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000
más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo
mensual del vendedor y mostrarlo. */


let precioUnitario = parseFloat(prompt(`Por favor, ingrese el valor unitario del articulo`));
let cantidadVendida = parseInt(prompt(`Por favor, ingrese la cantidad vendida`));
const salarioFijo = 14000;
const comisionVenta = 0.16;

let comision = precioUnitario * cantidadVendida * comisionVenta;
let salarioTotal = salarioFijo + comision;

alert(`El salario neto de este emplelado es ${salarioTotal}.`);




/*Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros
y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la
cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas. */

let ancho = parseInt(prompt(`Ingrese el ancho en metros`));
let largo = parseInt(prompt(`Ingrese el largo en metros`));

let valorMetroCuadrado = parseFloat(prompt(`Ingrese el valor del metro cuadrado`));

let superficieTerreno = ancho * largo;
alert(`el terreno vale ${valorMetroCuadrado*superficieTerreno}`);

let perimetro = (2 * ancho) + (2 * largo);
let cantidadAlambre = 3 * perimetro;




/*Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
mostrar los resultados de las 4 operaciones matemáticas básicas con tales números. */


let num1 = parseInt(prompt(`Ingrese numero entero`));
let num2 = parseInt(prompt(`Ingrese un segundo numero entero`));

alert(`la suma de los numeros es= ${num1+num2}, la multiplicacion es=${num1*num2}, la resta es= ${num1-num2}, y la division es= ${num1/num2} `);