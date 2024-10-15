// 3-funciones.js

// 1. Tu primera función
// 1.1
function despedir() {
    console.log("Adiós");
}

// 1.2
function multiplicarPorDos(num) {
    return num * 2;
}

// 1.3
function esMayorDeEdad(edad) {
    return edad >= 18; // Retorna true si es mayor o igual a 18, false en caso contrario.
}

// 2. Parámetros
// 2.1
function multiplicar(a, b) {
    return a * b; // Multiplica dos números y retorna el resultado.
}

// 2.2
function saludarPersonalizado(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}`; // Retorna un saludo personalizado.
}

// 2.3
function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente); // Eleva la base al exponente y retorna el resultado.
}

// 2.4
function restar(a, b) {
    return a - b; // Resta b de a y retorna el resultado.
}

// 2.5
function dividir(a, b) {
    return a / b; // Divide a entre b y retorna el resultado.
}

// 3. Function Expression
// 3.1
const multiplicarDOS = function(a, b) {
    return a * b; // Multiplica dos números.
};

// 3.2
const saludar = function(nombre) {
    return `Hola, ${nombre}`; // Retorna un saludo para el nombre dado.
};

// 3.3
const esPar = function(num) {
    return num % 2 === 0; // Retorna true si el número es par, false en caso contrario.
};

// 4. Funciones Flecha
// 4.1
const multiplicarFlecha = (a, b) => a * b; // Multiplica dos números usando sintaxis de función flecha.

// 4.2
const saludarFlecha = nombre => `Hola ${nombre}`; // Retorna un saludo usando sintaxis de función flecha.

// 4.3
const calcularArea = radio => Math.PI * Math.pow(radio, 2); // Calcula el área de un círculo dado el radio.

// 5. Recursividad
// 5.1
function suma(n) {
    if (n <= 0) return 0; // Base de la recursión.
    return n + suma(n - 1); // Suma n y llama a la función de nuevo con n-1.
}

// 5.2
function fibonacci(n) {
    if (n <= 1) return n; // Retorna n si es 0 o 1.
    return fibonacci(n - 1) + fibonacci(n - 2); // Suma los dos números anteriores en la secuencia.
}

// 5.3
function factorial(n) {
    if (n <= 1) return 1; // Base de la recursión.
    return n * factorial(n - 1); // Multiplica n por el factorial de n-1.
}

// 5.4
function potencia(base, exponente) {
    if (exponente === 0) return 1; // Base de la recursión para exponente cero.
    return base * potencia(base, exponente - 1); // Multiplica base por la potencia de base con exponente - 1.
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
