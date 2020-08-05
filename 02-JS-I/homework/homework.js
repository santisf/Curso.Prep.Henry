// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "agusti";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 24;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str// "Return" la string provista: str
  // Tu código:
}

function suma(x, y) {
 var suma = x + y;
 return suma // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}

function resta(x, y) {
 var resta = x - y;
 return resta // Resta "x" de "y" y devuelve el valor
  // Tu código:
}

function multiplica(x, y) {
  var multiplica = x * y;
  return multiplica// Multiplica "x" por "y" y devuelve el valor
  // Tu código:
}

function divide(x, y) {
  var divide = x / y;
  return divide// Divide "x" entre "y" y devuelve el valor
  // Tu código:
}

function sonIguales(x, y) {{
  var sonIguales = false;
  if(x === y){ sonIguales = true };
  return sonIguales;// Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
}}

function tienenMismaLongitud(str1, str2) {{
  var compararLongitud = false;
  if(str1.length == str2.length){
    compararLongitud = true;
  }
  return compararLongitud;
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}}

function menosQueNoventa(num) {{
  var menosNoventa = false;
  if(num < 90){
    menosNoventa = true;
  }
  return menosNoventa;
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
}}

function mayorQueCincuenta(num) {{
  var mayorCincuenta = false;
  if(num > 50) {
mayorCincuenta = true;
  }
  return mayorCincuenta;
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
}}

function obtenerResto(x, y) {
  var resto = x % y;
  return resto;
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
}

function esPar(num) {{
  var par = false;
  if(num % 2 === 0){
    par = true;
  }
  return par;
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
}}

function esImpar(num) {{
  var impar = false;
  if(num % 2 !== 0){
    impar = true;

  }
  return impar;
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}}

function elevarAlCuadrado(num) {
  var cuadrado = num * num;
  return cuadrado;
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
}

function elevarAlCubo(num) {
  var cubo = Math.pow(num, 3);
  return cubo;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
}

function elevar(num, exponent) {
  var elevado = Math.pow(num, exponent);
  return elevado;
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
}

function redondearNumero(num) {
  var redondeado = Math.round(num);
  return redondeado;
  // Redondea "num" y devuélvelo
  // Tu código:
}

function redondearHaciaArriba(num) {
  var redondeadoArriba = Math.ceil(num);
  return redondeadoArriba;
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
}

function agregarSimboloExclamacion(str) {
  var str1 = str + "!";
  return str1;
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  var nombreC = nombre + " " + apellido;
  return nombreC
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = "Hola ";
  var saludoNombre = saludo + nombre + "!";
  return saludoNombre;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return area;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
