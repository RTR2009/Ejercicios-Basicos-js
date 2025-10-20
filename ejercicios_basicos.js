// === Ejercicios Básicos de JavaScript ===

// 1. Declara variables con tu nombre, edad y ciudad usando let y const
const nombre = "RENE TERAN ROQUE";
let edad = 40;
const ciudad = "Cochabamba";
console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);

// 2. Variables de diferentes tipos
let cadena = "Bievenidos";
let numero = 10;
let booleano = true;
let nulo = null;
let indefinido;
console.log(cadena, numero, booleano, nulo, indefinido);

// 3. Conversión string ↔ número
let strNumero = "123";
let convertido = Number(strNumero);
let convertidoStr = convertido.toString();
console.log(convertido, typeof convertido);
console.log(convertidoStr, typeof convertidoStr);

// 4. Calculadora simple
function calculadora(a, b) {
  console.log(`Suma: ${a + b}`);
  console.log(`Resta: ${a - b}`);
  console.log(`Multiplicación: ${a * b}`);
  console.log(`División: ${a / b}`);
}
calculadora(10, 5);

// 5. Área de un círculo
const areaCirculo = (r) => Math.PI * r ** 2;
console.log("Área del círculo:", areaCirculo(7));

// 6. Par o impar
let num = 8;
console.log(num % 2 === 0 ? "Par" : "Impar");

// 7. Positivo, negativo o cero
let valor = -3;
if (valor > 0) console.log("Positivo");
else if (valor < 0) console.log("Negativo");
else console.log("Cero");

// 8. Mayor de edad
let edadPersona = 17;
console.log(edadPersona >= 18 ? "Mayor de edad" : "Menor de edad");

// 9. Día de la semana
function diaSemana(num) {
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  return dias[num - 1] || "Número inválido";
}
console.log(diaSemana(4));

// 10. Año bisiesto
function esBisiesto(año) {
  return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
}
console.log(esBisiesto(2024) ? "Bisiesto" : "No bisiesto");

// 11. Números del 1 al 10
for (let i = 1; i <= 10; i++) console.log(i);

// 12. Números pares del 0 al 20
for (let i = 0; i <= 20; i += 2) console.log(i);

// 13. Tabla de multiplicar
let tabla = 5;
for (let i = 1; i <= 10; i++) console.log(`${tabla} x ${i} = ${tabla * i}`);

// 14. Suma del 1 al 100
let suma = 0;
for (let i = 1; i <= 100; i++) suma += i;
console.log("Suma del 1 al 100:", suma);

// 15. Triángulo de asteriscos
let filas = 5;
for (let i = 1; i <= filas; i++) console.log('*'.repeat(i));

// 16. Contar vocales
function contarVocales(palabra) {
  return (palabra.match(/[aeiou]/gi) || []).length;
}
console.log("Vocales en 'javascript':", contarVocales("javascript"));

// 17. Invertir cadena
function invertir(cadena) {
  return cadena.split('').reverse().join('');
}
console.log(invertir("hola"));

// 18. Palíndromo
function esPalindromo(palabra) {
  let limpia = palabra.toLowerCase().replace(/\s/g, '');
  return limpia === limpia.split('').reverse().join('');
}
console.log(esPalindromo("Anita lava la tina"));

// 19. Primera letra en mayúscula
function capitalizar(frase) {
  return frase.replace(/\b\w/g, l => l.toUpperCase());
}
console.log(capitalizar("hola mundo desde javascript"));

// 20. Contar palabras
function contarPalabras(frase) {
  return frase.trim().split(/\s+/).length;
}
console.log("Cantidad de palabras:", contarPalabras("Hola desde Bolivia"));

// 21. Array con 5 números: mayor y menor
let numeros = [12, 45, 3, 98, 25];
console.log("Mayor:", Math.max(...numeros));
console.log("Menor:", Math.min(...numeros));

// 22. Suma de elementos de un array
let sumaArray = numeros.reduce((a, b) => a + b, 0);
console.log("Suma del array:", sumaArray);

// 23. Nuevo array con el doble de cada número
let doble = numeros.map(n => n * 2);
console.log("Array con el doble:", doble);

// 24. Eliminar duplicados
let repetidos = [1, 2, 2, 3, 4, 4, 5];
let sinDuplicados = [...new Set(repetidos)];
console.log("Sin duplicados:", sinDuplicados);

// 25. Ordenar array de menor a mayor
let desordenado = [9, 3, 7, 1, 5];
console.log("Ordenado:", desordenado.sort((a, b) => a - b));
