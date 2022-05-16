let vuelta1: number = Number(prompt("Ingrese tiempo de la vuelta 1"));
let vuelta2: number = Number(prompt("Ingrese tiempo de la vuelta 2"));
let vuelta3: number = Number(prompt("Ingrese tiempo de la vuelta 3"));
let vuelta4: number = Number(prompt("Ingrese tiempo de la vuelta 4"));
let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let promedioVuelta: number = tiempoTotal / 4;

console.log("El tiempo de la vuelta 1 es:", vuelta1);
console.log("El tiempo de la vuelta 2 es:", vuelta2);
console.log("El tiempo de la vuelta 3 es:", vuelta3);
console.log("El tiempo de la vuelta 4 es:", vuelta4);
console.log("El tiempo promedio de vuelta es:", promedioVuelta);
console.log("El tiempo total de carrera es:", tiempoTotal);
